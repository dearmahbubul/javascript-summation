var Total = function(value1, value2, value3, value4, value5) {
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
    this.value5 = value5;
}
Total.prototype.calculateTotal  = function() {
    return this.value1 + this.value2 + this.value3+ this.value4 + this.value5;
};

Total.prototype.displayTotal  = function() {
    if(this.calculateTotal){
        document.getElementById('sum').textContent = this.calculateTotal;
    }else{
        document.getElementById('sum').textContent = 'Invalid input';
    }
    
};
document.getElementById('sum').textContent = 'Total: 0';
document.getElementById('summation_form').addEventListener('change', init);

function init() {

    const DOMstrings = {
        summation_form: 'summation_form',
        value1: 'value1',
        value2: 'value2',
        value3: 'value3', 
        value4: 'value4',
        value5: 'value5',
        sum: 'sum',
        error1: 'error1',
        error2: 'error2',
        error3: 'error3',
        error4: 'error4',
        error5: 'error5',
    };

    
    let val1, val2,val3,val4,val5;
    let sum = 0;
    let valid1,valid2,valid3,valid4,valid5;
    val1 = document.getElementById(DOMstrings.value1).value;
    val2 = document.getElementById(DOMstrings.value2).value;
    val3 = document.getElementById(DOMstrings.value3).value;
    val4 = document.getElementById(DOMstrings.value4).value;
    val5 = document.getElementById(DOMstrings.value5).value;
    
    if(val1 != ''){
        if(parseInt(val1) > 1000){
            document.getElementById(DOMstrings.error1).textContent = 'Value must be smaller than 1000';
            //document.getElementById(DOMstrings.sum).textContent = 'Invalid Input';
            valid1=false;
        }
        else if(isNaN(val1)){
            document.getElementById(DOMstrings.error1).textContent = 'Value must be a Number';
            //document.getElementById(DOMstrings.sum).textContent = 'Invalid Input';
            valid1=false;
        }else{
            valid1=true;
            document.getElementById(DOMstrings.error1).textContent = '';
            sum += parseInt(val1);
        }
        
    }

    if(val2 != ''){
        if(isNaN(val1)){
            document.getElementById(DOMstrings.error2).textContent = 'Value must be a Number';
            //document.getElementById(DOMstrings.sum).textContent = 'Invalid Input';
            valid2=false;
        }else if(parseInt(val2) > 1000){
            document.getElementById(DOMstrings.error2).textContent = 'Value must be smaller than 1000';
            //document.getElementById(DOMstrings.sum).textContent = 'Invalid Input';
            valid2=false;
        }
        else {
            document.getElementById(DOMstrings.error2).textContent = '';
            sum += parseInt(val2);
            valid2=true;
        }
        
    }

    if(val3 != ''){
        if(isNaN(val3)){
            document.getElementById(DOMstrings.error3).textContent = 'Value must be a Number';
            valid3=false;
        }else if(parseInt(val3) > 1000){
            document.getElementById(DOMstrings.error3).textContent = 'Value must be smaller than 1000';
            valid3=false;
        }
        else {
            document.getElementById(DOMstrings.error3).textContent = '';
            sum += parseInt(val3);
            valid3=true;
        }
        
    }

    if(val4 != ''){
        if(isNaN(val4)){
            document.getElementById(DOMstrings.error4).textContent = 'Value must be a Number';
            valid4=false;
        }
        else if(parseInt(val4) > 1000){
            document.getElementById(DOMstrings.error4).textContent = 'Value must be smaller than 1000';
            valid4=false;
        }
         else{
            document.getElementById(DOMstrings.error4).textContent = '';
            sum += parseInt(val4);
            valid4=false;
        }
        
    }

    if(val5 != ''){
        if(isNaN(val5)){
            document.getElementById(DOMstrings.error5).textContent = 'Value must be a Number';
            valid5=false;
        }
        else if(parseInt(val5) > 1000){
            document.getElementById(DOMstrings.error5).textContent = 'Value must be smaller than 1000';
            valid5=false;
        }else{
            document.getElementById(DOMstrings.error5).textContent = '';
            sum += parseInt(val5);
            valid5=true;
        }
    }

    if(valid1 && valid2 && valid3  && valid4  && valid5){
        alert("Here");
        document.getElementById(DOMstrings.sum).textContent = sum;
    }else{
        document.getElementById(DOMstrings.sum).textContent = 'Invalid Input';
    }
        
    
}
