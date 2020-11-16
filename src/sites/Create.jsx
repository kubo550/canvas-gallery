import React, { useState } from 'react'
import { Canvas, ColorsPalette } from '../components'
import { Container } from 'react-bootstrap';

const Create = () => {
  const [color, setColor] = useState("#000");

    return (
        <Container>
            <Canvas color={color} lineWidth={3} />
            <ColorsPalette color={color} setColor={setColor} />   
        </Container>
    )
}

export default Create
