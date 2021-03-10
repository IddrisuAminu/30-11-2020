let result = document.getElementById("result");
document.getElementById("eq").addEventListener("click", function () {
  let fn = parseInt(document.getElementById("fn").value);
  let sn = parseInt(document.getElementById("sn").value);
  if (!fn) {
    alert("pleace enter first number");
    return;
  }
  if (!sn) {
    alert("pleace enter second number");
    return;
  }
  if (fn > sn) {
    result.innerText = "no";
  } else if (fn < sn) {
    result.innerText = "yes";
  } else if ((fn = sn)) {
    result.innerText = "is equall";
  }
});
document.getElementById("equal").addEventListener("click", function () {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  if (!num1) {
    alert("pleace enter first number");
    return;
  }
  if (!num2) {
    alert("pleace enter second number");
    return;
  }
  sum = num1 + num2;
  result.innerText = sum;
});
document.getElementById("mult").addEventListener("click", function () {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  if (!num1) {
    alert("pleace enter first number");
    return;
  }
  if (!num2) {
    alert("pleace enter second number");
    return;
  }
  sum = num1 * num2;
  result.innerText = sum;
});
document.getElementById("munu").addEventListener("click", function () {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  if (!num1) {
    alert("pleace enter first number");
    return;
  }
  if (!num2) {
    alert("pleace enter second number");
    return;
  }
  sum = num1 - num2;
  result.innerText = sum;
});
document.getElementById("deve").addEventListener("click", function () {
  let num1 = parseInt(document.getElementById("num1").value);
  let num2 = parseInt(document.getElementById("num2").value);

  if (!num1) {
    alert("pleace enter first number");
    return;
  }
  if (!num2) {
    alert("pleace enter second number");
    return;
  }
  sum = num1 / num2;
  result.innerText = sum;
});
