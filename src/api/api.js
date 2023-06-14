
import pro from './data.json';

export function Check(keyword) {
    if (!keyword) return pro;
    return searchkeyword(pro,keyword);
}
function searchkeyword(item, keyword) {
    const small = keyword.toLowerCase();
    return item.filter(({ title }) => title.toLowerCase().includes(small))
}
export function Checkdata(slug) {
    return pro.find((data)=>data.slug===slug);
}
export function category(data) {   
    return pro.filter(({ category }) => category === data);
}
export function similar(slug) {
    return pro.filter(({category}) => category === (pro.find((data) => data.slug === slug).category));
}


const WISHLIST_KEY = 'wishlist'
const wishlist = JSON.parse(localStorage.getItem(WISHLIST_KEY)|| '{}')

export function getWishList(){
    return pro.filter((data)=> wishlist[data.slug]);
}
export function addWishList(slug){
    wishlist[slug] = true;
    localStorage.setItem(WISHLIST_KEY,JSON.stringify(wishlist));
}
export function deleteWishList(slug){
    delete wishlist[slug];
    localStorage.setItem(WISHLIST_KEY,JSON.stringify(wishlist))
}
