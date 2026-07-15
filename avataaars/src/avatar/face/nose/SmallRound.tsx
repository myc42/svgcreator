import * as React from 'react'

export default class SmallRound extends React.Component {
  static optionValue = 'SmallRound'

  render () {
    return (
      <g
        id='Nose/SmallRound-🔴'
        transform='translate(28.000000, 40.000000)'
         fill="#B86B47"
>
        {/* Un cercle parfait centré sur l'axe du nez (cx=28) et légèrement plus grand que l'oeil (r=8) */}
        <circle id='Nose' cx='28' cy='4' r='6' />
      </g>
    )
  }
}