var numbers = [1,5,8,2,10,3,9]
var newNumbers =[]

    for(var i = 0; i < numbers.length; i++){
        if(numbers[i] %2 ==0){
            newNumbers.push(numbers[i]);
        }
    }

    function sum(){
        var sum  =0;
        
         for(var i = 0; i < newNumbers.length; i++){
            sum += newNumbers[i];
         }
         return sum;
    }

    console.log(sum())

   