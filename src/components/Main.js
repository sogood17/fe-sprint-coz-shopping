import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MainAllProducts from './MainAllProducts';
import MainBookmark from './MainBookmark';

export default function Main() {
    const [allProducts, setAllProducts] = useState([]);
    const [bookMarkProducts, setBookMarkProducts] = useState([]);
    const getData = () => axios
    .get('http://cozshopping.codestates-seb.link/api/v1/products?count=4')
    .then((res)=> {
        const object =res.data;
        console.log(object);
        setAllProducts(object);
        })
    .catch((err)=> {
        console.log(err);
    })
    .finally(()=>{
        console.log('정상적으로 데이터를 가져왔습니다.')
    })

    const getBookmarkData = () => axios
    .get('http://cozshopping.codestates-seb.link/api/v1/products?count=4')
    .then((res)=> {
        const bookmarkObject =res.data;
        console.log(bookmarkObject);
        setBookMarkProducts(bookmarkObject);
        })
    .catch((err)=> {
        console.log(err);
    })
    .finally(()=>{
        console.log('정상적으로 데이터를 가져왔습니다.')
    })

    useEffect(() => {getData()}, [])
    useEffect(() => {getBookmarkData()}, [])

    const [bookmark, setBookmark] = useState(false);

    const bookmarkHandler = () => {
        setBookmark(!bookmark);
    }

    return (
        <main>
            <h2>상품리스트</h2>
            <div className='products-container'>
                {allProducts.map((e)=>(<MainAllProducts key={e.id} id={e.id}
                title={e.title}
                img={e.brand_image_url !== null ? e.brand_image_url : e.image_url}
                subTitle={e.sub_title}
                price={e.price}
                bookmark={bookmark}
                bookmarkHandler={bookmarkHandler}
                />))}
            </div>
            <h2>상품리스트</h2>
            <div className='products-container'>
                {bookMarkProducts.map((e)=>(<MainBookmark key={e.id} id={e.id}
                title={e.title}
                img={e.brand_image_url !== null ? e.brand_image_url : e.image_url}
                subTitle={e.sub_title}
                price={e.price}
                bookmark={bookmark}
                bookmarkHandler={bookmarkHandler}
                />))}
            </div>
        </main>
    )
}