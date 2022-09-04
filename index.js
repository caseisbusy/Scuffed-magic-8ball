const chalkAnimation = require("chalk-animation")

let niceReplies = ["Good for you!", "Glad hearing!", "Yes!!", "Of Course!", "Sure?"]
let niceReply = niceReplies[Math.floor(Math.random() * niceReplies.length)]
let badReplies = ["Ok", "Shut up", "I don't care", "Go away"]
let badReply = badReplies[Math.floor(Math.random() * badReplies.length)];
let bothReplies = ['No', 'Yes', "I don't care", 'Ok', 'Shush', 'Of course!', "That's nice!"];
let bothReply = bothReplies[Math.floor(Math.random() * bothReplies.length)]

let which = prompt("Do you want the 8ball to be nice or bad or both? ")
if (which.toLowerCase() === 'nice' || which.toUpperCase() === "nice") {
	let question = prompt("Ask the 8ball a question ")
	let animation = chalkAnimation.rainbow(question + '? ' + niceReply)

	setTimeout(() => {
		animation.stop();
	}, 1000)

	setTimeout(() => {
		animation.start();
	}, 2000)

} else if (which.toLowerCase() === 'bad' || which.toUpperCase() === 'bad') {
	let question = prompt("Ask the 8ball a question ")
	let animation = chalkAnimation.rainbow(question + '? ' + badReply)

	setTimeout(() => {
		animation.stop();
	}, 1000)

	setTimeout(() => {
		animation.start();
	}, 2000)

} else if (which.toLowerCase() === 'both' || which.toUpperCase() === 'both') {
	let question = prompt("Ask the 8ball a question ")
	let animation = chalkAnimation.rainbow(question + '? ' + bothReply)

	setTimeout(() => {
		animation.stop();
	}, 1000)

	setTimeout(() => {
		animation.start();
	}, 2000)
};

setTimeout(() => {
	console.log("Exiting process.")
	process.exitCode = 1
}, 9000);