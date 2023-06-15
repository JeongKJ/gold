import { Link } from "react-router-dom";
import logo from '../assets/logo.JPG'
import './Nav.css'
import cart from '../assets/free-icon-shopping-cart-1170678.png';

export default function Nav() {
    // const cartnum = localStorage.wishlist;
    // console.log(cartnum);
    // const b = Object.keys(cartnum).length;
    // console.log(b);
    

// const ex_obj = { 'a' : '1st', 'b' : '2nd', 'c' : '3rd', 'd' : '4th' };
// const obj_length = Object.keys(ex_obj).length;
// console.log(obj_length)

    return (
        <header>
            <div>
            <h1><Link to="/"><img src={logo} alt="로고" /></Link></h1>
            <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">-</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/collection">Collection</Link></li>
                        <li><Link to="/wishlist"><img src={cart} alt="cart-img"></img></Link></li>
                </ul>
                </nav>
                </div>
        </header>
    )
}