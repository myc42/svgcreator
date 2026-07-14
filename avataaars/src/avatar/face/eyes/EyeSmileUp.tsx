import * as React from 'react'

export default class EyeSmileUp extends React.Component {
  static optionValue = 'EyeSmileUp'

  render () {
    return (
      <g id='Eyes/Eye-Smile-Up-🙄' transform='translate(0.000000, 8.000000)'>
        <ellipse id='Eyeball' fill='#FFFFFF' cx='30' cy='22' rx='14' ry='8' />
        <ellipse id='The-white-stuff' fill='#FFFFFF' cx='82' cy='22' rx='14' ry='8' />
        <circle
          id='Eye'
          fillOpacity='0.699999988'
          fill='#000000'
          cx='30'
          cy='19' // Remonté
          r='5.5'
        />
        <circle
          id='Eye'
          fillOpacity='0.699999988'
          fill='#000000'
          cx='82'
          cy='19' // Remonté
          r='5.5'
        />
      </g>
    )
  }
}