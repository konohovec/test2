let images = ['img1.png', 'img2.png', 'img3.png', 'img4.png', 'img5.png'];



for (let item in images) {
	let sliderItem = document.createElement('div');
	sliderItem.className = 'slider__item';
	let imgItem = document.createElement('img');
	imgItem.src = './images/' + images[item];
	sliderItem.appendChild(imgItem);
	document.getElementById('slider').appendChild(sliderItem);
};



jQuery(document).ready(function($) {
	$('.slider').slick();
});