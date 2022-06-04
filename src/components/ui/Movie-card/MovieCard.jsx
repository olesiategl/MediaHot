import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import ModalLogin from '../ModalLogin/ModalLogin'

const MovieCard = (props) => {

    const {title, id, imgUrl, author} = props.item

    const {showModal, setShowModal} = useState(false)

    return <div className="single-book-card">
    <div className="book-img">
        <img src={imgUrl} alt="" className='w-100'/>
    </div>

    <div className="book-content">
        <h5 className='book-title'><Link to = {`/movies/${id}`}>{title}</Link></h5>
    </div>

    <div className="author-info w-100 d-flex align-items-center justify-content-between">
        <div>
            <h6>Created by</h6>
            <p>{author}</p>
        </div>
    </div>

    <div className='mt-3 d-flex align-items-center justify-content-between'>
    <button className='add-to-cart-btn d-flex align-items-center justify-content-between gap-1'
    onClick={() => setShowModal(true)}>
        <span>
            <i class="ri-add-fill"></i>
        </span> 
        <Link to = {'/signIn'}> Watchlist </Link> 
    </button>

    {showModal ? <ModalLogin setShowModal={setShowModal}/> : null}
</div>


    </div>
}

export default MovieCard