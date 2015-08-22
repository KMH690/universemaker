var EnergyNum = 0;
var MatterNum = 0;
var QuarkNum = 0;
var ElectronNum = 0;
var QuarkNum = 0;
var NeutronNum = 0;
var ProtonNum = 0;
var NucleusNum = 0;
var AtomNum = 0;
var EnergyNum = 35;
var MatterNum = 0;
function EnergySecond(number){
	EnergyNum = EnergyNum + number;
	document.getElementById('EnergyNum').innerHTML = EnergyNum;
};
function MatterSecond(number){
	MatterNum = MatterNum + number;
	document.getElementById('MatterNum').innerHTML = MatterNum;
};
function NucleusSecond(number){
	NucleusNum = NucleusNum + number;
	document.getElementById('NucleusNum').innerHTML = NucleusNum;
};
function ElectronSecond(number){
	ElectronNum = ElectronNum + number;
	document.getElementById('ElectronNum').innerHTML = ElectronNum;
};
function ProtonSecond(number){
	ProtonNum = ProtonNum + number;
	document.getElementById('ProtonNum').innerHTML = ProtonNum;
};
function NeutronSecond(number){
	NeutronNum = NeutronNum + number;
	document.getElementById('NeutronNum').innerHTML = NeutronNum;
};
function QuarkSecond(number){
	QuarkNum = QuarkNum + number;
	document.getElementById('QuarkNum').innerHTML = QuarkNum;
};
function AtomSecond(number){
	AtomNum = AtomNum + number;
	document.getElementById('AtomNum').innerHTML = AtomNum;
};
var eps = 0;
var mps = 1;
var qps = 0;
var elps = 0;
var neps = 0;
var pps = 0;
var nps = 0;
var aps = 0;
function makeQuark(){
    var QuarkCostEnergy = 10;
    var QuarkCostMatter = 1;
    if(EnergyNum >= QuarkCostEnergy){
    if(MatterNum >= QuarkCostMatter){
        QuarkNum = QuarkNum + 1;
		eps = eps + 1;
    	EnergyNum = EnergyNum - QuarkCostEnergy;
    	MatterNum = MatterNum - QuarkCostMatter;
        document.getElementById('QuarkNum').innerHTML = QuarkNum;
		document.getElementById('eps').innerHTML = eps;
        document.getElementById('EnergyNum').innerHTML = EnergyNum; 
        document.getElementById('MatterNum').innerHTML = MatterNum;
    } else {
    } else {
    }
    }
};
function buyFlyer(){
    var FlyerCost =     
    if(cash >= FlyerCost){                                   
        Flyer = Flyer + 10;
		cps = cps + 10;
    	cash = cash - FlyerCost;                          
        document.getElementById('Flyer').innerHTML = Flyer;
		document.getElementById('cps').innerHTML = cps;
        document.getElementById('cash').innerHTML = cash;  
    };
};
function buyJob(){
    var JobCost = 
    if(cash >= JobCost){                                   
        Job = Job + 50;
		cps = cps + 50;
    	cash = cash - JobCost;                          
        document.getElementById('Job').innerHTML = Job;
		document.getElementById('cps').innerHTML = cps;
        document.getElementById('cash').innerHTML = cash;  
    };
};
function buyTeller(){
    var TellerCost =      
    if(cash >= TellerCost){                                   
        Teller = Teller + 100;
		cps = cps + 100;
    	cash = cash - TellerCost;                          
        document.getElementById('Teller').innerHTML = Teller;
		document.getElementById('cps').innerHTML = cps;
        document.getElementById('cash').innerHTML = cash;  
    };
};
setInterval(function(){
	EnergySecond(eps);
	MatterSecond(mps);
	QuarkSecond(qps);
	ElectronSecond(elps);
	NeutronSecond(Neps);
	ProtonSecond(pps);
	NucleusSecond(nps);
	AtomSecond(aps);
}, 1000);
