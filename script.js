const answers = document.querySelectorAll('.answer')
const faqIcons = document.querySelectorAll('.faq-icon')
const faqQuestions = document.querySelectorAll('.question h3')

function expand(e) {
	console.log('clicked')
	const thisIcon = e.target
	const parentElement = thisIcon.parentElement
	const sharedElement = parentElement.childNodes[2].nextElementSibling

	let isSelected = sharedElement.classList.contains('selected')
	const parentAdjacent = thisIcon.parentElement.nextElementSibling

	faqIcons.forEach((icon) => icon.classList.remove('selected'))
	answers.forEach((answer) => {
		answer.classList.remove('selected')
	})

	if (isSelected) {
		sharedElement.classList.remove('selected')

		parentAdjacent.classList.remove('selected')
	} else {
		sharedElement.classList.add('selected')
		sharedElement.setAttribute('aria-expanded', true)
		parentAdjacent.classList.add('selected')
	}
}

faqIcons.forEach((faqIcon) => {
	faqIcon.setAttribute('aria-expanded', false)
	faqIcon.addEventListener('click', expand)
})

faqQuestions.forEach((question) => {
	question.setAttribute('aria-hidden', true)
	question.addEventListener('click', expand)
})
