import React from 'react'
import './Card.css';
import img from './userlogo.jpg'
const Card = ({id, title, tag, status}) => {
  return (
    <div className="card-container flex-gap-10">
        <div className="card-heading flex-sb">
            <span className='light-text'>{id}</span>
            <div className="image-container relative">
                <img className='img' src={img} alt="UserImage" />
                <div className="show-status"></div>
            </div>
        </div>
        <div className="card-title">
            <p>{title}</p>
        </div>
        <div className="card-tags">
        <div className="tags light-text"> 📶 </div>
            {
                tag?.map((elem, index) => {
                    return <div key={index} className="tags light-text"> <span>•</span> {elem}</div>
                })
            }
        </div>
    </div>
  )
}

export default Card;