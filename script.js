 // HTML Canvas Reference  - http://www.w3schools.com/TAgs/ref_canvas.asp
 // http://www.w3resource.com/html5-canvas/
 
  window.onload=function() {  

// HTML5 Canvas, Gradient, Example #1
    var mycontext1=document.getElementById("myCanvasTag1").getContext('2d');   
    var mygradient1=mycontext1.createLinearGradient(30,30,90,90);             
    mygradient1.addColorStop(0,"#0000FF");  
    mygradient1.addColorStop(.5,"#00FFDD");  
    mycontext1.fillStyle=mygradient1;  
    mycontext1.fillRect(0,0,200,200);  
  
// HTML5 Canvas, Gradient, Example #2  
    var mycontext2=document.getElementById("myCanvasTag2").getContext('2d');      
    var mygradient2=mycontext2.createLinearGradient(30,30,90,90);             
    mygradient2.addColorStop(0,"#DD33CC");  
    mygradient2.addColorStop(1,"#EEEEEE");  
    mycontext2.fillStyle=mygradient2;  
    mycontext2.fillRect(0,0,200,200);  

// HTML5 Canvas, Boxes in Boxes, Example #5
   var w3rcanvas=document.getElementById("myCanvasTag5");  
   var w3rcontext=w3rcanvas.getContext('2d');  
   w3rcontext.fillStyle='rgb(0,0,255)'; //Sets the color used for filling an area   
   w3rcontext.fillRect(0,0,200,200);   //Fills a rectangle positioned at x and y, with a width and height of w and h.  
   w3rcontext.fillStyle='rgb(255,0,0)';    
   w3rcontext.fillRect(25,25,150,150);      
   w3rcontext.fillStyle='rgb(0,255,0)';    
   w3rcontext.fillRect(50,50,100,100);  
   w3rcontext.fillStyle='rgb(100,100,100)';    
   w3rcontext.fillRect(75,75,50,50);  

// HTML5 Canvas Example #6  
   var canvas = document.getElementById('myCanvasTag6');  
   var context = canvas.getContext('2d');  
   var imgObj = new Image();  
   imgObj.onload = function() {  
   context.drawImage(imgObj,25,25);  
   };  
   imgObj.src = 'http://www.w3resource.com/images/logo.png'; 

// HTML5 Canvas Text, Example #7
   var canvas2 = document.getElementById('myCanvasTag7');  
   var context2 = canvas2.getContext('2d');  
	   // Create a red line in position 100 ; http://www.w3schools.com/TAgs/canvas_textalign.asp
		context2.strokeStyle="red";
		context2.moveTo(100,20);
		context2.lineTo(100,170);
		context2.stroke();
   context2.font = 'bold 24pt Arial';//sets font style, size and type  
   context2.fillStyle = 'orange';//sets font color  
   context2.textAlign="center";  
   context2.fillText("Welcome!",100,100);//sets text to be rendered 


// HTML5 Canvas Text, Empty Box, Example #8
   var emptycanvas = document.getElementById('myCanvasTag9');  
   var context4 = emptycanvas.getContext('2d');


// HTML5 Canvas Text, HTML Ampersand, Example #9
// http://stackoverflow.com/questions/35570801/how-to-draw-font-awesome-icons-onto-html-canvas
// http://www.cheezycode.com/2015/07/font-awesome-with-html5-canvas.html
   var ampersandcanvas = document.getElementById('myCanvasTag9');  
   var context4 = ampersandcanvas.getContext('2d');  
   context4.font = 'bold 80pt Arial';//sets font style, size and type  
   context4.fillStyle = 'orange';//sets font color  
   context4.textAlign="center";  
   context4.fillText("&",100,100);//sets text to be rendered 
   

	
// HTML5 Container #1, Slideshow
	
	
	var slideIndex = 0;
	carousel();

	function carousel() {
		var i;
		var x2 = document.getElementsByClassName("mySlides");
		for (i = 0; i < x2.length; i++) {
		  x2[i].style.display = "none"; 
		}
		slideIndex++;
		if (slideIndex > x2.length) {slideIndex = 1} 
		x2[slideIndex-1].style.display = "block"; 
		setTimeout(carousel, 1000); 
		}
		


}