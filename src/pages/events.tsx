import * as React from "react";
import { graphql } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from "../components/Layout";
import Event from "../components/Event";
import * as styles from "./events.module.css";

const EventsPage = ({ data }) => {
  return (
    <Layout>
      <section>
        <h1>Events</h1>
      </section>
      <section>
        <div className="eventList">
          <h2 className="eventHeading">Future events</h2>
          <ul className={styles.events__list}>
            {data.futureEvents.nodes.map((event) => (
              <Event key={event.id} event={event} />
            ))}
          </ul>
        </div>
        <div className="eventList">
          <h2 className="eventHeading">Past events</h2>
          <ul className={styles.events__list}>
            {data.pastEvents.nodes.map((event) => (
              <Event key={event.id} event={event} />
            ))}
          </ul>
        </div>
      </section>
    </Layout>
  );
};

export const query = graphql`
  {
    futureEvents: allEvent(
      filter: { collection: { eq: "future" } }
      sort: { startDate: ASC }
    ) {
      nodes {
        id
        name
        startDate
        endDate
        location
        url
      }
    }
    pastEvents: allEvent(
      filter: { collection: { eq: "past" } }
      sort: { startDate: DESC }
    ) {
      nodes {
        id
        name
        startDate
        endDate
        location
        url
      }
    }
  }
`;

export default EventsPage;
