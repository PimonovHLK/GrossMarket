import './appHeader.scss';
import Logo from '../../resources/img/Logo.png'

const AppHeader = () => {
    return (
        <header className='app__header'>
            <div className='app__logo'>
                <img src={Logo} alt="Logo"/>
                <span>Гросс маркет</span>
            </div>
            <div className='app__callBack'>
                <div className='phone'>
                    <a href="tel:+79264331416">+7 (926) 433-14-16</a>
                </div>
                <div className='btn'>Заполнить анкету</div>
            </div>
        </header>
    )
}
export default AppHeader;