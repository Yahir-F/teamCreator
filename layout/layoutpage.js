
const loadTeam = (load) => {
    const createManager = (manager) => {
        return `
        
        <div class="card" employee info>
        <div class="card-header">
        <h2 class="title">${manager.empName()}</h2>
        <h3 class= "title><i class="fas fa-mug-hot"></i> ${manager.empPosition()}</h3>
        </div>
        <div class="empBody">
        <ul class="empInfo">
                 <li class="info-list"> Id: ${manager.empId()}</li>
                 <li class="info-list"> Email: ${manager.empEmail()}</li>
                <li class="info-list"> Number of Office: ${manager.grabOfficeNumber()}</li>
             </ul>
         </div>
        </div>
        `;
    };
        const createEngineer = (engineer) => {
            return `
            <div class="card" employee info>
            <div class="card-header">
            <h2 class="title">${engineer.empName()}</h2>
            <h3 class= "title><i class="fas fa-glasses"></i> ${engineer.empPosition()}</h3>
            </div>
            <div class="empBody">
            <ul class="empInfo">
                        <li class="info-list"> Id: ${engineer.empId()}</li>
                        <li class="info-list"> Email: ${engineer.empEmail()}</li>
                        <li class="info-list"> Github: ${engineer.empGithub()}</li>
                        </ul>
            </div>
            </div>
            `;
        }

        const createIntern = (intern) => {
            return `
            <div class="card" employee info>
            <div class="card-header">
            <h2 class="title">${intern.empName()}</h2>
            <h3 class= "title><i class="fas fa-user-graduate"></i> ${intern.empPosition()}</h3>
            </div>
            <div class="empBody">
            <ul class="empInfo">
                        <li class="info-list"> Id: ${intern.empId()}</li>
                        <li class="info-list"> Email: ${intern.empEmail()}</li>
                        <li class="info-list"> School: ${intern.grabSchool()}</li>
                        </ul>
            </div>
            </div>
            `;
        }

        const page =  [];

        page.push(
        group.filter((employee) => employee.empPosition() === "Manager")
         .map((manager) => createManager(manager))
        );
        page.push(
        group.filter((employee) => employee.empPosition() === "Engineer")
            .map((engineer) => createEngineer(engineer))
        );
        page.push(
        group.filter((employee) => employee.empPosition() === "Intern")
            .map((intern) => createIntern(intern)) 
        );
        return page;
}

module.exports = (load) => {
    return `
    
    <html lang="en">
        
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <meta http-equiv="X-UA-Compatible" content="ie=edge" />
            <title>The Team</title> -->
            <!-- CSS only
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
            <link rel="stylesheet" href="style.css">
            <script src=""></script>
        </head>
        
        <body>
            <div class="container-fluid">
                <div class="row">
                    <div class="col-12 jumbotron mb-9 the-team">
                        <h1 class="text-center">The Team</h1>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="row">
                    <div class="team-area col-12 d-flex justify-content-center">
                       
                    </div>
                </div>
            </div>
        </body>
        </html>
    `;
    
};


        
        
        
        
        
        
        









