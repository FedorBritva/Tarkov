const openPopUp = document.getElementById('open_pop_up');
const closePopUp = document.querySelector('.pop_up_close');
const popUp = document.querySelector('.pop_up');
const openPopUp1 = document.getElementById('open_pop_up1');

openPopUp.addEventListener('click', function (e) {
	e.preventDefault();
	popUp.classList.add('active');
})

openPopUp1.addEventListener('click', function (e) {
	e.preventDefault();
	popUp.classList.add('active');
})

closePopUp.addEventListener('click', function () {
	popUp.classList.remove('active');
})


let coll = document.querySelector('.block_title');
let text = document.querySelector('.block_text');
coll.addEventListener('click', function () {
	coll.classList.toggle('_active');
	if (text.style.maxHeight) {
		text.style.maxHeight = null;
	} else {
		text.style.maxHeight = text.scrollHeight + 'px'
	}
})