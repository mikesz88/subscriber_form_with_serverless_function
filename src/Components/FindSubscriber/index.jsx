import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

const FindSubscriber = () => {
  const [email, setEmail] = useState('');
  const [subscriberData, setSubscriberData] = useState([]);

  const resetForm = () => {
    setEmail('');
    setSubscriberData([]);
  }

  const onSubmit = async e => {
    e.preventDefault();
    const headers = {
      "Content-Type": "application/json"
    };
    const body = {
      params: {
        email
      }
    }
    try {
      const response = await axios.get("/api/subscribe", body, { headers })
      setSubscriberData(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <h1>Find Subscriber</h1>
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
          <button type='submit'>FIND</button>
        </div>
      </form>
      {subscriberData ? subscriberData.map(subscriber => (
        <div key={subscriber.id}>
          <div>{subscriber.email_address}</div>
          <div>{subscriber.first_name}</div>
          <div>{subscriber.fields.last_name}</div>
          <div>{subscriber.fields.phone}</div>
        <button onClick={resetForm}>Find Another Subscriber</button>
        </div>
      ))
      : <div>NO DATA</div>}
      <nav>
        <Link onClick={resetForm} to='/'>Subscribe</Link> |{" "}
        <Link onClick={resetForm} to="/unsubscribe">Unsubscribe</Link>
      </nav>
    </div>
  )
}

export default FindSubscriber