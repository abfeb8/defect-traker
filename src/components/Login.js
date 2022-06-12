import 'bootstrap/dist/css/bootstrap.min.css';

const clickHandeler = () => {
  alert("sign in clicked!")
}

function Login() {
  return (
    <>
      <div className="container">
        <form className="form login-form">
          <label className="lable login-lable">Login</label>
          <table>
            <tbody>
              <tr>
                <td>Username</td>
                <td><input></input></td>
              </tr>
              <tr>
                <td>Password</td>
                <td><input></input></td>
              </tr>
            </tbody>
          </table>
          <button className="btn btn-primary" onClick={() => clickHandeler()}>Sign in</button>
        </form>
      </div>
    </>
  )
}

export default Login;