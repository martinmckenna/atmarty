const submitForm = e => {
  e.preventDefault();

  let formData = new FormData(form);

  let formToJSON = {};

  // turn the form data into a json object
  for (const [key, value] of formData.entries()) {
    formToJSON[key] = value;
  }

  let quizAnswer = document.getElementById('quiz');

  if (quizAnswer.value == 14) {
    return fetch('/email.php', {
      body: JSON.stringify(formToJSON),
      method: 'POST'
    })
      .then(response => response.json())
      .then(response => {
        if (response.status === 'success') {
          alert('Message sent successfully!');
        } else {
          alert('There was an issue sending your message. Please try again!');
        }
        form.reset();
        quizAnswer.style.borderColor = 'grey';
      })
      .catch(e => e);
  } else {
    alert('Please answer the quiz answer correctly!');
    quizAnswer.style.borderColor = 'red';
  }
};

const form = document.getElementById('contact-form');

if (window.location.pathname === '/') {
  form.addEventListener('submit', e => submitForm(e));
}
