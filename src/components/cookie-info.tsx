import { useLocalStorage } from "@/logic/use-local-storage-hook";
import React from "react";
import CookieConsent from "react-cookie-consent";

interface CookieInfoProps {
	onPrivacyPolicyClick: () => void;
}

export const CookieInfo = ({ onPrivacyPolicyClick }: CookieInfoProps) => {
	const [_allowYoutube, setAllowYoutube] = useLocalStorage(`allow-youtube`, false, 1);
	const [_allowSpotify, setAllowSpotify] = useLocalStorage(`allow-spotify`, false, 2);
	const [cookieBannerAnswer, setCookieBannerAnswer] = useLocalStorage<boolean | boolean>(`cookie-banner-answer`, undefined as any, 3);

	return (
		<>
			{cookieBannerAnswer === undefined && (
				<>
					<CookieConsent
						onAccept={() => {
							setAllowSpotify(true);
							setAllowYoutube(true);
							setCookieBannerAnswer(true);
						}}
						onDecline={() => {
							setCookieBannerAnswer(false);
							setAllowSpotify(false);
							setAllowYoutube(false);
						}}
						setDeclineCookie={false}
						enableDeclineButton
						declineButtonText="No, thanks"
						buttonText="I Agree"
						style={{
							background: "white",
							color: "black",
							fontSize: "0.8rem",
						}}
						buttonStyle={{
							background: "white",
						}}>
						We embed content from third-party services such as Youtube and Spotify, which may use cookies to track your activity
						across different websites. By clicking &quot;Accept&quot;, you consent to the use of cookies by these services. For
						more information about how we use cookies and how you can control them, please refer to our{" "}
						<button onClick={onPrivacyPolicyClick}>Privacy Policy</button>.
					</CookieConsent>
				</>
			)}
		</>
	);
};
