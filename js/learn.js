// Info Page JS
document.addEventListener('DOMContentLoaded', function() {
	var homeIcon = document.querySelector('.home-icon-link');
	if (homeIcon) {
		homeIcon.addEventListener('click', function(e) {
			e.preventDefault();
			window.location.href = 'index.html';
		});
		// Optional: Add a simple animation on hover
		homeIcon.addEventListener('mouseenter', function() {
			homeIcon.style.transform = 'scale(1.08)';
		});
		homeIcon.addEventListener('mouseleave', function() {
			homeIcon.style.transform = 'scale(1)';
		});
	}
});
