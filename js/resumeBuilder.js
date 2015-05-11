var bio = 
{
	"name": "Namrata Sanganeria",
	"role": "User Interface Developer",
	"contacts": {
		"mobile": "972-222-8888",
		"email": "namrata.sng@gmail.com",
		"github": "namratasanganeria",
		"twitter": "@namrata",
		"location": "Dallas",
	},
	"welcomeMsg": "8 years of experience in designing Websites, Web Applications and User Interface.",
	"skills": ["Adobe Creative Suite", "HTML 5", "CSS 3", "JavaScript", "JQuery"],
	"bioPic": "images/fry.jpg"
	}
bio.display = function() 
{
	var formattedRole=HTMLheaderRole.replace("%data%",bio.role);
	$("#header").prepend(formattedRole);
	var formattedName=HTMLheaderName.replace("%data%",bio.name);
	$("#header").prepend(formattedName);
	var formattedMobile=HTMLmobile.replace("%data%", bio.contacts.mobile);
	$("#topContacts").append(formattedMobile);
	$("#footerContacts").append(formattedMobile);
	var formattedEmail=HTMLemail.replace("%data%", bio.contacts.email);
	$("#topContacts").append(formattedEmail);
	$("#footerContacts").append(formattedEmail);
	var formattedGithub=HTMLgithub.replace("%data%", bio.contacts.github);
	$("#topContacts").append(formattedGithub);
	$("#footerContacts").append(formattedGithub);
	var formattedTwitter = HTMLtwitter.replace("%data%", bio.contacts.twitter);
	$("#topContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedTwitter);
	var formattedLocation=HTMLlocation.replace("%data%", bio.contacts.location);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedLocation);
	var formattedbiopic=HTMLbioPic.replace("%data%", bio.bioPic);
	$("#header").append(formattedbiopic);
	var formattedwelcomeMsg=HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
	$("#header").append(formattedwelcomeMsg);

	var skillCount = 0
	if (bio.skills.length > 0) {
		$("#header").append(HTMLskillsStart);
		for (skills in bio.skills) {
			var formattedSkill = HTMLskills.replace("%data%", bio.skills[skillCount]);
			skillCount++;
			$("#skills").append(formattedSkill);
		}
		}
};
bio.display();


var work = 
{
	"jobs": [
	{
	"employer": "Nike",
	"title": "User Interface Developer",
	"dates": "Feb 2011 - April 2011",
	"location": "Portland, OR",
	"description": "Design and Develop User Interface for a global B2B site. CSS Development with focus on cross browser compatibility. Integrating jsp  and CSS into Vignette JSP template, Subversion and Tortoise SVN. Work closely with brand manager, business analyst and development lead to align the application with best user experience. Create wireframes for various applications within the site. Create UIDD for the site. On the basis of CSS and branding of the site, create the style guide for future reference."
	},
	{
	"employer": "Pixon Design",
	"title": "Entreupreneur and Managing Partner",
	"dates": "Feb 2008 - June 2009",
	"location": "Kolkata",
	"description": "Created the UX Design which includes navigation flows, site architecture, wire frames, UI specifications, interface design/functional specifications that capture site processes and all user interaction points with the system. Managed multiple projects in a deadline-driven environment. Analyzed project requirements and planning. Designed the information architecture, flow and documentation for projects ranging from simple websites to online media sharing applications and ecommerce. Developed web promotions for clients as part of advertising campaigns. Designed and developed websites, user interface for web applications, brochures, logos and banner ads."
	},
	{
	"employer": "DPS Technologies India Pvt Ltd",
	"title": "Assistant Manager",
	"dates": "May 2001 - Feb 2008",
	"location": "Kolkata",
	"description": "As the team lead, managed several web projects, from documentation, site architecture, design and development, usability testing and recommendations to implementation. Planning, design, development and implementation of user interface experience, websites and web applications for domestic and international clients. Created the UX Design which includes the navigation flows, site architecture, wire frames, UI specifications, interface design/functional specifications that capture site processes and all user interaction points with the web application. Developed with emphasis on browser and search engine compatibility including keyword research/selection, meta tagging and search engine submissions. Expertise in effective interactive design solutions that meet business, project and design goals, based on standards and guidelines. Worked closely with a team of Visual Designers, Code Developers, Project Managers and Business Representatives to develop the strategy and user interface experience for a variety of projects. Mentored the design team to complete design process on time with best quality for all web projects. Experience in leading junior to middle level designers to deliver high level project. Active role in the recruitment process of designers and developers."
}
]
}
work.display = function() 
{
for (job in work.jobs) {
	$("#workExperience").append(HTMLworkStart);
	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	var formattedEmployerTitle = formattedEmployer + formattedTitle;
	$(".work-entry:last").append(formattedEmployerTitle);
	
	var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
	$(".work-entry:last").append(formattedDates);
	var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
	$(".work-entry:last").append(formattedLocation);
	var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
	$(".work-entry:last").append(formattedDescription);
}
}
work.display();

