import React, { useState } from "react";

const INIT_STATE = {
    "main": {
        date: '',
        title: '',
        deadline: '',

        "subActivity": {
            activityName: '',
            description: '',
            price: '',
            link: '',
            location: ''
        }
    }
}

function AddFormEvent(props) {
    const [formData, setFormData] = useState(INIT_STATE)

    function handleSubmit(event) {
        event.preventDefault();
        props.addEventFormCb(formData);
        setFormData(INIT_STATE);
        // console.log("something has been submitted")
    }

    function handleChange(event) {
        let { name, value } = event.target;
        setFormData (data => ({
            ...data,
            [name]: value,
        }));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Main info</h1>
                <label>
                    Date
                    <input 
                    type= "text"
                    name= "date"
                    value={formData.date}
                    onChange={handleChange}
                    />
                </label>

                <label>
                    Title
                    <input 
                    type= "text"
                    name= "title"
                    value={formData.title}
                    onChange={handleChange}
                    />
                </label>

                <label>
                    Due date
                    <input 
                    type= "text"
                    name= "deadline"
                    value={formData.deadline}
                    onChange={handleChange}
                    />
                </label>

                <h1>Activity info</h1>
                <label>
                    Name
                    <input 
                    type= "text"
                    name= "activityName"
                    value={formData.activityName}
                    onChange={handleChange}
                    />
                </label>

                <label>
                    Description
                    <input 
                    type= "text"
                    name= "description"
                    value={formData.description}
                    onChange={handleChange}
                    />
                </label>

                <label>
                    Price
                    <input 
                    type= "number"
                    name= "price"
                    value={formData.price}
                    onChange={handleChange}
                    />
                </label>

                <label>
                    Link
                    <input 
                    type= "link"
                    name= "link"
                    value={formData.link}
                    onChange={handleChange}
                    />
                </label>

                <label>
                    Location
                    <input 
                    type= "text"
                    name= "location"
                    value={formData.location}
                    onChange={handleChange}
                    />
                </label>

                <div>
                    <button type="submit">Submit</button>
                </div>

            </form>
        </div>
    );
}

export default AddFormEvent;