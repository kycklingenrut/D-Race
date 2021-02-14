<template>
    <footer class="ft-container">
        <p class="ft-text">Im Noel, a Front-end student at IT-Högskolan in Gothenburg. This is my project for a Vue-CLI course in january 2021.</p>
        <section class="ft-links">
        <ul class="ft-links-list">
          <li><a href="https://github.com/kycklingenrut">Github</a></li>
          <li><a href="https://www.linkedin.com/in/noel-andersson-k%C3%B6hler">Linkedin</a></li>
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
    padding: 8px;
}
i{
    font-style: normal;
    background-color: #000
}
a{
  background-color: #402154;
  color: rgb(218, 218, 218);
  padding: 0.5rem 1rem;
  text-decoration: none;
  text-transform: uppercase;
  border-radius: 10px;
  font-size: 14px;
}
a:hover{
    color: rgb(253, 206, 206)
}
.ft-container{
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 0px;
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