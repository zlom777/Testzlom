/* Установка ширины боковой навигации на 250 пикселей */
function openMenu() {
    document.getElementById("mySidemenu").style.width = "250px";
}

/* Установка ширины боковой навигации на 0 */
function closeMenu() {
    document.getElementById("mySidemenu").style.width = "0";
}

 var stimed = new $.stimed({
  timeTarget: '.time',
  speedUp: 1000
});


stimed.style.create(
// Create time text and background color styles at the same time
{
  target: '.time',
  property: 'color',
  time: 0,
  value: '#000'
},{
  target: '.time',
  property: 'background-color',
  time: 0,
  value: '#ff4eb3'
},
{
  target: '.time',
  property: 'color',
  time: '18:00',
  value: '#fff'
},{
  target: '.time',
  property: 'background-color',
  time: '18:00',
  value: '#2185d0'
},
{
  target: '.time',
  property: 'color',
  time: '24:00',
  value: '#000'
},
{
  target: '.time',
  property: 'background-color',
  time: '24:00',
  value: '#ff4eb3'
});

// Create main background color style
stimed.style.create({
  target: 'main',
  property: 'background-color',
  time: 0,
  value: '#fff'
},
{
  target: 'main',
  property: 'background-color',
  time: '18:00',
  value: '#000'
},
{
  target: 'main',
  property: 'background-color',
  time: '24:00',
  value: '#fff'
});


 
/*var stimed = new $.stimed();

stimed.style.create([
  {target:'body', time:'00:00', property:'background-color', value:'#fff'},
  {target:'body', time:'18:00', property:'background-color', value:'#000'},
  {target:'body', time:'24:00', property:'background-color', value:'#fff'}
]);
*/

 

//$(#'document.getElementsByTagName' = 'h2').animate({"left": "+=50px" }, 'slow');


