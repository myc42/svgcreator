import * as React from 'react'

export default class EyeSmileRight extends React.Component {
  static optionValue = 'EyeSmileRight'

  render () {
    return (
      <g id='Eyes/Eye-Smile-Right-👉' transform='translate(0.000000, 8.000000)'>
        <ellipse id='Eyeball' fill='#FFFFFF' cx='30' cy='22' rx='14' ry='8' />
        <ellipse id='The-white-stuff' fill='#FFFFFF' cx='82' cy='22' rx='14' ry='8' />
        <circle
          id='Eye'
          fillOpacity='0.699999988'
          fill='#000000'
          cx='38' // Décalé à droite
          cy='22'
          r='5.5'
        />
        <circle
          id='Eye'
          fillOpacity='0.699999988'
          fill='#000000'
          cx='90' // Décalé à droite
          cy='22'
          r='5.5'
        />
      </g>
    )
  }
}