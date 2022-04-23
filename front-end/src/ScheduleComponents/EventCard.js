export default function EventCard({ date, name, desc }) {
    return (
        <div className="response-card">
            <p className="date">{date}</p>
            <br></br>
            <h3 className="name">{name}</h3>
            <p className="desc">{desc}</p>
        </div>
    );
}