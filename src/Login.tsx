import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import { CardBody, CardHeader } from 'reactstrap';

function Login() {
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
      <Card>
        <CardHeader></CardHeader>
        <CardBody>
          <label className="col-lg-4">Email:</label>
          <input type="text" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />

          <label className="col-lg-4">Password:</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {message}
          <br />
          <button className="btn btn-primary" onClick={handleLogin}>
            Login
          </button>
        </CardBody>
      </Card>
    </div>
  );
}

export default Login;
