import React, { useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarAlt } from '@fortawesome/free-solid-svg-icons';
import Head from './Head';
import Foot from './Foot';
import axios from 'axios';
import './css/ContactUs.css';

const ContactUs = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [phone, setPhone] = useState('');
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [requirements, setRequirements] = useState('');
  const [username, setUsername] = useState('');

  useEffect(() => {
    const username = localStorage.getItem('username');
    setUsername(username);
  }, []);

  const data = {
    name: name,
    email: email,
    country: country,
    phoneNumber: phone,
    adults: adults,
    children: children,
    checkInDate: checkIn,
    checkOutDate: checkOut,
    requirements: requirements,
    username: username,
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:8080/book/in`, data);

    // Handle form submission logic here

    // Reset form fields
    setName('');
    setEmail('');
    setCountry('');
    setPhone('');
    setAdults(1);
    setChildren(0);
    setCheckIn('');
    setCheckOut('');
    setRequirements('');
  };

  return (
    <div>

      <div className="cont">
        <main>
      <Head />
          <div>
            <h2>Contact Us</h2>
          </div>
          <div>
            <form onSubmit={handleSubmit} className="co-form">
              <div>
                <label htmlFor="name" className="co-label">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="co-label">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="country" className="co-label">
                  Country:
                </label>
                <input
                  type="text"
                  id="country"
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="phone" className="co-label">
                  Phone&nbsp;Number:
                </label>
                <input
                  type="tel"
                  id="phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  required
                />
              </div>
              <div>
                <label htmlFor="adults" className="co-label">
                  Adults:
                </label>
                <input
                  type="number"
                  id="adults"
                  value={adults}
                  onChange={(e) => setAdults(parseInt(e.target.value))}
                  required
                />
              </div>
              <div>
                <label htmlFor="children" className="co-label">
                  Children:
                </label>
                <input
                  type="number"
                  id="children"
                  value={children}
                  onChange={(e) => setChildren(parseInt(e.target.value))}
                  required
                />
              </div>
              <div>
                <label htmlFor="checkIn" className="co-label">
                  Check&nbsp;in&nbsp;Date:
                </label>
                <div className="date-input">
                  <input
                    type="text"
                    id="checkIn"
                    value={checkIn}
                    onChange={(e) => setCheckIn(e.target.value)}
                    required
                  />
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="date-icon"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="checkOut" className="co-label">
                  Check&nbsp;out&nbsp;Date:
                </label>
                <div className="date-input">
                  <input
                    type="text"
                    id="checkOut"
                    value={checkOut}
                    onChange={(e) => setCheckOut(e.target.value)}
                    required
                  />
                  <FontAwesomeIcon
                    icon={faCalendarAlt}
                    className="date-icon"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="requirements" className="co-label">
                  Requirements:
                </label>
                <textarea
                  id="requirements"
                  value={requirements}
                  onChange={(e) => setRequirements(e.target.value)}
                  rows={4}
                ></textarea>
              </div>
              <button type="submit" className="cobutton">
                Book Now
              </button>
            </form>
          </div>
      <Foot />
        </main>
      </div>
    </div>
  );
};

export default ContactUs;
