import { useState } from 'react';
import { Photo } from '../api/api';
import './Collection.css'
import Modal from './Modal';

export default function Collection() {
    const photo = Photo();
    const [url, setUrl] = useState('');
    console.log(url)
    return (
        <>
        <div id="collection">
            <h1>LES BIFFINS 2</h1>
            <ul>
            {photo.filter((data)=>data.id<4).map((data) => <li key={data.id}
                onClick={() => {
                    document.querySelector('.modalwrap').style.display = "block"
                    setUrl(data.url);
                }}>
            <img src={data.url} alt='img'/>
               </li>)} 
            </ul>
            
                            <h1>LES BIFFINS 1</h1>
                <ul>
                    {photo.filter((data)=>data.id>6 && data.id<11).map((data) => <li key={data.id}
                onClick={() => {
                    document.querySelector('.modalwrap').style.display = "block"
                    setUrl(data.url);
                }}>
            <img src={data.url} alt='img'/>
               </li>)} 
            </ul>

                <h1>PRINCIPIUM</h1>
                <ul>    
                    {photo.filter((data)=>data.id>3 && data.id<7).map((data) => <li key={data.id}
                onClick={() => {
                    document.querySelector('.modalwrap').style.display = "block"
                    setUrl(data.url);
                }}>
            <img src={data.url} alt='img'/>
               </li>)} 
            </ul>

            <h1>PREPPERS</h1>
             <ul>
                    {photo.filter((data)=>data.id>10 && data.id<15).map((data) => <li key={data.id}
                    onClick={() => {
                    document.querySelector('.modalwrap').style.display = "block"
                    setUrl(data.url);
                }}>
            <img src={data.url} alt='img'/>
               </li>)} 
                </ul>
                <h1>CONSOMMABLE</h1>
                 <ul>
                {photo.filter((data)=>data.id>14 && data.id<18).map((data) => <li key={data.id}
                onClick={() => {
                document.querySelector('.modalwrap').style.display = "block"
                    setUrl(data.url);
                }}>
            <img src={data.url} alt='img'/>
               </li>)} 
            </ul>
        </div>
            <Modal photo={url} />
            </>
    )
                }
                
