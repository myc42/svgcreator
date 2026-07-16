import * as React from 'react'
import { uniqueId } from 'lodash'

import Colors from './Colors'
import Graphics from './Graphics'

export default class UniqloBlack extends React.Component {
  static optionValue = 'UniqloBlack'

  private path1 = uniqueId('react-path-')
  private mask1 = uniqueId('react-mask-')

  render () {
    const { path1, mask1 } = this

    return (
      <g
        id='Clothing/Uniqlo-Black'
        transform='translate(0.000000, 170.000000)'>

        <defs>
    <path
  d='M165.624032,29.2681342 
  C202.760022,32.1373245 232,63.1798426 232,101.051724 
  L232,110 
  L32,110 
  L32,101.051724 
  C32,63.1798426 61.239978,32.1373245 98.375968,29.2681342 
  C98.375968,29.2681342 107,29.2681342 108,29.2681342 
  C99,55 165,55 156,29.2681342 
  C165,29.2681342 165.624032,29.2681342 165.624032,29.2681342 Z'
  id={path1}
/>
        </defs>

        <mask id={mask1} fill='white'>
          <use xlinkHref={'#' + path1} />
        </mask>

        <use
          id='Clothes'
          fill='#000000'
          fillRule='evenodd'
          xlinkHref={'#' + path1}
        />

        <Colors maskID={mask1} />
        <Graphics maskID={mask1} />

      </g>
    )
  }
}