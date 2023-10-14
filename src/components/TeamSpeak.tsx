import "@styles/TeamSpeak.scss";
import TsViewer from "./TsViewer";

export default function TeamSpeak() {
	return (
		<div className="teamspeak">
			<h1 id="teamspeak">TeamSpeak</h1>
			<p className="text">
				<span>TealFire</span> is a <span>community</span> based around&nbsp;
				<span>TeamSpeak</span> since <span>2016</span>.
			</p>
			<TsViewer />
		</div>
	);
}
