
currentindex=0
images=["first.jpg","second.jpg","third.jpg","fourth.jpg"]

setInterval(function(){
    currentindex=Math.round(Math.random()*3)
    document.getElementById("img1").src=images[currentindex]
},10000)

function changeImage(arrowtype){
    if(arrowtype=="left"){
        currentindex=currentindex=3?0:++currentindex
    }
    else if(arrowtype=="right"){
        currentindex=currentindex=0?3:--currentindex
    }
    document.getElementById("img1").src=images[currentindex]
}