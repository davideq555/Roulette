$(document).ready(function() {
/*
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
  }*/
  getDecks().then(initWheel);
  //memeDeck = memeDeck.sort(function() {return Math.random() - 0.5}); //random list decks
  //console.log(memeDeck);
	//initWheel(decks);
});
async function getDecks(){
  const requestURL = 'https://api-decks-86377-default-rtdb.firebaseio.com/champions.json';
  const respuesta = await fetch(requestURL).catch(() => ["Loading..."]);
  if (!respuesta.ok){
    oop = "Not encontrado";
    alert(oop);
    throw new Error(oop);
  } else {
  const decks = respuesta.json();
  return decks; 
  }
}

function initWheel(list){
  list = list.sort(function() {return Math.random() - 0.5}); //random list decks
	var $wheel = $('#tier-1'),
  		tier1 = "";
  for (item of list){
    tier1+= '<div class="roulette-item-1">';
    tier1+= '<div class="img-back-card"><div class="opacity-'+item.faction+'"> </div></div>';
    tier1+= '<div class="img-wrapper-t"><a href="#" target="_blank"><img src="https://teamviper.site/wp-content/uploads/2022/11/'+item.region1+'.png" alt="GameItem"></a></div>';
    tier1+= '<h3 class="roulette-subtitle-first">'+item.name+'</h3></div>';
    //tier1+= '<h3 class="roulette-subtitle-second">'+item.tier+'</h3></div>';
  }
	for(var x = 0; x < 6; x++){ //inserta 10 veces la lista
  	$wheel.append(tier1);
  }
} 

function slideImages1() {
    var parent = $("#tier-1");
    randomValue = randomNum(75,95);     
    spunAmount = parent.children()[randomValue].getBoundingClientRect().x;
    spunAmount = Math.abs(spunAmount);
    //spunAmount += 4800;
    //spunAmount=4880; max
  console.log(randomValue, spunAmount);
  
  $(".roulette-item-1").css("transform", "translateX(-" + spunAmount + "px)"); 
}

function randomNum( min, max){
  var numPos = max - min;
  var ran = Math.random()* (numPos+1);
  ran = Math.floor(ran);
  return min + ran;
}