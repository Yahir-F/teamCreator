
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


        
        
        
        
        
        
        









