 // HTML Canvas Reference  - http://www.w3schools.com/TAgs/ref_canvas.asp
 // http://www.w3resource.com/html5-canvas/
 
  window.onload=function() {  
    var mycontext1=document.getElementById("myCanvasTag1").getContext('2d');  
    var mycontext2=document.getElementById("myCanvasTag2").getContext('2d');  
    var mycontext3=document.getElementById("myCanvasTag3").getContext('2d');  
    var mycontext4=document.getElementById("myCanvasTag4").getContext('2d');           
    // gradient 1  
    var mygradient1=mycontext1.createLinearGradient(30,30,90,90);             
    mygradient1.addColorStop(0,"#FF0000");  
    mygradient1.addColorStop(1,"#00FF00");  
    mycontext1.fillStyle=mygradient1;  
    mycontext1.fillRect(0,0,200,200);  
    // gradient 2     
    var mygradient2=mycontext2.createLinearGradient(30,30,90,90);             
    mygradient2.addColorStop(1,"#FF0000");  
    mygradient2.addColorStop(0,"#00FF00");  
    mycontext2.fillStyle=mygradient2;  
    mycontext2.fillRect(0,0,200,200);  
  
    var mygradient3=mycontext3.createLinearGradient(30,30,90,90);             
    mygradient3.addColorStop(0,"#0000FF");  
    mygradient3.addColorStop(.5,"#00FFDD");  
    mycontext3.fillStyle=mygradient3;  
    mycontext3.fillRect(0,0,200,200);  
  
    var mygradient4=mycontext1.createLinearGradient(30,30,90,90);             
    mygradient4.addColorStop(0,"#DD33CC");  
    mygradient4.addColorStop(1,"#EEEEEE");  
    mycontext4.fillStyle=mygradient4;  
    mycontext4.fillRect(0,0,200,200);  
    
// HTML5 Canvas Example #5
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
   
// HTML5 Canvas Text, Basic Animation with Canvas example, Example #10

	var canvas3;    
	var ctx;  
	var x = 400;  
	var y = 300;  
	var dx = 2;  
	var dy = 4;  
	var width = 400;  
	var height = 300;   
  
	function circle(x,y,r) {  
	  ctx.beginPath();  
	  ctx.arc(x, y, r, 0, Math.PI*2, true);  
	  ctx.fill();  
	}  
  
	function rect(x,y,w,h) {  
	  ctx.beginPath();  
	  ctx.rect(x,y,w,h);  
	  ctx.closePath();  
	  ctx.fill();  
	}  
  
   
	function reset() {  
	  ctx.clearRect(0, 0, width, height);  
	}  
  
	function init() {  
	  canvas3 = document.getElementById("myCanvasTag10");  
	  ctx = myCanvasTag10.getContext("2d");  
	  return setInterval(animate, 10);  
	}  
  
  
	function animate() {  
	  reset();  
	  ctx.fillStyle = "#FAF7F8";  
	  rect(0,0,width,height);  
	  ctx.fillStyle = "#444444";  
	  circle(x, y, 10);  
  
	  if (x + dx > width || x + dx < 0)  
		dx = -dx;  
	  if (y + dy > height || y + dy < 0)  
		dy = -dy;  
  
	  x += dx;  
	  y += dy;  
	}  
  
	init();  
	
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