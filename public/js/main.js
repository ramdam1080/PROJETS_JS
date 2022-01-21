let barre = document.querySelector('.nav-responsive');
let linav = document.querySelectorAll('.form>li')
let section3 = document.querySelector('.section3')
let nav = document.querySelector('nav')
let ulnav = document.querySelectorAll('nav>ul>li>a')
let imgnav = document.querySelector('.logo')
let papaimg = document.querySelector('.parentlogo')
let icon = document.querySelector('.icon')
let header = document.querySelector('header')
let panier = document.querySelector('.panier')
let coeurlogo = document.querySelector('.coeur')

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
h3.textContent = "Recent Product"
titre_section3.appendChild(h3)
titre_section3.style.textAlign = "center"
p.textContent = "lorem ipsum dolor sit amet, consectetur voili voilou"
titre_section3.appendChild(p)
p2.textContent = "Lorem ipsum dolor sit amet, consectetur"
titre_section3.appendChild(p2)
// section3.style.zIndex = "0"
let img1 = new Fashion('./public/img/fashion/fashion-recent-products-01-1-1.jpg', 'textured sweater', '$50.00')
let img2 = new Fashion('./public/img/fashion/fashion-recent-products-02-1-1.jpg', 'traveller shirt', '$510.00')
let img3 = new Fashion('./public/img/fashion/fashion-recent-products-01-b.jpg', 'crewneck Sweatshirt', '$20.00 - $50.00')
let img4 = new Fashion('./public/img/fashion/fashion-recent-products-04.jpg', 'skinny trousers', '<del>$200.00</del> $160.00')
let img5 = new Fashion('./public/img/fashion/fashion-recent-products-05-1.jpg', 'Crewneck Sweatshirt', '<del>$40.00</del> $35.00')
let img6 = new Fashion('./public/img/fashion/fashion-recent-products-06-1.jpg', 'Sleeve Sweater', '<del>$140.00</del> $120.00')
let img7 = new Fashion('./public/img/fashion/fashion-recent-products-07-1.jpg', 'Pocket Sweatshirt', '$410.00')
let img8 = new Fashion('./public/img/fashion/fashion-recent-products-08-1.jpg', 'Top With Pleated', '$20.00 - $50.00')
let img9 = new Fashion('./public/img/fashion/fashion-recent-products-01-d.jpg', 'Cotton Sweater', '<del>$180.00</del> - $155.00')
let img10 = new Fashion('./public/img/fashion/fashion-recent-products-10-1.jpg', 'Texture plain Regular', '<del>$85.00</del> - $70.00')

class Fashion_dos {
    constructor(dos) {
        this.dos = dos;
    }
}

let img1dos = new Fashion_dos('./public/img/fashion/fashion-recent-products-01-a-1-1.jpg')
let img2dos = new Fashion_dos('./public/img/fashion/fashion-recent-products-02-a-1-1-1.jpg')
let img3dos = new Fashion_dos('./public/img/fashion/fashion-recent-products-03-a-1-1.jpg')
let img4dos = new Fashion_dos('./public/img/fashion/fashion-recent-products-04-a-1.jpg')
let img5dos = new Fashion_dos('./public/img/fashion/fashion-recent-products-05-a-1.jpg')
let img6dos = new Fashion_dos('./public/img/fashion/fashion-recent-products-06-a-1.jpg')
let img7dos = new Fashion_dos('./public/img/fashion/fashion-recent-products-07-a-1.jpg')
let img8dos = new Fashion_dos('./public/img/fashion/fashion-recent-products-08-a.jpg')
let img9dos = new Fashion_dos('./public/img/fashion/fashion-recent-products-09-a-1-1.jpg')
let img10dos = new Fashion_dos('./public/img/fashion/fashion-recent-products-10-a-1.jpg')
let tb_img = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10]
let tb_imgdos = [img1dos, img2dos, img3dos, img4dos, img5dos, img6dos, img7dos, img8dos, img9dos, img10dos]

let flex = document.createElement('div')
section3.appendChild(flex)
flex.style.display = "flex"
flex.style.gap = "15px"
flex.style.flexWrap = "wrap"
flex.style.justifyContent = "center"
section3.style.margin = "0 5%"
flex.style.padding = " 5% 0"
let c = 0
let b = 0
coeurlogo.style.display = "none"

