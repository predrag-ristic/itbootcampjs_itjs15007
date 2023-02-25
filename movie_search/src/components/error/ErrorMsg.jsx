import React from 'react';
import "./style.css"

const ErrorMsg = ({ children }) => {
    return <div className='errorMsg'>{children}</div>
}

export default ErrorMsg;