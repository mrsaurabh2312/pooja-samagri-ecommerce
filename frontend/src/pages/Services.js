import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Services() {
  const [services, setServices] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/api/services')
      .then(res => setServices(res.data))
      .catch(err => alert('Could not fetch services'));
  }, []);

  return (
    <div>
      <h2>Pooja Services</h2>
      {services.map(s => (
        <div key={s._id} style={{border: '1px solid #ccc', margin: 5, padding: 10}}>
          <h4>{s.name}</h4>
          <p>{s.description}</p>
          <b>₹{s.price}</b>
        </div>
      ))}
    </div>
  );
}

export default Services;
