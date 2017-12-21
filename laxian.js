let can=document.querySelector('canvas');
let ctx=can.getContext("2d");

can.onmousedown = function(ev) {
	ctx.beginPath();
	can.onmousemove=function(ev){
		ctx.lineTo(ev.offsetX,ev.offsetY);
        ctx.stroke();
	}
	can.onmouseup=function(){
		can.onmousemove=null;
		ctx.closePath();
	}
        
};
