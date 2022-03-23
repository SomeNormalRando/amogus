const b = document.getElementById("b");
document.getElementById("d").innerHTML = "I'm not a robot";
b.addEventListener("click", () => {
	const a = document.getElementById("c");
	const t = tt => setTimeout(() => a.style.opacity = tt, 750 * tt);
	for (let e = 0; e <= 100; e += 4) {
		t(e / 100);
		setTimeout(() => window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab", "_self"), 1e3);
	}
});
