import * as React from 'react'

export default class DefaultUpRight extends React.Component {
  static optionValue = 'DefaultUpRight'

  render () {
    return (
      <g
        id='Eyes/Default-Up-Right'
        transform='translate(0.000000, 8.000000)'
        fillOpacity='0.599999964'>
        {/* Oeil gauche : Remonté (cy=16) et décalé à droite (cx=36 au lieu de 30) */}
        <circle id='Eye-Left' cx='36' cy='16' r='6' /> 
        
        {/* Oeil droit : Remonté (cy=16) et décalé à droite (cx=88 au lieu de 82) */}
        <circle id='Eye-Right' cx='88' cy='16' r='6' /> 
      </g>
    )
  }
}