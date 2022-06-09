import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Unsubscribe = () => {
  const [email, setEmail] = useState('');
  const [success, setSuccess] = useState(null);

  const resetForm = () => setEmail('');

  const onSubmit = async e => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json"
    };
    const body = {
      email
    }
    try {
      await axios.put("/api/subscribe", body, { headers });
      setSuccess(true);
      resetForm();
    } catch (error) {
      console.error(error);
      setSuccess(false);
    }
  }

  return (
    <div>
      <h1>Unsubscribe</h1>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            id="email"
          />
        </div>
        <div>
          <button type="submit">Unsubscribe</button>
        </div>
      </form>
      {success === true
      ? <div>CONTACT SUCCESSFULLY UNSUBSCRIBED</div>
      : success === false
      ? <div>CONTACT DOES NOT EXIST</div>
      : ''
      }
      <nav>
        <Link onClick={resetForm} to='/'>Subscribe</Link> |{" "}
        <Link onClick={resetForm} to="/findSubscriber">Find Subscriber</Link>
      </nav>
    </div>
  )
}

export default Unsubscribe