window.addEventListener('load', () => {
    let i = 0;
    for (let script of document.getElementsByTagName('script')) {
        if (`${script.getAttribute('src')}`.includes('discordwidget.js')) {
            let parent = script.parentElement, id, height, width, footerText, color, backgroundColor, textColor, statusTextColor, identifier = `_${(Math.random() + 1).toString(26).substring(2).replace(/[0-9]/g, '')}`;
            if (parent.hasAttribute("data-done")) { } else {
                if (script.hasAttribute('data-id')) { id = script.getAttribute('data-id'); if (id === "") { return alert('DiscordWidget\nNo ID was specified') } } else { return alert('DiscordWidget\nNo ID was specified') }
                if (script.hasAttribute('data-width')) { width = script.getAttribute('data-width'); if (width === "") { width = "350px" } } else { width = "350px" }
                if (script.hasAttribute('data-height')) { height = script.getAttribute('data-height'); if (height === "") { height = "500px" } } else { height = "500px" }
                if (script.hasAttribute('data-footerText')) { footerText = script.getAttribute('data-footerText') } else { footerText = "" }
                if (script.hasAttribute('data-color')) { color = script.getAttribute('data-color'); if (color === "") { color = "#5865f2" } } else { color = "#5865f2" }
                if (script.hasAttribute('data-backgroundColor')) { backgroundColor = script.getAttribute('data-backgroundColor'); if (backgroundColor === "") { backgroundColor = "#0c0c0d" } } else { backgroundColor = "#0c0c0d" }
                if (script.hasAttribute('data-textColor')) { textColor = script.getAttribute('data-textColor'); if (textColor === "") { textColor = "#ffffff" } } else { textColor = "#ffffff" }
                if (script.hasAttribute('data-statusTextColor')) { statusTextColor = script.getAttribute('data-statusTextColor'); if (statusTextColor === "") { statusTextColor = "#858585" } } else { statusTextColor = "#858585" }
                if (id && id !== "") {
                    parent.innerHTML = `
                    ${script.outerHTML}
                    <link rel="stylesheet" href="https://shhh7612.github.io/plugins/widget/style.css">
                    <div class="shhh7612DiscordWidget${identifier}"">
                        <div class="widget-header">
                            <a class="widget-logo" href="https://discord.com/" target="_blank"></a>
                            <span class="widget-header-count"><strong></strong> Members Online</span>
                        </div>
                        <div class="widget-body">
                        <div>
                        <div class="widget-footer">
                            <span class="widget-footer-info">${footerText}</span>
                            <a class="widget-btn-join" href="" target="_blank">Join</a>
                        </div>
                    </div>
                    `;
                    let widget = document.getElementsByClassName(`shhh7612DiscordWidget${identifier}`)[i], widgetHead = widget.children[0], widgetBody = widget.children[1], wdigetFooter = widget.children[2], members = [], link = `https://discord.com/api/guilds/${id}/widget.json`;
                    widget.style.width = width; widget.style.height = height;
                    fetch(link).then(data => {
                        data.json().then(data => {
                            widgetHead.children[1].children[0].innerText = data.presence_count - 1;
                            wdigetFooter.children[1].setAttribute('href', data.instant_invite);
                            data.members.forEach(member => {
                                if (member.game !== undefined) {
                                    members.push(`<div class="widget-member"><div class="widget-member-avatar"><img alt="" src="${member.avatar_url}"><span class="widget-member-status widget-member-status-${member.status}"></span></div><span class="widget-member-name">${member.username}</span><span class="widget-member-status-text">${member.game.name}</span></div>`)
                                } else {
                                    members.push(`<div class="widget-member"><div class="widget-member-avatar"><img alt="" src="${member.avatar_url}"><span class="widget-member-status widget-member-status-${member.status}"></span></div><span class="widget-member-name">${member.username}</span></div>`)
                                }
                            })
                            widgetBody.innerHTML = members.join('');
                        })
                    })
                } else { alert('DiscordWidget\nNo ID was specified') }
                i = i + 1;
                parent.setAttribute('data-done', 'true')
            }
        }
    }
})