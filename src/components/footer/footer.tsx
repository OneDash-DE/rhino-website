import React from "react";
import styles from "./footer.module.sass";

interface FooterProps {
	onPrivacyPolicyClick: () => void;
	onTermsAndConditionsClick: () => void;
	onImprintClick: () => void;
}

export const Footer = ({ onPrivacyPolicyClick, onImprintClick, onTermsAndConditionsClick }: FooterProps) => {
	return (
		<div id="footer" className={styles.footer}>
			<p>
				Contact us: <a href="mailto:therhinoband@gmail.com">therhinoband@gmail.com</a>
			</p>
			<button onClick={onTermsAndConditionsClick}>Terms And Conditions</button>
			<button onClick={onPrivacyPolicyClick}>Privacy Policy</button>
			<button onClick={onImprintClick}>Legal Notice / Imprint</button>
		</div>
	);
};
