//on scroll
var onAppear = [];//array

document.addEventListener("DOMContentLoaded",
  function () {
    onAppear = [].map.call(document.querySelectorAll(".default1"), function(item ) {
      return item;
    });
  }, false);

window.addEventListener("scroll", function() {
  onAppear.forEach(function(elem) {
    var vwTop = window.pageYOffset;
    var vwBottom = (window.pageYOffset + window.innerHeight);
    var elemTop = elem.offsetTop;
    var elemHeight = elem.offsetHeight;
    
    if (vwBottom > elemTop && ((vwTop - elemHeight) < elemTop))
          {
             elem.classList.remove("animation2_fade");
             elem.classList.add("default1");
          }  

       else {
        elem.classList.add("animation2_fade");
        elem.classList.remove("default1");
            }
    });
  }, 
  false);
//burger menu 

    function myFunction(x) {
      x.classList.toggle("change");
    }
		function openNav()  {
			document.getElementById("burger-menu").classList.toggle("open");
	  }    
		function closeNav() {
			document.getElementById("burger-menu").style.widht="0px";
    }

    //anchor smooth scrolling 



