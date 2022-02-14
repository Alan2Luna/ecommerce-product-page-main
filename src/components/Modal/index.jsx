import ReactDOM from 'react-dom';
import './modal.css';

export const Modal = ({ children }) => {

    return ReactDOM.createPortal(

        <div className="overlay">
            {
                children
            }
        </div>,

        document.getElementById('modal-root')
    )
}