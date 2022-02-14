import './nav.css';

export const Nav = ({ isMounted }) => {

    const styleNav = {
        display: "block"
    };

    return(
        <nav className="nav" style={ isMounted ? styleNav : null } >
            <ul className="nav__list">
                <li className="nav__item">
                    <a>collections</a>
                    <div></div>
                </li>
                <li className="nav__item">
                    <a>men</a>
                    <div></div>
                </li>
                <li className="nav__item">
                    <a>women</a>
                    <div></div>
                </li>
                <li className="nav__item">
                    <a>about</a>
                    <div></div>
                </li>
                <li className="nav__item">
                    <a>contact</a>
                    <div></div>
                </li>
            </ul>
        </nav>
    )
}