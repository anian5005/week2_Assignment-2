//Request 1: Click to Change Text

const body = document.body;
const welcome = document.getElementById("clickHere");
const headline = document.getElementById("changeText");


welcome.addEventListener('click',
	()=>{

		console.log("OH YEAH!");
		welcome.innerHTML='<h1>Have a Good Time!</h1>';
		}
	);

//Request 2: Click to Show More Content Boxes

const but_down = document.getElementById('down');
const displaybox = document.getElementById("moreBoxs");

but_down.addEventListener('click',
	()=>{

		console.log("good job");
		displaybox.style.display="block";
		}
	);