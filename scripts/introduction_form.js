const getElement = id => {
  let input = document.getElementById(id);
  return input.value
}

let submit = document.getElementById('submit')

submit.onclick = function submit() {
  let photoInput = document.getElementById('photoInput');
  let photo = photoInput.files[0];
  let caption = getElement('photoCaption'),
    fullName = getElement('fullName'),
    personal = getElement('personalBackground'),
    professional = getElement('second'),
    academic = getElement('third'),
    primaryComp = getElement('primaryComp'),
    courses = getElement('fourth'),
    interesting = getElement('interesting');

  let iceCreamFlavor = document.querySelector('input[name="iceCreamFlavor"]:checked');
  let selectedFlavor = iceCreamFlavor ? iceCreamFlavor.id.charAt(0).toUpperCase() + iceCreamFlavor.id.slice(1) : 'Not selected';


  let programmingLanguages = document.querySelectorAll('input[type="checkbox"]:checked');
  let selectedLanguages = Array.from(programmingLanguages).map(language => language.id.charAt(0).toUpperCase() + language.id.slice(1)).join(', ');
  
  if (selectedLanguages === '') {
    selectedLanguages = 'None selected';
  }
  

  if (photo) {
    let reader = new FileReader();

    reader.onload = function (e) {
      let photoSrc = e.target.result;

      document.querySelector('main').innerHTML = `
        <div class="imageBox">
          <img class="image" src="${photoSrc}" alt="photo" style="width: 15vh; height:auto; padding-top: 3vh;"><br>
          <div class="caption">
            <i>${caption}</i><br>
          </div><br>
        </div>

        <div class="listBox">
        <ul>
          <li><b>Personal background: </b>${personal}</li>
          <li><b>Professional background: </b>${professional}</li>
          <li><b>Academic background: </b>${academic}</li>
          <li><b>Primary Computer Platform: </b>${primaryComp}</li>
          <li><b>Courses I'm Taking & Why:</b>
  
          <ul>${(() => {
            let coursesList = courses.split('\n').map(course => course.trim()).filter(Boolean);
            let content = '';
            for (let course of coursesList) {
              let split = course.split(/\s+-\s+/);
              content += `<li><strong>${split[0]}</strong> - ${split[1]}</li>`;
            }
            return content;
          })()}</ul>
          <li><b>Funny/Interesting Item about Yourself: </b>${interesting}</li>
          <li><b>Favorite Ice Cream Flavor: </b>${selectedFlavor}</li>
          <li><b>Favorite Programming Languages: </b>${selectedLanguages}</li>
        </ul>
      </div>
      `;
    };

    reader.readAsDataURL(photo);
  } else {
    alert('Please select a photo');
  }
};


