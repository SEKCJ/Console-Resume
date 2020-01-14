var full_name = "Cesar Juarez";
var career = "Software Engineer";
var description = "Creating programs so they can take over the world that are ran by artificial intelligence.";
var interests = ["Programming", "body-sculpt", "protein", "c4", "working out", "weight lifting", "partying", "making moneys"];
var positions = [
    {
        name: "Vivint",
        title: "Sales Representative",
        short_description: "Door to Door Salesman"
    },
    {
        name: "Home Depot",
        title: "Sales Specialist",
        short_description: "Met sales quotas, stocked items throughout department, handled special systems."
    }
];
var skills = [
    { 
        skill: "mind control",
        cool: true,
    },
    { 
        skill: "fastest man alive",
        cool: true,
    },
    { 
        skill: "suerhuman strength",
        cool: true,
    },
    { 
        skill: "teleportation",
        cool: true,
    },
    { 
        skill: "sales process",
        cool: false,
    },
    { 
        skill: "programming",
        cool: false,
    },
    { 
        skill: "reading",
        cool: false,
    },
    { 
        skill: "soccer",
        cool: true,
    },
];

function space(){
    console.log(" ");
};

// Info Block
console.log("Name:", full_name.toUpperCase());
console.log("Career:", career);
console.log("Description:", description);

// Interest block
space()
console.log("My Interests:");
for (let x = 0; x < interests.length; ++x){
    console.log("*", interests[x]);
}

// Job Block
function displayPosition(company_name, job_title, desc) {
    console.log("*", job_title, "at", company_name, "-", desc);
}

space();
console.log("My Previous Experience:");
for ( let i=0; i < positions.length; ++i) {
    displayPosition(positions[i].name, positions[i].title, positions[i].short_description)
}

// Skills Block
space()
console.log("My Skills:")
function displaySkill(skill_name, bool) {
    if (bool == true) {
        console.log("* BAM:", skill_name)
    } else {
        console.log("*", skill_name)
    }
};

for (let y = 0; y < skills.length; ++y) {
    displaySkill(skills[y].skill, skills[y].cool)
};