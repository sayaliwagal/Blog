
//search bar
const searchOn = document.querySelector('#searchopen');
const searchOff = document.querySelector('#removesearch');
const searchInput = document.querySelector('.searchinput');

searchInput.style.display = 'none';

searchOn.addEventListener('click', () =>{
    if(searchInput.style.display === 'none')
        searchInput.style.display = 'flex';
    // else
    //     searchInput.style.display = 'none';
});

searchOff.addEventListener('click', () =>{
    if(searchInput.style.display === 'flex')
        searchInput.style.display = 'none';
    // else
    //     searchInput.style.display = 'flex';
});

//slider header 
const posts = [
    {
        title: "Browny Cookies",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel dolor molestias,dignissimos numquam obcaecati.",
        link: "https://google.com/",
        bgImg: "/images/dark-chocolate-halloween-cookies-1b.webp",
        label: "Cookies"

    },
    {
        title: "Caramel Cookies",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel dolor molestias,dignissimos numquam obcaecati.",
        link: "https://google.com/",
        bgImg: "/images/caramel_cookies.jpg",
        label: "Cookies"

    },
    {
        title: "Browny Cake",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel dolor molestias,dignissimos numquam obcaecati.",
        link: "https://google.com/",
        bgImg: "/images/sq-round-rosey-brown-chocolate-cake-cake2570choc-A_1.avif",
        label: "Cakes"

    },
    {
        title: "Cheesay Pizza",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel dolor molestias,dignissimos numquam obcaecati.",
        link: "https://google.com/",
        bgImg: "/images/pizza.webp",
        label: "Pizzas"

    },
    {
        title: "Red Sause Pasta",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel dolor molestias,dignissimos numquam obcaecati.",
        link: "https://google.com/",
        bgImg: "/images/red_sauce_past.jpg",
        label: "Pastas"

    },
    {
        title: "Spicy Thai Noodles",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam vel dolor molestias,dignissimos numquam obcaecati.",
        link: "https://google.com/",
        bgImg: "/images/Spicy-Thai-Noodles-5.jpg",
        label: "Noodles"

    }
];

let currSlide = 0;

function showSlide(slidIndex){
    const slide = posts[slidIndex];
    document.querySelector('.header-title').textContent = slide.title;
    document.querySelector('.header-pera').textContent = slide.desc;
    document.querySelector('.hearder-btn').href = slide.link;
    document.querySelector('.header-img').style.backgroundImage = `url(${slide.bgImg})`;
    
}

// initial slide
showSlide(currSlide);

//header Posts Chnage Slider
const headerPosts = document.querySelector('.header-cards');

const headerPostsCards = () => {
    const updateSlider = () => {
        headerPosts.innerHTML = '';

        for(let i = currSlide; i < currSlide + 6; i++){
            const post = posts[i % posts.length];
            const postElements = document.createElement('a');
            postElements.classList.add('.header-card');
            postElements.classList.add('.flex');
            postElements.href =`${post.link}`;
            postElements.innerHTML =`
            <div class="header-card flex"> 
            <img src="${post.bgImg}" alt="">
                    <div class="h-card-info">
                        <span>${post.label}</span>
                        <h3>${post.title}</h3>
                    </div>
                    </div>
                    `

            headerPosts.appendChild(postElements);
        }
    };

    // left right scroll 
    const leftbtn = document.getElementById('s-left');
    const rightbtn = document.getElementById('s-right');

    leftbtn.addEventListener('click', () =>{
        //6 posts show at headerslider
        currSlide = (currSlide - 1 + posts.length) % posts.length;
        updateSlider();
        showSlide(currSlide);
    });


   rightbtn.addEventListener('click', () =>{
    currSlide = (currSlide + 1) % posts.length;
    updateSlider();
    showSlide(currSlide);
   })

    updateSlider();
}

headerPostsCards();

function nextSlide(){
    currSlide = (currSlide + 1) % posts.length;
    showSlide(currSlide);
    headerPostsCards(currSlide);
};

//Change slide after every 3 seconds
setInterval(nextSlide, 3000)

// nav Sticky 

const nav = document.querySelector('.mainnav');

window.addEventListener('scroll', () =>{
    if(document.documentElement.scrollTop > 2){
        nav.classList.add('sticky');
    }else{
        nav.classList.remove('sticky');
    }
})


//Darkmood 
const darkmood = document.querySelector('#checkbox');
let body = document.body;
const logoImage = document.querySelector('.logo img');
const logoImage1 = document.querySelector('.title-icon img')

//check if there is a stored dark mode preference in localstorage
const idDarkMode = localStorage.getItem('darkmood') === 'true';

//set the initial state based on the stored preference.

if(idDarkMode) {
    body.classList.add('dark')
    darkmood.checked = true;
    logoImage.src = '/images/sayâ__s_recipes_dark-transformed.png'
    logoImage1.src = '/images/recipes_dark-transformed.png'
}else{
logoImage.src = '/images/sayâ__s_recipes-eeuplmY7q-transformed.png'
logoImage1.src = '/images/Untitled_design-npkCckjZc-transformed.png'
}

darkmood.addEventListener('change', ()=>{
    if(darkmood.checked){
        body.classList.add('dark')
        logoImage.src = '/images/sayâ__s_recipes_dark-transformed.png'
        logoImage1.src = '/images/recipes_dark-transformed.png'
        localStorage.setItem('darkmode', 'true');
    }else{
        body.classList.remove('dark')
        logoImage.src = '/images/sayâ__s_recipes-eeuplmY7q-transformed.png'
        logoImage1.src = '/images/Untitled_design-npkCckjZc-transformed.png'
        localStorage.setItem('darkmood', 'false');
    }
});

// navbar toggle btn 
const navDiv = document.querySelector('.navonoff');
const navToggle = document.querySelector('#checkbox1');
const navList = document.querySelector('.navlist');

navToggle.addEventListener('change', () => {
    if(navToggle.checked){
        navList.style.right = '-150px'
    }else{
        navList.style.right = '-400px'
    }
})

