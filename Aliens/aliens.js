var bluealiens = 5000
var greenaliens = 2000
var redaliens = 3000

function IndependanceDay (){
	if (bluealiens + greenaliens + redaliens == 10000)
		if (greenaliens > 5000){
			console.log	('May God help us all... THE GREEN ONES ARE BACK!!!')
		}else if (greenaliens + redaliens > 8000){
			console.log ('DOOOOOM')
		}else if (redaliens + bluealiens < 3000){
			console.log ('We will not go quietly into the night. We will not vanish without a fight. TODAY WE CELEBRATE OUR INDEPENDANCE DAY!')
	}else{
		console.log('The alien scum has been iradicated!!')
		}
	}
IndependanceDay ()