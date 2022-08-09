$(document).ready(function() {
  path= ''; //Direccion para sacar los recursos
//Dictionary
  var decks = [
    {id: '1',
     faction: 'MO',
     name: 'Gerni',
     leader: 'MO-fruits-of-ysgith', //path icon
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '2',
     faction: 'NR',
     name: 'Shield',
     leader: 'NR-shieldwall',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '3',
     faction: 'RN',
     name: 'Witcher',
     leader: 'NR-uprising',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '4',
     faction: 'SK',
     name: 'Lluvia',
     leader: 'SK-rage-of-the-sea',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '5',
     faction: 'ST',
     name: 'dasd',
     leader: 'ST-precision-strike',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '6',
     faction: 'NG',
     name: 'dasd',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '7',
     faction: 'NG',
     name: 'dasda',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '8',
     faction: 'NG',
     name: 'dasdas',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '9',
     faction: 'NG',
     name: 'dasdq',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '10',
     faction: 'NG',
     name: 'dsqe',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '11',
     faction: 'NG',
     name: 'dqwe',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '12',
     faction: 'NG',
     name: 'dqweqw',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '13',
     faction: 'NG',
     name: 'dqwe',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '14',
     faction: 'NG',
     name: 'dawe',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '15',
     faction: 'NG',
     name: 'dqwe',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '16',
     faction: 'NG',
     name: 'dqwe',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '17',
     faction: 'NG',
     name: 'eqwe',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '18',
     faction: 'NG',
     name: 'eqwe',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '19',
     faction: 'NG',
     name: 'eqwe',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '20',
     faction: 'NG',
     name: 'ewqeq',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '21',
     faction: 'NG',
     name: 'eqwrq',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '22',
     faction: 'NG',
     name: 'eqwr',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '23',
     faction: 'NG',
     name: 'eqwe',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '24',
     faction: 'NG',
     name: 'eqwrq',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '25',
     faction: 'NG',
     name: 'qweq',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '26',
     faction: 'NG',
     name: 'qweq',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '27',
     faction: 'NG',
     name: 'eqwr',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '28',
     faction: 'NG',
     name: 'qwer',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '29',
     faction: 'NG',
     name: 'eqwr',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '30',
     faction: 'NG',
     name: 'eqwr',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '31',
     faction: 'NG',
     name: 'eqwrq',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
    {id: '32',
     faction: 'NG',
     name: 'rqwe',
     leader: 'NG-lockdown',
     link: 'https://www.playgwent.com/es/decks/guides/340924'},
  ];
  decks = decks.sort(function() {return Math.random() - 0.5}); //random list decks
	
	initWheel(decks);
});

function initWheel(list){
	var $wheel = $('.roulette-item-wrapper'),
  		row = "";

  for (item of list){
    row+= '<div class="roulette-item">';
    row+= '<div class="img-back"><img src="https://teamviper.site/wp-content/uploads/2022/08/cardbackRoulette-min.png" alt="itemback" class="roulette-item-back"></div>';
    row+= '<div class="img-wrapper"><a href="'+item.link+'" target="_blank"><img src="https://teamviper.site/wp-content/uploads/2021/07/'+item.leader+'-min.png" alt="GameItem"></a></div>';
    row+= '<h3 class="roulette-subtitle-first">'+item.faction+' '+item.name+'</h3>';
    row+= '<h3 class="roulette-subtitle-second"></h3></div>';
  }
	for(var x = 0; x < 10; x++){ //inserta 10 veces la lista
  	$wheel.append(row);
  }
} 

// Funcion para desordenar una lista
// elementos del Array
/*let bingonumCard = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
// función que sirve para desordenar un Array (no altera el original)
lista = lista.sort(function() {return Math.random() - 0.5});
let shuffle = list => {
  return [...list].sort(function () { return Math.random() - 0.5 });
}
*/

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

