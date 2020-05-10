import './index.scss'

import * as React from 'react'

const Footer: React.FunctionComponent = () => (
  <div className='footer'>
    <a target='_blank' href="github.com/lovelifeloveyou">
      <span>Copyright © 2020 SuperQJQ </span>
    </a>
    <div className='by_farbox'>
      <a target='_blank' href="github.com/lovelifeloveyou">
        React + Dva + TypeScript + Koa2 + MongoDB
      </a>
    </div>
  </div>
)

export default Footer