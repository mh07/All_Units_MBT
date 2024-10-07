AIUtil.SetContext Browser("creationtime:=0")

AIUtil("button", "", micWithAnchorOnLeft, AIUtil("favorites", micAnyText, micFromTop, 1)).Click
AIUtil.FindTextBlock("Sign out").Click
