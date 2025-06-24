import { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom"

export const NewContact = () => {

    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputAddress, setInputAddress] = useState("");

    const navigate = useNavigate();

    const submitHandler = async (e) => {
        e.preventDefault();

        if (inputName.trim()  == "") return alert("Add contact name");
        if (inputEmail.trim() == "") return alert("Add contact e-mail");
        if (inputPhone.trim() == "") return alert("Add contact phone number");
        if (inputAddress.trim() == "") return alert("Add contact address");

        await fetch("https://playground.4geeks.com/contact/agendas/Antonio/contacts", {
            method: "POST",
            body: JSON.stringify({
                "name": inputName,
                "phone": inputPhone,
                "email": inputEmail,
                "address": inputAddress,
            }),
            headers: { "content-type": "application/json" }
        });

        navigate("/");
    };

    return (
        <div className="container ContactHeader mt-4">
            <h2>Add a new contact</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="Name">Full Name</label>
                <input id="Name" type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} placeholder="Full Name" />
                <label htmlFor="Email">Email</label>
                <input id="Email" type="text" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} placeholder="Email" />
                <label htmlFor="PhoneNumber">Phone</label>
                <input id="PhoneNumber" type="Text" value={inputPhone} onChange={(e) => setInputPhone(e.target.value)} placeholder="Enter Phone" />
                <label htmlFor="Address">Address</label>
                <input id="Address" type="text" value={inputAddress} onChange={(e) => setInputAddress(e.target.value)} placeholder="Address" />
                <button className="btn btn-primary mb-1" onClick={submitHandler}>Save</button>
            </form>
            <Link to="/">
                <span className="return">or get back to contacts</span>
            </Link>
        </div>
    )
}