const submitForm = () => {
    const submitForm = document.getElementById('submit-form')
    const submitFormParent = submitForm.parentElement 
    submitForm.addEventListener('submit', function(e){
        e.preventDefault()
    }, {passive:false})

    const thanksMessage = document.createElement('h2')
    thanksMessage.innerText = 'Дякуємо за ваше звернення'

    submitFormParent.removeChild(submitForm)
    submitFormParent.append(thanksMessage)
}