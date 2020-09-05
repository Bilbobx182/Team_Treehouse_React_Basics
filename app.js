{/*
    Author :  Ciaran O Nuallain 
    Date : 05/September/2020
    Purpose : Micro Project following team tree-house to engage with REACT best processes.

*/}


const players = [
     {'id':0,'name':'ciaran',score:0},
     {'id':1,'name':'luigi',score:0},
]

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

const App = (props) => {
    return (<div className='sscoreboard'>
    <Header title='Scoreboard' totalPlayers={props.initialPlayers.length} ></Header>
    
    {props.initialPlayers.map( player =>
        <Player key={player.id.toString()} playername={player.name} score={player.score}></Player>
    )}

    </div>);

}

ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('root')
);