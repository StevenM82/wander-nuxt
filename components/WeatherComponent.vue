<template>
  	<div @submit.prevent="fetch">
		<h1>Current weather for {{ this.city }}</h1> 
		<label>City: </label>
		<input id="city" v-model="city" type="text" placeholder="Please enter city">
		<div>
			<button id="current" class="mb-5" @click="$fetch">Current</button>
			<!-- <button id="forecast" class="mb-5 " @click="$fetch">Forecast</button> -->
		</div>

		<!-- add some sort of click event handler via a function here -->
		<p v-if="$fetchState.pending">Getting city weather...</p>
		<p v-else-if="$fetchState.error">An error occurred :(</p>
		<div v-else>
			<p>temperature: {{ result.main.temp }}&deg;</p>
			<p>feels like: {{ result.weather }}&deg;</p>
			<p>humidity: {{ result.humidity }}</p>
			<p>high: {{ result.temp_max }}&deg;</p>
			<p>low: {{ result.temp_min }}&deg;</p>
		</div>
	</div>
</template>


<script>
export default {
	name: 'WeatherComponent',
	data () {
		return {
			// isHidden: true,
			city: "",

			//fetch on the openweathermap API returns a nameless object. result{} creates an empty object
			//to place that information in
			result: {},
			props: {
				main: {
					type: Object,
					required: true
				},
				temp: {
					type: Number,
					required: true
				}
			},
		}
	},
	async fetch() {
		// if(document.getElementById(""))
		this.result = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&appid=f258ecbe7c0ac2838cf940844ddce6c0`
		)
		.then(res => res.json())
	},
	fetchOnServer: false
}
</script>

<style>
	.show {
		display: block;
	}
	.hide {
		display: none;
	}
</style>