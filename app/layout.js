import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";

export const metadata = {
	title: "weather / yash",
	description: "Weather Now, At Your Location, Beautifully.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/icon.png" type="image/png" />
			</head>
			<body>{children}</body>
		</html>
	);
}
