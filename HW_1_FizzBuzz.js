for (let i = 1; i <= 100; i++) {
    let p = ""
     if (i%3 == 0) {
      p ="Fizz"
     }
    if (i%5 == 0) { 
        p += "Buzz"  
    }
    console.log (p||i);
}

for (let i = 1; i <= 100; i++) {
    let p = i
     if (i%15 == 0) {
      p ="FizzBuzz"
     }
     else if (i%3 == 0) { 
        p = "Fizz"  
    }
   else  if (i%5 == 0) { 
        p = "Buzz"  
    }
    console.log (p);
}

function fizzbuzzing(i,l) {
    
    for (; i <= l; i++) {
        let p = ""
         if (i%3 == 0) {
          p ="Fizz"
         }
        if (i%5 == 0) { 
            p += "Buzz"  
        }
        console.log (p||i);
    }
}
fizzbuzzing (1, 15);