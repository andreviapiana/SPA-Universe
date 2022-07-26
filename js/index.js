import { Router } from "./router.js"

const router = new Router()
router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/exploration", "/pages/exploration.html")

router.handle()

window.onpopstate = () => router.handle()
window.route = () => router.route()



// ================== BACKGROUND SWITCH ================== //
const home = document.querySelector("nav a:nth-child(2)")
const universe = document.querySelector("nav a:nth-child(3)")
const exploration = document.querySelector("nav a:nth-child(4)")
const backgroundHome =  document.querySelector('.backgroundHome')
const backgroundUniverse =  document.querySelector('.backgroundUniverse')
const backgroundExploration = document.querySelector('.backgroundExploration')

home.addEventListener('click', function () {
    backgroundHome.classList.remove('hide')
    backgroundUniverse.classList.add('hide')
    backgroundExploration.classList.add('hide')
})

universe.addEventListener('click', function () {
    backgroundHome.classList.add('hide')
    backgroundUniverse.classList.remove('hide')
    backgroundExploration.classList.add('hide')
})

exploration.addEventListener('click', function () {
    backgroundHome.classList.add('hide')
    backgroundUniverse.classList.add('hide')
    backgroundExploration.classList.remove('hide')
})