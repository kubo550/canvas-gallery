import React from 'react'
// ! Link 
import { Link } from "react-router-dom";
import styled from 'styled-components';
import { motion } from 'framer-motion';

const ImageContainer = styled(motion.div)`
  overflow: hidden;
`
const ASImg = styled(motion.img)`
  width:100%;
  transition: transform 0.4s;
  :hover {
   transform: scale(1.04);
  }
`



const CanvasImage = ({data : {id, image, name, uName, createdAt }, index}) => {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delay: index / 5
      }
    }
  }

  const StyledItem = styled(motion.p)``

  return (
      <ImageContainer  className='col-md-4 col-sm-6' variants={container} initial="hidden" animate="visible">
        <ASImg title={`Go to ${name}`}  src={image} alt="img"  />
 
        <StyledItem title={name}> {name}</StyledItem>
        <StyledItem className='text-right'> 65 <i className='fas fa-star gold'></i></StyledItem>
        <StyledItem title={uName}> {uName} </StyledItem>
        <StyledItem className='text-right text-muted'> {createdAt.slice(0, 9)} </StyledItem>
 
      </ImageContainer>
  )
}

export default CanvasImage
