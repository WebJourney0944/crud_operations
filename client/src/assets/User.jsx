// import React, { useState } from 'react'
// import { Link } from 'react-router-dom'
// function User() {
//     // const{users,setUsers}=useState([{

//     //     Name: "elsa",Email:"e123@gmail.com",Age:21
//     // }])
//     const [users, setUsers] = useState([
//         {
//           Name: "elsa",
//           Email: "e123@gmail.com",
//           Age: 21,
//         },
//       ]);
//   return (
    
//     <div className='d-flex vh-100 bg-primary justify-content-center align-items-center'>
//       <div className='w-50 bg-white rounded p-3'>
//         <Link to="/create" className='btn btn-primary'>Add +</Link>
//             <table className='table'>
// <thead><tr>
//     <th>name</th>
//     <th>Email</th>
//     <th>Age</th>
//     <th>Action</th>
//     </tr></thead>
// <tbody>
// {/* {
//     users.map((user)=>{
//       return  <tr>
//             <td>{user.Name}</td>
//             <td>{user.Email}</td>
//             <td>{user.Age}</td>
//             <td>
//             <Link to="/update" className='btn btn-primary'>update</Link>
//             <button>Delete</button></td>

//         </tr>
//     })
// // } */}
//  {users.map((user, index) => (
//               <tr key={index}>
//                 <td>{user.Name}</td>
//                 <td>{user.Email}</td>
//                 <td>{user.Age}</td>
//                 <td>
//                 <Link to="/update" className='btn btn-primary'>update</Link>
//                   <button>Delete</button>
//                 </td>
//               </tr>
//             ))}
// </tbody>
// </table>
//       </div>
//     </div>
//   )
// }

// export default User