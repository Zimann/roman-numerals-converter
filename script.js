
function convertToRoman(num){

    var finalRomanNumber = [];
    var convertedElement = "";
    var threeDigitNumber = "";
    var fourDigitNumber = "";

    var convertedNumber = num.toString();
    
    convertedNumber = convertedNumber.split('');
    var digits = convertedNumber.length;
    if(digits > 4){
        alert('Please insert a number that is composed of maximum 4 digits');
    } else {
                        
            if(digits === 1) {
                for(var i = 1; i <= convertedNumber ; i++) {
                     convertedElement += 'I';
                    if(i === 4) {
                        convertedElement = 'IV'; 
                    } else if( i === 5) {
                        convertedElement = "V";
                    } else if(i === 9) {
                        convertedElement = 'IX';
                    }
            
                }
            } else if (digits === 2) {        
                lastTwoDigitLoop(0,1);
        
            } else if (digits === 3) {
                
                lastThreeDigitsLoop(0,1,2);
                
            } else if ( digits === 4) {
                //alert an error message if the first digit in the number is greater than 4
                if(convertedNumber[0] > 4) {
                        alert(convertedNumber.join('') + ' is not valid. Please try with a lower number(e.g. highest number is : 4999). ');
                    }
                for(var i = 1; i <= convertedNumber[0]; i++) {
                    fourDigitNumber += 'M';
                }
                lastThreeDigitsLoop(1,2,3);
                fourDigitNumber += convertedElement;
                convertedElement = fourDigitNumber;
            }
    }
    
    //formi the coresponding Roman Numerals  for the last two digits in a number
    function lastTwoDigitLoop(firstIndex, secondIndex){
     
            for(var j = 1; j <= convertedNumber[firstIndex]; j++){
                    convertedElement += 'X';                
                    switch(j){
                        case 4 :
                            convertedElement = 'XL'; 
                        break;
                        case 5 :
                            convertedElement = 'L'; 
                        break;
                        case j > 9 :
                            convertedElement = 'X'; 
                        break;
                        case 9 :
                            convertedElement = 'XC';
                        break;
                    }
             }
        
                 for(var k = 1; k <=convertedNumber[secondIndex]; k++) {
                    convertedElement += 'I';

                    switch(k){
                        case 4:
                            convertedElement = convertedElement.slice(0, -4);
                            convertedElement += 'IV';
                        break;
                        case 5:
                            convertedElement = convertedElement.slice(0, -3);
                            convertedElement += 'V';
                        break;
                        case 9:
                            convertedElement = convertedElement.slice(0, -5);
                            convertedElement += 'IX';
                        break;
                    }                 
                }
    }
    function lastThreeDigitsLoop(firstDigitIndex, secondDigitIndex, thirdDigitIndex) {
        for(var i = 1; i <= convertedNumber[firstDigitIndex]; i++) {
                    
                    threeDigitNumber += 'C';
                    switch(i) {
                        case 4:
                            threeDigitNumber = 'CD';
                        break;
                        case 5:
                            threeDigitNumber = 'D';
                        break;
                        case 9:
                            threeDigitNumber = 'CM';
                        break;
                    }                    
                }
                    lastTwoDigitLoop(secondDigitIndex,thirdDigitIndex);
                     threeDigitNumber += convertedElement;
                    convertedElement = threeDigitNumber;
        
        
    }
  
  num = convertedElement;
    console.log(convertedElement);
    
  return num;
    
}
                         
convertToRoman(567);
