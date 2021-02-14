<template>
    <footer class="ft-container">
        <p class="ft-text">Im Noel, a Front-end student at IT-Högskolan in Gothenburg. This is my project for a Vue-CLI course in january 2021.</p>
        <section class="ft-links">
        <ul class="ft-links-list">
          <li><a href="https://github.com/kycklingenrut"><i class="fab fa-github">GitHub</i></a></li>
          <li><a href="https://www.linkedin.com/in/noel-andersson-k%C3%B6hler"><i class="fab fa-linkedin">LinkedIn</i></a></li>
          <li><a href="mailto:noel.anderssonkohler@hotmail.com">E-mail</a></li>
        </ul>
      </section>
    </footer>
</template>

<script>
export default {
    name: "my-footer"
}
</script>

<style scoped>
footer{
    background-color: #B963F2;
    height: auto;
}
li{
    padding: 18px;
}
i{
    font-style: normal;
}
a{
  background-color: #B3D89C;
  color: #000;
  padding: 1rem 1.5rem;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 10px;
}
.ft-container{
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}
.ft-text{
    width: 40%;
    text-align: left;
    margin-bottom: 0px;
    padding-left: 7rem;
    align-self: center;
}
.ft-links{
    padding-right: 7rem;
}
.ft-links-list{
    list-style: none;
    display: flex;
    flex-direction: column;
}
</style>