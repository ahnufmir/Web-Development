// const pic = document.querySelector("#pic");
// const nameUser= document.querySelector("#name");
// const followers = document.querySelector("#followers");

// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://api.github.com/users/ahnufmir');
// xhr.onreadystatechange = function () {
//     const state = (xhr.readyState);
//     console.log(state);
//     if(state === 4){
//         const data = JSON.parse(this.responseText);
//         console.log(data.avatar_url);
//         console.log(data);
//         pic.src = data.avatar_url;
//         nameUser.innerHTML = data.login;
//         followers.innerHTML = data.followers;

//     }
// }
// xhr.send();

// Fetch
// const GITHUB_URL = "http://api.github.com/users/ahnufmir";
// const user = fetch(GITHUB_URL);
// console.log(user);

// user.then(function(data){
//     console.log(data);
// })

// const cart = ["elon musk", "sam altman", "larry page", "steve jobs"];

// // createOrder(cart)
// //   .then(function (orderId) {
// //     console.log(orderId);
// //   })
// //   .then(function (orderId) {
// //     proceedToPayment(orderId);
// //   })
// //   .catch(function (err) {
// //     console.log(err);
// //   });

// // function createOrder(cart) {
// //   const promise = new Promise(function (resolve, reject) {
// //     if (!validateCart(cart)) {
// //       const error = "Cart is not validated";
// //       reject(error);
// //     } else {
// //       const orderId = "233";
// //       if (orderId) {
// //         resolve(orderId);
// //       }
// //     }
// //   });
// //   return promise;
// // }

// // function proceedToPayment(orderId) {
// //   return new Promise(function (resolve, reject) {
// //     resolve("Payment Successful");
// //   });
// // }

// // function validateCart(cart) {
// //   return false;
// // }

// createOrderByID(cart)
//   .then(function(orderID) {
//     console.log(orderID);
//     return orderID;
//   })
//   .then(orderID => proceedToPayment(orderID))
//   .then ((paymentInfo)=> console.log(paymentInfo))
//   .catch((err) => console.log(err.message))

// function createOrderByID(cart) {
//   const Pr = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const err = new Error("Cart is not validated");
//       reject(err);
//     }
//     const orderID = "1234";
//     if (orderID) {
//      // setTimeout(() => {
//         resolve(orderID);
//      // }, 5000);
//     }
//   });
//   return Pr;
// }

// function proceedToPayment(orderID){
//   return new Promise(function(resolve, reject){
//     resolve("Payment Done");
//   })
// }

// function validateCart(cart) {
//   return true;
// }


// Async keyword
// It always retunrs a function. If the returning value is promise, then it will take the promise as it is. If the returning value is non-promise type like integers, boolean etc, it wraps inside that value into promise and then return promise

// const p = new Promise((resolve, reject) => {
//     resolve("Promise resolved earlier 1")
// })

// async function getData(params) {
//     return p;
// }

// const data = getData();
// data
// .then((res)=>console.log(res))
// .catch((res)=> console.log(res))

// // Async keyword
// // It always retunrs a function. If the returning value is promise, then it will take the promise as it is. If the returning value is non-promise type like integers, boolean etc, it wraps inside that value into promise and then return promise

// const pr = new Promise((resolve, reject) => {
//     reject("Either i will become next ELon Musk or will be none")
// })

// async function getData1() {
//     return pr;
// }

// const data1 = getData1();
// data1
// .then((res)=>console.log(res))
// .catch((res)=> console.log(res))

// // Await keyword is not only used in async function 

// const pro = new Promise(function(resolve, reject){
//    resolve("Promise resolved to myself : I will be next ELon Musk");
// });

// async function handlePromise() {
//     const value = await pro;
//     console.log(value);
// }

// handlePromise();

// Outputs
// script.js:145 Promise resolved 
// script.js:118 Promise resolved earlier 1
// script.js:135 Promise not resolved earlier 2


const pro2 = new Promise(function(resolve, reject){
   resolve("Promise resolved to myself : I will be next ELon Musk");
});

async function handlePromise1() {
    const value = await pro2;
    console.log(value);
    console.log("Waited for above line");
}

handlePromise1();

const promise = new Promise(function(resolve, reject){
   resolve("Promise resolved to myself : I will be next ELon Musk yeah");
});

async function handlePromise2() {
    promise.then(res => console.log(res));
    //console.log(value);
    console.log("Waited for above line last"); // line 1
}

handlePromise2();

// //Output:
// script.js:175 Waited for above line last
// script.js:162 Promise resolved to myself : I will be next ELon Musk
// script.js:163 Waited for above line
// script.js:173 Promise resolved to myself : I will be next ELon Musk yeah

// Now look line 1 is printed first and then 

