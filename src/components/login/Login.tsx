import { AxiosError } from 'axios';
import React, { useState } from 'react';
import { Alert, Button, Card, Col, Row } from 'react-bootstrap';
import { CardBody, CardHeader, Toast } from 'reactstrap';
import {
  authenticationControllerLogin,
  useAuthenticationControllerLogin
} from '../../api/endpoints/authentication-controller';
import { LoginFailure } from '../../api/endpoints/ecommerceApi.schemas';

function Login() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [message, setMessage] = useState<React.ReactNode>(<></>);
  const [loading, setLoading] = useState<boolean>(false);

  const handleLogin = async (): Promise<void> => {
    setLoading(true);
    try {
      const login = await authenticationControllerLogin({ email, password });

      if (login?.token != null) {
        localStorage.setItem('TOKEN', login.token);
        setMessage(<Alert color="success">Login successful</Alert>);
      }
    } catch (e) {
      const error = e as AxiosError<LoginFailure>;
      setMessage(<span className="text-danger">{error.response?.data.error?.message}</span>);
    }

    setLoading(false);
  };

  return (
    <>
      <Row>
        <Col className="bg-none" sm="4" xs="6"></Col>
        <Col className="bg-none" sm="4" xs="6">
          <Card>
            <CardHeader>
              <h4 className="m-1 p-2 border-bottom">Login</h4>
            </CardHeader>
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
              <Button color="primary" disabled={loading} onClick={() => handleLogin}>
                Login
              </Button>
            </CardBody>
          </Card>
        </Col>
        <Col className="bg-none" sm="4"></Col>
      </Row>
    </>
  );
}

export default Login;
