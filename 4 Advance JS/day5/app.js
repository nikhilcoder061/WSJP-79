const form = document.querySelector("#form");

form.addEventListener(
    'submit', (event) => {
        event.preventDefault();
        const userData = {
            name: event.target.name.value,
            email: event.target.email.value,
            contact: event.target.contact.value
        }

        const allUserData = JSON.parse(localStorage.getItem("allUserData")) ?? [];

        allUserData.push(userData);

        localStorage.setItem('allUserData', JSON.stringify(allUserData));
        event.target.reset();
        showData()
    }
)

// show data in table

const showData = () => {
    const allUserData = JSON.parse(localStorage.getItem("allUserData")) ?? [];
    let finalData = ""
    const tbody = document.querySelector('tbody');

    allUserData.forEach((value, index) => {

        finalData += ` <tr>
                            <td>${index + 1}</td>
                            <td>${value.name}</td>
                            <td>${value.email}</td>
                            <td>${value.contact}</td>
                            <td><button class="btn btn-danger btn-sm" onclick="deleteUser(${index})">Delete</button></td>
                        </tr>`
    });

    tbody.innerHTML = finalData

}

// delete user start

const deleteUser = (indexNum) => {
    const allUserData = JSON.parse(localStorage.getItem("allUserData")) ?? [];

    allUserData.splice(indexNum, 1);

    localStorage.setItem('allUserData', JSON.stringify(allUserData));

    showData();
}

// delete user end





showData()


