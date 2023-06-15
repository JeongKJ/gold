import {  useNavigate, useParams } from "react-router-dom";
import { Checkdata,addWishList, similar } from '../api/api'
import './Detail.css';
import { Subdetail } from "./Subdetai";

export default function Detail() {
    const { slug } = useParams();
    const data = Checkdata(slug);
    const more = similar(slug);
    const navigate = useNavigate();
    const handleAddWishList= ()=>{
        addWishList(data?.slug)
        navigate('/wishlist')
    }
    return (
        <div id="detailcont">
        <div className="detail">
            <img src={`../${data.img2}`} alt="이미지"></img>
            <dl>
                <dt>{data.title}</dt>
                <dd>{data.price} €</dd>
                <dd>Size</dd>
                <dd><input type="text" value="onesize" disabled/></dd>
                <dd>Quantities</dd>
                <dd><input type="text" value="1" disabled/></dd>
                <dd>{data.detail}</dd>
                <dd>MADE IN FRANCE</dd>
            <button type="button" onClick={handleAddWishList}>Add To Cart</button>
            </dl>
            </div>
            <Subdetail />
        </div>
        
    )
}