import { useEffect, useState } from "react";
import "./App.scss";
import { getLobbyEvents } from "./helpers/GetLobbyEvents";
import EventItem, { EventItemProps } from "./components/EventItem/EventItem";
import { DayBanner, ImageCarousel, Logos, Mission } from "./components";

function App() {
    const [events, setEvents] = useState<EventItemProps[]>([]);

    const lobbyFetcher = async () => {
        setEvents(await getLobbyEvents());
    };

    useEffect(() => {
        lobbyFetcher();
    }, []);

    return (
        <div className="app">
            <DayBanner />
            <Mission />
            <Logos />
            <div className="events">
                {events.map((event) => (
                    <EventItem event={event} />
                ))}
            </div>
            <div className="carousel">
                <ImageCarousel />
            </div>
        </div>
    );
}

export default App;
