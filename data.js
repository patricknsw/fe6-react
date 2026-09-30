export const pageLinks = [

    {id : 1 , href: "#home", text: "home" } ,
    {id : 2 , href: "#about", text: "about" } ,
    {id : 3 , href: "#services", text: "services" } ,
    {id : 4 , href: "#tours", text: "tours" } ,


]


export const socialLinks = [
    {id : 1 , href: "www.facebook.com", iconClass: "fa-brands fa-facebook"  } ,
    {id : 2 , href: "www.threads.com", iconClass: "fa-brands fa-threads"  } ,
    {id : 3 , href: "www.twitter.com", iconClass: "fa-brands fa-x-twitter"  } ,


]


export const services = [
    {id: 1 , icon: "fa-solid fa-wallet" , title: "saving money" , info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nemo."},
    {id: 2 , icon: "fa-solid fa-tree" , title: "Endless Hiking" , info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nemo."},
    {id: 3 , icon: "fa-solid fa-socks" , title: "amazing comfort" , info:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, nemo."},
]

import tour1 from './src/assets/datingscout-BmfXYrGqKJw-unsplash.jpg';
import tour2 from './src/assets/priscilla-du-preez-KoF1cXdF9Ws-unsplash.jpg';
import tour3 from './src/assets/north-bengal-tourism-bef8eOLXXCY-unsplash.jpg';
import tour4 from './src/assets/holly-mandarich-kCpCd6oQTCw-unsplash.jpg';

export const tours = [
    {id: 4 , 
        image: tour1 , 
        date: "september 26th, 2026" , 
        title: "mount 1", 
        info: "Tour 1 Lorem ipsum dolor sit amet consectetur " , 
        location: "china" , 
        duration: "6" , 
        price: "2100",
    },
    {id: 1 , 
        image: tour2 , 
        date: "Oct 26th, 2026" , 
        title: "mount 2", 
        info: "Tour 2 Lorem ipsum dolor sit amet consectetur " , 
        location: "Hong Kong" , 
        duration: "5" , 
        price: "2500",
    },   
    {id: 3 , 
        image: tour3 , 
        date: "Nov 26th, 2026" , 
        title: "mount 3", 
        info: "Tour 3 Lorem ipsum dolor sit amet consectetur " , 
        location: "Japan" , 
        duration: "7" , 
        price: "2000",
    },   
    {id: 4 , 
        image: tour4 , 
        date: "Jan 26th, 2026" , 
        title: "mount 4", 
        info: "Tour 4 Lorem ipsum dolor sit amet consectetur" , 
        location: "Twain" , 
        duration: "10" , 
        price: "3000",
    },
];