import { useRouter } from "next/router";
import { projects } from "@/data"; // Make sure your projects data is properly imported

const ProjectPage = () => {
  const router = useRouter();
  const { projectName } = router.query;

  // Handle case where projectName isn't available yet (e.g., during SSR)
  if (!projectName) {
    return <p>Loading...</p>;
  }

  // Find the project from the data using the projectName
  const project = projects.find((item) => encodeURIComponent(item.title) === projectName);

  // If project doesn't exist, show an error or 404 message
  if (!project) {
    return <p>Project not found</p>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.des}</p>
      <div>
        <h2>Details</h2>
        <img src={project.img} alt="Project cover" />
        {/* Add more project details as needed */}
      </div>
      <div>
        <a href={project.desktopAppLink} target="_blank" rel="noopener noreferrer">Desktop App</a>
        <a href={project.playStoreLink} target="_blank" rel="noopener noreferrer">Play Store</a>
        <a href={project.webLink} target="_blank" rel="noopener noreferrer">Web</a>
      </div>
    </div>
  );
};

export default ProjectPage;
