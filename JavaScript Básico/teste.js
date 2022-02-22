
/*var banda = {
    nome:"Stone",
    nacionalidade:"Noruega",
    genero:"Rock",
    membros: 5,
    formada: 1987,
    separou:2022,
    albuns:{
        nomeAlbum: ["Vai pro inferno","Morre ai"],
        anoDeLancamento:[2000,1989]
    },
    infoDaBanda(){
        console.log(`A banda ${banda.nome} original da ${banda.nacionalidade} tem seu estilo musical como ${banda.genero}, contendo ${banda.membros} membros, formada em ${banda.formada} mas se separou em ${banda.separou} porem tem dois albuns bem famosos: como ${banda.albuns.nomeAlbum[0]} lançado em ${banda.albuns.anoDeLancamento[0]} e ${banda.albuns.nomeAlbum[1]} lançado em ${banda.albuns.anoDeLancamento[1]}`)
    }
}

console.log(banda.infoDaBanda())*/

function Gatos(nome,raca,cor){
    this.nome = nome
    this.raca = raca
    this.cor = cor
    this.miando = function(){
        console.log(`Ola! Disse ${this.nome} da raça ${this.raca} com a cor ${this.cor}`)
    }
}

var preta = new Gatos("Preta")
preta.raca = "cuzcuz"
preta.cor = "Blue"

var thor = new Gatos("Thor")
thor["raca"] = "Relampago"
thor["cor"] = "Amarelo"
console.log(preta.miando())
console.log(thor.miando())




function criarPessoa(nome,idade,sexo){
    return{
        nome: nome,
        idade: idade,
        sexo: sexo,
        biografia(){
            console.log(`Sou o ${nome}, tenho ${idade} anos e sou ${sexo}`)
        }
    }
}

var bruno = criarPessoa("Bruno",21,"Masculino")
console.log(bruno.biografia())