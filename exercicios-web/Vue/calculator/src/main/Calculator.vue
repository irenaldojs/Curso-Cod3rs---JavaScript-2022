<template>
    <div class="calculator">
        <Button></Button>
        <Display></Display>
    </div>
</template>

<script>
import Button from '../components/Button.vue'
import Display from '../components/Display.vue'

export default {
    name: "CalculatorItem",
    components: { Button, Display }
}
</script>

<style>
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-auto-columns: repeat(4, 25%);
    grid-auto-rows: 1fr 48px 48px 48px 48px;
}
</style>