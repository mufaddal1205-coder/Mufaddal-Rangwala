import React, { useState, useRef } from "react";
import "./App.css";

function App() {

  // useState
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [skills, setSkills] = useState("");
  const [education, setEducation] = useState("");
  const [experience, setExperience] = useState("");

  // useRef
  const resumeRef = useRef();

  // Print Resume
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="container">

      {/* Form Section */}
      <div className="form-section">

        <h1>Resume Builder</h1>

        <input
          type="text"
          placeholder="Enter Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter Phone Number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <textarea
          placeholder="Enter Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        ></textarea>

        <textarea
          placeholder="Enter Skills"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        ></textarea>

        <textarea
          placeholder="Enter Education"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
        ></textarea>

        <textarea
          placeholder="Enter Experience"
          value={experience}
          onChange={(e) => setExperience(e.target.value)}
        ></textarea>

        <button onClick={handlePrint}>
          Print Resume
        </button>

      </div>

      {/* Resume Preview */}
      <div className="resume-preview" ref={resumeRef}>

        <h1>{name || "Your Name"}</h1>

        <p>
          <strong>Email:</strong> {email}
        </p>

        <p>
          <strong>Phone:</strong> {phone}
        </p>

        <p>
          <strong>Address:</strong> {address}
        </p>

        <hr />

        <h2>Skills</h2>
        <p>{skills}</p>

        <h2>Education</h2>
        <p>{education}</p>

        <h2>Experience</h2>
        <p>{experience}</p>

      </div>

    </div>
  );
}

export default App;