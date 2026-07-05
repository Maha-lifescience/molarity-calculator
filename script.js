function calculateMolarity() {

    let moles = Number(document.getElementById("moles").value);

    let volume = Number(document.getElementById("volume").value);

    if (volume <= 0) {
        document.getElementById("result").innerHTML =
        "Please enter a valid volume.";
        return;
    }

    let molarity = moles / volume;

   document.getElementById("result").innerHTML =
"✅ Molarity = <strong>" + molarity.toFixed(2) + "</strong> mol/L";

}



function resetCalculator() {

    document.getElementById("moles").value = "";

    document.getElementById("volume").value = "";

    document.getElementById("result").innerHTML =
    "Molarity = ? mol/L";

}