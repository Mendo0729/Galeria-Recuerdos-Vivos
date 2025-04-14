const fulImgBox = document.getElementById("ful-imgBox");
fulImg = document.getElementById("ful-img");

function openFulImg(reference){
    fulImgBox.style.display = "flex"
    fulImg.src = reference
}

function closeimg(){
    fulImgBox.style.display = "none"
}

