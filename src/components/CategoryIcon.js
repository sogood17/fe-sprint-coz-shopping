import React from 'react';

export default function CategoryIcon({categoryImg, categoryTitle, onClick, isClicked}) {

    return (
        <li>
            <div>
                <img src={categoryImg} alt={categoryTitle} onClick={onClick} />
                <span className={isClicked? 'category-title category-clicked':'category-title'} onClick={onClick}>{categoryTitle}</span>
            </div>
        </li>
    )
}