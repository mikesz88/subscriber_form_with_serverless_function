import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { StyledButton } from '../../Components/StyledButton';
import { StyledHeader } from '../../Components/StyledHeader';
import { UserAddOutlined} from '@ant-design/icons'

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
    <div style={{ backgroundColor: '#06283D', width: '100vw', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
      <StyledHeader>
      <UserAddOutlined />
        Subscribe
      <UserAddOutlined />
      </StyledHeader>
      <form onSubmit={onSubmit}>
        <div>
          <input
            type="text"
            id="email"
            required
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <label htmlFor="email">
            Email Address
          </label>
        </div>
        <div>
          <input
            type="text"
            id="firstName"
            required
            value={firstName}
            onChange={e => setFirstName(e.target.value)}
          />
          <label htmlFor="firstName">
            First Name
          </label>
        </div>
        <div>
          <input
            type="text"
            id="lastName"
            required
            value={lastName}
            onChange={e => setLastName(e.target.value)}
          />
          <label htmlFor="lastName">
            Last Name
          </label>
        </div>
        <div>
          <input
            type="tel"
            id="phone"
            required
            value={phone}
            onChange={e => setPhone(e.target.value)}
          />
          <label htmlFor="phone">
            Phone
          </label>
        </div>
        <div>
          <StyledButton block type="submit">Subscribe</StyledButton>
        </div>
      </form>
      <nav>
        <Link onClick={resetForm} to="/findSubscriber">Find Subscriber</Link> |{" "}
        <Link onClick={resetForm} to="/unsubscribe">Unsubscribe</Link>
      </nav>
    </div>
  );
};

export default Subscribe;
