class Board extends React.Component {
    renderSquare(i) {
        return <Square value={i} />
    }
}

class Square extends React.Component {
    render() {
        return (
            <Button className="square">
                {this.props.value}
            </Button>
        );
    }
}

class Game extends React.Component {
    render() {
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/*status*/}</div>
                <ol>{/* todo */}</ol>
            </div>
        </div>

    }
}


ReactDOM.render(
    <Game />, document.getElementById('root')
);