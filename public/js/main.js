let barre = document.querySelector('.nav-responsive');
let nav = document.querySelectorAll('.form>li')
console.log(nav);

barre.addEventListener('click', () =>{
nav.forEach(element => {
    if (element.style.display == "none") {
        element.style.display = "block"
    }else{
        element.style.display = "none"
    }
});


})