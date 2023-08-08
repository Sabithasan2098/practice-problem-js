let fibo = [0 , 1];
for(var n = 2 ; n <= 35; n++){
    fibo[n] = fibo[n - 1] + fibo[n - 2];

}
console.log(fibo);