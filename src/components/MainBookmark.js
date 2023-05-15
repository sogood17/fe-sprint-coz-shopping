import {React} from 'react';

export default function MainBookmark({img, id, title, price, subTitle}) {
    return(
    <div className='product-container' key={id}>
        <img className='product-img' src={img} alt={title}/>
        <div className='title-wrap'><span className='product-title'><strong>{title}</strong></span></div>
        <div className='title-wrap'><span className='product-sub-title'>{subTitle}</span><span className='price'>{price}</span></div>

    </div>
    )
}