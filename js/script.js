window.onload=function(){
	var menu = document.getElementById("navbar").getElementsByTagName('a');

    for (var i=0; i<menu.length; i++) {
        menu[i].addEventListener('click', pageChange, false);
    }

    function pageChange() {
		var selectedName = this.innerText;
		var className = this.className;
		/*Check if class name exists*/
		if (className == "dropdown-parent")
		{
			var experience = document.querySelector(".dropdown");
			experience.classList.toggle("show");
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
		}
    }
	
	
}
