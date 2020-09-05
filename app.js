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

class Counter extends React.Component {

//  constructor() {
//      super()
//      this.state = {
//          score: 0
//      }
//  }

 state = {
     score:0
 }

 updateScore= () => {
   this.setState(prevState => { return {
    score: prevState.score + 1
   }
 });
 }

 decremenetScore= () => {
    // More consise decrementing
   this.setState(prevState => ({ 
       score: prevState.score - 1
    }));
 }

 render() {
     return (
    <div className='counter'>
    <button className='counter-action decrement' onClick={this.decremenetScore}> - </button>
    <span className='counter-score'> {this.state.score} </span>
    <button className='counter-action increment' onClick={this.updateScore}> + </button>
</div>
 );
}
}

const Player = (props) => {
    return (
    <div className='player'>
        <span className='player-name'>{props.playername}</span>
        <Counter></Counter>
    </div>
    );
}

const App = (props) => {
    return (<div className='sscoreboard'>
    <Header title='Scoreboard' totalPlayers={props.initialPlayers.length} ></Header>
    
    {props.initialPlayers.map( player =>
        <Player key={player.id.toString()} playername={player.name} ></Player>
    )}

    </div>);

}

ReactDOM.render(
    <App initialPlayers={players}/>,
    document.getElementById('root')
);