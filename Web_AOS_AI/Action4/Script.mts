AIUtil.SetContext Browser("creationtime:=0")
AIUtil("shopping_cart").Click
AIUtil.FindText("CHECKOUT").Click
AIUtil("button", "NEXT").Click
AIUtil("button", "PAY NOW").Click
AIUtil.SetContext Browser("creationtime:=0")
AIUtil.FindTextBlock("Thank you for buying with Advantage").CheckExists True
