const packages = [    
  {
    title: "Docker",
    description: "A software platform used for building applications based on containers - small and lightweight execution environments.",
  },
  {
    title: "Apache Maven",
    description: "A default package manager used for the Java programming language and the Java runtime environment.",
  },
  {
    title: "NuGet",
    description: "A free and open sourced package manager used for the Microsoft development platforms including .NET.",
  }
];

  const allPackages = (array) => {
    let domString = ''
    for (const package of array) {
      domString += 
      `<div class="card card-package" style="width: 18rem;">
      <div class="card-body">
        <h5 class="card-title">${package.title}</h5>
        <p class="card-text">${package.description}</p>
        <button type="button" class="btn btn-secondary btn-sm">Learn More</button>     
      </div>
    </div>`
    }
    renderToDom("#packages", domString)
  }

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
 </form>`
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

  const startApp = () => {
    allPackages(packages);
    packageForm()
    //eventListeners(); // always last
  };

  startApp();
