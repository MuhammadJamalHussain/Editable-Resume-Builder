var _a;
(_a = document.getElementById('form')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    var nameElement = document.getElementById('name');
    var emailElement = document.getElementById('email');
    var phoneElement = document.getElementById('phone');
    var educationElement = document.getElementById('education');
    var experienceElement = document.getElementById('experience');
    if (nameElement && emailElement && phoneElement && educationElement && experienceElement) {
        var name_1 = nameElement.value;
        var email = emailElement.value;
        var phone = phoneElement.value;
        var education = educationElement.value;
        var experience = experienceElement.value;
        var output = "\n        <h2>Resume</h2>\n        <h3>Personal Information</h3>\n        <p><strong>Name:</strong> <span id=\"edit-name\" class=\"editable\"> ".concat(name_1, " </span> </p>\n        <p><strong>Email:</strong> <span id=\"edit-email\" class=\"editable\"> ").concat(email, " </span> </p>\n        <p><strong>Phone:</strong> <span id=\"edit-phone\" class=\"editable\"> ").concat(phone, " </span> </p>\n        \n        <h3>Education</h3>\n        <p id=\"edit-education\" class=\"editable\">").concat(education, "</p>\n\n        <h3>Experience</h3>\n        <p id=\"edit-Experience\" class=\"editable\">").concat(experience, "</p>\n        ");
        var outputElement = document.getElementById('output');
        if (outputElement) {
            outputElement.innerHTML = output;
            // makeEditable();
        }
    }
    else {
        console.error('More than one element is missing');
    }
});
// function makeEditable() {
//     const editableElements = document.querySelectorAll(".editable")
//     editableElements.forEach(element =>{
//         element.addEventListener('click', function(){
//             const currentElement = element as HTMLElement;
//             const currentValue = currentElement.textContent || "";
//             if (currentElement.tagName === 'p' || currentElement.tagName === 'span') {
//                 const input = document.createElement("input")
//                 input.type = "text"
//                 input.value = currentValue
//                 input.classList.add("editing-input")
//                 input.addEventListener("blur", function(){
//                     currentElement.textContent = input.value
//                     currentElement.style.display = "inline"
//                     input.remove()
//                 })
//                 currentElement.style.display = "none"
//                 currentElement.parentNode?.insertBefore(input, currentElement)
//                 input.focus
//             }
//         })
//     })
// }
