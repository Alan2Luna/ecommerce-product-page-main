import { Nav } from '../Nav';
import { ReactComponent as IconClose} from '../../images/icon-close.svg';
import './navbarmobile.css'

export const NavBarMobile = ({ isMounted, isOpenModal, handleOpenModal }) => {


    return(

        <div className={`navbar-mobile ${ isOpenModal && "in" } ${ isMounted && "transition"}`}>

            <button onClick={ handleOpenModal } className="navbar-mobile__button">
                        
                <IconClose />

            </button>

            <Nav isMounted={ isMounted } />

        </div>
    )

}