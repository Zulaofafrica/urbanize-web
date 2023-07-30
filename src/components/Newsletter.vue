<template>
  <main>
    <div class="newsletter">
      <h4>Subscribe to Our Newletters!</h4>
      <p>Get all the latest Deals and Promo right in your mail.</p>
      <form>
        <input type="Email" placeholder="Enter Your Email Address">
        <button type="submit">Subscribe</button>
      </form>
    </div>

    <div class="sale">
      <img src="../assets/sale.png" alt="">
    </div>
  </main>
</template>

<style scoped>

h4 {
  width: 270px;
  color: #1966ba;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: -1px;
}

p {
  color: #000;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin-top: -15px;
}

form {
  margin-top: 60px;
}

button {
  width: 148px;
  height: 45px;
  border-radius: 0px 10px 10px 0px;
  background: #1966BA;
  border: none;
  color: #FFF;
}

input {
  width: 331px;
  height: 47px;
  border-radius: 10px 0px 0px 10px;
  background: #FFF;
  border: none;
  padding-left: 20px;
  font-size: 15px;
  color: rgba(0, 0, 0, 0.50);
}

main {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 200px;
  background: #eff7ff;
  box-shadow: 54px 40px 40px 0px rgba(239, 247, 255, 0.856);
  border-radius: 20px;
  height: 297px;
  width: 1090px;
  margin: auto;
  padding-left: 86px;
  padding-top: 36px;
  margin-top: 100px;
  border: 1px solid #cadbed;
}

img {
  height: 300px;
}

</style>
