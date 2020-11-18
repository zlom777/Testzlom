/* Установка ширины боковой навигации на 250 пикселей */
function openMenu() {
    document.getElementById("mySidemenu").style.width = "250px";
}

/* Установка ширины боковой навигации на 0 */
function closeMenu() {
    document.getElementById("mySidemenu").style.width = "0";
}

 var stimed = new $.stimed({
  timeTarget: '.ui inverted header time',
  fps: 30,
  speedUp: 500,
  precise: true,
  timeRunning: true,
  debugging: true,
  speedUp: 2000
});
	


// Создание текстовых и фоновых цветовых стилей по времени одновременно
stimed.style.create({
  target: 'body',
  property: 'color',
  time: 0,
  value: '#fff'
},
{
  target: 'body',
  property: 'background-color',
  time: 0,
  value: '#fff'
},
{
  target: 'body',
  property: 'background-color',
  time: '10:00',
  value: '#F0C8DE'		//Светло-розовый
},
{
  target: 'body',
  property: 'color',
  time: '10:00',
  value: '#F0C8DE'		//Светло-розовый
},
{
  target: 'body',
  property: 'background-color',
  time: '11:00',
  value: '#EACBFF'		//Светло-фиолетовый
},
{
  target: 'body',
  property: 'color',
  time: '11:00',
  value: '#EACBFF'		//Светло-фиолетовый
},
{
  target: 'body',
  property: 'background-color',
  time: '12:00',
  value: '#E5C8F9'		//Светло-сиреневый
},
{
  target: 'body',
  property: 'color',
  time: '12:00',
  value: '#E5C8F9'		//Светло-сиреневый
},
{
  target: 'body',
  property: 'background-color',
  time: '12:00',
  value: '#F2F2AC'		//Светло-жёлтый
},
{
  target: 'body',
  property: 'color',
  time: '12:00',
  value: '#F2F2AC'		//Светло-жёлтый
},
{
  target: 'body',
  property: 'background-color',
  time: '16:00',
  value: '#A9EBCC'		//Салатовый
},
{
  target: 'body',
  property: 'color',
  time: '16:00',
  value: '#A9EBCC'		//Салатовый
},
{
  target: 'body',
  property: 'background-color',
  time: '18:00',
  value: '#C6E1FA'		//Светло-голубой
},
{
  target: 'body',
  property: 'color',
  time: '18:00',
  value: '#C6E1FA'		//Светло-голубой
},
{
  target: 'body',
  property: 'color',
  time: '20:00',
  value: '#C4CFDA'		//Светлый-асфальт
},
{
  target: 'body',
  property: 'background-color',
  time: '20:00',
  value: '#C4CFDA'		//Светлый-асфальт
},
{
  target: 'body',
  property: 'background-color',
  time: '21:00',
  value: '#CBD4DB'		//Светло-Серый был 767C81
},
{
  target: 'body',
  property: 'color',
  time: '21:00',
  value: '#CBD4DB'		//Светло-Серый был 767C81
},
{
  target: 'body',
  property: 'background-color',
  time: '24:00',
  value: '#fff'			//Белый
},
{
  target: 'body',
  property: 'color',
  time: '24:00',
  value: '#fff'			//Белый
}
);



// Создать основной цвет фона стиль
stimed.style.create({
  target: 'main',
  property: 'background-color',
  time: 0,
  value: '#fff'
},
{
  target: 'main',
  property: 'background-color',
  time: '10:00',
  value: '#F0C8DE'		//Светло-розовый
},
{
  target: 'main',
  property: 'background-color',
  time: '11:00',
  value: '#EACBFF'		//Светло-фиолетовый
},
{
  target: 'main',
  property: 'background-color',
  time: '12:00',
  value: '#E5C8F9'		//Светло-сиреневый
},
{
  target: 'main',
  property: 'background-color',
  time: '12:00',
  value: '#F2F2AC'		//Светло-жёлтый
},
{
  target: 'main',
  property: 'background-color',
  time: '16:00',
  value: '#A9EBCC'		//Салатовый
},
{
  target: 'main',
  property: 'background-color',
  time: '18:00',
  value: '#C6E1FA'		//Светло-голубой
},
{
  target: 'main',
  property: 'background-color',
  time: '20:00',
  value: '#C4CFDA'		//Светлый-асфальт
},
{
  target: 'main',
  property: 'background-color',
  time: '21:00',
  value: '#CBD4DB'		//Светло-Серый был 767C81
},

{
  target: 'main',
  property: 'background-color',
  time: '24:00',
  value: '#fff'			//Белый
}
);


stimed.style.update();
stimed.style.logStyles();

stimed.style.preset({
  preset: 'random values',
  target: '.txtTime',
  property: 'font-size',
  delay: 5000,
  min: 0,
  max: 10
});

/*
{
  target: 'body',
  property: 'color',
  time: 0,
  value: '#000'			// Светлый
},{
  target: 'body',
  property: 'background-color',
  time: 0,
  value: '#FFF' 			// 	# ff4eb3 был розовый
},
{
  target: 'body',
  property: 'color',
  time: '18:00',
  value: '#fff'
},{
  target: 'body',
  property: 'background-color',
  time: '18:00',
  value: '#D0DEF5'
},
{
  target: 'body',
  property: 'color',
  time: '24:00',
  value: '#000'
},
{
  target: 'body',
  property: 'background-color',
  time: '24:00',
  value: '4CE95B#'			//ff4eb3 быд розовый
}

{
  target: 'main',
  property: 'background-color',
  time: '22:00',
  value: '#22405C'		//Темный
},
{
  target: 'main',
  property: 'background-color',
  time: '23:00',
  value: '#15212D'		//Ближе к чёрному
},
*/
 
/*var stimed = new $.stimed();

stimed.style.create([
  {target:'body', time:'00:00', property:'background-color', value:'#fff'},
  {target:'body', time:'18:00', property:'background-color', value:'#000'},
  {target:'body', time:'24:00', property:'background-color', value:'#fff'}
]);
*/

 

//$(#'document.getElementsByTagName' = 'h2').animate({"left": "+=50px" }, 'slow');


