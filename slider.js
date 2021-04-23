//anchor smooth scrolling 

window.addEventListener("load", () => { 
    function imgSlider() {
        const div_color_red = document.getElementById("red");
        const div_color_green = document.getElementById("green");
        const div_color_blue = document.getElementById("blue");
       
        let array = [div_color_red, div_color_green, div_color_blue]; 
        var count = -1;
        next.addEventListener("click", () => {
            if (count >= 2) {
                count = -1;
            }
                count++;
                console.log(count);
                console.log(array[count]);
                    arrayFunc();   
            });
        prev.addEventListener("click", () => {
            if (count <= 0) {
                count = 3;
            }
                count--;
                console.log(count);
                console.log(array[count]);
                    arrayFunc();
            });
        function arrayFunc() {
            if (array[count] == array[0]) {
                div_color_red.classList.add("red");
                div_color_red.classList.remove("hide");

                div_color_green.classList.add("hide");
                div_color_green.classList.remove("green");

                div_color_blue.classList.add("hide");
                div_color_blue.classList.remove("blue");
            }
            else if (array[count] == array[1]) {
                div_color_red.classList.add("hide");
                div_color_red.classList.remove("red");

                div_color_green.classList.add("green");
                div_color_green.classList.remove("hide");

                div_color_blue.classList.add("hide");
                div_color_blue.classList.remove("blue");   
            }
            else if (array[count] == array[2]) {
                div_color_red.classList.add("hide");
                div_color_red.classList.remove("red");

                div_color_green.classList.add("hide");
                div_color_green.classList.remove("green");

                div_color_blue.classList.add("blue");
                div_color_blue.classList.remove("hide");  
            }   
        }
         
    }
    imgSlider();
});