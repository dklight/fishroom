<template>
  <ul>
    <li v-for="port in ports" :key="port.number">
      <button v-on:click="tooglePort(port.number)">Port {{port.number}}</button>
      {{ port.status }}
    </li>
  </ul>
</template>
<script>
export default {
  name: "Ports",
  data() {
    return {
      ports: [
        { number: "1", status: "Off" },
        { number: "2", status: "Off" },
        { number: "3", status: "Off" },
        { number: "4", status: "Off" }
      ],
    };
  },
  methods: {
    tooglePort (number) {
      if (this.ports[number - 1].status == "On") {
        this.ports[number - 1].status = "Off";
      } else {
        this.ports[number - 1].status = "On";
      }
    },
  },
};
</script>
