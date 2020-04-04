window.onload=function(){
	var lis = document.getElementById("navbar").getElementsByTagName('a');

    for (var i=0; i<lis.length; i++) {
        lis[i].addEventListener('click', fadeOut, false);
    }

    function fadeOut() {
		var pageTitle = document.getElementById("page-title");
		pageTitle.classList.remove("fade-in");
		pageTitle.classList.add("fade-out");
		pageTitle.textContent = "";
		pageTitle.textContent += this.innerText;
		pageTitle.classList.remove("fade-out");
		pageTitle.classList.add("fade-in");	
    }
	
	
}
