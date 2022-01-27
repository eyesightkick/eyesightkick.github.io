let count = 0;
let pictures = [
    "images\\circle\\0.jpg",
    "images\\circle\\1.jpg",
    "images\\circle\\2.jpg",
    "images\\circle\\3.jpg",
];

picture = document.getElementById("picture_id");

picture.onclick = function(){

    count++;
    if(count == pictures.length )
    {
            count = 0;
    }
    picture.src = pictures[count];

}

arrowRight = document.getElementById("right-arrow-id")

arrowRight.onclick = function(){

    count++;
    if(count == pictures.length )
    {
            count = 0;
    }
    picture.src = pictures[count];

}

arrowLeft = document.getElementById("left-arrow-id")

arrowLeft.onclick = function(){

    count--;
    console.log(count);
    if (count < 0){
        count = pictures.length -1;
    }

    picture.src = pictures[count];
}
