import React from "react";
import PropTypes from 'prop-types';

const ContactAddress = ({address}) => {
  return (
    <div className="contacts__item">
      <h4>{address.country}</h4>
      <div className="contacts__item-details">
        {address.phone && <p className="phone">{address.phone}</p>}
        {address.location && <p className="location">{address.location}</p>}
        {address.email && <p className="email">{address.email}</p>}
      </div>
    </div>
  );
};

ContactAddress.propTypes = {
  address: PropTypes.object.isRequired,
}

export default ContactAddress;
