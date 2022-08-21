function bmıCalculator() {
    var btn = document.getElementById("calculate").value;
    var height = document.getElementById("height").value;
    var weight = document.getElementById("weight").value;
    

    height = height / 100;
    var bmıcalculate = weight / (height*height);

    bmıcalculate = bmıcalculate.toFixed(2);
    document.getElementById("result").innerHTML = bmıcalculate;

    var status = "";

    if (bmıcalculate < 18.5) {
        status = "Underweight";    
    }
    else if (bmıcalculate >= 18.5 && bmıcalculate < 24.9) {
        status = "Healty";
    }
    else if (bmıcalculate >= 24.9 && bmıcalculate < 30){ 
        status = "Overweight";
    }
    else{
        status = "Obese";
    }

    document.querySelector('.comment').innerHTML = `Comment you are :<span id="comment"> ${status}</span>`;
}