AIUtil.SetContext Device("micclass:=Device")
AIUtil("shopping_cart").Click
AIUtil.FindText("CHECKOUT").Click
AIUtil("button", "PAY NOW").Click

AIUtil.SetContext Device("micclass:=Device")
'get the order number as output parameter to pass into SAP OTC
oNumber = AIUtil.FindTextBlock(micAnyText, micWithAnchorBelow, AIUtil.FindTextBlock("Payment confirmation number")).GetText
A = Split(oNumber, " ")
B = A(3)
Parameter("oOrderNumber") = B
Print Parameter("oOrderNumber")

AIUtil("button", "Ok").Click
