$(document).ready(function(){
	var livreLength = $("#livredt").children("img").length - 1;
    $("#next").click(function (e) {
		e.preventDefault();
		var current = $("img.active");
		var i = current.index();
		current.removeClass("active");
		if (i === livreLength ){
			i=0
		}else{
			i++;
		}
		$("#livredt img").eq(i).addClass("active")
    });
	$("#prev").click(function (e) {
		e.preventDefault();
		var current = $("img.active");
		var i = current.index();
		current.removeClass("active");
		if (i === 0 ){
			i=livreLength;
		}else{
			i--;
		}
		$("#livredt img").eq(i).addClass("active")
    })
	// parametre de recherche
	var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
			sURLVariables = sPageURL.split('&'),
			sParameterName,
			i;

		for (i = 0; i < sURLVariables.length; i++) {
			sParameterName = sURLVariables[i].split('=');

			if (sParameterName[0] === sParam) {
				return sParameterName[1] === undefined ? true : sParameterName[1];
			}
		}
	};
	var recherche = getUrlParameter('Recherche');
	if(recherche){
		$(".novels").css({"display":"none"})
		$('.novels:contains("'+recherche+'")').addClass("show");
	}

});