console.log("hello world");

// global var
const gridHTML = document.getElementById("bonus");
const inputHTML = document.querySelector("input");

// Start code

inputHTML.addEventListener("click", function () {
  // log
  console.log("Good, let's go");

  // rendiamo visibile il tutto
  gridHTML.classList.remove("d-none");

  // creiamo con un ciclo 100 elementi creando una variabile locale

  for (let squareIndex = 1; squareIndex <= 100; squareIndex++) {
    // log
    if (squareIndex % 3 === 0 && squareIndex % 5 === 0) {
      console.log("FIZZBUZZ");
    } else if (squareIndex % 3 === 0) {
      console.log("FIZZ");
    } else if (squareIndex % 5 === 0) {
      console.log("BUZZ");
    } else {
      console.log(squareIndex);
    }
  }

  // End code

  // article
  const myarticle = document.querySelector("article");
  myarticle.classList.remove("d-none");

  const approfondimento = document.getElementById("approfondimento");
  approfondimento.addEventListener("click", function () {
    const paragraph = document.getElementById("paragraph");
    paragraph.classList.remove("d-none");
  });
});
