import React, { Component } from 'react';
import Counter from './Counter';

class Counters extends Component {
    state = {
        counters: [
            { id: 1, count: 0 },
            { id: 2, count: 0 },
            { id: 3, count: 0 },
            { id: 4, count: 0 },
        ]
    };

    handleIncrement = (id) => {
        // ... => Spread operator
        const counters = [...this.state.counters]

        this.setState({
            counters: counters.map(counter => {
                return counter.id === id ? { ...counter, count: counter.count + 1 } : counter
            })
        });
    };

    handleDecrement = (id) => {
        const counters = [...this.state.counters]

        this.setState({
            counters: counters.map(counter => {
                return counter.id === id ? { ...counter, count: counter.count - 1 } : counter
            })
        });
    };

    handleDelete = (id) => {
        const counters = [...this.state.counters]

        this.setState({
            counters: counters.filter(counter => {
                return counter.id !== id
            })
        });
    };

    render() {
        return <div>
            {this.state.counters.map(counter => (
                <Counter
                    key={counter.id}
                    count={counter.count}
                    id={counter.id}
                    onIncrement={this.handleIncrement}
                    onDecrement={this.handleDecrement}
                    onDelete={this.handleDelete} />
            ))}
        </div>
    };
};

export default Counters