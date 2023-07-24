<template>
    <div class="header">
        <h4>Best Sellers</h4>
        <p class="sub">Check Out What's Flying off our Shelfs at the Moment</p>
    </div>

    <div class="main-bestSellers">
        <div class="best-sellers">
            <img src="../assets/twomen.png" alt="">
            <div class="fashion">
                <h3>MEN'S FASHION</h3>
                <p>Unleash Your Style</p>
                <router-link to="/new-arrivals" class="shopNow">SHOP NOW</router-link>
            </div>
        </div>

        <div class="best-sellers">
            <img src="../assets/finelady.png" alt="">
            <div class="fashion">
                <h3>WOMEN'S FASHION</h3>
                <p>Elevate Your Elegance</p>
                <router-link to="/new-arrivals" class="shopNow">SHOP NOW</router-link>
            </div>
        </div>
    </div>
</template>



<style scoped>

.header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

h4 {
    color: #000;
    text-align: center;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-top: 150px;
}

.sub {
    color: #000;
    text-align: center;
    font-size: 20px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-top: -50px;
    margin-bottom: 60px;
}

h3 {
    color: #ffffff;
    text-align: center;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

p {
    width: 660px;
    flex-shrink: 0;
    color: #ffffff;
    text-align: center;
    font-size: 35px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: -50px;
}


.main-bestSellers {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 70px;
    
}
.best-sellers {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
}

.best-sellers img {
    width: 614px;
    height: 576px;
    flex-shrink: 0;
}

.shopNow {
    padding: 20px 40px 20px 40px;
    background-color: #1966ba;
    border: 2px solid #ffffff;
    border-radius: 15px;
    text-decoration: none;
    color: #ffffff;
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