import { useState, memo, Fragment } from 'react'

type SvgTextProps = {
  width: string
  height: string
  left: number
  top: number
  x: string
  y: string
  fill: string
  fontSize: string
  fontWeight: string
}

const SvgText = memo<SvgTextProps>(({ ...svgText }) => {
  return (
    <svg
      version='1.1'
      xmlns='http://www.w3.org/2000/svg'
      width={svgText.width}
      height={svgText.height}
      style={{
        position: 'absolute',
        left: `${svgText.left}px`,
        top: `${svgText.top}px`,
      }}
    >
      <text
        textAnchor={'middle'}
        x={svgText.x}
        y={svgText.y}
        fill={svgText.fill}
        fontSize={svgText.fontSize}
        fontWeight={svgText.fontWeight}
      >
        や
      </text>
    </svg>
  )
})

const U3084 = memo(() => {
  const [svgTextProps, setSvgTextProps] = useState<SvgTextProps[]>([])

  const generateRandomNum = (num: number) => Math.random() * num

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { clientX: left, clientY: top } = e
    const numWidth = generateRandomNum(500)
    const numHeight = numWidth * 0.88
    const numX = numWidth * 0.5
    const numY = numWidth * 0.82
    const numFontSize = numWidth

    const width = numWidth.toString()
    const height = numHeight.toString()
    const x = numX.toString()
    const y = numY.toString()
    const fontSize = numFontSize.toString()
    const fill = `RGB(
        ${Math.floor(generateRandomNum(256))}, 
        ${Math.floor(generateRandomNum(256))},
        ${Math.floor(generateRandomNum(256))}
    )`
    const fontWeight = (Math.random() * 500).toString()

    setSvgTextProps([
      ...svgTextProps,
      {
        width,
        height,
        left,
        top,
        x,
        y,
        fill,
        fontSize,
        fontWeight,
      },
    ])
  }

  return (
    <div className='w-screen h-screen bg-black' onClick={(e) => handleClick(e)}>
      {svgTextProps.map((svgText, index) => {
        return (
          <Fragment key={index}>
            <SvgText {...svgText} />
          </Fragment>
        )
      })}
    </div>
  )
})

export default U3084
