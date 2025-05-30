interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "John",
  lastName: "Doe",
  age: 20,
  location: "Austin"
};

const student2: Student = {
  firstName: "Jane",
  lastName: "Doe",
  age: 22,
  location: "New-Orleans"
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");
table.style.borderCollapse = "collapse";
table.style.margin = "20px";
table.style.fontFamily = "Arial";

const headerRow = document.createElement("tr");
["First Name", "Location"].forEach((text) => {
  const th = document.createElement("th");
  th.textContent = text;
  th.style.border = "1px solid black";
  th.style.padding = "8px";
  headerRow.appendChild(th);
});
table.appendChild(headerRow);

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const firstNameCell = document.createElement("td");
  firstNameCell.textContent = student.firstName;
  firstNameCell.style.border = "1px solid black";
  firstNameCell.style.padding = "8px";

  const locationCell = document.createElement("td");
  locationCell.textContent = student.location;
  locationCell.style.border = "1px solid black";
  locationCell.style.padding = "8px";

  row.appendChild(firstNameCell);
  row.appendChild(locationCell);
  table.appendChild(row);
});

document.body.appendChild(table);
