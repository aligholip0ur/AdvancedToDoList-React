export default function CurrentDay() {
    const date = new Date();
    const day = date.getDay();
    const month = date.toUTCString().slice(8, 12);
    const year = date.getFullYear();
    return (
        <div>
            <div className="date">
                <p className="day">{day}</p>
                <div>
                    <p className="month">{month}</p>
                    <p className="year">{year}</p>
                </div>
            </div>
        </div>
    );
}
