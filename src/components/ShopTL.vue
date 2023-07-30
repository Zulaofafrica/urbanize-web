<template>
    <div class="header">
        <h4>Shop The Latest</h4>
        <p>Explore our Newest Releases</p>
    </div>

    <div class="main">
        <div class="Prodcard">
            <router-link to="/checkout-page">
                <div class="card">
                    <img src="../assets/Samples/artboard1.jpg" alt="">
                    <div class="productdes">
                        <a href="/luxury-category">Luxury</a>
                        <h5>Nike 07 Air force Ones - White</h5>
                        <h5 class="price">₦18,000</h5>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="Prodcard">
            <router-link to="/checkout-page">
                <div class="card">
                    <img src="../assets/Samples/artboard2.jpg" alt="">
                    <div class="productdes">
                        <a href="/luxury-category">Luxury</a>
                        <h5>Nike 07 Air force Ones - White</h5>
                        <h5 class="price">₦18,000</h5>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="Prodcard">
            <router-link to="/checkout-page">
                <div class="card">
                    <img src="../assets/Samples/artboard3.jpg" alt="">
                    <div class="productdes">
                        <a href="/luxury-category">Luxury</a>
                        <h5>Nike 07 Air force Ones - White</h5>
                        <h5 class="price">₦18,000</h5>
                    </div>
                </div>
            </router-link>
        </div>
    </div>

    <div class="main">
        <div class="Prodcard">
            <router-link to="/checkout-page">
                <div class="card">
                    <img src="../assets/Samples/artboard4.jpg" alt="">
                    <div class="productdes">
                        <a href="/luxury-category">Luxury</a>
                        <h5>Nike 07 Air force Ones - White</h5>
                        <h5 class="price">₦18,000</h5>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="Prodcard">
            <router-link to="/checkout-page">
                <div class="card">
                    <img src="../assets/Samples/artboard5.jpg" alt="">
                    <div class="productdes">
                        <a href="/luxury-category">Luxury</a>
                        <h5>Nike 07 Air force Ones - White</h5>
                        <h5 class="price">₦18,000</h5>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="Prodcard">
            <router-link to="/checkout-page">
                <div class="card">
                    <img src="../assets/Samples/artboard6.jpg" alt="">
                    <div class="productdes">
                        <a href="/luxury-category">Luxury</a>
                        <h5>Nike 07 Air force Ones - White</h5>
                        <h5 class="price">₦18,000</h5>
                    </div>
                </div>
            </router-link>
        </div>
    </div>

    <div class="main">
        <div class="Prodcard">
            <router-link to="/checkout-page">
                <div class="card">
                    <img src="../assets/Samples/artboard7.jpg" alt="">
                    <div class="productdes">
                        <a href="/luxury-category">Luxury</a>
                        <h5>Nike 07 Air force Ones - White</h5>
                        <h5 class="price">₦18,000</h5>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="Prodcard">
            <router-link to="/checkout-page">
                <div class="card">
                    <img src="../assets/Samples/artboard8.jpg" alt="">
                    <div class="productdes">
                        <a href="/luxury-category">Luxury</a>
                        <h5>Nike 07 Air force Ones - White</h5>
                        <h5 class="price">₦18,000</h5>
                    </div>
                </div>
            </router-link>
        </div>

        <div class="Prodcard">
            <router-link to="/checkout-page">
                <div class="card">
                    <img src="../assets/Samples/artboard9.jpg" alt="">
                    <div class="productdes">
                        <a href="/luxury-category">Luxury</a>
                        <h5 class="name">Nike 07 Air force Ones - White</h5>
                        <h5 class="price">₦18,000</h5>
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

.main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    align-content: center;
    justify-items: center;
    margin-left: 100px;
    margin-bottom: 100px;
}

.card {
    width: 23%;
    min-width: 350px;
    padding: 15px 15px;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    border: 1px solid #cadbed;
    box-shadow: 2px 1px 1px 0px rgba(161, 161, 161, 0.127);
}

.productdes {
    display: block;
    text-align: left;
    padding-left: 15px;
    padding-top: 15px;
    margin-left: -10px;
}

img {
    width: 100%;
    border-radius: 20px;
}

h5 {
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    margin-top: -2px;
}

.name {
    margin-top: 10px;
}
.price {
    margin-top: -20px;
    font-size: 25px;
    font-weight: 600;   
}

a {
    margin-top: 25px;
    color: #8c8c8c;
    text-decoration: none;
}


.card:hover {
    box-shadow: -2px -3px 30px 0px rgba(161, 161, 161, 0.25); 
    min-width: 355px; 
}


</style>