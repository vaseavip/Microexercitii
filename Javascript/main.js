let total = parseFloat(prompt('Introdu suma totală a cumpărăturilor:'));
let prag = parseFloat(prompt('Introdu pragul pentru livrare gratuită:'));
let cupon = prompt('Introdu codul de cupon (yes/no):').toLowerCase();

let livrareGratis = total >= prag;
let cuponValabil = cupon === 'yes' && total >= 2000;
document.write('Free delivery: ' + livrareGratis + '<br>');
document.write('Valid coupon: ' + cuponValabil + '<br>');
