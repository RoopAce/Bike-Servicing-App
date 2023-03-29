// import React, { useEffect} from 'react'
// import { useHistory } from "react-router-dom";
// import { useHistory } from 'history';

// const Logout = () => {
//   //promises

// const history = useHistory();

//   useEffect(()=> {
//     fetch('/logout', {
//       method: "GET",
//       headers: {
//           Accept: "application/json",
//           "Content-Type": "application/json"
//       },
//       credentials: "include",
//     }).then((res)=> {
//       history.push('/login', {replace: true});
//       if (res.status !== 200) {
//         const error = new error(res.error);
//         throw error;
//       }
//       history.push('/login', {replace: true});
//     }).catch((err) => {
//       console.log(err);
//     })
//   }, [history]);

//   return (
//     <>
//       <h1>logout ko lage</h1>
//     </>
//   );
// };

// export default Logout
