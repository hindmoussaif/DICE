var randomNumber1=Math.ceil(Math.random()*6)
var randomNumber2=Math.ceil(Math.random()*6)
if ( randomNumber1 > randomNumber2 ){
    document.querySelector("h1").innerHTML =" <i class='fas fa-flag'></i> player 1 win "
}
else if ( randomNumber1 < randomNumber2) {
    document.querySelector("h1").innerHTML ="player 2 win <i class='fas fa-flag'></i>"
}
else{
    document.querySelector("h1").innerHTML ="Draw!"
}

document.querySelector("#img1").setAttribute("src","images/dice"+randomNumber1+".png")
document.querySelector("#img2").setAttribute("src","images/dice"+randomNumber2+".png")
