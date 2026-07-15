import * as React from 'react'
import { uniqueId } from 'lodash'

export default class RoundStraight extends React.Component {
  static optionValue = 'RoundStraight'

  private path1 = uniqueId('react-path-')
  private filter1 = uniqueId('react-filter-')

  render () {
    const { path1, filter1 } = this
    return (
      <g
        id='Top/_Resources/Round-Straight'
        fill='none'
        transform='translate(66.000000, 85.000000)'>
        <defs>
          <path
            d='M 63.92 25 L 70.08 25 A 24 24 0 1 1 70.08 29 L 63.92 29 A 24 24 0 1 1 63.92 25 Z M 40 7 A 20 20 0 0 0 40 47 A 20 20 0 0 0 40 7 Z M 94 7 A 20 20 0 0 0 94 47 A 20 20 0 0 0 94 7 Z'
            id={path1}
          />
          <filter
            x='-0.8%'
            y='-2.1%'
            width='101.6%'
            height='108.3%'
            filterUnits='objectBoundingBox'
            id={filter1}>
            <feOffset
              dx='0'
              dy='2'
              in='SourceAlpha'
              result='shadowOffsetOuter1'
            />
            <feColorMatrix
              values='0 0 0 0 0   0 0 0 0 0   0 0 0 0 0  0 0 0 0.1 0'
              type='matrix'
              in='shadowOffsetOuter1'
            />
          </filter>
        </defs>
        <g id='Lennon-Glasses-Straight-Bar'>
          <use
            fill='black'
            fillOpacity='1'
            filter={`url(#${filter1})`}
            xlinkHref={'#' + path1}
          />
          <use fill='#252C2F' fillRule='evenodd' xlinkHref={'#' + path1} />
        </g>
      </g>
    )
  }
}