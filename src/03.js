// function isPrime(number) {
//   var start = 2;
//   while (start <= Math.sqrt(number)) if (number % start++ < 1) return false;
//   return number > 1;
// }
// console.log(isPrime(0));
// console.log(isPrime(1));
// console.log(isPrime(2));
// console.log(isPrime(3));
// console.log(isPrime(4));

function achaPrimos(n) {
  let carlos = 2
  let primo = 0
  while (numerosPrimos.length = (n)) {
    for (i = 2; (i <= carlos /2); i < n, i++){
      if (carlos % i ==0){
        primo++;carlos++;
      }
      if (primo == 0 && carlos !== 1){
        numerosPrimos.push(carlos) && carlos++ && achaPrimos(n);
      }
    }
  }
}

const numerosPrimos = []
achaPrimos(7);