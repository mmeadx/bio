console.log("skills.js running");

const skillBox = document.getElementById('skillBox');

const skills = ["JavaScript", "Python", "Node.js", "React.js", "DOM Manipulation", "npm", "Express.js", "jQuery", "d3.js", "EJS", "RESTful API", "Leaflet & GIS", "MatPlotLib", "Numpy", "Tweepy", "Pandas", "jupyter notebook", "SQLAlchemy", "Mongoose", "ETL Processes", "Git", "GitHub", "Tableau", "Heroku", "Bootstrap", "Advanced Excel", "Wordpress", "Big Data", "R", "Codepen.io", "VS Code", "Atom", "Adobe Creative Suite", "MongoDB", "SQL", "postgreSQL", "SQLite", "HTML5", "CSS3"]

function showSkills(skillList) {
    
    skillBox.innerHTML = '';
    skillList.forEach((skill) => {
        const skillEl = document.createElement('div');

        skillEl.classList.add('skill');

        skillEl.innerHTML = `${skill}`;

        skillBox.appendChild(skillEl);
    })
};

showSkills(skills);
