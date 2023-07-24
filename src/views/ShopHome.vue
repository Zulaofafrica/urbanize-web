<template>
  <div class="home">
    <NavBar />
    <landingProduct />
    <JustLanded />
    <ShopTL />
    <BestSellers />
    <RecentBP />
    <ExploreOOC />
    <Footer />
  </div>
</template>

<script>
// @ is an alias to /src
import NavBar from '@/components/NavBar.vue'
import landingProduct from '@/components/landingProduct.vue'
import JustLanded from '@/components/JustLanded.vue'
import ShopTL from '@/components/ShopTL.vue'
import BestSellers from '@/components/BestSellers.vue'
import RecentBP from '@/components/RecentBP.vue'
import ExploreOOC from '@/components/ExploreOOC.vue'
import Footer from '@/components/Footer.vue'

export default {
  name: 'ShopHome',
  components: {
    NavBar,
    landingProduct,
    JustLanded,
    ShopTL,
    BestSellers,
    RecentBP,
    ExploreOOC,
    Footer,
    
  }
}
</script>
