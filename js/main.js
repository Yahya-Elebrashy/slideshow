
var imgs =Array.from( document.querySelectorAll(".img-fluid"));
var lightBoxContainer = document.querySelector(".lightbox-container");
var lightBoxItem= document.querySelector(".lightbox-item");
var closeIcone = document.getElementById("close");
var nextIcone = document.getElementById("next");
var prevIcone = document.getElementById("prev");
var currentIndex=0;
for (var i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("click", function (e) {
        currentIndex=imgs.indexOf(e.target);
        lightBoxContainer.style.display = "flex";
        var imgSrc=e.target.src;
        lightBoxItem.style.backgroundImage=`url(${imgSrc})`;

    })
}

closeIcone.addEventListener("click", hideSlide)
function hideSlide() {
    lightBoxContainer.style.display = "none";
}
 nextIcone.addEventListener("click",nextSlide)
 function nextSlide(){
    currentIndex++;
    if(currentIndex==imgs.length){
        currentIndex=0;
    }
    var imgSrc=imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
}
 prevIcone.addEventListener("click",prevSlide)
 function prevSlide(){
    currentIndex--;
    if(currentIndex<0){
        currentIndex=imgs.length-1;
    }
    var imgSrc=imgs[currentIndex].src;
    lightBoxItem.style.backgroundImage=`url(${imgSrc})`;
}