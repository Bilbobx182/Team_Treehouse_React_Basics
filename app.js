{/*
    Author :  Ciaran O Nuallain 
    Date : 05/September/2020
    Purpose : Micro Project following team tree-house to engage with REACT best processes.

*/}

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

class App  extends React.Component {

    state = {
        players: [
            {'id':0,'name':'Ciaran'},
            {'id':1,'name':'Mary'},
        ]
    }

    render() {
        return (
        <div className='sscoreboard'>
        <Header title='Scoreboard' totalPlayers={this.state.players.length} ></Header>
        
        {this.state.players.map( player =>
            <Player key={player.id.toString()} playername={player.name} ></Player>
        )}
    
        </div>);
    }
}

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);