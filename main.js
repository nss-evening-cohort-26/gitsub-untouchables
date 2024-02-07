// console.log("Test")


// Utility Functions
const renderToDom = (divId, htmlToRender) => {
  const selectedId = document.querySelector(divId);
  selectedId.innerHTML = htmlToRender;
};

//HTML Components for the navbar, profile area and footerOnDom

const navOnDom = () => {
  const domString = `
  <ul class="nav nav-underline">
    <li class="nav-item">
      <a class="nav-link " aria-current="page" href="#">Overview</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Repositories</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Projects</a></a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">Packages</a>
    </li>
  </ul>
  `;

  renderToDom(".nav", domString);

};

// navOnDom();

const footerOnDom = () => {
  const domString = `
  <ul>
    <li><a href="#">© 2024 GitHub, Inc.</a></li>
    <li><a href="#">Terms</a></li>
    <li><a href="#">Privacy</a></li>
    <li><a href="#">Security</a></li>
    <li><a href="#">Status</a></li>
    <li><a href="#">Help</a></li>
    <li><a href="#"></a></li>
    <li><a href="#">Contact Github</a></li>
    <li><a href="#">Pricing</a></li>
    <li><a href="#">API</a></li>
    <li><a href="#">Training</a></li>
    <li><a href="#">Blog</a></li>
    <li><a href="#">About</a></li>
  </ul>
  `;

  renderToDom(".footer", domString);
};

// footerOnDom()

const profileOnDom = (array) => {
  let domString = "";

  array.map((item) => {
    domString += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <img src="..." id="user-image">
      <h5 class="card-title" id="profile-name">${item.name}</h5>
      <h6 class="card-subtitle mb-2 text-body-secondary" id="username">${item.username}</h6>
      <p class="card-text" id="bio">${item.bio}</p>
      <div id="profile-btns">
        <button>Follow</button>
        <button>&#9825; Sponsor</button>
        <button>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-three-dots" viewBox="0 0 16 16">
          <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3m5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3"/>
          </svg>
        </button>
      </div>
      <div id="influence">
        <p>${item.followers} followers</p>
        <p>${item.following} following</p>
        <p><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star" viewBox="0 0 16 16">
        <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.56.56 0 0 0-.163-.505L1.71 6.745l4.052-.576a.53.53 0 0 0 .393-.288L8 2.223l1.847 3.658a.53.53 0 0 0 .393.288l4.052.575-2.906 2.77a.56.56 0 0 0-.163.506l.694 3.957-3.686-1.894a.5.5 0 0 0-.461 0z"/>
      </svg>${item.stars}</p>
      </div>
      <p>${item.location}</p>
      <p>${item.email}</p>
      <p>${item.website}</p>
      <p>${item.twitter}</p>
      <h6>Highlights</h6>
      <p>${item.highlights}</p>
    </div>
    </div>
    `;
  });

  renderToDom("#sidebar", domString)

};
// profileOnDom(profiles)
