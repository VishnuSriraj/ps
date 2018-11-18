var div = document.getElementById("change");
var h1 = document.getElementById("h1");
var h2 = document.getElementById("h2");
var h3 = document.getElementById("h3");


h1.onmouseover = function() {
  change.src="6.jpg"

document.getElementById("sai2").style.visibility = "visible";
document.getElementById("sai2").style.opacity = "0.85";


  

};

h1.onmouseout = function() {
  change.src="4.jpg"
  document.getElementById("sai2").style.visibility = "hidden";
};


h2.onmouseover = function() {
  change.src="5.jpg"
  document.getElementById("sai2").style.visibility = "visible";
  document.getElementById("sai2").style.opacity = "0.85";
};

h2.onmouseout = function() {
  change.src="4.jpg"
  document.getElementById("sai2").style.visibility = "hidden";
};


h3.onmouseover = function() {
  change.src="7.jpg"
  document.getElementById("sai2").style.visibility = "visible";
  document.getElementById("sai2").style.opacity = "0.85";
};

h3.onmouseout = function() {
  change.src="4.jpg"
  document.getElementById("sai2").style.visibility = "hidden";
};

$(function(){
 
  $('#h1').click(function(){
    $('.filterDiv').show();
    $('.filterDiv').not('.psem_1').hide();
    return false;
  });
  
  $('#h2').click(function(){
    $('.filterDiv').show();
    $('.filterDiv').not('.psem_2').hide();
    return false;
  });
  
  $('#h3').click(function(){
    $('.filterDiv').show();
    $('.filterDiv').not('.psem_3').hide();
    return false;
  });
});