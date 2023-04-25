import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function Billing() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const billingDetails = {
      firstName: event.target.firstName.value,
      lastName: event.target.lastName.value,
      email: event.target.email.value,
      address: event.target.address.value,
      address2: event.target.address2.value,
      country: event.target.country.value,
      state: event.target.state.value,
      zip: event.target.zip.value,
      ccName: event.target.ccName.value,
      ccNumber: event.target.ccNumber.value,
      ccExpiration: event.target.ccExpiration.value,
      ccCvv: event.target.ccCvv.value,
    };
    event.target.reset();
    console.log('HERE IS MY BILLING INFO, ', billingDetails);
  };

  return (
    <div className="col-md-7 col-lg-8">
      <h4 className="mb-3">Billing address</h4>
      <form className="needs-validation" noValidate="" onSubmit={handleSubmit}>
        <div className="row g-3">
          <div className="col-sm-6">
            <label htmlFor="firstName" className="form-label">
              First name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              placeholder=""
              // value=""
              required=""
            />
            <div className="invalid-feedback">
              Valid first name is required.
            </div>
          </div>

          <div className="col-sm-6">
            <label htmlFor="lastName" className="form-label">
              Last name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              placeholder=""
              // value=""
              required=""
            />
            <div className="invalid-feedback">Valid last name is required.</div>
          </div>

          <div className="col-12">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="you@example.com"
            />
            <div className="invalid-feedback">
              Please enter a valid email address htmlFor shipping updates.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="address" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="address"
              placeholder="1234 Main St"
              required=""
            />
            <div className="invalid-feedback">
              Please enter your shipping address.
            </div>
          </div>

          <div className="col-12">
            <label htmlFor="address2" className="form-label">
              Address 2 <span className="text-body-secondary">(Optional)</span>
            </label>
            <input
              type="text"
              className="form-control"
              id="address2"
              placeholder="Apartment or suite"
            />
          </div>

          <div className="col-md-5">
            <label htmlFor="country" className="form-label">
              Country
            </label>
            <select className="form-select" id="country" required="">
              <option value="Two">Choose...</option>
              <option>United States</option>
            </select>
            <div className="invalid-feedback">
              Please select a valid country.
            </div>
          </div>

          <div className="col-md-4">
            <label htmlFor="state" className="form-label">
              State
            </label>
            <select className="form-select" id="state" required="">
              <option value="One">Choose...</option>
              <option>California</option>
            </select>
            <div className="invalid-feedback">
              Please provide a valid state.
            </div>
          </div>

          <div className="col-md-3">
            <label htmlFor="zip" className="form-label">
              Zip
            </label>
            <input
              type="text"
              className="form-control"
              id="zip"
              placeholder=""
              required=""
            />
            <div className="invalid-feedback">Zip code required.</div>
          </div>
        </div>

        <hr className="my-4" />

        <h4 className="mb-3">Payment</h4>

        <div className="row gy-3">
          <div className="col-md-6">
            <label htmlFor="cc-name" className="form-label">
              Name on card
            </label>
            <input
              type="text"
              className="form-control"
              id="ccName"
              placeholder=""
              required=""
            />
            <small className="text-body-secondary">
              Full name as displayed on card
            </small>
            <div className="invalid-feedback">Name on card is required</div>
          </div>

          <div className="col-md-6">
            <label htmlFor="cc-number" className="form-label">
              Credit card number
            </label>
            <input
              type="text"
              className="form-control"
              id="ccNumber"
              placeholder=""
              required=""
            />
            <div className="invalid-feedback">
              Credit card number is required
            </div>
          </div>

          <div className="col-md-3">
            <label htmlFor="cc-expiration" className="form-label">
              Expiration
            </label>
            <input
              type="text"
              className="form-control"
              id="ccExpiration"
              placeholder=""
              required=""
            />
            <div className="invalid-feedback">Expiration date required</div>
          </div>

          <div className="col-md-3">
            <label htmlFor="cc-cvv" className="form-label">
              CVV
            </label>
            <input
              type="text"
              className="form-control"
              id="ccCvv"
              placeholder=""
              required=""
            />
            <div className="invalid-feedback">Security code required</div>
          </div>
        </div>

        <hr className="my-4" />

        <button className="w-100 btn btn-primary btn-lg mb-5" type="submit">
          Purchase
        </button>
      </form>
    </div>
  );
}
