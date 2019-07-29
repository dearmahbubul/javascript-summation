class Total {
    constructor(values) {
        this.values = values;
    }
    calculateTotal() {
        let sum = 0;
        this.values.forEach(function(element) {
            sum += element;
        });
        return sum;
    }
    displayTotal(sum) {
        document.getElementById('sum').textContent = 'Total: '+sum;
    }
}

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
    let valid1=valid2=valid3=valid4=valid5=true;
    val1 = document.getElementById(DOMstrings.value1).value;
    val2 = document.getElementById(DOMstrings.value2).value;
    val3 = document.getElementById(DOMstrings.value3).value;
    val4 = document.getElementById(DOMstrings.value4).value;
    val5 = document.getElementById(DOMstrings.value5).value;

    if(val1 != ''){
        if(parseInt(val1) > 1000){
            document.getElementById(DOMstrings.error1).textContent = 'Value must be smaller than 1000';
            valid1=false;
        }
        else if(isNaN(val1)){
            document.getElementById(DOMstrings.error1).textContent = 'Value must be a Number';
            valid1=false;
        }else{
            valid1=true;
            document.getElementById(DOMstrings.error1).textContent = '';
        }

    }else{
        val1 = 0;
    }

    if(val2 != ''){
        if(isNaN(val2)){
            document.getElementById(DOMstrings.error2).textContent = 'Value must be a Number';
            valid2=false;
        }else if(parseInt(val2) > 1000){
            document.getElementById(DOMstrings.error2).textContent = 'Value must be smaller than 1000';
            valid2=false;
        }
        else {
            document.getElementById(DOMstrings.error2).textContent = '';
            valid2=true;
        }

    }else{
        val2 = 0;
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
            valid3=true;
        }

    }else{
        val3 = 0;
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
            valid4=true;
        }

    }else{
        val4 = 0;
    }

    if(val5 != ''){
        if(isNaN(val5)){
            document.getElementById(DOMstrings.error5).textContent = 'Value must be a integer Number';
            valid5=false;
        }
        else if(parseInt(val5) > 1000){
            document.getElementById(DOMstrings.error5).textContent = 'Value must be smaller than 1000';
            valid5=false;
        }else{
            document.getElementById(DOMstrings.error5).textContent = '';
            valid5=true;
        }
    }else{
        val5 = 0;
    }

    if(valid1 && valid2 && valid3 && valid4 && valid5){
        val1 = parseInt(val1);
        val2 = parseInt(val2);
        val3 = parseInt(val3);
        val4 = parseInt(val4);
        val5 = parseInt(val5);

        let value = [
            val1,val2,val3,val4,val5
        ];
        obj = new Total(value);
        let sum = obj.calculateTotal();
        obj.displayTotal(sum);
    }else{
        document.getElementById(DOMstrings.sum).textContent = 'Invalid Input';
    }
}