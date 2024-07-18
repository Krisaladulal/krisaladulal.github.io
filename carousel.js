// array of images
let imgUrls = ["images/IMG1.jpg", "images/IMG2.jpg", "images/IMG3.jpg", "images/IMG4.jpg", "images/IMG5.jpg",
    "images/IMG6.jpg", "images/IMG7.jpg", "images/IMG8.jpg", "images/IMG9.jpg", "images/IMG10.jpg",
    "images/IMG11.jpg", "images/IMG12.jpg", "images/IMG13.jpg", "images/IMG14.jpg", "images/IMG15.jpg",
    "images/IMG16.jpg", "images/IMG17.jpg", "images/IMG18.jpg", "images/IMG19.jpg", "images/IMG20.jpg"];
imgUrls.reverse();

let imageContainers = document.querySelectorAll(".image-container");

let stackingOrder = 1;

let music = new Audio("mylove.mp3");
// music.play();

// loop through each image container
imageContainers.forEach((element, index) => {
    let img = document.createElement("img");
    img.setAttribute("src", imgUrls[index]);
    img.setAttribute("class", "image");
    element.appendChild(img);

    // Add any event listeners to each image container 
    element.addEventListener("click", () => {

        music.play().catch(error => {
            console.error("Error playing audio:", error);
        });

        stackingOrder++;
        element.style.right = "50em";
        element.style.zIndex = stackingOrder.toString();
        // element.style.zIndex = zIndex.toString();
        element.style.transform = "rotate(0deg)";
        element.style.transition = " right 0.5s ease, transform 0.5s ease";

        setTimeout(() => {
            stackingOrder -= 3
            element.style.right = "";
            element.style.zIndex = stackingOrder.toString();
            element.style.transform = "";
            element.style.transition = "all 0.3s ease,transform 0.3s ease";

            setTimeout(() => {
                element.style.transition = "";
            }, 300);

        }, 1000);
    });
});






