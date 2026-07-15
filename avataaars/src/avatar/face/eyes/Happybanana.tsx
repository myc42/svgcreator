import * as React from 'react'

export default class HappyBanana extends React.Component {
  static optionValue = 'HappyBanana'

  render () {
    return (
      <g
        id='Eyes/HappyBanana'
        transform='translate(0.000000, 8.000000)'
        stroke='#000000'
        
        strokeWidth='5'
        strokeLinecap='round'
        fill='none'>
        
        {/* Oeil Gauche : Demi-cercle parfait */}
        <path id='Eye-Left' d='M 24 24 A 6 6 0 0 1 36 24' />
        
        {/* Oeil Droit : Demi-cercle parfait */}
        <path id='Eye-Right' d='M 76 24 A 6 6 0 0 1 88 24' />
        
      </g>
    )
  }
}