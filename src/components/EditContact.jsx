import { useEffect, useState } from "react";
import { json, Link, Navigate, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const EditContact = () => {

    const { store, dispatch } = useGlobalReducer();

    const { id } = useParams();
    const editContact = store.contacts.find(contact => contact.id === parseInt(id));

    console.log(editContact)

    const [inputName, setInputName] = useState("");
    const [inputEmail, setInputEmail] = useState("");
    const [inputPhone, setInputPhone] = useState("");
    const [inputAddress, setInputAddress] = useState("");

    useEffect(() => {
        if (editContact) {
            setInputName(editContact.name)
            setInputEmail(editContact.email)
            setInputPhone(editContact.phone)
            setInputAddress(editContact.address)
        }
    }, [editContact]);

    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();

        const putContact = async () => {
            await fetch(`https://playground.4geeks.com/contact/agendas/Antonio/contacts/${id}`, {
                method: "PUT",
                body: JSON.stringify({
                    "name": inputName,
                    "phone": inputPhone,
                    "email": inputEmail,
                    "address": inputAddress,
                }),
                headers: { "content-type": "application/json" }
            });
        };

        putContact();
        navigate("/");
    }

    return (
        <div className="container ContactHeader mt-4">
            <h2>Edit contact</h2>
            <form onSubmit={submitHandler}>
                <label htmlFor="Name">New name</label>
                <input id="Name" type="text" value={inputName} onChange={(e) => setInputName(e.target.value)} placeholder="New name" />
                <label htmlFor="Email">New Email</label>
                <input id="Email" type="text" value={inputEmail} onChange={(e) => setInputEmail(e.target.value)} placeholder="New email" />
                <label htmlFor="PhoneNumber">New Phone</label>
                <input id="PhoneNumber" type="Text" value={inputPhone} onChange={(e) => setInputPhone(e.target.value)} placeholder="New Phone" />
                <label htmlFor="Address">New Address</label>
                <input id="Address" type="text" value={inputAddress} onChange={(e) => setInputAddress(e.target.value)} placeholder="New Address" />
                <button className="btn btn-primary mb-1" type="submit">Save</button>
            </form>
            <Link to="/">
                <span className="return">or get back to contacts</span>
            </Link>
        </div>
    )
}