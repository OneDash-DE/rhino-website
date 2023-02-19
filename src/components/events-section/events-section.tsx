import classNames from "classnames";
import dayjs from "dayjs";
import React from "react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import { EventEntity, HomepageEntity } from "types/gql-api";
import styles from "./events-section.module.sass";

interface EventsSectionProps {
	events: EventEntity[];
	homepage: HomepageEntity;
}

export const EventsSection = (props: EventsSectionProps) => {
	const events = props.events.filter((x) => dayjs(x.attributes?.date).isAfter(dayjs()));
	return (
		<div id="live" className={classNames("upperspacer", styles.events)}>
			<h1>Live</h1>
			<div>
				<ReactMarkdown>{props.homepage.attributes?.liveText ?? ""}</ReactMarkdown>

				{events.length > 0 ? (
					<>
						<div className={classNames(styles.table, styles.header)}>
							<div>Event</div>
							<div>Date</div>
							<div>Description</div>
						</div>
						<div className={classNames(styles.table, styles.body)}>
							{events.map((event) => (
								<React.Fragment key={event.id}>
									<div>{event.attributes?.name}</div>
									<div>{dayjs(event.attributes?.date).format("LLL")}</div>
									<div>
										<ReactMarkdown>{event.attributes?.description ?? ""}</ReactMarkdown>
									</div>
								</React.Fragment>
							))}
						</div>
					</>
				) : (
					<p>Unfortunally, there are no upcoming events.</p>
				)}
			</div>
		</div>
	);
};
