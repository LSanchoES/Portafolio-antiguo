
$(document).ready(function(){  //FUNCIONA!! Selector de texto
  $("#buscador").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#personajesFila a").filter(function() {
      $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
    });
  });
});
//ELEMENTOS SELECTOR
$("#Anemo").click(function(){
  $('#Anemo').toggleClass('selected', '');
  $('.Pyro').toggleClass('hide', '');
  $('.Hydro').toggleClass('hide', '');
  $('.Electro').toggleClass('hide', '');
  $('.Cryo').toggleClass('hide', '');
  $('.Geo').toggleClass('hide', '');
  $('.Dendro').toggleClass('hide', '');

  $('#Pyro').removeClass('selected');
  $('#Hydro').removeClass('selected');
  $('#Electro').removeClass('selected');
  $('#Cryo').removeClass('selected');
  $('#Geo').removeClass('selected');
  $('#Dendro').removeClass('selected');

  $('#Pyro').toggleClass('hide', '');
  $('#Hydro').toggleClass('hide', '');
  $('#Electro').toggleClass('hide', '');
  $('#Cryo').toggleClass('hide', '');
  $('#Geo').toggleClass('hide', '');
  $('#Dendro').toggleClass('hide', '');
});

$("#Pyro").click(function(){
  $('#Pyro').toggleClass('selected', '');
  $('.Anemo').toggleClass('hide', '');
  $('.Hydro').toggleClass('hide', '');
  $('.Electro').toggleClass('hide', '');
  $('.Cryo').toggleClass('hide', '');
  $('.Geo').toggleClass('hide', '');
  $('.Dendro').toggleClass('hide', '');

  $('#Anemo').removeClass('selected');
  $('#Hydro').removeClass('selected');
  $('#Electro').removeClass('selected');
  $('#Cryo').removeClass('selected');
  $('#Geo').removeClass('selected');
  $('#Dendro').removeClass('selected');

  $('#Anemo').toggleClass('hide', '');
  $('#Hydro').toggleClass('hide', '');
  $('#Electro').toggleClass('hide', '');
  $('#Cryo').toggleClass('hide', '');
  $('#Geo').toggleClass('hide', '');
  $('#Dendro').toggleClass('hide', '');
});
$("#Hydro").click(function(){
  $('#Hydro').toggleClass('selected', '');
  $('.Anemo').toggleClass('hide', '');
  $('.Pyro').toggleClass('hide', '');
  $('.Electro').toggleClass('hide', '');
  $('.Cryo').toggleClass('hide', '');
  $('.Geo').toggleClass('hide', '');
  $('.Dendro').toggleClass('hide', '');

  $('#Pyro').removeClass('selected');
  $('#Anemo').removeClass('selected');
  $('#Electro').removeClass('selected');
  $('#Cryo').removeClass('selected');
  $('#Geo').removeClass('selected');
  $('#Dendro').removeClass('selected');

  $('#Pyro').toggleClass('hide', '');
  $('#Anemo').toggleClass('hide', '');
  $('#Electro').toggleClass('hide', '');
  $('#Cryo').toggleClass('hide', '');
  $('#Geo').toggleClass('hide', '');
  $('#Dendro').toggleClass('hide', '');
});
$("#Electro").click(function(){
  $('#Electro').toggleClass('selected', '');
  $('.Anemo').toggleClass('hide', '');
  $('.Hydro').toggleClass('hide', '');
  $('.Pyro').toggleClass('hide', '');
  $('.Cryo').toggleClass('hide', '');
  $('.Geo').toggleClass('hide', '');
  $('.Dendro').toggleClass('hide', '');

  $('#Pyro').removeClass('selected');
  $('#Hydro').removeClass('selected');
  $('#Anemo').removeClass('selected');
  $('#Cryo').removeClass('selected');
  $('#Geo').removeClass('selected');
  $('#Dendro').removeClass('selected');

  $('#Pyro').toggleClass('hide', '');
  $('#Hydro').toggleClass('hide', '');
  $('#Anemo').toggleClass('hide', '');
  $('#Cryo').toggleClass('hide', '');
  $('#Geo').toggleClass('hide', '');
  $('#Dendro').toggleClass('hide', '');
});
$("#Cryo").click(function(){
  $('#Cryo').toggleClass('selected', '');
  $('.Anemo').toggleClass('hide', '');
  $('.Hydro').toggleClass('hide', '');
  $('.Electro').toggleClass('hide', '');
  $('.Pyro').toggleClass('hide', '');
  $('.Geo').toggleClass('hide', '');
  $('.Dendro').toggleClass('hide', '');

  $('#Pyro').removeClass('selected');
  $('#Hydro').removeClass('selected');
  $('#Electro').removeClass('selected');
  $('#Anemo').removeClass('selected');
  $('#Geo').removeClass('selected');
  $('#Dendro').removeClass('selected');

  $('#Pyro').toggleClass('hide', '');
  $('#Hydro').toggleClass('hide', '');
  $('#Electro').toggleClass('hide', '');
  $('#Anemo').toggleClass('hide', '');
  $('#Geo').toggleClass('hide', '');
  $('#Dendro').toggleClass('hide', '');
});
$("#Geo").click(function(){
  $('#Geo').toggleClass('selected', '');
  $('.Anemo').toggleClass('hide', '');
  $('.Hydro').toggleClass('hide', '');
  $('.Electro').toggleClass('hide', '');
  $('.Cryo').toggleClass('hide', '');
  $('.Pyro').toggleClass('hide', '');
  $('.Dendro').toggleClass('hide', '');

  $('#Pyro').removeClass('selected');
  $('#Hydro').removeClass('selected');
  $('#Electro').removeClass('selected');
  $('#Cryo').removeClass('selected');
  $('#Anemo').removeClass('selected');
  $('#Dendro').removeClass('selected');

  $('#Pyro').toggleClass('hide', '');
  $('#Hydro').toggleClass('hide', '');
  $('#Electro').toggleClass('hide', '');
  $('#Cryo').toggleClass('hide', '');
  $('#Anemo').toggleClass('hide', '');
  $('#Dendro').toggleClass('hide', '');
});
$("#Dendro").click(function(){
  $('#Dendro').toggleClass('selected', '');
  $('.Anemo').toggleClass('hide', '');
  $('.Hydro').toggleClass('hide', '');
  $('.Electro').toggleClass('hide', '');
  $('.Cryo').toggleClass('hide', '');
  $('.Geo').toggleClass('hide', '');
  $('.Pyro').toggleClass('hide', '');

  $('#Pyro').removeClass('selected');
  $('#Hydro').removeClass('selected');
  $('#Electro').removeClass('selected');
  $('#Cryo').removeClass('selected');
  $('#Geo').removeClass('selected');
  $('#Anemo').removeClass('selected');

  $('#Pyro').toggleClass('hide', '');
  $('#Hydro').toggleClass('hide', '');
  $('#Electro').toggleClass('hide', '');
  $('#Cryo').toggleClass('hide', '');
  $('#Geo').toggleClass('hide', '');
  $('#Anemo').toggleClass('hide', '');
});

