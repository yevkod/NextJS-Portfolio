import ReactDOM from 'react-dom';
import s from './notification.module.css';

function Notification(props) {
    const {title, message, status} = props;

    let statusClasses = '';

    if (status === 'success') {
        statusClasses = s.success;
    }

    if (status === 'error') {
        statusClasses = s.error;
    }

    const cssClasses = `${s.notification} ${statusClasses}`;

    return ReactDOM.createPortal((
            <div className={cssClasses}>
                <h2>{title}</h2>
                <p>{message}</p>
            </div>
        ), document.getElementById('notifications')
    );
}

export default Notification;
