import * as React from 'react'

import Close from './Close'
import Cry from './Cry'
import Default from './Default'
import Dizzy from './Dizzy'
import EyeRoll from './EyeRoll'
import Happy from './Happy'
import Hearts from './Hearts'
import Side from './Side'
import Squint from './Squint'
import Surprised from './Surprised'
import Wink from './Wink'
import WinkWacky from './WinkWacky'
import EyeLeft from './EyeLeft'
import EyeRight from './EyeRight'
import EyeDown from './EyeDown'
import EyeCenter from './EyeCenter'
import EyeSmile from './EyeSmile'

import EyeSmileUp from './EyeSmileUp'
import EyeSmileDown from './EyeSmileDown'
import EyeSmileLeft from './EyeSmileLeft'
import EyeSmileRight from './EyeSmileRight'
import EyeHappy from './EyeHappy'
import EyeSquint from './EyeSquint'
import DefaultDown from './DefaultDown'
import DefaultLeft from './DefaultLeft'
import DefaultRight from './DefaultRight'
import DefaultUp from './DefaultUp'
import HappyBanana from './Happybanana'
import DefaultUpRight from './DefaultUpRight'




import { EyesOption, Selector } from '../../../options'

export default class Eyes extends React.Component {
  render () {
    return (
      <Selector defaultOption={Default} option={EyesOption}>
        <Close />
        <Cry />
         <HappyBanana />
        <Default />
          <DefaultUpRight />
          <DefaultDown />
                  <DefaultLeft />
                     <DefaultRight />
                        <DefaultUp />

        <Dizzy />
        <EyeRoll />
          <EyeCenter />
        <EyeLeft />
         <EyeRight />
        <EyeDown />
          <EyeSmile />
             <EyeSmileRight />
               <EyeSmileLeft />
                <EyeSmileDown />
                  <EyeSmileUp />
                  <EyeHappy />
                   <EyeSquint />
        <Happy />
        <Hearts />
        <Side />
        <Squint />
        <Surprised />
        <Wink />
        <WinkWacky />
      </Selector>
    )
  }
}
