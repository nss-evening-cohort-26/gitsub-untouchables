const packages = [
  {
    title: "Docker",
    description:
      "A software platform used for building applications based on containers - small and lightweight execution environments.",
  },
  {
    title: "Apache Maven",
    description:
      "A default package manager used for the Java programming language and the Java runtime environment.",
  },
  {
    title: "NuGet",
    description:
      "A free and open sourced package manager used for the Microsoft development platforms including .NET.",
  },
];

// Utility Functions
const renderToDom = (divId, htmlToRender) => {
  const selectedId = document.querySelector(divId);
  selectedId.innerHTML = htmlToRender;
};

//HTML Components for the navbar, profile area and footerOnDom
//Navbar to DOM
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
      <a class="nav-link" href="packages.html">Packages</a>
    </li>
  </ul>
  `;

  renderToDom(".nav", domString);
};

//Footer to DOM
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

//Profile to DOM
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

  renderToDom("#sidebar", domString);
};

//Packages to DOM
const allPackages = (array) => {
  let domString = "";
  for (const package of array) {
    domString += `<div class="card card-package" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${package.title}</h5>
      <p class="card-text">${package.description}</p>
      <button type="button" class="btn btn-secondary btn-sm">Learn More</button>     
    </div>
  </div>`;
  }
  renderToDom("#packages", domString);
};

//Create Package Form
const packageForm = () => {
  const domString = `
  <form id="inputFormPackage">
    <h3 class="form-header">Create a new project</h3>
    <div class="form-floating mb-3">
      <input class="form-control form-control-lg" type="text" placeholder="Example 1" id="projectName" aria-label="projectName" required>
      <label for="projectName">Project Board Name</label>
    </div>
    <div class="mb-3">
    <label for="exampleFormControlTextarea1" class="form-label">Description</label>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
    <button type="submit" class="btn btn-success" id="form-submit">Create Package</button>
  </form>`;
  renderToDom("#packages-form", domString);

  const form = document.querySelector("#packages-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const newPackageObj = {
      id: packages.length + 1,
      name: document.querySelector("#projectName").value,
      description: document.querySelector("#exampleFormControlTextarea1").value,
    };
    packages.push(newPackageObj);
    allPackages(packages);
    form.reset();
  });
};

//On Start Function
const startApp = () => {
  navOnDom();
  allPackages(packages);
  packageForm();
  footerOnDom();
  //eventListeners(); // always last
};

startApp();
