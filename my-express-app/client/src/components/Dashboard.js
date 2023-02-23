import React from 'react';

function Dashboard(props) {
    return (
        <div>
            { 
            props.allEventsCb.map(e => (
                <div key={e.id}>
                {e.date}
                {e.title} 
                {e.deadline}
                {e.activityName}
                {e.description}
                {e.price}
                {e.link}
                {e.location}

                </div>

            ))
            }

        </div>

    );
}

export default Dashboard;