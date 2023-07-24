<template>
    <div class="main">
        <h1>Nike Air VaporMax</h1>
        <p>Futuristic space Men's Shoes designed for comfort</p>
        <h2>NGN 88,900</h2>
        <router-link to="/checkout-page">Buy Now></router-link>
        <img src="../assets/nike-shoe.png" alt="">
    </div>
</template>




<style scoped>

.main {
    display: flex;
    flex-direction: column;
    gap: -200px;
    justify-content: center;
    align-items: center;
    justify-items: center;
    align-content: center;
}

h1 {
    font-size: 64px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: -2.88px;
}

p {
    color: #5C5C5C;
    font-size: 22px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin-top: -40px;
}

h2 {
    color: #000;
    font-size: 36px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -1.62px;
    margin-top: -10px;
}


img {
    height: 100vh;
    margin-top: -200px;
    z-index: -10;
}

a {
    color: #1866BD;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration: none;
    text-decoration: none;
    z-index: 5;
}

</style>