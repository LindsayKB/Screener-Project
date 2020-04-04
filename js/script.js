window.onload=function(){
	var menu = document.getElementById("navbar").getElementsByTagName('a');

    for (var i=0; i<menu.length; i++) {
        menu[i].addEventListener('click', pageChange, false);
    }

    function pageChange() {
		var pageTitle = document.getElementById("page-title");
		pageTitle.classList.remove("fade-in");
		pageTitle.classList.add("fade-out");
		pageTitle.textContent = "";
		pageTitle.textContent += this.innerText;
		pageTitle.classList.remove("fade-out");
		pageTitle.classList.add("fade-in");	
    }
	
	
}
