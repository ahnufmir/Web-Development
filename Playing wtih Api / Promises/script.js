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

const p = new Promise((resolve, reject) => {
    reject("Promise not resolved earlier")
})

async function getData(params) {
    return p;
}

const data = getData();
data
.then((res)=>console.log(res))
.catch((res)=> console.log(res))