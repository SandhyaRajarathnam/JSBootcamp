function calculateEMI() {
    let amount=document.getElementById('principal')
    let rate = document.getElementById('interest');
    let tennure = document.getElementById('time');
    let t = tennure.value*12;
    let p = amount.value;
    let r = (rate.value);
    result = p*((r/12)/100)*Math.pow(1+((r/12)/100),t*12)/(Math.pow(1+((r/12)/100),t*12)-1)
    //divisor = (result)/(result-1)
    //result=p*r*divisor;
    document.getElementById('emicalc').innerText='Monthly EMI is Rs' + " " + result.toFixed(2);


}