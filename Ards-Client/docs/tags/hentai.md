## **Danbooru**
### Description
Gets a post from Danbooru and outputs its image url and other information in the form of [this](#output).
### Usage
```js 
//This command can only take 2 tags and 1 rating tag
let tags = ['rating:e', 'tag1', 'tag2'] 
//If you're using this for a discord bot, you can put in your arguments here instead, see examples/discordjs
//also for rating tag do args.push('rating:e | rating:s | rating:q')
const ards = require("ards-client"), ardsClient = new ards.Client();
ardsClient.hentai.danbooru(tags).then(request => {
    console.log(request);
}).catch(error => {
    console.log(error);
});
```
### Output
```js
from: "danbooru",
post: {
    id: number,
    created_at: string,
    uploader_id: number,
    score: number,
    source: string,
    last_comment_bumped_at: string | null,
    rating: string,
    image_width: number,
    image_height: number,
    tag_string: string,
    is_note_locked: boolean,
    fav_count: number,
    file_ext: string,
    last_noted_at: string | null,
    is_rating_locked: boolean,
    parent_id: number | null,
    has_children: boolean,
    approver_id: number,
    tag_count_general: number,
    tag_count_artist: number,
    tag_count_character: number,
    tag_count_copyright: number,
    file_size: number,
    is_status_locked: boolean,
    pool_string: string,
    up_score: score,
    down_score: score,
    is_pending: boolean,
    is_flagged: boolean,
    is_deleted: boolean,
    tag_count: number,
    updated_at: string,
    is_banned: boolean,
    pixiv_id: number,
    last_commented_at: number | null,
    has_active_children: boolean,
    bit_flags: number,
    tag_count_meta: number,
    has_large: boolean,
    has_visible_children: bollean,
    tag_string_general: string,
    tag_string_copyright: string,
    tag_string_artist: string,
    tag_string_meta: string,
    file_url: string,
    large_file_url: string,
    preview_file_url: string
}
```

## **Konachan**
### Description
Gets a post from Konachan and outputs its image url and other information in the form of [this](#output-2).
### Usage
```js 
//This command can take as many tags as you please.
let tags = ['tag1', 'tag2', 'tag3'] //If you're using this for a discord bot, you can put in your arguments here instead, see examples/discordjs
const ards = require("ards-client"), ardsClient = new ards.Client();
ardsClient.hentai.konachan(tags).then(request => {
    console.log(request);
}).catch(error => {
    console.log(error);
});
```
### Output
```js
from: "konachan",
post: {
    id: number,
    tags: string,
    created_at: number, 
    creator_id: number, 
    author: string, 
    change: number,
    source: string, 
    score: number, 
    md5: string,
    file_size: number,
    file_url: string, 
    is_shown_in_index: boolean,
    preview_url: string, 
    preview_width: number, 
    preview_height: number, 
    actual_preview_width: number,
    actual_preview_height: number, 
    sample_url: string, 
    sample_width: number, 
    sample_height: number, 
    sample_file_size: number,
    jpeg_url: string, 
    jpeg_width: number,
    jpeg_height: number,
    jpeg_file_size: number, 
    rating: string,
    has_children: boolean,
    parent_id: number,
    status: string,
    width: number,
    height: number,
    is_held: boolean,
    frames_pending_string: string,
    frames_pending: array,
    frames_string: array,
    frames: array
}
```

## **Neko**
### Description
Gets a post from either Danbooru, Konachan or Yande.re and outputs its image url and other information in the form of [this](#output-3).
### Usage
```js 
const ards = require("ards-client"), ardsClient = new ards.Client();
ardsClient.hentai.neko().then(request => {
    console.log(request);
}).catch(error => {
    console.log(error);
});
```
### Output
[Danbooru Output](#output), [Konachan Output](#output-2), or [Yandere Output](#output-5)

## **Rule34**
### Description
Gets a post from Rule34 and outputs its image url and other information in the form of [this](#output-4).
### Usage
```js 
//This command can take as many tags as you please.
let tags = ['tag1', 'tag2', 'tag3'] //If you're using this for a discord bot, you can put in your arguments here instead, see examples/discordjs
const ards = require("ards-client"), ardsClient = new ards.Client();
ardsClient.hentai.rule34(tags).then(request => {
    console.log(request);
}).catch(error => {
    console.log(error);
});
```
### Output
```js
from: "rule34",
post: {
    height: string, 
    score: string, 
    file_url: string, 
    parent_id: string, 
    sample_url: string, 
    sample_width: string, 
    sample_height: string, 
    preview_url: string,
    rating: string, 
    tags: string, 
    id: string, 
    width: string, 
    change: string, 
    md5: string, 
    creator_id: string, 
    has_children: string,
    created_at: string, 
    status: string,
    source: string, 
    has_notes: string,
    has_comments: string, 
    preview_width: string,
    preview_height: string
}
```

## **Yandere**
### Description
Gets a post from Yande.re and outputs its image url and other information in the form of [this](#output-5).
### Usage
```js 
//This command can take as many tags as you please.
let tags = ['tag1', 'tag2', 'tag3'] //If you're using this for a discord bot, you can put in your arguments here instead, see examples/discordjs
const ards = require("ards-client"), ardsClient = new ards.Client();
ardsClient.hentai.yandere(tags).then(request => {
    console.log(request);
}).catch(error => {
    console.log(error);
});
```
### Output
```js
from: "yandere",
post: {
    id: number,
    tags: string,
    created_at: number,
    updated_at: number,
    creator_id: number,
    approver_id: number | null,
    author: string,
    change: number,
    source: string,
    score: 9,
    md5: string,
    file_size: number,
    file_ext: string,
    file_url: string,
    is_shown_in_index: boolean,
    preview_url: string,
    preview_width: number,
    preview_height: number,
    actual_preview_width: number,
    actual_preview_height: number,
    sample_url: string,
    sample_width: number,
    sample_height: number,
    sample_file_size: number,
    jpeg_url: string,
    jpeg_width: number,
    jpeg_height: number,
    jpeg_file_size: number,
    rating: string,
    is_rating_locked: boolean,
    has_children: boolean,
    parent_id: number | null,
    status: string,
    is_pending: boolean,
    width: number,
    height: number,
    is_held: boolean,
    frames_pending_string: string,
    frames_pending: array,
    frames_string: string,
    frames: array,
    is_note_locked: boolean,
    last_noted_at: number,
    last_commented_at: number
}
```