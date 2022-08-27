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

    mySquare.append(squareIndex);
    mySquare.classList.add("my-square");

    // condition for output
    if (squareIndex % 3 === 0 && squareIndex % 5 === 0) {
      mySquare.innerHTML = "FIZZBUZZ";
      mySquare.classList.add("fizzbuzz");
      console.log("FIZZBUZZ");
    } else if (squareIndex % 3 === 0) {
      mySquare.innerHTML = "FIZZ";
      mySquare.classList.add("fizz");
      console.log("FIZZ");
    } else if (squareIndex % 5 === 0) {
      mySquare.innerHTML = "BUZZ";
      mySquare.classList.add("buzz");
      console.log("BUZZ");
    } else {
      console.log(squareIndex);
    }
    // /condition for output

    mySquare.addEventListener("mouseenter", function () {
      console.log("entro in " + squareIndex);
      mySquare.classList.add("mouseEnter");
    });
    mySquare.addEventListener("mouseleave", function () {
      console.log("esco da " + squareIndex);

      mySquare.classList.remove("mouseEnter");
    });
    mySquare.addEventListener("click", function () {
      console.log("entro in " + squareIndex);
      mySquare.style.backgroundColor = "yellow";
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
        document.getElementById("resultTradizionale").innerHTML =
          "  " + risultatoTradizionale;
      } else {
        const simbol = "&radic;";

        console.log(risultatoTradizionale);
        document.getElementById("resultTradizionale").innerHTML =
          "  " + simbol + mTradizionale + "  (Non è un quadrato perfetto)";
      }
    });
    //// fine calcolatore tradizionale

    // calcolatore mentale
    const calcMentale = document.getElementById("calc-mentale");
    calcMentale.addEventListener("click", function () {
      // qui prendiamo il valore dell'input
      const mMentale = document.getElementById("m-mentale").value;
      // faccio una analisi dell'elemento
      let analisiMMentale = mMentale.constructor;
      console.log(analisiMMentale);
      // l'analisi dice che mMentale è una stringa
      let centinaia = mMentale.slice(0, -2);
      let unità = mMentale.charAt(mMentale.length - 1);
      document.getElementById("result_mentale").innerHTML =
        " prendiamo le cifre sopra le centinaia ovvero " +
        centinaia +
        " e guardiamo l'unità " +
        unità;

      // creiamo il confronto dei range

      //fine calcolatore mentale
    });
  });

  // griglia2
  const gridTwo = document.getElementById("gridTwo");
  for (let squareIndex2 = 1; squareIndex2 <= 100; squareIndex2++) {
    // creo degli elementi div
    const mySquareTwo = document.createElement("div");
    mySquareTwo.append(squareIndex2 * squareIndex2);

    mySquareTwo.classList.add("my-squaretwo");

    mySquareTwo.addEventListener("click", function () {
      console.log("la sua radice quadrata è " + squareIndex2);
      mySquareTwo.style.backgroundColor = "yellow";
    });
    mySquareTwo.addEventListener("click", function () {
      console.log("la sua radice quadrata è " + squareIndex2);
      mySquareTwo.style.backgroundColor = "yellow";
    });
    // let valueSquareIndex2 = squareIndex2.value;

    // aggiungo i div creati a grid
    gridTwo.append(mySquareTwo);
  }

  // /article
});
