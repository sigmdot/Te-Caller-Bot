const dotenv = require("dotenv");

const guatonAction = require("./comands/guaton");
const rotationAction = require("./comands/rotation");

function messageCommands(message) {
  dotenv.config();

  if (message.author.bot) return;
  if (!message.content.startsWith(`${process.env.prefix}`)) return; // !t

  const commandBody = message.content.slice(`${process.env.prefix}`.length); // Se obtiene el commando sin el body
  const args = commandBody.split(" "); // Divide los mensaje en un array donde cada palabra es un elemento, el divisor es el espacio
  args.shift();
  const comandx = args.shift().toLowerCase();
  switch (comandx) {
    case "guaton":
      guatonAction(message, args);
      break;

    case "rotation":
      rotationAction(message, args);
      break;
  }
}
module.exports = {
  messageCommands,
};
