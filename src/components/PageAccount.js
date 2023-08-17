import React from 'react';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import BackButtonWelcome from "./BackButtonWelcome";

const PageAccount = () => {
  
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [fname, setFirstName] = useState("");
  const [lname, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [error, seterror] = useState("");

  const save = async (e) => {
    e.preventDefault();
    setEmail("");
    setFirstName("");
    setLastName("");
    setAddress("");
    setNumber("");
    setCity("");
    setProvince("");
    setCountry("");
    if (!fname || !lname || !address || !number || !city || !province || !country) return seterror("Please fill out your account details");
    navigate("/Home");
  };

  return (
    <>
      <div className="container-fluid">
        <BackButtonWelcome />
        <h2 className="text-center mb-3 f-xxl">Account Information</h2>
        {error ? <div>{error}</div> : null}
        <form onSubmit={save}>
          <div className="vstack gap-3 col-md-5 mx-auto">
            <input
              className="form-control form-control-lg"
              type="text"
              name="fname"
              value={fname}
              placeholder="First Name"
              required
              onChange={(e) => setFirstName(e.target.value)}
            />
            <input
              className="form-control form-control-lg"
              type="text"
              name="lname"
              value={lname}
              placeholder="Last Name"
              required
              onChange={(e) => setLastName(e.target.value)}
            />
            <input
              className="form-control form-control-lg"
              type="text"
              name="email"
              value={email}
              required
              disabled
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              className="form-control form-control-lg"
              type="text"
              name="address"
              value={address}
              placeholder="Address"
              required
              onChange={(e) => setAddress(e.target.value)}
            />
            <input
              className="form-control form-control-lg"
              type="text"
              name="number"
              value={number}
              placeholder="Phone Number"
              required
              onChange={(e) => setNumber(e.target.value)}
            />
            <input
              className="form-control form-control-lg"
              type="text"
              name="city"
              value={city}
              placeholder="City"
              required
              onChange={(e) => setCity(e.target.value)}
            />
            <input
              className="form-control form-control-lg"
              type="text"
              name="province"
              value={province}
              placeholder="State/Province"
              required
              onChange={(e) => setProvince(e.target.value)}
            />
            <input
              className="form-control form-control-lg"
              type="text"
              name="country"
              value={country}
              placeholder="Country"
              required
              onChange={(e) => setCountry(e.target.value)}
            />
            <button type="submit" className="btn btn-secondary btn-lg">Save</button>
          </div>
        </form>
        <p className="text-center mt-3">
          New? <a href="/signup">Sign up here!</a>
        </p>
        
      </div>
      
    </>
  );
};

export default PageAccount;