import React from "react";

const SectionTitle = ({content, className}) => (
  <h1 className={`section_title ${className}`}>
    {content}
  </h1>
);

export default SectionTitle;
