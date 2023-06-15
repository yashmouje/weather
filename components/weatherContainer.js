import Weather from "./weather";
import Temperature from "./temperature";

export default function WeatherContainer() {
	return (
		<>
			<div class="container weather-container align-self-center">
				<div class="row align-self-center">
					<div class="col-md-6 align-self-center">
						<Temperature />
					</div>

					<div class="col-md-6">
						<Weather />
					</div>
				</div>
			</div>
		</>
	);
}
