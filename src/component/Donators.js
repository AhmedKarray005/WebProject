import React, { useState, useEffect } from "react";
import axios from "axios";
import Accordion from "react-bootstrap/Accordion";
import Button from "react-bootstrap/Button";

function Donators() {
  const url = 'http://localhost:6050/api/Donors';
  const [Donors, setDonors] = useState([]);

  useEffect(() => {
    axios
      .get(url)
      .then((res) => {
        setDonors(res.data.Donors); // Ensure that 'donors' array is defined or provide an empty array
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [Donors.donor_id]);

  const handleDelete = (DonorId) => {
    if (window.confirm("Are you sure you want to delete this Donor")) {
      const token = localStorage.getItem("token");
      console.log(token);
        const headers = {
          'Authorization': `Bearer ${token}`
        }
axios.delete(`${url}/${DonorId}`, { headers })
          .then((res) => {
            setDonors(prevDonors => prevDonors.filter((donor) => donor.donor_id !== DonorId));
          })
          .catch((err) => {
            console.log("the error is on handleDelete", err);
          });
      }
    };

  return (
    <div>
    <h1> adkadmkdam</h1>
    <div style={{ width: "80%", margin: "auto", marginTop: "40px" }}>
      {Donors.map((donor) => (
        <Accordion key={donor.id}>
          <Accordion.Item eventKey="0">
            <Accordion.Header
              style={{
                backgroundColor: "lightgrey",
                color: "red",
                fontWeight: "bold",
                padding: "10px 10px",
                borderBottom: "1px solid #e3e3e3",
                cursor: "pointer",
              }}
            >
              {donor.first_name.toUpperCase()}
            </Accordion.Header>
            <Accordion.Body
              style={{
                padding: "15px",
                fontSize: "16px",
                lineHeight: "1.5",
                color: "red",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <div>
                <h5 style={{ marginBottom: "10px", color: "#555" }}>
                  Email: {donor.email_address}
                </h5>
                <h5>Age: {donor.phone_number}</h5>
              </div>
              <div>
                <Button
                  style={{ width: "80px" }}
                  variant="danger"
                  onClick={() => handleDelete(donor.donor_id)}
                >
                  delete
                </Button>
              </div>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      ))}
    </div>
    </div>
  );
}

export default Donators;
