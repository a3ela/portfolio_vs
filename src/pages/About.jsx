// src/pages/About.jsx
import "../styles/about.css";
import { FaDownload, FaPaperPlane, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

// Replace with your actual image or use a placeholder
import ProfileImage from "../assets/profile.png"; // or use a placeholder

export default function About() {
  const handleDownloadCV = () => {
    // Replace with your actual CV URL
    const cvUrl = "/path-to-your-cv.pdf";
    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = "your-name-cv.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSayHello = () => {
    document.getElementById("contact").scrollIntoView({ behavior: "smooth" });
  };

  const socialLinks = [
    { icon: <FaGithub />, url: "https://github.com/yourusername", label: "GitHub" },
    { icon: <FaLinkedin />, url: "https://linkedin.com/in/yourusername", label: "LinkedIn" },
    { icon: <FaTwitter />, url: "https://twitter.com/yourusername", label: "Twitter" },
  ];

  return (
    <section className="about-wrapper" id="about">
      <div className="title-container">
        <h2 className="section-title">A Little About Me</h2>
        <p className="about-subtitle">Get to know the person behind the code</p>
      </div>

      <div className="about-content">
        <div className="about-image-container">
          <div className="image-wrapper">
            <div className="image-frame"></div>
            <img 
              src={ProfileImage || "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"} 
              alt="Your Name" 
              className="profile-image"
            />
            <div className="image-glow"></div>
          </div>
          
          <div className="social-links">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        <div className="about-bio-container">
          <div className="bio-content">
            <h3 className="bio-title">
              Hi 👋, I'm <span className="highlight">Abel!</span>
            </h3>
            
            <div className="bio-text">
              <p>
                I'm a passionate developer who loves creating beautiful, functional web experiences. 
                With over 5 years of experience in frontend development, I specialize in building 
                modern, responsive applications using React, TypeScript, and modern web technologies.
              </p>
              
              <p>
                My approach combines technical expertise with a strong eye for design. I believe 
                that great software should not only work well but also provide an enjoyable 
                experience for users.
              </p>
              
              <p>
                When I'm not coding, you can find me exploring new technologies, contributing to 
                open-source projects, or enjoying the great outdoors.
              </p>
            </div>

            <div className="bio-actions">
              <button className="btn btn-primary" onClick={handleDownloadCV}>
                <FaDownload />
                Download CV
              </button>
              <button className="btn btn-secondary" onClick={handleSayHello}>
                <FaPaperPlane />
                Say Hello
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}