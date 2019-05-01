import React from "react";
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
}

export default DrawerTitle;
