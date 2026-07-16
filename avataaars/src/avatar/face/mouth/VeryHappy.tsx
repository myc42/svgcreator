import * as React from 'react'

export default class VeryHappy extends React.Component {
  static optionValue = 'VeryHappy'

  render() {
    return (
      /* On utilise ton transform à 42 pour bien placer la bouche */
      <g id='Mouth/VeryHappy' transform='translate(2.000000, 42.000000)'>
        
        {/* Ta bouche Banane ! */}
        <g
          id='Mouth/Banana'
          stroke='#010000'
        
          strokeWidth='6'
          strokeLinecap='round'
          fill='none'>
          <path id='Banana-Smile' d='M 43 22 C 49 28, 61 28, 67 22' />
        </g>

        {/* Joue rouge gauche (élargie : r="18") */}
        <circle
          id='Redish-Left'
          fillOpacity='0.2'
          fill='#FF4646'
          cx='20'
          cy='6'
          r='18'
        />
        
        {/* Joue rouge droite (élargie : r="18") */}
        <circle
          id='Redish-Right'
          fillOpacity='0.2'
          fill='#FF4646'
          cx='88'
          cy='6'
          r='18'
        />
        
      </g>
    )
  }
}