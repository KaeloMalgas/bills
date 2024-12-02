import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const CreateAccount: React.FC = () => {
  const [clientId, setClientId] = useState('');
  const [error, setError] = useState('');
  const history = useHistory();

  const validateClientId = (id: string): boolean => {
    const pattern = /^[\w]+$/;
    return pattern.test(id);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (validateClientId(clientId)) {
      // Simulate account creation
      console.log('Account created with client ID:', clientId);
      history.push('/home');
    } else {
      setError('Client ID must only contain alphanumeric characters and underscores.');
    }
  };

  return (
    <div style={{ backgroundColor: 'white', color: 'black', padding: '20px' }}>
      <h1>Create Account</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="clientId">Client ID:</label>
          <input
            type="text"
            id="clientId"
            value={clientId}
            onChange={(e) => setClientId(e.target.value)}
            required
          />
        </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default CreateAccount;
