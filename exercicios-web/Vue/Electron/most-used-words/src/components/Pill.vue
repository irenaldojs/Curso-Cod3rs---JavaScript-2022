<template>
    <div class="pill">
        <span class="name">{{name}}</span>
        <span class="amount">{{amount}}</span>
    </div>
</template>

<script>
export default {
    name: 'PillVue',
    props: ['name', 'amount'],

}
</script>

<style scoped>
.pill{
    height: 55px;
    border-radius: 30px;
    margin: 10px;
    background-color: crimson;
    color: white;
    font-size: 1.3rem;
    font-weight: bold;

    display: flex;
    align-items: center;
}

.pill .name{
    margin-left: 15px;
}
.pill .amount{
    margin: 10px;
    padding: 5px;
    height: 35px;
    width: 35px;
    border-radius: 17px;

    background-color: white;
    color: crimson;
    font-size: 14px;

    display: flex;
    justify-content: center;
    align-items: center;

}
</style>