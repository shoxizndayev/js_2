var elResultHeading = document.querySelector('.heading');

alert ("Assalomu alaykum!");

var userName = prompt ("Ismingizni yozing");

var userCost = Number(prompt (`${ userName } sayohat uchun mo'ljallangan puliningizni kiriting`, 000000));

var leastCost = alert(`Borish-kelish samolyot bileti - $500
Mehmonxona to’lovi (to’liq safar davomiyligi uchun) - $250
Muzey va ko’ngilochar joylar uchun - 120 yevro`);

var planeTicket = 4716670;

var hotelFee = 2358335;

var placesEntertainment = 1242483.6;

var totalCosts = Number( planeTicket + hotelFee + placesEntertainment);

if (userCost >= totalCosts) {
    elResultHeading.textContent = `Oq yo'l ${userName}`;
} else {
    elResultHeading.textContent = `${userName}, ozgina sabr qilish kerak bo’lar ekan.`;
}
