// const btnname = document.querySelector("button");
// const txt = document.querySelector(".txt");
// const ul = document.querySelector("ul");
// const ip = document.querySelector("input");
// const first = document.getElementsByClassName(".p");
// console.log
// console.log(ul);
// const click = () => {
//     alert("utton clicked");
// }

// // btnname[2].onClick(click);
// // btnname[1].addEventListener("click", click);\

// let text = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
// console.log(text.length)

// let name = "lalit";
// txt.innerHTML= "hii how are ";
// txt.style.color = "blue";
// txt.style.fontSize = "50px"

// btnname[2].style.color = "brown"

// let a = "";
// let b = false;
// let c = 0;
// console.log(a === c);

// let get = "238o2";
// console.log(typeof (get));

// // const a = null;
// // console.log(typeof (a));

// console.log(i);
// var i = null;

// let d=null;
// console.log(d);
// const ar = { name: "lalit" };
// console.log(ar);

// let str = 'Apple, Banana, Kiwi'
// console.log(str.slice(-10, -5));
// // console.log(su)
// console.log(str.substring(-10, -5));

// console.log(str.substr(8, 2));

// let arr2 = str.split(",");
// // let arr3 = arr2.join(" | ");
// console.log(arr2)
// // console.log(arr3);
// txt.innerHTML = arr2;

// const person = { firstName: 'John', lastName: 'Doe', age: 46 }
// console.log(typeof (person))
// const person1 = person;
// console.log(person1);

// const ar = [1, 4,2222, 2, 7, 4, 5,5,"a","f","d",56,234,6];
// console.log(ar.sort())
// console.log("a" - "v");

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// let text = "";
// for (let i = 0; i < fruits.length; i++) {
//   text += '<li>' + fruits[i] + '</li>'
// }
// ul.innerHTML = text;

// console.log(fruits.forEach((index) => index));
// fruits.push("papaya");
// console.log(fruits);
// fruits.unshift("satya")
// console.log(fruits);
// fruits.pop();
// console.log(fruits);

// const fruits = ['Banana', 'Orange', 'Apple', 'Mango'];
// fruits.splice(3, 1, "kiwi", "papaya");
// console.log(fruits);
// const fruits1=fruits.slice(1);
// console.log(fruits1);

// console.log(b);
// const a = 10;
// const b = 20;
// function get() {
//     const a = 40;
//     console.log(b);
//     function put() {
//         console.log(a);
//     }
//     put();
// }
// get();

// const a = 40;
// {
//    var a = 50;
//     console.log(a)
// }

// btnname.onclick = function myfn() {
//       alert('ruk j bhai')
// };

// btnname.addEventListener('onchange', () => { alert("mt ruk") });
// ip.addEventListener('onchange', () => alert("input change"));

// ip.onchange = function chg() {
//     alert("ip change") ;
// }
// ip.addEventListener("change", () => { alert("hiiiii") })

// const mypromise = new Promise((resolve, reject) => {
//     let b = false;
//     setTimeout(() => {
//         if (b) { return resolve("ho gya bhai"); }
//         else{return reject("khatam")}
//     }, 5000);
// })
// console.log(mypromise);
// mypromise.then((ans)=>console.log(ans)).catch((k)=>console.log(k));

// class student{
//     constructor(nam, city) {
//         this.nam = nam;
//         this.city = city;
//     }
//     details(){
//         return this.nam +" from " + this.city;
//     }
// }
// const st = new student("lalit", "ggc");
// console.log(st.details());

// class employee extends student{
//     constructor(nam, city, company) {
//         super(nam, city);
//         this.company = company;
//     }
//     details() {
//         return this.nam + ' from ' + this.city + this.company;
//     }
// }
// const emp = new employee("ravi", "jpr", "info");
// console.log(emp.details());

// function student(name, city) {
//     this.name = name;
//     this.city = city;
// }
// student.prototype.details = function () {
//     return this.name + " " + this.city;
// };

// const st = new student("lalit", "ggc");
// console.log(st.details());

// const mp = new Set;
// mp.add("a");
// mp.add('a');
// mp.add('b');
// mp.add('a');
// mp.add('c');
// console.log(mp);
// mp.forEach((val) => console.log(val));
// console.log(mp.has("a"));

// const map = new Map();
// map.set("apple", 500);
// map.set("mango", 100);
// console.log(map);
// map.forEach((val,key,indx) => console.log(indx));

// const ar = [1, 2, 4, 5];
// // console.log("eat");

// // setTimeout(() => {
// //     console.log('ice cream')
// // }, 3000);

// // console.log("with a");

// // function one(two) {

// //     console.log("step 1 completed");
// //     two();
// // }

// // function two() {
// //     console.log("step 2");
// // }

// // one(two);
// // let stocks = {
// //     fruits: ["banana", "strawberry", "grapes", "apple"],
// //     liquid:["water","ice"]
// // }

// // let order = (fruit_name,call_prod) => {
// //     // console.log("order placed , please call production");
// //     // call_prod();
// //     setTimeout(() => {
// //         console.log("order placed , please call production");
// //         call_prod();
// //         setTimeout(() => {
// //             console.log("making in progress");
// //             setTimeout(() => {
// //                 console.log("order dispatched");
// //                 setTimeout(() => {
// //                     console.log("order reached");
// //                 }, 3000);
// //             }, 4000);
// //         }, 1000);
// //     }, 2000);

// // };

// // let prod = () => {
// //     console.log("order recieved");
// // };

// // order("" ,prod);

// // map,filter,reduce

