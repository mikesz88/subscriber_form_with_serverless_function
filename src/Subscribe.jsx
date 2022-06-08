import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./subscribe.css";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const resetForm = () => {
    setEmail("");
    setFirstName("");
    setLastName("");
    setPhone("");
  };

  const onSubmit = async e => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json"
    };
    const body = {
      email,
      firstName,
      lastName,
      phone
    };
    try {
      await axios.post("/api/subscribe", body, { headers });
      resetForm();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Subscribe to my email list!</h1>
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input
            type="text"
            id="email"
            required
            className="input"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="email" className="input-label">
            Email Address
          </label>
        </div>
        <div className="input-group">
          <input
            type="text"
            id="firstName"
            required
            className="input"
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <label htmlFor="firstName" className="input-label">
            First Name
          </label>
        </div>
        <div className="input-group">
          <input
            type="text"
            id="lastName"
            required
            className="input"
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <label htmlFor="lastName" className="input-label">
            Last Name
          </label>
        </div>
        <div className="input-group">
          <input
            type="tel"
            id="phone"
            required
            className="input"
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <label htmlFor="phone" className="input-label">
            Phone
          </label>
        </div>
        <div>
          <button type="submit">Subscribe</button>
        </div>
      </form>
      <nav>
        <Link to="/findSubscriber">Find Subscriber</Link> |{" "}
        <Link to="/unsubscribe">Unsubscribe</Link>
      </nav>
    </div>
  );
};

export default Subscribe;
