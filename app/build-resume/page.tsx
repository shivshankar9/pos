// "use client"
// import React, { useState } from "react";
// import { Container, Grid, TextField, Button, Paper, Typography, Box } from "@mui/material";
// import jsPDF from "jspdf";

// const ResumeBuilder = () => {
//   const [formData, setFormData] = useState({
//     fullName: "John Doe",
//     email: "john.doe@example.com",
//     phone: "+1 234 567 890",
//     address: "123 Main Street, New York, NY 10001",
//     jobObjective: "Seeking a challenging role as a Full Stack Developer...",
//     education: "B.Sc. in Computer Science, XYZ University, 2020",
//     knowledge: "SDLC, Agile, Cloud Computing, UI/UX Design",
//     certifications: "AWS Certified Developer, 2023 | React Certified Developer, 2022",
//     technicalSkills: "Java, Python, React, Node.js, MongoDB, AWS",
//     profileSummary: "Proven expertise in full-stack development...",
//     experience: "Software Engineer at ABC Corp (2020-Present)...",
//     projects: "E-Commerce Platform | Chatbot System | Weather App",
//     personalDetails: "DOB: Jan 1, 1995 | Languages: English, Spanish",
//   });

//   const [resumePreview, setResumePreview] = useState("");

//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const generateResumePreview = () => {
//     const preview = `
//       <div style="font-family: Arial, sans-serif; line-height: 1.6;">
//         <h1 style="text-align: center; color: #333;">${formData.fullName}</h1>
//         <p style="text-align: center; color: #555;">
//           ${formData.email} | ${formData.phone} | ${formData.address}
//         </p>
//         <hr style="border: 1px solid #ddd; margin: 20px 0;" />
//         <h2 style="color: #333;">Job Objective</h2>
//         <p>${formData.jobObjective}</p>
//         <h2 style="color: #333;">Education</h2>
//         <p>${formData.education}</p>
//         <h2 style="color: #333;">Knowledge Purview</h2>
//         <p>${formData.knowledge}</p>
//         <h2 style="color: #333;">Certifications</h2>
//         <p>${formData.certifications}</p>
//         <h2 style="color: #333;">Technical Skills</h2>
//         <p>${formData.technicalSkills}</p>
//         <h2 style="color: #333;">Profile Summary</h2>
//         <p>${formData.profileSummary}</p>
//         <h2 style="color: #333;">Experience</h2>
//         <p>${formData.experience}</p>
//         <h2 style="color: #333;">Projects</h2>
//         <p>${formData.projects}</p>
//         <h2 style="color: #333;">Personal Details</h2>
//         <p>${formData.personalDetails}</p>
//       </div>
//     `;
//     setResumePreview(preview);
//   };

//   const downloadPDF = () => {
//     const doc = new jsPDF();
//     doc.html(resumePreview, {
//       callback: (doc) => {
//         doc.save("resume.pdf");
//       },
//       x: 10,
//       y: 10,
//     });
//   };

//   return (
//     <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
//       <Typography variant="h3" align="center" gutterBottom>
//         AI-Powered Resume Builder
//       </Typography>
//       <Grid container spacing={4}>
//         {/* Form Section */}
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} sx={{ p: 3 }}>
//             <Typography variant="h5" gutterBottom>
//               Fill Your Details
//             </Typography>
//             {Object.keys(formData).map((key) => (
//               <TextField
//                 key={key}
//                 name={key}
//                 label={key.replace(/([A-Z])/g, " $1").replace(/^./, (str) => str.toUpperCase())}
//                 value={formData[key]}
//                 onChange={handleInputChange}
//                 fullWidth
//                 multiline
//                 sx={{ mb: 2 }}
//               />
//             ))}
//             <Button
//               variant="contained"
//               color="primary"
//               fullWidth
//               onClick={generateResumePreview}
//             >
//               Generate Resume
//             </Button>
//           </Paper>
//         </Grid>

//         {/* Resume Preview Section */}
//         <Grid item xs={12} md={6}>
//           <Paper elevation={3} sx={{ p: 3 }}>
//             <Typography variant="h5" gutterBottom>
//               Resume Preview
//             </Typography>
//             <Box
//               dangerouslySetInnerHTML={{ __html: resumePreview }}
//               sx={{
//                 border: "1px solid #ddd",
//                 padding: 2,
//                 minHeight: "400px",
//                 fontFamily: "Arial, sans-serif",
//                 lineHeight: 1.6,
//                 backgroundColor: "#f9f9f9",
//               }}
//             />
//             {resumePreview && (
//               <Box sx={{ mt: 3 }}>
//                 <Button variant="contained" color="success" onClick={downloadPDF} fullWidth>
//                   Download PDF
//                 </Button>
//               </Box>
//             )}
//           </Paper>
//         </Grid>
//       </Grid>
//     </Container>
//   );
// };

// export default ResumeBuilder;
