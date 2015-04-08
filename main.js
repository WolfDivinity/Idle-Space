var tier1 =0;
var workers =1;
var money=0;
function addtier(number){
tier1 = tier1 + number;
document.getElementById("tier1").innerHTML = tier1;
}
function HireWorker(){
    var workerCost = Math.floor(10 * Math.pow(1.1,workers));     //works out the cost of this cursor
    if(tier1 >= workerCost){                                   //checks that the player can afford the cursor
        workers = workers + 1;                                   //increases number of cursors
    	tier1 = tier1 - workerCost;                          //removes the cookies spent
        document.getElementById('workers').innerHTML = workers;  //updates the number of cursors for the user
        document.getElementById('tier1').innerHTML = tier1;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,workers));       //works out the cost of the next cursor
    document.getElementById('workercost').innerHTML = nextCost;  //updates the cursor cost for the user
}

function Save(){
var save = {
tier1: tier1,
workers: workers,
money: money
}
localStorage.setItem("save",JSON.stringify(save));
window.alert("Saved!");
}
function Load(){
var savegame = JSON.parse(localStorage.getItem("save"));
if (typeof savegame.tier1 !== "undefined") tier1 = savegame.tier1;
if (typeof savegame.workers !== "undefined") workers = savegame.workers;
if (typeof savegame.money !== "undefined") money = savegame.money;
}
function Reset(){
 localStorage.removeItem("save");
 }
function pageFullyLoaded(e) {
   Load(); 
window.alert("page fully loaded");   
}
function updateNumbers(){
    document.getElementById('workers').innerHTML = workers;
	document.getElementById("tier1").innerHTML = tier1;
	document.getElementById('money').innerHTML = money;
	}
	
window.addEventListener("load", pageFullyLoaded, false);
window.setInterval(function(){
addtier(workers);
updateNumbers();
Save();
},1000);