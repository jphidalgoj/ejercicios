//generar contraseña
let boton = document.querySelector("#btn");
let respuesta = document.querySelector("#respuesta");
boton.addEventListener("click", generar)

function aleatorio(mayus){ 
    let indice= Math.floor(Math.random() * mayus.length )+1;
    return indice;
}
function aleatoriosMinus(minus){
    let resultado ="";
    const caracteres="ABCDEFGHIJKLMNÑOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789*+·$%&";
    const longitudCaractees=caracteres.length;

    for(let i=0;i<minus; i++){
        const indiceAleatorio=Math.floor(Math.random()*longitudCaractees);
        resultado+= caracteres.charAt(indiceAleatorio);
    }
    return resultado
}
function generar (){
    let mayus = "ABCDEFGHIJKLMNÑOPQRSTUVWXYZ";
    let letraMayus= aleatorio(mayus);
    let letraMinus=aleatoriosMinus(8)
    respuesta.textContent=mayus[letraMayus] + letraMinus;
}

//el famoso fizz buzz
let botonBizz=document.querySelector("#bizz");
let respuestaBizz=document.querySelector("#respuesta-bizz");

botonBizz.addEventListener("click",function(){
    let = numero="";
    for(let i=1;i<=100;i++){
        if(i %3!=0 && i %5!=0){
            respuestaBizz.innerHTML+=i+"<br>"
        }
        else if(i %3==0 && i %5==0){
            
            respuestaBizz.innerHTML+=i+" FizzBuzz"+"<br>"
        }else if(i %3==0){
            respuestaBizz.innerHTML+=i+" buzz"+"<br>"
        }else if(i %5==0){
            respuestaBizz.innerHTML+=i +" fizz"+"<br>"
        }

        
        
    }
  
});

// es un fibonazi?
let botonFibo = document.querySelector("#fibo");
let respFibo=document.querySelector("#resp");

botonFibo.addEventListener("click",function(){
    let inputFibo=parseInt(document.querySelector("#fibonaci").value);
    const fibo=generarFibo(inputFibo); 
    respFibo.innerHTML=fibo;
});

function generarFibo(n){
    let x = " ";
    let a =0;
    let b =1;

    for(let i=0;i<n;i++){
        x+=a+" " +"<br>";
        const next = a+b;
        a=b;
        b=next;
    }
    return x ;

}

function main() {
    let n0 = 0;
    let n1 = 1;

    for (let i = 1; i <= 20; i++) {
        console.log(n0);

        const fib = n0 + n1;
        n0 = n1;
        n1 = fib;
    }
}

main();

let botonPrimo=document.querySelector("#primo");
let respPrimo = document.querySelector("#resp-primo");

botonPrimo.addEventListener("click", numPrimos)

function numPrimos(){
    for(let i=1;i<50;i++){
      respPrimo.innerHTML+=i+"<br>";
    }
}


