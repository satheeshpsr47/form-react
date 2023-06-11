import React from "react";
import "./styles.css";

export default function Form() {
  const [starWarsData, setStarWarsData] = React.useState({});

  const [data, setdata] = React.useState({
    email_id: "",
    password: "",
    finalPassword: "",
    joinnewsletter: false
  });

  function handleclick(event) {
    const { name, value, type, checked } = event.target;

    setdata((prev) => {
      return {
        ...prev,
        [name]: type === "checkbox" ? checked : value
      };
    });
  }
  function handlesubmit(event) {
    event.preventDefault();
    if (data.password === data.finalPassword) {
      console.log("successfully signed up");
    } else {
      console.log("passwords does not match");
      return;
    }
    if (data.joinnewsletter) {
      console.log("thanks for sign up");
    }
  }
  return (
    <div className="form-container">
      <form className="form--data " onSubmit={handlesubmit}>
        <input
          type="email"
          placeholder="enter email id"
          name="email_id"
          value={data.email_id}
          onChange={handleclick}
          className="form--input"
        ></input>
        <input
          type="password"
          placeholder="enter your password"
          name="password"
          value={data.password}
          onChange={handleclick}
          className="form--input"
        ></input>
        <input
          type="password"
          placeholder="confirm password"
          name="finalPassword"
          value={data.finalPassword}
          onChange={handleclick}
          className="form--input"
        ></input>
        <div className="form--marketing">
          <input
            type="checkbox"
            id="form_toggle"
            name="joinnewsletter"
            checked={data.joinnewsletter}
            onChange={handleclick}
          ></input>
          <label htmlFor="form_toggle">I want to join the newsletter</label>
        </div>
        <button className="form--submit">sign up</button>
      </form>
      <div>
        <pre>{JSON.stringify(starWarsData, null, 2)}</pre>
      </div>
    </div>
  );
}
