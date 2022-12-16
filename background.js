// Intercept requests to chat.openai.com
chrome.webRequest.onBeforeSendHeaders.addListener(
	function (details) {
		// Check if the request is to chat.openai.com
		if (details.url.indexOf('chat.openai.com') > -1) {
			// Get the user-agent header value
			var userAgent = details.requestHeaders.find((header) => header.name === 'User-Agent').value;

			// Copy the user-agent value to the clipboard
			var area = document.createElement('textarea');
			area.style.position = 'absolute';
			area.style.border = '0';
			area.style.padding = '0';
			area.style.margin = '0';
			area.style.height = '1px';
			area.style.top = '-10px';
			area.innerText = userAgent;
			document.body.appendChild(area, document.body.firstChild);
			area.focus();
			area.select();
			document.execCommand('copy');
			document.body.removeChild(area);
		}
	},
	{
		urls: ['*://chat.openai.com/*'],
	},
	['requestHeaders'],
);

// Copy the session token cookie to the clipboard
chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
	chrome.cookies.get({ url: tabs[0].url, name: '__Secure-next-auth.session-token' }, (cookie) => {
		var area = document.createElement('textarea');
		area.style.position = 'absolute';
		area.style.border = '0';
		area.style.padding = '0';
		area.style.margin = '0';
		area.style.height = '1px';
		area.style.top = '-10px';
		area.innerText = cookie.value;
		document.body.appendChild(area, document.body.firstChild);
		area.focus();
		area.select();
		document.execCommand('copy');
		document.body.removeChild(area);

		// Copy the cf_clearance cookie to the clipboard
		chrome.cookies.get({ url: tabs[0].url, name: 'cf_clearance' }, (cookie) => {
			var area = document.createElement('textarea');
			area.style.position = 'absolute';
			area.style.border = '0';
			area.style.padding = '0';
			area.style.margin = '0';
			area.style.height = '1px';
			area.style.top = '-10px';
			area.innerText = cookie.value;
			document.body.appendChild(area, document.body.firstChild);
			area.focus();
			area.select();
			document.execCommand('copy');
			document.body.removeChild(area);
		});
	});
});
