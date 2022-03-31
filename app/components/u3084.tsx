import { useState } from 'react'

export default function U3084() {
  const [x, setX] = useState('')
  const [y, setY] = useState('')
  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const cX = e.clientX.toString()
    const cY = e.clientY.toString()
    setX(cX)
    setY(cY)
    console.log(x, y)
  }

  return (
    <div
      className='w-screen h-screen bg-black'
      onClick={(e) => handleClick(e)}
    >
      <div
        className='w-80 h-80 bg-white'
        style={{
          position: 'absolute',
          left: `${x}px`,
          top: `${y}px`,
        }}
      />
    </div>
  )
}
