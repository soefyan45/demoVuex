<template>
  <div class="pt-10 w-full px-4 rounded bg-yellow-500">
    <table class="table-auto w-full mb-10">
      <thead class="text-xs font-semibold uppercase text-gray-800 bg-gray-50">
        <tr>
          <th class="p-2 whitespace-nowrap">
            <div class="font-semibold text-left">Name</div>
          </th>
          <th class="p-2 whitespace-nowrap">
            <div class="font-semibold text-left">Qty</div>
          </th>
          <th class="p-2 whitespace-nowrap">
            <div class="font-semibold text-left">Detail</div>
          </th>
        </tr>
      </thead>
      <tbody class="text-sm divide-y divide-gray-100">
        <tr v-for="(item, i) in Barang" :key="i">
          <td class="p-2 whitespace-nowrap">
            <div class="text-left">{{ item.namaBarang }}</div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-left font-medium text-green-500">
              {{ item.qtyBarang }}
            </div>
          </td>
          <td class="p-2 whitespace-nowrap">
            <div class="text-lg text-center">
              <nuxt-link
                :to="'/details/' + i"
                class="my-2 px-4 bg-blue-600 rounded text-white"
                >Details</nuxt-link
              >
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState({
      Barang: (state) => state.Barang,
    }),
  },
}
</script>

<style></style>
