import React from "react";
import './Feedback.css'

const initialFormData = Object.freeze({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    message: "",
    date:"",
    feedbacktitle:"",
    radio:"Male",
    Promote:"",
    Spam:""
});

export default function Feedback() {
    const [formData, updateFormData] = React.useState(initialFormData);

    const handleChange = (e) => {
        updateFormData({
            ...formData,

            [e.target.name]: e.target.value.trim()
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        // ... submit to API or something
    };

    return (
        <div className="header">
            <h2 className="FormText">Feedback!</h2>
            <div className="FormHeader"><form>
                <div className="large-group">
                    <div className="small-group">
                        <label htmlFor="firstname">First Name</label>
                        <input id="firstname" type="text" name="firstname" onChange={handleChange} />
                    </div>

                    <div className="small-group">
                        <label htmlFor="lastname">Last Name</label>
                        <input htmlFor="lastname" type="text" name="lastname" onChange={handleChange} />
                    </div>

                    <div className="small-group">
                        <label htmlFor="email">Email</label>
                        <input id="email" type="email" name="email" onChange={handleChange} />
                    </div>

                    <div className="small-group">
                        <label htmlFor="phonenumber">Phone Number</label>
                        <input id="phonenumber" type="tel" name="phonenumber" onChange={handleChange} />
                    </div>

                    <div className="small-group">
                        <label htmlFor="date">Date</label>
                        <input id="date" type="date" name="date" onChange={handleChange} />
                    </div>

                    <div className="small-group">
                        <label htmlFor="date">Feedback Title</label>
                        <input id="feedbacktitle" type="text" name="feedbacktitle" onChange={handleChange} />
                    </div>

                    <div className="textarea-div">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" type="text" name="message" onChange={handleChange}></textarea>
                    </div>
                    <div className="row user-checkmarks">
                        <label className="check-container">Get Notified
                            <input type="checkbox" name="Spam" value="Spam" onChange={handleChange}/>
                            <span className="tickmark"></span>
                        </label>
                        <label className="check-container">Agree to cookies
                            <input type="checkbox" name="Promote" value="Promote" onChange={handleChange}/>
                            <span className="tickmark"></span>
                        </label>
                    </div>
                    <div className="row gender-radios">
                        <label className="radio-container">Male
                            <input type="radio" checked="checked" name="radio" value="Male" onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-container">Female
                            <input type="radio" name="radio" value="Female" onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>
                        <label className="radio-container">Other
                            <input type="radio" name="radio" value="Other" onChange={handleChange}/>
                            <span className="checkmark"></span>
                        </label>
                    </div>


                    <button id="submit" className="btn" type="submit" name="submit" onClick={handleSubmit}>SUBMIT</button>
                </div>
            </form></div>

        </div>
    );

}