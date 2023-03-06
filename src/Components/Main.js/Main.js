import './Main.css';


const Main = (props) => {
    return (
    <div className='main-container'>
        <h1>
            {props.title}
        </h1>
        <p>
            {props.text}
        </p>
    </div>
    )
}

Main.defaultProps = {
    title: "Fallo props",
    text: "Sorry por la inconveniencia"
}

export default Main;