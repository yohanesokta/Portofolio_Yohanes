jQuery(document).ready(function($) {
	// jequery content
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
 		

 		// first from
 		if(yScroll >200){
 			co.style.height = '0px';
 		}else{
 			co.style.height = '100vh';
 		}

 		//form two
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
});