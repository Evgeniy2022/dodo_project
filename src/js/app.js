import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

// import Swiper, { Navigation, Pagination } from 'swiper';

// new Swiper()

//слайдер

import * as sliderGeneral from "./modules/slider.js"
sliderGeneral.sliderGeneral()

//
import * as showBlocks from "./modules/showblocks.js"
showBlocks.showBlocks()

//Прокрутка к блокам
const anchors = document.querySelectorAll('.header__menu-list[data-yakor]').forEach(anchor => {
	anchor.addEventListener("click", (event) => {
		event.preventDefault()
		let scrollAnchor = document.querySelector(anchor.dataset.yakor)
		let scrollTarget1 = scrollAnchor.getBoundingClientRect().top + scrollY
		console.log(scrollTarget1)
		
		window.scrollTo({
			top: scrollTarget1,
			behavior: "smooth"
		});
	})
})





