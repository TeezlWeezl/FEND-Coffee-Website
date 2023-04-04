document.forms['contactForm'].addEventListener('submit', (e) => {

  console.log('Success');

  e.preventDefault()
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

  // Validate Email field
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (email === '') {
    emailInput.setCustomValidity('Please enter your email')
  } else if (!emailRegex.test(email)) {
    emailInput.setCustomValidity('Please enter a valid email address')
  } else {
    emailInput.setCustomValidity('')
  }

  // Validate Phone field
  const phoneRegex = /^\d{10}$/
  if (phone !== '' && !phoneRegex.test(phone)) {
    phoneInput.setCustomValidity('Please enter a valid 10-digit phone number')
  } else {
    phoneInput.setCustomValidity('')
  }

  // Validate Subject field
  if (subject === '') {
    subjectInput.setCustomValidity('Please enter a subject')
  } else {
    subjectInput.setCustomValidity('')
  }

  // Validate Message field
  if (message === '') {
    messageInput.setCustomValidity('Please enter a message')
  } else {
    messageInput.setCustomValidity('')
  }

  // Validate Privacy Policy checkbox
  if (!privacyPolicy) {
    privacyPolicyInput.setCustomValidity('Please agree to our Privacy Policy')
  } else {
    privacyPolicyInput.setCustomValidity('')
  }

  // Submit form if all fields are valid
  if (nameInput.checkValidity() && emailInput.checkValidity() && phoneInput.checkValidity() && subjectInput.checkValidity() && messageInput.checkValidity() && privacyPolicyInput.checkValidity()) {
    alert('Success')
  }

  // console.log({ name, email, phone, subject, message, privacyPolicy })
})