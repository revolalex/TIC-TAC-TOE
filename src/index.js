import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Board from './components/Board'



class Game extends React.Component {
  render() {
    return (

      <div class="wrapper">
        <span className='neon-text'>TIC </span>
        <span className='neon-text-o'>TAC </span>
        <span className='neon-text'>TOE </span>


          <div className="">
            <div className="game">
              <div className="game-board">
                <Board />
              </div>
              <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
              </div>
            </div>
          </div>


      </div>




    );
  }
}

// ========================================

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
