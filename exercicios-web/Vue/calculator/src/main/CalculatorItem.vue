<template>
    <div class="calculator">
        <DisplayItem :value="displayValue"></DisplayItem>
        <ButtonItem label="Ac" triple @onClick="clearMemory"></ButtonItem>
        <ButtonItem label="/" operation @onClick="setOperation"></ButtonItem>
        <ButtonItem label="7" @onClick="addDigit"></ButtonItem>
        <ButtonItem label="8" @onClick="addDigit"></ButtonItem>
        <ButtonItem label="9" @onClick="addDigit"></ButtonItem>
        <ButtonItem label="*" operation @onClick="setOperation"></ButtonItem>
        <ButtonItem label="4" @onClick="addDigit"></ButtonItem>
        <ButtonItem label="5" @onClick="addDigit"></ButtonItem>
        <ButtonItem label="6" @onClick="addDigit"></ButtonItem>
        <ButtonItem label="-" operation @onClick="setOperation"></ButtonItem>
        <ButtonItem label="1" @onClick="addDigit"></ButtonItem>
        <ButtonItem label="2" @onClick="addDigit"></ButtonItem>
        <ButtonItem label="3" @onClick="addDigit"></ButtonItem>
        <ButtonItem label="+" operation @onClick="setOperation"></ButtonItem>
        <ButtonItem label="0" double @onClick="addDigit"></ButtonItem>
        <ButtonItem label="." @onClick="addDigit"></ButtonItem>
        <ButtonItem label="=" operation @onClick="setOperation"></ButtonItem>
    </div>
</template>

<script>

import ButtonItem from '../components/ButtonItem.vue'
import DisplayItem from '../components/DisplayItem.vue'

export default {
    name: "CalculatorItem",
    components: { ButtonItem, DisplayItem },
    data() {
        return {
            displayValue: '0',
            clearDisplay: false,
            operation: null,
            values: [0, 0],
            current: 0
        }
    },
    methods: {
        clearMemory() {
            Object.assign(this.$data, this.$options.data())
        },
        setOperation(operation) {
            if (this.current === 0) {
                this.operation = operation
                this.current = 1
                this.clearDisplay = true
            } else {
                const equals = operation === '='
                const currentOperation = this.operation

                try {
                    this.value[0] = eval(`${this.value[0]} ${currentOperation} ${this.value[1]}`)

                } catch (e) {
                    this.$emit('onError', e)
                }

                this.values[1] = 0

                this.displayValue = this.values[0]
                this.operation = equals ? null : operation
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals
            }
        },
        addDigit(n) {
            if (n === '.' && this.displayValue.includes('.')) {
                return
            }

            const clearDisplay = this.displayValue == '0' || this.clearDisplay
            const currentValue = clearDisplay ? '' : this.displayValue
            const currentDisplayValue = currentValue + n

            this.displayValue = currentDisplayValue
    
            if (n !== '.') {
                const i = this.current
                const newValue = parseFloat(this.displayValue)
                this.values[i] = newValue
            }
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