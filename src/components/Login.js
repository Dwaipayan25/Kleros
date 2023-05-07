import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [walletAddress, setWalletAddress] = useState("");
  const [password, setPassword] = useState("");

  // const history = useHistory(); // access to history object to redirect user to a new URL

  const handleLogin = (e) => {
    e.preventDefault();
    // Handle login logic here
    // assuming login is successful, redirect user to https://court.kleros.io/
    window.location.replace("https://court.kleros.io/");
  };
  

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div>
          <label htmlFor="walletAddress">Wallet Address:</label>
          <input
            type="text"
            id="walletAddress"
            value={walletAddress}
            onChange={(e) => setWalletAddress(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
