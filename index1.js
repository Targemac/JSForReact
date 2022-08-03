// Tenary operators

let age = 10;
let nameA = age > 10 ? 'Pedro' : 'Jack';

console.log(nameA);


const Component = () => {
    return age > 10 ? <div>Pedro</div> : <div>Jack</div>
}