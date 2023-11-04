const output = document.querySelector("#output");
const copyBtn = document.querySelector("#copybtn");
const passwordElement = document.querySelector("#password");
const numberElement = document.querySelector("#num");
const capsElement = document.querySelector("#caps");
const smallElement = document.querySelector("#small");
const symbolElement = document.querySelector("#symbol");
const formElement = document.querySelector("#form");

copyBtn.addEventListener("click", async () => {
  const pass = output.value;
  if (pass) {
    await navigator.clipboard.writeText(pass);
    alert("password copied");
  } else {
    alert("There is no Password");
  }
});

function generatedRandomChar(min, max) {
  const limit = max - min + 1;
  return String.fromCharCode(Math.floor(Math.random() * limit) + min);
}
function numberValue() {
  return generatedRandomChar(48, 57);
}
function capitalValue() {
  return generatedRandomChar(65, 90);
}
function smallValue() {
  return generatedRandomChar(97, 122);
}
function symbolValue() {
  let symbol = "><@#%&*_-?~=^!";
  return symbol[Math.floor(Math.random() * symbol.length)];
}

const funarray = [
  {
    element: numberElement,
    fun: numberValue,
  },

  {
    element: capsElement,
    fun: capitalValue,
  },
  {
    element: smallElement,
    fun: smallValue,
  },
  {
    element: symbolElement,
    fun: symbolValue,
  },
];

formElement.addEventListener("submit", (e) => {
  e.preventDefault();
  const limit = passwordElement.value;
  let passwordGenarator = "";

  const functionArray = funarray.filter(({ element }) => element.checked);

  for (i = 0; i < limit; i++) {
    const index = Math.floor(Math.random() * functionArray.length);
    const letter = funarray[index].fun();
    passwordGenarator += letter;
  }

  output.value = passwordGenarator;
});
