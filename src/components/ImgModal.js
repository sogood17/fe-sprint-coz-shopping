import {React, useState} from 'react';

export default function ImgModal({imgModalSrc, title, imgClicked}) {

    return (
        <div>
            <img className={imgClicked===true? 'img_modal' :'menu-hide'} src={imgModalSrc} alt={title}/>
        </div>
    )
}