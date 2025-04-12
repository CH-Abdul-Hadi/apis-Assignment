// let body = document.querySelector("body");

// const myPromise = new Promise((resolve, reject) => {
//   fetch("https://dog.ceo/api/breeds/list/all")
//     .then((response) => {
//       if (response) {
//         return response.json();
//       } else {
//         throw new Error("Network response was not ok");
//       }
//     })
//     .then((msg) => resolve(msg))
//     .catch((error) => reject(error));
// });

// myPromise
//   .then((msg) => {
//     body.innerHTML = "<h1 style='text-align:center'>Dog Breeds</h1>";
//     for (let breed in msg.message) {
//         body.innerHTML += `<p style="display: inline-block; padding: 12px; background:#dfdff0; text-transform: capitalize; margin: 4px; border: 1px solid">${breed}</p>`;
//     }
//   })
//   .catch((error) => {
//     console.log("Error:", error);
//   });

// async function getDogBreeds() {
//     try {
//       let response = await fetch("https://dog.ceo/api/breeds/image/random/50");
//       if (!response) {
//         throw new Error("Network response was not ok");
//       }
//       let data = await response.json();
//       const body = document.querySelector("body");
//       body.innerHTML = "<h1 style='text-align:center'>Random Dog Images</h1>";
//       data.message.forEach((imageUrl) => {
//         body.innerHTML += `<img src="${imageUrl}" alt="Random dog" style="width: 200px; height:200px; margin: 10px;  border: 1px solid">`;
//       });
//     } catch (error) {
//       console.log("Error:", error);
//     }
//   }

//   getDogBreeds();
