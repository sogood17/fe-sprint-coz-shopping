import {React, useState} from 'react';

export default function MainAllProducts({img, id, title, price, subTitle}) {
    const [bookmark, setBookmark] = useState(false);
    const bookmarkHandler = () => {
        setBookmark(!bookmark);
    }

    return(
    <div className='product-container' key={id}>
        <img className='product-img' src={img} alt={title}/>
        <div><img src={bookmark? '../bookmark_on.png':'../bookmark_off.png'} onClick={bookmarkHandler} alt='bookmark'/></div>
        <div className='title-wrap'><span className='product-title'><strong>{title}</strong></span></div>
        <div className='title-wrap'><span className='product-sub-title'>{subTitle}</span><span className='price'>{price}</span></div>

    </div>
    )
}