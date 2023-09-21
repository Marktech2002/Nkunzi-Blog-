import { Link } from "react-router-dom";

const Notfound = () => {
    return (
        <div className="not-found">
            <h2> Sorry 404 </h2>
            <p>Page cannot be Found </p>
            <Link to="/">Back to HomePage ...</Link>
        </div>
    );
}
 
export default Notfound;