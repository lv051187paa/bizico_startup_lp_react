import React from 'react';
import {photoes, socialIcons} from "../../img";

const EmployeeCard = ({employee}) => {
  const {photo, socials, name, position} = employee;
  return(
    <div className="contacts__employee">
      <div className="contacts__employee-photo">
        <img src={photoes[photo.toLowerCase()]} alt=""/>
        <div className="contacts__employee-socials">
          {socials.map(social => (
            <a key={social.id} href={social.link}><img src={socialIcons[social.name.toLowerCase()]} alt=""/></a>
          ))}
        </div>
        {/**/}
      </div>
      <h4>{name}</h4>
      <p>{position}</p>
    </div>
  )
};

export default EmployeeCard;
