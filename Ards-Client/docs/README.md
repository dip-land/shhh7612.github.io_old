<div align="center">
<a href="https://www.npmjs.com/package/ards-client"><img src="https://github.com/shhh7612/ards-client/raw/main/src/imgs/LogoWiki.svg" alt="Logo" /></a>


Pulls Images from Reddit, Danbooru, rule34, e621, Konachan, and Yande.re <br>
[![NPM Version][npm-img]][npm-url] [![NPM Downloads][npmdt-img]][npm-url] [![OpenIssues][openissues-img]][issues] <br>
#### [Documentation](https://shhh7612.github.io/ards-client/) | [Support](https://shhh7612.github.io/ards-client/#/support)

</div>

## **Installation**
> Note: **Node.js 12.0.0 or newer is required.** 
```
//for npm
npm i ards-client

//for yarn
yarn add ards-client
```

## **Basic Usage**
> Note: Replace tag with the tag you wanna use, list can be found [here](https://shhh7612.github.io/ards-client/#/tags). Replace the function you want to use with a valid function from a tag of your choice, some functions can take arguments.
```js
const ards = require("ards-client"), ardsClient = new ards.Client();
ardsClient.tag.function().then(request => {
    console.log(request);
}).catch(error => {
    console.log(error);
});
```

## **Example usage**
> Note: This example is for the [Rule34 Tag](https://shhh7612.github.io/ards-client/#/tags/hentai?id=rule34) using [Discord.js](https://www.npmjs.com/package/discord.js) and it's [embeds](https://discordjs.guide/popular-topics/embeds.html).
```js
const ards = require("ards-client"), ardsClient = new ards.Client();
args.push('solo_focus', 'rating:explicit')
ardsClient.hentai.rule34(args).then(request => {
    try{
        if(request.post.failed){
            let embed = new Discord.MessageEmbed()
            .setDescription(`${args.join(', ')} is not a valid tag or there was an error with that command.  For list of avalible tags [click here](https://rule34.xxx/index.php?page=tags&s=list).`)
            .setColor('#ff0000')
            return message.channel.send(embed)
        }
        let embed = new Discord.MessageEmbed()
        .setImage(request.post.file_url)
        .addField("Image Info",`Image not loading? [Click Here](${request.post.file_url}})\n[View on Rule34](https://rule34.xxx/index.php?page=post&s=view&id=${request.post.id})`)
        .setColor(color)
        .setFooter(`👍 ${request.post.score} | ${new Date(request.post.created_at).toLocaleString()}`)
        message.channel.send(embed)
    }catch(error){
        console.log(error)
    }
})
```

## **Additional Information**
[Documentation](https://shhh7612.github.io/ards-client/) <br>
[Support](https://shhh7612.github.io/ards-client/#/support)
### **License**
[MIT](https://github.com/shhh7612/ards-client/blob/main/LICENSE)

[npm-img]: https://img.shields.io/npm/v/ards-client?style=flat-square&color=ff3737
[npmdt-img]: https://img.shields.io/npm/dt/ards-client?style=flat-square&color=ff3737
[npm-url]: https://www.npmjs.com/package/ards-client
[openissues-img]: https://img.shields.io/github/issues-raw/shhh7612/ards-client?style=flat-square&color=ff3737
[issues]: https://github.com/shhh7612/ards-client/issues
