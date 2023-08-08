let jim = 89;
let dela = 75;
let chinku = 84;
if(jim < dela && jim < chinku){
    console.log('jim win');
}
else if(dela < chinku && dela < jim){
    console.log('dela win');
}
else if(chinku < dela && chinku < jim){
    console.log('chinku win');
}
// --------------------------------------
// --------------------------------------
    
function numbers(jim, dela, chinku){
    var winer = Math.min(jim, dela, chinku);{
        console.log(winer);
    }
    return winer;
}
var marks = numbers;
marks(48, 52, 59);