import { useState } from 'react'

export default function U3084() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const handleClick = (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    const {clientX, clientY} = e;
    setX(clientX)
    setY(clientY)
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
