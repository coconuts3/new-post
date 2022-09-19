Display.InputDialog Title: $'''URL''' Message: $'''Paste the URL of the person you want to send a comment to!''' InputType: Display.InputType.SingleLine IsTopMost: False UserInput=> UserInput ButtonPressed=> ButtonPressed
Display.InputDialog Title: $'''メッセージ''' Message: $'''Please enter your message!''' InputType: Display.InputType.SingleLine IsTopMost: False UserInput=> UserInput2 ButtonPressed=> ButtonPressed2
WebAutomation.LaunchChrome.LaunchChrome Url: UserInput WindowState: WebAutomation.BrowserWindowState.Normal ClearCache: False ClearCookies: False WaitForPageToLoadTimeout: 60 Timeout: 60 BrowserInstance=> Browser
WebAutomation.PopulateTextField.PopulateTextField BrowserInstance: Browser Control: appmask['Recording']['Text area'] Text: UserInput2 Mode: WebAutomation.PopulateTextMode.Replace EmulateTyping: True UnfocusAfterPopulate: False WaitForPageToLoadTimeout: 60
@@source: 'Recorder'
WebAutomation.Click.Click BrowserInstance: Browser Control: appmask['Recording']['Anchor']

# [ControlRepository][PowerAutomateDesktop]

{
  "ControlRepositorySymbols": [
    {
      "Name": "appmask",
      "ImportMetadata": {
        "DisplayName": "Computer",
        "ConnectionString": "",
        "Type": "Local"
      },
      "Repository": "{\r\n  \"Screens\": [\r\n    {\r\n      \"Controls\": [\r\n        {\r\n          \"AutomationProtocol\": null,\r\n          \"ScreenShot\": null,\r\n          \"ElementTypeName\": \"textarea\",\r\n          \"InstanceId\": \"f3082cfb-baec-4ad6-8587-1e82d7db070a\",\r\n          \"Name\": \"Text area\",\r\n          \"SelectorCount\": 1,\r\n          \"Selectors\": [\r\n            {\r\n              \"CustomSelector\": \"html > body > div:eq(0) > div:eq(3) > div:eq(9) > div:eq(1) > div > div:eq(0) > form > div:eq(0) > textarea\",\r\n              \"Elements\": [],\r\n              \"Ignore\": false,\r\n              \"IsCustom\": true,\r\n              \"IsWindowsInstance\": false,\r\n              \"Order\": 0,\r\n              \"Name\": \"Selector\"\r\n            }\r\n          ],\r\n          \"Tag\": \"textarea\",\r\n          \"ScreenshotPath\": \"controlRepo-screenshots\\\\\\\\8c0f28cf-edbb-470a-9fdf-7738e1e33dd8.png\"\r\n        },\r\n        {\r\n          \"AutomationProtocol\": null,\r\n          \"ScreenShot\": null,\r\n          \"ElementTypeName\": \"a\",\r\n          \"InstanceId\": \"21209d0a-23f4-44ef-b4f8-dbd3a7a7636f\",\r\n          \"Name\": \"Anchor\",\r\n          \"SelectorCount\": 1,\r\n          \"Selectors\": [\r\n            {\r\n              \"CustomSelector\": \"html > body > div:eq(0) > div:eq(3) > div:eq(9) > div:eq(1) > div > div:eq(0) > form > div:eq(1) > div:eq(0) > a\",\r\n              \"Elements\": [],\r\n              \"Ignore\": false,\r\n              \"IsCustom\": true,\r\n              \"IsWindowsInstance\": false,\r\n              \"Order\": 0,\r\n              \"Name\": \"Selector\"\r\n            }\r\n          ],\r\n          \"Tag\": \"a\",\r\n          \"ScreenshotPath\": \"controlRepo-screenshots\\\\\\\\d814ef85-491d-4c6b-ad8e-cf0665d3c80c.png\"\r\n        }\r\n      ],\r\n      \"ScreenShot\": null,\r\n      \"ElementTypeName\": \"Web Page\",\r\n      \"InstanceId\": \"2a57295f-b0d0-44ae-bd98-e298e6822b0c\",\r\n      \"Name\": \"Recording\",\r\n      \"SelectorCount\": 1,\r\n      \"Selectors\": [\r\n        {\r\n          \"CustomSelector\": null,\r\n          \"Elements\": [\r\n            {\r\n              \"Attributes\": [],\r\n              \"CustomValue\": null,\r\n              \"Ignore\": false,\r\n              \"Name\": \"Web Page\",\r\n              \"Tag\": \"domcontainer\"\r\n            }\r\n          ],\r\n          \"Ignore\": false,\r\n          \"IsCustom\": false,\r\n          \"IsWindowsInstance\": false,\r\n          \"Order\": 0,\r\n          \"Name\": \"Selector\"\r\n        }\r\n      ],\r\n      \"Tag\": \"domcontainer\",\r\n      \"ScreenshotPath\": \"controlRepo-screenshots\\\\\\\\b16c8a9e-2c93-4af8-b3cd-d2fbe8ed5692.png\"\r\n    }\r\n  ],\r\n  \"Version\": 1\r\n}"
    }
  ],
  "ImageRepositorySymbol": {
    "Name": "imgrepo",
    "ImportMetadata": {},
    "Repository": "{\r\n  \"Folders\": [],\r\n  \"Images\": [],\r\n  \"Version\": 1\r\n}"
  },
  "ConnectionReferences": []
}
