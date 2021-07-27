## **Custom**
### Description
Pulls an image from a specified reddit and outputs its url and other information in the form of [this](#output).
### Usage
```js 
const ards = require("ards-client"), ardsClient = new ards.Client();
ardsClient.reddit.custom(subreddit).then(request => {
    console.log(request);
}).catch(error => {
    console.log(error);
});
```
**Replace subreddit with a reddit of your choice, without the `r/` at the beginning, example: `r/memes` needs to be `memes`**

### Output
This is the expected output.
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