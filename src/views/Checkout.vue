<template>
    <NavBar />
    <div class="main">
        <img src="../assets/nike-shoe.png" alt="">
        <div class="details">
            <div class="product">
                <h6>Footwear</h6>
                <h1>Nike Air VaporMax</h1>
                <h2>₦30,000</h2>
            </div>

            <div class="deet">
                <div class="select">
                    <div class="quantity">
                        <select name="quantity" id="quantity">
                            <option disabled value="">Quantity</option>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>

                    <div class="size">
                        <select name="Size" id="size">
                            <option disabled value="">Size</option>
                            <option>39</option>
                            <option>40</option>
                            <option>41</option>
                            <option>42</option>
                            <option>43</option>
                            <option>44</option>
                            <option>45</option>
                        </select>
                    </div>
                </div>

                <div class="hurry">
                    <h5>️‍🔥 Hurry, Only 5 Left!</h5>
                </div>

                <div class="actions">
                    <button  class="bag">Add to bag</button>
                    <button class="wishlist">Add to Wishlist</button>
                    <router-link to="/checkout-info"><button class="buy">BUY NOW</button></router-link>
                </div>
            </div>
        </div>
    </div>

    <div class="below">
        <div class="otherimages">
            <img src="../assets/nike-shoe.png" alt="">
            <img src="../assets/nike-shoe.png" alt="">
            <img src="../assets/nike-shoe.png" alt="">
        </div>

        <div class="des">
            <h6>Description</h6>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing
                elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis
                nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.magna aliqua. Ut enim ad
                minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
    </div>

    <Footer />
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'

export default {
    name: 'Login',
    components: {
        NavBar,
        Footer,
    }
}

</script>


<style scoped>
.main {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 100px;
}

.main img {
    margin-top: 67px;
    height: 550px;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    border: 1px solid #cadbed;
    box-shadow: 2px 1px 1px 0px rgba(161, 161, 161, 0.127);
}

h6 {
    color: #797979;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
}

h1 {
    color: #000;
    font-size: 60px;
    font-style: normal;
    font-weight: 700;
    line-height: 60px;
    width: 374px;
    margin-top: -40px;
}

h2 {
    color: #000;
    font-size: 45px;
    font-style: normal;
    font-weight: 400;
    margin-top: -30px;
}

.select {
    display: flex;
    flex-direction: row;
    gap: 30px;
}

select {
    width: 120px;
    height: 47px;
    border-radius: 10px;
    border: 0.3px solid #cadbed;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    padding-left: 20px;
    padding-right: 10px;
}

option {
    border: 0.3px solid #cadbed;
}

.hurry {
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
}

.bag {
    width: 196px;
    height: 60px;
    border: 2px solid #cadbed;
    background: #FFF;
    font-size: 18px;
    color: #1966BA
}

.wishlist {
    width: 197px;
    height: 60px;
    background-color: #cadbed;
    font-size: 18px;
    color: #1966BA;
    border: none;
}

.buy {
    width: 417px;
    height: 60px;
    background: #1966BA;
    color: #FFF;
    font-size: 24px;
    border: none;
}

.actions {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    width: 417px;
    gap: 20px;
}

.below {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 100px;
    margin-left: 20px;
}

.otherimages {
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin-top: 50px;
    gap: 45px
}

.otherimages img {
    height: 152px;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
    border: 1px solid #cadbed;
    box-shadow: 2px 1px 1px 0px rgba(161, 161, 161, 0.127);
}

p {
    color: #4B4B4B;
    font-family: Product Sans Light;
    font-size: 15px;
    font-style: normal;
    font-weight: 300;
    line-height: 200%;
    width: 450px;
    text-align: justify;
    margin-top: -30px;
}
</style>