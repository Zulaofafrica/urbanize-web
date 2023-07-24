<template>

  <!-- Men's Section -->

  <div v-if="showModalTwo" class="overlay" @mouseover.self="showModalTwo = false">
        <div class="modal">
            <div class="modalProducts">
                <div class="productlist">
                    <h3>CORPORATE</h3>
                    <li v-for="men in womens" :key="men.id">
                        <router-link :to="men.route"> {{ men.label }}</router-link>
                    </li>
                </div>

               <div class="productlist">
                    <h3>CASUAL</h3>
                    <li v-for="men in mens" :key="men.id">
                         <router-link :to="men.route"> {{ men.label }}</router-link>
                    </li>
               </div> 

               <div class="productlist">
                    <h3>SPORTS</h3>
                    <li v-for="men in mens" :key="men.id">
                        <router-link :to="men.route"> {{ men.label }}</router-link>
                    </li>
               </div>

               <div class="productlist">
                    <h3>LUXURY</h3>
                    <li v-for="men in mens" :key="men.id">
                        <router-link :to="men.route"> {{ men.label }}</router-link>
                    </li>
               </div>
            </div>
        </div>
  </div>  
  
  
<!-- Women's section -->

  <div v-if="showModal" class="overlay" @mouseover.self="showModal = false">
        <div class="modal">
            <div class="modalProducts">
                <div class="productlist">
                    <h3>CORPORATE</h3>
                    <li v-for="women in womens" :key="women.id">
                        <router-link :to="women.route"> {{ women.label }}</router-link>
                    </li>
                </div>

               <div class="productlist">
                    <h3>CASUAL</h3>
                    <li v-for="women in womens" :key="women.id">
                         <router-link :to="women.route"> {{ women.label }}</router-link>
                    </li>
               </div> 

               <div class="productlist">
                    <h3>SPORTS</h3>
                    <li v-for="women in womens" :key="women.id">
                        <router-link :to="women.route"> {{ women.label }}</router-link>
                    </li>
               </div>

               <div class="productlist">
                    <h3>LUXURY</h3>
                    <li v-for="women in womens" :key="women.id">
                        <router-link :to="women.route"> {{ women.label }}</router-link>
                    </li>
               </div>
            </div>
        </div>
    </div>

<!-- Kids section -->

    <div v-if="showModalThree" class="overlay" @mouseover.self="showModalThree = false">
        <div class="modal">
            <div class="modalProducts">
                <div class="productlist">
                    <h3>CORPORATE</h3>
                    <li v-for="kid in kids" :key="kid.id">
                        <router-link :to="kid.route"> {{ kid.label }}</router-link>
                    </li>
                </div>

               <div class="productlist">
                    <h3>CASUAL</h3>
                    <li v-for="kid in kids" :key="kid.id">
                         <router-link :to="kid.route"> {{ kid.label }}</router-link>
                    </li>
               </div> 

               <div class="productlist">
                    <h3>SPORTS</h3>
                    <li v-for="kid in kids" :key="kid.id">
                        <router-link :to="kid.route"> {{ kid.label }}</router-link>
                    </li>
               </div>

               <div class="productlist">
                    <h3>LUXURY</h3>
                    <li v-for="kid in kids" :key="kid.id">
                        <router-link :to="kid.route"> {{ kid.label }}</router-link>
                    </li>
               </div>
            </div>
        </div>
    </div>

    <!-- Lifestyle section -->

    <div v-if="showModalFour" class="overlay" @mouseover.self="showModalFour = false">
        <div class="modal">
            <div class="modalProducts">
                <div class="productlist">
                    <h3>ACCESSORIES</h3>
                    <li v-for="lifestyle in lifestyles" :lifestyle="lifestyle.id">
                        <router-link :to="lifestyle.route"> {{ lifestyle.label }}</router-link>
                    </li>
                </div>

               <div class="productlist">
                    <h3>BEAUTY</h3>
                    <li v-for="lifestyle in lifestyles" :key="lifestyle.id">
                         <router-link :to="lifestyle.route"> {{ lifestyle.label }}</router-link>
                    </li>
               </div> 

               <div class="productlist">
                    <h3>HOME</h3>
                    <li v-for="lifestyle in lifestyles" :key="lifestyle.id">
                        <router-link :to="lifestyle.route"> {{ lifestyle.label }}</router-link>
                    </li>
               </div>

               <div class="productlist">
                    <h3>OTHERS</h3>
                    <li v-for="lifestyle in lifestyles" :key="lifestyle.id">
                        <router-link :to="lifestyle.route"> {{ lifestyle.label }}</router-link>
                    </li>
               </div>
            </div>
        </div>
    </div>

<!-- top main features nav bar -->
  <div class="main-nav">
    <Nav class="features-nav">
      <div class="features">
        <router-link to="/" class="features-link">Shop</router-link>
        <router-link to="/style" class="features-link">Style</router-link>
        <router-link to="/showcase" class="features-link">ShowCase</router-link>
      </div>
    </Nav>

    <!-- Categories nav bar -->
    <div class="categories-nav">
      <router-link to="/">
        <img class="logo" src="../assets/urbanize-logo.svg" alt="" srcset="">
      </router-link>

      <div class="category">
        <router-link class="categories" to="/men" @mouseover="showModalTwo = true">Men</router-link>
        <router-link class="categories" to="/women" @mouseover="showModal = true">Women</router-link>
        <router-link class="categories" to="/kids" @mouseover="showModalThree = true">Kids</router-link>
        <router-link class="categories" to="/lifestyle" @mouseover="showModalFour = true">Lifestyle</router-link>
      </div>

      <div class="personal">
        <router-link to="/search">
          <img class="search" src="../assets/icons/search.svg" alt="">
        </router-link>

        <router-link to="/wishlist">
          <img class="rd" src="../assets/icons/love.svg" alt="">
        </router-link>

        <router-link to="/bag">
          <img class="rd" src="../assets/icons/bag.svg" alt="">
        </router-link>

        <router-link to="/dashboard">
          <img class="rd" src="../assets/icons/user.svg" alt="">
        </router-link>
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref} from "vue";


