<template>
  <div>
	  <label>City</label>
	  <input type="text" />
	  <button @click="$fetch">Refresh</button>
    <p v-if="$fetchState.pending">Getting city forecast...</p>
    <p v-else-if="$fetchState.error">An error occurred :(</p>
    <div v-else>
		<h1>Weather forecast for Yakima</h1>
			<p>feels like: {{ forecast.current.feelslike_f }}</p>
			<p>humidity: {{ forecast.humidity }}</p>
			<p>pressure: {{ forecast.pressure }}</p>
			<p>temperature: {{ forecast.temp }}</p>
			<p>high: {{ forecast.temp_max }}</p>
			<p>low: {{ forecast.temp_min }}</p>
      
    </div>
  </div>
</template>


<script>
	export default {
		name: 'WeatherComponent',
		data () {
			return {
				city: "",
				forecast: {},
			}
		},
		async fetch() {
			this.forecast = await fetch(
				`http://api.weatherapi.com/v1/forecast.json?key=81ab5b4262e740d8b29233123211512&q=98908&days=10&aqi=no&alerts=no`
			).then(res => res.json())
		}
	}
</script>