var projects = {
		"projects": [
		{
		"title": "ccfc",
		"dates": "2 months",
		"description": "A web based application for a premier sports club in Kolkata, Calcutta Cricket and Football Club. Online and dynamic Photo Gallery, Events and Members Area. Role: Requirement Gathering and front-end development. Developing the user interface strategy and UX for improved scalability. Creating user-centered design by completing an in-depth site audit and recommending improvements to usability components.",
		"image": ["images/pr1.jpg"]
		},
		{
		"title": "revivalboutique.com",
		"dates": "3 months",
		"description": "Online shopping store with integrated payment gateway for a New York based fashion store. The content is driven by a content management system controlled by the website administrator. Role: Lead a team of 3 developers to deliver an interactive solution. Requirement Gathering and Project Planning. Designing Company Logo, Site Architecture, Wireframe and User Interface. Usability testing of the design and functionality.",
		"image": ["images/pr2.jpg"]
		}
		] 
	}
		
projects.display = function() 
{
	for (project in projects.projects) {
	$("#projects").append(HTMLprojectStart);
	
	var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
	$(".project-entry:last").append(formattedTitle);
	
	var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
	$(".project-entry:last").append(formattedDates);
	
	var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
	$(".project-entry:last").append(formattedDescription);
	
	var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image);
	$(".project-entry:last").append(formattedImage);
	//if (projects.projects[project].image.length > 0) {
		//for (image in projects.projects[project].image) {
			//var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].image[image]);
			//$(".project-entry:last").append(formattedImage);
		//}
	//}
	}
}
projects.display();

var education = 
{
	"schools": [
	{
	"name": "Loreto College",
	"degree": "Bachelor of Arts",
	"dates": "1997-2000",
	"location": "Kolkata",
	"major": "Communicative English"
	}
	],
	"onlineClasses": [
	{
	"title": "Front end Web Developer - nanodegree",
	"school": "Udacity",
	"dates": "2015"
	},
	{
	"title": "Human Computer Interaction",
	"school": "Coursera",
	"dates": "2012"
	}
	],
	"certifications": [
	{
	"course": "Diploma in Digital Media",
	"school": "Xavier Institute of Communications",
	"dates": "2005",
	"location": "Mumbai"
	},
	{
	"course": "Certified Multimedia Specialist",
	"school": "Arena Multimedia",
	"dates": "1999-2001",
	"location": "Kolkata"
	}
	]
	
}
education.display = function() 
{
for (school in education.schools) {
	$("#education").append(HTMLschoolStart);
	var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
	$(".education-entry:last").append(formattedName);
	var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
	$(".education-entry:last").append(formattedDegree);	
	var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].dates);
	$(".education-entry:last").append(formattedDates);
	var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
	$(".education-entry:last").append(formattedLocation);
	var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
	$(".education-entry:last").append(formattedMajor);
}
for (school in education.onlineClasses) {
	var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineClasses[school].title);
	$(".education-entry:last").append(formattedTitle);
	var formattedSchool = HTMLonlineSchool.replace("%data%", education.onlineClasses[school].school);
	$(".education-entry:last").append(formattedSchool);	
	var formattedDates = HTMLonlineDates.replace("%data%", education.onlineClasses[school].dates);
	$(".education-entry:last").append(formattedDates);
}
	for (school in education.certifications) {
	var formattedCourse = HTMLcertCourse.replace("%data%", education.certifications[school].course);
	$(".education-entry:last").append(formattedCourse);
	var formattedSchool = HTMLcertSchool.replace("%data%", education.certifications[school].school);
	$(".education-entry:last").append(formattedSchool);	
	var formattedDates = HTMLcertDates.replace("%data%", education.certifications[school].dates);
	$(".education-entry:last").append(formattedDates);
	var formattedLocation = HTMLcertLocation.replace("%data%", education.certifications[school].location);
	$(".education-entry:last").append(formattedLocation);
}
}
education.display();


$("#mapDiv").append(googleMap);