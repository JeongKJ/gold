import Img1 from '../assets/c-1.jpg';
import Img2 from '../assets/c-2.JPG';
import Img3 from '../assets/c-3.JPG'
import Img4 from '../assets/c-4.jpg'
import Img5 from '../assets/c-5.JPG'
import Img6 from '../assets/c-6.JPG'
import Img7 from '../assets/c-7.JPG'
import Img8 from '../assets/c-8.JPG'
import Img9 from '../assets/c-9.JPG'
import Img10 from '../assets/c-10.JPG'
import Img11 from '../assets/c-11.JPG'
import Img12 from '../assets/c-12.JPG'
import Img13 from '../assets/c-13.JPG'
import Img14 from '../assets/c-145.JPG'
import Img15 from '../assets/c-15.JPG'
import Img16 from '../assets/c-16.jpg'
import Img17 from '../assets/c-17.JPG'
import './Collection.css'
import { useState } from 'react';
import Modal from './Modal';

const img1 = Img1;
const img2 = Img2;
const img3 = Img3;
const img4 = Img4;
const img5 = Img5;
const img6 = Img6;
const img7 = Img7;
const img8 = Img8;
const img9 = Img9;
const img10 = Img10;
const img11= Img11;
const img12 = Img12;
const img13 = Img13;
const img14 = Img14;
const img15 = Img15;
const img16 = Img16;
const img17 = Img17;

export default function Collection() {
    const [img, setImg]= useState('');
    const [toggle,setToggle] = useState(false);

    return (
        <>
        <div id="collection">
            <h1>LES BIFFINS 2</h1>
            <ul>
                <li onClick={()=>{setImg(img1)
                setToggle(!false)}}><img src={img1} alt='img'></img></li>
                <li onClick={()=>{setImg(img2)
                setToggle(!false)}}><img src={img2} alt='img'></img></li>
                <li onClick={()=>{setImg(img3)
                setToggle(!false)}}><img src={img3} alt='img'></img></li>
            </ul>
            
            <h1>PRINCIPIUM</h1>
            <ul>
                <li onClick={()=>{setImg(img4)
                setToggle(!false)}}><img src={img7} alt='img'></img></li>
                <li onClick={()=>{setImg(img5)
                setToggle(!false)}}><img src={img8} alt='img'></img></li>
                <li onClick={()=>{setImg(img6)
                setToggle(!false)}}><img src={img9} alt='img'></img></li>
                <li onClick={()=>{setImg(img7)
                setToggle(!false)}}><img src={img10} alt='img'></img></li>
            </ul>
            <h1>LES BIFFINS 1</h1>
            <ul>
                <li onClick={()=>{setImg(img8)
                setToggle(!false)}}><img src={img4} alt='img'></img></li>
                <li onClick={()=>{setImg(img9)
                setToggle(!false)}}><img src={img5} alt='img'></img></li>
                <li onClick={()=>{setImg(img10)
                setToggle(!false)}}><img src={img6} alt='img'></img></li>
            </ul>
            <h1>PREPPERS</h1>
            <ul>
                <li onClick={()=>{setImg(img11)
                setToggle(!false)}}><img src={img11} alt='img'></img></li>
                <li onClick={()=>{setImg(img12)
                setToggle(!false)}}><img src={img12} alt='img'></img></li>
                <li onClick={()=>{setImg(img13)
                setToggle(!false)}}><img src={img13} alt='img'></img></li>
                <li onClick={()=>{setImg(img14)
                setToggle(!false)}}><img src={img14} alt='img'></img></li>
            </ul>
            <h1>CONSOMMABLE</h1>
            <ul>
                <li onClick={()=>{setImg(img15)
                setToggle(!false)}}><img src={img15} alt='img'></img></li>
                <li onClick={()=>{setImg(img16)
                setToggle(!false)}}><img src={img16} alt='img'></img></li>
                <li onClick={()=>{setImg(img17)
                setToggle(!false)}}><img src={img17} alt='img'></img></li>
            </ul>
        </div>
            <Modal img={img} toggle={toggle} setToggle={setToggle}/>
            </>
    )
                }
                
