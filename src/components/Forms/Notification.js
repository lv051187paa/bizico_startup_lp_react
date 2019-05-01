import { notification } from 'antd';

export const showNotification = (message, icon) => {notification[icon]({
  message,
  style: {
    marginTop: 50,
  },
})};
