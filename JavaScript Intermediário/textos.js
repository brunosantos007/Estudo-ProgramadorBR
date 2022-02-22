
let p1 = document.getElementById("p1")
let p2 = document.getElementById("p2")
let p3 = document.getElementById("p3")
let p4 = document.getElementById("p4")

console.log(p1.textContent)   

console.log(p1.className)
p1.style.backgroundColor = "Blue"

let meuAtt = p1.getAttribute("meuAtt")
console.log(meuAtt)
p1.setAttribute("meuAtt","seila")
console.log(p1.setAttribute("meuAtt","seila"))
//p1.className = ""
//console.log(p1.className)

/*p1.innerHTML = "Olá Mundo cruel"
p2.innerText = "Olá Mundo cruel2"
p3.textContent = "Olá Mundo cruel3"
p4.innerHTML = "<h2> Olá Mundo cruel4 </h2>" */
