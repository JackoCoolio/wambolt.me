import React from 'react';

class Typing extends React.Component {

    constructor(props) {
        super(props);

        this.currentChar = 0;

        this.state = {
            text: '',
            speed: 150,
            deleting: false,
            index: 0
        };
    }

    componentDidMount() {
        this.type();
    }

    type = () => {

        // if we are cycling keep track
        const cycle = this.props.cycle;

        const delay = this.props.delay | 500;

        // get state variables
        const { text, speed, deleting, index } = this.state;

        // get target string
        const targetText = cycle ? this.props.text[index] : this.props.text;

        // type
        this.setState({
            text: deleting ? targetText.substring(0, text.length - 1) : targetText.substring(0, text.length + 1),
            speed: deleting ? 50 : 150
        });

        // we have deleted everything, next string
        if (deleting && this.state.text === '') {
            this.setState({
                deleting: false,
                index: this.props.cycle ? (index + 1) % this.props.text.length : 0
            });
            // we've reached the end, now wait a bit and then delete
        } else if (!deleting && this.state.text === targetText) {
            if (!cycle) return;
            return setTimeout(() => {
                this.setState({
                    deleting: true
                });
                this.type();
            }, delay);
        }

        setTimeout(this.type, this.state.speed);
    }

    render() {
        return (<>
            <span>{this.state.text}</span>
        </>
        );
    }

}

export default Typing;