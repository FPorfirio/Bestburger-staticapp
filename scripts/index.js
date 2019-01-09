//Element variables

const ingredients_descriptions = document.getElementsByClassName('section-ingredients__description');
const ingredients_elements = document.getElementsByClassName('section-ingredients__element');
const navbar = document.getElementsByClassName('banner__nav');
const navToggle = document.getElementsByClassName('banner__nav-toggle')
const navIcon = document.getElementsByClassName('banner__nav-icon')
const main = document.getElementsByClassName('main');
const wrapper = document.getElementsByClassName('wrapper');
const header = document.getElementsByClassName('banner');



//Dynamic dropdown menu

navToggle[0].addEventListener('click', function(e){
   navbar[0].classList.toggle('banner__nav--open');
   main[0].classList.toggle('main--open-menu')
   navIcon[0].classList.toggle('banner__nav-icon--closed')
})

//Resize adjustment styles && throtler

let timeout;
function throtler(){
    if(!timeout){
        timeout = setTimeout(function(){
            timeout = null;
            addStyle()
        }, 500)
    } 
}

function addStyle(){
    let windowsWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    console.log("timeout")
    
    if(windowsWidth > 800 && main[0].classList.contains('main--open-menu')){
        main[0].classList.remove('main--open-menu')
        navbar[0].classList.remove('banner__nav--open')
    }

    else if(windowsWidth <= 750){
        window.removeEventListener('scroll', scrollHandler);
        for(let i = 0; i < ingredients_descriptions.length; i++){
            ingredients_descriptions[i].classList.remove('section-ingredients__description--show')
        }
    }
    else{
        window.addEventListener('scroll', scrollHandler)
    }
}

window.addEventListener('resize', throtler)

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
    if(windowsWidth > 750){
        var scrollHeight = viewPortSize + document.documentElement.scrollTop;
        for(let i = 0; i < eleDistances.length; i++){
            if(scrollHeight >= eleDistances[i]){
                ingredients_descriptions[i].classList.add('section-ingredients__description--show')
            } 
       }

       
    }  
 }

window.addEventListener("scroll", scrollHandler)
    
    
    /*
    if(scrollHeight >= eleDistances[0]){
        ingredients_descriptions[0].classList.add('section-ingredients__description--show')
    } 
    if(scrollHeight >= eleDistances[1]){
        ingredients_descriptions[1].classList.add('section-ingredients__description--show')
    } 
    if(scrollHeight >= eleDistances[2]){
        ingredients_descriptions[2].classList.add('section-ingredients__description--show')
    } 
    if(scrollHeight >= eleDistances[3]){
        ingredients_descriptions[3].classList.add('section-ingredients__description--show')
    } 
    if(scrollHeight >= eleDistances[4]){
        ingredients_descriptions[4].classList.add('section-ingredients__description--show')
    } 
    if(scrollHeight >= eleDistances[5]){
        ingredients_descriptions[5].classList.add('section-ingredients__description--show')
    } 
    if(scrollHeight >= eleDistances[6]){
        ingredients_descriptions[6].classList.add('section-ingredients__description--show')
    } 
    if(scrollHeight >= eleDistances[7]){
        ingredients_descriptions[7].classList.add('section-ingredients__description--show')
    }
*/



//Touch event animations

for(let i = 0; i < ingredients_elements.length; i++){
    ingredients_elements[i].addEventListener('touchstart', function(e){
        ingredients_descriptions[i].classList.toggle('section-ingredients__description--show')
    })
    ingredients_elements[i].addEventListener('touchend', function(e){
        ingredients_descriptions[i].classList.remove('section-ingredients__description--show')
    })
}

