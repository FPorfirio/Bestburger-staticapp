//Element variables

const ingredients_descriptions = document.getElementsByClassName('section-ingredients__description');
const ingredients_elements = document.getElementsByClassName('section-ingredients__element');
const navbar = document.getElementsByClassName('banner__nav');
const navToggle = document.getElementsByClassName('banner__nav-toggle')
const navIcon = document.getElementsByClassName('banner__nav-icon')
const main = document.getElementsByClassName('main');
const wrapper = document.getElementsByClassName('wrapper');
const header = document.getElementsByClassName('banner');

//Globl utility functions

function throtler(callback, delay){  
    const cb = callback;
    let timeout;

    return function(){
        if(!timeout){
            timeout = setTimeout(function(){
                timeout = null;
                cb()
            }, delay)
        } 
    }
}

//Dynamic dropdown menu

navToggle[0].addEventListener('click', function(e){
   navbar[0].classList.toggle('banner__nav--open');
   main[0].classList.toggle('main--open-menu')
   navIcon[0].classList.toggle('banner__nav-icon--closed')
})

//Resize adjustment styles & events

function addStyle(){
    let windowsWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    console.log("sheeet")
    
    if(windowsWidth > 800 && main[0].classList.contains('main--open-menu')){
        main[0].classList.remove('main--open-menu')
        navbar[0].classList.remove('banner__nav--open')
    }

    else if(windowsWidth <= 750){
        window.removeEventListener('scroll', scrollThrotler);
        for(let i = 0; i < ingredients_descriptions.length; i++){
            ingredients_descriptions[i].classList.remove('section-ingredients__description--show')
        }
    }
    else{
        window.addEventListener('scroll', scrollThrotler)
    }
}
const reziseThrotler = throtler(addStyle, 500);
window.addEventListener('resize', reziseThrotler);

//Scroll event animations

function getDistance(element){
    let distances = [];

    for(let i = 0; i < ingredients_descriptions.length; i++){
        let ele = element[i].getBoundingClientRect().top + element[i].clientHeight + document.documentElement.scrollTop
        distances.push(ele)
    }
    return distances;
}

const eleDistances = getDistance(ingredients_elements)
const viewPortSize = document.documentElement.clientHeight;
let windowsWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

function scrollHandler(e){
    console.log("asd")
    if(windowsWidth > 750){
        var scrollHeight = viewPortSize + document.documentElement.scrollTop;
        for(let i = 0; i < eleDistances.length; i++){
            if(scrollHeight >= eleDistances[i]){
                ingredients_descriptions[i].classList.add('section-ingredients__description--show')
            } 
       }

       
    }  
 }
const scrollThrotler = throtler(scrollHandler, 300);
window.addEventListener("scroll", scrollThrotler);

//Touch event animations

for(let i = 0; i < ingredients_elements.length; i++){
    ingredients_elements[i].addEventListener('touchstart', function(e){
        ingredients_descriptions[i].classList.toggle('section-ingredients__description--show')
    })
    ingredients_elements[i].addEventListener('touchend', function(e){
        ingredients_descriptions[i].classList.remove('section-ingredients__description--show')
    })
}

