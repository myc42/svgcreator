import * as React from 'react'

export default class Default extends React.Component {
  static optionValue = 'Default'

  render () {
    return (
      <g
        id='Eyes/Default-😀'
        transform='translate(0.000000, 8.000000)'
        fill='black'
            fillOpacity='1'>
        <circle className='eye-right' id='Eye' cx='30' cy='22' r='6' />
        <circle className='eye-left' id='Eye' cx='82' cy='22' r='6' />
      </g>
    )
  }
}
