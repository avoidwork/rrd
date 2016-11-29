(function (document, window) {
	"use strict";

	document.addEventListener("DOMContentLoaded", function () {
		var body = document.querySelector("body"),
			height = window.innerHeight || document.documentElement.clientHeight,
			width = window.innerWidth || document.documentElement.clientWidth,
			max = 500,
			n = 0,
			render = window.requestAnimationFrame || function (fn) { setTimeout(fn, 16); };

		function next () {
			setTimeout(function () {
				spawn("div");
			}, random(1, 250));
		}

		function random(min, max) {
			return Math.floor(Math.random() * (max - min)) + min;
		}

		function spawn (type) {
			var child, size;

			if (n + 1 < max) {
				n++;
				size = random(2, 6);
				child = document.createElement(type);
				child.classList.add("wisp");
				child.style.top = random(0, height) + "px";
				child.style.left = random(0, width) + "px";
				child.style.height = size + "px";
				child.style.width = size + "px";
				child.style.borderRadius = Math.floor(size/2) + "px";
				render(function () {
					body.appendChild(child);
					next();
					setTimeout(function () {
						body.removeChild(child);
						n--;
						next();
					}, 5 * 1000);
				});
			}
		}

		window.addEventListener("resize", function () {
			height = window.innerHeight || document.documentElement.clientHeight;
			width = window.innerWidth || document.documentElement.clientWidth;
		});

		next();
	}, false);
})(document, window);