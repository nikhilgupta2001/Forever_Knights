import React from 'react';
function Toast(props)
{
    console.log(props);
    return (
        <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
            <div className="toast-header">
                <strong className="mr-auto">Error</strong>
                <button type="button" className="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="toast-body">
                {props.message}
            </div>
        </div>
    )
}
export default Toast;