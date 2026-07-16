import * as React from 'react'
import { uniqueId } from 'lodash'
import Skin from './Skin'

export default class HeadSkin extends React.Component {
  private path = uniqueId('head-path-')
  private mask = uniqueId('head-mask-')

  render() {
    const { path, mask } = this

    return (
      <g className="head-skin">
        <defs>
          <path
            id={path}
            d="
            M124,144.610951
            C141.237365,136.422372 153.627775,119.687011 155.694861,99.8812385
            C161.51969,99.0577866 166,94.0521096 166,88
            L166,74
            C166,68.0540074 161.675427,63.1180731 156,62.1659169
            L156,56
            C156,25.072054 130.927946,0 100,0
            C69.072054,0 44,25.072054 44,56
            L44,62.1659169
            C38.3245733,63.1180731 34,68.0540074 34,74
            L34,88
            C34,94.0521096 38.4803105,99.0577866 44.3051388,99.8812385
            C46.3722246,119.687011 58.7626345,136.422372 76,144.610951

            C90,151 110,151 124,144.610951
            Z
            "
          />
        </defs>

        <mask id={mask}>
          <use fill="white" xlinkHref={'#' + path} />
        </mask>

        {/* Fallback optionnel et application dynamique de la couleur */}
        <use fill="#D0C6AC" xlinkHref={'#' + path} />
        <Skin maskID={mask} />
      </g>
    )
  }
}