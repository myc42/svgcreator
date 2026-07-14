import * as React from 'react'

export default class EyeSmile extends React.Component {
  static optionValue = 'EyeSmile'

  render () {
    return (
      <g id='Eyes/Eye-Smile-😊' transform='translate(0.000000, 8.000000)'>
        {/* On remplace <circle> par <ellipse> pour aplatir le blanc de l'oeil (ry=8 au lieu de r=14) */}
        <ellipse id='Eyeball' fill='#FFFFFF' cx='30' cy='22' rx='14' ry='8' />
        <ellipse id='The-white-stuff' fill='#FFFFFF' cx='82' cy='22' rx='14' ry='8' />
        
        {/* La pupille est centrée, son rayon passe de 6 à 5.5 pour bien s'insérer dans l'oeil plissé */}
        <circle
          id='Eye'
          fillOpacity='0.699999988'
          fill='#000000'
          cx='30'
          cy='22'
          r='5.5'
        />
        <circle
          id='Eye'
          fillOpacity='0.699999988'
          fill='#000000'
          cx='82'
          cy='22'
          r='5.5'
        />
      </g>
    )
  }
}