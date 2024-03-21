let searchDiv = document.querySelector('.header .search')
let searchIcon = document.querySelector('.header .search i')

function search() {
    searchIcon.onclick = () => {
        let searchInput = document.createElement('input')
        searchInput.type = 'search'
        searchInput.className = 'search-input'
        searchDiv.appendChild(searchInput)
        if (document.querySelectorAll('.header .search .search-input').length >= 1) {
            searchIcon.onclick = () => {
                searchInput.remove()
                search()
            }
        } 
    }
}
search()

let landing =  document.querySelector('.landing')
let landingBullets = document.querySelectorAll('.landing .bullets li')
let landingTexts = document.querySelectorAll(".landing .text")
let landingBulletsArray = Array.from(landingBullets)
let landingTextsArray = Array.from(landingTexts) 

landingBulletsArray.forEach(bullet => {
    bullet.onclick = (ele) => {
        landingBulletsArray.forEach(e => {
            e.classList.remove('active')
        })
        ele.target.classList.add('active')
        landing.style.backgroundImage = "url(./images/" + ele.target.dataset.image + ")"
        localStorage.setItem('landing-img', ele.target.dataset.image)
        
        landingTextsArray.forEach(tx => {
            if (ele.target.dataset.lan === tx.dataset.txt) {
                tx.classList.add('show')
            } else {
                tx.classList.remove('show')
            }
            localStorage.setItem('landing-txt', ele.target.dataset.lan)
        })
    }
})

if (localStorage.getItem('landing-img') !== null) {    
    landing.style.backgroundImage = `url(./images/${localStorage.getItem('landing-img')}`
    landingBulletsArray.forEach(e => {
        if (e.dataset.image === localStorage.getItem('landing-img')) {
            e.classList.add('active')
        } else {
            e.classList.remove('active')
        }
    })
}

if (localStorage.getItem("landing-txt") !== null) {
    landingTextsArray.forEach(txt => {
        if (localStorage.getItem("landing-txt") === txt.dataset.txt) {
            txt.classList.add("show")
        } else {
            txt.classList.remove("show")
        }
    })
}

let toggleMenu = document.querySelector('.header .info .toggle')

toggleMenu.addEventListener('click',() => {
    document.querySelector('.header nav').classList.toggle('open')
})



let portfolioOptions = document.querySelectorAll(".portfolio ul li")
let portfolioOptionsArray = Array.from(portfolioOptions)
let portfolioShuffle = document.querySelectorAll(".portfolio .cards .shuffle")
let portfolioShuffleArray = Array.from(portfolioShuffle)

portfolioOptionsArray.forEach(e => {
    e.addEventListener('click', (el) => {
        portfolioOptionsArray.forEach(element => {
            element.classList.remove("active");        
        })
        el.target.classList.add("active")     
        portfolioShuffleArray.forEach(ev => {
            if (el.target.dataset.card === 'active') {
                ev.style.display = 'flex'
            } else if (el.target.dataset.card === ev.dataset.pic) {
                ev.style.display = 'flex'
            } else {
                ev.style.display = 'none'
            }
        })
        localStorage.setItem('port-option', el.target.dataset.card)
    })
})

if (localStorage.getItem('port-option') !== null) {
    portfolioShuffleArray.forEach(ev => {
        if (localStorage.getItem('port-option') === ev.dataset.pic) {
            ev.style.display = 'flex'
        } else if (localStorage.getItem('port-option') === 'active') {
            ev.style.display = 'flex'
        } else {
            ev.style.display = 'none'
        }
    })
    portfolioOptionsArray.forEach(element => {
        element.classList.remove("active")
        if (localStorage.getItem('port-option') === element.dataset.card) {
            element.classList.add("active")
        }      
    })
}

let testiPersons = document.querySelectorAll('.our-skills .testmonials .content')
let testiPersonsArray = Array.from(testiPersons)
let testiBullets = document.querySelectorAll('.our-skills .testmonials .bullets li')
let testiBulletsArray = Array.from(testiBullets)

testiBulletsArray.forEach(e => {
    e.addEventListener('click', (element) => {
        testiBulletsArray.forEach(e => {
            e.classList.remove('active')
        })
        element.target.classList.add('active')

        testiPersonsArray.forEach(person => {
            if (person.dataset.job === element.target.dataset.bullet) {
                person.classList.add("open")
            } else {
                person.classList.remove("open")
            }
        })
        localStorage.setItem('jop-options', element.target.dataset.bullet)
    })
})

if (localStorage.getItem('jop-options') !== null) {
    testiPersonsArray.forEach(person => {
        if (person.dataset.job === localStorage.getItem('jop-options')) {
            person.classList.add("open")
        } else {
            person.classList.remove("open")
        }
    })
    testiBulletsArray.forEach(e => {
        e.classList.remove('active')
        if (localStorage.getItem('jop-options') === e.dataset.bullet) {
            e.classList.add('active')
        }
    })
}


window.onscroll = () => {
    if(window.scrollY >= document.querySelector('.our-skills').offsetTop - 200) {
        document.querySelectorAll('.our-skills .skills .prog div').forEach(e => {            
            e.style.width = e.dataset.progress
        })
    }
}