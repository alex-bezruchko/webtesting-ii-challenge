import React from 'react';

const Dashboard = props => {
    // console.log(props)
    return(
        <div className="page-header">
            <h2>Dashboard</h2>
            <div>
                <div className="btn-sm btn-success" onClick={props.addCount}>Pitch !
                </div>
            </div>
        </div>
    )
}

export default Dashboard;