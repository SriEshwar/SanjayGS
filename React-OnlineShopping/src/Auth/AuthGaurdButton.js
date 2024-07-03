// import React from 'react';
// import { useNavigate } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const AuthGuardButton = ({ children }) => {
//   const { isAuthenticated } = useAuth();
//   const navigate = useNavigate();

//   const handleClick = () => {
//     if (isAuthenticated) {
//       // Navigate to the protected page or perform the action
//       console.log("Access granted");
//     } else {
//       // Redirect to the login page
//       navigate('/login');
//     }
//   };

//   return <button onClick={handleClick}>{children}</button>;
// };

// export default AuthGuardButton;
