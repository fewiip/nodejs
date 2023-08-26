let name = 'max';
let age = 29;
let hasHobbies = true;

/*
var name = 'max';
var age = 29;
var hasHobbies = true;


primeiro jeito de escrever uma funcao: 
function summarizeUser (userName, userAge, userHasHobbie) {
    return (
        'name is ' + userName + 
        ' age is ' + userAge +
        'and the user has hobbies: ' + userHasHobbie
    )
} 

segundo jeito de escrever uma funcao:
usa uma funcao anonima (funcao sem nome)

const summarizeUser = function  (userName, userAge, userHasHobbie) {
    return (
        'name is ' + userName + 
        ' age is ' + userAge +
        'and the user has hobbies: ' + userHasHobbie
    )
} 

terceiro jeito de escrever uma funcao 
arrowfunctions 

const summarizeUser = (userName, userAge, userHasHobby) => {
    return (
        'name is ' + userName + 
        ' age is ' + userAge +
        'and the user has hobbies: ' + userHasHobbie
    )
}

quarto jeito de escrever 
const addOne = a => a + 1;

ou 

const addOne = (a) => a + 1;

const addRandom = () => 1 + 2;

const body = [];
//const significa que eu nunca mais vou poder fazer algo como: body = 'abluablue';


*/

const summarizeUser = (userName, userAge, userHasHobbie) => {
    return (
        'name is ' + userName + 
        ' age is ' + userAge +
        'and the user has hobbies: ' + userHasHobbie
    )
}

console.log(summarizeUser(name, age, hasHobbies));

const person = {
    name: 'max',
    age: 29,
    greet: () => {
        console.log('hi i am ' + this.name)
    }
}

/*
const person = {
    name: 'max',
    age: 29,
    greet ()  {
        console.log('hi i am ' + this.name)
    }
}
*/

person.greet();

const hobbieees = ['sports', 'cooking', 'skie'];
for (let hobby of hobbieees)  {
    console.log(hobby);
} 

/*
retorna uma nova array, o map edita a array original
hobbieees.map();
*/

/*
console.log(hobbieees.map(hobby => {
    return 'hobby: ' + hobby;
}));
*/
console.log(hobbieees.map(hobby => 'hobby: ' + hobby));
console.log(hobbieees);

/*
slice: pode copiar ou fazer um recorte de uma array 
*/

const copiedArray = hobbieees.slice();
console.log(copiedArray);

/*
spread operator: '...'
o operador spread 
ele pega todos os conteudos de um objeto e botam em outro 
neste caso ele pega o conteudo  de uma array e bota
em outra 

const person 

const copiedPerson = {...person};
console.log(copiedPerson);
*/
const copiedArray2 = [...hobbieees];

/*
const toArray = (arg1, arg2, arg3) => {
    return [arg1,arg2, arg3];
}

rest operator: '...'
nesse lugar aqui ele tem outro nome
agora dá pra ser infinitos argumentos 

const toArray = (...args) => {
    return [arg1,arg2, arg3];
}
*/

const printName = (personData) => {
    console.log(personData.name);
}

printName(person);

/*
object desconstructuring /= descontruction 
eu copio apenas a propriedade que eu quero de um objeto 
não o objeto todo 
os colchetes podem dizer que se refere apenas a um objeto qualquer 
e o que realmente queremos é apenas essa propriedade

const {name, age} = person;
console.log (name, age);
*/

const printNameDestructuring = ({name}) => {
    console.log(name);
}

printNameDestructuring(person);

const [hobby1, hobby2] = hobbieees;
console.log(hobby1, hobby2);

//asynchorous code  
 
const fetchData =  () => {//isso aqui é executado depois
    const promise = new Promise((resolve, reject) => {
        setTimeout(
            () => {
                //executando a função que eu recebi como parametro
                callback('Done!');//text = 'Done!'
            },
            1500
        );
    }
    );
    
    return promise;
}

/*
promises eu não preciso escrever porque as bibliotecas fazem pra gente 
mas é bom saber mais ou menos como é feito 
*/
setTimeout( () => {//isso aqui é executado primeiro
    console.log('timer is done!');
    fetchData().then(
        text => {
            console.log(text);
            return fetchData();//calling fetch data twice!
        }
    ).then(
        text2 => {
            console.log(text2);
        }
    );
},1000);

/*
async code:
const fetchData = callback => {//isso aqui é executado depois
    setTimeout(
        () => {
            //executando a função que eu recebi como parametro
            callback('Done!');//text = 'Done!'
        },
        1500
    );
}

setTimeout( () => {//isso aqui é executado primeiro
    console.log('timer is done!');
    fetchData(//passando a função como parametro
        text => {//text que foi passado em outra função 
            console.log(text);//imprimindo o texto
        }
    );
},1000);

promises 

*/


/*
    const name = "Max";
    const age = 29;
    console.log(`My name is ${name} and I am ${age} years old.`);
*/