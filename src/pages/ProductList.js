import React from 'react';
import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MainAllProducts from '../components/MainAllProducts';
import CategoryIcon from '../components/CategoryIcon';

export default function ProductList() {

    const [allProductsList, setAllProductList] = useState([]);
    const [currentProductsList, setCurrentProductsList] =useState([]);

    const getData = () => axios
    .get('http://cozshopping.codestates-seb.link/api/v1/products')
    .then((res)=> {
        const object =res.data;
        setAllProductList(object);
        setCurrentProductsList(object);
        console.log(object);
        })
    .catch((err)=> {
        console.log(err);
    })
    .finally(()=>{
        console.log('정상적으로 데이터를 가져왔습니다.')
    })

    useEffect(() => {getData()}, [])

    const [bookmark, setBookmark] = useState(false);

    const bookmarkHandler = () => {
        setBookmark(!bookmark);
    }

    const mainSection = document.querySelector('.main');

    const clickImg =(e) => {
        const modalBackground=document.createElement('div');
        mainSection.appendChild(modalBackground);
        modalBackground.classList.add('modal-background');
        const modalDiv=document.createElement('div');
        mainSection.appendChild(modalDiv);
        modalDiv.classList.add('modal-div');
        const imgModal = document.createElement('img');
        imgModal.setAttribute('src', e.target.src);
        imgModal.classList.add('img-modal');
        modalDiv.appendChild(imgModal);
        const closeImg = document.createElement('img');
        closeImg.setAttribute('src', '../close_img.png');
        closeImg.classList.add('img-close');
        modalDiv.appendChild(closeImg);
        closeImg.addEventListener('click', ()=> {
            modalDiv.remove();
            modalBackground.remove();
        })
    }

    //상품 카테고리 아이콘 기능 구현
    const [allClicked, setAllClick] = useState(false);
    const [productClicked, setProductClick] = useState(false);
    const [categoryClicked, setCategoryClick] = useState(false);
    const [exhibitionClicked, setExhibitionClick] = useState(false);
    const [brandClicked, setBrandClick] = useState(false);

    const allClick=() => {
        setAllClick(true);
        setProductClick(false);
        setCategoryClick(false);
        setExhibitionClick(false);
        setBrandClick(false);
        setCurrentProductsList(allProductsList);
    }
    const productClick=() => {
        setAllClick(false);
        setProductClick(true);
        setCategoryClick(false);
        setExhibitionClick(false);
        setBrandClick(false);
        setCurrentProductsList(()=> (
            allProductsList.filter((e)=>e.type === 'Product')
        ));
    }
    const categoryClick=() => {
        setAllClick(false);
        setProductClick(false);
        setCategoryClick(true);
        setExhibitionClick(false);
        setBrandClick(false);
        setCurrentProductsList(()=> (
            allProductsList.filter((e)=>e.type === 'Category')
        ));
    }
    const exhibitionClick=() => {
        setAllClick(false);
        setProductClick(false);
        setCategoryClick(false);
        setExhibitionClick(true);
        setBrandClick(false);
        setCurrentProductsList(()=> (
            allProductsList.filter((e)=>e.type === 'Exhibition')
        ));
    }
    const brandClick=() => {
        setAllClick(false);
        setProductClick(false);
        setCategoryClick(false);
        setExhibitionClick(false);
        setBrandClick(true);
        setCurrentProductsList(()=> (
            allProductsList.filter((e)=>e.type === 'Brand')
        ));
    }

    return (
        <main className='main'>
            <ul className='category-icon-container'>
                <CategoryIcon categoryImg={'../all_icon.png'} categoryTitle={'전체'} onClick={allClick} isClicked={allClicked}/>
                <CategoryIcon categoryImg={'../product_icon.png'} categoryTitle={'상품'} onClick={productClick} isClicked={productClicked} />
                <CategoryIcon categoryImg={'../category_icon.png'} categoryTitle={'키테고리'} onClick={categoryClick} isClicked={categoryClicked} />
                <CategoryIcon categoryImg={'../exhibition_icon.png'} categoryTitle={'기획전'} onClick={exhibitionClick} isClicked={exhibitionClicked} />
                <CategoryIcon categoryImg={'../brand_icon.png'} categoryTitle={'브랜드'} onClick={brandClick} isClicked={brandClicked} />
            </ul>
            <div className='products-container'>
                {currentProductsList.map((e)=>(<MainAllProducts key={e.id} id={e.id}
                title={e.type === 'Category'? '#'+e.title : e.type ==='Brand' ? e.brand_name : e.title}
                img={e.brand_image_url !== null ? e.brand_image_url : e.image_url}
                subTitle={e.sub_title}
                price={e.price}
                bookmark={bookmark}
                bookmarkHandler={bookmarkHandler}
                clickImg={clickImg}
                discount={e.discountPercentage}
                follower={e.follower}
                type={e.type}
                />))}
            </div>
        </main>

    )
}