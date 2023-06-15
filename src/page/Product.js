import { Link, useSearchParams } from 'react-router-dom';
import {Check} from '../api/api'
import './Product.css';
import { useState } from 'react';
// import Category from './Category';
import { category } from '../api/api';

export default function Product() {
    const [search, setSearch] = useSearchParams();
    const initKeyword = search.get('keyword')
    const [keyword, setKeyword] = useState(initKeyword || '');
    const keywordchange = (e) => setKeyword(e.target.value);
    const pro = Check(initKeyword);
    const submitsearch = (e) => {
        setCatego('');
        e.preventDefault();
        setSearch(keyword ? { keyword } : {})
    }
    const [catego, setCatego] = useState('')
    const setCate = category(catego);
    if(catego ==='') {
        return (
            <div className="itembox">
            <form onSubmit={submitsearch}>
            <input type="text" placeholder=" Search..."  onChange={keywordchange} />
            </form>
                <div className='ulgroup'>
       <ul>
              <li>Categories</li>
              <li onClick={()=>setCatego("ring")}>ring</li>  
              <li onClick={()=>setCatego("earring")}>earring</li>  
              <li onClick={()=>setCatego("necklace")}>necklaces</li>  
              <li onClick={()=>setCatego("bracelet")}>bracelet</li>  
            </ul>
            <ul>
                {pro.map((data) => (<li key={data.id}>
                                        <Link to={data.slug}><figure>
                        <img src={data.img} alt="이미지"/>
                        <figcaption>
                            <dl>
                                <dt>
                                    {data.title}
                                </dt>
                                <dd>
                                    {data.price} €
                                </dd>
                            </dl>
                        </figcaption>
                    </figure>
                        </Link>
                </li>))}
                </ul>
                </div>
        </div>
    )
}

    if (setCate !== '') {
        return (
            <div className="itembox">
            <form onSubmit={submitsearch}>
            <input type="text" placeholder="Search..."  onChange={keywordchange} />
            </form>
            <div className='ulgroup'>
            <ul>
              <li>Categories</li>
              <li onClick={()=>setCatego("ring")}>ring</li>  
              <li onClick={()=>setCatego("earring")}>earring</li>  
              <li onClick={()=>setCatego("necklace")}>necklaces</li>  
              <li onClick={()=>setCatego("bracelet")}>bracelet</li>  
            </ul>
            <ul>
            {setCate.map((data) => (<li key={data.id}>
                                    <Link to={data.slug}><figure>
                    <img src={data.img} alt="이미지"/>
                    <figcaption>
                        <dl>
                            <dt>
                                {data.title}
                            </dt>
                            <dd>
                                {data.price} €
                            </dd>
                        </dl>
                    </figcaption>
                </figure>
                    </Link>
            </li>))}
            </ul>
                </div>
                </div>
        )
    }

}