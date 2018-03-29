if (!Object.entries) {
  // polyfill for entries
  Object.entries = function(obj) {
    var ownProps = Object.keys(obj),
      i = ownProps.length,
      resArray = new Array(i); // preallocate the Array

    while (i--) resArray[i] = [ownProps[i], obj[ownProps[i]]];
    return resArray;
  };
}

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
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST'
    }).then(response => {
      if (!!response.ok) {
        alert('Message sent successfully!');
      } else {
        alert('There was an issue sending your message. Please try again!');
      }
      form.reset();
      quizAnswer.style.borderColor = 'grey';
    });
  } else {
    alert('Please answer the quiz answer correctly!');
    quizAnswer.style.borderColor = 'red';
  }
};

const form = document.getElementById('contact-form');
form.addEventListener('submit', e => submitForm(e));
