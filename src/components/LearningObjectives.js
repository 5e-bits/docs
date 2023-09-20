import React from "react";

export default function LearningObjectives({ children, objectives }) {
  return (
    <>
      <h2>✅ Learning Objectives</h2>
      <ol>
        {objectives.map((obj, i) => {
          return <li key={i}>{obj}</li>;
        })}
      </ol>
      <div>{children}</div>
    </>
  );
}
