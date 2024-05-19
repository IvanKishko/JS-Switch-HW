// TASK 1
let drink = prompt("Напишіть ваш улюбленний напій (Кава, чай, сік):");
switch (drink) {
  case "Кава":
    alert("Ваш улюбленний напій це кава!");
    break;
  case "Чай":
    alert("Ваш улюбленний напій це чай!");
    break;
  case "Сік":
    alert("Ваш улюбленний напій це сік!");
    break;
  default:
    alert("Виберіть напій з списку");
}
// TASK 2
let day = prompt("Який сьогодні день?");
switch (day) {
  case "Понеділок":
  case "Вівторок":
  case "Середа":
  case "Четвер":
  case "П'ятниця":
    alert("Сьогодні робочий день!");
    break;
  case "Неділя":
  case "Субота":
    alert("Сьогодні вихідний день!");
    break;
  default:
    alert("Введено неправильний день!");
}
// TASK 3
let mounthNumber = parseInt(prompt("Введіть місяць від 1-12:"));
let season;
switch (mounthNumber) {
  case 1:
  case 2:
  case 12:
    season = "Зима";
    break;
  case 3:
  case 4:
  case 5:
    season = "Весна";
    break;
  case 6:
  case 7:
  case 8:
    season = "Літо";
    break;
  case 9:
  case 10:
  case 11:
    season = "Осінь";
    break;
  default:
    season = "Введено неправильний місяць";
    break;
}
console.log(`Цього місяця пора року: ${season} `);
// TASK 4
let color = prompt(
  "Виберіть колір (червоний, жовтий або зелений)"
).toLowerCase();
let action;
switch (color) {
  case "червоний":
    action = "Стоп";
    break;
  case "жовтий":
    action = "Чекати";
    break;
  case "зелений":
    action = "Йти";
    break;
  default:
    "Введено не правильний колір!";
    break;
}
alert(action);
// TASK 5
let number1 = parseFloat(prompt("Введіть перше число"));
let operation = prompt("Введіть дію (+, -, *, /)");
let number2 = parseFloat(prompt("Введіть друге число"));
let res;
switch (operation) {
  case "+":
    res = number1 + number2;
    break;
  case "-":
    res = number1 - number2;
    break;
  case "*":
    res = number1 * number2;
    break;
  case "/":
    if (number2 === 0) {
      res = "Error";
    } else {
      res = number1 / number2;
    }
    break;
  default:
    res = "Error";
}
console.log(res);
