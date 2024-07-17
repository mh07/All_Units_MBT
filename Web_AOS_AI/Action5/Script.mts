AIUtil.SetContext Browser("creationtime:=0")
AIUtil("profile", micAnyText, micWithAnchorOnRight, AIUtil("shopping_cart")).Click
AIUtil.FindText("sign out").Click
SystemUtil.CloseProcessByName "chrome.exe"
