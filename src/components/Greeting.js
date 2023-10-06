import './Greeting.css';
function Greeting() {
    const style={
        color:"blue",
        backgroundColor:"orange"    }
    return (
        <div>
            <h1 style={{color:"red"}}>Inline style</h1>
            <h1 style={style}>Internal style</h1>
        </div>
    )
}
export default Greeting;