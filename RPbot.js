const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("Ready to educate!.");
});

client.on("message", (message) => {
  if (message.content.startsWith("!metagaming")) {
    message.channel.send("Metagaming: Using information obtained through OOC means IC. ");
  } 

  if (message.content.startsWith("!godmodding")) {
    message.channel.send("Godmodding: Any attempt at giving a roleplaying character an advantage that does not normally exist in-game, or overpowering a character.");
  }

  if (message.content.startsWith("!para")) {
    message.channel.send("Para: A posting style where each post is a paragraph in length.");
  }

});


client.login("process.env.BOT_TOKEN");
