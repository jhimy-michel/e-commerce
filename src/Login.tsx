import React, { useState } from 'react';

const Login = (): JSX.Element => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<React.ReactNode>(<></>);

  const handleLogin = (): void => {
    if (email === 'test@gmail.com' && password === '123') {
      console.log('you are in');
      setMessage(<span className="text-success">Successfully logged-in</span>);
    } else {
      setMessage(<span className="text-danger">Invalid Login, please try again</span>);
    }
  };

  return (
    <div className="col-lg-9">
      <h4 className="m-1 p-2 border-bottom">Login</h4>
      <div className="form-group form-row">
        <label className="col-lg-4">Email:</label>
        <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />

        <label className="col-lg-4">Password:</label>
        <input
          type="password"
          className="form-control"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <div className="text-end m-1">
        {message}
        <br/>
        <button className="btn btn-primary" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
