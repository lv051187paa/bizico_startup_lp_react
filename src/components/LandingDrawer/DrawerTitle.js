import React from "react";
import PropTypes from 'prop-types';
import { PageHeader } from 'antd';
import BackArrow from "../../img/back-arrow.svg";

const DrawerTitle = ({onBack, title}) => {
  return (
    <PageHeader
      onBack={onBack}
      title={title}
      backIcon={<img src={BackArrow} alt="arrow" />}
    />
  )
};

DrawerTitle.propTypes = {
  onBack: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
};

export default DrawerTitle;
