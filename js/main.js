$( document ).ready(function(){
  var mymap = L.map('mapid').setView([47.6149943,-122.475988,11], 13);

  L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHVrZXZwb2VsIiwiYSI6ImNpcXgyYTJibTAxZTNmc2txMHNkM216ZnkifQ.qig439qLZweqLXTkTjOmFQ', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
    maxZoom: 18,
    minZoom: 10,
    id: 'lukevpoel',
    accessToken: 'pk.eyJ1IjoibHVrZXZwb2VsIiwiYSI6ImNpcXgyYTJibTAxZTNmc2txMHNkM216ZnkifQ.qig439qLZweqLXTkTjOmFQ'
  }).addTo(mymap);

});
