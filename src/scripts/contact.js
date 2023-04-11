const contactForm = document.getElementById('contact-form')

contactForm.addEventListener('submit', (e) => {
  e.preventDefault()

  const action = e.target.getAttribute('action')

  const nameInput = e.target["name"]
  const emailInput = e.target["email"]
  const phoneInput = e.target["phone"]
  const subjectInput = e.target["subject"]
  const messageInput = e.target["message"]
  const privacyPolicyInput = e.target["privacy-policy"]

  const name = nameInput.value.trim()
  const email = emailInput.value.trim()
  const phone = phoneInput.value.trim()
  const subject = subjectInput.value.trim()
  const message = messageInput.value.trim()
  const privacyPolicy = privacyPolicyInput.checked

  // Validate Name field
  if (name === '') {
    nameInput.setCustomValidity('Please enter your name')
  } else {
    nameInput.setCustomValidity('')
  }

  console.log(nameInput.checkValidity());

  // Validate Email field
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (email === '') {
    emailInput.setCustomValidity('Please enter your email')
  } else if (!emailRegex.test(email)) {
    emailInput.setCustomValidity('Please enter a valid email address')
  } else {
    emailInput.setCustomValidity('')
  }

  console.log(emailInput.checkValidity());

  // Validate Phone field
  const phoneRegex = /^\d{10,}$/
  if (phone !== '' && !phoneRegex.test(phone)) {
    console.log(phone);
    phoneInput.setCustomValidity('Please enter a valid 10-digit phone number')
  } else {
    phoneInput.setCustomValidity('')
    console.log(phone);
  }

  console.log(phoneInput.checkValidity());

  // Validate Subject field
  if (subject === '') {
    subjectInput.setCustomValidity('Please enter a subject')
  } else {
    subjectInput.setCustomValidity('')
  }

  console.log(subjectInput.checkValidity());

  // Validate Message field
  if (message === '') {
    messageInput.setCustomValidity('Please enter a message')
  } else {
    messageInput.setCustomValidity('')
  }

  console.log(messageInput.checkValidity());

  // Validate Privacy Policy checkbox
  if (!privacyPolicy) {
    privacyPolicyInput.setCustomValidity('Please agree to our Privacy Policy')
  } else {
    privacyPolicyInput.setCustomValidity('')
  }

  console.log(privacyPolicyInput.checkValidity());

  // Submit form if all fields are valid
  if (nameInput.checkValidity() && emailInput.checkValidity() && phoneInput.checkValidity() && subjectInput.checkValidity() && messageInput.checkValidity() && privacyPolicyInput.checkValidity()) {
    location.href = 'https://formspree.io/thanks?language=de'
    const formData = new FormData(contactForm)
    fetch(action, (e), {
      method: 'POST',
      body: JSON.stringify(Object.fromEntries(formData)),
      headers: { 'Content-Type': 'application/json' }
    })
      .then(res => { })
      .catch(err => { })
  }

  // Reset customValidity if user changes after error
  nameInput.addEventListener('input', (e) => { e.target.setCustomValidity('') })
  emailInput.addEventListener('input', (e) => { e.target.setCustomValidity('') })
  phoneInput.addEventListener('input', (e) => { e.target.setCustomValidity('') })
  subjectInput.addEventListener('input', (e) => { e.target.setCustomValidity('') })
  messageInput.addEventListener('input', (e) => { e.target.setCustomValidity('') })
  privacyPolicyInput.addEventListener('change', (e) => { e.target.setCustomValidity('') })

})