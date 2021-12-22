<template>
  	<div @submit.prevent="getWeather">
		<h1>Current weather for {{ this.city }}</h1> 
		<label>City: </label>
		<input id="city" v-model="city" type="text" placeholder="Please enter city">
		<div>
			<button id="current" class="mb-5" type="submit" @click="getWeather()">Current</button>
		</div>

		<div>
			<p>description: {{ weather.description }}</p>
			<p>temperature: {{ result.temp }}&deg;</p>
			<p>feels like: {{ result.feels_like }}&deg;</p>
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
			city: "",

			//fetch on the openweathermap API returns a nameless object. result{} creates an empty object
			//to place that information in
			result: {},
			weather: [],
			props: {
				main: {
					type: Object,
					required: true
				},
				temp: {
					type: Number,
					required: true
				},
				feels: {
					type: Number,
					required: false
				}
			},
		}
	},

methods: {
    async getWeather() {
      if (!this.city) {
        return;
      }
      const res = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${this.city}&units=imperial&appid=f258ecbe7c0ac2838cf940844ddce6c0`
      );
      const { main, weather } = await res.json();
      this.result = main;
	  this.weather = weather[0].description;
	  console.log(main);
	  console.log(weather[0].description);
    },
  },
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