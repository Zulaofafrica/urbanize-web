
<template>
    <div class="aboutUs">
        <NavBar />
        <div class="headline">
            <img src="../assets/urbanize-logo-icon-11.png" alt="">
            <h1>Welcome To <span style="color: #1966ba;">Urbanize!</span></h1>
        </div>

        <div class="ourStory">
            <img src="../assets/image14.png" alt="">

            <div class="story">
                <h2>Our <span style="color: #1966ba;">Story</span></h2>

                <p>We started this company based off our interest in the
                    lifestyle industry. We are trying to provide Urban solutions
                    to problems faced in the lifestyle sector by creating quality
                    products and offering top notch services.
                </p>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat.
                </p>

                <p>Thank You for Joining Us on this journey!</p>
            </div>

        </div>

        <div class="mission">
            <h2>Our <span style="color: #1966ba;">Mission</span></h2>

            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore
                magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat. veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat. veniam,
                quis nostrud exercitation ullamco laboris nisi ut aliquip
                ex ea commodo consequat.
            </p>
        </div>

        <div class="vision">
            <h2>Our <span style="color: #1966ba;">Vision</span></h2>

            <p>s: Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                sed do eiusmod tempor incididunt ut labore et dolore magna
                aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
                veniam, quis nostrud exercitation ullamco laboris nisi ut
                aliquip ex ea commodo consequat. veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo
                consequat.
            </p>
        </div>

        <div class="ourteam-main">
            <h2>Meet Our Team</h2>

            <div class="ourteam1">
                <div class="member">
                    <img src="../assets/member1.jpg" alt="">
                    <h3>Kayode Onanuga</h3>
                    <h4>CEO/Lead Product Designer</h4>
                </div>

                <div class="member">
                    <img src="../assets/member1.jpg" alt="">
                    <h3>Adebayo Banjo</h3>
                    <h4>COO/CFO</h4>
                </div>

                <div class="member">
                    <img src="../assets/member1.jpg" alt="">
                    <h3>Adebayo Adams</h3>
                    <h4>CTO</h4>
                </div>

                <div class="member">
                    <img src="../assets/member1.jpg" alt="">
                    <h3>Michael Onyekuru</h3>
                    <h4>CPO</h4>
                </div>

                <div class="member">
                    <img src="../assets/member1.jpg" alt="">
                    <h3>Oreoluwa Amoo</h3>
                    <h4>Marketing Lead</h4>
                </div>
            </div>

            <div class="ourteam2">
                <div class="member">
                    <img src="../assets/member1.jpg" alt="">
                    <h3>Emmanuel Okorie</h3>
                    <h4>UI/UX Designer</h4>
                </div>

                <div class="member">
                    <img src="../assets/member1.jpg" alt="">
                    <h3>Erica Mugege</h3>
                    <h4>Content Director</h4>
                </div>

                <div class="member">
                    <img src="../assets/member1.jpg" alt="">
                    <h3>Emmanuel Nwike</h3>
                    <h4>Community Manager</h4>
                </div>
            </div>
        </div>
        <Newsletter />
    <Footer />
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/Footer.vue'
import Newsletter from '@/components/Newsletter.vue';

export default {
    name: 'AboutUs',
    components: {
        NavBar,
        Footer,
        Newsletter,
    }
}
</script>


<style scoped>
.headline {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;

}

h1 {
    color: #000;
    font-size: 50px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
}

.headline img {
    height: 65px;

}

.ourStory {
    display: flex;
    flex-direction: row;
    margin-left: 210px;
    border: 1px solid #cadbed;
    width: 1117px;
    height: 769px;
    gap: 46px;
    box-shadow: -2px -3px 30px 0px rgba(161, 161, 161, 0.25);
}

.ourStory img {
    height: 769px;
}

.story {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

h2 {
    color: #000;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
}

p {
    color: #4B4B4B;
    font-family: Product Sans Light;
    font-size: 25px;
    font-style: normal;
    font-weight: 300;
    line-height: 36px;
    text-align: justify;
    width: 480px;
}

.mission {
    margin-left: 210px;
    margin-top: 120px;
}

.mission p {
    width: 1118px;
    text-align: justify;
    line-height: 200%;
}

.vision {
    margin-left: 230px;
    margin-top: 90px;
}

.vision p {
    width: 1118px;
    text-align: justify;
    line-height: 200%;
}

.ourteam1 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 100px;
}

.ourteam2 {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 100px;
    margin-top: 30px;
}

.ourteam-main h2 {
    text-align: center;
    margin-top: 95px;
    color: #1966BA;
}



.member {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.member img {
    height: 124px;
    width: 124px;
    border-radius: 50%;
    border: 1px solid #cadbed;
    box-shadow: -2px -3px 30px 0px rgba(161, 161, 161, 0.25);
}

h3 {
    color: #000;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
}

h4 {
    color: #000;
    font-family: Product Sans Light;
    font-size: 14px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-top: -15px;
}
</style>