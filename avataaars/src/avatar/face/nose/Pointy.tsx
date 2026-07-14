import * as React from 'react'

export default class Pointy extends React.Component {
  static optionValue = 'Pointy'

  render () {
    return (
      <g
        id='Nose/Pointy-🔺'
        transform='translate(28.000000, 40.000000)'
        fillOpacity='0.16'>
        {/* Un triangle centré sur l'axe X (28) */}
        <path
          d='M28,4 L20,18 L36,18 Z'
          id='Nose'
        />
      </g>
    )
  }
}