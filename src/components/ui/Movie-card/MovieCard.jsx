import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = (props) => {

    const {title, id, imgUrl, author} = props.item

    return <div className="single-book-card">
    <div className="book-img">
        <img src={imgUrl} alt="" className='w-100'/>
    </div>

    <div className="book-content">
        <h5 className='book-title'><Link to = {'/movies/' + {id}}>{title}</Link></h5>
    </div>

    <div className="author-info w-100 d-flex align-items-center justify-content-between">
        <div>
            <h6>Created by</h6>
            <p>{author}</p>
        </div>
    </div>

    </div>
}

export default MovieCard