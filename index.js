/*Create a business name generator by combining list of adjectives and shop name and another word. Without using array methods.

Adjectives:
Crazy
Amazing
Fire

Shop name:
Engine
Foods
Garments

Another word:
Bros
Limited
Hub
*/
let rand=Math.random();
let first,second, third;
if(rand<0.33){
    first='Crazy';
}else if(rand<0.66){
    first='Amazing';

}else{
    first='Fire';
}
//Generating the second word
rand=Math.random();
if(rand<0.33){
    second='Engine'; 
}
else if(rand<0.66){
    second='Foods';
}
else{
    second='Garments';
}
//Generating the third word     
rand=Math.random();
if(rand<0.33){
    third='Bros'; 
}
else if(rand<0.66){
    third='Limited';
}
else{
    third='Hub';
}
//Printing the business name
console.log('Your business name is: '+first+' '+second+' '+third);  
