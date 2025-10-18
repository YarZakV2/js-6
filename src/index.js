import { add } from "./modules/math.js";
import { message } from "./modules/message.js";

console.log(message);
console.log("2 + 3 =", add(2, 3));

document.body.innerHTML = `<h1>${message}</h1><p>2 + 3 = ${add(2, 3)}</p>`;

