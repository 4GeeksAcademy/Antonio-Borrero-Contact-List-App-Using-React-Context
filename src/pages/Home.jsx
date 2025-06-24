import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { Card } from "../components/Card.jsx"
import { AddContact } from "../components/AddContact.jsx";
import { useActionData } from "react-router-dom";
import { useEffect } from "react";

export const Home = () => {

	const { store, dispatch } = useGlobalReducer();

	const getData = async () => {
		const result = await fetch("https://playground.4geeks.com/contact/agendas/Antonio");
		const data = await result.json();
		dispatch({
			type: "setContacts",
			payload: { contacts: data.contacts }
		});
	};

	useEffect(() => {
		getData()
	},[]);

	return (
		<div className="text-center mt-5">
			<AddContact />
			<ul>
				{store.contacts.map((setContacts, index) => (
					<Card contact={setContacts} getData={getData} key={index}/>
				))}
			</ul>
		</div>
	);
}; 