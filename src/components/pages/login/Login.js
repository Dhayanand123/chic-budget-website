// /* jshint esversion:6 */

// import React, { useState } from "react";
// import styles from "./Login.module.css"; // Import CSS module for styling

// const Login = ({ onLogin }) => {
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (event) => {
//     event.preventDefault();

//     // Simple validation (you can replace this with more robust validation)
//     if (username === "" || password === "") {
//       alert("Please enter both username and password.");
//       return;
//     }

//     // Call the onLogin function passed as a prop
//     onLogin(username, password);
//   };

//   return (
//     <div className={styles.loginContainer}>
//       <h2 className={styles.heading}>Login</h2>
//       <form onSubmit={handleLogin} className={styles.loginForm}>
//         <div className={styles.formGroup}>
//           <label htmlFor="username">Username:</label>
//           <input
//             type="text"
//             id="username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             className={styles.formInput}
//           />
//         </div>
//         <div className={styles.formGroup}>
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className={styles.formInput}
//           />
//         </div>
//         <button type="submit" className={styles.loginButton}>
//           Login
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Login;
/* jshint esversion:6 */
import React, { useState } from "react";
import styles from "./Login.module.css"; // Import CSS module for styling

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isNewUser, setIsNewUser] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    if (isNewUser) {
      // Register new user
      const newUser = { username, password };
      localStorage.setItem("user", JSON.stringify(newUser));
      alert("Registered successfully!");
    } else {
      // Login existing user
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        const parsedUser = JSON.parse(storedUser);
        if (
          parsedUser.username === username &&
          parsedUser.password === password
        ) {
          // Successful login
          alert("Logged in successfully!");

          // Redirect or perform further actions
        } else {
          // Incorrect credentials
          alert("Invalid username or password!");
        }
      } else {
        // No user found
        alert("User not found. Please register!");
      }
    }
  };

  return (
    <div className={styles.login}>
      <h2>Login</h2>

      <form onSubmit={handleLogin}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            className={styles.inputField}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            className={styles.inputField}
          />
        </label>
        <br />
        <label>
          New User?
          <input
            type="checkbox"
            checked={isNewUser}
            onChange={() => setIsNewUser(!isNewUser)}
            className={styles.checkbox}
          />
        </label>
        <br />
        <button type="submit" className={styles.submitButton}>
          {isNewUser ? "Register" : "Login"}
        </button>
      </form>
    </div>
  );
};

export default Login;
