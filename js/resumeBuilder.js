/*
This is empty on purpose! Your code to build the resume will go here.
$("#main").append([yourname]); 
 */
 //$("#main").append(["Shakti Singh"]); 
 //var awesomeThoughts = "I am Shakti and I am awesome";
 //var funThoughts = awesomeThoughts.replace("awesome", "fun");
  //$("#main").append(funThoughts); 

var name = "Shakti Singh Rathore";
  var formattedName = HTMLheaderName.replace("%data%", name);
 //$("#header").prepend(formattedName);

  var role = "Looking for Software Engineering Internship";
  var formattedRole = HTMLheaderRole.replace("%data%", role);
  $("#header").prepend(formattedRole);
    $("#header").prepend(formattedName);
/*
Helper code for dot and bracket notation.
   // var work = {};

   // work.currentposition = "Teaching Assistant";
    //	work.employer =  "Linda Roper";
    //	work.yearsworked = 1;
    //	work.cityofBus = "San Jose";
    	
    	

   // var education = {};
   // education["Name"] = "St. Anne's School";
   // education["years"] = 12;
   // education["city"] = "Jodhpur";



   // $("#header").append(work["currentposition"]);
   // $("#header").append(education.Name); 
*/
/*
	My work experience
*/

    var work = {
    "jobs" : [
    {
    	"employer":"Linda Roper",
    	"title":"Teaching Assistant",
    	"location":"San Jose, CA",
    	"datesWorked":"January 2016 - present",
    	"description":"Teach freshman students Pre-Calculus. Making them understand calculus basics so they could be better prepared for calculus class"

    }]};

/*
	My projects
*/
    var project = {
    	"projects" : [
    {
    	"title":"Mancala Game",
    	"dates":"May 2015",
    	"description":"Implemented a board game using model, view, and controller pattern in a team of three students. We used"+
    	" Java and git version control.",
    	"images":["images/StartRS.jpg",
    			  "images/BoardRS.jpg"]

    },
    {
    	"title":"Calendar Application",
    	"dates":"March 2015",
    	"description":"Implemented calendar Application using Java and MVC pattern",
    	"images":["images/CalRS.jpg"]

    }
    ]};

/*
	My biography
*/

     skills = ["Java", "C", "Python", "HTML & CSS"];
    
    var bio = {
    	"name":name,
    	"role":role,
    	"contacts" :
    	{
          "mobile": "4084428396",
          "email": "rath.shakti1994@gmail.com",
          "github": "shakti1912",
          "twitter": "@SinghShakti1912",
          "location": "Jodhpur, India"
      },
    	"biopic": "images/me.jpeg",
    	"skills" : skills,
    	"message":"Welcome to my Page"

    };

    /*
	My Education
    */
 var education = {
    	 "schools": [
    	{	"name":"St. Anne's school",
    		"graduation":"2012",
    		"location":"Rajasthan, India",
    		"majors":["Science $ Math"],
    		"url":"http://www.stannes.edu.in/"
    	},
    	{ "name": "San Jose State University",
    		"graduation":"Fall 2017",
    		"location":"San Jose, CA",
    		"minor":"Mathematics",
    		"majors":["Computer Science"],
   			"url":"http://www.sjsu.edu/"
    	}],
    	 "Online Courses": [
    	{
    		"title":"Javascript Basics",
    		"school":"Udacity",
    		"dates":"Summer 2016",
    		"url":"https://www.udacity.com/"
    	},
    	{
    		"title":"Python for Everybody",
    		"school":"Coursera",
    		"dates":"Winter 2015",
    		"url":"https://www.coursera.org/"	

    	}]};

if(bio.skills.length > 0)
{
	$("#header").append(HTMLskillsStart);	// header glance at a skills string
	var Hskills = HTMLskills.replace("%data%", bio.skills[0]);
	$("#skills").append(Hskills);
	Hskills = HTMLskills.replace("%data%", bio.skills[1]);
	$("#skills").append(Hskills);
	Hskills = HTMLskills.replace("%data%", bio.skills[2]);
	$("#skills").append(Hskills);
	Hskills = HTMLskills.replace("%data%", bio.skills[3]);
	$("#skills").append(Hskills);
}


function displayWork()
{
for(item in work.jobs)
{
	$("#workExperience").append(HTMLworkStart);
	var emp = HTMLworkEmployer.replace("%data%",work.jobs[item].employer);
	var titl = HTMLworkTitle.replace("%data%", work.jobs[item].title);

	var con = emp + titl;
	$(".work-entry:last").append(con);
	console.log("shakti");
}

for(item in work.jobs)
{
	//$("#workExperience").append(HTMLworkDates);

	var dat = HTMLworkDates.replace("%data%", work.jobs[item].datesWorked);
	$(".work-entry:last").append(dat);

	var loc = HTMLworkLocation.replace("%data%", work.jobs[item].location);
	$(".work-entry:last").append(loc);

	var des = HTMLworkDescription.replace("%data%", work.jobs[item].description);
	$(".work-entry:last").append(des);
}
   
   }

displayWork();


$(document).click(function(loc) {
  // your code goes here
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});


$("#main").append(internationalizeButton);

function inName()
{
	var previousName = bio.name;

  var arr = previousName.split(" ");
    
    arr[0] = arr[0].toLowerCase();
    var x = arr[0].slice(1);
    var y = arr[0].slice(0,1)
     r =  y.toUpperCase()+x;


    arr[1] = arr[1].toUpperCase();
    var finalName = r + " " + arr[1];
    return finalName;

}

project.display = function()
{
	for(item in project.projects)
	{
		console.log("Shakti");
	
		$("#projects").append(HTMLprojectStart);
		var protitle = HTMLprojectTitle.replace("%data%", project.projects[item].title);


		$(".project-entry:last").append(protitle);
		console.log("singh");

		var prodates = HTMLprojectDates.replace("%data%", project.projects[item].dates);
		$(".project-entry:last").append(prodates);

		var prodescription = HTMLprojectDescription.replace("%data%", project.projects[item].description);
		$(".project-entry:last").append(prodescription);

		if(project.projects[item].images.length > 0)
		{
			for(image in project.projects[item].images)

		{
			var proima= HTMLprojectImage.replace("%data%", project.projects[item].images[image]);
			$(".project-entry:last").append(proima);
		}
}
	}
}

project.display();

$("#mapDiv").append(googleMap);


















