import { NavBarMobile } from '../components/NavBarMobile';
import { useOpenModal } from '../hooks/useOpenModal';
import { useMountComponent} from '../hooks/useMountComponent';
import { Modal } from '../components/Modal';
import { Cart } from '../components/Cart';
import { Nav } from '../components/Nav';

import Logo from '../images/logo.svg';
import Avatar from '../images/image-avatar.png';
import IconMenu from '../images/icon-menu.svg';

import './header.css';

export const Header = () => {

    const { isOpenModal, handleOpenModal } = useOpenModal();

    const isMounted = useMountComponent(isOpenModal, 500);

    return(
        <header className="header">

            <div className="header__left-side">

                <button onClick={ handleOpenModal } className="header__button-menu">
                    <img src={ IconMenu } alt="" />
                </button>

                <a href="">
                    <img src={ Logo }alt="" />
                </a>

                <Nav />

            </div>

            <div className="header__right-side">

                <Cart />

                <img className="header__avatar" src={ Avatar } alt="" />
                
            </div>

            {
                false && <Cart />
            }

            {
                (isMounted || isOpenModal) &&
                    <Modal>
                        <NavBarMobile isMounted={ isMounted } isOpenModal={ isOpenModal } handleOpenModal={ handleOpenModal } />
                    </Modal>
            }

        </header>
    )
}