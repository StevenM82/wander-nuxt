<template>
  <section class="section">
      <div id="accordion">
        <div 
          class="card mb-1"
          v-for="box in boxes"
          :key="box.header">
          <!-- The @click is used to change from one state of collapsed to the other. If it is collapsed, open it. If it is open, collapse it. -->
            <div class="card-header text-center" @click="box.isCollapsed = !box.isCollapsed">
              <div>
                <h5 class="mb-0">{{ box.header }}</h5>
              </div>
              <div>
                <!-- changes the direction of the arrow that is on the box -->
                <span v-if="box.isCollapsed">&#x2191;</span>
                <span v-else>&#x2193;</span>
              </div>
            </div>
            <div class="card-body" v-if="box.isCollapsed">
              <!-- show the image above the text when the corresponding accordian tab is opened -->
              <img class="img-thumbnail" :src="box.url"> 
              {{ box.text }}
            </div>
          </div>
      </div>
  </section>  
</template>

<script>
export default {
    name: 'Accordian',
    data() {
      return {
        //set the default value to true to make the initial state of the dropdown box collapsed
        isCollapsed: true,
        boxes: [
          {header: "Where we started", url: require("../assets/the-market.jpg"), text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."},
          {header: "How it looked", url: require("../assets/original-interior.jpg"), text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."},
          {header: "The quiet", url: require("../assets/tropical-forest.jpg"), text: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."},
        ]
      }
    }
  }
</script>

<style lang="scss">
  .card:hover {
    transition: .5s all ease-in-out;
    box-shadow: 0 0 10px black;
  }
</style>
