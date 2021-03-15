
let count = 0;

function func(){
    if((count%2)==0)
    {
        document.getElementById("one").style.display="none"
        // document.getElementById("first").style.display="none"
        // document.getElementById("second").style.display="block"
        document.getElementById("two").style.display="block"
        count = count+1
    }
    else{
        document.getElementById("one").style.display="block"
        // document.getElementById("first").style.display="block"
        // document.getElementById("second").style.display="none"
        document.getElementById("two").style.display="none"
        count = count +1
    }
}