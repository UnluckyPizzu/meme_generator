import troll from './img/troll_face.svg';


export default function Header() {
    return (
        <header>
            <img src={troll} className='icon-header' />
            <h2 className='header-title'>Meme Generator</h2>

            <h4 className='header-project'>React Course - Project 3</h4>
        </header>
    )
}