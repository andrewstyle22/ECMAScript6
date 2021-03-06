//import * as mortgage from './mortgage';//pasaremos esto a una clase
/*esto pasa a mortgage.js
let calculateMonthlyPayment = (principal, years, rate) => {
    let monthlyRate = 0;
	if (rate) {
        monthlyRate = rate / 100 / 12;
    }
    let monthlyPayment = principal * monthlyRate / (1 - (Math.pow(1 / (1 + monthlyRate), years * 12)));
    
	return {monthlyPayment, monthlyRate};
};

let calculateAmortization = (principal, years, rate) => {
    let {monthlyRate, monthlyPayment} = calculateMonthlyPayment(principal, years, rate);
    let balance = principal;
    let amortization = [];
    let numberYear = 0;
    
	for (let y=0; y < years; y++) {
        let interestY = 0;  //Interest payment for year y
        let principalY = 0; //Principal payment for year y
        
		for (let m=0; m < 12; m++) {
            let interestM = balance * monthlyRate;       //Interest payment for month m
            let principalM = monthlyPayment - interestM; //Principal payment for month m
            
			interestY = interestY + interestM;
            principalY = principalY + principalM;
            balance = balance - principalM;
        }
		numberYear++;
        amortization.push({principalY, interestY, balance, numberYear});
    }
    
	return {monthlyPayment, monthlyRate, amortization};
};
*/
/*
document.getElementById('calcBtn').addEventListener('click', function () {
    var principal = document.getElementById("principal").value;
    var years = document.getElementById("years").value;
    var rate = document.getElementById("rate").value;
    
	//var monthlyPayment = calculateMonthlyPayment(principal, years, rate);
	let {monthlyPayment, monthlyRate} = calculateMonthlyPayment(principal, years, rate);
    
	document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
	document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2);
});*/

//document.getElementById('calcBtn').addEventListener('click', function () {
document.getElementById('calcBtn').addEventListener('click', () => {
    let principal = document.getElementById("principal").value;
    let years = document.getElementById("years").value;
    let rate = document.getElementById("rate").value;
    
	//var monthlyPayment = calculateMonthlyPayment(principal, years, rate);
	//let {monthlyPayment, monthlyRate, amortization} = calculateAmortization(principal, years, rate);
    let {monthlyPayment, monthlyRate, amortization} = mortgage.calculateAmortization(principal, years, rate);

	document.getElementById("monthlyPayment").innerHTML = monthlyPayment.toFixed(2);
    document.getElementById("monthlyRate").innerHTML = (monthlyRate * 100).toFixed(2);
    
	amortization.forEach(month => console.log(month));
});