import React from "react";
import { Drawer } from 'antd';
import DrawerTitle from './DrawerTitle';

const LandingDrawer = ({children, onClose, visible, title}) => {
  return (
    <Drawer
      title={<DrawerTitle title={title} onBack={onClose}/>}
      placement="right"
      closable={false}
      width="auto"
      onClose={onClose}
      visible={visible}
    >
      {children}
    </Drawer>
  )
}

export default LandingDrawer;
