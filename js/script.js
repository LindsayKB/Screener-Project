window.onload=function(){
	var menu = document.getElementById("navbar").getElementsByTagName('a');

    for (var i=0; i<menu.length; i++) {
        menu[i].addEventListener('click', pageChange, false);
    }

    function pageChange() {
		var selectedName = this.innerText;
		var className = this.className;
		var experience = document.querySelector(".dropdown");
		/*Check if class name exists*/
		if (className == "dropdown-parent")
		{
			experience.classList.add("show");
		}
		else
		{
			var pageTitle = document.getElementById("page-title");
			pageTitle.classList.remove("fade-in");
			pageTitle.classList.add("fade-out");
			pageTitle.textContent = "";
			pageTitle.textContent += this.innerText;
			pageTitle.classList.remove("fade-out");
			pageTitle.classList.add("fade-in");	
			experience.classList.remove("show");	
		}
    }
	
	document.addEventListener("click", function(event) {
	// If user clicks inside the element, do nothing
	if (event.target.closest(".box")) return;

	// If user clicks outside the element, hide it!
	box.classList.add("js-is-hidden");
});
	
	
}
