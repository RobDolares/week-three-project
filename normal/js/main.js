window.onload = function() {

  let answer = document.getElementById("answer");


  //Populate with nums

  let num = document.querySelectorAll(".num");

  for (var i = 0; i < num.length; i++) {

    num[i].addEventListener("click", function() {
      output = answer.innerHTML += this.value;
      maxInput = output.length;
      if (maxInput > 12) {
        alert("Use less input");
      }
    });
  }

  //zero - without isolating zero from "num" I was getting an empty value for each num entry.

  document.querySelector("#zero").addEventListener("click", function() {

    let zero = this.value;

    if (answer.innerHTML === "") {
      output = answer.innerHTML = zero;
    } else if (answer.innerHTML === output) {
      output = answer.innerHTML += zero;
    }
  });

  document.querySelector("#equals").addEventListener("click", function() {
    if (answer.innerHTML === output) {
      answer.innerHTML = eval(output);
    } else {
      answer.innerHTML = "";
    }
  });

  //tie in operators

  var oper = document.querySelectorAll(".oper");

  for (var i = 0; i < oper.length; i++) {
    oper[i].addEventListener("click", function() {
      operator = this.value;
      if (answer.innerHTML === "") {
        answer.innerHTML = (answer.innerHTML + "");
      } else if (output) {
        answer.innerHTML = (output + operator);
      }
    }, false);
  }

  //Clears answer field
  document.querySelector("#clear").addEventListener("click", function() {
    answer.innerHTML = "";
  });








};
