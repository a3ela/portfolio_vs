import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <div className="nav-column">
      <div className="nav-label">NAVIGATION</div>

      <nav>
        <ul>
          <li>
            <span className="nav-index">A</span>
            <a href="#projects">Work I’m Proud Of</a>
          </li>

          <li>
            <span className="nav-index">B</span>
            <a href="#about">A Little About Me</a>
          </li>

          <li>
            <span className="nav-index">C</span>
            <a href="#skills">Things I Can Do</a>
          </li>

          <li>
            <span className="nav-index">D</span>
            <a href="# contact">Let’s Talk</a>
          </li>
        </ul>
      </nav>

      <div className="footer-note">
        <p>← This is a Spline Scene.</p>
        <p>I really, really like 3D.</p>
      </div>
    </div>
  );
};

export default Navigation;
