import react_logo from './assets/react.svg'

function Footer(){

    return(
        <footer>
            <hr></hr>
            <p>&copy;Copyright {new Date().getFullYear()}</p>
            <p>Made with <img src={react_logo}></img></p>
        </footer>
    );
}

export default Footer