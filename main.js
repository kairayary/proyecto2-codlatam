


const typed = new Typed('.typed', {
	strings: [
		'<i class="">Hello Mundo!!!</i>',
		'<i class="">Bienvenidos a mi Portfolio</i>',
		'<i class="">Desarrollador FrontEnd</i>',
		'<i class="">Desarrollador BackEnd</i>'
	],

	
	typeSpeed: 75, 
	startDelay: 300, 
	backSpeed: 75, 
	smartBackspace: true, 
	shuffle: false,
	backDelay: 1500, 
	loop: true, 
	loopCount: false, 
	showCursor: true, 
	cursorChar: '|', 
	contentType: 'html', 
});

const menuLink= document.querySelectorAll('.nav-item');
menuLink.forEach(function(link){
	link.addEventListener('click', function(e){
		const actualLink= document.querySelector('.nav-link');
		actualLink.classList.remove('nav-link');
		e.target.classList.add('nav-link');
	});
});

   
const switchButton = document.getElementById('switch');
 
switchButton.addEventListener('click', () => {
    document.body.classList.toggle('dark'); //toggle the HTML body the class 'dark'
    switchButton.classList.toggle('active');//toggle the HTML button with the id='switch' with the class 'active'
});