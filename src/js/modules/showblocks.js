import pizza from "./pizza.js"
import combo from "./combo.js"
import snacks from "./snacks.js"
import deserts from "./deserts.js"
import drinks from "./drinks.js"

export function showBlocks(){

	let blockPizza = document.querySelector('.main__pizza-list');
	let blockCombo = document.querySelector('.main__combo-list');
	let blockSnacks = document.querySelector('.main__snacks-list'); 
	let blockDeserts = document.querySelector('.main__dessert-list');
	let blockDrinks = document.querySelector('.main__drink-list');

	function getArray(array, parent) {
		
		array.forEach(item => {
			let newElement = document.createElement("div");
			newElement.classList.add("main__pizza-menu")
			newElement.innerHTML =
				`<img class="main__pizza-menu-img" src="${item.img}" alt ="${item.name}" >
			<h3 class="main__pizza-menu-title">${item.name}</h3>
			<p class="main__pizza-menu-text">${item.text}</p>`

			let orderElement = document.createElement("div");
			orderElement.classList.add("main__pizza-menu-order")
			orderElement.innerHTML =
			`<div class="main__pizza-menu-cost">${item.cash}</div>`
			newElement.append(orderElement)
			
			let btn = document.createElement('button');
			btn.classList.add("main__pizza-menu-choose")
			btn.classList.add("choose-menu-pizza-orange")
			btn.innerHTML = `${item.btn}`
			btn.addEventListener('click', () => { popup(item) })
			orderElement.append(btn);
			parent.append(newElement)
		}
		)
	}
	
	getArray(pizza, blockPizza)
	getArray(combo, blockCombo)
	getArray(snacks, blockSnacks)
	getArray(deserts, blockDeserts)
	getArray(drinks, blockDrinks)

	let basket = [];
	let order;


	function popup(e) {
		console.log(e)
		let body = document.body
		let popUp = document.createElement('div')
		popUp.classList.add('card_popup')
		popUp.innerHTML =``
		let popupBody = document.createElement('div')
		popupBody.classList.add('popup_body')
		popupBody.innerHTML = `
			<img class="cardProduct" src="${e.img}" alt="${e.name}">	`
		popUp.append(popupBody);

		let popupDescription = document.createElement('div')
		popupDescription.classList.add('popup_description')
		popupDescription.innerHTML = `
			<h1 class="popup_title">${e.name}</h1>
			<p class="popup_text">${e.text}</p>
			<h2 class="popup_cost">${e.cash}</h2>`
		popupBody.append(popupDescription);

		let btnClose = document.createElement('button');
		btnClose.classList.add("close_popup")
		btnClose.innerHTML = `&#10007`
		btnClose.addEventListener('click', () => { closePopUp() })
		
		popupDescription.append(btnClose)


		let btnAdd= document.createElement('button');
		btnAdd.classList.add("button_add")
		btnAdd.setAttribute("data-artical", 1)
		btnAdd.classList.add("main__pizza-menu-choose")
		btnAdd.innerHTML = `Добавть в корзину`
		
		
		order = {
			name: e.name,
			cash: e.cash,
			img: e.img,
			text: e.text,
			count: 1,
		};

		btnAdd.addEventListener("click", () => {
			let setLocal = JSON.parse(localStorage.getItem("basket")) || [];
			setLocal.push(order)
			localStorage.setItem("basket", JSON.stringify(setLocal))
			startLoader()
		})

		popupDescription.append(btnAdd)
		body.append(popUp)
	}

	function closePopUp(){
		let cardPopup = document.querySelector('.card_popup');
		cardPopup.remove()
	}
	function startLoader(){
		//вариант 2
		closePopUp()
		let body = document.body

		let popUpAddtoBasket = document.createElement('div')
		popUpAddtoBasket.classList.add('add__to-basket')
		popUpAddtoBasket.innerHTML = ``

		let popUpAddtoBasketBody = document.createElement('div')
		popUpAddtoBasketBody.classList.add('add__to-basket-body')
		popUpAddtoBasketBody.innerHTML = `
		<p class="add__to-basket-text">Добавлено:</p>
		<h1 class="add__to-basket-name">${order.name}</h1>
		`

		popUpAddtoBasket.append(popUpAddtoBasketBody)
		body.append(popUpAddtoBasket)
		setTimeout(() => {
			popUpAddtoBasket.remove()
		}, 1500)
		
	}

}
