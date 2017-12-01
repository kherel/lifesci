const path = require('path');
require('app-module-path').addPath(path.join(process.cwd(), 'src'));
require('./globals')
const compression = require('compression')
const mime = require('mime');
const handleSubscribe = require('./utils/subscribe')
const bodyParser = require('body-parser')

// const serveStatic = require('serve-static')
// const fs = require('fs.extra');

require('babel-core/register');
require('babel-polyfill');
['.css', '.less', '.sass', '.ttf', '.woff', '.woff2', '.scss', '.svg'].forEach((ext) => require.extensions[ext] = () => {
});

const port = process.env.PORT || 8080;

const express = require('express')
const application = express();
application.use(compression());

application.use(bodyParser.json())
application.post('/subscribe', handleSubscribe)

application.use(express.static('static', {
  setHeaders: function (res, path) {
    let cType = mime.lookup(path)
    res.set({
      "Content-Type": cType
    })
  } }
));

application.set('views', __dirname)
application.set('view engine', 'ejs')

if (__DEVELOPMENT__) {
  const webpack = require('webpack');
  const config = require('../../webpack.config.js').default;
  const webpackDev = require('webpack-dev-middleware')
  const webpackHot = require('webpack-hot-middleware')
  const compiler = webpack(config)
  application.use(
    webpackDev(
      compiler,
      {
        hot: true,
        publicPath: config.output.publicPath,
        stats: {colors: true}
      }
    )
  )

  application.use(webpackHot(compiler))
}

application.get('/robots.txt', function (req, res) {
  res.type('text/plain');
  res.send("User-agent: *\nDisallow: /");
});

if(process.env.NO_SSR){
  application.get('*', require('./noSSR').default)
}else{
  application.get('*', require('./render').default)
}

application.listen(port, (err) => {
  if (err) console.log(err);
})
