a=parseInt(Math.random()*50)
b=parseInt(Math.random()*50)
document.getElementById("n1").value=a
document.getElementById("n2").value=b

function generar(){
    dividendo=parseInt(Math.random()*50)
    divisor=dividendo*(parseInt(Math.random()*8)+2)
    document.getElementById("d2").value=dividendo
    document.getElementById("d1").value=divisor
}





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