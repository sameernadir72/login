import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from './reducers';

const LoginForm = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Here, you can perform any login logic, such as sending a request to the server
    // to authenticate the user. For simplicity, we'll just dispatch the login action
    // with the provided username as the user object.
    dispatch(login(username));
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Username" value={username} onChange={handleUsernameChange} />
      <input type="password" placeholder="Password" value={password} onChange={handlePasswordChange} />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
