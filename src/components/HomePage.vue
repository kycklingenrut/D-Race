<template>
    <div class="homePage">
        <img class="logo" alt="Logo" src="../assets/Icon.svg" />
        <h1>D-Race</h1>
        <p>Your one pit stop to find winners and some judges from RuPaul's Drag Race</p>
        <p>I've compiled two separate pages, with a filter for all the winners of Drag Race, to sort by name or season they were in.</p>
    </div>
</template>

<script>
export default {
    name: "HomePage"
}
</script>

<style scoped>
h1{
    padding: 20px;
}
.homePage{
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
    padding-top: 20px;
}
</style>