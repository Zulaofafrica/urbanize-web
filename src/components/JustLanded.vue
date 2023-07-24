<template>
    <div class="just-landed">
        <img src="../assets/justlanded.png" alt="">
        <div class="exploreTag">
            <h3>Just Landed!</h3>
            <p>Explore our Vast Collection of Everyday Lifestyle Essentials</p>
            <router-link to="/new-arrivals" class="explore">Explore</router-link>
        </div>
    </div>
</template>


<style scoped>

.just-landed {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 1510px;
    height: 828px;
    flex-shrink: 0;
    background: linear-gradient(-90deg, #5b95d6, #1866BD);
    box-shadow: 0px 4px 10px 0px rgba(0, 0, 0, 0.25);
}

.just-landed img {
    width: 1440px;
    height: 761px;
    flex-shrink: 0;
}

h3 {
    color: #ffffff;
    text-align: center;
    font-size: 60px;
    font-style: normal;
    font-weight: 400;
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
.explore {
    padding: 20px 32px 20px 32px;
    background-color: rgba(0, 0, 0, 0);
    border: 2px solid #ffffff;
    text-decoration: none;
    color: #ffffff;
}

.exploreTag{
    display: flex;
    flex-direction: column;
    align-items: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
</style>