import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Executive, Automation & Digitization</h4>
                <h5>Yotta Data Services Pvt Ltd</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              [Description will be provided later]
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>[Previous Role Placeholder]</h4>
                <h5>[Previous Company]</h5>
              </div>
              <h3>202X</h3>
            </div>
            <p>
              [Pending user input for previous roles to complete the timeline. This placeholder maintains layout.]
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>[Earlier Role Placeholder]</h4>
                <h5>[Earlier Company]</h5>
              </div>
              <h3>202X</h3>
            </div>
            <p>
              [Pending user input for previous roles to complete the timeline. This placeholder maintains layout.]
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
