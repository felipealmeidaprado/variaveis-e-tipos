/*Verifique, de duas maneiras diferentes entre si, se uma String é um palíndromo.

Palíndromo: frase ou palavra que se pode ler, indiferentemente,
 da esquerda para a direita ou vice-versa (ex.: raiar, ama, ovo, radar)*/

 //solucao 1
    function verpalindromo(string){
        if (!string) return "string inexistente";

        return string.split("").reverse().join("") === string;
        
    }
console.log(verpalindromo('vaca'));
 
 //solucao 2
 
 function verpalindromo2(string){
    if (!string) return "string inexistente"
  
    for (let i = 0; i < string.length / 2; i++) {
        if(string [i] !== string[string.length -1 -i]){
            return false;
        }
        
    }
    return true;
}
console.log(verpalindromo2('ovo'));