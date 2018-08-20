function main() {
    var x = prompt("enter the name to check");
    try {
        // if (isNaN(x) == false) throw "number";
        if (x != "huan") throw "name";
        console.log("a valid name");
        alert("a valid name");
    }catch (e) {
        console.log("error :" + e.messenger);
        alert("invalid name");
    }
}