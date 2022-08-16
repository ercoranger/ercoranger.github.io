$(".project-images img, .project-image-list img, .project-head").attr("onclick", "picBig(this)");


function picBig(img) {
  var i = img.currentSrc;
  var v = document.getElementById('divCenter');
  var bigImg = document.getElementById('bigImg');
  bigImg.src = i;
  v.style.display = "block";
}

function picClose() {
  var v = document.getElementById('divCenter');
  v.style.display = "none";
}
