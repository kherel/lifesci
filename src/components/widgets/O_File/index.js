import React from 'react';
// import * as T from "prop-types";
import './styles.scss';
import {cssClassName} from 'utils'

const cn = cssClassName('O_File')
import A_Button from 'A_Button'
import A_Image from 'A_Image'
import FileSaver from 'file-saver';
import request from 'superagent'
import {host} from 'constants/api.js'

const O_File = ({name, type, url}) => {

  const view = type === 'pdf'

  function readFile(url) {
    return new Promise((resolve, reject) => {
      request.get(`${host}${url}`).responseType('blob').end((err, res) => {
        if (err) {
          return reject(err)
        }
        resolve(res.body)
      })
    })
  }

  const savefile = async () => {
    const blob = await readFile(url)
    FileSaver.saveAs(blob, name)
  }

  return (
    <section className={cn()}>

      <span className={cn('file', {type})}>
        <A_Image src={'/img/icons/doc.svg'} realSize mx={cn('file-icon')}/>
        {name}
      </span>
      <div className={cn('buttons')}>
        {view && <A_Button external type='link-secondary' to={url} mx={cn('buttons-view')}>View in browser</A_Button>}
        <A_Button type='button-primary' onClick={savefile} mx={cn('buttons-download')}>Download</A_Button>

        {/*<A_Button external download={name} type='link-primary' to={url} mx={cn('buttons-download')}>Download</A_Button>*/}
      </div>
    </section>
  )
}

O_File.propTypes = {};

O_File.defaultProps = {}
export default O_File