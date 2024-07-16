function convertcelsiustofahrenheit(celsius) {

  return (celsius*9/5)+32;



}

function convertfahrenheittocelsius(Fahrenheit) {

    return (Fahrenheit-32)*5/9;
    
    
    
    }


function updatefahrenheit() {

var celsiusValue = parseFloat(document.getElementById("celsius").value);

var FahrenheitV= convertcelsiustofahrenheit(celsiusValue);

if(!isNaN (FahrenheitV)){

document.getElementById("Fahrenheit").value = FahrenheitV.toFixed(2);



}else{

    document.getElementById("Fahrenheit").value=" ";
 
}

}
function updatecelsius() {

    var FahrenheitValue = parseFloat(document.getElementById("Fahrenheit").value);
    
    var CelsiusV= convertfahrenheittocelsius(FahrenheitValue);
    
    if(!isNaN (CelsiusV)){
    
    document.getElementById("celsius").value = CelsiusV.toFixed(2);
    
    
    
    }else{
    
        document.getElementById("celsius").value=" ";
     
    }
    
    }