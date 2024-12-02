import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";
const skills = [
  {
    skill: "HTML",
    level: "advanced",
    color: "green",
  },
  {
    skill: "Javascript",
    level: "advanced",
    color: "orange",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "red",
  },
  {
    skill: "React",
    level: "intermediate",
    color: "violet",
  },
  {
    skill: "Nodejs",
    level: "intermediate",
    color: "yellow",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}
function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>
        {level === "beginner" && "👍"}
        {level === "intermediate" && "👌"}
        {level === "advanced" && "💪"}
      </span>
    </div>
  );
}
function Avatar() {
  return <img className="avatar" src="dream.png" alt="Student" />;
}
function Intro() {
  return (
    <div>
      <h1>Arun Reddy</h1>
      <p>
        Full Stack Web Developer and pursuing my B.Tech Final Year at Guru Nanak
        Institute Of Technology,Ibrahimpatnam in Artificial Intelligence and
        Data Science.
      </p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
