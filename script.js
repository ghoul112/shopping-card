function plus(n){
    document.getElementById(n).value=parseInt(document.getElementById(n).value)+1;
}
function minus(n){
    document.getElementById(n).value=parseInt(document.getElementById(n).value)-1;
}
function multiply(n,x,res){
    y=parseFloat(n);
    k=parseFloat(document.getElementById(x).value);
    document.getElementById(res).innerHTML=y*k;
    console.log(y*k)



}
function somme(){
    e1=parseFloat(document.getElementById("p1").innerHTML);
    e2=parseFloat(document.getElementById("p2").innerHTML);
    e3=parseFloat(document.getElementById("p3").innerHTML);
    document.getElementById('finalPrice').value=e1+e2+e3;
    
}
function change(id){
    if(document.getElementById(id).style.color == "red"){
        document.getElementById(id).style.color = "black";
    }
    else{
        document.getElementById(id).style.color = "red";
    }
        


}
    