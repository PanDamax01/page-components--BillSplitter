const amount = document.querySelector('#price')
const people = document.querySelector('#people')
const select = document.querySelector('#tip')
const btn = document.querySelector('.count')
const error = document.querySelector('.error')
const cost = document.querySelector('.cost')
const costInfo = document.querySelector('.cost-info')

const counting = () => {
	const newPrice = parseFloat(amount.value)
	const newPeople = parseInt(people.value)
	const newSelect = parseFloat(select.value)

	const result = (newPrice + (newPrice * newSelect)) / newPeople
	cost.textContent = result.toFixed(2)
	costInfo.style.display = 'block'
}

const showBill = () => {
	if (amount.value === '' || people.value === '' || select.value === '0') {
		error.textContent = 'Uzupełnij wszytkie pola :)'
		costInfo.style.display = 'none'
	} else if (amount.value <= 0 || people.value <= 0) {
		error.textContent = 'Nie może być ujemny i równy zero :('
		costInfo.style.display = 'none'
	} else {
		counting()
		error.textContent = ''
	}
}

btn.addEventListener('click', showBill)
