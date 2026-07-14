import * as React from 'react'

import Default from './Default'
import SmallRound from './SmallRound'
import Pointy from './Pointy'
import Wide from './Wide'
import { NoseOption, Selector } from '../../../options'

export default class Nose extends React.Component {
  render () {
    return (
      <Selector defaultOption={Default} option={NoseOption}>
        <Default />
        <SmallRound />
        <Pointy />
        <Wide />
      </Selector>
    )
  }
}