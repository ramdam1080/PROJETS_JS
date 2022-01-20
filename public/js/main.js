let barre = document.querySelector('.nav-responsive');
let linav = document.querySelectorAll('.form>li')
let section3 = document.querySelector('.section3')
let nav = document.querySelector('nav')
let ulnav = document.querySelectorAll('nav>ul>li>a')
let imgnav = document.querySelector('.logo')
let papaimg = document.querySelector('.parentlogo')
let icon = document.querySelector('.icon')
let header = document.querySelector('header')


barre.addEventListener('click', () => {
    linav.forEach(element => {
        if (element.style.display == "none") {
            element.style.display = "block"
        } else {
            element.style.display = "none"
        }
    });
})
window.addEventListener('scroll', () => {
    if (window.scrollY >= 408) {
        nav.style.position = "fixed"
        nav.style.top = "0px"
        nav.style.backgroundColor = "black"
        ulnav.forEach(element => {
            element.style.color = "white"
        });
        nav.style.width = "100%"
        header.style.height = "700px"
        nav.classList.remove("class", "mx-5")
        imgnav.setAttribute("src", "./public/img/white-logo.png")
        papaimg.style.textAlign = "center"
        icon.style.justifyContent = "center"
        icon.classList.remove("justify-content-end")
    } else {
        nav.removeAttribute('style', 'position')
        nav.style.backgroundColor = ""
        ulnav.forEach(element => {
            element.style.color = "black"
        });
        imgnav.setAttribute("src", "./public/img/logo.png")
        header.style.height = "780px"
    }
})

class Fashion {
    constructor(img, b, t) {
        this.img = img;
        this.b = b;
        this.t = t;
    }

}

let titre_section3 = document.createElement('div')
let h3 = document.createElement('h3')
let p = document.createElement('p')
let p2 = document.createElement('p')

section3.appendChild(titre_section3)
section3.style.padding = "80px 0px"
h3.textContent ="Recent Product"
titre_section3.appendChild(h3)
titre_section3.style.textAlign ="center"
p.textContent = "lorem ipsum dolor sit amet, consectetur voili voilou"
titre_section3.appendChild(p)
p2.textContent = "Lorem ipsum dolor sit amet, consectetur"
titre_section3.appendChild(p2)

let img1 = new Fashion('./public/img/fashion/fashion-recent-products-01-1-1.jpg','textured sweater', '$50.00')
let img2 = new Fashion('./public/img/fashion/fashion-recent-products-02-1-1.jpg','traveller shirt', '$510.00')
let img3 = new Fashion('./public/img/fashion/fashion-recent-products-01-b.jpg','crewneck Sweatshirt', '$20.00 - $50.00')
let img4 = new Fashion('./public/img/fashion/fashion-recent-products-04.jpg','skinny trousers', '<del>$200.00</del> $160.00')
let img5 = new Fashion('./public/img/fashion/fashion-recent-products-05-1.jpg','Crewneck Sweatshirt', '<del>$40.00</del> $35.00')
let img6 = new Fashion('./public/img/fashion/fashion-recent-products-06-1.jpg','Sleeve Sweater', '<del>$140.00</del> $120.00')
let img7 = new Fashion('./public/img/fashion/fashion-recent-products-07-1.jpg','Pocket Sweatshirt', '$410.00')
let img8 = new Fashion('./public/img/fashion/fashion-recent-products-08-1.jpg','Top With Pleated', '$20.00 - $50.00')
let img9 = new Fashion('./public/img/fashion/fashion-recent-products-01-d.jpg','Cotton Sweater', '<del>$180.00</del> - $155.00')
let img10 = new Fashion('./public/img/fashion/fashion-recent-products-10-1.jpg','Texture plain Regular', '<del>$85.00</del> - $70.00')

