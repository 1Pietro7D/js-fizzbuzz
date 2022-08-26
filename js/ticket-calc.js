console.log("hello world");

// global var
const gridContenitor = document.getElementById("bonus");
const inputHTML = document.querySelector("input");
const grid = document.getElementById("grid");

// Start code

inputHTML.addEventListener("click", function () {
  // log
  console.log("Good, let's go");

  // rendiamo visibile il tutto
  gridContenitor.classList.remove("d-none");

  // creiamo con un ciclo 100 elementi creando una variabile locale

  for (let squareIndex = 1; squareIndex <= 100; squareIndex++) {
    // nascondo l'input per evitarne altri
    inputHTML.classList.add("d-none");

    // creo degli elementi div
    const mySquare = document.createElement("div");

    mySquare.append(squareIndex.toFixed());
    mySquare.classList.add("my-square");

    // condition for output
    if (squareIndex % 3 === 0 && squareIndex % 5 === 0) {
      console.log("FIZZBUZZ");
    } else if (squareIndex % 3 === 0) {
      console.log("FIZZ");
    } else if (squareIndex % 5 === 0) {
      console.log("BUZZ");
    } else {
      console.log(squareIndex);
    }
    // /condition for output

    mySquare.addEventListener("mouseenter", function () {
      console.log("entro in " + squareIndex);
      mySquare.style.backgroundColor = "green";
    });
    mySquare.addEventListener("mouseleave", function () {
      console.log("esco da " + squareIndex);

      mySquare.style.backgroundColor = "red";
    });
    mySquare.addEventListener("click", function () {
      console.log("entro in " + squareIndex);
      mySquare.style.backgroundColor = "blue";
    });

    // aggiungo i div creati a grid

    grid.append(mySquare);
  }

  // End code

  // article
  const myarticle = document.querySelector("article");
  myarticle.classList.remove("d-none");

  const approfondimento = document.getElementById("approfondimento");
  approfondimento.addEventListener("click", function () {
    const paragraph = document.getElementById("paragraph");
    paragraph.classList.remove("d-none");
    // /article

    // ora prendiamo i dati dal nostro calcolatore tradizionale
    const calcTradizionale = document.getElementById("calc-tradizionale");
    calcTradizionale.addEventListener("click", function () {
      // qui prendiamo il valore dell'input
      const mTradizionale = document.getElementById("m-tradizionale").value;
      // e creiamo una variabile che calcola la radice quadrata
      const risultatoTradizionale = Math.sqrt(mTradizionale);
      // controlliamo che la radice quadrata sia un intero creando una variabile con il suo intero
      const confrontoTradizionale = parseInt(risultatoTradizionale);

      if (confrontoTradizionale == risultatoTradizionale) {
        console.log(risultatoTradizionale);
      } else {
        console.log(mTradizionale);
      }
    });
  });
});
