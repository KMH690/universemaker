var save = {
    cash: cash,
    Bank: Bank,
    Flyer: Flyer,
	Job: Job,
	Teller: Teller
};
function load() {
	var savegame = JSON.parse(localStorage.getItem("save"));
};
var cash = 10;
function interest(number){
	cash = cash + number;
	document.getElementById('cash').innerHTML = cash;
};
var cps = 0;
var Bank = 0;
var Flyer = 0;
var Job = 0;
var Teller = 0;
function buyBank(){
    var BankCost = Math.floor(10 * Math.pow(1.1,Bank));     
    if(cash >= BankCost){                                   
        Bank = Bank + 1;
		cps = cps + 1;
    	cash = cash - BankCost;                          
        document.getElementById('Bank').innerHTML = Bank;
		document.getElementById('cps').innerHTML = cps;
        document.getElementById('cash').innerHTML = cash;  
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,Bank));       
    document.getElementById('BankCost').innerHTML = nextCost;  
};
function buyFlyer(){
    var FlyerCost = Math.floor(50 * Math.pow(1.1,Flyer));     
    if(cash >= FlyerCost){                                   
        Flyer = Flyer + 10;
		cps = cps + 10;
    	cash = cash - FlyerCost;                          
        document.getElementById('Flyer').innerHTML = Flyer;
		document.getElementById('cps').innerHTML = cps;
        document.getElementById('cash').innerHTML = cash;  
    };
    var nextCost = Math.floor(50 * Math.pow(1.1,Flyer));       
    document.getElementById('FlyerCost').innerHTML = nextCost;  
};
function buyJob(){
    var JobCost = Math.floor(100 * Math.pow(1.1,Job));     
    if(cash >= JobCost){                                   
        Job = Job + 50;
		cps = cps + 50;
    	cash = cash - JobCost;                          
        document.getElementById('Job').innerHTML = Job;
		document.getElementById('cps').innerHTML = cps;
        document.getElementById('cash').innerHTML = cash;  
    };
    var nextCost = Math.floor(100 * Math.pow(1.1,Job));       
    document.getElementById('JobCost').innerHTML = nextCost;  
};
function buyTeller(){
    var TellerCost = Math.floor(500 * Math.pow(1.1,Teller));     
    if(cash >= TellerCost){                                   
        Teller = Teller + 100;
		cps = cps + 100;
    	cash = cash - TellerCost;                          
        document.getElementById('Teller').innerHTML = Teller;
		document.getElementById('cps').innerHTML = cps;
        document.getElementById('cash').innerHTML = cash;  
    };
    var nextCost = Math.floor(500 * Math.pow(1.1,Teller));       
    document.getElementById('TellerCost').innerHTML = nextCost;  
};
setInterval(function(){
	interest(cps);
}, 1000);
setInterval(function(){
	localStorage.setItem("save",JSON.stringify(save));
}, 5000);
