(
	/*
	------------------------------------------------------------------
	* Hide user login (widget?) on 3ds Max 2018 - startup script
	* Use at your own risk
	------------------------------------------------------------------
	*/
	/*
	-- manual trigger function
	fn hideLogin = (
		local controlshwnds = windows.getChildrenHWND #max
		for c in controlshwnds where (matchPattern c[4] pattern:"Chrome*" or matchPattern c[5] pattern:"ClicUIRenderFrameWidgetWindow*") do UIAccessor.CloseDialog c[1]
	)
	*/
	local hide_login = StringStream "print \"remove login\"; local controlshwnds = windows.getChildrenHWND #max; for c in controlshwnds where (matchPattern c[4] pattern:\"Chrome*\" or matchPattern c[5] pattern:\"ClicUIRenderFrameWidgetWindow*\") do (UIAccessor.CloseDialog c[1]); callbacks.removeScripts #welcomeScreenDone id:#hidelogin"
	/* 
	* Delayed Start: Execute after max startup has finished
	* #welcomeScreenDone --> Best result so far
	* #postSystemStartup
	* #appActivated
	*/
	callbacks.addScript #welcomeScreenDone hide_login id:#hidelogin
	-- Test
	-- callbacks.broadcastCallback #welcomeScreenDone
)
