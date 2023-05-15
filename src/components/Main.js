import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MainAllProducts from './MainAllProducts';

export default function Main() {
    const [allProducts, setAllProducts] = useState([]);
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

    useEffect(() => {getData()}, [])

    return (
        <main>
            <h2>상품리스트</h2>
            <div className='products-container'>
                {allProducts.map((e)=>(<MainAllProducts key={e.id} id={e.id}
                title={e.title}
                img={e.brand_image_url !== null ? e.brand_image_url : e.image_url}
                subTitle={e.sub_title}
                price={e.price}
                bookmark={false? true: false}
                />))}
            </div>
        </main>
    )
}