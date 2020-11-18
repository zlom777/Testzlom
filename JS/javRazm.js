/* Чекбокс - функция смены размеров */
cb5.onclick = function Changeit(){
	let tab = document.getElementById("Setka_tab");
	let oldclasstb = document.getElementById("Setka_tab").className;
	let oldclasstr = document.getElementsByTagName("tr").className;
	let oldclassth = document.getElementsByTagName("th").className;
	let oldclasstd = document.getElementsByTagName("td").className;
	if (cb5.checked) {
		tab.style.display="none";  //Скрыть
		setkaH3.innerHTML = "Размерная сетка взрослой одежды";
		setkaH3.style = "color:Fuchsia";			
		setkaH2.style = "color:Fuchsia;";
		document.getElementById('set2').style.visibility = "visible";
		document.getElementById('set2').style.display = "block";
		document.getElementById('set2').style.className = "responsive";
		kart.src = "Image/karnaval_vzr.jpg";
		kart.class = "responsive"
		}
		else {
			document.location.href = "Razm.html";
		}
}	

//$(#"set2").animate({style.className: "responsive"});
//$( selector ).animate( { properties }, duration, easing, complete ) 


//document.innerHTML.body
/* Анимация - работает, но быстро
$('#set2').show();


/* Анимация - работает, но быстро
 $("#set2").ready(function(){
    $(this).animate({visibility: 'visible'}, 2000, "slideDown");
});

* Анимация - пример
$('#hide').click(function() {
	$('#elem').fadeOut(1000);
});

$('#show').click(function() {
	$('#elem').fadeIn(1000);
});

/* Анимация - пример
$(function(){
    for (var i = 0; i < 8; i++) {
      $('.animate').clone().appendTo('.container');
    }
    $('.animate').animate({
      left: 800
    }, 500);
  }); */