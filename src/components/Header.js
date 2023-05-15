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
                <div >
                    <img className='menu-img' src='../hamburger.png' onClick={menuClick} alt='menu' />
                </div>
            </div>
                <div className={menu? 'hamburger-menu' : 'hamburger-menu munu-clicked'} >
                    <span>OOO님 안녕하세요!</span>
                    <hr></hr>
                    <Link to='/products/list'>
                        <span>상품리스트 페이지</span>
                    </Link>
                    <hr></hr>
                    <Link to='/bookmark'>
                        <span>북마크 페이지</span>
                    </Link>
                </div>
              

        </header>

    );
}