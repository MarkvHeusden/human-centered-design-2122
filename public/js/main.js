// Zorg dat er maar 2 cijfers in de input gevuld kunnen worden
const input = document.querySelector('input[type="number"]')
const submit = document.querySelector('input[type="submit"]')
input.oninput = function () {
    if (this.value.length > 2) {
        this.value = this.value.slice(0, 2)
    }
    submit.value = `Zoek rooster voor week ${input.value}`
}

// Bereken het huidige weeknummer en geef deze als placeholder
const currentDate = new Date()
const startDate = new Date(currentDate.getFullYear(), 0, 1)
const days = Math.floor((currentDate - startDate) / (24 * 60 * 60 * 1000))
const weekNumber = Math.floor((currentDate.getDay() + 1 + days) / 7)

input.placeholder = weekNumber
