function hexFromRGB(r, g, b) {
    var hex = [
      r.toString( 16 ),
      g.toString( 16 ),
      b.toString( 16 )
    ];
    $.each( hex, function( nr, val ) {
      if ( val.length === 1 ) {
        hex[ nr ] = "0" + val;
      }
    });
    return hex.join( "" ).toUpperCase();
  }
  function refreshSwatch() {
    var red = $( "#red" ).slider( "value" ),
      green = $( "#green" ).slider( "value" ),
      blue = $( "#blue" ).slider( "value" ),
      hex = hexFromRGB( red, green, blue );
    $( "#swatch" ).css( "background-color", "#" + hex );
  }
  $(function() {
    $( "#red, #green, #blue" ).slider({
      orientation: "horizontal",
      range: "min",
      max: 1000,
      value: 127,
      slide: refreshSwatch,
      change: refreshSwatch
    });
    $( "#red" ).slider( "value", 0);
    $( "#green" ).slider( "value", 500 );
    $( "#blue" ).slider( "value", 500 );
  });
var first;
var determinant;
var proc;
function maxValue(object){
	object.slider( "value",1000);
};

   $(function() {

  first = $( "#red" ).slider( "value");
   var second =  $( "#green" ).slider( "value");
   var third =  $( "#blue" ).slider( "value");
  });
   function check(){
   	if(first!=$( "#red" ).slider( "value")){
   		first = $( "#red" ).slider( "value");
   		determinant = 1000-$( "#red" ).slider( "value");
   	 proc = (1000-$( "#red" ).slider( "value"))/1000;
   	    	 console.log(proc);
   	    	 $( "#green" ).slider( "value", proc/2*1000);
   	    	 $( "#blue" ).slider( "value", proc/2*1000 );
   	 }

   };
   setInterval(check, 10);
      $("#fValue").click(function(){
   	maxValue($("#green"));
   });
         $("#sValue").click(function(){
   	maxValue($("#blue"));
   });
         $("#rValue").click(function(){
    maxValue($("#red"));
   });

 
