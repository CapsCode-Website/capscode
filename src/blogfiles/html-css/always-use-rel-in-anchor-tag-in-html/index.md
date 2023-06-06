If you're using target="_blank" to open any link in a new tab, then always add rel="noopener" or rel="noreferrer" or both like this:

// index.html
<a href="contact.html" target="_blank" rel="noopener noreferrer">Contact Us</a>

This solves a major security issue. When you don't have noopener or noreferrer added, the contact.html has full access to the previous page(index.html) through window.opener object.

This will allow the contact.html page to change the contents of index.html or redirect it to some malicious URL.

But when you add noopener or noreferrer, the opened page will not have access to window.opener object so can't manipulate the original page.

Check out the link in the comment where you can verify it yourself.

𝗣𝗦: 𝗟𝗮𝘁𝗲𝘀𝘁 𝗯𝗿𝗼𝘄𝘀𝗲𝗿𝘀 𝗵𝗮𝘀 𝗳𝗶𝘅𝗲𝗱 𝘁𝗵𝗶𝘀 𝘀𝗲𝗰𝘂𝗿𝗶𝘁𝘆 𝗶𝘀𝘀𝘂𝗲 so you might not see this behavior in latest chrome or firefox but for older browsers the issue is still there. The attached video is recorded in older browser

If you're using anchor tag in React application, you might see warning to add noreferrer for older browser fix.

So whenever using anchor tag to open link in new tab, always add noreferrer and noopener.
