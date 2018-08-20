function main() {
    var x = prompt("enter the number");

    try {

        if( x > 100) throw "wrong";
        console.log("correct");
        alert("thank you very much");

    } catch (e) {

        console.log("error :" + e.messenger);
        console.log("thank you very much");
        alert("thank you very much");

    }

}