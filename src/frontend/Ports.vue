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
      timeout: 3000,
      alertMessage: ""
    };
  },
  methods: {
    onToogleSuccess(message) {
      this.alertMessage = message;
      this.snackbar = true;
    },
    tooglePort(number) {
      const axios = require("axios");
      let action = "";
      if (this.ports[number - 1].status == true) {
        action = "Off";
      } else {
        action = "On";
      }
      axios
        .get("/port/" + number + "/" + action)
        .then(response=>this.onToogleSuccess("Port " + number + " is " + action))
        .catch(function(error) {
          console.log(error);
        });
    }
  }
};
</script>
