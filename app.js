{/* React components upper case */}
const Header = () => {
    return      (
        <header>
            <h1>Scoreboard</h1>
            <span className='stats'> Players : 1</span>
        </header>
    );
}

const Counter = () => {
 return (
    <div className='counter'>
    <button className='counter-action decrement'> - </button>
    <span className='counter-score'> 182 </span>
    <button className='counter-action increment'> + </button>
</div>
 );
}

const Player = () => {
    return (
    <div className='player'>
        <span className='player-name'>Ciaran</span>
        <Counter></Counter>
    </div>
    );
}

const App = () => {
    return (<div className='sscoreboard'>
    <Header></Header>
    <Player></Player>
    </div>);

}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);