import React, { useState } from "react";
import EventMain from "./EventMain";
import LocalStylesheet from "./local.style";

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
  return (
    <LocalStylesheet>
      <EventMain />
    </LocalStylesheet>
  );
}

export default EventPage;
