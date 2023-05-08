function isPowerOfTwo(n:number){
  if(n < 1){
    return false
  }
  
  if(n === 1 || n === 2){
    return true
  }

  while(n > 2){
    n /= 2

    if(n === 2){
      return true
    }
  }

  return false
}

console.log(isPowerOfTwo(2))
console.log(isPowerOfTwo(7))
console.log(isPowerOfTwo(49))
console.log(isPowerOfTwo(37))
console.log(isPowerOfTwo(105))
console.log(isPowerOfTwo(166))
console.log(isPowerOfTwo(1))
console.log(isPowerOfTwo(1024))
console.log(isPowerOfTwo(512))