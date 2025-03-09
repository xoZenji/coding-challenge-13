// Task 2: Employee Cards Dynamic Addition
function createEmployeeCard(name, position) {
 
    const card = document.createElement('div');
    card.setAttribute('class', 'employee-card');

    const heading = document.createElement('h3');
    heading.textContent = name;

    const paragraph = document.createElement('h3');
    paragraph.textContent = position;

    const removeButton = document.createElement('button');
    removeButton.textContent = 'Remove';

    // Task 4: Employee Card Removal with Event Bubbling (Lines 17-20)
    removeButton.addEventListener('click', function(click) {
        click.stopPropagation();
        employeeContainer.removeChild(card);
    });

    card.appendChild(heading);
    card.appendChild(paragraph);
    card.appendChild(removeButton);

    document.getElementById('employeeContainer').appendChild(card);

    removeButton.addEventListener('click', () => {
        card.remove();
    });
};

// Employee List
createEmployeeCard('Peter Parker', 'Webslinger');
createEmployeeCard('Eddy Brock', 'Venom');
createEmployeeCard('Wade Wilson', 'Merc with a Mouth');

// Task 3: Bulk Update on Employee Cards
const employeeCardSelector = document.querySelectorAll(".employee-card"); // selects all the employee cards
const employeeArray = Array.from(employeeCardSelector); // converts the nodelist to an array
 
 // changes the background color of each card to red
 employeeArray.forEach((card) => { 
    card.style.backgroundColor = 'Orange';
    card.style.display = 'inline-block';
    card.style.margin = '10px';
    card.style.padding = '5px';
    card.style.borderRadius = '5px';
 }); // made the cards look better by added some space between them and changing the background color.

 // Task 4: Employee Card Removal with Event Bubbling (Lines 52-55)
 const employeeContainer = document.getElementById('employeeContainer');
 employeeContainer.addEventListener('click', function() {
    console.log("Employee Card Clicked");
 });
