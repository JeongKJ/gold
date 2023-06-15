import { deleteWishList,getWishList } from "../api/api";
import { useEffect, useState } from "react";
import './WishList.css'
export default function WishList() {
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        const NestCourses = getWishList();
        setCourses(NestCourses)
    }, [])

    const removeevent = (course) => {
        deleteWishList(course);
         const NestCourses = getWishList();
        setCourses(NestCourses)
    }

    return (
        <>
        <div className="wishlist">      
            <h1>WishList</h1>
            <ul>
                {courses.map((course)=>(<li key={course.slug}>
                    <figure>
                        <img src={course.img} alt="이미지"/>
                        <figcaption>
                            <dl>
                                <dt>
                                    {course.title}
                                </dt>
                                <dd>
                                    {course.price} €
                                </dd>
                                <dd>
                                    {course.detail}
                                </dd>
                                      <p>
                        <button onClick={()=>removeevent(course.slug)}>버리기</button>
                    </p>
                            </dl>
                        </figcaption>
                    </figure>
                </li>))}   
            </ul>
            
            </div>
            </>
    )

}