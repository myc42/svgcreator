import * as React from 'react'

export default class Wide extends React.Component {
  static optionValue = 'Wide'

  render () {
    return (
      <g
        id='Nose/Wide-➖'
        transform='translate(28.000000, 40.000000)'
        fillOpacity='0.16'>
        {/* Une courbe étirée horizontalement */}
        <path
          d='M12,10 C12,14 18,18 28,18 C38,18 44,14 44,10'
          id='Nose'
        />
      </g>
    )
  }
}