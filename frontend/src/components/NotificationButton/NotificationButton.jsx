import React from 'react';
import icon from '../../assets/img/notification-icon.svg';
import './NotificationButton.css'


const NotificationButton = () => {
    return ( 
        <div className="dsmeta-red-btn">
            <img src= {icon} alt="Notificar" />
        </div>
     );
}
 
export default NotificationButton;