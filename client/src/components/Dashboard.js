import React from 'react';

const Dashboard = props => {
    // console.log(props)
    return(
        <div className="page-header">
            <h2>Dashboard</h2>
            <div>
                <div className="btn-sm btn-success" onClick={props.hit}>Hit</div>
                <div className="btn-sm btn-info" onClick={props.ball}>Ball</div>
                <div className="btn-sm btn-danger" onClick={props.strike}>Strike</div>
                <div className="btn-sm btn-warning" onClick={props.foul}>Foul</div>
            </div>
        </div>
    )
}

export default Dashboard;