const getElement = id => {
  let input = document.getElementById(id);
  return input.value
}

let submit = document.getElementById('submit')

submit.onclick = function submit() {
  let photo = getElement('photoInput'),
  caption = getElement('photoCaption'),
  fullName = getElement('fullName'),
  personal = getElement('personalBackground'),
  professional = getElement('second'),
  academic = getElement('third'),
  primaryComp = getElement('primaryComp'),
  courses = getElement('fourth'),
  interesting = getElement('interesting');

  document.querySelector('main').innerHTML=`
  <div class="imageBox">
    <img class="image" src="${photo}" alt="photo" style="width:100%; height:auto;"><br>
    <div class="caption">
      <i>${caption}</i><br>
    </div><br>
  </div>

<div class="listBox">
  <ul>
    <li><b>Personal background: </b>${ personal}</li>
    <li><b>Professional background: </b> ${ professional}</li>
    <li><b>Academic background: </b> ${ academic}</li>
    <li><b>Primary Computer Platform: </b>${ primaryComp}</li>
    <li><b>Courses I'm Taking & Why:</b>

    <ul>
      <li><b>CSC-221 - Advanced Python Programming</b>: Degree Req. + Will teach me all about data retrieval, data manipulation, etc.</li>
      <li><b>WEB-250 - Database Driven Websites</b>: Degree Req. + Will help strengthen my front-end programming skills</li>
      <li><b>CTS-118 - IS Professional Comm.</b>: Degree Req. + Covers all scopes of software development</li>
      <li><b><a href="https://giancarlo-k.github.io/web215/contract">WEB-215 - Adv. Markup & Scripting</a></b>: Degree Req. + Might become my main language</li></ul> 
    <li><b>Funny/Interesting Item about Yourself: </b>${ interesting}</li>

  </ul>
</div>
  `
}

