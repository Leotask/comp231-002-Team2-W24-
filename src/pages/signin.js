import React, { useState } from 'react';
import './signin.css'; 
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: ''
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Username: ${formData.username}, Password: ${formData.password}`);

  };

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="input-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button className="login-btn" type="submit">Login</button>
        <div>
        <Link to="/signup">
        <button className="register-btn" type="button">Register</button>
        </Link>
      </div>
      <Link to="/forgetpw">
        <button className="forgot-password-btn" type="button">Forget Password?</button>
        </Link>
      </form>
    </div>
  );
};

export default Login;





// import React, { useState, useEffect } from 'react';
// // import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
// // import { auth } from '../firebase_setup/firebase';
// import { NavLink, useNavigate } from 'react-router-dom'


// const Login = () => {
//     const navigate = useNavigate();
//     const [email, setEmail] = useState('');
//     const [password, setPassword] = useState('');

//     const onLogin = (e) => {
//         e.preventDefault();
//         signInWithEmailAndPassword(auth, email, password)
//             .then((userCredential) => {
//                 const user = userCredential.user;
//                 localStorage.setItem('user', JSON.stringify(user));
//                 if (user.email === 'doctor1@gmail.com') {
//                     navigate("/getdata");
//                   } else {
//                     navigate("/patientappointment");
//                   }
//                 console.log(user);
//             })
//             .catch((error) => {
//                 const errorCode = error.code;
//                 const errorMessage = error.message;
//                 console.log(errorCode, errorMessage)
//             });
//     }




//     return (
//         <>
//             <main >
//                 <section>
//                     <div>
//                     <h1>Log In</h1>  

//                         <form>
//                             <div className="loginform">
//                                 <label >
//                                 <input 
//                                         id="email-address"
//                                         name="email"
//                                         type="email"
//                                         required
//                                         placeholder="Email address"
//                                         onChange={(e) => setEmail(e.target.value)}
//                                     />
//                                 </label>
//                             </div>

//                             <div>
//                                 <label className="label-password">
//                                     <input
//                                         id="password"
//                                         type="password"
//                                         name="password"
//                                         placeholder="Password"
//                                         required
//                                         onChange={(e) => setPassword(e.target.value)}
//                                     />

//                                 </label>
//                             </div>

//                             <div classNmae="loginbutton">
//                                 <button onClick={onLogin}>
//                                     Login
//                                 </button>
//                             </div>
//                         </form>




//                         <p className="text-sm text-white text-center">
//                             No account yet? {' '}
//                             <NavLink to="/signup">
//                                 Register
//                             </NavLink>
//                         </p>

//                     </div>
//                 </section>
//             </main>
//         </>
//     )
// };
// export default Login
