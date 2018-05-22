// JavaScript Document

	window.onscroll = function() {funcSticky()};

		var header = document.getElementById("navHeader");
		var sticky = header.offsetTop;

	function funcSticky() {
		if (window.pageYOffset >= sticky) {
				header.classList.add("sticky");
			} else
				{
					header.classList.remove("sticky");
				}
		}