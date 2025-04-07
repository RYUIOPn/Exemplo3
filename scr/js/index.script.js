//declarações e variaveis 


// var idade = "19"
// console.log(idade)

// const sobrenome = "fiapinho"
// console.log(sobrenome)
// let nome1 
// console.log(nome1)

// let nome2 =null
// console.log(nome2)

// let exemplo1 = 10
// console.log(typeof exemplo1)
// let exemplo2 = "tecnologia"
// console.log(typeof exemplo2)
// let exemplo3 = true
// console.log(typeof exemplo3)
// let exemplo4 = {}
// console.log(typeof exemplo4)
// let exemplo5 = []
// console.log(typeof exemplo5)

// //converções 
// let numfloat = 123.456
// console.log(parseInt(numfloat))

// let numString ="123.456"
// console.log(parseFloat(numString))

// //metodos

// //lenght =verifica o tamanho da string
// let frase = "o mundo da tecnologia"
// console.log(frase.length)

// //indexof -retorna um trecho do texto
// let texto ="a programação indomavel"
// console.log(texto.indexOf("ão"))


// //slice -retorna um trecho do texto com inicio e final 
// let info ="processamento de dados"
// console.log(info.slice(8,16))

// //conhecendo alguns metodos 

// //operadores aritmeticos 

// const num1 = 20
// const num2 = 30

// // console.log(num1 + num2)
// // console.log(num1 - num2)

// //operadores logicos 

// console.log(num1 < num2)
// console.log(num1 > num2 && num2 < num1)
// console.log(num1 < num2 || num2 < num1)

// //operadores de comparação 

// console.log(num1 == num2)
// console.log(num1 === num2)

//estrutura condicional
let num = 10
if (num == 10) {
    console.log("é vrerdade")
} else {
    console.log("é flaso")
}

//if encadeado /aninhado 

let idade = prompt("quantos anos vc tem")
if (idade < 15) {
    console.log("menor de idade")
} else if (idade > 15 && idade < 18) {
    console.log("nao é de maior mas entra")
} else {
    console.log("liberado")
}