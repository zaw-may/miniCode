window.addEventListener("load", () => {
    console.log("Starting...")
    let tblToDO = document.querySelector("#tblToDo tbody");
    let idToDO = 1;

    document.querySelector("#add").addEventListener("click", () => {
        console.log("Storing...")
        let tasks = document.querySelector("#inputList").value.trim();

        if (tasks !== "") {
            let newRow = document.createElement("tr");
            
            let taskID = document.createElement("td");            
            taskID.textContent = idToDO++;
            newRow.appendChild(taskID);

            let newTask = document.createElement("td");
            newTask.textContent = tasks;
            newRow.appendChild(newTask);

            let createdDate = new Date();
            let yyyy = createdDate.getFullYear();
            let mm = createdDate.getMonth() + 1;
            let dd = createdDate.getDate();
            let dateFormat = yyyy + "-" + (mm < 10 ? "0" + mm : mm) + "-" + (dd < 10 ? "0" + dd : dd);
            let taskDate = document.createElement("td");
            taskDate.textContent = dateFormat;
            newRow.appendChild(taskDate);

            let taskPriority = document.createElement("td");
            taskPriority.textContent = "Undefined";
            newRow.appendChild(taskPriority);
           
            let taskStatus = document.createElement("td");
            taskStatus.setAttribute("colspan", "2");            
            taskIcon1 = document.createElement("i");
            taskIcon1.setAttribute("class", "far fa-square me-3");
            taskStatus.appendChild(taskIcon1);            
            taskIcon2 = document.createElement("i");
            taskIcon2.setAttribute("class", "fas fa-trash me-float-end text-danger");
            taskStatus.appendChild(taskIcon2);
            newRow.appendChild(taskStatus);           

            /*
            for (let i = 0; i < 2; i++) {
                let others = document.createElement("td");
                newRow.appendChild(others);
            }     
            */       

            tblToDO.appendChild(newRow);
            document.querySelector("#inputList").value = "";            
        }
    });
});
