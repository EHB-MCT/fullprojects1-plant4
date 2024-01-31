document.querySelectorAll(".carousel").forEach((carousel) => {
	const items = carousel.querySelectorAll(".carousel__item");
	const buttonsHtml = Array.from(itmes, () => {
		return `<span class="carousel__button"></span>`;
	});

	carousel.insertAdjacentHTML(
		"beforeend",
		`
    <div class="carousel__nav">
        ${buttonsHtml.join("")}
    </div>
    `
	);

	const buttons = carousel.querySelectorAll(".carousel__button");

	buttons.forEach((button, i) => {
		button.addEventListener("click", () => {
			//unselect all items
			items.forEach((item) =>
				item.classList.remove("carousel__item--selected")
			);
			buttonsHtml.forEach((button) =>
				button.classList.remove("carousel__buton--selected")
			);
		});
	});
});