//SELECTORES ARMAS

$("#Sword").click(function(){
  $('#Sword').toggleClass('selected', '');
  $('.Claymore').toggleClass('hide1', '');
  $('.Catalyst').toggleClass('hide1', '');
  $('.Polearm').toggleClass('hide1', '');
  $('.Bow').toggleClass('hide1', '');

  $('#Claymore').toggleClass('hide1', '');
  $('#Catalyst').toggleClass('hide1', '');
  $('#Polearm').toggleClass('hide1', '');
  $('#Bow').toggleClass('hide1', '');
});
$("#Claymore").click(function(){
  $('#Claymore').toggleClass('selected', '');
  $('.Sword').toggleClass('hide1', '');
  $('.Catalyst').toggleClass('hide1', '');
  $('.Polearm').toggleClass('hide1', '');
  $('.Bow').toggleClass('hide1', '');

  $('#Sword').toggleClass('hide1', '');
  $('#Catalyst').toggleClass('hide1', '');
  $('#Polearm').toggleClass('hide1', '');
  $('#Bow').toggleClass('hide1', '');
});
$("#Catalyst").click(function(){
  $('#Catalyst').toggleClass('selected', '');
  $('.Claymore').toggleClass('hide1', '');
  $('.Sword').toggleClass('hide1', '');
  $('.Polearm').toggleClass('hide1', '');
  $('.Bow').toggleClass('hide1', '');

  $('#Claymore').toggleClass('hide1', '');
  $('#Sword').toggleClass('hide1', '');
  $('#Polearm').toggleClass('hide1', '');
  $('#Bow').toggleClass('hide1', '');
});
$("#Polearm").click(function(){
  $('#Polearm').toggleClass('selected', '');
  $('.Claymore').toggleClass('hide1', '');
  $('.Catalyst').toggleClass('hide1', '');
  $('.Sword').toggleClass('hide1', '');
  $('.Bow').toggleClass('hide1', '');

  $('#Claymore').toggleClass('hide1', '');
  $('#Catalyst').toggleClass('hide1', '');
  $('#Sword').toggleClass('hide1', '');
  $('#Bow').toggleClass('hide1', '');
});
$("#Bow").click(function(){
  $('#Bow').toggleClass('selected', '');
  $('.Claymore').toggleClass('hide1', '');
  $('.Catalyst').toggleClass('hide1', '');
  $('.Polearm').toggleClass('hide1', '');
  $('.Sword').toggleClass('hide1', '');

  $('#Claymore').toggleClass('hide1', '');
  $('#Catalyst').toggleClass('hide1', '');
  $('#Polearm').toggleClass('hide1', '');
  $('#Sword').toggleClass('hide1', '');
});