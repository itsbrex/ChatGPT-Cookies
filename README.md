# Copy ChatGPT Session Token

This Chrome extension allows you to easily copy your ChatGPT session token to your clipboard with just one click.

## How to Install

To install this locally:

1.  Download the code on GitHub.
2.  Unzip the downloaded file.
3.  In case of Google Chrome, open the Extensions page (chrome://extensions/).
4.  Turn on Developer mode by clicking the toggle switch in the top right corner of the page.
5.  Click the `Load unpacked` button and select the directory where you unzipped the extension files.
6.  Copy ChatGPT Session Token extension should be installed and ready to go!

## Usage

1. Navigate to the ChatGPT website.
2. Click on the extension icon in your Chrome toolbar.
3. The extension will copy your session token to your clipboard.
4. Save the token as `SESSION_TOKEN` in your project's `.env` file.
5. Have fun!

![Copy Token gif](copy-token.gif)

## Extension Permissions

- The `"permissions"` property grants the extension access to the following:

  - `activeTab:` Allows the extension to access information on the current active tab.
  - `cookies:` Allows the extension to read and write cookies.
  - `clipboardWrite:` Allows the extension to write to the clipboard.

- The `"host_permissions"` property grants the extension access to the following:
  - `https://*.openai.com/*:` Allows the extension to access pages within the openai.com domain.

In summary, the extension is only able to access the information on the current active tab, as well as read and write to the clipboard on pages within the openai.com domain.

**It is NOT able to access any information on pages that are not on the openai.com domain.**

Read more here [chrome.tabs - Chrome Developers](https://developer.chrome.com/docs/extensions/reference/tabs/)

## Icon

The extension icon was created using DALL-E-2. :)
![Copy ChatGPT Session Token icon ](icons/icon256x256.png)

## License

This extension is licensed under the MIT License. See the [LICENSE](https://github.com/itsbrex/Copy-ChatGPT-Session-Token/blob/master/LICENSE) file for more information.
