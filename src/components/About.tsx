import "@styles/About.scss";

export default function About() {
	return (
		<div className="about">
			<div className="brand">
				<div>
					<img src="/logo.svg" alt="TealFire Logo" />
					<h1>TealFire</h1>
				</div>
				<h2>Community</h2>
			</div>

			<div
				className="scrollDown"
				onClick={() => {
					window.scrollTo({
						top: document.body.scrollHeight,
						behavior: "smooth",
					});
				}}
			>
				<svg viewBox="0 0 330 330">
					<path
						id="XMLID_225_"
						d="M325.607,79.393c-5.857-5.857-15.355-5.858-21.213,0.001l-139.39,139.393L25.607,79.393
	c-5.857-5.857-15.355-5.858-21.213,0.001c-5.858,5.858-5.858,15.355,0,21.213l150.004,150c2.813,2.813,6.628,4.393,10.606,4.393
	s7.794-1.581,10.606-4.394l149.996-150C331.465,94.749,331.465,85.251,325.607,79.393z"
					/>
				</svg>
			</div>
		</div>
	);
}