// const arr = [1, 2, 4, 5, 78, 5, 3, 4,34,20];

// const arr2 = arr.filter((element) => {
//     if (element > 10) {
//         return element;
//    }
// })
// console.log(arr2);

// const ar = ["la", "ls", "df", "rf"];
// const ar2 = ar.filter((value) => {
//     if (value[0] == "l")
//         return value;
// })
// console.log(ar2);

// //     (()=> {

// })

// const ages = [32, 33, 16, 40];
// const age2 = ages.filter((age,index) => {

//         return index;

// });
// console.log(age2);
// function checkage(age)
// {
//     return age >= 18;
// }

// const ar = [1, 2, 3, 4, 5, 6];
// const ar2 = ar.filter((element) => {
//     if (element % 2 == 0)
//     {
//         return element;
//         }
// })
// console.log(ar2);

// const persons = [
//   { firstname: 'Malcom', lastname: 'Reynolds' },
//   { firstname: 'Kaylee', lastname: 'Frye' },
//   { firstname: 'Jayne', lastname: 'Cobb' },
// ]
// console.log(persons);
// // const person = persons.map((person) => {
// //     return person.firstname + " " + person.lastname;
// // })
// // console.log(person);

// // class student{

// //     constructor(nam, city) {
// //         this.nam = nam;
// //         this.city = city;
// //     }

// //     getdetails() {
// //         return this.nam + " " + this.city;
// //     }
// // }
// // const st1 = new student("lalit", "ggc");
// // console.log(st1.getdetails());

// class employee extends student{
//     constructor(nam, city, company)
//     {
//         super(nam, city);
//         this.company = company;
//     }
//     getdetails()
//     {
//         return this.nam + " " + this.city + " " + this.company;
//     }

// }
// const emp1 = new employee("satya", "delhi", "info");
// console.log(emp1.getdetails());

// function student(name, city) {
//     this.name = name;
//     this.city = city;
// }
// student.prototype.details = function () {
//     return this.name + " " + this.city;
// };

// const st = new student("lalit", "ggc");
// console.log(st.details());

// function get()
// {

//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             let b = false
//             if (b) {
//                 return resolve('resolved')
//             } else {
//                 return reject('rejected')
//             }
//         }, 5000);
//         })

// }
// console.log(get().then((ans) => console.log(ans)).catch((err)=>console.log(err)));

// function get() {

//     console.log("get");
//     put();

// }

// function put() {
//     console.log("put");
// }
// // get();

// function get()
// {
//     fetch('https://jsonplaceholder.typicode.com/posts').
//         then((response) => response.json()).
//         then((data) => {
//             console.log(data[0].title);
//             put();
//         })

//     }

// get();

// // btnname.onclick = function fn() {
// //   alert('hii')
// // }
// btnname.addEventListener("click", fun);

// function fun() {
//     console.log("sdfn");
// }

// let num = 2348;
// let num1 = num.toString();
// console.log(num1);

// const first = document.querySelector(".count");
// console.log(first);
// first.innerHTML = "heyy guys";

// const h = document.querySelector("h1");
// const display = document.querySelector("#display");
// const buttons = document.querySelectorAll("button");
// console.log(display);
// // console.log(buttons[0]);
// // console.log(buttons[1]);

// const inc = () => {
//     display.innerHTML = parseInt(display.innerHTML) + 1;
// }
// const dec = () => {
//     display.innerHTML = display.innerHTML - 1;
// }

// buttons[0].onclick = inc;
// buttons[1].onclick = dec;

// h.style.backgroundColor = "red";
// h.style.paddingLeft = "10px";

// const bdy = document.querySelector('.bdy')

// const one = document.querySelector('.one')

// const two = document.querySelector('.two')

// const three = document.querySelector('.three')
// const u = document.querySelector('.u');
// const container = document.querySelector(".display");

// console.log(bdy, one, two, three, u, container);

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then((response) => response.json())
//     .then((data) => {
//         console.log(data);

//         // bdy.innerHTML = data[0].body;
//         // one.innerHTML = data[0].id;
//         // two.innerHTML = data[0].title;
//         // three.innerHTML = data[0].userId;

//         for (let i = 0; i < data.length; i++) {
//             container += `<div class="card" style="width: 18rem;">
//                    <div class="card-body">
//                   </div>
//                       <ul class="list-group list-group-flush u"><li class="card-text bdy">${data[i].body}</li>
//     <li class="list-group-item one">${data[i].id}</li>
//     <li class="list-group-item two">${data[i].title}</li>
//     <li class="list-group-item three">${data[i].userId}</li>`
//         }
//     });


const emp = [
  {
    nam: 'lalit',
    age: 21,
    city: 'ggc',
    birth: {
      month: 01,
      day: 26,
      year: 2000,
        },
        func: function get() {
            return this.nam + " in " + this.city;
    }
  },
  {
    nam: 'sanchi',
    age: 20,
    city: 'ggc',
    birth: {
      month: 09,
      day: 28,
      year: 2001,
    },
  },
  {
    nam: 'satya',
    age: 25,
    city: 'ggc',
    birth: {
      month: 09,
      day: 28,
      year: 2001,
    },
  },
]

const str = JSON.stringify(emp);
const jsn = JSON.parse(str);
console.log(emp[0].func());


// class emp{
//     constructor(name, id)
//     {
//         this.name = name;
//         this.id = id;

//     }
//    func=()=> {
//         return this.name;
//     }
// }

// const emp1 = new emp("sanchi", 1);
// console.log(emp1.func());

console.log(this);