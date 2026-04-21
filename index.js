const express = require('express');

const app = express();
const port = 3000;

const githubApi = {
    "login": "SanaUllahCoder",
    "id": 156604999,
    "node_id": "U_kgDOCVWaRw",
    "avatar_url": "https://avatars.githubusercontent.com/u/156604999?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/SanaUllahCoder",
    "html_url": "https://github.com/SanaUllahCoder",
    "followers_url": "https://api.github.com/users/SanaUllahCoder/followers",
    "following_url": "https://api.github.com/users/SanaUllahCoder/following{/other_user}",
    "gists_url": "https://api.github.com/users/SanaUllahCoder/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/SanaUllahCoder/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/SanaUllahCoder/subscriptions",
    "organizations_url": "https://api.github.com/users/SanaUllahCoder/orgs",
    "repos_url": "https://api.github.com/users/SanaUllahCoder/repos",
    "events_url": "https://api.github.com/users/SanaUllahCoder/events{/privacy}",
    "received_events_url": "https://api.github.com/users/SanaUllahCoder/received_events",
    "type": "User",
    "user_view_type": "public",
    "site_admin": false,
    "name": "Sana Ullah Siddiqui",
    "company": null,
    "blog": "https://www.shamsifytools.com",
    "location": null,
    "email": null,
    "hireable": null,
    "bio": "I am Frontend Web developer | and Founder of Shamsify Tools",
    "twitter_username": null,
    "public_repos": 48,
    "public_gists": 0,
    "followers": 1,
    "following": 0,
    "created_at": "2024-01-14T17:51:47Z",
    "updated_at": "2026-04-17T12:16:16Z"
}

app.get('/hello', (req, res) => {
    res.send('<h1>Hello World</h1>')
})

app.get('mygithub', (req, res) => {
    res.json(githubApi)

})


app.listen(port, () => {
    console.log(`server already start on this port ${port}`)

})