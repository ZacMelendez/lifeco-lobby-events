import moment from "moment";
import { EventItemProps } from "../components/EventItem/EventItem";

export const getLobbyEvents = async (): Promise<EventItemProps[]> => {
    try {
        const response = await fetch(
            "https://hxp3quefwb.execute-api.us-east-1.amazonaws.com/Prod/"
        );
        const data = (await response.json()) as EventItemProps[];

        console.log(data);

        return data
            .filter((item) => item.location.toLowerCase().includes("room"))
            .filter((item) => moment(item.start).date() == moment().date());
    } catch (err) {
        console.error(err);
        return [];
    }
};

// const itemContainer = $("#item-container");
//         data.filter((item) =>
//                     item.location.toLowerCase().includes("room")
//                    ).forEach((item, index) => {
//           const $card = $("#sample-item").clone();
//           $card.removeClass("hide");
//           $card.attr("id", `event-${index}`);

//           $(".group-title", $card).text(item.event_name);
//           $(".group-location", $card).text(item.location);
//           $(".group-time", $card).text(
//             moment(item.start).format("h:mm A")
//           );
//           $card.prependTo($("#item-container"));
//         });
//       })
//         .catch((err) => console.error(err));
//     });
