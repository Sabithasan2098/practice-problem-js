function reverseString(text){
    let reversed = '';
    for(var i = text.length-1; i >= 0; i--){
        var element = text[i];
        reversed = reversed + element;
        console.log(element, reversed);
    }
    return reversed;
}
var myString ='I am a good boy';
var reversed = reverseString(myString);
console.log("The reverse result is:",reversed)
 