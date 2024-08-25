const nombre = prompt('Cual es tu nombre?');
const edad = prompt('cuantos anos tienes?');
const lenguaje = prompt('que lenguaje de programación estas estudiando?');
const mensaje = `Hola! ${nombre}, tienes ${edad} anos y estas aprendiendo ${lenguaje}`;
alert(mensaje);

const gusta = prompt(`Te gusta estudiar ${lenguaje}? Responde con 1 si la respuesta es Si o 2 si la respuesta es No `);
if(gusta == 1){
alert ('Muy bien sigue estudiando y tendras mucho exito');
}
if(gusta == 2){
    alert('oh, que pena... Has intentado aprender otros lenguajes?');
}