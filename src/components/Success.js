import {Link} from "react-router-dom";

export const Success = () => {
    return(
        <section className="success">
            <h2> Message Sent</h2>
            <p> I'll get back to you within a couple of days. Sit tight! </p>
            <Link to="/" className="back-link">
            &gt; Back to homepage
            </Link>
        </section>
    );
}