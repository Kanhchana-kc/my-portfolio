// pages/ProjectDetail.jsx
import React from "react";
import { useParams, Link } from "react-router-dom";

export default function ProjectDetail() {
  const { id } = useParams();

  // You can fetch project info by ID from API or local data
  const project = {
    title: `Project ${id}`,
    description: `This is a detailed description for Project ${id}.`,
    liveLink: "https://yourproject.vercel.app",
  };

  return (
    <div className="text-center py-5">
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <a href={project.liveLink} target="_blank" rel="noreferrer" className="btn btn-primary mt-3">
        View Live
      </a>
      <br />
      <Link to="/" className="btn btn-secondary mt-3">Back Home</Link>
    </div>
  );
}
