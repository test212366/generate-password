let password = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 'a', 'b', 'c', 'd', 'A', 'B', 'C', 'D', '@', '#', '$', '%']

const button = document.getElementById('button'),
	outTitle = document.getElementById('out')
button.addEventListener('click', createPassword)

function createPassword() {
	let out = ''
	password.sort(randomNum)
	for (let i = 0; i < password.length; i++) {
		out += password[i]
	}
	outTitle.textContent = out
}
function randomNum() {
	return Math.random() - .5
}