function trocaCor() {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var body = document.querySelector('body');
  
  checkboxes.forEach(function(checkbox) 
  {
    if (checkbox.checked) {
      switch (checkbox.id) {
        case 'checkbox1':
          body.style.backgroundColor = 'rgb(34, 41, 104)';
          body.style.color = 'white';
          break;
        
        case 'checkbox2':
          body.style.backgroundColor = 'rgb(128, 0, 128)';
          body.style.color = 'white';
        break;
        
        case 'checkbox3':
          body.style.backgroundColor = 'rgb(238, 240, 135)';
          body.style.color = 'black';
        break;
        
        case 'checkbox4':
          body.style.backgroundColor = 'rgb(83, 221, 124)';
          body.style.color = 'black';
        break;
        
        case 'checkbox5':
          body.style.backgroundColor = 'rgb(2, 2, 2)';
          body.style.color = 'white';
        break;
      }
    }
  });
}