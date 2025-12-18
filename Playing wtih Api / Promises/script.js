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

const cart = ["elon musk", "sam altman", "larry page", "steve jobs"];

// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//   })
//   .then(function (orderId) {
//     proceedToPayment(orderId);
//   })
//   .catch(function (err) {
//     console.log(err);
//   });

// function createOrder(cart) {
//   const promise = new Promise(function (resolve, reject) {
//     if (!validateCart(cart)) {
//       const error = "Cart is not validated";
//       reject(error);
//     } else {
//       const orderId = "233";
//       if (orderId) {
//         resolve(orderId);
//       }
//     }
//   });
//   return promise;
// }

// function proceedToPayment(orderId) {
//   return new Promise(function (resolve, reject) {
//     resolve("Payment Successful");
//   });
// }

// function validateCart(cart) {
//   return false;
// }

const promise = createOrderByID(cart);
console.log(promise);

promise.then((orderID) => console.log(orderID));

function createOrderByID(cart) {
  const Pr = new Promise(function (resolve, reject) {
    if (!validateCart(cart)) {
      const err = new Error("Cart is not validated");
      reject(err);
    }
    const orderID = "1234";
    if (orderID) {
      setTimeout(() => {
        resolve(orderID);
      }, 10000);
    }
  }
);
return Pr;
}

function validateCart(cart) {
  return true;
}
