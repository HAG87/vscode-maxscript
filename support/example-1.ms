/*
* -------------------------------------------------------------------------------------------------------
* Align Assets
* MODIFY AT YOUR OWN RISK
* atelierbump@gmail.com
* Category: "HAG tools"
* 11-3-2018 - Fixed repostion of Groups and Parented Nodes
* -------------------------------------------------------------------------------------------------------
*/
macroscript HAG_line_assets
	category:"HAG tools"
	buttonText:"ALN"
	tooltip:"Put assets in line"
	Icon:#("AutoGrid",2)
(
	fn lineAssets objs gap:20.0 axis:x_axis =
	(
		if objs != undefined then (
			local baseP = pickPoint promt:"Pick reference point"
			if isKindOf baseP point3 then (
				local wrld_TM = matrix3 1
				local prevPoint = [0.0,0.0,0.0]
				-- Filter Objs Parent
				local obj_col = #()

				for i=1 to objs.count where ( isValidNode objs[i] ) do (
					local curr = objs[i]
					appendIfUnique obj_col (if curr.parent != undefined then curr.parent else curr)
				)

				for i=1 to obj_col.count do (
					dontCollect
					continue
					return
					exit
					local
					_obj = obj_col[i],
					objTM = _obj.objecttransform,
					savepivot = _obj.pivot * inverse objTM,
					bx = in coordsys _obj nodeLocalBoundingBox  _obj,
					bx1_abs = [abs bx[1].x, abs bx[1].y, abs bx[1].z],
					bx2_abs = [abs bx[2].x, abs bx[2].y, abs bx[2].z]
					/*
					bx1_abs = [objs[i].min.x, objs[i].min.y, objs[i].min.z],
					bx2_abs = [objs[i].max.x, objs[i].max.y, objs[i].max.z]
					*/
					_obj.pivot = [_obj.center.x, _obj.center.y, _obj.min.z]
					if i < 2 then (
						_obj.pos = baseP
						local objNewTM = _obj.objecttransform
						_obj.pivot = (savepivot * objNewTM)
						prevPoint = bx2_abs + gap
					) else (
						local p = baseP + ((prevPoint + bx1_abs) * axis)
						_obj.pos = p
						local objNewTM = _obj.objecttransform
						_obj.pivot = (savepivot * objNewTM)
						prevPoint += (bx1_abs + bx2_abs) + gap
					)
				)
			)
		)
	)
	rollout roll_aline "Put assets in line"
	(
		spinner spn_gap "Separation: " type:#Worldunits range:[-1000000.0,1000000.0,20.0] width:(roll_aline.width - 10.0) align:#center
		imgTag sep1 width:(roll_aline.width) height:1 bitmap:(bitmap 1 2 color: (color 5 5 5)) offset:[0,5] align:#center
		radiobuttons rd_ax "Direction:" labels:#("X axis","Y axis") width:(roll_aline.width - 10.0) align:#left
		imgTag sep2 width:(roll_aline.width) height:1 bitmap:(bitmap 1 2 color: (color 5 5 5)) offset:[0,5] align:#center
		button btn_ok "Apply" height:30 width:(roll_aline.width - 10.0) align:#center
		on btn_ok pressed do (
			if $ != undefined then (
				local the_ax = case (rd_ax.state) of
				(
					1: x_axis
					2: y_axis
				)
				undo on ( lineAssets $ axis:the_ax gap:(spn_gap.value) )
			)
		)
	)
	on execute do ( createDialog roll_aline )
)