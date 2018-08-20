function main() {
    var a = prompt("enter the number");
    var b = prompt("enter the number");
    var c = prompt("enter the number");
    var x;
    x = c/(a-b);
    alert(x);

    try {
        if(a - b == 0) throw "wrong";
        console.log("wrong");
        alert("wrong");

    } catch (e) {
        console.log("error :" + e);

    }

}