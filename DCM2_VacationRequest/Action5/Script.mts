AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("Personnel Files").Click
AIUtil.FindTextBlock("Request Forms", micFromBottom, 1).Click
AIUtil("gear_settings").Click
AIUtil("gear_settings").Click
AIUtil.FindTextBlock("Pinned columns").Click

'counter = 0
'AIUtil.Context.SetBrowserScope(BrowserWindow)
'Do
'	counter = counter + 1
'	AIUtil.FindText("ePersonnel File ", micFromTop, counter).Hover
'Loop While AIUtil.FindTextBlock(Parameter("iFormID")).Exist(0) = FALSE
'AIUtil.FindTextBlock(Parameter("iFormID")).Highlight

AIUtil.Table.Cell(1, 2).Highlight
AIUtil.Table.Cell(1, 8).Highlight
topCell= AIUtil.Table.Cell(1, 8).GetText
If topCell = "Approved" Then Reporter.ReportEvent 0, "Request Approved", "The request was approved successfully." Else Reporter.ReportEvent 1, "Request Approved", "The request was approval step failed, actual result: " + topCell End If

AIUtil("gear_settings").Click
AIUtil("gear_settings").Click
AIUtil.FindText("Lists").Click

'StatusText = AIUtil.FindTextBlock(micAnyText, micWithAnchorOnLeft, AIUtil.FindText("ePersonnel File ", micFromTop, counter)).GetText
'AIUtil.FindTextBlock("Approved", micWithAnchorBelow, AIUtil.FindTextBlock(Parameter("iFormID"))).Highlight
'AIUtil.FindTextBlock("Approved", micWithAnchorBelow, AIUtil.FindTextBlock(Parameter("iFormID"))).CheckExists True








