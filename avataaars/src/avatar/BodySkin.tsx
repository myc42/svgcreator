import * as React from 'react'
import { uniqueId } from 'lodash'
import Skin from './Skin'

export default class BodySkin extends React.Component {
  private path = uniqueId('body-path-')
  private mask = uniqueId('body-mask-')

  render() {
    const { path, mask } = this

    return (
      <g className="body-skin" transform="translate(32 36)">
        <defs>
          <path
            id={path}
            d="
              M76,130
              L76,163
              C32.235498,163 0,195.235498 0,235
              L0,244
              L200,244
              L200,235
              C200,195.235498 167.764502,163 128,163
              L124,163
              L124,130
              C108,136 92,136 80,130
              Z
            "
          />
        </defs>

        <mask id={mask}>
          <use fill="white" xlinkHref={'#' + path} />
        </mask>

        {/* 1. fallback */}
        <use fill="#D0C6AC" xlinkHref={'#' + path} />

        {/* 2. couleur dynamique gérée par le frontend */}
        <Skin maskID={mask}/>

        {/* 3. L'ombre placée à la fin pour se superposer au reste */}
        <use 
          xlinkHref={'#' + path} 
          fill="#000000" 
          opacity="0.08" 
          mask={`url(#${mask})`} 
        />
      </g>
    )
  }
}