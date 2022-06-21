import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom'



function Login() {
  let navigate = useNavigate();
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const loginHandeler = () => {
    if (username !== "") {
      console.log("testers login");
      navigate('/viewDefects');
    }
  }

  return (
    <>
      <div className="container">
        <form onSubmit={() => loginHandeler()} className="form login-form">
          <label className="lable login-lable">Login</label>
          <table>
            <tbody>
              <tr>
                <td>Username</td>
                <td><input onChange={(event) => setUserName(event.target.value)} value={username}></input></td>
              </tr>
              <tr>
                <td>Password</td>
                <td><input onChange={(event) => setPassword(event.target.value)} value={password}></input></td>
              </tr>
            </tbody>
          </table>
          <button type='submit' className="btn btn-primary">Sign in</button>
        </form>
      </div>
    </>
  )
}

export default Login;