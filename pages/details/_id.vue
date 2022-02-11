<template>
  <!-- <Tutorial /> -->
  <div class="w-full h-screen bg-green-400 flex flex-col px-10 items-center">
    <div
      class="w-full h-full mx-auto my-auto mt-20 pt-20 px-4 rounded-lg flex flex-col bg-green-600 space-y-2"
    >
      <div class="text-xl font-semibold items-center mx-auto pb-10">
        Ini Halaman Details
      </div>
      <div v-for="(barang, i) in Barang" :key="i">
        <p v-if="i == id">{{ barang.namaBarang }}</p>
      </div>
      <!-- {{this.$route.params.id}} -->
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      id: this.$route.params.id,
    }
  },
  computed: {
    ...mapState({
      Barang: (state) => state.Barang,
    }),
  },
  methods: {},
}
</script>
