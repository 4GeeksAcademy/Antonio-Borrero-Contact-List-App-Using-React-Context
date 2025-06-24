import { Link } from "react-router-dom"

export const Card = ({ contact, getData }) => {

	const deleteContact = async (id) => {
		await fetch(`https://playground.4geeks.com/contact/agendas/Antonio/contacts/${id}`, {
			method: "DELETE"
		});

		getData();
	};

	return (

		<div className="container CardBody">
			<div className="CardImage">
				<img src="../src/assets/img/rigo-baby.jpg" alt="Image" />
			</div>
			<div className="CardContent">
				<h2>{contact.name}</h2>
				<p><span className="fa-solid fa-location-dot"></span>{contact.address}</p>
				<p><span className="fa-solid fa-phone-flip"></span>{contact.phone}</p>
				<p><span className="fa-solid fa-envelope"></span>{contact.email}</p>
			</div>
			<div className="CardButtons">
				<Link to={`/Editcontact/${contact.id}`}>
					<i className="fa-solid fa-pencil editContact"></i>
				</Link>
				<button className="deleteContact" onClick={() => {deleteContact(contact.id)}}>
					<i className="fa-solid fa-trash-can"></i>
				</button>
			</div>
		</div>)
};