import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DonationPage.css'; // Import your CSS file

const DonationPage = () => {
    const url = 'http://localhost:6050/api/Profile';
    const [donor, setDonor] = useState({
        donor_id: null,
        first_name: "",
        last_name: "",
        birthday: "",
        address: "",
        coordinates: "",
        phone_number: "",
        email_address: ""
    });

    const [donations, setDonations] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");

        const headers = {
            'Authorization': `Bearer ${token}`
        };

        axios.get(url, { headers })
            .then((res) => {
                setDonor(res.data.Donor);
                // Assuming your API returns donations for a specific donor
                return axios.get(`http://localhost:6050/api/DonationsById/${res.data.Donor.donor_id}`, { headers });
            })
            .then((res) => {
                setDonations(res.data.Donations);
            })
            .catch((error) => {
                console.error(error.response.data.msg);
            });
    }, []);

    return (
        <div className="donation-page">
            {/* Display donor information */}
            <div className="donor-info">
                <h4>Donor Information</h4>
                <p>Donor ID: {donor.donor_id}</p>
                <p>Name: {donor.first_name} {donor.last_name}</p>
                <p>Email: {donor.email_address}</p>
            </div>
            {/* Display donor's donations in a styled table */}
            <div className="donation-table">
                <h4>Donations</h4>
                <table>
                    <thead>
                        <tr>
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
            </div>
        </div>
    );
};

export default DonationPage;
