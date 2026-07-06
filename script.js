function calculateSI(){

    let p = Number(document.getElementById("principal").value);
    let r = Number(document.getElementById("rate").value);
    let n = Number(document.getElementById("time").value);

    let si = (p * r * n) / 100;

    document.getElementById("result").innerHTML =
    "Simple Interest = " + si.toFixed(2);

}