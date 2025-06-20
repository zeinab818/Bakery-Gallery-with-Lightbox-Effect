var closeBtn=document.getElementById("closeBtn");
var lightBoxContainer=document.getElementById("lightBoxContainer");
var imagesList=Array.from(document.querySelectorAll("#modal img"));

var imgIndex;

for(var i=0; imagesList.length>i;i++){
    imagesList[i].addEventListener("click",function(e){

        imgIndex=imagesList.indexOf(e.target);
        var imgSrc=e.target.getAttribute("src");

        lightBoxContainer.firstElementChild.style.backgroundImage=`url(${imgSrc})`;

        lightBoxContainer.classList.replace("d-none","d-flex");

    })
}
closeBtn.addEventListener("click", function(e){
    
    lightBoxContainer.classList.replace("d-flex","d-none");
})
lightBoxContainer.addEventListener("click", function(e){
    
    lightBoxContainer.classList.replace("d-flex","d-none");
})

lightBoxContainer.firstElementChild.addEventListener("click", function(e){
    
    e.stopPropagation();
    
})


closeBtn.nextElementSibling.addEventListener("click",function(e){

    slide(1);
})

closeBtn.previousElementSibling.addEventListener("click",function(e){

    slide(-1);
})


function slide(step){

    imgIndex+=step;
    if(imgIndex>imagesList.length){
        imgIndex=0;
    }
    else if(imgIndex<0){
        imgIndex=imagesList.length-1;
    }
    var imgSrc=imagesList[imgIndex].getAttribute("src");
    
    lightBoxContainer.firstElementChild.style.backgroundImage=`url(${imgSrc})`;

}

