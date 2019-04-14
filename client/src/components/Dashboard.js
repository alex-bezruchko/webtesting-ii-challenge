import React from 'react';

const Dashboard = props => {
    // console.log(props)
    return(
        <div className="page-header">
            <h2>Dashboard</h2>
            <div>
                <button className="btn-sm btn-success" onClick={props.hit}>Hit</button>
                <button className="btn-sm btn-info" onClick={props.ball}>Ball</button>
                <button className="btn-sm btn-danger" onClick={props.strike}>Strike</button>
                <button className="btn-sm btn-warning" onClick={props.foul}>Foul</button>
            </div>
        </div>
    )
}

export default Dashboard;