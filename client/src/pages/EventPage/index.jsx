<<<<<<< HEAD
import React, { useState } from "react";
import "./style.module.css";
import EventMain from "./event-main";
=======
import React, {useState} from "react";
import EventMain from "./EventMain"
import LocalStylesheet from './local.style';

>>>>>>> develop

/*

    Page: EventPage

    Purpose: The literal event page that the user is routed to once
    they click on an event in an event listing from a user home page.

    *IMAGE*
    *TITLE*
    *DATE/TIME/LOCATION*
    *DESCRIPTION*
    *ORGANIZER*
    *SPONSOR*
    *COMMENTS*
    *PARTICIPANTS*

*/

function EventPage() {
<<<<<<< HEAD
  return <EventMain />;
=======
    return (
        <LocalStylesheet>
            <EventMain/>
        </LocalStylesheet>
    )
>>>>>>> develop
}

export default EventPage;
