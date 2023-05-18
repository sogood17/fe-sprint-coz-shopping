import {React, useState} from 'react';

export default function MainAllProducts({img, id, title, price, subTitle, bookmark, bookmarkHandler, clickImg, discount, follower, type}) {

    return(
    <div className='product-container' key={id}>
        <img className='product-img' src={img} alt={title} onClick={clickImg} />
        <div className='bookmark-img-wrap'><img className='bookmark-img' src={bookmark? '../bookmark_on.png':'../bookmark_off.png'} onClick={bookmarkHandler} alt='bookmark'/></div>
        <div className='title-wrap'>
            <div><span className='product-title'><strong>{title}</strong></span></div>
            {type === 'Product'? <div className='discount'>{type === 'Product'? discount+'%' : null}</div> :
            type === 'Brand'? <div className='follower-title'>{type === 'Brand'? '관심고객수' : null}</div> : null}            
            </div>
        <div className='title-wrap'>
            <div><span className='product-sub-title'>{subTitle}</span></div>
            {type === 'Product'? <div><span className='price'>{type === 'Product' ? new Intl.NumberFormat().format(price)+'원':null}</span></div> :
            type === 'Brand'? <div><span className='follower'>{type === 'Brand' ? new Intl.NumberFormat().format(follower): null}</span></div> : null}            
            
            
        </div>
    </div>
    )
}