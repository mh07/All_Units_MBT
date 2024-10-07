Dim MyDate
MyDate = Date   ' MyDate contains the current system date.
AIUtil.SetContext Browser("creationtime:=0")
AIUtil("button", "", micWithAnchorBelow, AIUtil.FindTextBlock("Personnel Files")).Click
AIUtil.FindTextBlock("Request Forms", micFromBottom, 1).Click
AIUtil("plus").Click
AIUtil.FindTextBlock("Add").Click
AIUtil.FindTextBlock("Smart Vacation Request", micFromBottom, 1).Hover
AIUtil("check_box", "Smart Vacation Request").SetState "On"
AIUtil("button", "Continue").Click
'AIUtil("combobox", "Employee td1234").Select "029501"

AIUtil("down_triangle", micAnyText, micWithAnchorOnLeft, AIUtil.FindTextBlock("Employee td1234")).Click
AIUtil.FindText("029501", micFromTop, 5).Click
AIUtil.FindTextBlock(micAnyText, micWithAnchorAbove, AIUtil.FindTextBlock("Name")).Click
AIUtil("down_triangle", micAnyText, micWithAnchorOnLeft, AIUtil.FindTextBlock("First Name")).Click
AIUtil.FindText("Victor").Click
AIUtil("down_triangle", micAnyText, micWithAnchorOnLeft, AIUtil.FindTextBlock("Last Na me")).Click
AIUtil.FindText("Dylan", micFromTop, 6).Click
AIUtil("down_triangle", micAnyText, micWithAnchorOnLeft, AIUtil.FindTextBlock("Position")).Click
AIUtil.FindText("Shipping Clerk").Click
AIUtil("button", "Continue").Click
AIUtil("button", "Edit later").Click
AIUtil("check_box", micAnyText, micWithAnchorAbove, AIUtil.FindTextBlock("Name")).SetState "On"
AIUtil("dot_menu").Click
AIUtil.FindTextBlock("Send to workflow").Click
AIUtil.FindText("Vacation Request", micWithAnchorOnLeft, AIUtil.FindTextBlock("Send to Wworkflow")).Click
AIUtil("button", "Next").Click
AIUtil("combobox", "Manager").SetText "sienna miller"
AIUtil.FindTextBlock("Sienna Miller").Click

AIUtil("button", "Next").Click
AIUtil("button", "Next").Click
AIUtil("check_box", "Send notification when the workflow starts").SetState "On"

AIUtil("text_box", "Launch on").SetText MyDate
AIUtil("button", "Finish").Click

Parameter("oFormID") = AIUtil.FindText(micAnyText, micWithAnchorOnRight, AIUtil("close")).GetText

