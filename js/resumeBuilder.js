// var formattedName = HTMLheaderName.replace("%data%", "Blake Gould");

// var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

// $("#header").prepend(formattedRole);
// $("#header").prepend(formattedName);

// $("#main").append(bio.name);

// var education = {};
// education["recentSchoolName"] = "Marian University";
// education["recentSchoolYears"] = "2 Years";
// education["recentSchoolCity"] = "Indianapolis";

// $("#main").append(work["position"]);
// $("#main").append(education.recentSchoolCity);
// Even though work and education were defined with dot and bracket notation, they can still be called with their counterpart. Cool! Is this because there are no classes, only objects and and object is an object regardless of what notation was used to define it?

var bio = {
  "name" : "Blake Gould",
  "role" : "Web Developer",
  "contacts" : {
    "mobile" : "317-759-1026",
    "email" : "gouldbf@gmail.com",
    "github" : "gouldbf",
    "twitter" : "@Gould_BF",
    "location" : "Colorado Springs, Colorado"
  },
  "welcomeMessage" : "You have reached the internet resume of Blake Gould",
  "skills" : ["Python", "Teaching", "Mathematics", "Policing"],
  "biopic" : "images/headshot.jpg",
  "display" : "" // function goes here
};

var education = {
  "schools" : [
    {
      "name" : "Washington State University",
      "location" : "Pullman, WA",
      "degree" : "Bachelor of Arts",
      "majors" : "Criminal Justice",
      "dates" : "2011",
      "url" : "http://www.wsu.edu"
    },
    {
      "name" : "Marian University",
      "location" : "Indianapolis, IN",
      "degree" : "Master of Arts",
      "major" : "Teaching Mathematics",
      "dates" : "2013",
      "url" : ""
    }
  ]
};

var work = {
  "jobs" : [
    {
      "employer" : "Indianapolis Public Schools",
      "title" : "Athletic Director",
      "location" : "Indianapolis, Indiana",
      "dates" : "August 2013-June 2013",
      "description" : "Managed staff of coaches and trainers, scheduled events and transportation, managed budget and fundraising."
    },
    {
      "employer" : "Harshman Magnet Middle School",
      "title" : "Math Interventionist/Data Specialist",
      "location" : "Indianapolis, Indiana",
      "dates" : "August 2013-June 2013",
      "description" : "Collected and analyzed assessment data school wide to identify candidates for intervention. Developed and performed interventions."
    }
  ]
};

var projects = {
  "projects" : [
    {
      "title" : "Field Day",
      "dates" : "May-June 2014",
      "description" : "Planned the school-wide field day",
      "images" : {
        "image1" : "images/fieldDay1.jpg",
        "image2" : "images/fieldDay2.jpg"
      }
    },
    {
      "title" : "Athletics",
      "dates" : "August 2013-June2014",
      "description" : "Ran the athletics department for the 2013-2014 school year",
      "images" : {
        "image1" : "images/basketball.jpg",
        "image2" : "images/wrestling.jpg"
      }
    }
  ]
};

if (bio.skills.length >0) {
  $("#header").append(HTMLskillsStart);

  var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkill);
  formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
  $("#skills").append(formattedSkill);
}


// for (skill in bio.skills) {
//   $("#header").append(HTMLskillsStart);

//   var formattedSkill = HTMLskills.replace("%data%", bio.skills[skill]);

//   $("#skills:last").append(
//     formattedSkill);
// }

function displayWork() {
  for (job in work.jobs) {
    // create new div for work experience
    $("#workExperience").append(HTMLworkStart);
    // concat employer and title
    var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var formattedEmployerTitle = formattedEmployer + formattedTitle;
    $(".work-entry:last").append(
      formattedEmployerTitle);

    var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    $(".work-entry:last").append(formattedDates);

    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
  }
}

displayWork();


$(document).click(function(loc) {
  var x = loc.pageX;
  var y = loc.pageY;

  logClicks(x,y);
});

$("#main").append(internationalizeButton);

function inName(namesString) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0.1).toUpperCase() + name[0].slice(1).toLowerCase();
  return name[0] +" "+name[1];
}

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
  }
}

projects.display();











