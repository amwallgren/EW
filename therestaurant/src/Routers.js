import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

const Routes = ({
  BookingFormContainer,
  BookingSearch,
  Admin,
  searchResults,
  bookings,
  onEdit,
  onDelete,
}) => {
  return (
    <Router>
      <BookingFormContainer />
      <Route
        path="/search"
        render={(props) => (
          <BookingSearch {...props} searchResults={searchResults} />
        )}
      />
      <Route
        path="/admin"
        render={(props) => (
          <Admin
            {...props}
            bookings={bookings}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        )}
      />
    </Router>
  );
};

export default Routes;
