# ChatGPT Cookies - Chrome Extension

[![GitHub stars](https://img.shields.io/github/stars/itsbrex/ChatGPT-Cookies?style=for-the-badge)]() [![GitHub forks](https://img.shields.io/github/forks/itsbrex/ChatGPT-Cookies?style=for-the-badge)]() [![GitHub issues](https://img.shields.io/github/issues/itsbrex/ChatGPT-Cookies?style=for-the-badge)]() [![GitHub license](https://img.shields.io/github/license/itsbrex/ChatGPT-Cookies?style=for-the-badge)]()

This Chrome Extension allows you to quickly and easily copy ChatGPT cookie values and user-agent strings to your clipboard, or export a single `.env` file with everything.

<br>

![ChatGPT-Cookies](https://socialify.git.ci/itsbrex/ChatGPT-Cookies/image?description=1&descriptionEditable=CF_CLEARANCE%0A-%0ASESSION_TOKEN%0A-%0AUSER_%20AGENT&font=Source%20Code%20Pro&logo=https%3A%2F%2Fgithub.com%2Fitsbrex%2FCopy-ChatGPT-Session-Token%2Fblob%2Fmain%2Ficons%2Ficon256x256.png%3Fraw%3Dtrue&name=1&owner=1&pattern=Solid&theme=Dark)

<div style="text-align: center">

Full-Stack Product Manager
Available for hire [late july](https://links.dev/brian) - Please reach out 🙋‍♂️

<a href="https://linkedin.com/in/itsbrianroach" target="_blank">
<img src=https://img.shields.io/badge/linkedin-%231E77B5.svg?&style=for-the-badge&logo=linkedin&logoColor=white alt=linkedin style="margin-bottom: 5px; border-radius: 6px" />
</a>
</div>

<br>

## Features

- 📋️ Copy individual or all values to clipboard with a single click!
- 📁 Export all values as an `.env-all.txt` file.

  Currently supports the following values:

  - `cf_clearance`
  - `__Secure-next-auth.session-token`
  - `user-agent`

## Demo

![chatgpt-cookies-v2-demo](chatgpt-cookies-v2-demo.gif)

## Example output

```
CF_CLEARANCE:
aDb4vZuUfhisisjsbfytfjdbndD1xktq_lcwC9ceIAo-1671161322-0-1-7662cbc0.801c6f70.12d6215e-160

SESSION_TOKEN:
eyJhbGciOiJkaXIiLCJlbmMiOiJBMjU2R0NNIn0..rXK8br7nrr9e37Kr.kqTJumUk-buzxURSAHXhDcCO-YiFhEkGyHqVcvY8Uvl16iOwHO47IFCvJPoAqghb66uXGPRTbTBn9fWSH0JFktYjCO1HuQDlHPY_d_6xSpNg3Jy_mHZfr5_YQ5pyV8T3DO2TpZfzDYjSgb4be8yZm7GW7AfT3OOOus5E27p2ZxNUUTgJUmXjUZu69RNXpm4NalcQMWARTKlf0feialDMSYLWyQh6QhGZEzdpGsT5qe4Qdw07ckpMiRM8wLHLljmUpqRXas6AKNrYhdRKnSm_GrHGGCSeeyMkqZ8k0PpMURg5SOcGvblqQBCFx8edEKfAvn90l33_liIjihUorle9fMW71sYicyrYUSfz-jAzhtBTdNZRPK1xoOsrFNSDYKmLQ1qBitZxdC7QUwBOQGE42j4pUf_fdpmvxydWDhDNqbor1svo-ws-EvnHS0dfS8geUjcKzX3VgsbTgRYVLo6kbyzQnGIbSnLCvUQDsDVeMmW6BMn5sb1QZoDeZQ4VKQGVwakEcnXDp1M1SGd1rxv2MAc1KtBN292tDJOCHOmIaDImB8Z8JtawHqcySLcViBsddddfsscafsdcjsndbcksjnvlmasdkjbskjcnalscoadbuvcaugscvuahccdbchbchsdjhcdcbhdscbsjePN0oLOfQgftbrgfOyNry-9Q_UC9dJfxEBTYew705-wkQpgh4zE4n-_CoysPl1vNQG9kmoSH0U3febeH99W_iAazzuNZfZETb8gDkJPAWGNR4GtrIfQQfO4_QpkE6u7x0YFz0DgxKGwGfnVpAXqU5T4TWz3Jnkq4u8mPiEpKdGufm41P3WJUR28W4odP7SBqisq118tegy2ufKR0NKvnMOOWxrBoGefY5wV7-YXpXwq6NmE8wVvk5h37zYheUM8vMY2sNsPLNN_oyRFbIxu0qeWxqnntA--WK-ALKgl7dzD0ppvaSsmroh0vQvNVXmIp9Tob4vJduC0-UAoKh8AwSM4lU7nzKNwElYpbTV4_AwvWwFfPyg4hsNJilRVDj5f1xhTlTB2MHqPhM8mEcq8JIOpKvy0BWGhW4DzaF5ucgpjYL4mzd_FXCGoiKO_0JOumtF-j9R-krjjDU6sLceaZxaFFJImiO23mxSZlge8j3IEFIlb7iWnvoenvGU1wN5JfWpKjbSpjahLmLAIDnHjbJbAIUvxLvFGKndvMgAObTliURiep_pP-WtBSVUQls1E0MI-WL3z-0umtjKluIWzdUSpfHuFLa-ZOfKfBYHOvo56zDwWx7CApgySi_9G6Q9VR5r9_5HMfZ2gSpVxtbzfybNT6SLVthw48oJZSiYHzinxEhbEYfd_H9ccc5q19Fe81EiPToP5WZrPvsxC2sbC0r7NwsMty58YYUSs8ZwwqafYjNLM_bGXmy93CPMvLMMHUHMqLXmgT4DuVGciLeSRwu3lZi6fngOFBvJQamnBV60l_8LBnnyy4wGw6--HHBQ3DhRmJUUuNvfqT3dSw10XIQWDUQlp-czCpf8GvV-96OAeyKCTDMGcG2cv1qNr_n5fsn2PHt5L8mqG5bwPmz0TR8kPpQIz6vNzcJogtKKc3dZ9JKugY1mLzuLMNsJCnWXN2C4m7Pn2rY3cHqSELfJ8qhoDxthEvALVZ-zRRM67qKrKlSfoCJQVjsV15zH7svwRpbplAF844LbAZQPdjGT3NAm70dUlUN-oEa-SG0jEaw9hhIeMw7JJt-fdPL46GNYBV7KYCLS0ljAocItosWQSwwGIlgbOgRIUYFH2epcMylMbYF8pO5NpOYrpSxpoU7Ed3cQTAOrnhwb1aEUlMcsYpVnRbas2NYDXwLhUt066ba0DPu0ZdZ14HpdqJ1FmbYbv-PnI-VwgfHI1vNZDQ7p1xneaxpBuQMs8EhK5wsjjx3w-6Zwvf6HkPBubT9f4hInopzf0FXSc36QWPnRiUcl9xBRhAiqTBRgwevUv0WFkXuW-PVLYicq4Ja93ZVtEXFVRXP1tpH0oTwvlAL33z2ymkJze-GNY-Gqy21147bBo6SwW64dsBbfwgshF_Dd5yFMXTLI9-2YUdkjvJjcM8oJGXlOsJ_-a53WPji09AWrQUaqAhpPwN6hW2gAICTc5YlNvNw8MZrap4Byg9z1pJaI5b0CkeQRlwKRBfr6Cey13PaxmNq2QRJm7XVILUyzjWA.K3ezZa58putln39tQLHZow

USER_AGENT:
Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/108.0.0.0 Safari/537.36
```

> **Note:** The `CF_CLEARANCE` value is only valid for 2 hours. This extension helps you copy that value again quickly. Exploring options for a fix to address this in a future release.

## Install

### Chrome Web Store (recommended)

1. Install 👉️ [ChatGPT Cookies - Chrome Web Store](https://chrome.google.com/webstore/detail/copy-chatgpt-session-toke/nnkcnhbioochcaoeofflcljhhpceoknl)
2. Click on the extension icon in the Chrome toolbar to automatically navigate to the ChatGPT website 👉️ https://chat.openai.com/chat
3. Select one of the options to automatically copy the `SESSION_TOKEN`, `USER_AGENT`, and `CF_CLEARANCE` or all values at once to your clipboard, or download a single `.env-all` with all of them.
4. Paste the values wherever they are needed in your project, such as in the `.env` file

### Install Locally (latest features)

1. Download the code on GitHub.
2. Unzip the downloaded file.
3. In the Chrome browser, open the Extensions page (chrome://extensions/).
4. Turn on Developer mode by clicking the toggle switch in the top right corner of the page.
5. Click the `Load unpacked` button and select the directory where you unzipped the extension files.
6. The extension should now be installed and ready to use.
</details>

## Bugs / Feature Requests

- For bug reports or feature requests, please [open an issue](https://github.com/itsbrex/ChatGPT-Cookies/issues).
- To view roadmap and current progress, please see the [github projects page](https://github.com/users/itsbrex/projects/4/views/1)

## Extension Permissions

- `"host_permissions"` property grants the extension access to the following:

  - `https://*.openai.com/*:` allows the extension to access pages within the openai.com domain **_only_**.

- `"permissions"` property grants the extension access to the following within the scope above:
  - `activeTab:` allows the extension to access information on the current active tab.
  - `cookies:` allows the extension to read and write cookies.
  - `clipboardWrite:` allows the extension to write to the clipboard.
    <br>

> More info here: [Chrome Extensions Declare permissions](https://developer.chrome.com/docs/extensions/mv3/declare_permissions/#host-permissions)

## Icon

<p align="center">
  <img src="icons/icon256x256.png" alt="Copy ChatGPT Session Token icon" />
  <br>
  The extension icon was created using DALL-E-2.
</p>

## License

This extension is licensed under the MIT License. See the [LICENSE](https://github.com/itsbrex/Copy-ChatGPT-Session-Token/blob/master/LICENSE) file for more information.

## Acknowledgements

- Thanks OpenAI for the amazing [ChatGPT](https://openai.com/blog/chatgpt/) project
- Repo social share image made with [GitHub Socialify](https://socialify.git.ci/)
- Extension icon made with [DALL-E-2](https://openai.com/dall-e-2/)
- Chrome Web Store assets [Figma template](https://www.figma.com/community/file/1088380138639295338) from [Miki Ishiima](https://www.figma.com/@mikiishijima)
