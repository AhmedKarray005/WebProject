// DonationPage2.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DonationPage.css';

const DonationPage2 = () => {
  const url = 'http://localhost:6050/api/Donations';
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    const headers = {
      'Authorization': `Bearer ${token}`
    };

    // Fetch donations
    axios.get(url, { headers })
      .then((res) => {
        setDonations(res.data.Donations);
      })
      .catch((error) => {
        console.error(error.response.data.msg);
      });
  }, []);

  return (
    <div className="donation-page">
      <div className="donation-table">
        <h4>Donations</h4>
        <table>
          <thead>
            <tr>
              <th>Donor ID</th>
              <th>Coordinates</th>
              <th>Address</th>
              <th>Time</th>
              <th>Day</th>
              <th>State</th>
              <th>Nature</th>
              <th>Weight</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {donations.map((donation) => (
              <tr key={donation.id}>
                <td>{donation.donor_id}</td>
                <td>{donation.coordinates}</td>
                <td>{donation.address}</td>
                <td>{donation.time}</td>
                <td>{donation.day}</td>
                <td>{donation.state}</td>
                <td>{donation.nature}</td>
                <td>{donation.weight}</td>
                <td>{donation.quantity}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button type="button" className="send-request-button">Call The Donator</button>

      </div>
      
    </div>
    
  );
};

export default DonationPage2;
