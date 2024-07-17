AIUtil.SetContext Browser("creationtime:=0")
AIUtil("profile", micAnyText, micWithAnchorOnRight, AIUtil("shopping_cart")).Click
AIUtil.FindText("My orders").Click
AIUtil("search", micAnyText, micFromBottom, 1).Search Parameter("iOrderNumber")
AIUtil.FindTextBlock(Parameter("iOrderNumber"), micWithAnchorAbove, AIUtil.FindText("ORDER NUMBER")). CheckExists True
