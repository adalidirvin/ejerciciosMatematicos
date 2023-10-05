a=parseInt(Math.random()*50)
b=parseInt(Math.random()*50)
document.getElementById("n1").value=a
document.getElementById("n2").value=b


function verificar(){
    resultado=document.getElementById("resultado").value
    console.log(a)
    console.log(b)
    if(resultado==(a+b)){
        document.getElementById("mensaje").value="CORRECT0"
    }else{
        document.getElementById("mensaje").value="INCORRECTO"
    }
}