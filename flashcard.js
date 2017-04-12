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
	
	this.text = text,
	this.cloze = cloze,

	this.printQuestion = function(){

		var displayQuestion = this.text.replace(cloze, '...');

		if(text.includes(cloze)){
			console.log('\n'+displayQuestion);
		}else{
			console.log('\n error making this card')
		};
	};
	
};

var questionOne = new BasicCard('What is the difference between two and three?', 'one!');
var questionTwo = new ClozeCard('San Francisco is where we have class.', 'San Francisco');
var questionThree = new BasicCard('What do you call a bear without any teeth?', 'A gummy bear!');
var questionFour = new ClozeCard('The grass is always greener on the other side', 'The grass');
var errorQuestion = new ClozeCard('This will not work','oops');

questionOne.printQuestion();
questionTwo.printQuestion();
questionThree.printQuestion();
questionFour.printQuestion();
errorQuestion.printQuestion();
console.log('\n');





