window.onload = function() {

  answer = document.getElementById("answer");


  //Clears answer field
  document.querySelector("#clear").addEventListener("click", function() {
    answer.innerHTML = "";
  });

  let elem = document.querySelectorAll(".numHard");

  for (var i = 0; i < elem.length; i++) {
    elem[i].addEventListener("click", function() {
      num = this.value;
      output = answer.innerHTML += num;
      maxInput = output.length;
      if (maxInput > 12) {
        alert("Use less input")
      }
    });
  }









};
