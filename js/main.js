const COST_BILET = 500 * 9433.34;
const COST_LIVING_ROOM = 250 * 9433.34;
const COST_MUSEUM = 120 * 10354.03;

const TOTAL = COST_BILET + COST_LIVING_ROOM + COST_MUSEUM;

var moneyYes = prompt("Alisher qancha puling bor?");

if (TOTAL <= moneyYes) {
    console.log("Oq yo'l");
    alert("Oq yo'l");
}
else{
    console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
    alert("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
}