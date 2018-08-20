function main() {
    var x = prompt("enter city name");
    try{
        if(x != "stockholm") throw "name";
        console.log("correct");
        alert("correct");
    } catch (e) {
        console.log("error :" + e.messenger);
        alert("wrong");

    }

}