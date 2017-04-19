var jsonDataBody = [
{
	"header": [
	"center"
},
{
	"div":{
		"class": "aside",
		[ "img","h6", "nav"]
	}
}
];

var simplifiedJSON = [
	{
		"journalEntry" : "1", "data": "August 15, 2016", "title": "purpose", "content": "I joined this class because, for the longest time I've wanted to learn how to program but I never knew where to start and I just couldn't find the ample amount of time to do it on my own, so when I heard that we were going to introduce a coding class I jumped at the opportunity to join. Plus this is my last year of highschool so I want to try and get involved and learn as much as possible since its FREE!", "img"

	}

]

/*
	create a function named showAll
	pass one parameter (data)

	Inside function
	Iterate through data
		for each object creat elements
		create parent div 
			with the id '#entry-' + object.id
		create a h1 
			append/add iner.HTML object.title to h1
		Repeat for every value.
		append all elements + values to the parent div
/*


