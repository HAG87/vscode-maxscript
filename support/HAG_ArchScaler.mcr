/*
------------------------------------------------------------------------------------------------------------------------------------
https://atelierbump.com
Small utility to rescale nodes using an architectural scale factor.
20-22-2020
------------------------------------------------------------------------------------------------------------------------------------
*/

macroScript HAG_units
	category:"HAG tools"
	buttontext:"ArchScaler"
	tooltip:"Small utility to rescale nodes using an architectural scale factor."
(
	rollout roll_archsc "ArchScale"
	(
		group "Units"
		(
			spinner spn_1 "" range:[1,1000,10] type:#float fieldwidth:50 align:#left across:2
			radiobuttons rd_1 labels:#("cm", "inches")
			spinner spn_2 "" range:[1,1000,1] type:#float fieldwidth:50 align:#left across:2
			label lbl_u "Max units"
			button btn_1 "Apply" width:140 height:25
		)
		group "Factor"
		(
			spinner spn_3 "" range:[1,1000,1] type:#integer fieldwidth:50 align:#left  across:3
			label lbl_s1 " : " align:#center
			spinner spn_4 "" range:[1,1000,100] type:#integer fieldwidth:50 align:#right
			button btn_2 "Apply" width:140 height:25
		)
		-- Decode a float value to the specified units. Note the extra steps to overcome different decimal separators than "." in wich case, the units.decodeValue will fail.
		fn valToUnits n unit =
		(
			local res = 1
			local nrType = ClassOf n 
			if ((nrType == integer OR nrType == Float) AND ClassOf unit == string) then
			(
				local nstr = n as string

				if (matchPattern nstr pattern:"*.*") then (
					-- get the system decimal separator
					local sep = (dotNetClass "System.Threading.Thread").CurrentThread.CurrentCulture.NumberFormat.NumberDecimalSeparator
					if sep != "." then nstr = substituteString nstr "." sep
				)
				res = units.decodeValue (nstr + unit)
			)
			res
		)
		-- re-scale funtion. scale is applied relative to the node current scale
		fn scaler f =
		(
			local theScaleTM = ScaleMatrix [f, f, f]
			local nodes = getCurrentSelection()
			undo "ArchScaler" on (
				if nodes.count > 0 then (
					for i in nodes do (
						-- uncomment this line to reset the scale of the nodes
						-- i.scale = [f, f, f]
						i.transform = PreScale i.transform [f, f, f]
					)
				)
			)
		)
		
		on btn_1 pressed do (
			local unit =
			case rd_1.state of
			(
				1:"cm"
				2:"\""
			)
			a = (valToUnits spn_1.value unit )
			b = (valToUnits spn_2.value "" )
			f = a / b
			
			scaler (a / b)
		)
		on btn_2 pressed do (
			scaler ( spn_3.value / spn_4.value as float )
		)
	)
	on isEnabled do not roll_archsc.open
	on execute do CreateDialog roll_archsc
)
