let can=document.querySelector('canvas');
let ctx=can.getContext("2d");
let PI=Math.PI;
function sum(num){
		
		let r = 100;
		let deg = 2*PI/num;
		ctx.beginPath();
		ctx.arc(150, 200, 100, 0, 2*PI);
		ctx.moveTo(150 + r,200)
		for(let i = 0;i < num;i++){
			let x = 150 + r*Math.cos(deg*i)
			let y = 200 + r*Math.sin(deg*i)
			ctx.lineTo(x,y)
			// ctx.arc(100,)
		}
		ctx.closePath()
		ctx.stroke()
	}
	sum(6)
