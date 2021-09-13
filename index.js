var num = Math.floor(Math.random()*6)+1;

var randomDiceImg = "dice" + num + ".png";

var randomImageSource = "images/" + randomDiceImg;

var image1 = document.querySelectorAll("img")[0];



var RandomNumb = Math.floor(Math.random()*6)+1;

var randomDiceImg2 = "dice" + RandomNumb + ".png";

var randomImageSource2 = "images/" + randomDiceImg2;

var image2 = document.querySelectorAll("img")[1];

image1.setAttribute("src", randomImageSource);
image2.setAttribute("src", randomImageSource2);

if ( num > RandomNumb){

  document.getElementById("hello").innerHTML = "🖕  Eenu wins!";
}
 else if (  RandomNumb > num){
    document.getElementById("hello").innerHTML = "NeVerGoNE lost (🖕) For loser ";
}else{
    document.getElementById("hello").innerHTML = "Draw!";

}
