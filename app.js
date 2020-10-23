
function newentry(){
	//input validation to be implemented 
	console.log("here");	
	var menu = document.getElementById("menu");
	var sign = menu.options[menu.selectedIndex].value;
	console.log(sign)
	
	var description = document.getElementsByClassName("add__description")[0].value;
	var value = parseFloat(document.getElementById("entry").value);
	
	console.log(description)
	console.log(value);
	
	//if sign is + --> get income element. make new income div and populate 
	if (sign=="inc"){
		console.log("income.");
		var inc = document.getElementsByClassName("budget__income--value")[0].innerHTML;
		cur = inc.substring(1, inc.length);
		cur = cur.split(",").join("");
		num = parseFloat(cur);
		num = num + value;
		//todo write formatter function for final number --> formatted string 
		document.getElementsByClassName("budget__income--value")[0].innerHTML = "+"+moneyFormat(num.toFixed(2)+"");

		//document.getElementById("income"); //get income list. add new element in format 
		
	} else if (sign=="exp"){
	//if sign is - --> get expense element. make new expense div and populate
		console.log("expense.");
		var exp = document.getElementsByClassName("budget__expenses--value")[0].innerHTML;
		cur = exp.split(",").join(""); //dont need to remove first char since is parseable but do axe commas 
		cur = cur.split(" ").join(""); //but there is a space after the - that isnt parseable 
		num = parseFloat(cur);
		num = num - value;
		//todo write formatter function for final number --> formatted string 
		document.getElementsByClassName("budget__expenses--value")[0].innerHTML = moneyFormat(num.toFixed(2)+"");
		
		//document.getElementById("expense");  //get expense list. add new element in format 
		
	}

	recalculate();

};


function recalculate(){
	//get values from current total expenses and total income 
	var inc = document.getElementsByClassName("budget__income--value")[0].innerHTML;
	inc = parseFloat(inc.substring(1, inc.length).split(",").join(""));
	var exp = document.getElementsByClassName("budget__expenses--value")[0].innerHTML;
	exp =  parseFloat(exp.substring(1, exp.length).split(",").join(""));
	//parse from string to float 
	//calculate new available budget 
	current = inc - exp; 
	//update document 
	document.getElementsByClassName("budget__value")[0].innerHTML = (current.toFixed(2)) ;  
	//calculate percentage
	percentage = (exp/inc)*100;
	//update document 
	document.getElementsByClassName("budget__expenses--percentage")[0].innerHTML = percentage.toFixed(0)+"%";

};

function moneyFormat(value){
	//takes value as a string starting with +/-
	//add , where approp and return string to be updated on doc 
	value.replace(/\B(?=(\d{3})+(?!\d))/g, ",") //check if this does weird commas 
	return value; 
};