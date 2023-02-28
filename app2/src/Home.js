import './Style.css';
const Home = () => {

    let style = {
        backgroundColor : 'pink',
        color : 'blue',
        fontSize : '15px'
    }

  return (
    <>
    
    <h1>Home Page</h1>
    <div style={style}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed consequatur corporis voluptatum corrupti quas quisquam pariatur iure facilis reiciendis et non mollitia, officiis culpa consequuntur commodi ducimus expedita, maiores error!</div>
    <h2 className="bg-orange">Hello World</h2>
    <h3>The Stepping Stone</h3>
    </>

  )
}

export default Home

/*

<p style="background-color : 'blue'; color : 'red'"></p>

*/