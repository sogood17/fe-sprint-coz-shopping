import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Header() {
    const [menu, setMenu] = useState(false)
    const menuClick = () => {
        setMenu(!menu);
    }
    return (
        <header>
            <div className='header-container'>
                <div className='title-container'>
                    <Link className='title' to='/'>
                        <img className='title-logo' src='../logo.png' alt='logo' />
                        <h1 className='title'>COZ Shopping</h1>
                    </Link>
                </div>
                <div className='menu-img-wrap'>
                    <img className='menu-img' src='../hamburger.png' onClick={menuClick} alt='menu' />
                    <div className={menu? 'hamburger-menu' : 'hamburger-menu menu-hide'} >
                        <div className='menu_wrap menu_first'>
                            <span className='menu-text'>OOO님, 안녕하세요!</span>
                        </div>
                        <div className='menu_wrap menu_border'>
                            <Link className='menu-link' to='/products/list'>
                                <img src='../menu_product_icon.png' /><span className='menu-text'>상품리스트 페이지</span>
                            </Link>
                        </div>
                        <div className='menu_wrap menu_last'>
                            <Link className='menu-link' to='/bookmark'>
                            <img src='../menu_bookmark_icon.png' /><span className='menu-text'>북마크 페이지</span>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
                
              

        </header>

    );
}