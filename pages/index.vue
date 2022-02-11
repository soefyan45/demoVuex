<template>
  <!-- <Tutorial /> -->
  <div class="w-full h-screen bg-green-400 flex flex-col px-10 items-center">

    <div class="w-full h-full mx-auto my-auto mt-20 pt-20 px-4 rounded-lg flex flex-col bg-green-600 space-y-2">
      <div class="text-xl font-semibold items-center mx-auto pb-10">
      Vuex State & Commponent
    </div>
      <input-form/>
      <data-table/>
    </div>
    <div v-if="show" class="w-full h-10 rounded">
      ini uji coba
    </div>
    <div @click="showChange()" class="w-full pt-2 plex">
      Show element
    </div>
  </div>
</template>

<script>
import DataTable from '../components/DataTable.vue'
import InputForm from '../components/InputForm.vue'
export default {
  components: { InputForm, DataTable },
  name: 'IndexPage',
  data() {
    return {
      show: false,
    }
  },
  mounted() {
    // console.log(this.Barang.nama)
  },
  methods: {
    showChange() {
      if(this.show==false){
        return this.show = true
      }
      return this.show = false
    },
  },

}
</script>
