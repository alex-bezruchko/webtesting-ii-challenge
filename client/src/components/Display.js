import React from 'react';

const Display = props => {
    console.log(props)
    return(
        <div className="page-header">
            <h2>Display</h2>
            <div className="container">
                <div className="col-md-6">
                    <div className="col-md-6">Balls:  
                        {props.balls}
                    </div>
                    <div className="col-md-6">Strikes: 
                        {props.strikes}
                    </div>
                    
                    <div className="col-md-6">Foul: 
                        {props.foul}
                    </div>
                    <div className="col-md-6">Message: 
                        <b>{props.message}</b>
                    </div>
                </div>
                <div className="col-md-6">Hits: 
                    <b>{props.hit}</b>
                </div>
                
            </div>
           
        </div>
    )
}

export default Display;