function maxOfAnArray(numbers){
   let largest = numbers[0];
   for(var i = 0; i < numbers.length; i++){
      var index =i;
      var element =numbers[index];
      if(element > largest){
         largest = element;
      }
   }
   return largest;
}
var height =[165, 420, 55, 235, 120, 145, 125, 750];
var tallest = maxOfAnArray(height);
console.log(tallest);
