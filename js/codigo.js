let a=parseInt(Math.random()*50)
let b=parseInt(Math.random()*50)
document.getElementById("n1").value=a
document.getElementById("n2").value=b

let intentos=3

function generar(){
    //Para asegurarnos que´el resultado de la división sea un número entero, generamos los dos valores a partir del multiplo de otro.  
    dividendo=parseInt(Math.random()*50)//Generamos un valor alatorio entre 0 y 50
    divisor=dividendo*(parseInt(Math.random()*8)+2) //Generamos un valor aleatorio entre 2 y 8
    document.getElementById("d2").value=dividendo
    document.getElementById("d1").value=divisor
}


function verificar(){
    resultado=document.getElementById("resultado").value
    console.log(a)
    console.log(b)
    if(intentos>0){
        if(resultado==(a+b)){
            document.getElementById("mensaje").value="CORRECT0"
        }else{
            document.getElementById("mensaje").value="INCORRECTO"
            intentos=intentos-1
        }
    }else{
        document.getElementById("mensaje").value="YA NO QUEDAN INTENTOS"
    }
}