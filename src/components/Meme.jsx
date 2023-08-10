import MemeProvider from "./MemeProvider"
import React from "react";

export default function Meme() {
const [meme,setMeme] = React.useState({
    topText : "",
    bottomText : "",
    image : MemeProvider.memes[0]
})

const [allMemes,setAllMemes] = React.useState([])

React.useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
    .then(res => res.json())
    .then(data => setAllMemes(data.data.memes))
}, [])

    


    function getMeme() {
        const random = Math.floor(Math.random() * allMemes.length)
        const url = allMemes[random].url
        setMeme(prevMeme => ({
            ...prevMeme,
            image: url
        }))
    }

    function setTopText() {
        const top = document.getElementById("top-text");
        setMeme(prevMeme => ({
            ...prevMeme,
            topText: top.value     
        }))
    }

    function setBottomText() {
        const bottom = document.getElementById("bottom-text");
        setMeme(prevMeme => ({
            ...prevMeme,
            bottomText: bottom.value     
        }))
    }



    return (
        <main>
            <div className="grid-form">
                <input id="top-text" onChange={setTopText} className="form-input" type="text" placeholder="Top text"/>
                <input id="bottom-text" onChange={setBottomText} className="form-input" type="text" placeholder="Bottom text"/>
                <button onClick={getMeme} className="form-button">Get a new meme image 🖼</button>
            </div>
            <div className="meme-container">
                <img src={meme.image} alt="Meme Background"/>
                <div className="top-caption">{meme.topText}</div>
                <div className="bottom-caption">{meme.bottomText}</div>
            </div>
        </main>
    )
}