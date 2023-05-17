import {React} from 'react';
import ImgModal from './ImgModal'

export default function MainBookmark({img, imgModalSrc, id, title, price, subTitle, bookmark, bookmarkHandler, clickImg}) {
    return(
    <div className='product-container' key={id}>
        <img className='product-img' src={img} alt={title} onClick={clickImg}/>
        <div className='bookmark-img-wrap'><img className='bookmark-img' src={bookmark? '../bookmark_on.png':'../bookmark_off.png'} onClick={bookmarkHandler} alt='bookmark'/></div>
        <div className='title-wrap'><span className='product-title'><strong>{title}</strong></span></div>
        <div className='title-wrap'><span className='product-sub-title'>{subTitle}</span><span className='price'>{price}</span></div>
    </div>
    )
}