import React, { useState } from 'react';
import '../styles/otp.css'
const OTPVerification = () => {
  const [otp, setOtp] = useState(['', '', '', '']);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (index, event) => {
    const value = event.target.value;
    if (/^\d*$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);
      if (index < otp.length - 1 && value) {
        document.getElementById(`otp-input-${index + 1}`).focus();
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    // Handle OTP submission logic here
    console.log('OTP:', otp.join(''));
    // Redirect or update the state as needed
  };

  const handleResendCode = () => {
    // Handle resend code logic here
    console.log('Resend code');
  };

  return (
    <div className="containerbody">
<div className="otp-container">
      <h1>OTP Verification</h1>
      <p>Enter OTP Code sent to +92(******)</p>
      <form onSubmit={handleSubmit}>
        <div className="input-field">
          {otp.map((value, index) => (
            <input
              key={index}
              type="number"
              id={`otp-input-${index}`}
              value={value}
              onChange={(event) => handleInputChange(index, event)}
              disabled={false}
              maxLength="1"
              autoFocus={index === 0}
            />
          ))}
        </div>
        <div className="p">
          <p className="p-h">Did not receive OTP code?</p>
          <a href="#" onClick={handleResendCode}>Resend Code</a>
        </div>
        <button type="submit" disabled={isSubmitting}>
          Verify & Proceed
        </button>
      </form>
    </div>
    </div>
    
  );
};

export default OTPVerification;
