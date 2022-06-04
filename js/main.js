let sub = document.querySelector(".btn-danger");
let fol = document.querySelector('.followers')
sub.addEventListener("click", () => {
    sub.className += ("bg-info ")
    sub.textContent = 'You Subscribed'
    fol.innerHTML = '349,579 followers+'
    sub.addEventListener("click", () => {
        sub.className += ("bg-danger ")
        sub.textContent = 'Subscribe'
        fol.innerHTML = '349,578 followers+'
    })

})

let menu = document.querySelector('.menu')

let all = document.querySelector('.all')
let pizza = document.querySelector(".pizza")
let burger = document.querySelector(".burger")
let hotdog = document.querySelector(".hotdog")
let lavash = document.querySelector(".lavash")
let close = document.querySelector('.close')
let clickThere = document.querySelector('.click-there')

menu.addEventListener('click', () => {
    all.className = ('white')
    pizza.textContent = 'pizza: 22$'
    burger.textContent = 'burger : 5$'
    hotdog.textContent = 'hot-dog : 3$'
    lavash.textContent = 'lavash :7$'
    close.className = ('btn btn-warning')
    close.textContent = 'close'
    menu.className = ('d-none')
    clickThere.className = ('d-none')
})
close.addEventListener('click', () => {
    all.remove(), pizza.remove(), burger.remove(), hotdog.remove(), lavash.remove(), close.remove(), clickThere.className = ('d-block')
    menu.className = ('d-block btn btn-warning')
})

let gold = document.querySelector('.goldd')
let diamond = document.querySelector('.diamondd')
let emerald = document.querySelector('.emeraldd')

gold.addEventListener("click", () => {
    let pr = prompt('yozing : 1.69$')
    if (pr == '1.69$') {
        gold.className = ('btn whiteness')
        gold.textContent = 'you subscribed'
    } else {
        alert('hato')
    }
})
diamond.addEventListener("click", () => {
    let pr = prompt('yozing : 3.49$')
    if (pr == '3.49$') {
        diamond.className = ('btn whiteness')
        diamond.textContent = 'you subscribed'
    } else {
        alert('hato')
    }
})
emerald.addEventListener("click", () => {
    let pr = prompt('yozing : 8.29$')
    if (pr == '8.29$') {
        emerald.className = ('btn whiteness')
        emerald.textContent = 'you subscribed'
    } else {
        alert('hato')
    }
})

let hamburger = document.querySelector('.menyu')
let menyu = document.querySelector('.big-menyu')
let btn_close = document.querySelector('.btn-close')
menyu.className = ('d-none')
hamburger.addEventListener('click', () => {
    menyu.className = ('big-menyu')
    btn_close.addEventListener('click', () => {
        menyu.className = ('d-none')
    })
})

let iname = document.querySelector('.i-name')
let inumber = document.querySelector('.i-number')
let ipw = document.querySelector('.i-pw')
let iem = document.querySelector('.i-em')

let tname = document.querySelector('.name')
let tnumber = document.querySelector('.number')
let temail = document.querySelector('.email')
let tpassword = document.querySelector('.password')


let formik = document.getElementById('former')

formik.addEventListener("submit", function(event) {
    event.preventDefault()
    tname.textContent = iname.value
    tnumber.textContent = inumber.value
    temail.textContent = iem.value
    tpassword.textContent = ipw.value
})