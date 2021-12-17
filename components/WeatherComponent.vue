<template>
	<label>City: 
		<input>
		<button type="submit" class="current" @click="$fetch">Current weather</button>
		<button type="submit" class="forecast">Forecast</button>
		
		<!-- display the 'current.icon' after the user enters the city name -->
      <p>
        current.condition.icon<br>
        current.condition.text<br>
        temp: <br>
        feels like:
      </p>
	</label>
</template>

<script>
	export default {
		name: 'WeatherComponent',
		data () {
			return {
				props: {
					city: {
						type: String,
						required: true
					},
					region: {
						type: String,
						required: false
					},
				}

			//take the information fetched from openweathermap.org and make it into an object with parts that can be specifically referenced
			
			}
		},
		async fetch() {
			this.current = await fetch(
				`https://api.openweathermap.org/data/2.5/onecall?lat={lat}&lon={lon}&exclude={part}&appid={c89bea5b0ef714fc65e81d76def0188d}`
			)
		}
	}
</script>