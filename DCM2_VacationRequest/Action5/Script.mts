AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("Personnel Files").Click
AIUtil.FindTextBlock("Request Forms", micFromBottom, 1).Click
AIUtil.FindText("Vacation", micFromTop, 1).Highlight
AIUtil.FindTextBlock("Approved", micFromTop, 1).Highlight
AIUtil.FindTextBlock("Approved", micFromTop, 1).CheckExists True

