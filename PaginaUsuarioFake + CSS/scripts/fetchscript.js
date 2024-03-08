let url = "https://jsonplaceholder.typicode.com/users"
fetch(url)
    .then(response => response.json())
    .then(data => showUser(data))
    .catch(error => console.log(error))

const showUser = (data) => {
    let tablebody = ""
    data.map(user => tablebody += `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.username}</td>
            <td>${user.email}</td>
            <td>${user.address.street}</td>
            <td>${user.phone}</td>
            <td>${user.website}</td>
            <td>${user.company.name}</td>
        <tr>`)

        document.getElementById('data').innerHTML = tablebody;
} 