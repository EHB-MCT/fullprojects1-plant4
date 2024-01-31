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
				items.classList.remove("carousel__item--selected")
			);
			buttons.forEach((button) =>
				buttons.classList.remove("carousel__button--selected")
			);

			items[i].classList.add("carousel__item--selected");
			button.classList.add("carousel__button--selected");
		});
	});
	// select the first item o page load
	items[0].classList.add("carousel__item--selected");
	buttons[0].classList.add("carousel__button--selected");
});
