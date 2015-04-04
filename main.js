var rocks =0;
var miners =0;
var money =0;
function RockClick(number){
rocks = rocks + number;
document.getElementById("rocks").innerHTML = rocks;
}
function HireMiner(){
    var minerCost = Math.floor(10 * Math.pow(1.1,miners));     //works out the cost of this cursor
    if(rocks >= minerCost){                                   //checks that the player can afford the cursor
        miners = miners + 1;                                   //increases number of cursors
    	rocks = rocks - minerCost;                          //removes the cookies spent
        document.getElementById('miners').innerHTML = miners;  //updates the number of cursors for the user
        document.getElementById('rocks').innerHTML = rocks;  //updates the number of cookies for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,miners));       //works out the cost of the next cursor
    document.getElementById('minerscost').innerHTML = nextCost;  //updates the cursor cost for the user
};
function SellAllRocks(){
var priceOfRocks = 10;
if(rocks > 0){
var amount = rocks * priceOfRocks;
rocks =0;
money = money + amount;
toggleMoneyDisplay();
document.getElementById('money').innerHTML = money;
document.getElementById('rocks').innerHTML = rocks;
    }
	else{
	window.alert("No rocks to sell");
	}
}
function toggleMoneyDisplay(){
if(money>0){
document.getElementById('totalDollars').style.display = "block";
}else{document.getElementById('total').style.display = "none";}

}
function Save(){
var save = {
rocks: rocks,
miners: miners,
money: money
}
localStorage.setItem("save",JSON.stringify(save));
window.alert("Saved!");
}
function Load(){
var savegame = JSON.parse(localStorage.getItem("save"));
if (typeof savegame.rocks !== "undefined") rocks = savegame.rocks;
if (typeof savegame.miners !== "undefined") miners = savegame.miners;
if (typeof savegame.money !== "undefined") money = savegame.money;
}
window.addEventListener("load", pageFullyLoaded, false);
 function Reset(){
 localStorage.removeItem("save");
 }
    
 
function pageFullyLoaded(e) {
   Load();
   updateNumbers();
  
}
function updateNumbers(){
document.getElementById('miners').innerHTML = miners;
	document.getElementById("rocks").innerHTML = rocks;
	document.getElementById('money').innerHTML = money;
	}
	
	
window.setInterval(function(){RockClick(miners);},1000);