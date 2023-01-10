jQuery(document).ready(function($) {
	// jequery content

if (screen.width < 720) {
  alert("Maaf , Buka Pada DESKTOP atau jika di mobile pakai mode Lanscape");
  $('.error').css({"display":"flex"})
}
document.addEventListener("orientationchange", function(event){
    switch(window.orientation) 
    {  
        case -90: case 90:
            /* Device is in landscape mode */
            break; 
        default:
        	 alert("Maaf , Buka Pada DESKTOP atau jika di mobile pakai mode Lanscape");
 			 $('.error').css({"display":"flex"})
    }
});



	let co = document.getElementById('conf');
	let coT = document.getElementById('co-t');
	let footer = document.querySelector('footer');
	co.style.height = '100vh';

	// set default
	document.getElementById('nBar').style.width = '770px';
	footer.style.display = 'none';
	$('.isi-fot').css({"animation":"ndowo 1.5s"});

	//scroll event

 	window.addEventListener('scroll',function(){
 		let yScroll = window.scrollY;
 		

 		// first content
 		if(yScroll >200){
 			co.style.height = '0px';
 		}else{
 			co.style.height = '100vh';
 		}

 		//content two
 		if(yScroll > 400){
 			coT.style.display = 'block';
 			coT.style.animation = 'anim-co-t .5s';
  		}else if(yScroll <= 100) {
  			$('.co-t').fadeOut(500);
  		}

  		// footer
  		if(yScroll > 600){
  			$('.isi-fot').css({"animation":"ndowo 1.5s"});
  			footer.style.display = 'flex';
  			setTimeout(function(){
  				$(".ft-ls-anim").css({"display":"none"});
  			},1500);
  		}
  		else{
  			$('footer').fadeOut(1000);
  			$('.ft-ls-anim').css({"display":"flex"})
  		}
 	})
 	let navPorto = document.getElementById('navPorto');
 	let navSkill = document.getElementById('navSkill');
 	let navAbout = document.getElementById('navAbout');



 	document.getElementById('close').onclick = function(){
 		$('.porto-f').fadeOut(500);
 		$('.portofolio').css({"display":"none"});
 		$('.about').css({"display":"none"});
 		$('.skill-bar').css({"display":"none"});
 	}

 	// make variable
 	let po = 0;

 	// stting porto
 	$('.portofolio').css({"display":"none"})
 	$('.about').css({"display":"none"})
 	$('.skill-bar').css({"display":"none"})

 	// testing

 		navPorto.onclick = function(){
 			po = 1;
 			$('.porto-f').css({"display":"flex"});
 			$('.portofolio').fadeIn(500);
 		}
 		navAbout.onclick = function(){
 			po = 2;
 			$('.porto-f').css({"display":"flex"});
 			$('.about').fadeIn(500);
 		}

 		navSkill.onclick = function(){
 			po = 3;
 			$('.porto-f').css({"display":"flex"});
 			$('.skill-bar').fadeIn(500);
 		}

 		// next button

 		document.getElementById('kanan').onclick = function(){
 			if(po == 1){
 				po = 2;
 				Onskill();
 			}else if(po == 2){
 				po = 3;
 				OnAbout();
 			}
 			else{
 				po = 1;
 				OnPorto();
 			}
 		}

 		function Onskill(){
 				$('.skill-bar').fadeIn();
 				$('.portofolio').hide();
 		}
 		function OnAbout(){
 			$('.skill-bar').hide();
 			$('.about').fadeIn();
 		}
 		function OnPorto(){
 			$('.about').hide();
 			$('.portofolio').fadeIn();
 		}

 		// back button jujur agak bingung

 		document.getElementById('kiri').onclick = function(){
 			if(po == 1){
 				po = 3;
 				$('.portofolio').hide();
 				$('.about').fadeIn();
 			}else if(po == 2){
 				po = 1;
 				$('.skill-bar').hide();
 				$('.portofolio').fadeIn();
 			}
 			else{
 				po = 2;
 				$('.about').hide();
 				$('.skill-bar').fadeIn()
 			}
 		}
});