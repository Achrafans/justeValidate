
const validation = new JustValidate('#form');

validation
  .addField('#name', [
    {
      rule: 'required',
      errorMessage: 'Le nom est requis',
    },
  ])
  .addField('#email', [
    {
      rule: 'required',
      errorMessage: 'L\'email est requis',
    },
    {
      rule: 'email',
      errorMessage: 'L\'adresse email n\'est pas valide',
    },
  ])
  .addField('#phone', [
    {
      rule: 'required',
      errorMessage: 'Le téléphone est requis',
    },
  ])
  .addField('#address', [
    {
      rule: 'required',
      errorMessage: 'L\'address est requis',
    },
  ])
  .addField('#common-input-sec-1', [
    {
      rule: 'required',
      errorMessage: 'Common input est requis',
    },
  ])
  .addField('#common-input-sec-2', [
    {
      rule: 'required',
      errorMessage: 'Common input est requis',
    },
  ])
  .onSuccess((event) => {
    event.preventDefault(); 
    console.log('Formulaire validé avec succès !');
  }
);

document.getElementById('toggle-section-physique').addEventListener('change', function() {
    if (this.checked) {
        document.querySelector('.sec-1').style.display = 'block';
        document.querySelector('.sec-2').style.display = 'none';
        validation.destroy(); 
        validation.refresh();
    }
    
});

document.getElementById('toggle-section-moral').addEventListener('change', function() {
    if (this.checked) {
        document.querySelector('.sec-1').style.display = 'none';
        document.querySelector('.sec-2').style.display = 'block';
        validation.destroy(); 
        validation.refresh();
    }
   
});

document.getElementById('clear-errors').addEventListener('click', () => {
    validation.destroy(); 
    validation.refresh();
  });
