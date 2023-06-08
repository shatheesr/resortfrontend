import React, { useState } from 'react';
import './css/LoginPage.css';
function ForgetPasswordPage() {
  const [username, setUsername] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleForgetPassword = async () => {
    try {
      const response = await fetch('http://localhost:8080/reset-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          newPassword,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to send reset password request');
      }

      setSuccessMessage('Reset password successful!');
    } catch (error) {
      console.error(error);
      setErrorMessage('An error occurred while resetting the password');
    }
  };

  return (
    <div className='loginbody'>

    <div className='login-form'>
      <h1>Forget Password</h1>

      {/* Username */}
      <div className="form-group">
        <label htmlFor="username" className='lab'>Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className='inp'
          />
      </div>

      {/* New Password */}
      <div className="form-group">
        <label htmlFor="newPassword" className='lab'>New Password</label>
        <input
          type="password"
          id="newPassword"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          className='inp'
          />
      </div>

      {/* Error Message */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* Success Message */}
      {successMessage && <p className="success-message">{successMessage}</p>}

      {/* Reset Password Button */}
      <button onClick={handleForgetPassword} className='but'>Reset Password</button>
    </div>
          </div>
  );
}

export default ForgetPasswordPage;
