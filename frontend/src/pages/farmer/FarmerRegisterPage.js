import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const FarmerRegisterPage = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    phoneNumber: "",
    address: "",
    area: "Select an area",
    pincode: "",
    picture: null,
    licence: null,
  });

  const {
    firstName,
    lastName,
    age,
    phoneNumber,
    address,
    area,
    pincode,
    picture,
    licence,
  } = formData;

  const areas = [
    "Chikkadpally",
    "Narayanguda",
    "Tank-bund",
    "Abids",
    "Lakdikapul",
    "Secunderabad",
    "Kondapur",
    "Miyapur",
    "Madhapur",
    "Manikonda",
    "Gachibowli",
    "Nizampet",
    "JNTUH",
    "Erragadda",
    "Ameerpet",
    "Panjagutta",
  ];

  const handleChange = (e) => {
    if (e.target.name === "picture" || e.target.name === "licence") {
      setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    } else {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <><div style={{ height: '45px' }}></div>
    <div className="container d-flex justify-content-center align-items-center vh-100">
      <div className="card p-2" style={{ width: '550px', height: '680px', }}>
        <h1 className="text-center">Farmer Registration Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              name="firstName"
              value={firstName}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              name="lastName"
              value={lastName}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              className="form-control"
              id="age"
              name="age"
              value={age}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="number"
              className="form-control"
              id="phoneNumber"
              name="phoneNumber"
              value={phoneNumber}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="address">Address</label>
            <input
              type="text"
              className="form-control"
              id="address"
              name="address"
              value={address}
              onChange={handleChange} />
          </div>
          <div className="form-group">
            <label htmlFor="area">Area</label>
            <select
              className="form-control"
              id="area"
              name="area"
              value={area}
              onChange={handleChange}
            >
              <option disabled>Select an area</option>
              {areas.map((area) => (
                <option key={area} value={area}>
                  {area}
                </option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Pincode</label>
            <input
              type="text"
              className="form-control"
              id="pincode"
              name="pincode"
              value={pincode}
              onChange={handleChange} />
          </div>
          <div style={{ height: '10px' }}></div>
          <div className="form-group">
            <label htmlFor="picture">Upload Picture</label>
            <br />
            <input
              type="file"
              className="form-control-file"
              id="picture"
              name="picture"
              onChange={handleChange} />
          </div>
          <div style={{ height: '10px' }}></div>
          <div className="form-group">
            <label htmlFor="licence">Upload Licence</label>
            <br />
            <input
              type="file"
              className="form-control-file"
              id="licence"
              name="licence"
              onChange={handleChange} />
          </div>
          <div style={{ height: '10px' }}></div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div></>
  );
};

export default FarmerRegisterPage;
