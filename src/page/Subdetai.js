import { useParams } from "react-router-dom";
import { similar } from '../api/api'
import { Link } from "react-router-dom";
import './Subdetail.css';
export function Subdetail() {
    const { slug } = useParams();
    const more = similar(slug);
    return (
        <div className="subdetail">
            <h1>연관상품</h1>
            <ul>
                {more.map((data) => 
                (<li key={data.id}>
                    <Link to={`/product/${data.slug}`}>
                        <figure>
                            <img src={`../${data.img}`} alt="이미지" />
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
                </li>
))}
            </ul>
            </div>
    )
}

