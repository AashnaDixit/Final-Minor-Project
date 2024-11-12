import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import Image from "next/image";
import styles from './style.module.scss';

const projects = [
  { src: "dashboard.jpg", title: "User-Friendly Dashboard", description: "This is a description for the dashboard." },
  { src: "facial_recognition.jpg", title: "Facial Recognition Technology", description: "This is a description for the facial recognition Technology." },
  { src: "google.jpg", title: "High-Level Security and Privacy", description: "This is a description for the Google integration." },
  { src: "maven.jpg", title: "Real-Time Monitoring of Dark Web Activity", description: "This is a Real-Time Monitoring of Dark Web Activity." }
];

export default function Projects() {
  const projectContainerRef = useRef(null);

  useEffect(() => {
    if (projectContainerRef.current) {
      const projectElements = projectContainerRef.current.children;

      const animateIn = () => {
        gsap.fromTo(
          projectElements,
          { opacity: 0, x: (i) => (i % 2 === 0 ? '-100%' : '100%'), y: (i) => (i < 2 ? '-100%' : '100%') },
          { opacity: 1, x: 0, y: 0, duration: 0.8, stagger: 0.2, ease: "power2.out" }
        );
      };

      const animateOut = () => {
        gsap.to(projectElements, {
          opacity: 0, x: (i) => (i % 2 === 0 ? '-100%' : '100%'), y: (i) => (i < 2 ? '-100%' : '100%'), duration: 0.8, stagger: 0.2, ease: "power2.in"
        });
      };

      projectContainerRef.current.addEventListener("mouseenter", animateIn);
      projectContainerRef.current.addEventListener("mouseleave", animateOut);

      return () => {
        // Only remove the event listeners if projectContainerRef.current is defined
        if (projectContainerRef.current) {
          projectContainerRef.current.removeEventListener("mouseenter", animateIn);
          projectContainerRef.current.removeEventListener("mouseleave", animateOut);
        }
      };
    }
  }, []);

  return (
    <main className={styles.projects}>
      <div className={styles.body} ref={projectContainerRef}>
        {projects.map((project, index) => (
          <div key={index} className={styles.projectContainer}>
            <div className={styles.project}>
              <Image src={`/images/${project.src}`} width={300} height={300} alt={project.title} className={styles.projectImage} />
              <div className={styles.projectInfo}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
