<template>
    <div class="calculator">
        <Display value="1000"></Display>
        <Button label="Ac" triple @onClick="clearMemory"></Button>
        <Button label="/" operation @onClick="setOperation"></Button>
        <Button label="7" @onClick="addDigit"></Button>
        <Button label="8" @onClick="addDigit"></Button>
        <Button label="9" @onClick="addDigit"></Button>
        <Button label="*" operation @onClick="setOperation"></Button>
        <Button label="4" @onClick="addDigit"></Button>
        <Button label="5" @onClick="addDigit"></Button>
        <Button label="6" @onClick="addDigit"></Button>
        <Button label="-" operation @onClick="setOperation"></Button>
        <Button label="1" @onClick="addDigit"></Button>
        <Button label="2" @onClick="addDigit"></Button>
        <Button label="3" @onClick="addDigit"></Button>
        <Button label="+" operation @onClick="setOperation"></Button>
        <Button label="0" double @onClick="addDigit"></Button>
        <Button label="." @onClick="addDigit"></Button>
        <Button label="=" operation @onClick="setOperation"></Button>
    </div>
</template>

<script>
import Button from '../components/Button.vue'
import Display from '../components/Display.vue'

export default {
    name: "CalculatorItem",
    components: { Button, Display },
    methods: {
        clearMemory() {

        },
        setOperation(operation) {
            
        },
        addDigit(n) {
            
        }
    }
}
</script>

<style>
.calculator {
    height: 320px;
    width: 235px;
    border-radius: 5px;
    overflow: hidden;

    display: grid;
    grid-template-columns: repeat(4, 25%);
    grid-template-rows: 1fr 48px 48px 48px 48px 48px;
}
</style>