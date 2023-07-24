<template>
    <div class="header">
        <h4>Explore Our Other Categories</h4>
    </div>
    <div class="main">
        <div class="main-category">
            <router-link to="/mens-fashion">
                <div class="category">
                    <img src="../assets/men.png" alt="">
                    <div class="fashion">
                        <h3>MEN'S FASHION</h3>
                    </div>
                </div>
            </router-link>

            <router-link to="/womens-fashion">
                <div class="category">
                    <img src="../assets/women.png" alt="">
                    <div class="fashion">
                        <h3>WOMEN'S FASHION</h3>
                    </div>
                </div>
            </router-link>


            <router-link to="/new-in">
                <div class="category">
                    <img src="../assets/new.png" alt="">
                    <div class="fashion">
                        <h3>SHOP NEW-IN</h3>
                    </div>
                </div>
            </router-link>
        </div>


        <div class="main-category">
            <router-link to="/jewellery">
                <div class="category">
                    <img src="../assets/jew.png" alt="">
                    <div class="fashion">
                        <h3>SHOP JEWELLERY</h3>
                    </div>
                </div>
            </router-link>

            <router-link to="/bags">
                <div class="category">
                    <img src="../assets/bag.png" alt="">
                    <div class="fashion">
                        <h3>SHOP BAGS</h3>
                    </div>
                </div>
            </router-link>

            <router-link to="/shop-beauty">
                <div class="category">
                    <img src="../assets/beauty.png" alt="">
                    <div class="fashion">
                        <h3>SHOP BEAUTY</h3>
                    </div>
                </div>
            </router-link>
        </div>
    </div>
</template>


<style scoped>
h4 {
    color: #000;
    text-align: center;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 150px;
}

.main {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.main-category {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 40px;
    
}

.category {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
}

.category img {
    width: 361px;
    height: 348px;
    flex-shrink: 0;
}

h3 {
    color: #ffffff;
    text-align: center;
    font-size: 30px;
    width: 355px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.fashion {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>