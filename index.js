window.addEventListener("scroll", ()=>{
    const navbar = document.querySelector(".navbar-items")
    if(window.scrollY > 160){

        navbar.classList.add("sticky")
    }else{
        navbar.classList.remove("sticky")
    }
    
})