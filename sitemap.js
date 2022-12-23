const xml = require("xml");
const glob = require("glob");
const { writeFile, stat } = require("fs");
const { promisify } = require("util");
const writeFileAsync = promisify(writeFile);
const statAsync = promisify(stat);
const start = Date.now();

console.log("\x1b[36mStarting Sitemap Generator...\x1b[0m");
glob("./src/**/!(404|google*).html", (error, files) => {
    let count = 0;
    const sitemapItems = new Array();
    console.log(`\x1b[36mFiles Found: ${files.length}\x1b[0m`);
    files.forEach(async (file) => {
        let date_mod = new Date((await statAsync(file)).mtime).toISOString();
        let file_dir_count = (file.match(/\//g) || []).length - 2;
        let priority = 1;
        if (!file.includes("index.html")) file_dir_count++;
        while (file_dir_count > 0) {
            priority = priority / 1.25;
            file_dir_count--;
        }
        console.log(`\x1b[32mAdding \x1b[32m${file} \x1b[33m${date_mod} \x1b[34m${priority} \x1b[32mTo Sitemap...`);
        sitemapItems.push({ url: [{ loc: "https://shhh7612.github.io/" + file.replace(/\.\/src\/|index.html/g, '') }, { lastmod: date_mod }, { priority: priority }] });
        count++;
        if (count === files.length) {
            const sitemapObject = { urlset: [{ _attr: { xmlns: "http://www.sitemaps.org/schemas/sitemap/0.9" }, }, ...sitemapItems] };
            const sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n<?xml-stylesheet href="./css/xml.css"?>\n${xml(sitemapObject, { indent: '\t' })}`;
            setTimeout(async a => { await writeFileAsync("public/sitemap.xml", sitemap, "utf8"); }, 500);
            console.log(`\x1b[36mDone Generating Sitemap. Time:\x1b[34m${Date.now() - start}ms \x1b[0m`);
        }
    });
});
