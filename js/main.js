function sum() {
    var numberone = Number(document.getElementById("firstnumber").value);
    var numbertwo = Number(document.getElementById("secondnumber").value);
    document.getElementById("result").innerHTML += numberone + numbertwo + "<br>";
}

function minus() {
    var numberone = Number(document.getElementById("firstnumber").value);
    var numbertwo = Number(document.getElementById("secondnumber").value);
    document.getElementById("result").innerHTML += numberone - numbertwo + "<br>";
}

function multipl() {
    var numberone = Number(document.getElementById("firstnumber").value);
    var numbertwo = Number(document.getElementById("secondnumber").value);
    document.getElementById("result").innerHTML += numberone * numbertwo + "<br>";
}

function div() {
    var numberone = Number(document.getElementById("firstnumber").value);
    var numbertwo = Number(document.getElementById("secondnumber").value);
    document.getElementById("result").innerHTML += numberone / numbertwo + "<br>";
}