import { useEffect, useState } from "react";
import "./App.scss";
import { getLobbyEvents } from "./helpers/GetLobbyEvents";
import EventItem, { EventItemProps } from "./components/EventItem/EventItem";
import {
  DayBanner,
  Dots,
  ImageCarousel,
  Logos,
  Mission,
  Table,
} from "./components";
import moment from "moment";

function App() {
  const [events, setEvents] = useState<EventItemProps[]>([]);

  const lobbyFetcher = async () => {
    setEvents(
      (await getLobbyEvents()).map((event) => {
        return { ...event, start: moment(event.start).format("h:mm A") };
      })
    );
  };

  useEffect(() => {
    lobbyFetcher();
  }, []);

  return (
    <div className="app">
      <DayBanner />
      <Mission />
      <Logos />
      <Dots />
      <div className="events">
        {/* {events.map((event) => (
          <EventItem event={event} />
        ))} */}
        {events && <Table events={events} />}
      </div>
      <div className="carousel">
        <ImageCarousel />
      </div>
    </div>
  );
}

export default App;
