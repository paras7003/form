import { useState } from "react";
import "./App.css";

function App() {
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    gender: "",
    contact: "",
    subject: "",
    resume: "",
    url: "",
    about: "",
  });

  const handleChanges = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };
  const resetFunc = () => {
    setValues({ firstname: "", lastname: "", email: "" });
  };
  return (
    <div className="container">
      <h1>Form in React</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name*</label>
        <input
          type="text"
          placeholder="Enter First Name"
          name="firstname"
          onChange={handleChanges}
          required
          value={values.firstname}
        />
        <label htmlFor="lastname">Last Name*</label>
        <input
          type="text"
          placeholder="Enter Last Name"
          name="lastname"
          onChange={handleChanges}
          required
          value={values.lastname}
        />
        <label htmlFor="email">Email*</label>
        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          onChange={handleChanges}
          required
          value={values.email}
        />
        <label htmlFor="contact">Contact*</label>
        <input
          type="text"
          placeholder="Enter Phone"
          name="contact"
          onChange={handleChanges}
        />
        <label htmlFor="gender">Gender</label>
        <input
          type="radio"
          name="gender"
          value="Male"
          onChange={handleChanges}
        />{" "}
        Male
        <input
          type="radio"
          name="gender"
          value="Female"
          onChange={handleChanges}
        />{" "}
        Female
        <input
          type="radio"
          name="gender"
          value="Other"
          onChange={handleChanges}
        />{" "}
        Other
        <label htmlFor="subject">Subject</label>
        <select name="subject" id="subject" onChange={handleChanges}>
          <option value="math">Math</option>
          <option value="physics">Physics</option>
          <option value="english">English</option>
        </select>
        <label htmlFor="resume">Resume</label>
        <input type="file" name="resume" onChange={handleChanges} />
        <label htmlFor="url">URL</label>
        <input
          type="text"
          name="url"
          placeholder="Enter Image URL"
          onChange={handleChanges}
        />
        <label htmlFor="about">About</label>
        <textarea
          name="about"
          cols="30"
          rows="10"
          placeholder="Enter description"
          onChange={handleChanges}
        ></textarea>
        <button type="reset" onClick={resetFunc}>
          Reset
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default App;
