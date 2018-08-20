function myFunc() {
    var a = 4/0;
    try{
        alert("value is :" + a);
        console.log("value is :" + a );
    } catch (e){
        alert("error" + e.messenger);
        console.log("error" + e.messenger);
    }

}