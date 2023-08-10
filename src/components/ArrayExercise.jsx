

export default function Test() {
    const array = ["Prova1","Prova2"]

    const arrayJSX = array.map(x => {
        return (
            <p>{x}</p>
        )
    })
    return (
        <div>
            <button>ok</button>
            {
                arrayJSX
            }
        </div>
    )
}