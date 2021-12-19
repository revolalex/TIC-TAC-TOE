import React from 'react'
import Square from './Square'



class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // board inital state contain an array of 9 null
            squares: Array(9).fill(null),
            xIsNext: true,
        }
    }
    handleClick(i) {
        // slice() create a copy of squares array to modify
        const squares = this.state.squares.slice();
        if (this.calculateWinner(squares) || squares[i]) {
            return;
        }
        squares[i] = this.state.xIsNext ? 'X' : 'O'
        this.setState({
            squares: squares,
            xIsNext: !this.state.xIsNext
        })
    }
    renderSquare(i) {
        return <Square value={this.state.squares[i]}
            onClick={() => this.handleClick(i)} />;
    }
    calculateWinner(squares) {
        const lines = [
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6],
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    render() {
        const winner = this.calculateWinner(this.state.squares);
        let status;
        if (winner) {
            status = 'WINNER: ' + winner
        } else {
            status = 'PLAYER: ' + (this.state.xIsNext ? 'X' : '0')
            console.log(this.state.xIsNext)
        }
        console.log(status)
        return (

            <div className="board">
                <br/>
                <div className={status === 'PLAYER: X' ? 'neon-small-text status' : 'neon-small-text-o status'}>{status}</div>
                <br /> <br/><br/><br/><br/>
                <div>
                    <div className="board-row">
                        {this.renderSquare(0)}
                        {this.renderSquare(1)}
                        {this.renderSquare(2)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(3)}
                        {this.renderSquare(4)}
                        {this.renderSquare(5)}
                    </div>
                    <div className="board-row">
                        {this.renderSquare(6)}
                        {this.renderSquare(7)}
                        {this.renderSquare(8)}
                    </div>
                </div>
            </div>
        );
    }

}
export default Board