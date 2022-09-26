const Arr1 = ["JAN","FEB","MARCH","APRIL"]
let Arr2,Arr3;
(function(){
    Arr2 = Arr1 //equating the arrays whole. any change to one will reflect on the other.
    Arr3 = [...Arr1] //equating the contents of arr3 and arr1, or copying
    Arr1[0]="Potato"
})();
console.log(Arr2)
console.log(Arr3)