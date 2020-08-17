// pre defined functions
var d = new Date();
document.querySelector(".date").innerHTML = d;

// user-defined functions

function  sample(){

	document.write("hai");
}

// sample()=>{

// 	document.write("hai");
// }

var x = function(a,b){
	console.log(a*b);
}
x(4,5);

var y = (s,r)=>console.log(s*r);
y(9,10);

let y = (s,r)=>console.log(s*r);
y(9,10);

var a = 54;
{
	let a =40
	console.log(a);
}
console.log(a)
// let will be within the block only. but using var in flower brackets it overridess.