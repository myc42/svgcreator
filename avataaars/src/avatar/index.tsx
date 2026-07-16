import * as React from 'react'
import { uniqueId } from 'lodash'

import Accessories from './top/accessories'
import Clothe from './clothes'
import Face from './face'
import HeadSkin from './HeadSkin'
import BodySkin from './BodySkin'
import Top from './top'

export enum AvatarStyle {
  Circle = 'Circle',
  Transparent = 'Transparent',
}

export interface Props {
  avatarStyle: AvatarStyle
  className?: string;
  style?: React.CSSProperties
}

export default class Avatar extends React.Component<Props> {
  private path1 = uniqueId('react-path-')
  private path2 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')
  private mask2 = uniqueId('react-mask-')

  render() {
    const { path1, path2, mask1, mask2 } = this
    const { avatarStyle } = this.props
    const circle = avatarStyle === AvatarStyle.Circle

    return (
      <svg
        style={this.props.style}
        className={this.props.className}
        width="300px"
        height="600px"
        viewBox="0 0 264 280"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink">
        <desc>Created with getavataaars.com</desc>
        <defs>
          <circle id={path1} cx="120" cy="120" r="120" />
          <path
            d="M12,160 C12,226.27417 65.72583,280 132,280 C198.27417,280 252,226.27417 252,160 L264,160 L264,-1.42108547e-14 L-3.19744231e-14,-1.42108547e-14 L-3.19744231e-14,160 L12,160 Z"
            id={path2}
          />
        </defs>

        <g
          id="Avataaar"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd">
          <g
            transform="translate(-825.000000, -1100.000000)"
            id="Avataaar/Circle">
            <g transform="translate(825.000000, 1100.000000)">
              {circle ? (
                <g
                  id="Circle"
                  strokeWidth="1"
                  fillRule="evenodd"
                  transform="translate(12.000000, 40.000000)">
                  <mask id={mask1} fill="white">
                    <use xlinkHref={'#' + path1} />
                  </mask>
                  <use
                    id="Circle-Background"
                    fill="#E6E6E6"
                    xlinkHref={'#' + path1}
                  />
                  <g
                    id="Color/Palette/Blue-01"
                    mask={'url(#' + mask1 + ')'}
                    fill="#65C9FF">
                    <rect id="🖍Color" x="0" y="0" width="240" height="240" />
                  </g>
                </g>
              ) : null}
              {circle ? (
                <mask id={mask2} fill="white">
                  <use xlinkHref={'#' + path2} />
                </mask>
              ) : null}
              <g id="Mask" />
              <g
                id="Avataaar"
                strokeWidth="1"
                fillRule="evenodd"
                mask={'url(#' + mask2 + ')'}>
                  
                {/* corps */}
                <BodySkin />

                {/* tête */}
                <g className="head-pivot">
                  <g transform="translate(32 36)">
                    <HeadSkin />
                  </g>
                  
                  <Face />
                  
                  <Top>
                    <Accessories />
                  </Top>
                </g>

                <Clothe />
                
                <rect className='table' x="0" y="280" width="1000" height="100" fill="#edf0f1"/>

                <path
                  className='mac-clavier'
                  d="
                    M70 336
                    Q130 332 190 336
                    L205 351
                    Q205 356 200 356
                    H60
                    Q55 356 55 351
                    Z
                  "
                  fill="#d0d6dd"
                />

                <circle
                  className='wrist-right'
                  cx="210"
                  cy="285"
                  r="30"
                  fill="#D08B5B"
                />
                <circle
                  className='wrist-left'
                  cx="50"
                  cy="285"
                  r="30"
                  fill="#D08B5B"
                />
                <path
                  className='mac'
                  d="
                    M 70 230
                    L 190 230
                    Q 210 230 210 250
                    L 202 330
                    Q 202 350 182 350
                    L 78 350
                    Q 58 350 58 330
                    L 50 250
                    Q 50 230 70 230
                    Z
                  "
                  fill="#bdc2c7"
                /> 
              </g>
            </g>
          </g>
        </g>
      </svg>
    )
  }
}