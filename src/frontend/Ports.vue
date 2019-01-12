<template>
  <div>
    <v-container fluid>
      <div v-for="port in ports" :key="port.number">
        <v-switch
          :label="`Port: ${port.number}`"
          v-model="port.status"
          v-on:change="tooglePort(port.number)"
          color="blue"
        ></v-switch>
      </div>
    </v-container>
    <v-snackbar
      v-model="snackbar"
      :bottom="false"
      :left="false"
      :multi-line="false"
      :right="false"
      :timeout="timeout"
      :top="true"
      :vertical="false"
    >
      {{ alertMessage }}
      <v-btn color="pink" flat @click="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>
<script>
import Vue from "vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";

Vue.use(Vuetify);

export default {
  name: "Ports",
  data() {
    return {
      ports: [
        { number: "1", status: false },
        { number: "2", status: false },
        { number: "3", status: false },
        { number: "4", status: false }
      ],
      snackbar: false,
      timeout: 6000,
      alertMessage: ""
    };
  },
  methods: {
    tooglePort(number) {
      if (this.ports[number - 1].status == true) {
        this.ports[number - 1].status = false;
        console.log("Port " + number + " is Off");
        this.alertMessage = "Port " + number + " is Off";
        this.snackbar = true;
      } else {
        this.ports[number - 1].status = true;
        console.log("Port " + number + " is On");
        this.alertMessage = "Port " + number + " is On";
        this.snackbar = true;
      }
    }
  }
};
</script>
