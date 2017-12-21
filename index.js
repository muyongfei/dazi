let can=document.querySelector('canvas');
let ctx=can.getContext("2d");
let PI=Math.PI;
let i=0;
let t=setInterval(function(){
	i++;
	ctx.clearRect(0, 0, 1000, 1000);
	ctx.beginPath();
	ctx.arc(300, 300, 100, 0, PI*i/50);
	ctx.stroke();
	ctx.closePath();
	
	if(i==100){
		clearInterval(t);
	}
},100);