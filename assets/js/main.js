
// function Person(name,surname,age,gender)
// {
//     this.name=name
//     this.surname=surname
//     this.age=age
//     this.gender=gender
// }

// const person1=new Person(Hikmet,Mehraliyev,19,kisi)
// const person2=new Person(Isa,Aghazada,20,kisi)
// const person3=new Person(Mehemmed,Ibrahimov,19,kisi)
// const person4=new Person(Murad,Quliyev,19,kisi)
// const person5=new Person(Aysel,Mohbaliyeva,20,qadin)

// const People=[Person1,Person2,Person3,Person4,Person5]  
// console.log(People)

let people = [
    
    {name:"Hikmet", Surname:"Mehraliyev",Age:19,Gender:"Kisi"},
    {name:"Isa", Surname:"Aghazada",Age:20,Gender:"Kisi"},
    {name:"Mehemmed", Surname:"Ibrahimov",Age:19,Gender:"Kisi"},
    {name:"Murad", Surname:"Quliyev",Age:19,Gender:"Kisi"},
    {name:"Aysel", Surname:"Mohbaliyeva",Age:20,Gender:"qadin"}

];

function generateTableHead(table, data) {
    let thead = table.createTHead();
    let row = thead.insertRow();
    for (let key of data) {
      let th = document.createElement("th");
      let text = document.createTextNode(key);
      th.appendChild(text);
      row.appendChild(th);
    }
  }
  
  function generateTable(table, data) {
    for (let element of data) {
      let row = table.insertRow();
      for (key in element) {
        let cell = row.insertCell();
        let text = document.createTextNode(element[key]);
        cell.appendChild(text);
      }
    }
  }
  
  let table = document.querySelector("table");
  let data = Object.keys(mountains[0]);
  generateTableHead(table, data);
  generateTable(table, mountains);
