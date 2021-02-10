// navbar toggle
let toggleNav = document.querySelector('.nav-toggle');
let linksContainer = document.querySelector('.links-container');
let links = document.querySelector('.links');
toggleNav.addEventListener('click', () => {
    // nav.classList.toggle('show-links'); we will not use this because when the height of content inside nav will increase then also the nav will have height only 200 px which is hardcoded.
    
    const containerHeight = linksContainer.getBoundingClientRect().height;
    let linskHeight = links.getBoundingClientRect().height;
    
    // here height of container is set 0 but not of links(child object). so height of links will be its original height.
    if(containerHeight == 0)
    {
        linksContainer.style.height = linskHeight + 'px';
    }
    else
    {
        linksContainer.style.height = 0;
    }
})


// fixed navbar
window.addEventListener('scroll', function(){
    // console.log(window.scrollY);    // or window.pageYOffset'
    let nav = document.getElementById('nav');
    let topLink = document.querySelector('.top-link');
    if(window.scrollY > nav.offsetHeight)
    {
        nav.classList.add('fixed-nav');
        topLink.classList.add('show-link');
    }
    else
    {
        topLink.classList.remove('show-link');
        nav.classList.remove('fixed-nav');
    }
});


// scroll to sections
const scrollLinks = document.querySelectorAll('.scroll-link');
const nav = document.querySelector('nav')
scrollLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        linksContainer.style.height = 0;// close the navbar when in smaller devices
        
        const id = e.currentTarget.getAttribute('href');
        const section = document.querySelector(id);
        let navHeight = nav.offsetHeight;

        let containerHeight = linksContainer.offsetHeight;// when in smaller devices, we need to subtract the height of linksContainer

        let navFixed = nav.classList.contains('fixed-nav'); // using this boolean because when navbar is fixed the position value is different than when the navbar is not fixed
        // so when the position changes to fixed, we have to subtract height of navbar 2 times
        
        let position = navFixed ? section.offsetTop - navHeight : section.offsetTop - (2*navHeight) ;
        
        if(navHeight > 82)
        {
            position += containerHeight;
        }

        window.scrollTo({left:0, top: position})
        
    })
})



// date in footer
let date = new Date();
document.querySelector('#date').innerText = date.getFullYear();