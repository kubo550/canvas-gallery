import React, { useState } from 'react'
import { Canvas, ColorsPalette } from '../components'

const Create = () => {
  const [color, setColor] = useState("#000");

    return (
        <div>
            <Canvas color={color} lineWidth={3} />
            <ColorsPalette color={color} setColor={setColor} />   
        </div>
    )
}

export default Create
