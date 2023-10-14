import "@styles/TsViewer.scss";

export default function TsViewer() {
	return (
		<div className="tsViewer">
			<a
				className="ts3index-stats"
				href="https://ts3index.com/?page=server&id=299798"
				target="_blank"
			>
				<img
					src="https://ts3index.com/banner/s012_299798.png"
					alt="TS3index.com"
				/>
			</a>
			<div
				className="ts3index-viewer"
				data-serverid="299798"
				data-style="icons=ts5&colorpack=default&clientc=EDEDED&clientb&clickable"
			>
				<a href="/">
					Viewer couldn't be loaded. <br />
					Wait a minute and reload the page.
				</a>
				<br />
				<br />
				<a href="https://ts3index.com/?page=server&id=299798">Ts3Index</a>
			</div>
		</div>
	);
}
