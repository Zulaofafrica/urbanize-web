<template>
    <NavBar/>
    <div class="login">
        <img src="../assets/Login.jpg" alt="">
        <div class="mainform">
            <div class="form">
                <h1>Welcome <span style="color: #1966ba;">Back!</span></h1>
                <p>Log In to Claim Offers</p>
                <form action="Login">
                    <input type="Email" placeholder="Email" id="email" required>
                    <input type="Password" placeholder="Password" id="Password" required>
                    
                    <div class="below">
                        <div class="rem">
                            <input class="rm" type="checkbox" id="rememberMe">
                            <label for="rememberMe">Remember Me</label>
                        </div>
                    
                        <router-link to="/forgot-password">Forgot Your Password?</router-link>
                    </div>

                    <button>Log In</button>

                    <div class="signup"> 
                        <p>Don't have an account?</p>
                        <router-link to="/signup">Sign Up Here</router-link>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'

export default {
    name: 'Login',
    components: {
        NavBar,
    }
}

</script>

<style scoped>

.login {
    display: flex;
    flex-direction: row;
}
.mainform {
    width: 930px;
    height: 696px;
    background-color: #EFF7FF;
}

h1 {
    color: #000;
    font-size: 40px;
    font-style: normal;
    font-weight: 700;
    margin-top: 98px;
    margin-left: 131px;
}

p {
    font-size: 16px;
    font-style: normal;
    font-weight: 300;
    line-height: normal;
    margin-top: -20px;
    margin-left: 131px;
}

input {
    width: 650px;
    height: 57px;
    border-radius: 20px;
    background: #FFF;
    border: none;
    margin-top: 40px;
    margin-left: 131px;
    padding-left: 30px;
    font-size: 15px;
    color: rgba(0, 0, 0, 0.50);
}

.rm {
    height: 15px;
    width: 15px;
    
}

.rem {
    display: flex;
    flex-direction: row;
    gap: 12px;
    align-items: center;
    justify-items: center;
    margin-top: -20px;
}

label {
    margin-top: 35px;
    font-size: 14px;
}

.below {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 400px;
}

.below a {
    text-decoration: none;
    font-size: 14px;
    color: #000;
    margin-top: 15px;

}

a:hover {
    color: #1966ba;
}

button {
    width: 680px;
    height: 57px;
    background-color: #1966ba;
    color: #FFF;
    border: none;
    border-radius: 20px;
    font-size: 25px;
    font-weight: 700;
    align-self: center;
    margin-top: 40px;
    margin-left: 131px;
}

button:hover {
    background-color: #155191;
}

.signup {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-left: 400px;
    gap: 15px;
    margin-top: 30px;
    font-size: 15px;
}

.signup a {
    margin-top: -35px;
    text-decoration: none;
    color: #1966ba;
    
}

</style>