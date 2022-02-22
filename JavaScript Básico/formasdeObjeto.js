/*  01)PRIMEIRA MANEIRA DE CHAMAR UM OBJETO
var a = { // 01) 
    nome: "Bruno",
    sobrenome:"Santos"
}*/


/*  02)SEGUNDA MANEIRA DE CHAMAR UM OBJETO
function obj(n,s){ //   
    return { // um objeto dentro de uma função
    nome: n,
    sobrenome:s
    }

    var a = obj("igor","Santos") 

}*/


/*  03)TERCEIRA MANEIRA DE CHAMAR UM OBJETO
function obj(n,s){
    this.nome = n;
    this.sobrenome = s;
}


var a = new obj("Igor","Oliveira")
*/

//console.log(a.sobrenome)