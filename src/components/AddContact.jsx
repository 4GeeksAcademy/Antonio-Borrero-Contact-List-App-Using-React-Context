import { Link } from "react-router-dom";

export const AddContact = () => {

	return (
		<div className="container d-flex justify-content-end pe-0">
			<Link to="/NewContact">
				<button className="AddContact btn btn-success">Add new contact</button>
			</Link>
		</div>
	);
};