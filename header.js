// Seleciona o menu
const toggleMobile = document.querySelector(".toggle-mobile");

const navbarMobile = document.querySelector(".nav-bar");

toggleMobile.addEventListener("click", () => {
    if(navbarMobile.classList.contains("active")){
        navbarMobile.classList.remove("active");
    } else{
        navbarMobile.classList.add("active");
    }
});