tb_img.forEach((element, i) => {
    let container = document.createElement('div')
    flex.appendChild(container)
    let bgimg = document.createElement('div')
    container.appendChild(bgimg)
    bgimg.style.width = "250px"
    bgimg.style.height = "320px"
    bgimg.style.backgroundImage = `url('${element.img}')`
    bgimg.style.backgroundRepeat = "no-repeat"
    bgimg.style.backgroundSize = "contain"
    let title_img = document.createElement('b')
    title_img.textContent = element.b
    container.appendChild(title_img)
    container.style.textAlign = "center"
    let prix = document.createElement('p')
    prix.innerHTML = element.t
    prix.style.color = "gray"
    container.appendChild(prix)
    
    
    
    bgimg.style.position = "relative"
    let promo = document.createElement('div')
    if (i == 3) {
        bgimg.appendChild(promo)
        promo.style.backgroundColor = "green"
        let p20 = document.createElement('p')
        p20.textContent = "-20%"
        p20.style.color = "white"
        promo.appendChild(p20)
        p20.style.fontSize = "12px"
        promo.style.height = "20px"
        promo.style.width = "40px"
        promo.style.position = "absolute"
        promo.style.top = "15px"
        promo.style.left = "15px"
    } else if (i == 4) {
        bgimg.appendChild(promo)
        promo.style.backgroundColor = "green"
        let p12 = document.createElement('p')
        p12.textContent = "-12%"
        p12.style.color = "white"
        promo.appendChild(p12)
        p12.style.fontSize = "12px"
        promo.style.height = "20px"
        promo.style.width = "40px"
        promo.style.position = "absolute"
        promo.style.top = "15px"
        promo.style.left = "15px"
    } else if (i == 5) {

        bgimg.appendChild(promo)
        promo.style.backgroundColor = "green"
        let p14 = document.createElement('p')
        p14.textContent = "-14%"
        p14.style.color = "white"
        promo.appendChild(p14)
        p14.style.fontSize = "12px"
        promo.style.height = "20px"
        promo.style.width = "40px"
        promo.style.position = "absolute"
        promo.style.top = "15px"
        promo.style.left = "15px"
    } else if (i == 8) {
        bgimg.appendChild(promo)
        promo.style.backgroundColor = "green"
        let p14 = document.createElement('p')
        p14.textContent = "-14%"
        p14.style.color = "white"
        promo.appendChild(p14)
        p14.style.fontSize = "12px"
        promo.style.height = "20px"
        promo.style.width = "40px"
        promo.style.position = "absolute"
        promo.style.top = "15px"
        promo.style.left = "15px"

    } else if (i == 9) {
        bgimg.appendChild(promo)
        promo.style.backgroundColor = "green"
        let p18 = document.createElement('p')
        p18.textContent = "-18%"
        p18.style.color = "white"
        promo.appendChild(p18)
        p18.style.fontSize = "12px"
        promo.style.height = "20px"
        promo.style.width = "40px"
        promo.style.position = "absolute"
        promo.style.top = "15px"
        promo.style.left = "15px"

    }



    let coeur
    let pcoeur
    let flexmouse
    bgimg.addEventListener('mouseenter', () => {
        coeur = document.createElement('div')
        pcoeur = document.createElement('p')
        pcoeur.style.borderRadius = "50%"
        pcoeur.style.backgroundColor = "white"
        pcoeur.style.width = "30px"
        pcoeur.style.height = "30px"
        coeur.style.position = "absolute"
        coeur.style.top = "20px"
        coeur.style.right = "20px"
        pcoeur.style.cursor = "pointer"
        pcoeur.innerHTML = `<i class="far fa-heart"></i>`
        pcoeur.style.display = "flex"
        pcoeur.style.justifyContent = "center"
        pcoeur.style.alignItems = "center"
        // coeur.style.width = "95%"
        // coeur.style.paddingTop = "20px"
        coeur.appendChild(pcoeur)
        bgimg.appendChild(coeur)

        bgimg.style.transition = "1s"
        bgimg.style.backgroundImage = `url('${tb_imgdos[i].dos}')`
        flexmouse = document.createElement('div')
        flexmouse.style.display = "flex"
        let divmouse1 = document.createElement('div')
        let divmouse2 = document.createElement('div')
        divmouse1.style.backgroundColor = "black"
        let pdiv1 = document.createElement('p')
        pdiv1.innerHTML = `<i class="fas fa-shopping-cart"></i>`
        pdiv1.style.color = "white"
        setTimeout(() => {
            flexmouse.appendChild(divmouse1)
            flexmouse.appendChild(divmouse2)
        }, 500);
        divmouse1.appendChild(pdiv1)
        bgimg.appendChild(flexmouse)
        let pdiv2 = document.createElement('p')
        pdiv2.innerHTML = `<i class="far fa-eye"></i>`
        pdiv2.style.color = "white"
        divmouse2.appendChild(pdiv2)
        divmouse2.style.backgroundColor = "black"
        divmouse1.style.width = "50%"
        divmouse2.style.width = "50%"
        divmouse1.style.textAlign = "center"
        divmouse2.style.textAlign = "center"
        divmouse1.style.height = "30px"
        divmouse2.style.height = "30px"
        pdiv1.style.margin = "0"
        pdiv2.style.margin = "0"
        flexmouse.style.height = "100%"
        flexmouse.style.alignItems = "end"
        bgimg.style.marginBottom = "10px"
        divmouse1.style.borderRight = "1px solid gray"
        pdiv1.style.cursor = "pointer"
        pdiv1.addEventListener('click', () => {
            pdiv1.classList.toggle('click')
            if (pdiv1.classList.contains('click') === true) {
                c++
                panier.textContent = c
                panier.style.display = "block"
            } else {
                // panier.style.display = "none"
                c--
                panier.textContent = c
            }

            if (panier.textContent == 0) {
                panier.style.display = "none"

            }
        })
        
        coeur.addEventListener('click', () => {
            container.classList.toggle('click')
            if (container.classList.contains('click') === true) {
                b++
                coeurlogo.textContent = b
                coeurlogo.style.display = "block"
            } else {
                b--
                coeurlogo.textContent = b
            }
            if (coeurlogo.textContent == 0) {
                coeurlogo.style.display = "none"
            }
        })


    })

    bgimg.addEventListener('mouseleave', () => {
        // setTimeout(() => {
        flexmouse.remove()
        coeur.remove()
        // }, 500);
        // flexmouse.style.transition = "2s"
        bgimg.style.backgroundImage = `url('${element.img}')`
    })

    if (c === 0) {
        // coeurlogo.style.display = "none"
        panier.style.display = "none"
    }



});