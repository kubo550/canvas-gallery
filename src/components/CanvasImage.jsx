import React from 'react'
import { Link } from "react-router-dom";

const CanvasImage = ({data : {id, image, name, uName, createdAt }}) => {
    return (
        <div className='element'>
            <Link to={`image/${id}`} title={`Go to ${name}`} className="img"> <img src={image} alt="img"/> </Link>
            <div className='body'>
              <b className='title' title={name}> {name}</b>
              <p className='text-right'  >
                65 <i className='fas fa-star gold'></i>
              </p>
              <p title={uName}> {uName} </p>
              <p className='text-right light'> {createdAt.slice(0, 9)} </p>
            </div>
          </div>
    )
}

export default CanvasImage
