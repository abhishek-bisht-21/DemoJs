console.log("varname",varname);
var varname;
console.log("varname",varname);
varname = "Superman";
console.log("varname",varname);

fn();
function fn(){
	console.log("Hello from fn");
}
fn();

fnContainer();
var fnContainer = function(){
	console.log("I am an expression");
}
fnContainer();