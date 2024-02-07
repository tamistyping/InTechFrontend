// import { useState } from 'react';
// import * as usersService from '../../utilities/users-service';

// export default function LoginForm({ setUser }) {
//   const [credentials, setCredentials] = useState({
//     email: '',
//     password: ''
//   });
//   const [error, setError] = useState('');

//   function handleChange(evt) {
//     setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
//     setError('');
//   }

//   async function handleSubmit(evt) {
//     evt.preventDefault();
//     try {
//       const user = await usersService.login(credentials);
//       setUser(user);
//     } catch {
//       setError('Log In Failed - Try Again');
//     }
//   }

//   return (
//     <div>
//     <div className="container mt-5">
//       <form autoComplete="off" onSubmit={handleSubmit}>
//         <div className="mb-3 row justify-content-center">
//           <div className="col-sm-6">
//             <label htmlFor="email" className="form-label">Email</label>
//             <input
//               type="text"
//               className="form-control"
//               id="email"
//               name="email"
//               value={credentials.email}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>
//         <div className="mb-3 row justify-content-center">
//           <div className="col-sm-6">
//             <label htmlFor="password" className="form-label">Password</label>
//             <input
//               type="password"
//               className="form-control"
//               id="password"
//               name="password"
//               value={credentials.password}
//               onChange={handleChange}
//               required
//             />
//           </div>
//         </div>
//         <div className="mb-3 row justify-content-center">
//           <div className="col-sm-6">
//             <button type="submit" className="btn btn-primary">LOG IN</button>
//           </div>
//         </div>
//       </form>
//     </div>
//     <p className="error-message">&nbsp;{error}</p>
//   </div>
// );
// }

import { useState } from 'react';
import * as usersService from '../../utilities/users-service';

export default function LoginForm({ setUser }) {
  const [credentials, setCredentials] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  function handleChange(evt) {
    setCredentials({ ...credentials, [evt.target.name]: evt.target.value });
    setError('');
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const user = await usersService.login(credentials);
      setUser(user);
    } catch {
      setError('Log In Failed - Try Again');
    }
  }

  return (
    <div className="container mt-5">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <div className="mb-3 row justify-content-center">
          <div className="col-sm-8"> {/* Adjusted column size */}
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="text"
              className="form-control"
              id="email"
              name="email"
              value={credentials.email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-3 row justify-content-center">
          <div className="col-sm-8"> {/* Adjusted column size */}
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className="form-control"
              id="password"
              name="password"
              value={credentials.password}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="mb-3 row justify-content-center">
          <div className="col-sm-8"> {/* Adjusted column size */}
            <button type="submit" className="btn btn-primary">LOG IN</button>
          </div>
        </div>
      </form>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
}