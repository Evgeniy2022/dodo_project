

export function sliderGeneral() {
const images = document.querySelectorAll('.main__slider-block .main__slider-items img');
const sliderLine = document.querySelector('.main__slider-items');
let count = 0;
let width;

function init() {
	width = document.querySelector('.main__slider-block').offsetWidth;
	sliderLine.style.width = width * images.length + 'px'
	images.forEach(item => {
		item.style.width = width + 'px'
		item.style.height = 'auto'
	});
	rollSlider();
}

window.addEventListener('resize', init);
init()

document.querySelector('.slider-next').addEventListener('click', function () {
	count++;
	if (count >= images.length) {
		count = 0;
	}
	rollSlider();
})

	function rollSlider() {
		sliderLine.style.transform = 'translate(-' + count * width + 'px)'
	}

	document.querySelector('.slider-prev').addEventListener('click', function () {
		count--;
		if (count < 0) {
			count = images.length - 1;
		}
		rollSlider();
	})
}

