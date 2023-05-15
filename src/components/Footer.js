import React from 'react';
import {useState} from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {

    return (
        <footer>
        <p className='footer-message'>개인정보처리방침 | 이용약관</p>
        <p className='footer-message'>All rights reserved @ CodeStates</p>
        </footer>
    )
}