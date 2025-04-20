import styles from './Resume1.module.css'
function Resume1({userInfo}) {

  return (
    <div className={styles.main}>
      <h1>{userInfo.name.firstname + ' ' + userInfo.name.lastname}</h1>
      <label>Email :</label>
      <p style={{
        display: 'inline'
      }}>{userInfo.email}</p><br/>
      <label htmlFor="">Mobile :</label>
      <p style={{
        display: 'inline'
      }}>{userInfo.mobile}</p>
      <br/>
      <br/>
      <h4>Summary</h4>
      <hr/>
      <p>
        {userInfo.summary}
      </p>
      <br/>
      <h4>Technical Skills</h4>
      <hr/>
      <ul>
        {userInfo
          .skills
          .map((item, index) => (
            <li key={index}>{item}</li>
          ))}
      </ul>
      <br/>
      <h4>Experience</h4>
      <hr/>
      <h5>React Developer | Tata Consultance Services</h5>
      <h6>
        <i>Oct 2021 - Present</i>
      </h6>
      <ul>
        <li>Reduced the development process by 20-30% by creating a Custom UI library
          using ReactJS, HTML and CSS.</li>
        <li>Achieved a 45% boost in application performance by modernizing the legacy
          ReactJS application to its latest version, ensuring compatibility with modern
          libraries such as Redux Toolkit, React Router, React/Tanstack Query and Hooks.</li>
        <li>Translated design mockups into responsive and visually appealing web pages.</li>
        <li>Worked with cross-functional teams, including UX designers and backend
          developers, to deliver high-quality results.</li>
        <li>Identified and resolved software defects, elevating application stability
          and maintaining high code quality through proactive code reviews and proposed
          improvements.</li>
          <li>Participated in the creation of High-Level Design (HLD) and Low-Level Design (LLD) documents to outline the
architecture and detailed components of the system.</li>
      </ul>
      <br/>
      <h5>Projects</h5>
      <hr/>
      <h6>Allianz | <span><i>React.js,React-Router</i></span></h6>
      <ul>
        <li>Created a page to enter voucher details.</li>
        <li>Perform validation as per the business requirement on the data entered by the user.</li>
        <li>Populating the supplier information and other default details based on the user input.</li>
        <li>Sending mail notification once the payment request has been submitted for approval.</li>
      </ul>
      <h6>Allianz1 | <span><i>React.js,React-Router</i></span></h6>
      <ul>
        <li>Created a page to enter voucher details.</li>
        <li>Perform validation as per the business requirement on the data entered by the user.</li>
        <li>Populating the supplier information and other default details based on the user input.</li>
        <li>Sending mail notification once the payment request has been submitted for approval.</li>
      </ul>
      <br/>
      <h5>Education</h5>
      <hr/>
      
    </div>
  )
};

export default Resume1
