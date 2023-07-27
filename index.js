let menu=document.querySelector("#menuBars");
let navbar=document.querySelector(".navbar");

menu.onclick = () =>{
	menu.classList.toggle("fa-times");
	ThemeToggle.classList.remove("active");
	navbar.classList.toggle("active");
	
};
window.onscroll = () =>{
	menu.classList.remove("fa-times");
	navbar.classList.remove("active");
	ThemeToggle.classList.remove("active");
	
};
let ThemeToggle = document.querySelector(".toggleTheme");
let toggleBtn = document.querySelector(".toggleBtn");
toggleBtn.onclick = () =>{
 ThemeToggle.classList.toggle("active");
 };

document.querySelectorAll(".toggleTheme .theme-btn").forEach((btn) => {
	btn.onclick = () =>{
		let color =btn.style.background;
		document.querySelector(":root").style.setProperty("--main",color);
	};
});

var swiper =new Swiper(".ReviewSlide",{slidesPerView:1,grabCuror:true,loop:true,spaceBetween:10,
breakpoints: {
	0: {
		slidesPerView: 1,
	},
	700: {
		slidesPerView: 2,
	},
	1050:{
		slidesPerView: 3,
	},
},
autoplay: {
	delay:4000,
	disableOnInteraction:false,
},
})