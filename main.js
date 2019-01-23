const API_URL = "https://api.github.com/search/repositories?q=created:%3E2017-01-01&stars:%3E1&s=stars;"
const LIMIT = 10
fetch(API_URL).then( (response) => {
    return response.json();
    
})
.then((jsonReturned) => {
    document.getElementById("GithubTable").innerHTML = jsonReturned.items.splice(0,LIMIT)
    .map(item => template(item));
}).catch(err => {
    console.error(err);
});

function template({owner, name, description, html_url, language, stargazers_count}){
    return `
    <tr>
        <th>Repo Avatar:</th>

            <td><img id="rotate" src="${owner.avatar_url}" border="3" height="100" width="100"></td>
        </tr>
    <tr>
        <th>Repo Name:</th>

            <td>${name}</td>
        </tr>
    <tr>
        <th>Repo Description:</th>

            <td>${description}</td>
        </tr>
    <tr>
        <th>Html URL:</th>

            <td><a href="${html_url}" target="_blank">${html_url}</a></td>
        </tr>
    <tr>
        <th>Language:</th>

            <td>${language}</td>
        </tr>
    <tr>
        <th>Stars:</th>

            <td>${stargazers_count}</td>
        </tr>
`;
}