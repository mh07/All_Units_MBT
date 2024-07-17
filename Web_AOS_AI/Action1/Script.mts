SystemUtil.Run "chrome.exe", "www.advantageonlineshopping.com"
AIUtil.SetContext Browser("creationtime:=0")
wait 3
AIUtil("profile").Click
AIUtil("input", "username").SetText Parameter("iUsername")
AIUtil("input", "password").SetText Parameter("iPassword")
AIUtil("button", "SIGN IN").Click




