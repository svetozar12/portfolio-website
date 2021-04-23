window.addEventListener("load", () => {
    let box = document.getElementById("divNav");
    let red = document.getElementById("red");
    let green = document.getElementById("green");
    let blue = document.getElementById("blue");
    //() => {
        let project1 = document.getElementById("first");
        let project2 = document.getElementById("second");
        let project3 = document.getElementById("third");
        let project4 = document.getElementById("sub-first");
        let project5 = document.getElementById("sub-second");
        let project6 = document.getElementById("sub-third");
    box.addEventListener("mouseover", () => {
        red.classList.add("hover-class");
        green.classList.add("hover-class");
        blue.classList.add("hover-class");
        project1.classList.add("opacity-p");
        project2.classList.add("opacity-p");
        project3.classList.add("opacity-p");
        project4.classList.add("sub-opacity-p");
        project5.classList.add("sub-opacity-p");
        project6.classList.add("sub-opacity-p");

        });
    
    box.addEventListener("mouseout", () => {
        red.classList.remove("hover-class");
        green.classList.remove("hover-class");
        blue.classList.remove("hover-class");
        project1.classList.remove("opacity-p");
        project2.classList.remove("opacity-p");
        project3.classList.remove("opacity-p");
        project4.classList.remove("sub-opacity-p");
        project5.classList.remove("sub-opacity-p");
        project6.classList.remove("sub-opacity-p");
       
        });
    //}
});