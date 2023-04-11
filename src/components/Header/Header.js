import logo from '../../assets/NYTimes-logo.png'


export const Header = () => {
    return (
        <header>
            <div className="header">
                <img
                className="emblem"
                src={logo}
                alt="new york times logo"
                ></img>
                <h1 className="main-page-title">Today's Top Stories</h1>
            </div>
        </header>
    )
}