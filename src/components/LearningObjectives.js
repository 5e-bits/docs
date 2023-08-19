import React from "react";

export default function LearningObjectives({ children, objectives }) {
  return (
    <>
      <h2>✅ Learning Objectives</h2>
      <ol>
        {objectives.map((obj) => {
          return <li>{obj}</li>;
        })}
      </ol>
      <div>{children}</div>
    </>
  );
}
