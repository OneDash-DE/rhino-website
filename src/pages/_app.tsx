import "@/styles/global.scss";
import type { AppProps } from "next/app";
import localizedFormat from "dayjs/plugin/localizedFormat";
import dayjs from "dayjs";
import { DialogUtils } from "onedash-dialog";
import { useEffect } from "react";
import Script from "next/script";
dayjs.extend(localizedFormat);

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		DialogUtils.registerHeightHelper();

		window.addEventListener("hashchange", function () {
			(window as any)._paq.push(["setCustomUrl", "/" + window.location.hash.substr(1)]);
			(window as any)._paq.push(["trackPageView"]);
		});
	}, []);
	return (
		<>
			<Script id="matomo">
				{`var _paq = window._paq = window._paq || [];
_paq.push(["disableCookies"]);
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
 var u="//analytics.api-onedash.de/";
 _paq.push(['setTrackerUrl', u+'matomo.php']);
 _paq.push(['setSiteId', '2']);
 var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
 g.async=true; g.src=u+'matomo.js'; s.parentNode.insertBefore(g,s);
 })();`}
			</Script>
			<Component {...pageProps} />
		</>
	);
}
