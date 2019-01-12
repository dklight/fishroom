<template>
  <div
    id="e3"
    style="max-width: 400px; margin: auto; width: -webkit-fill-available"
    class="grey lighten-3"
  >
    <v-toolbar color="blue" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <v-toolbar-title>Fishtank ports</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-card>
      <v-container fluid grid-list-lg>
        <v-layout row wrap>
          <v-flex xs12>
            <Ports/>
          </v-flex>
        </v-layout>
      </v-container>
      <v-footer class="pa-3">
        <v-spacer></v-spacer>
        <div>&copy; Fishroom {{ new Date().getFullYear() }} - Bernabé García</div>
      </v-footer>
    </v-card>
  </div>
</template>
<script>
import Ports from "./Ports.vue";

export default {
  components: {
    Ports
  },
};
</script>
