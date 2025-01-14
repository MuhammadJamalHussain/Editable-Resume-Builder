document.getElementById('form')?.addEventListener('submit', function(event){
    event.preventDefault();


    const nameElement = document.getElementById('name') as HTMLInputElement;
    const emailElement = document.getElementById('email') as HTMLInputElement;
    const phoneElement = document.getElementById('phone') as HTMLInputElement;
    const educationElement = document.getElementById('education') as HTMLInputElement;
    const experienceElement = document.getElementById('experience') as HTMLInputElement;


    if(nameElement && emailElement && phoneElement && educationElement && experienceElement){

        const name = nameElement.value;
        const email = emailElement.value;
        const phone = phoneElement.value;
        const education = educationElement.value;
        const experience = experienceElement.value;


        const output = `
        <h2>Resume</h2>
        <h3>Personal Information</h3>
        <p><strong>Name:</strong> <span id="edit-name" class="editable"> ${name} </span> </p>
        <p><strong>Email:</strong> <span id="edit-email" class="editable"> ${email} </span> </p>
        <p><strong>Phone:</strong> <span id="edit-phone" class="editable"> ${phone} </span> </p>
        
        <h3>Education</h3>
        <p id="edit-education" class="editable">${education}</p>

        <h3>Experience</h3>
        <p id="edit-Experience" class="editable">${experience}</p>
        `;

        const outputElement = document.getElementById('output')
        if(outputElement){
            outputElement.innerHTML = output
        }
    }
    else{
        console.error('More than one element is missing')
    }



})