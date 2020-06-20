macroscript HAG_vpComp
	category:         "HAG tools"
	buttontext:       "viewport Composition guides"
	tooltip:          "viewport Composition guides"
(
	rollout compGuide "Composition guides"
	(
		group "Grid presets"
		(
			checkbutton p1 "2 x 2" width:60 height:40 across:2
			checkbutton p2 "3 x 3" width:60 height:40
		)
		group "Position Guides"
		(
			button place1 "Horizontal" width:60 height:40 across:2
			button place2 "Vertical" width:60 height:40
			button place3 "Cross" width:60 height:40
		)
		colorPicker c1 "Guides Color" height:20 fieldwidth:30 align:#right default:yellow
		------------------------------
		-- store values
		local Guide_Lines, drawingLines
		local Grid_Lines, drawingGirds
		local Store_Point, Track_point
		------------------------------
		-- viewport information functions
		fn getViewportSafeFrameSize UIScaling:true =
		(
			local viewSize_x = gw.getWinSizeX applyUIScaling:UIScaling
			local viewSize_y = gw.getWinSizeY applyUIScaling:UIScaling

			local viewAspect =  (viewSize_x as float / viewSize_y)
			local renderAspect =  (renderWidth as float / renderHeight)

			local x, y, w, h
			if (viewAspect > renderAspect) then
			(
				h = viewSize_y
				w = (h * renderAspect) as integer
				y = 0
				x = (viewSize_x - w) / 2
			)
			else
			(
				w = viewSize_x
				h = (w / renderAspect) as integer
				x = 0
				y = (viewSize_y - h) / 2
			)
			return box2 x y w h
		)
		------------------------------
		-- get axes from mouse position
		fn tracker p2 ref axis:#x =
		(
			local res
			if axis == #x then (
				res = #(
					#( [p2.x, 0, 0], [p2.x, ref.y, 0] ),
					#()
				)
			) else if axis == #y then (
				res = #(
					#(),
					#( [0, ref.y - p2.y, 0], [ref.x , ref.y - p2.y, 0] )
				)
			) else (
				res = #(
					#( [p2.x, 0, 0], [p2.x, ref.y, 0] ),
					#( [0, ref.y - p2.y, 0], [ref.x , ref.y - p2.y, 0] )
				)
			)
			res
		)
		------------------------------
		-- mouse track functions
		fn TraceMouse msg ir obj faceNum shift ctrl alt args =
		(
			--	mouse.posUnscaled
			Track_point = tracker mouse.pos Store_Point axis:args
			redrawViews()

			case msg of
			(
				#mouseAbort: undefined
				#freeMove:   #continue
				#mouseMove:  #continue
				#mousePoint: mouse.pos
				-- #mousePoint: mouse.posUnscaled
				default: msg
			)
		)
		------------------------------
		--TODO: CHECK THIS
		fn viewPortGrid h v UIScaling:true =
		(
			local
			Hdiv, Vdiv,
			resH, resV,
			dx, dy,
			fx, fy
			--local vpSize =
			if (displaySafeFrames) then (
				local vpSize = getViewportSafeFrameSize UIScaling:UIScaling
				--	Hdiv = floor ((vpSize.h + vpSize.y) / h)
				--	Vdiv = floor ((vpSize.w + vpSize.x) / v)
				dx = vpSize.w
				dy = vpSize.h
				fx = vpSize.x
				fy = vpSize.y
			) else (

				local viewSize_x = gw.getWinSizeX applyUIScaling:UIScaling
				local viewSize_y = gw.getWinSizeY applyUIScaling:UIScaling
				--	Hdiv = floor ( viewSize_y as float / h)
				--	Vdiv = floor ( viewSize_x as float / v )
				dx = viewSize_x
				dy = viewSize_y
				fx = 0
				fy = 0
			)
			Hdiv = floor (dy / h )
			Vdiv = floor (dx / v )
			-- <point3>mapScreenToView <pixel_coord_point2> <depth_float> [ <viewport_size_point2> ]  applyUIScaling:UIScaling
			resH = for ih=1 to (h - 1) collect (
				#(
					-- mapScreenToView [0, Hdiv * ih] 1 applyUIScaling:UIScaling,
					-- mapScreenToView [dx, Hdiv * ih] 1 applyUIScaling:UIScaling
					[0, Hdiv * ih, 0] + [fx, fy, 0],
					[dx, Hdiv * ih, 0] + [fx, fy, 0]
				)
			)
			resV = for iv=1 to (v - 1) collect (
				#(
					-- mapScreenToView [Vdiv * iv, 0] 1 applyUIScaling:UIScaling,
					-- mapScreenToView [Vdiv * iv, dy] 1 applyUIScaling:UIScaling
					[Vdiv * iv, 0, 0] + [fx, fy, 0],
					[Vdiv * iv, dy, 0] + [fx, fy, 0]
				)
			)
			join resH resV
		)
		-- graphics functions
		fn GW_line col RGBColor:yellow =
		(
			gw.setTransform (Matrix3 1)
			gw.setColor #line RGBColor
			if (isKindOf col Array) AND col.count > 0 then (
				for i in col do gw.hPolyline i false
			)
			gw.enlargeUpdateRect #whole
			gw.updateScreen()
		)
		-- gw callbacks
		fn GW_GridCallback = (GW_line Grid_Lines RGBColor:c1.color)
		fn GW_tracker = (GW_line Track_point RGBColor:c1.color)
		fn GW_LinesCallback = (GW_line Guide_Lines RGBColor:c1.color)
		------------------------------
		-- utility functions
		fn placeGuide axis:#x =
		(
			local mPoint
			local res

			local viewSize_x = gw.getWinSizeX applyUIScaling:UIScaling
			local viewSize_y = gw.getWinSizeY applyUIScaling:UIScaling
			-- save resources: store the wp size
			Store_Point = [viewSize_x, viewSize_y]
			-- register line track gw
			unregisterRedrawViewsCallback GW_tracker
			registerRedrawViewsCallback GW_tracker
			-- track line
			if ( mPoint = mouseTrack snap:#2d trackCallback:#(TraceMouse, axis)) != undefined then (
				res = Track_point
			)
			-- unregister the tracker
			unregisterRedrawViewsCallback GW_tracker
			res
		)
		------------------------------
		-- open event
		on compGuide open do
		(
			-- initialize values
			Guide_Lines  = #()
			Grid_Lines  = #()
			drawingLines = false
		)
		-- close event
		on compGuide close do
		(
			unregisterRedrawViewsCallback GW_GridCallback
			unregisterRedrawViewsCallback GW_LinesCallback
			unregisterRedrawViewsCallback GW_tracker
			redrawViews()
		)
		------------------------------
		fn drawGrids state h v =
		(
			if state then (
				try (
					Grid_Lines = viewPortGrid h v
					unregisterRedrawViewsCallback GW_GridCallback
					registerRedrawViewsCallback GW_GridCallback
					redrawViews()
				)
				catch (
					unregisterRedrawViewsCallback GW_GridCallback
					format (getCurrentException())
				)
			) else (
				unregisterRedrawViewsCallback GW_GridCallback
				redrawViews()
			)
		)
		-- draw 2x2 grid
		on p1 changed state do ( drawGrids state 2 2; if p2.checked then p2.checked = false )
		-- draw 3x3 grid
		on p2 changed state do ( drawGrids state 3 3; if p1.checked then p1.checked = false )
		------------------------------
		fn drawLines axis =
		(
			if not drawingLines then (
				drawingLines = true
				unregisterRedrawViewsCallback GW_LinesCallback
				registerRedrawViewsCallback GW_LinesCallback
			)
			local res
			try (
				if (res = placeGuide axis:axis) != undefined then (
					-- add to lines collection
					join Guide_Lines res
					redrawViews()
				)
			) catch (
				-- unregister gw
				unregisterRedrawViewsCallback GW_LinesCallback
				format (getCurrentException())
			)
		)
		-- draw horiz lines
		on place1 pressed do ( drawLines #x )
		-- draw vert lines
		on place2 pressed do ( drawLines #y )
		-- draw cross lines
		on place3 pressed do ( drawLines #xy )
	)

	on isChecked do if compGuide != undefined then compGuide.open else false

	on execute do (
		try (
			if not compGuide.open then CreateDialog compGuide

		) catch (
			DestroyDialog compGuide
			CreateDialog compGuide
		)
	)
)