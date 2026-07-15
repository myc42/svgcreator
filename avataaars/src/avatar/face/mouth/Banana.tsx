import * as React from 'react'

export default class Banana extends React.Component {
  static optionValue = 'Banana'

  render () {
    return (
      <g
        id='Mouth/Banana'
        /* C'est ICI que tu déplaces toute la bouche (X, Y) */
        transform='translate(2.000000, 42.000000)'
        stroke='#994636'
        strokeOpacity='0.699999988'
        strokeWidth='6'
        strokeLinecap='round'
        fill='none'>
        
        /* C'est ICI que tu gères la taille et la forme */
        <path id='Banana-Smile' d='M 43 22 C 49 28, 61 28, 67 22' />
      </g>
    )
  }
}