// Get the user agent using navigator.userAgent and append to finalOutput
var userAgent = navigator.userAgent;
var finalOutput = 'USER_AGENT: \r\n' + userAgent + '\r\n\r\n';

chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
	chrome.cookies.get(
		{ url: tabs[0].url, name: '__Secure-next-auth.session-token' },
		function (cookie) {
			finalOutput += 'SESSION_TOKEN: \r\n' + cookie.value + '\r\n\r\n';
			chrome.cookies.get({ url: tabs[0].url, name: 'cf_clearance' }, function (cookie) {
				finalOutput += 'CF_CLEARANCE: \r\n' + cookie.value + '\r\n';
				var area = document.createElement('textarea');
				area.style.position = 'absolute';
				area.style.border = '0';
				area.style.padding = '0';
				area.style.margin = '0';
				area.style.height = '1px';
				area.style.top = '-10px';
				area.innerHTML = finalOutput;
				document.body.appendChild(area, document.body.firstChild);

				var range = document.createRange();
				range.selectNodeContents(area);

				var selection = window.getSelection();
				if (selection !== null) {
					// check if selection is not null just to be safe
					selection.removeAllRanges();
					selection.addRange(range);
					document.execCommand('copy');
					document.body.removeChild(area);
				}
			});
		},
	);
});
