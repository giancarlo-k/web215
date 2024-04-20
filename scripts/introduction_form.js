
const getElement = id => {
  let input = document.getElementById(id);
  return input.value;
}

function handleSubmit() {
  console.log("Submit button clicked");
  let photoInput = document.getElementById('photoInput');
  let photo = photoInput.files[0];
  let caption = getElement('photoCaption'),
    fullName = getElement('fullName'),
    personal = getElement('personalBackground'),
    professional = getElement('second'),
    academic = getElement('third'),
    primaryComp = getElement('primaryComp'),
    amountOfCourses = getElement('amountOfCourses'), 
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

      let courses = [];
      for (let i = 1; i <= amountOfCourses; i++) {
        let courseText = getElement('course' + i);
        let indexOfColon = courseText.indexOf(':');
        if (indexOfColon !== -1) {
          let beforeColon = courseText.substring(0, indexOfColon);
          let afterColon = courseText.substring(indexOfColon);
          courses.push(`<b>${beforeColon}</b>${afterColon}`);
        } else {
          courses.push(courseText);
        }
      }

      document.querySelector('main').innerHTML = `
      <h2>Introduction</h2><br>
      <form>     
        <div class="imageBox">
          <img class="image" src="${photoSrc}" alt="photo" style="width: auto; height:auto;"><br>
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
            <ul>
              ${courses.map(course => `<li>${course}</li>`).join('')}
            </ul>
            <li><b>Funny/Interesting Item about Yourself: </b>${interesting}</li>
            <li><b>Favorite Ice Cream Flavor: </b>${selectedFlavor}</li>
            <li><b>Favorite Programming Languages: </b>${selectedLanguages}</li>
          </ul>
        </div>
      </form>
      `;
    };

    reader.readAsDataURL(photo);
  } else {
    alert('Please select a photo');
  }
}

document.getElementById('submit').addEventListener('click', handleSubmit);

function generateTextAreas(numCourses) {
  var coursesContainer = document.getElementById('coursesContainer');
  coursesContainer.innerHTML = '<label>Courses you\'re taking & why:</label>';

  for (var i = 1; i <= numCourses; i++) {
    var textarea = document.createElement('textarea');
    textarea.setAttribute('id', 'course' + i); 
    textarea.setAttribute('name', 'course' + i);
    textarea.setAttribute('placeholder', 'Course ' + i + ' details');
    coursesContainer.appendChild(textarea);
  }
}

document.getElementById('amountOfCourses').value = 4;

document.getElementById('amountOfCourses').addEventListener('input', function() {
  var amountOfCourses = parseInt(this.value);
  generateTextAreas(amountOfCourses);
});
generateTextAreas(4);

document.getElementById('course1').value = "CSC-221 - Advanced Python Programming: Degree Req. + Will teach me all about data retrieval, data manipulation, etc.";
document.getElementById('course2').value = "WEB-250 - Database Driven Websites: Degree Req. + Will help strengthen my front-end programming skills";
document.getElementById('course3').value = "CTS-118 - IS Professional Comm.: Degree Req. + Covers all scopes of software development";
document.getElementById('course4').value = "WEB-215 - Adv. Markup & Scripting: Degree Req. + Might become my main language";
