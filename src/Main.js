import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./components/App";
import Home from "./page/Home";
import About from "./page/About";
import Collection from "./page/Collection";
import Product from "./page/Product";
import Detail from "./page/Detail";
import NotFound from "./page/NotFound";
import WishList from './page/WishList';

export default function Main() {
    return (
        <BrowserRouter>
            <App>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="about" element={<About/>} />
                    <Route path="collection" element={<Collection/>} />
                    <Route path="product">
                    <Route index element={<Product/>}/>    
                    <Route path=":slug" element={<Detail/>}/>    
                    </Route>
                    <Route path="wishlist" element={<WishList />} />
                    <Route path="*" element={<NotFound />}/>
                </Routes>
        </App>
        </BrowserRouter>
    )
}