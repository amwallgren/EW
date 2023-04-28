// import "../../Styles/Form.css";
// import React, { useState } from "react";
// import { BookingForm } from "../Booking/BookingForm";

// export const BookingSearch = ({ onSearch, searchResults }) => {
//   const [isFormVisible, setIsFormVisible] = useState(false);

//   const handleSearchSubmit = (formData) => {
//     onSearch(formData);
//   };

//   const toggleFormVisibility = () => {
//     setIsFormVisible(!isFormVisible);
//   };

//   return (
//     <div>
//       <h2>Search Bookings</h2>
//       <button onClick={toggleFormVisibility}>
//         {isFormVisible ? "Hide Form" : "Show Form"}
//       </button>
//       {isFormVisible && <BookingForm onSubmit={handleSearchSubmit} />}
//       {searchResults && searchResults.length > 0 && (
//         <div>
//           <h3>Search Results:</h3>
//           <ul>
//             {searchResults.map((result, index) => (
//               <li key={index}>
//                 {result.name} - {result.bookingDate} - {result.numberOfGuests}{" "}
//                 guests
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };
