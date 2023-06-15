import { Link } from "react-router-dom";
import logo from '../assets/logo.JPG'
import './Nav.css'
import cart from '../assets/free-icon-shopping-cart-1170678.png';

export default function Nav() {
    const a = localStorage.getItem('wishlist');
    const b = JSON.parse(a);
    const count = Object.keys(b).length;
    console.log(count);
    return (
        <header>
            <div>
            <h1><Link to="/"><img src={logo} alt="로고" /></Link></h1>
            <nav>
                    <ul>
                   <p>{count}</p> 
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">-</Link></li>
                    <li><Link to="/product">Product</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/collection">Collection</Link></li>
                        <li>
                            
                            <Link to="/wishlist"><img src={cart} alt="cart-img"/></Link></li>
                </ul>
                </nav>
                </div>
        </header>
    )
}