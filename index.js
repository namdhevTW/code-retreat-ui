import { ping } from "./client";
import axios from "axios";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
axios.defaults.headers.common["Access-Control-Request-Method"] = [
  "POST",
  "GET",
  "OPTIONS",
];

// create dummy response data containing a list of employees with ID, name, role, grade, lastWorkingDate and salary
const response = {
  data: {
    employees: [
      {
        id: 1,
        name: "John",
        role: "Software Engineer",
        grade: "A",
        lastWorkingDate: "2020-01-01",
        salary: 10000,
      },
      {
        id: 2,
        name: "Mary",
        role: "Software Engineer",
        grade: "B",
        lastWorkingDate: "2020-01-01",
        salary: 8000,
      },
      {
        id: 3,
        name: "Peter",
        role: "Software Engineer",
        grade: "C",
        lastWorkingDate: "2020-01-01",
        salary: 6000,
      },
    ],
  },
};

// Add onclick event for element with id "List employee resignations" which would display list of employees with ID, name, role, grade, lastWorkingDate and salary
document.body.onload = async function () {
  // Change title to "Resignation list"
  document.body.title = "Resignation list";

  // Get list of employees from GET localhost:8081/employees
  // const response = await axios.get('http://localhost:8081/employees');

  // Deconstruct response body into employees variable that is an array of employees containing ID, name, role, grade, lastWorkingDate and salary
  const { employees } = response.data;

  // Create a new element to host a table that would display list of employees from employees variable, along with their ID, name, role, grade, lastWorkingDate and salary
  const table = document.createElement("table");
  // Add header row to the table with ID, name, role, grade, lastWorkingDate and salary
  const headerRow = document.createElement("tr");
  const idHeader = document.createElement("th");
  const nameHeader = document.createElement("th");
  const roleHeader = document.createElement("th");
  const gradeHeader = document.createElement("th");
  const lastWorkingDateHeader = document.createElement("th");
  const salaryHeader = document.createElement("th");
  idHeader.innerText = "ID";
  nameHeader.innerText = "Name";
  roleHeader.innerText = "Role";
  gradeHeader.innerText = "Grade";
  lastWorkingDateHeader.innerText = "Last Working Date";
  salaryHeader.innerText = "Salary";
  headerRow.appendChild(idHeader);
  headerRow.appendChild(nameHeader);
  headerRow.appendChild(roleHeader);
  headerRow.appendChild(gradeHeader);
  headerRow.appendChild(lastWorkingDateHeader);
  headerRow.appendChild(salaryHeader);
  table.appendChild(headerRow);

  // create rows for the table for each employee from employees list and display their ID, name, role, grade, lastWorkingDate and salary
  // while creating each row, add edit button next to lastWorkingDate column on the right side that would allow user to edit the lastWorkingDate
  // while editing the lastWorkingDate, replace the lastWorkingDate cell with an input field that would allow user to edit the lastWorkingDate
  // while editing the lastWorkingDate, add save button next to the input field that would allow user to save the new lastWorkingDate
  // while editing the lastWorkingDate, add cancel button next to the input field that would allow user to cancel the edit and revert back to the original lastWorkingDate
  employees.forEach((employee) => {
    const row = document.createElement("tr");
    const idCell = document.createElement("td");
    const nameCell = document.createElement("td");
    const roleCell = document.createElement("td");
    const gradeCell = document.createElement("td");
    const lastWorkingDateCell = document.createElement("td");
    const salaryCell = document.createElement("td");
    const editButton = document.createElement("button");
    const saveButton = document.createElement("button");
    const cancelButton = document.createElement("button");
    idCell.innerText = employee.id;
    nameCell.innerText = employee.name;
    roleCell.innerText = employee.role;
    gradeCell.innerText = employee.grade;
    lastWorkingDateCell.innerText = employee.lastWorkingDate;
    salaryCell.innerText = employee.salary;
    // add flex class to lastWorkingDateCell to allow edit, save and cancel buttons to be displayed on the same line
    lastWorkingDateCell.classList.add("d-flex");
    // add justify-content-end class to lastWorkingDateCell to allow edit, save and cancel buttons to be displayed on the right side
    lastWorkingDateCell.classList.add("justify-content-between");
    // add margin class to lastWorkingDateCell to allow edit, save and cancel buttons to be displayed with some margin
    lastWorkingDateCell.classList.add("mr-1");
    lastWorkingDateCell.classList.add("mb-1");
    // add edit button to lastWorkingDateCell
    lastWorkingDateCell.appendChild(editButton);
    editButton.onclick = function () {
      // replace lastWorkingDateCell with an input field that would allow user to edit the lastWorkingDate
      const input = document.createElement("input");
      input.type = "date";
      input.value = employee.lastWorkingDate;
      input.classList.add("form-control");
      lastWorkingDateCell.innerHTML = "";
      lastWorkingDateCell.appendChild(input);
      // replace edit button with save and cancel buttons
      lastWorkingDateCell.appendChild(saveButton);
      lastWorkingDateCell.appendChild(cancelButton);
      // hide edit button
      editButton.style.display = "none";
    };
    saveButton.onclick = function () {
      // replace input field with the new lastWorkingDate
      employee.lastWorkingDate = lastWorkingDateCell.firstChild.value;
      lastWorkingDateCell.innerHTML = employee.lastWorkingDate;
      // replace save and cancel buttons with edit button
      lastWorkingDateCell.appendChild(editButton);
      // hide save and cancel buttons
      saveButton.style.display = "none";
      cancelButton.style.display = "none";
      editButton.style.display = "block";
    };
    cancelButton.onclick = function () {
      // replace input field with the original lastWorkingDate
      lastWorkingDateCell.innerHTML = employee.lastWorkingDate;
      // replace save and cancel buttons with edit button
      lastWorkingDateCell.appendChild(editButton);
      // hide save and cancel buttons
      saveButton.style.display = "none";
      cancelButton.style.display = "none";
      editButton.style.display = "block";
    };
    // Add fontawesome icons to buttons
    editButton.classList.add("btn");
    editButton.classList.add("btn-primary");
    editButton.classList.add("btn-sm");
    editButton.classList.add("mr-1");
    editButton.classList.add("mb-1");
    editButton.classList.add("fas");
    editButton.classList.add("fa-edit");

    saveButton.classList.add("btn");
    saveButton.classList.add("btn-success");
    saveButton.classList.add("btn-sm");
    saveButton.classList.add("mr-1");
    saveButton.classList.add("mb-1");
    saveButton.classList.add("fas");
    saveButton.classList.add("fa-save");

    cancelButton.classList.add("btn");
    cancelButton.classList.add("btn-danger");
    cancelButton.classList.add("btn-sm");
    cancelButton.classList.add("mr-1");
    cancelButton.classList.add("mb-1");
    cancelButton.classList.add("fas");
    cancelButton.classList.add("fa-times");

    row.appendChild(idCell);
    row.appendChild(nameCell);
    row.appendChild(roleCell);
    row.appendChild(gradeCell);
    row.appendChild(lastWorkingDateCell);
    row.appendChild(salaryCell);
    table.appendChild(row);
  });

  // apply bootstrap style to table
  table.classList.add("table");
  table.classList.add("table-striped");
  table.classList.add("table-bordered");
  table.classList.add("table-hover");
  table.classList.add("table-sm");
  table.id = "resignationList";

  // Create container div to host the table
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("container");
  containerDiv.classList.add("mt-3");
  containerDiv.appendChild(table);
  document.body.appendChild(containerDiv);

  // Add "Add resignation" button atop the table that would allow user to add a new resignation
  const addResignationButton = document.createElement("button");
  addResignationButton.innerText = "Add resignation";
  addResignationButton.classList.add("btn");
  addResignationButton.classList.add("btn-primary");
  addResignationButton.classList.add("mb-3");

  //Create div to host the button and align it to the right
  const buttonDiv = document.createElement("div");
  buttonDiv.classList.add("d-flex");
  buttonDiv.classList.add("container");
  buttonDiv.classList.add("pt-3");
  buttonDiv.classList.add("justify-content-end");
  buttonDiv.appendChild(addResignationButton);
  document.body.insertBefore(buttonDiv, containerDiv);

  // Display modal when "Add resignation" button is clicked
  addResignationButton.onclick = () => {
    // Create modal
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.classList.add("fade");
    modal.id = "addResignationModal";
    modal.tabIndex = "-1";
    modal.setAttribute("role", "dialog");
    modal.setAttribute("aria-labelledby", "addResignationModalLabel");
    modal.setAttribute("aria-hidden", "true");

    // Create modal dialog
    const modalDialog = document.createElement("div");
    modalDialog.classList.add("modal-dialog");
    modalDialog.classList.add("modal-dialog-centered");
    modalDialog.setAttribute("role", "document");

    // Create modal content
    const modalContent = document.createElement("div");
    modalContent.classList.add("modal-content");

    // Create modal header
    const modalHeader = document.createElement("div");
    modalHeader.classList.add("modal-header");

    // Create modal title
    const modalTitle = document.createElement("h5");
    modalTitle.classList.add("modal-title");
    modalTitle.id = "addResignationModalLabel";
    modalTitle.innerText = "Add resignation";

    // Create modal body
    const modalBody = document.createElement("div");
    modalBody.classList.add("modal-body");

    // Create form
    const form = document.createElement("form");

    // Create form group for name
    const nameFormGroup = document.createElement("div");
    nameFormGroup.classList.add("form-group");

    // Create label for name
    const nameLabel = document.createElement("label");
    nameLabel.setAttribute("for", "name");
    nameLabel.innerText = "Name";

    // Create input field for name
    const nameInput = document.createElement("input");
    nameInput.type = "text";
    nameInput.classList.add("form-control");
    nameInput.id = "name";
    nameInput.placeholder = "Enter name";

    // Create form group for role
    const roleFormGroup = document.createElement("div");
    roleFormGroup.classList.add("form-group");

    // Create label for role
    const roleLabel = document.createElement("label");
    roleLabel.setAttribute("for", "role");
    roleLabel.innerText = "Role";

    // Create input field for role
    const roleInput = document.createElement("input");
    roleInput.type = "text";
    roleInput.classList.add("form-control");
    roleInput.id = "role";
    roleInput.placeholder = "Enter role";

    // Create form group for grade
    const gradeFormGroup = document.createElement("div");
    gradeFormGroup.classList.add("form-group");

    // Create label for grade
    const gradeLabel = document.createElement("label");
    gradeLabel.setAttribute("for", "grade");
    gradeLabel.innerText = "Grade";

    // Create input field for grade
    const gradeInput = document.createElement("input");
    gradeInput.type = "text";
    gradeInput.classList.add("form-control");
    gradeInput.id = "grade";
    gradeInput.placeholder = "Enter grade";

    // Create form group for lastWorkingDate
    const lastWorkingDateFormGroup = document.createElement("div");
    lastWorkingDateFormGroup.classList.add("form-group");

    // Create label for lastWorkingDate
    const lastWorkingDateLabel = document.createElement("label");
    lastWorkingDateLabel.setAttribute("for", "lastWorkingDate");
    lastWorkingDateLabel.innerText = "Last Working Date";

    // Create input field for lastWorkingDate
    const lastWorkingDateInput = document.createElement("input");
    lastWorkingDateInput.type = "date";
    lastWorkingDateInput.classList.add("form-control");
    lastWorkingDateInput.id = "lastWorkingDate";
    lastWorkingDateInput.placeholder = "Enter last working date";

    // Create form group for salary
    const salaryFormGroup = document.createElement("div");
    salaryFormGroup.classList.add("form-group");

    // Create label for salary
    const salaryLabel = document.createElement("label");
    salaryLabel.setAttribute("for", "salary");
    salaryLabel.innerText = "Salary";

    // Create input field for salary
    const salaryInput = document.createElement("input");
    salaryInput.type = "number";
    salaryInput.classList.add("form-control");
    salaryInput.id = "salary";
    salaryInput.placeholder = "Enter salary";

    // Create modal footer
    const modalFooter = document.createElement("div");
    modalFooter.classList.add("modal-footer");

    // Create save button
    const saveButton = document.createElement("button");
    saveButton.type = "button";
    saveButton.classList.add("btn");
    saveButton.classList.add("btn-primary");
    saveButton.innerText = "Save";

    // Create cancel button
    const cancelButton = document.createElement("button");
    cancelButton.type = "button";
    cancelButton.classList.add("btn");
    cancelButton.classList.add("btn-secondary");
    cancelButton.setAttribute("data-dismiss", "modal");
    cancelButton.innerText = "Cancel";

    // Append modal title to modal header
    modalHeader.appendChild(modalTitle);

    // Append name label and input field to name form group
    nameFormGroup.appendChild(nameLabel);
    nameFormGroup.appendChild(nameInput);

    // Append role label and input field to role form group
    roleFormGroup.appendChild(roleLabel);
    roleFormGroup.appendChild(roleInput);

    // Append grade label and input field to grade form group
    gradeFormGroup.appendChild(gradeLabel);
    gradeFormGroup.appendChild(gradeInput);

    // Append lastWorkingDate label and input field to lastWorkingDate form group
    lastWorkingDateFormGroup.appendChild(lastWorkingDateLabel);
    lastWorkingDateFormGroup.appendChild(lastWorkingDateInput);

    // Append salary label and input field to salary form group
    salaryFormGroup.appendChild(salaryLabel);
    salaryFormGroup.appendChild(salaryInput);

    // Append name form group, role form group, grade form group, lastWorkingDate form group and salary form group to form
    form.appendChild(nameFormGroup);
    form.appendChild(roleFormGroup);

    // Append grade form group, lastWorkingDate form group and salary form group to form
    form.appendChild(gradeFormGroup);
    form.appendChild(lastWorkingDateFormGroup);

    // Append salary form group to form
    form.appendChild(salaryFormGroup);

    // Append form to modal body
    modalBody.appendChild(form);

    // Append save button and cancel button to modal footer
    modalFooter.appendChild(saveButton);
    modalFooter.appendChild(cancelButton);

    // Append modal header, modal body and modal footer to modal content
    modalContent.appendChild(modalHeader);
    modalContent.appendChild(modalBody);
    modalContent.appendChild(modalFooter);

    // Append modal content to modal dialog
    modalDialog.appendChild(modalContent);

    // Append modal dialog to modal
    modal.appendChild(modalDialog);

    // Append modal to body
    document.body.appendChild(modal);

    // Display modal
    $("#addResignationModal").modal("show");

    // Add onclick event for save button
    saveButton.onclick = function () {
      // Get name, role, grade, lastWorkingDate and salary from input fields
      const name = nameInput.value;
      const role = roleInput.value;
      const grade = gradeInput.value;
      const lastWorkingDate = lastWorkingDateInput.value;
      const salary = salaryInput.value;

      // Create new employee object
      const newEmployee = {
        name,
        role,
        grade,
        lastWorkingDate,
        salary,
      };

      // Add new employee to employees list
      employees.push(newEmployee);

      // Add new employee to table
      const row = document.createElement("tr");
      const idCell = document.createElement("td");
      const nameCell = document.createElement("td");
      const roleCell = document.createElement("td");
      const gradeCell = document.createElement("td");
      const lastWorkingDateCell = document.createElement("td");
      const salaryCell = document.createElement("td");
      const editButton = document.createElement("button");
      const saveButton = document.createElement("button");
      const cancelButton = document.createElement("button");
      idCell.innerText = newEmployee.id;
      nameCell.innerText = newEmployee.name;
      roleCell.innerText = newEmployee.role;
      gradeCell.innerText = newEmployee.grade;
      lastWorkingDateCell.innerText = newEmployee.lastWorkingDate;
      salaryCell.innerText = newEmployee.salary;

      // add flex class to lastWorkingDateCell to allow edit, save and cancel buttons to be displayed on the same line
      lastWorkingDateCell.classList.add("d-flex");
      // add justify-content-end class to lastWorkingDateCell to allow edit, save and cancel buttons to be displayed on the right side
      lastWorkingDateCell.classList.add("justify-content-between");
      // add margin class to lastWorkingDateCell to allow edit, save and cancel buttons to be displayed with some margin
      lastWorkingDateCell.classList.add("mr-1");
      lastWorkingDateCell.classList.add("mb-1");
      // add edit button to lastWorkingDateCell
      lastWorkingDateCell.appendChild(editButton);
      editButton.onclick = function () {
        // replace lastWorkingDateCell with an input field that would allow user to edit the lastWorkingDate
        const input = document.createElement("input");
        input.type = "date";
        input.value = newEmployee.lastWorkingDate;
        input.classList.add("form-control");
        lastWorkingDateCell.innerHTML = "";
        lastWorkingDateCell.appendChild(input);
        // replace edit button with save and cancel buttons
        lastWorkingDateCell.appendChild(saveButton);
        lastWorkingDateCell.appendChild(cancelButton);
        // hide edit button
        editButton.style.display = "none";
      };
      saveButton.onclick = function () {
        // replace input field with the new lastWorkingDate
        newEmployee.lastWorkingDate = lastWorkingDateCell.firstChild.value;
        lastWorkingDateCell.innerHTML = newEmployee.lastWorkingDate;
        // replace save and cancel buttons with edit button
        lastWorkingDateCell.appendChild(editButton);
        // hide save and cancel buttons
        saveButton.style.display = "none";
        cancelButton.style.display = "none";
        editButton.style.display = "block";
      };
      cancelButton.onclick = function () {
        // replace input field with the original lastWorkingDate
        lastWorkingDateCell.innerHTML = newEmployee.lastWorkingDate;
        // replace save and cancel buttons with edit button
        lastWorkingDateCell.appendChild(editButton);
        // hide save and cancel buttons
        saveButton.style.display = "none";
        cancelButton.style.display = "none";
        editButton.style.display = "block";
      };
      // Add fontawesome icons to buttons
      editButton.classList.add("btn");
      editButton.classList.add("btn-primary");
      editButton.classList.add("btn-sm");
      editButton.classList.add("mr-1");
      editButton.classList.add("mb-1");
      editButton.classList.add("fas");
      editButton.classList.add("fa-edit");

      saveButton.classList.add("btn");
      saveButton.classList.add("btn-success");
      saveButton.classList.add("btn-sm");
      saveButton.classList.add("mr-1");
      saveButton.classList.add("mb-1");
      saveButton.classList.add("fas");
      saveButton.classList.add("fa-save");

      cancelButton.classList.add("btn");
      cancelButton.classList.add("btn-danger");
      cancelButton.classList.add("btn-sm");
      cancelButton.classList.add("mr-1");
      cancelButton.classList.add("mb-1");
      cancelButton.classList.add("fas");
      cancelButton.classList.add("fa-times");

      row.appendChild(idCell);
      row.appendChild(nameCell);
      row.appendChild(roleCell);
      row.appendChild(gradeCell);
      row.appendChild(lastWorkingDateCell);
      row.appendChild(salaryCell);
      table.appendChild(row);

      // Hide modal
      $("#addResignationModal").modal("show");
    };
  };

  // Append the table to the div with id "listOfEmployees"
  // document.getElementById("listOfEmployees").appendChild(table);
};
