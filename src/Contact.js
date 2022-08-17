import React, { useState } from "react";

const Contact = () => {

    const [contact, setContact] = useState({
        fullname: "",
        email: "",
        phone: "",
        address: "",

    })

    const inputEvent = (event) => {

        const { name, value } = event.target;

        setContact((prevalue) => {
            return {
                ...prevalue,
                [name]: value,

            };
        })
    }

    const onSubmits = (e) => {
        e.preventDefault();
        alert(`Hi!${contact.fullname} your form is successfully submitted`);

    }

    return (<>
        <div className="my-5">
            <h1 className="text-center">Contact Us</h1>
        </div>
        <div className="container contact_div">
            <div className="row">
                <div className="col-md-6 col-10 mx-auto">
                    <form onSubmit={onSubmits}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Enter Your FullName</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="FullName" name="fullname" value={contact.fullname} onChange={inputEvent} required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Email address</label>
                            <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Address" name="email" value={contact.email} onChange={inputEvent} required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlInput1" className="form-label">Enter Mobile No</label>
                            <input type="number" className="form-control" id="exampleFormControlInput1" placeholder="Mobile-No" name="phone" value={contact.phone} onChange={inputEvent} required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleFormControlTextarea1" className="form-label">Enter Your Message</label>
                            <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="address" value={contact.address} onChange={inputEvent} required></textarea>
                        </div>
                        <div className="col-12">
                            <button className="btn btn-primary" type="submit">Submit form</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>)
}
export default Contact;