const showModal = ref(false)
const showModalTwo = ref(false)
const showModalThree = ref(false)
const showModalFour = ref(false)

const womens = [
  { id: 1, label: 'Dresses', route: "/men/ready-to-wear/dresses" },
  { id: 2, label: 'Knitwear', route: "/men/ready-to-wear/Knitwear" },
  { id: 3, label: 'Shirts and tops', route: "/men/ready-to-wear/Shirts-and-tops" },
  { id: 4, label: 'Skirts', route: "/men/ready-to-wear/Skirts" },
  { id: 5, label: 'Trousers and shorts', route: "/men/ready-to-wear/Trousers-and-shorts" },
  { id: 6, label: 'Outerwear', route: "/men/ready-to-wear/Outerwear" },
  { id: 7, label: 'Jackets and coats', route: "/women/ready-to-wear/Jackets-and-coats" },
  { id: 8, label: 'Denim', route: "/men/ready-to-wear/Denim" }
]

const mens = [
  { id: 1, label: 'Dresses', route: "/women/ready-to-wear/dresses" },
  { id: 2, label: 'Knitwear', route: "/women/ready-to-wear/Knitwear" },
  { id: 3, label: 'Shirts and tops', route: "/women/ready-to-wear/Shirts-and-tops" },
  { id: 4, label: 'Skirts', route: "/women/ready-to-wear/Skirts" },
  { id: 5, label: 'Trousers and shorts', route: "/women/ready-to-wear/Trousers-and-shorts" },
  { id: 6, label: 'Outerwear', route: "/women/ready-to-wear/Outerwear" },
  { id: 7, label: 'Jackets and coats', route: "/women/ready-to-wear/Jackets-and-coats" },
  { id: 8, label: 'Denim', route: "/women/ready-to-wear/Denim" }
]

const kids = [
  { id: 1, label: 'Dresses', route: "/kids/ready-to-wear/dresses" },
  { id: 2, label: 'Knitwear', route: "/kids/ready-to-wear/Knitwear" },
  { id: 3, label: 'Shirts and tops', route: "/kids/ready-to-wear/Shirts-and-tops" },
  { id: 4, label: 'Skirts', route: "/kids/ready-to-wear/Skirts" },
  { id: 5, label: 'Trousers and shorts', route: "/kids/ready-to-wear/Trousers-and-shorts" },
  { id: 6, label: 'Outerwear', route: "/kids/ready-to-wear/Outerwear" },
  { id: 7, label: 'Jackets and coats', route: "/kids/ready-to-wear/Jackets-and-coats" },
  { id: 8, label: 'Denim', route: "/kids/ready-to-wear/Denim" }
]

const lifestyles = [
  { id: 1, label: 'Product', route: "/lifestyle/ready-to-wear/dresses" },
  { id: 2, label: 'Product', route: "/lifestyle/ready-to-wear/Knitwear" },
  { id: 3, label: 'Product', route: "/lifestyle/ready-to-wear/Shirts-and-tops" },
  { id: 4, label: 'Product', route: "/lifestyle/ready-to-wear/Skirts" },
  { id: 5, label: 'Product', route: "/lifestyle/ready-to-wear/Trousers-and-shorts" },
  { id: 6, label: 'Product', route: "/lifestyle/ready-to-wear/Outerwear" },
  { id: 7, label: 'Product', route: "/lifestyle/ready-to-wear/Jackets-and-coats" },
  { id: 8, label: 'Product', route: "/lifestyle/ready-to-wear/Denim" }
]

</script>



<style scoped>
.overlay {
    position: absolute;
    height: 100%;
    width: 100%;
    background-color: rgba(0,0,0,0.77);
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 110px;
}

.modal {
    width: 100%;
    height: 300px;
    background: #F3F3F3;
    padding: 20px;
    margin-top: -415px;
}

.modalProducts {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 200px;

}

.productlist li {
    list-style-type: none;
    text-decoration: none;
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 180%;
}

.logo {
  height: 26px;
  margin-right: 0px;
}

.features {
  display: flex;
  flex-direction: row;
  gap: 50px;
}

.features-link {
  padding: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
  border-radius: 5px;
  text-decoration: none;
  background-color: #c1c4c7;
  color: white;
  font-size: 12px;
}

div .features a.router-link-active.router-link-exact-active.features-link {
  background-color: #1966ba;
}

.personal {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 30px;
  height: 35px;
}
.rd{
  height: 25px;
  opacity: 75%;
}

.search {
  height: 30px;
}

.categories-nav {
  height: 70px;
  list-style-type: none;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 300px;
  color: black;
  text-decoration: none;
  box-shadow: 2px 1px 1px 0px rgba(0, 0, 0, 0.1);
}

.category {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 65px;
}
.categories {
  text-decoration: none;
  color: #000;
  padding: 10px;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
}

a {
  text-decoration: none;
  color: #000;
}

</style>
