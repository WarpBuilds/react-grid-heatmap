import React, { ReactNode } from 'react'

interface Props {
  render?: (x: number, y: number, ratio: number) => ReactNode
  posX: number
  posY: number
  style?: (x: number, y: number, ratio: number) => {}
  ratio: number
  value: number
  height?: string
  square?: boolean
  onClick?: (x: number, y: number) => void
  extraProps?: React.HTMLAttributes<HTMLDivElement>
}

function noop<T>(returnVal: T) {
  return () => returnVal
}

const Cell = ({
  render = noop(null),
  style = noop({}),
  ratio,
  posX,
  posY,
  square = false,
  height = '2rem',
  value,
  onClick,
  extraProps = {}
}: Props) => {
  return (
    <div
      onClick={() => (onClick || noop({}))(posX, posY)}
      style={{
        borderStyle: 'solid',
        borderColor: '#fff',
        borderWidth: '1px 1px 0 0',
        textAlign: 'center',
        color: `rgb(0, 0, 0, ${ratio / 2 + 0.4})`,
        overflow: 'hidden',
        boxSizing: 'border-box',
        flexGrow: square ? 0 : 1,
        flexBasis: square ? height : 0,
        flexShrink: 0,
        height: height,
        lineHeight: height,
        borderRadius: '4px',
        fontSize: '.8rem',
        cursor: onClick ? 'pointer' : 'initial',
        backgroundColor: `rgb(12, 160, 44, ${ratio + 0.05})`,
        ...style(posX, posY, ratio)
      }}
      {...extraProps}
    >
      {render(posX, posY, value)}
    </div>
  )
}

export default React.memo(Cell)
