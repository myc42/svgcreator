import * as React from 'react'

export default class DefaultRight extends React.Component {
  static optionValue = 'DefaultRight'

  render () {
    return (
      <g
        id='Eyes/Default-Right-👉'
        transform='translate(0.000000, 8.000000)'
        fillOpacity='0.599999964'>
        <circle id='Eye' cx='38' cy='22' r='6' /> {/* Décalé à droite */}
        <circle id='Eye' cx='90' cy='22' r='6' /> {/* Décalé à droite */}
      </g>
    )
  }
}