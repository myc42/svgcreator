import * as React from 'react'

export default class None extends React.Component {
  static optionValue = 'None'

  render () {
    return (
      <g id='Eyebrow/None'>
        {/* On ne met aucun <path> ou <circle> ici, ce qui crée le visage sans sourcils ! */}
      </g>
    )
  }
}