import { ref, computed } from 'vue';


const fetchProduct = async () => {
  const response = await fetch('http://localhost:8000/products')
  return await response.json();
}

export default function useProduct() {
    const loading = ref(false)
    const products = ref([])
  
    async function search () {
      loading.value = true
      const data = await fetchProduct()
      products.value = data.map((item) => ({
        id: item['Order ID'],
        title: item['Product'],
        description: item['Purchase Address'],
        price: item['Price Each'],
        isAdded: false,
      })).slice(0, 20);
      loading.value = false
    }
    
    return {
      loading: computed(() => loading.value),
      products: computed(() => products.value),
      search
    }
  }