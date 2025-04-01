// TODO: this file! :)
const form = document.querySelector("form");
const numOutput = document.querySelector("#numberBank output");
const oddsOutput = document.querySelector("#odds output");
const evenOutput = document.querySelector("#evens output");
const numInput = document.querySelector("#number");
const AddnumBtn = document.querySelector("button");
const sort1Btn = document.querySelector("#sortOne");

const numBank = [];
const odds = [];
const evens = [];

const state = {
  numBank: [],
  odds: [],
  evens: [],
};

const render = () => {
  numOutput.replaceChildren();
  numBank.forEach((num) => {
    const li = document.createElement("li");
    li.textContent = num;
    numOutput.appendChild(li);
  });

  evenOutput.replaceChildren();
  state.evens.forEach((even) => {
    const li = document.createElement("li");
    li.textContent = even;
    evenOutput.appendChild(li);
  });

  oddsOutput.replaceChildren();
  state.odds.forEach((odd) => {
    const li = document.createElement("li");
    li.textContent = odd;
    oddsOutput.appendChild(li);
  });
};

// const displayNumBank = () => {
//   //render(state.events);
//   //numOutput.innerHTML = numBank
//   let items = "";
//   numBank.forEach((num) => {
//     items += `<li>${num}</li>`;
//   });
//   numOutput.innerHTML = items;
// };

const displayOdss = () => {
  let items = "";
  odds.forEach((num) => {
    items += `<li>${num}</li>`;
  });
  oddsOutput.innerHTML = items;
};

const displayEvens = () => {
  let items = "";
  evens.forEach((num) => {
    items += `<li>${num}</li>`;
  });
  evenOutput.innerHTML = items;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const newFormdata = new FormData(event.target);
  const rawNum = newFormdata.get("number");
  const number = Number(rawNum); // converts to number
  if (!isNaN(number)) {
    numBank.push(number);
    //displayNumBank();

    numInput.value = "";
    // render();
  }
  render();
});

sort1Btn.addEventListener("click", () => {
  const removeFirstNum = numBank.shift();
  if (removeFirstNum !== undefined) {
    const num = Number(removeFirstNum);

    if (!isNaN(num)) {
      if (num % 2 === 0) {
        state.evens.push(num);
      } else {
        state.odds.push(num);
      }
    }

    // displayNumBank();
    // displayEvens();
    // displayOdss();
  }
  render();
});
