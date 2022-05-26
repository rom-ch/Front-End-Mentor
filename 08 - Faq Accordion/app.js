const titles = document.querySelectorAll('.accordion-title');
const subtitles = document.querySelector('.accordion-subtitle');
const arrow = document.querySelectorAll('.arrow');

titles.forEach(title => {
	title.addEventListener('click', () => {
		title.nextElementSibling.classList.toggle('sub-active');
		if (title.nextElementSibling.classList.contains('sub-active')) {
			title.firstElementChild.style.fontWeight = '700';
			title.lastElementChild.classList.add('active');
		} else {
			title.firstElementChild.style.fontWeight = '400';
			title.lastElementChild.classList.remove('active');
		}
	});
});
