AIUtil.FindTextBlock("Vacation Request - Approval Requested", micFromTop, 1).Click
AIUtil("button", "Denied").Click
AIUtil("text_box", "Note").Type "this request is denied"
AIUtil("button", "Next").Click
AIUtil("text_box", "*Login").Type "sienna"
AIUtil("text_box", "Password").Type "OpenText123456"
AIUtil("button", "Submit").Click
AIUtil("check_mark", micAnyText, micFromTop, 1).CheckExists True
