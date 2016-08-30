$( document ).ready(function(){

  //start to pull JSON to fill the events parts
  $.getJSON("js/events.json", function ( data ) {
    $( ".first-cal-title").html(data[0].title);
    $( ".first-cal-desc" ).html(data[0].description);
    $( ".first-cal-img" ).attr("src", data[0].image);
    $( '#second-cal-title').html(data[1].title);
    $( "#second-cal-desc" ).html(data[1].description);
    $( "#second-cal-img" ).attr("src", data[1].image);
    $( '#third-cal-title').html(data[2].title);
    $( "#third-cal-desc" ).html(data[2].description);
    $( "#third-cal-img" ).attr("src", data[2].image);


    //check to see if data is being pulled
    console.log( data[0].title );


      var mymap = L.map('mapid').setView([47.6149943,-122.475988,11], 10);

      L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibHVrZXZwb2VsIiwiYSI6ImNpcXgyYTJibTAxZTNmc2txMHNkM216ZnkifQ.qig439qLZweqLXTkTjOmFQ', {
        attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://mapbox.com">Mapbox</a>',
        maxZoom: 18,
        minZoom: 8,
        id: 'lukevpoel',
        accessToken: 'pk.eyJ1IjoibHVrZXZwb2VsIiwiYSI6ImNpcXgyYTJibTAxZTNmc2txMHNkM216ZnkifQ.qig439qLZweqLXTkTjOmFQ'
      }).addTo(mymap);
      var firstMarker = L.marker([data[0].latitude, data[0].longitude]).bindPopup(data[0].title).addTo(mymap);
      var secondMarker = L.marker([data[1].latitude, data[1].longitude]).bindPopup(data[1].title).addTo(mymap);
      var thirdMarker = L.marker([data[2].latitude, data[2].longitude]).bindPopup(data[2].title).addTo(mymap);



  });
});
