import React from 'react';
import spinnerSvg from "../../assets/images/spinner.svg"

const Loading = () => {
    return (
        <div className='spinner-wrapper'>
            <img src={spinnerSvg} alt="spinner" />
        </div>
    );
}

export default Loading;