import * as React from 'react'

export default class DefaultLeft extends React.Component {
  static optionValue = 'DefaultLeft'

  render () {
    return (
      <g
        id='Eyes/Default-Left-👈'
        transform='translate(0.000000, 8.000000)'
        fillOpacity='0.599999964'>
        <circle id='Eye' cx='22' cy='22' r='6' /> {/* Décalé à gauche */}
        <circle id='Eye' cx='74' cy='22' r='6' /> {/* Décalé à gauche */}
      </g>
    )
  }
}