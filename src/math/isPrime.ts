function isPrime(n:number){
  if(n < 2){
    return true
  }

  for(let i = 2; i <= Math.sqrt(n); i++){
    if(n % i === 0){
      return false
    }
  }

  return true
}

console.log(isPrime(2))
console.log(isPrime(7))
console.log(isPrime(49))
console.log(isPrime(37))
console.log(isPrime(105))
console.log(isPrime(166))