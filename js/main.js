var costBilet = 500 * 9433.34;
var costLivingRoom = 250 * 9433.34;
costMuseum = 120 * 10354.03;

total = costBilet + costLivingRoom + costMuseum;

var moneyYes = prompt("Alisher qancha puling bor?");

if (total <= moneyYes) {
    console.log("Oq yo'l");
}
else{
    console.log("Alisher, ozgina sabr qilish kerak bo'lar ekan.");
}