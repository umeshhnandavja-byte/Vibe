import Profile from './assets/PHOTO80.jpg';

function Card(){
        return(
            <div className='card'>
                <img className='card_img' src={Profile} alt="Profile Picture"></img>
                <h2 className='card_title'>Umeshh Nanda</h2>
                <p className='card-text'>I do Coding for Fun, I play Video Games Much</p>
            </div>
        );
}

export default Card