import { hello } from "./modules/message.js";
import { sum } from "./modules/math.js";

hello();


const output = document.createElement("p");
output.textContent = `2 + 3 = ${sum(2, 3)}`;
document.body.appendChild(output);
