$(document).ready(function() {

  const requestURL = 'https://script.googleusercontent.com/macros/echo?user_content_key=UvbhxOsbrJiYb_C70urkh7VW7q6FmR3R8GmhiC0vdGfDZywehpMTfDFn5SBQg9aRCs3c638_cRd3Ue9kEHsLdnLa1-3koN0Km5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnM9nDCzYnMS7RSLCd4zBpiURwqxHIjvA0-PITSl12JKwoxH7lvkVecW60UZN9xrXbBPYopvPvPVM3QvGHqNITi-Unhd-QLDvsNz9Jw9Md8uu&lib=M4Hl84PZ_EcFfRUbfoGoti3MaEMUDdWud';
  const request = new XMLHttpRequest();
  request.open('GET', requestURL);
  request.responseType = 'text'; // recibimos una cadena de tipo "string"
  request.send();
  request.onload = function() {
    const memeDeckText = request.response; // cogemos la cadena de response
    var memeDeck = JSON.parse(memeDeckText); // la convertimos a objeto
    
    memeDeck = memeDeck.sort(function() {return Math.random() - 0.5}); //random list decks
    //console.log(memeDeck);
    initWheel(memeDeck);
  }
  //memeDeck = memeDeck.sort(function() {return Math.random() - 0.5}); //random list decks
  //console.log(memeDeck);
	//initWheel(decks);
});

function initWheel(list){
	var $wheel = $('.roulette-item-wrapper'),
  		row = "";

  for (item of list){
    row+= '<div class="roulette-item">';
    row+= '<div class="img-back"><img src="https://teamviper.site/wp-content/uploads/2022/08/cardbackRoulette-min.png" alt="itemback" class="roulette-item-back"></div>';
    row+= '<div class="img-wrapper"><a href="'+item.link+'" target="_blank"><img src="https://casinogwent.com/wp-content/uploads/2022/08/'+item.faction+'-'+item.leader.toLowerCase().replace(/\s/g, '-')+'-min.png" alt="GameItem"></a></div>';
    row+= '<h3 class="roulette-subtitle-first">'+item.faction+' '+item.name+'</h3>';
    row+= '<h3 class="roulette-subtitle-second"></h3></div>';
  }
	for(var x = 0; x < 10; x++){ //inserta 10 veces la lista
  	$wheel.append(row);
  }
} 

function slideImages() {
    var parent = $(".roulette-item-wrapper");
    
    randomValue = randomNum(100,125);     
    spunAmount = parent.children()[randomValue].getBoundingClientRect().x;
    spunAmount = Math.abs(spunAmount);
    //spunAmount += 4800;
    //spunAmount=4880; max
  console.log(randomValue, spunAmount);
  
  $(".roulette-item").css("transform", "translateX(-" + spunAmount + "px)");
  
}

function randomNum( min, max){
  var numPos = max - min;
  var ran = Math.random()* (numPos+1);
  ran = Math.floor(ran);
  return min + ran;
}