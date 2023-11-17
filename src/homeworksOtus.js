export function sumNum(num) {
  return num
    .split("")
    .map((el) => Number(el))
    .reduce((el, sum) => (sum += el));
}
export function maxNum(a, b) {
  return Math.max(a, b);
}
export function returnMounth(num) {
  const date = new Date(`2022-${num}-15`);
  const monthName = date.toLocaleString("default", { month: "long" });
  return monthName;
}
export function sumFrom50_Before100() {
  let summa = 50;
  for (let i = 50; i < 101; i++) {
    summa += i;
  }
  return summa;
}
export function multiplicationTableForSeven() {
  const table = [];
  for (let i = 1; i < 11; i++) {
    table.push(`7 * ${i} = ${7 * i}`);
  }
  return table;
}
export function averageAllOddNum(n) {
  let quanOddNum = 0;
  let sumQuanOddNum = 0;
  for (let i = 1; i < n + 1; i++) {
    if (i % 2 === 0) {
      quanOddNum++;
      sumQuanOddNum += i;
    }
  }
  return sumQuanOddNum / quanOddNum;
}
export function objectUser(ageNum) {
  // const ageNum = prompt('enter age');
  const user = {
    age: ageNum,
  };
  const admin = Object.assign({ role: "admin" }, user);
  return admin;
}
export function makeInteractiveList(div) {
  const body = document.body;
  body.append(div);
  const input = document.createElement("input");
  div.append(input);
  const button = document.createElement("button");
  button.innerHTML = "Add";
  button.hidden = true;
  div.append(button);
  const list = [];
  const listBody = document.createElement("ol");
  div.append(listBody);
  for (let i = 0; i < 3; i++) {
    list.push(`${i + 1}`.repeat(i + 1));
  }
  button.addEventListener("click", () => {
    list.push(input.value);
    input.value = "";
    button.hidden = true;
    if (list.length > 5) {
      list.shift();
    }
    listBody.innerHTML = list.map((el) => `<li>${el}</li>`).join("");
  });
  listBody.innerHTML = list.map((el) => `<li>${el}</li>`).join("");
  input.addEventListener("input", () => {
    if (input.value !== "") {
      button.hidden = false;
    } else {
      button.hidden = true;
    }
  });
}
export function sumArray(n) {
  return n.reduce((el, sum) => (sum += el));
}
export function doubleArray(n) {
  return n.map((el) => el * 2);
}
export function minElArray(n) {
  return Math.min(...n);
}
export function maxElArray(n) {
  return Math.max(...n);
}
export function diff(n1, n2) {
  return Math.abs(n1 - n2);
}
export function isWord(str) {
  return str.length > 1;
}
export function pow(a, x) {
  return Math.pow(a, x);
}

export function returnDateWeek(el) {
  const input = document.createElement("input");
  input.type = "date";
  el.append(input);
  const list = [];
  const button = document.createElement("button");
  button.innerHTML = "to know";
  el.append(button);
  const listHTML = document.createElement("div");
  el.append(listHTML);
  button.addEventListener("click", () => {
    let date = new Date(input.value);
    let options = { weekday: "long" };
    const dayWeek = `${new Intl.DateTimeFormat("ru-US", options).format(
      date,
    )}
        ${input.value.split("-").reverse().join("-")}`;
    list.push(dayWeek);
    input.value = "";
    listHTML.innerHTML = `<ol>${list
      .map((el) => `<li>${el}</li>`)
      .join("")}</ol>`;
  });
}
