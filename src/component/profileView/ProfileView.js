import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ProfileView.css'; // Import your CSS file
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBirthdayCake, faMapMarker, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const ProfileView = () => {
  const navigate = useNavigate();
  const url = 'http://localhost:6050/api/Profile';
  const [Donor, setDonor] = useState({
    donor_id: null,
    first_name: '',
    last_name: '',
    birthday: '',
    address: '',
    coordinates: '',
    phone_number: '',
    email_address: '',
  });

  useEffect(() => {
    const token = localStorage.getItem('token');
    const headers = {
      Authorization: `Bearer ${token}`,
    };

    axios
      .get(`${url}`, { headers })
      .then((res) => {
        setDonor(res.data.Donor);
      })
      .catch((error) => {
        console.error(error.response.data.msg);
      });
  }, []);

  const handleViewDonation = () => {
    navigate('/view-donation');
  };

  const handleDonation = () => {
    navigate('/donation');
  };



 
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <div className="osahan-account-page-left shadow-sm bg-white h-100">
              <div className="border-bottom p-4">
                <div className="osahan-user text-center">
                  <div className="osahan-user-media">
                    <img
                      className="mb-3 rounded-pill shadow-sm mt-1"
                      src="https://bootdey.com/img/Content/avatar/avatar1.png"
                      alt="gurdeep singh osahan"
                    />
                    <div className="osahan-user-media-body">
                      <h6 className="mb-2">
                        <FontAwesomeIcon icon={faUser} /> {Donor.first_name}                         {Donor.last_name}

                      </h6>
                  
                  
                      <p className="mb-1">
                        <FontAwesomeIcon icon={faBirthdayCake} /> {Donor.birthday}
                      </p>
                      <p style={{ marginLeft: -15 }}>
                        <FontAwesomeIcon icon={faEnvelope} /> {Donor.email_address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <ul class="nav nav-tabs flex-column border-0 pt-4 pl-4 pb-4" id="myTab" role="tablist">
                
                <button onClick={handleViewDonation}>
                  <span class="transition"></span>
                  <span class="gradient"></span>
                  <span class="label">View Donation</span>
                </button>
                <button onClick={handleDonation}>
                  <span class="transition"></span>
                  <span class="gradient"></span>
                  <span class="label">Add Donation</span>
                </button>
            
              </ul>
            </div>
          </div>
          <div class="col-md-9">
            <div class="osahan-account-page-right shadow-sm bg-white p-4 h-100">
            <img src="https://i.pinimg.com/564x/c6/bb/9d/c6bb9dde5d9b01d978e3e504e85483d6.jpg"alt='image'/ >
            </div>
        </div>
    </div>
</div>
		</div>
	);
}

export default ProfileView;
