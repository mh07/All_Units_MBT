AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("Personnel Files").Click
AIUtil.FindTextBlock("Request Forms", micFromBottom, 1).Click

counter = 0
AIUtil.Context.SetBrowserScope(BrowserWindow)
Do
	counter = counter + 1
	AIUtil.FindText("ePersonnel File ", micFromTop, counter).Hover
Loop While AIUtil.FindTextBlock(Parameter("iFormID")).Exist(0) = FALSE
AIUtil.FindTextBlock(Parameter("iFormID")).Highlight

StatusText = AIUtil.FindTextBlock(micAnyText, micWithAnchorOnLeft, AIUtil.FindText("ePersonnel File ", micFromTop, counter)).GetText
AIUtil.FindTextBlock("Approved", micWithAnchorBelow, AIUtil.FindTextBlock(Parameter("iFormID"))).Highlight
AIUtil.FindTextBlock("Approved", micWithAnchorBelow, AIUtil.FindTextBlock(Parameter("iFormID"))).CheckExists True

AIUtil.SetContext Browser("creationtime:=0")







