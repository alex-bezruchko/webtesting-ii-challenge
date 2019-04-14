import React from 'react';

const Display = props => {
    return(
        <div className="page-header">
            <h2>Display</h2>
            <div className="container">
                <div className="col-md-6">
                    <div className="col-md-6" data-testid="ball-count">Balls: {props.balls}</div>
                    <div className="col-md-6" data-testid="strike-count">Strikes: {props.strikes}</div>
                    <div className="col-md-6" data-testid="hit-count">Hit: {props.hit}</div>
                    <div className="col-md-6">Message: <b>{props.message}</b> </div>
                </div>
                {/* <div className="col-md-6">Total:<b>{props.totalHits}</b></div> */}
                
            </div>
           
        </div>
    )
}

export default Display;