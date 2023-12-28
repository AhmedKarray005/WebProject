import React, { useState,useEffect } from 'react';
import { TextField, Button } from '@mui/material';
import './Donation.css';
import axios from 'axios';




  


const DonationForm = () => {
  const [formValues, setFormValues] = useState({
    donor_id:null,
    coordinates: '',
    address: '',
    time: '',
    day: '',
    state: 'pending',
    nature: '',
    weight: '',
    quantity: '',
  });

  const url = 'http://localhost:6050/api/Profile';
  const [Donor, setDonor] = useState({
            donor_id:null,
            first_name: "",
            last_name: "",
            birthday: "",
            address: "",
            phone_number: "",
            email_address: "",
            password: ""
});     
  
  useEffect(() => {
   
      const token = localStorage.getItem("token");
      console.log(token)    
      const headers = {
                'Authorization': `Bearer ${token}` }
        axios.get(`${url}`, { headers })
          .then((res) => {
              console.log(res)
            setDonor(res.data.Donor);
            console.log(Donor)
          })
          .catch((error) => {
            console.error(error.response.data.msg);
          });
      } , []);

  const handleInputChange = (field, value) => {
    setFormValues({ ...formValues, [field]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {

      formValues.donor_id = Donor.donor_id;

      // Send a POST request to your server
      const response = await axios.post('http://localhost:6050/api/Donations', formValues);

      // Handle the response as needed
      console.log('Donation submitted successfully:', response.data);
      alert('Donation submitted successfully:');

      // Clear the form after submission if needed
      setFormValues({
        coordinates: '',
        address: '',
        time: '',
        day: '',
        state: 'pending',
        nature: '',
        weight: '',
        quantity: '',
      });
    } catch (error) {
      console.error('Error submitting donation:', error.message);
      // Handle error cases
    }
  };
  console.log(Donor,formValues)
  return (
    <div className="box1">
      <form onSubmit={handleSubmit}>
        {Object.keys(formValues).map((field) => (
        (field!='donor_id' && field!='state') &&  <div className="user-box" key={field}>
            <input
              type="text"
              name={field}
              value={formValues[field]}
              onChange={(e) => handleInputChange(field, e.target.value)}
              required
              style={{ color: 'black' }}
            />
            <label>{field.replace(/_/g, ' ').toUpperCase()}</label>
          </div>
        ))}
        <center>
          <button class="button-24" type="submit" className="submit">
            SEND
           
          </button>
        </center>
      </form>
    </div>
  );
};

export default DonationForm;
