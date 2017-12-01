import React, {Component} from 'react';
import './styles.scss';
import {cssClassName} from 'utils'
const cn = cssClassName('HomeHero')
import A_Container from 'A_Container'
import A_Button from 'A_Button'
import A_H from 'A_H'
import A_P from 'A_P'
import dynamics from 'dynamics.js'

class Hero extends Component {

  componentDidMount() {
    this.updateCanvas();
  }
  updateCanvas() {
    const ctx = this.canvas.getContext('2d');

    const center = [250, 250];
    const iterations = 70;

    const angleForIteration = (i) => {
      return i / iterations * Math.PI * 2;
    }

    const tForIteration = (i) => {
      return i / iterations;
    }

    const easeInOut = (t) => t<.5 ? 4*t*t*t : (t-1)*(2*t-2)*(2*t-2)+1;

    const createBezier = (pointsCount) => {
      const points = [];

      const initialPoint = Math.random();

      for (let i = 0; i < pointsCount; i++) {
        const x = i / (pointsCount - 1);
        const y = (i === 0 || i === pointsCount - 1) ? initialPoint : Math.random();
        const diff = 1 / (pointsCount - 1) / 2;

        const cp = [];
        if (i > 0) {
          cp.push({x: x - diff, y: y});
        }
        if (i < pointsCount - 1) {
          cp.push({x: x + diff, y: y});
        }

        const point = {
          x: x,
          y: y,
          cp: cp,
        };
        points.push(point);
      }

      const b = dynamics.bezier({
        points: points,
      });

      const cachedBezier = {};
      for (let i = 0; i <= iterations; i++) {
        const t = tForIteration(i);
        const v = (t <= 0 || t >= 1) ? points[0].y : b(t);
        cachedBezier[t] = v;
      }

      return (t) => {
        return cachedBezier[t];
      };
    };

    const newBezier = () => {
      return createBezier(Math.round(3 + Math.random() * 4));
    }

    let beziers = [
      newBezier(),
      newBezier(),
    ];
    let bezierEaseT = 0;
    let hue = 100;
    const hueRange = [240, 300];

    const bezier = (t) => {
      const i = Math.floor(bezierEaseT);
      const t1 = beziers[i](t);
      const t2 = beziers[i + 1](t);

      return easeInOut(1 - (bezierEaseT - i)) * t1 + easeInOut(bezierEaseT - i) * t2;
    }

    const radiusFunction = (radius, t) => {
      const radiusWidth = 70;
      const radiusRatio = bezier(t);
      return radius + (radiusWidth * radiusRatio);
    };

    const drawLayer = ({radius, hue, alpha, brightness} = {radius, hue, alpha, brightness}) => {
      ctx.beginPath();
      for (let i = 0; i < iterations; i++) {
        const angle = angleForIteration(i);
        const t = tForIteration(i);
        const r = radiusFunction(radius, t);
        const x = center[0] + Math.cos(angle) * r;
        const y = center[1] + Math.sin(angle) * r;
        if (i === 0)
          ctx.moveTo(x, y);
        else
          ctx.lineTo(x, y);
      }
      ctx.closePath();
      ctx.fillStyle = `hsla(${hue}, 100%, ${brightness}%, ${alpha})`;
      ctx.fill();
    };

    let lastT;
    let radius = 0;
    const tick = (t) => {
      const dt = lastT ? t - lastT : 0;
      lastT = t;

      const layersCount = 80;

      ctx.globalCompositeOperation = 'source-over';
      ctx.clearRect(0, 0, 500, 500);

      hue += dt / 10000;
      const hueVector = hue - Math.floor(hue);
      const hueT = (Math.floor(hue) % 2 === 0 ? 1 - hueVector : hueVector) ;
      const baseHue = easeInOut(hueT) * (hueRange[1] - hueRange[0]) + hueRange[0];

      bezierEaseT += dt / 1000;

      while (bezierEaseT + 20 > beziers.length) {
        beziers.push(newBezier());
      }

      const firstLayerBezierT = bezierEaseT;

      for (let i = 0; i < layersCount; i++) {
        const alpha = 1;
        const brightness = i / layersCount;
        drawLayer({
          radius: radius + (1 - i / layersCount) * 200,
          hue: baseHue + (i / layersCount) * 100,
          alpha: alpha,
          brightness: brightness * 50,
        });

        bezierEaseT += 0.27 * (i / layersCount);
      }

      bezierEaseT = firstLayerBezierT;

      window.requestAnimationFrame(tick);
    };

    tick();
  }

  render() {
    const {handleClick} = this.props
    return (
      <div className={cn()}>
        <A_Container type='hero' mx={cn('container')}>
          <canvas ref={canvas => this.canvas = canvas} width='500' height='500' className={cn('canvas')}/>

          <A_H type="hero" mx={cn('title')}>Solving life sciences real problems of today.</A_H>
          <A_P type="hero" mx={cn('text')}>Lifesci offers access to valuable licence fee income and a blockchain AI driven platform that gives investor access to the latest insights, news in the healthcare industry.</A_P>
          {/*<div className={cn('buttons')}>*/}
            {/*<A_Button type='button-secondary' mx={cn('buttons-subscribe')} onClick={handleClick}>Subscribe me</A_Button>*/}
            {/*<A_Button type='link-primary' mx={'buttons-contribute'} to='/contribution'>How to Contribute</A_Button>*/}
          {/*</div>*/}

        </A_Container>
      </div>

    )
  }
}

Hero.propTypes = {
};

Hero.defaultProps = {
}

export default Hero;