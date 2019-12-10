$(document).ready(function(){
		$('.pilihan1').click(function(){
			$('#pop2').show();
			$('.kotak').fadeIn();
		});
		$('.pilihan2').click(function(){
			$('#pop1').show();
			$('.kotak').fadeIn();
		});
		$('.exit').click(function(){
			$('#pop1').hide();
			$('#pop2').hide();
		});
	});

function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}