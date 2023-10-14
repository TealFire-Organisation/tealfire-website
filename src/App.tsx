import "@styles/App.scss";
import About from "@components/About";
import TeamSpeak from "./components/TeamSpeak";
import { useEffect } from "react";

export default function App() {
	useEffect(() => {
		// Auto scroll on achor in url
		const anchor = window.location.hash;
		if (anchor) {
			const element = document.querySelector(anchor);
			if (element) {
				element.scrollIntoView({ behavior: "smooth" });
			}
		}
	}, []);

	return (
		<div className="app">
			<About />
			<TeamSpeak />
		</div>
	);
}
