import { ref, computed } from 'vue';

const cart = ref([])

export default function useCart () {
  
  function add(item) {
    cart.value.push(item);
  }

  return {
    cart: computed(() => cart.value),
    add
  }
}