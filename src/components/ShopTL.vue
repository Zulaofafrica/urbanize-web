<template>
    <div class="header">
        <h4>Shop The Latest</h4>
        <p>Explore our Newest Releases</p>
    </div>

    <div class="mainGal">
        <div class="productExplore">
            <router-link to="/checkout-page">
                <div class="productCard">
                    <router-link to="/addToWishlist"><img class="love" src="../assets/icons/icon-heart.svg"
                            alt=""></router-link>
                    <img src="../assets/Airforce1.png" alt="">
                    <div class="productname">
                        <h5>Nike 07 Air force Ones - White</h5>
                        <h5 class="price">₦18,000</h5>
                    </div>
                </div>
            </router-link>

            <router-link to="/checkout-page">
                <div class="productCard">
                    <router-link to="/addToWishlist"><img class="love" src="../assets/icons/icon-heart.svg"
                            alt=""></router-link>
                    <img src="../assets/Airforce1.png" alt="">
                    <div class="productname">
                        <h5>Collusion Tye Dye Graphic Tee - Acid</h5>
                        <h5 class="price">₦10,000</h5>
                    </div>
                </div>
            </router-link>

            <router-link to="/checkout-page">
                <router-link to="/addToWishlist"><img class="loved" src="../assets/icons/icon-heart.svg"
                        alt=""></router-link>
                <div class="productCard">
                    <img src="../assets/asos.png" alt="">
                    <div class="productname">
                        <h5>Asos Design Plain Tee - Green</h5>
                        <h5 class="price">₦10,000</h5>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="productExplore">
            <router-link to="/checkout-page">
                <div class="productCard">
                    <router-link to="/addToWishlist"><img class="love" src="../assets/icons/icon-heart.svg"
                            alt=""></router-link>
                    <img src="../assets/tappered.png" alt="">
                    <div class="productname">
                        <h5>Men's Tapered Oversized Trouser - Black</h5>
                        <h5 class="price">₦12,000</h5>
                    </div>
                </div>
            </router-link>

            <router-link to="/checkout-page">
                <div class="productCard">
                    <router-link to="/addToWishlist"><img class="love" src="../assets/icons/icon-heart.svg"
                            alt=""></router-link>
                    <img src="../assets/Baggy.png" alt="">
                    <div class="productname">
                        <h5>Baggy Stone Wash Jeans - Blue</h5>
                        <h5 class="price">₦10,000</h5>
                    </div>
                </div>
            </router-link>

            <router-link to="/checkout-page">
                <router-link to="/addToWishlist"><img class="love" src="../assets/icons/icon-heart.svg"
                        alt=""></router-link>
                <div class="productCard">
                    <img src="../assets/bapestas.png" alt="">
                    <div class="productname">
                        <h5>Blue Camo Bapestas - White</h5>
                        <h5 class="price">₦30,000</h5>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="productExplore">
            <router-link to="/checkout-page">
                <div class="productCard">
                    <router-link to="/addToWishlist"><img class="love" src="../assets/icons/icon-heart.svg"
                            alt=""></router-link>
                    <img src="../assets/Airforce1.png" alt="">
                    <div class="productname">
                        <h5>Nike 07 Air force Ones - White</h5>
                        <h5 class="price">₦18,000</h5>
                    </div>
                </div>
            </router-link>

            <router-link to="/checkout-page">
                <div class="productCard">
                    <router-link to="/addToWishlist"><img class="love" src="../assets/icons/icon-heart.svg"
                            alt=""></router-link>
                    <img src="../assets/Airforce1.png" alt="">
                    <div class="productname">
                        <h5>Collusion Tye Dye Graphic Tee - Acid</h5>
                        <h5 class="price">₦10,000</h5>
                    </div>
                </div>
            </router-link>

            <router-link to="/checkout-page">
                <router-link to="/addToWishlist"><img class="loved" src="../assets/icons/icon-heart.svg"
                        alt=""></router-link>
                <div class="productCard">
                    <img src="../assets/asos.png" alt="">
                    <div class="productname">
                        <h5>Asos Design Plain Tee - Green</h5>
                        <h5 class="price">₦10,000</h5>
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
}

p {
    color: #000;
    text-align: center;
    font-size: 25px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-top: -50px;
    margin-bottom: 60px;
}

.mainGal {
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.productExplore{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 35px;
}

.productCard {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: rgb(255, 255, 255);
    height: 400px;
    width: 434px;
    border-radius: 20px;
    border: 0.2px solid #000;
    /* box-shadow: -2px -3px 22px 0px rgba(161, 161, 161, 0.25); */

}

h5 {
    color: #000;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
}

.price {
    margin-top: -20px;
    font-size: 25px;
    font-weight: 600;
    
}

.productname{
    width: 434px;
    height: 134px;
    flex-shrink: 0;
    border-radius: 0px 0px 20px 20px;
    border: 0.2px solid #000;
    background: #FFF;
    /* box-shadow: -4px 1px 22px 0px rgba(161, 161, 161, 0.25); */
}

img {
    margin-top: 24px;
    height: 250px;
}

a {
    text-decoration: none;
}

.love {
    position: absolute;
    height: 28.8px;
    margin-left: 150px;
    z-index: 5;
}

.loved {
    position: absolute;
    height: 28.8px;
    margin-left: 370px;
    z-index: 5;
}
</style>