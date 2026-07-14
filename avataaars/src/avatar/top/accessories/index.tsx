import * as React from 'react'

import Blank from './Blank'
import Kurt from './Kurt'
import Prescription01 from './Prescription01'
import Prescription02 from './Prescription02'
import Round from './Round'
import Sunglasses from './Sunglasses'
import Wayfarers from './Wayfarers'
import Prescription03 from './Prescription03'
import RoundStraight from './RoundStraight'


import { AccessoriesOption, Selector } from '../../../options'

export default class Accessories extends React.Component {
  render () {
    return (
      <Selector defaultOption={Blank} option={AccessoriesOption}>
        <Blank />
        <Kurt />
        <Prescription01 />
        <Prescription02 />
         <Prescription03 />
        <Round />
              <RoundStraight />
        <Sunglasses />
        <Wayfarers />
      </Selector>
    )
  }
}
