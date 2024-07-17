AIUtil.SetContext Device("micclass:=Device")
'AIUtil.FindTextBlock("LAPTOPS").Click
AIUtil.FindText(Parameter("iProductCategory")).Click
AIUtil.FindTextBlock(Parameter("iProductName")).Click
'beats studio 2
'HP ElitePad 1000 G2 Tablet
AIUtil("button", "ADD TO CART").Click

vAtcOK = AIUtil.FindText("OK").Exist

If vAtcOK Then
	AIUtil.FindText("OK").Click
End If
