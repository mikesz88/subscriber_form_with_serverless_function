import React, {useState} from "react";
import { Link } from "react-router-dom";
import "./subscribe.css";

const Subscribe = () => {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');

  const onSubmit = (event) => {
    event.preventDefault();
    console.log('email', email);
    console.log('firstName', firstName);
    console.log('lastName', lastName);
    console.log('phone', phone);
  }; 

  return (
    <div>
      <h1>Subscribe to my email list!</h1>
      <form onSubmit={onSubmit}>
        <div className="input-group">
          <input type="text" id="email" required className="input" value={email} onChange={(e) => setEmail(e.target.value)} />
          <label htmlFor="email" className="input-label">Email Address</label>
        </div>
        <div className="input-group">
          <input type="text" id="firstName" required className="input" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          <label htmlFor="firstName" className="input-label">First Name</label>
        </div>
        <div className="input-group">
          <input type="text" id="lastName" required className="input" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          <label htmlFor="lastName" className="input-label">Last Name</label>
        </div>
        <div className="input-group">
          <input type="tel" id="phone" required className="input" value={phone} onChange={(e) => setPhone(e.target.value)} />
          <label htmlFor="phone" className="input-label">Phone</label>
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
}

export default Subscribe;
