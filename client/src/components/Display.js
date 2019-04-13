import React from 'react';

const Display = props => {
    return(
        <div className="page-header">
            <h2>Display</h2>
            <div>
                <div className="col-md-6">Balls: 
                    {props.balls}
                </div>
                <div className="col-md-6">Strikes:
                    {props.strikes}
                </div>
            </div>
        </div>
    )
}

export default Display;