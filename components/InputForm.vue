<template>
  <div class="flex flex-col w-full space-y-2">
    <div class="w-full flex items-center">
      <div class="w-full mx-2 items-center">
        <label>Nama Barang</label>
        <input
          type="text"
          class="h-12 w-full rounded-lg px-2"
          v-model="namaBarang"
          placeholder="Nama Barang"
        />
      </div>
      <div class="w-full mx-2 items-center">
        <label>Jumlah</label>
        <input
          type="number"
          class="h-12 w-full rounded-lg px-2"
          v-model="qtyBarang"
          placeholder="Jumlah"
        />
      </div>
    </div>
    <div class="w-full flex justify-end">
      <button
        @click="simpanData()"
        class="h-10 w-32 bg-blue-600 rounded-lg text-white font-semibold"
      >
        Simpan
      </button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      namaBarang: '',
      qtyBarang: '',
    }
  },
  methods: {
    simpanData() {
      let data = {
        namaBarang: this.namaBarang,
        qtyBarang: this.qtyBarang,
      }
      this.$store.dispatch('setbarang', data)
      this.namaBarang = ''
      this.qtyBarang = ''
    },
  },
}
</script>

<style></style>
