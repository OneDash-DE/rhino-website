import classNames from "classnames";
import dayjs from "dayjs";
import React, { useMemo } from "react";
import ReactMarkdown from "react-markdown";
import styles from "./events-section.module.sass";
import { EventsQuery, HomepageQuery } from "types/gql-api";

interface EventsSectionProps {
	events: EventsQuery["events"];
	homepage: HomepageQuery["homepage"];
}

export const EventsSection = (props: EventsSectionProps) => {
	const events = useMemo(() => {
		return props.events.sort((a, b) => dayjs(b?.date).diff(dayjs(a?.date)));
	}, [props.events]);

	return (
		<div id="live" className={classNames("upperspacer", styles.events)}>
			<h1>Live</h1>
			<div>
				<ReactMarkdown>{props.homepage?.liveText ?? ""}</ReactMarkdown>

				{events.length > 0 ? (
					<>
						<div className={classNames(styles.table, styles.header)}>
							<div className={classNames(styles.row)} key={"header"}>
								<div>Event</div>
								<div>Date</div>
							</div>
						</div>
						<div className={classNames(styles.table, styles.body)}>
							{events.map((event) => (
								<div
									className={classNames(
										styles.row,
										event?.canceled && styles.canceled,
										dayjs(event?.date).isBefore(dayjs()) && styles.past,
									)}
									key={event?.documentId}>
									<div>{event?.name}</div>
									<div>{dayjs(event?.date).format("DD.MM.YYYY")}</div>
								</div>
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
