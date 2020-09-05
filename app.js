{/* React components upper case */}
const Header = (props) => {
    return      (
        <header>
            <h1>{props.title}</h1>
            <span className='stats'> Players {props.totalPlayers}</span>
        </header>
    );
}

const Counter = (props) => {
 return (
    <div className='counter'>
    <button className='counter-action decrement'> - </button>
    <span className='counter-score'> {props.score} </span>
    <button className='counter-action increment'> + </button>
</div>
 );
}

const Player = (props) => {
    return (
    <div className='player'>
        <span className='player-name'>{props.playername}</span>
        <Counter score={props.score}></Counter>
    </div>
    );
}

const App = () => {
    return (<div className='sscoreboard'>
    <Header title='Scoreboard' totalPlayers={1} ></Header>
    <Player playername='Ciaran' score={0}></Player>
    </div>);

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);