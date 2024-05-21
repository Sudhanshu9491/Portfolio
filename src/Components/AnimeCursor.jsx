import React from 'react'
import AnimatedCursor from "react-animated-cursor"
import './animeCursor.css';
const animeCursor = () => {
  return (
    <AnimatedCursor 
    innerSize={18}
    outerSize={32}
    color='255, 230, 8'
    outerAlpha={0.2}
    innerScale={1}
    outerScale={1.5}
    clickables={[
        'a',
        'input[type="text"]',
        'input[type="a"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
  )
}

export default animeCursor