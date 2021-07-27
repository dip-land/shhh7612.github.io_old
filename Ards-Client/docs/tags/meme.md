## **Random**
### Description
Gets a random meme from one of these subreddits r/deepfriedmemes, r/surrealmemes, r/bonehurtingjuice, r/dankmemes, r/memes, and outputs its image url and other information in the form of [this](#output).
### Usage
```js 
const ards = require("ards-client"), ardsClient = new ards.Client();
ardsClient.meme.random().then(request => {
    console.log(request);
}).catch(error => {
    console.log(error);
});
```
### Output
```js
image: string, 
permalink: string, 
post_link: string,
subreddit: string,
subreddit_name_prefixed: string,
author: string,
uploaded_UTC: number,
uploaded: number,
title: string,
score: number,
up_votes: number,
down_votes: number,
comments_num: number,
nsfw: boolean,
tries: number,
time: string 
```