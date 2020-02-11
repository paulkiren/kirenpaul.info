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