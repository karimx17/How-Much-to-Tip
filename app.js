function calc() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var percent = document.getElementById("percent").value;

    if(percent === "15"){
      var tip = document.getElementById("tip").value = Math.floor((num1 + num2) * 0.15);
      var total = document.getElementById("total").value = num1 + tip;
      var each = document.getElementById("each").value = total/num2
      
    } else if (percent === "20"){
        var tip = document.getElementById("tip").value = Math.floor((num1 + num2) * 0.20);
        document.getElementById("total").value = num1 + tip;
        document.getElementById("each").value = total/num2
    } else {
    var tip = document.getElementById("tip").value = Math.floor((num1 + num2) * 0.30);
    document.getElementById("total").value = num1 + tip;
    document.getElementById("each").value = total/num2
}
}



