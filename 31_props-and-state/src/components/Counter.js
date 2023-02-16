import React from 'react';

// class Counter extends Component {

//     render() {
//         return (
//             <div>
//                 <p>{this.props.count}</p>
//                 <button
//                     className='button-dec'
//                     onClick={() => this.props.onDecrement(this.props.id)}>
//                     Decrement
//                 </button>
//                 <button
//                     className='button-inc'
//                     onClick={() => this.props.onIncrement(this.props.id)}>
//                     Increment
//                 </button>
//             </div>
//         );
//     };
// };

// const Counter = (props) => {

// Destructuring
const Counter = ({ count, id, onIncrement, onDecrement, onDelete }) => {
    return (
        <div>
            <p>{count}</p>
            <button
                className='button-dec'
                onClick={() => onDecrement(id)}>
                Decrement
            </button>
            <button
                className='button-inc'
                onClick={() => onIncrement(id)}>
                Increment
            </button>
            <button
                className='button-del'
                onClick={() => onDelete(id)}>
                Delete
            </button>
        </div>
    );
};

export default Counter