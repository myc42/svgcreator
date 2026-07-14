import * as React from 'react'

export default class EyeCenter extends React.Component {
  static optionValue = 'EyeCenter'

  render () {
    return (
      <g id='Eyes/Eye-Center-🎯' transform='translate(0.000000, 8.000000)'>
        <circle id='Eyeball' fill='#FFFFFF' cx='30' cy='22' r='14' />
        <circle id='The-white-stuff' fill='#FFFFFF' cx='82' cy='22' r='14' />
        <circle
          id='Eye'
          fillOpacity='0.699999988'
          fill='#000000'
          cx='30' // Exactement au centre du globe gauche
          cy='22' // Exactement au centre du globe gauche
          r='6'
        />
        <circle
          id='Eye'
          fillOpacity='0.699999988'
          fill='#000000'
          cx='82' // Exactement au centre du globe droit
          cy='22' // Exactement au centre du globe droit
          r='6'
        />
      </g>
    )
  }
}