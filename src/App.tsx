import "@styles/App.scss";
import About from "@components/About";
import TeamSpeak from "./components/TeamSpeak";

export default function App() {
	return (
		<div className="app">
			<About />
			<TeamSpeak />
		</div>
	);
}
