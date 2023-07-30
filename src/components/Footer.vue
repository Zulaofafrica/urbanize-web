<template>
    <div class="main-footer">
        <div>
            <img src="../assets/urbanize-logo.svg" alt="">
        </div>

        <div class="all">
            <div class="footerListGroup">
                <div>
                    <ul class="footer">
                        <li v-for="footList in footLists" :key="footList.id">
                            <router-link :to="footList.route" class="footerlist">
                                {{ footList.label }}
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul class="footer">
                        <li v-for="footList in footListsTwo" :key="footList.id">
                            <router-link :to="footList.route" class="footerlist">
                                {{ footList.label }}
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div>
                    <ul class="footer">
                        <li v-for="footList in footListsThree" :key="footList.id">
                            <router-link :to="footList.route" class="footerlist">
                                {{ footList.label }}
                            </router-link>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="rightFooter">
                <div class="socials">
                    <router-link to="/instagram"><img src="../assets/icons/ig.png" alt=""></router-link>
                    <router-link to="/twitter"><img src="../assets/icons/tw.png" alt=""></router-link>
                    <router-link to="/tiktok"><img src="../assets/icons/tik.png" alt=""></router-link>
                    <router-link to="/facebook"><img src="../assets/icons/fb.png" alt=""></router-link>
                    <router-link to="/linkedin"><img src="../assets/icons/in.png" alt=""></router-link>
                </div>

                <div class="weAccept">
                    <h6>WE ACCEPT</h6>
                    <div class="logos">
                        <img src="../assets/icons/mc.png" alt="">
                        <img src="../assets/icons/vis.png" alt="">
                        <img src="../assets/icons/ver.png" alt="">
                    </div>
                </div>
            </div>
        </div>
        <hr style="margin-top: 50px;">
        <h6 style="text-align: center; font-size: 15px; font-weight: 400;">Copyright © Urbanize 2023. All rights reserved.</h6>
    </div>
</template>

<script setup>
const footLists = [
    { id: 1, label: 'About Us', route: "/AboutUs"},
    { id: 2, label: 'Blog', route: "/Blog"},
    { id: 3, label: 'Influencer Program', route: "/influencer-program"},
    { id: 4, label: 'Our Partners', route: "/our-partners"},
    { id: 5, label: 'Careers', route: "/careers"},
    { id: 6, label: 'Sustainability', route: "/sustainability"},
]

const footListsTwo = [
    { id: 1, label: 'Contact Us', route: "/contact-us"},
    { id: 2, label: 'FAQs', route: "/faqs"},
    { id: 3, label: 'Return Policy', route: "/return-policy"},
    { id: 4, label: 'Customer Care', route: "/customer-care"},
    { id: 5, label: 'Terms & Conditions', route: "/terms-and-conditions"},
    { id: 6, label: 'Privacy Policy', route: "/privacy-policy"},
]

const footListsThree = [
    { id: 1, label: 'My Account', route: "/contact-us"},
    { id: 2, label: 'Track My Order', route: "/faqs"},
    { id: 3, label: 'Order History', route: "/return-policy"},
    { id: 4, label: 'My Wishlist', route: "/customer-care"},
]

</script>

<style scoped>

.all {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    justify-content: center;
    gap: 200px;

}
.main-footer {
    background: #040f1a;
    height: 350px;
    margin-top: 200px;
    padding: 72px;
    padding-top: 40px;
}

.footerListGroup {
    margin-top: 50px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    gap: 200px;

}

li {
    font-size: 15px;
    line-height: 200%;
    list-style-type: none;
}

a {
    color: #b0bfce;
    text-decoration: none;
}

h6 {
    font-size: 15px;
    color: #b0bfce;
    margin-top: -0.5px;
}

.subscribe {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
}

button {
    color: white;
    width: 158px;
    height: 68px;
    position: absolute;
    border-radius: 20px;
    background: #1966BA;
    border: 0px;
    margin-bottom: 15px;
    margin-left: 340px;
    font-size: 20px;
}

.rightFooter {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 70px;
}

.socials {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 20px;
    gap: 15px;
}

.socials a img {
    height: 40px;
}

.logos {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-top: -25px;
    gap: 30px;
}
.logos img {
    height: 40px;
}

hr {
    border-color: #b0bfce;
}

</style>