window.addEventListener('load', ()=>{
    let i=0;
    for (let script of document.getElementsByTagName('script')){
        if(`${script.getAttribute('src')}`.includes('discordwidget.js')){
            let parent = script.parentElement, id, height, width, footerText, color, backgroundColor, textColor, statusTextColor, identifier = `_${(Math.random() + 1).toString(26).substring(2).replace(/[0-9]/g, '')}`;
            if(parent.hasAttribute("data-done")){}else{
                if(script.hasAttribute('data-id')){id=script.getAttribute('data-id');if(id === ""){return alert('DiscordWidget\nNo ID was specified')}}else{return alert('DiscordWidget\nNo ID was specified')}
                if(script.hasAttribute('data-width')){width=script.getAttribute('data-width');if(width === ""){width="350px"}}else{width="350px"}
                if(script.hasAttribute('data-height')){height=script.getAttribute('data-height');if(height === ""){height="500px"}}else{height="500px"}
                if(script.hasAttribute('data-footerText')){footerText=script.getAttribute('data-footerText')}else{footerText=""}
                if(script.hasAttribute('data-color')){color=script.getAttribute('data-color');if(color === ""){color="#5865f2"}}else{color="#5865f2"}
                if(script.hasAttribute('data-backgroundColor')){backgroundColor=script.getAttribute('data-backgroundColor');if(backgroundColor === ""){backgroundColor="#0c0c0d"}}else{backgroundColor="#0c0c0d"}
                if(script.hasAttribute('data-textColor')){textColor=script.getAttribute('data-textColor');if(textColor === ""){textColor="#ffffff"}}else{textColor="#ffffff"}
                if(script.hasAttribute('data-statusTextColor')){statusTextColor=script.getAttribute('data-statusTextColor');if(statusTextColor === ""){statusTextColor="#858585"}}else{statusTextColor="#858585"}
                if(id && id !== ""){
                    style=`
                    .shhh7612DiscordWidget${identifier}{
                        -webkit-box-flex: 1;
                        -ms-flex: 1;
                        flex: 1;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-orient: vertical;
                        -webkit-box-direction: normal;
                        -ms-flex-direction: column;
                        flex-direction: column;
                        border-radius: 6px;
                        overflow: hidden;
                        font-family: Whitney,Helvetica Neue,Helvetica,Arial,sans-serif;
                        font-size: 14px;
                        color: #fff;
                    }
                    .shhh7612DiscordWidget${identifier} ::-webkit-scrollbar {width: 20px;}
                    .shhh7612DiscordWidget${identifier} ::-webkit-scrollbar-track {background: ${backgroundColor};}
                    .shhh7612DiscordWidget${identifier} ::-webkit-scrollbar-thumb {
                        background: #222222;
                        border: 8px solid ${backgroundColor};
                        border-radius: 10px;
                        transition: ease-in-out 0.5s;
                    }
                    .shhh7612DiscordWidget${identifier} ::-webkit-scrollbar-thumb:hover {
                        background: ${color};
                        transition: ease-in-out 0.5s;
                    }
                    .shhh7612DiscordWidget${identifier} .widget-header{
                        background-color: ${color};
                        padding: 20px;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;
                        -ms-flex-negative: 0;
                        flex-shrink: 0;
                    }
                    .shhh7612DiscordWidget${identifier} .widget-header .widget-logo{
                        background: url(https://shhh7612.github.io/img/discord/WordmarkWhite.svg) 50% no-repeat;
                        width: 124px;
                        height: 34px;
                        background-size: 124px 34px;
                        display: inline-block;
                        -webkit-transition: opacity .25s ease-out;
                        transition: opacity .25s ease-out;
                    }
                    .shhh7612DiscordWidget${identifier} .widget-header .widget-header-count{
                        -webkit-box-flex: 1;
                        -ms-flex: 1;
                        flex: 1;
                        text-align: right;
                    }
                    .shhh7612DiscordWidget${identifier} .widget-body{
                        background-color: ${backgroundColor};
                        -webkit-box-flex: 1;
                        -ms-flex: 1;
                        flex: 1;
                        -webkit-box-shadow: 0 1px 0 rgb(0 0 0 / 20%);
                        box-shadow: 0 1px 0 rgb(0 0 0 / 20%);
                        padding: 20px;
                        overflow-x: hidden;
                        overflow-y: scroll;
                    }
                    .shhh7612DiscordWidget${identifier} .widget-body .widget-member{
                        position: relative;
                        width: auto;
                        display: flex;
                        align-items: center;
                        flex: 0;
                        margin: 6px 0;
                    }
                    .shhh7612DiscordWidget${identifier} .widget-body .widget-member .widget-member-avatar{
                        margin-right: 4px;
                        position: relative;
                        contain: content;
                    }
                    .shhh7612DiscordWidget${identifier} .widget-body .widget-member .widget-member-avatar img{
                        border-radius: 50%;
                        height: 32px;
                        width: 32px;
                        border: 2px solid ${color};
                        background-color: ${color};
                    }
                    .shhh7612DiscordWidget${identifier} .widget-body .widget-member .widget-member-status {
                        border-radius: 50%;
                        bottom: 5px;
                        height: 10px;
                        position: absolute;
                        right: 0px;
                        width: 10px;
                        border: 2px solid ${color};
                    }
                    .shhh7612DiscordWidget${identifier} .widget-body .widget-member .widget-member-status-online {background-color: #57f287;}
                    .shhh7612DiscordWidget${identifier} .widget-body .widget-member .widget-member-status-idle {background-color: #fee75c;}
                    .shhh7612DiscordWidget${identifier} .widget-body .widget-member .widget-member-status-dnd {background-color: #ed4245;}
                    .shhh7612DiscordWidget${identifier} .widget-body .widget-member .widget-member-status-text {
                        height: 32px;
                        max-width: 80px;
                        overflow: hidden;
                        line-height: 32px;
                        padding: 0 8px 0 37px;
                        pointer-events: none;
                        position: absolute;
                        text-overflow: ellipsis;
                        top: 0;
                        left: 172px;
                        user-select: none;
                        white-space: nowrap;
                        color:${statusTextColor};
                    }
                    .shhh7612DiscordWidget${identifier} .widget-body .widget-member .widget-member-name {
                        font-weight: bold;
                        height: 32px;
                        max-width: 160px;
                        overflow: hidden;
                        line-height: 32px;
                        padding: 0 8px 0 37px;
                        pointer-events: none;
                        position: absolute;
                        text-overflow: ellipsis;
                        top: 0;
                        left: 12px;
                        user-select: none;
                        white-space: nowrap;
                    }
                    .shhh7612DiscordWidget${identifier} .widget-footer{
                        background-color: ${backgroundColor};
                        -webkit-box-shadow: 0 -1px 18px rgb(0 0 0 / 20%), 0 -1px 0 rgb(0 0 0 / 20%);
                        box-shadow: 0 -1px 18px rgb(0 0 0 / 20%), 0 -1px 0 rgb(0 0 0 / 20%);
                        -ms-flex-negative: 0;
                        flex-shrink: 0;
                        padding: 6px 6px 6px 20px;
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -webkit-box-align: right;
                        -ms-flex-align: right;
                        align-items: right;
                        min-height: 30px;
                    }
                    .shhh7612DiscordWidget${identifier} .widget-footer .widget-footer-info{
                        display: inline-block;
                        font-weight: 500;
                        opacity: .1;
                        -webkit-box-flex: 1;
                        -ms-flex: 1;
                        flex: 1;
                    }
                    .shhh7612DiscordWidget${identifier} .widget-footer .widget-btn-join{
                        display: -webkit-box;
                        display: -ms-flexbox;
                        display: flex;
                        -ms-flex-negative: 0;
                        flex-shrink: 0;
                        -webkit-box-pack: center;
                        -ms-flex-pack: center;
                        justify-content: center;
                        -webkit-box-align: center;
                        -ms-flex-align: center;
                        align-items: center;
                        width: 120px;
                        height: 30px;
                        border-radius: 4px;
                        background-clip: padding-box;
                        background-color: ${color};
                        color: ${textColor} !important;
                        text-decoration: none;
                        font-weight: 700;
                        -webkit-transition: opacity .25s ease-out;
                        transition: opacity .25s ease-out;
                    }
                    .shhh7612DiscordWidget${identifier} .widget-footer .widget-btn-join:hover{
                        background-color: #${(parseInt(`0x${color.replace('#', '')}FF`) - parseInt(`0x00000022`)).toString(16)}!important;
                    }
                    `
                    parent.innerHTML = `${script.outerHTML}<link rel="stylesheet" href="https://shhh7612.github.io/plugins/widget/style.css"><div class="shhh7612DiscordWidget${identifier}""><div class="widget-header"><a class="widget-logo" href="https://discord.com/" target="_blank"></a><span class="widget-header-count"><strong></strong> Members Online</span></div><div class="widget-body"><div></div></div><div class="widget-footer"><span class="widget-footer-info">${footerText}</span><a class="widget-btn-join" href="" target="_blank">Join</a></div></div>`;
                    let widget = document.getElementsByClassName(`shhh7612DiscordWidget${identifier}`)[i], widgetHead = widget.children[0], widgetBody = widget.children[1], wdigetFooter = widget.children[2], members = [], link = `https://discord.com/api/guilds/${id}/widget.json`;
                    widget.style.width = width; widget.style.height = height;
                    fetch(link).then(data=>{
                        data.json().then(data=>{
                            widgetHead.children[1].children[0].innerText = data.presence_count - 1;
                            wdigetFooter.children[1].setAttribute('href', data.instant_invite);
                            data.members.forEach(member=>{
                                if(member.game !== undefined){
                                    members.push(`<div class="widget-member"><div class="widget-member-avatar"><img alt="" src="${member.avatar_url}"><span class="widget-member-status widget-member-status-${member.status}"></span></div><span class="widget-member-name">${member.username}</span><span class="widget-member-status-text">${member.game.name}</span></div>`)
                                }else{
                                    members.push(`<div class="widget-member"><div class="widget-member-avatar"><img alt="" src="${member.avatar_url}"><span class="widget-member-status widget-member-status-${member.status}"></span></div><span class="widget-member-name">${member.username}</span></div>`)
                                }
                            })
                            widgetBody.innerHTML = members.join('');
                        })
                    })
                }else{alert('DiscordWidget\nNo ID was specified')}
                i = i + 1;
                parent.setAttribute('data-done', 'true')
            }
        }
    }
})