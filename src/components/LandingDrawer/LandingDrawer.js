import React from "react";
import PropTypes from 'prop-types';
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
};

LandingDrawer.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
  visible: PropTypes.bool.isRequired,
  title: PropTypes.string.isRequired,
}

export default LandingDrawer;
