import * as React from 'react'

export default class EyeDown extends React.Component {
  static optionValue = 'EyeDown'

  render () {
    return (
      <g id='Eyes/Eye-Down-👇' transform='translate(0.000000, 8.000000)'>
        <circle id='Eyeball' fill='#FFFFFF' cx='30' cy='22' r='14' />
        <circle id='The-white-stuff' fill='#FFFFFF' cx='82' cy='22' r='14' />
        <circle
          id='Eye'
          fillOpacity='0.699999988'
          fill='#000000'
          cx='30'
          cy='30'
          r='6'
        />
        <circle
          id='Eye'
          fillOpacity='0.699999988'
          fill='#000000'
          cx='82'
          cy='30'
          r='6'
        />
      </g>
    )
  }
}