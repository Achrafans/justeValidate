
const validation = new JustValidate('#form', {
  validateBeforeSubmitting: true, 
});

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
  .addField('#speciale', [
    {
      rule: 'required',
      errorMessage: 'speciale est requis',
    },
    // {
    //   rule: 'customRegexp',
    //   value:`^\\d{0,8}$` ,
    //   errorMessage: 'Le champ doit contenir uniquement des chiffres avec une longueur adaptée.',
    // },
    {
      rule: 'custom',
      validator: function(value) {
        const input = document.querySelector('#speciale');
        let regex = '^\\d{0,8}$'; 
     
        if (input.classList.contains('aa')) {
          regex = '^\\d{0,8}$';  
        } else if (input.classList.contains('bb')) {
          regex = '^\\d{0,10}$'; 
        } else if (input.classList.contains('cc')) {
          regex = '^\\d{0,12}$'; 
        }
  
        const regexTest = new RegExp(regex).test(value);
        return regexTest;
      },
      errorMessage: 'Le champ doit contenir uniquement des chiffres avec une longueur adaptée.',
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
////

const specialeInput = document.getElementById('speciale');
const selectOption = document.getElementById('selectOption');

selectOption.addEventListener('change', function () {
  // Supprimer toutes les classes précédentes
  specialeInput.classList.remove('aa', 'bb', 'cc');

  if (this.value === 'test1') {
    specialeInput.classList.add('aa');
    validation.revalidateField('#speciale');
  } else if (this.value === 'test2') {
    specialeInput.classList.add('bb');
    validation.revalidateField('#speciale');
  } else if (this.value === 'test3') {
    specialeInput.classList.add('cc');
    validation.revalidateField('#speciale');
  }
});

specialeInput.addEventListener('input', () => {
  validation.revalidateField('#speciale');
});



