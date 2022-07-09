import React, { useState } from 'react';



function RSVPForm() {
    const [formState, setFormState] = useState({ invitationID: '', response: '' });
    const { invitationID, response } = formState;
    const [checked, setChecked] = useState("Yes");
    const [errorMessage, setErrorMessage] = useState('');

    function handleChange(e) {
        if (!e.target.value.length) {
            setErrorMessage(`Your ${e.target.name} is required to proceed.`);
        } else {
            setErrorMessage('');
        }
        if (!errorMessage) {
            setFormState({ ...formState, [e.target.name]: e.target.value })
        }

    }

    function handleAttendanceChange(event) {
        setChecked(() => {
            return {
                Yes: false,
                No: false,
                [event.target.value]: true
            };
        });

    }


    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState);
    }

    return (
        <section className="container">
            <h1 data-testid="contact">RSVP</h1>
            <form id="contact-form" onSubmit={handleSubmit} className="px-5">
                <div className="py-2">
                    <label htmlFor="invitationID">Enter Invitation ID:</label>
                    <input type="text" name="invitation ID" onBlur={handleChange} defaultValue={invitationID} />
                </div>
                <div>
                    <label htmlFor="response">Will you be attending?</label>
                </div>
                <div className="py-2, radio-buttons">
                    <label>Yes</label>
                    <input type="radio" value="Yes" name="response-yes" checked={checked.Yes} onChange={handleAttendanceChange} />
                    <label>No</label>
                    <input type="radio" value="No" name="response-no" checked={checked.No} onChange={handleAttendanceChange} />
                </div>
                {errorMessage && (
                    <div className="py-1">
                        <p className="error-text">{errorMessage}</p>
                    </div>
                )}
                <button data-testid="contact-button" type="submit">Submit</button>
            </form>
        </section >
    )

}

export default RSVPForm;
