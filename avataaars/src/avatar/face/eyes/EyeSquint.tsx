import * as React from 'react'

export default class EyeSquint extends React.Component {
  static optionValue = 'EyeSquint'

  render () {
    return (
      <g
        id='Eyes/Squint-XD'
        transform='translate(0.000000, 8.000000)'
        stroke='#000000'
        strokeWidth='5'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeOpacity='0.599999964'
        fill='none'
      >
        {/* Oeil gauche : > (centré sur x=30, y=22) */}
        <path id='Eye-Left' d='M24,14 L36,22 L24,30' />
        
        {/* Oeil droit : < (centré sur x=82, y=22) */}
        <path id='Eye-Right' d='M88,14 L76,22 L88,30' />
      </g>
    )
  }
}