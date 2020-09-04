{/* React components upper case */}
const Header = () => {
    return      (
        <header>
            <h1>Scoreboard</h1>
            <span className='stats'> Players : 1</span>
        </header>
    );
}



const Player = () => {
    return (
    <div className='player'>
        <span className='player-name'>Ciaran</span>
    
        <div className='counter'>
            <button className='counter-action decrement'> - </button>
            <span className='counter-score'> </span>
            <button className='counter-action increment'> + </button>
        </div>
    </div>
    );
}

const Ciaran_App = () => {
    return (<div>
    <Header></Header>
    <Player></Player>
    </div>);

}

ReactDOM.render(
    <Ciaran_App />,
    document.getElementById('root')
);