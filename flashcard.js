function BasicCard(front, back){
	
	this.front = front,
	this.back = back

	this.printQuestion = function(){
		console.log('\n'+front);
	};

	this.printAnswer = function(){
		console.log('\n'+back);
	}
};

function ClozeCard(text, cloze){
	
	// I'm not sure what you're putting the trailing commas here for, but they're not necessary for this to function correctly.
	this.text = text,
	this.cloze = cloze,

	this.printQuestion = function(){
		// nice use of the native `.replace` method here
		var displayQuestion = this.text.replace(cloze, '...');

		if(text.includes(cloze)){
			console.log('\n'+displayQuestion);
		}else{
			console.log('\n error making this card')
		}; // most JS style guides will say to not put semi colons after if/else statements or function definitions
		// But, there's no hard rule in JS that causes this to fail, so it's very much a preference thing. One thing
		// I would say though is to stay consistent with whichever set of rules you decide to follow.
		// Also, fun fact, you could remove every single semi-colon from this file and it would still work
		// exactly the same. This is because the JS compiler has a thing called automatic semi colon insertion
		// which basically means that it will go through your code and insert semi colons anywhere it thinks you forgot
		// to be them. It's a pretty wishy washy subject and is often the cause of confusion and ire. I'd encourage
		// you to read up on it when you get some free time (like that ever happens during a bootcamp...😏)
		// Some further reading on the subject:
		// http://blog.izs.me/post/2353458699/an-open-letter-to-javascript-leaders-regarding
		// https://www.codecademy.com/en/forum_questions/507f6dd09266b70200000d7e
	};
	
	// wasn't a requirement, but would be cool to have some form of print answer method that simply logs out `this.cloze`
};

var questionOne = new BasicCard('What is the difference between two and three?', 'one!');
var questionTwo = new ClozeCard('San Francisco is where we have class.', 'San Francisco');
var questionThree = new BasicCard('What do you call a bear without any teeth?', 'A gummy bear!');
var questionFour = new ClozeCard('The grass is always greener on the other side', 'The grass');
var errorQuestion = new ClozeCard('This will not work','oops');

// would've been nice to print out the answers for the questions. Not in the requirements though, so this is all gravy.
questionOne.printQuestion();
questionTwo.printQuestion();
questionThree.printQuestion();
questionFour.printQuestion();
errorQuestion.printQuestion();
console.log('\n');





