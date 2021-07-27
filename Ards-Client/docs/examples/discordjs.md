## **Reddit Embed Example**
### With Command Handler
Example Input Command: `[prefix]reddit [subreddit] nsfw`
```js
async execute(message, args){
    const ards = require("ards-client"), ardsClient = new ards.Client();
    try{
        start()
        function start(){
            ardsClient.reddit.custom(args[0]).then(request => {
                if(!args.includes('nsfw')){
                    if(request.nsfw === true){return start()}
                }else if(args.includes('nsfw')){
                    if(!message.channel.nsfw){
                        return ('The NSFW varient only works in nsfw channels.')
                    }
                }
                try{
                    let embed = new Discord.MessageEmbed()
                    .setImage(request.image)
                    .setDescription(`[${request.title}](${request.post_link})`)
                    .setFooter(`👍 ${request.score} | 💬 ${request.comments_num} | Author:${request.author} | ${new Date(request.uploaded_UTC).toLocaleString()}`)
                    message.channel.send(embed)
                }catch(err){
                    start();
                }
            })
        }
    }catch(err) {
    }
}
```
`args[0]` for getting a subreddit might not be the correct args number for you, adjust the value till it works for you. <br>
**For more embed customization click [here](https://discordjs.guide/popular-topics/embeds.html#editing-the-embedded-message-content).**

### Without Command Handler
Example Input Command: `[prefix]reddit [subreddit] nsfw`
```js
const args = message.content.slice(prefix.length).trim().split(/ +/), ards = require("ards-client"), ardsClient = new ards.Client();
try{
    start()
    function start(){
        ardsClient.reddit.custom(args[0]).then(request => {
            if(!args.includes('nsfw')){
                if(request.nsfw === true){return start()}
            }else if(args.includes('nsfw')){
                if(!message.channel.nsfw){
                    return ('The NSFW varient only works in nsfw channels.')
                }
            }
            try{
                let embed = new Discord.MessageEmbed()
                .setImage(request.image)
                .setDescription(`[${request.title}](${request.post_link})`)
                .setFooter(`👍 ${request.score} | 💬 ${request.comments_num} | Author:${request.author} | ${new Date(request.uploaded_UTC).toLocaleString()}`)
                message.channel.send(embed)
            }catch(err){
                start();
            }
        })
    }
}catch(err) {
}
```
**For more embed customization click [here](https://discordjs.guide/popular-topics/embeds.html#editing-the-embedded-message-content).**