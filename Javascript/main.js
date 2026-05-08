function calculateDiscount(pretVechi, procent) {
  return pretVechi - (pretVechi * procent) / 100;
}
let pretNou = calculateDiscount(500, 20);
document.write('Pretul nou este: ' + pretNou);

function esteStoc(cantitate) {
  return cantitate >= 1;
}
document.write('<br>Este stoc disponibil? ' + esteStoc(5));

function verificaAdmin(user, password) {
  return user === 'admin' && password === 'admin123';
}
document.write('<br>Acces admin1: ' + verificaAdmin('admin', 'admin123'));
document.write('<br>Acces admin2: ' + verificaAdmin('admin', 'password123'));
function myFunction() {
  console.log('Salut!');
}
let contor = 0;
function myFunction() {
  contor++;
  console.log('Contor: ' + contor);
}

for (var i = 0; i < 5; i++) {
  console.log(i);
}
