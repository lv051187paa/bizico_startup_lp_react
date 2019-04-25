import React from 'react';
import { notification } from 'antd';

export const showNotification = (message) => (notification.open({
  message
}));
