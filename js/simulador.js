console.log("Calculemos el  precio de la prenda juntos!!!!!!!");
/*Declaracion de variables*/
let menu = true;
let costo_materiales;
let mano_obra;
let precio_hora;
let cant_horas;
let ganancia;
let resultado_mult;
let resultado_suma;



 while (menu){
    let opcion = parseInt(prompt("Ingrese la opcion: \n 1- Costo de materiales \n 2- Mano de obra \n 3- Costo de la hora \n 4- Cantidad de horas \n 5- Ganancia  \n 6- Salir  "));

    switch(opcion){

        case 1:
           
             costo_materiales = parseInt(prompt("Ingrese El costo del materias:   "));
            console.log("El costo de los materiales es : " + " "+ costo_materiales);
            break;
        case 2:
            mano_obra = parseInt(prompt("Ingrese El costo de la mano de obra:   "));
             console.log("El costo de la mano de obra  es : "+" "+ mano_obra);
            break;
        case 3:
            precio_hora = parseInt(prompt("Ingrese El costo de la hora:   "));
            console.log("El costo de la hora  es : "+" "+ precio_hora);
            break;
        case 4:
            cant_horas = parseInt(prompt("Ingrese la cantidad de horas:   "));
            console.log("La cantidad de horas es : "+" "+ cant_horas);
            break;
        case 5:
            ganancia = parseInt(prompt("Ingrese El costo de la ganancia deseada:   "));
            console.log("La ganancia  querida es de  : "+" "+ ganancia);
            break;
        case 6 :
            alert("Gracias!!!");
            menu=false; 
            break;   
        default:
            alert("Opcion no valida!!!!");           

    }

 }
  
/* Declaraciones de funciones*/

 function multiplica(num1, num2){
    resultado_mult = num1 * num2;
    return resultado_mult;
   
 }
 
 function suma(num1, num2, num3, num4){
    resultado_suma = num1 + num2 + num3 + num4;
    return resultado_suma; 
   
 }
  
  
 console.log("El costo de la cantidad  de la horas es : "+ " "+ multiplica(cant_horas, precio_hora));
 console.log("El precio de la prenda es : "+ " "+suma(costo_materiales, mano_obra, resultado_mult, ganancia));


 


