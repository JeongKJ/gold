import img from '../assets/Home.png';
import img2 from '../assets/home2.jpg'
import img4 from '../assets/home4.jpg'
import img3 from '../assets/home3.jpg'
import './Home.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import SwiperCore, { Navigation, EffectFade, Pagination, Autoplay } from 'swiper';
import { Check } from '../api/api';
import { Link } from 'react-router-dom';

export default function Home() {
    SwiperCore.use([Autoplay]);
    const pro = Check();
    const list = pro.filter((data)=>data.title.includes('DROP'))
    return (
        <div id="box">
             <div className="mainimg">
                <Swiper
                     style={{
            width: "1903",
            height: "600px",
          }}
            // effect={"fade"}
                autoplay={{
                delay: 2000,
                disableOnInteraction: false}}
        modules={[Navigation, EffectFade, Pagination,Autoplay]}
        className="mySwiper"
        loop={true}
      >
      <SwiperSlide><img src={img} alt="이미지"></img></SwiperSlide>
      <SwiperSlide><img src={img2} alt="이미지"></img></SwiperSlide>
      <SwiperSlide><img src={img3} alt="이미지"></img></SwiperSlide>
      <SwiperSlide><img src={img4} alt="이미지"></img></SwiperSlide>
    </Swiper>
            </div>
            <div className='sub'>
                <h1>Best Item</h1>
                <ul>
                    <p><Link to="/product">more</Link></p>
            {list.map((item) => (<li key={item.id}>
                  <figure>
                    <img src={item.img} alt="이미지"/>
                    <figcaption>
                        <dl>
                            <dt>
                                <Link to={`product/${item.slug}`}>{item.title}</Link>
                            </dt>
                            <dd>
                                {item.price} €
                            </dd>
                        </dl>
                    </figcaption>
                </figure>
            </li>))}
                </ul>
        </div>           
            </div>

    )
}
// Import Swiper React components


// Import Swiper styles


