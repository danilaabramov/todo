import {useEffect, useState, useRef} from "react";
import {Routes, Route, Link} from 'react-router-dom';
import ButtonBar from "./components/ButtonBar";
import MenuIcon from "./icons/menu";
import {disableBodyScroll, enableBodyScroll} from "body-scroll-lock";
import Avatar from "./icons/avatar";
import Search from "./icons/search";
import TotalContacts from "./pages/TotalContacts";

function App() {
    const popupRef = useRef(null)

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [activeLeftBar, setActiveLeftBar] = useState(windowWidth > 1080)
    const [activeAbsoluteLeftBar, setActiveAbsoluteLeftBar] = useState(false)
    const [isFocused1, setIsFocused1] = useState(false);

    useEffect(() => {
        const handleResize = () => setWindowWidth(window.innerWidth);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleLeftBar = () => {
        if (windowWidth > 1080) {
            setActiveLeftBar(a => !a)
        } else {
            setActiveAbsoluteLeftBar(a => !a)
            activeAbsoluteLeftBar ? enableBodyScroll(popupRef.current) : disableBodyScroll(popupRef.current)
        }
    }

    useEffect(() => {
        setActiveLeftBar(windowWidth > 1080)
        if (windowWidth > 1080) {
            setActiveAbsoluteLeftBar(false)
            enableBodyScroll(popupRef.current)
        }
    }, [windowWidth]);

    return (<div className='App' ref={popupRef}>
        <header>
            <div className='header-container'>
                <div className='main-header-container'>
                    <div className={isFocused1 ? "active-registration-form__group" : "registration-form__group"}>
                        <div style={{marginLeft: 20}}>
                            <Search/>
                        </div>
                        <input className="registration-form__input"
                               placeholder="Search by Name..."
                               onFocus={() => setIsFocused1(true)}
                               onBlur={() => setIsFocused1(false)}
                               type="text"/>
                    </div>
                </div>
                <div className='right-header-container'>
                    <Avatar/>
                    <div className="user-details">
                        <h2>Mr. Director</h2>
                        <h3>Managing Director</h3>
                    </div>
                </div>
            </div>
        </header>

        <main className='main'>

            <div style={{minWidth: activeLeftBar ? 190 : 70}} className='left-bar'>
                <div className='left-bar-container'>
                    <Link to='/'>
                        <ButtonBar name='TotalContacts' text='Total Contacts' active={activeLeftBar}/>
                    </Link>
                    <Link to='/calendar'>
                        <ButtonBar name='Calendar' text='Calendar' active={activeLeftBar}/>
                    </Link>
                    <Link to='/project-report'>
                        <ButtonBar name='ProjectReport' text='Project Report' active={activeLeftBar}/>
                    </Link>
                </div>
            </div>

            <div className="blackout"
                 style={{pointerEvents: activeAbsoluteLeftBar ? '' : 'none', opacity: activeAbsoluteLeftBar ? 0.5 : 0}}
                 onClick={handleLeftBar}/>

            <div className="left-bar-absolute" style={{width: activeAbsoluteLeftBar ? 210 : 0,}}>

                <div className='header-container'>
                    <div className='left-header-container'>
                        <div className='menu-left' onClick={handleLeftBar}>
                            <MenuIcon color='#fff'/>
                        </div>
                        <Link to='/' onClick={() => {
                            setActiveAbsoluteLeftBar(false)
                            enableBodyScroll(popupRef.current)
                        }}>
                            <div className='logo'>LOGO</div>
                        </Link>
                    </div>
                </div>

                <div className='left-bar-container left-bar-container-absolute'>
                    <div className="left-bar-buttons-absolute">
                        <Link to='/' onClick={handleLeftBar}>
                            <ButtonBar name='TotalContacts' text='Total Contacts'/>
                        </Link>
                        <Link to='/calendar' onClick={handleLeftBar}>
                            <ButtonBar name='Calendar' text='Calendar'/>
                        </Link>
                        <Link to='/project-report' onClick={handleLeftBar}>
                            <ButtonBar name='ProjectReport' text='Project Report'/>
                        </Link>
                    </div>

                    <div className="left-bar-bottom">
                        <Avatar/>
                        <div className="user-details">
                            <h2>Mr. Director</h2>
                            <h3>Managing Director</h3>
                        </div>
                    </div>
                </div>

            </div>

            <div className='main-right-container'
                 style={{width: activeLeftBar ? 'calc(100% - 190px)' : windowWidth > 950 ? 'calc(100% - 70px)' : '100%'}}>
                <Routes>
                    <Route path="/" exact element={<TotalContacts/>}/>
                </Routes>
                <Routes>
                    <Route path="/calendar" element={<div/>}/>
                </Routes>
                <Routes>
                    <Route path="/project-report" element={<div/>}/>
                </Routes>
            </div>
        </main>
    </div>);
}

export default App;


