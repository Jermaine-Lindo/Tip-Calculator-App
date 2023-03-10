let tip = 0;

function onlyNumberKey(evt) {
              
    // Only ASCII character in that range allowed
    var ASCIICode = (evt.which) ? evt.which : evt.keyCode
    if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57) && (ASCIICode != 46)){
        return false;
    }
    return true;
}

function resetButtons(){
    let button = document.getElementById("tip5%");
    button.style.setProperty("--btn-background", "hsl(183, 100%, 15%)");
    button = document.getElementById("tip10%");
    button.style.setProperty("--btn-background", "hsl(183, 100%, 15%)");
    button = document.getElementById("tip15%");
    button.style.setProperty("--btn-background", "hsl(183, 100%, 15%)");
    button = document.getElementById("tip25%");
    button.style.setProperty("--btn-background", "hsl(183, 100%, 15%)");
    button = document.getElementById("tip50%");
    button.style.setProperty("--btn-background", "hsl(183, 100%, 15%)");
    document.getElementById("custom-number").style.visibility = "hidden";
    document.getElementById("custom-number").value = "";

}

function update(){
    let bill = parseFloat(document.getElementById("bill").value);
    let people = parseInt(document.getElementById("people").value);
    if (document.getElementById("custom-number").value != "")
        tip = document.getElementById("custom-number").value/100;
    if((bill >= 0) & (people > 0) & (tip >= 0)){
        if (bill === ""){
            bill = 0;
        }
        let tipAmount = (bill * tip)/people;
        let total =(bill + bill * tip)/people;
        tipAmount = tipAmount.toFixed(2);
        total = total.toFixed(2);
        document.getElementById("tip-amount").innerHTML = `$${tipAmount}`;
        document.getElementById("total").innerHTML = `$${total}`;
    }
    else{
        document.getElementById("tip-amount").innerHTML = `$0.00`;
        document.getElementById("total").innerHTML = `$0.00`;
    }
}

function tipSelect(tipPercent) {
    resetButtons();
    tip = tipPercent/100;
    let button = document.getElementById(`tip${tipPercent}%`);
    button.style.setProperty("--btn-background", "hsl(172, 67%, 45%)");
    button.style.setProperty("--btn-hover", "hsl(172, 67%, 40%)");
    update();
}

function reset() {
    document.getElementById("bill").value = "";
    document.getElementById("people").value = "";
    resetButtons();
    update();
}

function custom(){
    resetButtons();
    document.getElementById("custom-number").style.visibility = "visible";
    document.getElementById("custom-number").focus();
}