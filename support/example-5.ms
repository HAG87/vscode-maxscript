/*
	HAG 2016
	22-05-16
	Vertex Scrambler
	v. 1.0.0
	http://www.scriptspot.com/users/ariel-g
*/
macroScript HAG_vrtxScr
	category:"HAG tools"
	ButtonText:"VSC"
	toolTip:"Vertex Scrambler"
(
	rollout roll_vertScramble "Vertex Scramble" width:200
	(
		label lbl_1 "OFFSET" align:#left
		group ""
		(
			spinner spn_dwX "X: " type:#worldunits range:[-1000000.0,1000000.0,0.0] fieldWidth:50 across:2
			spinner spn_upX "< " type:#worldunits range:[-1000000.0,1000000.0,0.0] fieldWidth:50
			spinner spn_dwY "Y: " type:#worldunits range:[-1000000.0,1000000.0,0.0] fieldWidth:50 across:2
			spinner spn_upY "< " type:#worldunits range:[-1000000.0,1000000.0,0.0] fieldWidth:50
			spinner spn_dwZ "Z: " type:#worldunits range:[-1000000.0,1000000.0,0.0] fieldWidth:50 across:2
			spinner spn_upZ "< " type:#worldunits range:[-1000000.0,1000000.0,0.0] fieldWidth:50
			checkbox chk_sfts "Use soft selection"
			)
		button btn_Sc "Scramble" width:190 height:30
		button btn_unS "UnScramble" width:190 height:30
		checkButton chk_live "Live" width:190 height:20

		local
		downlimit,
		uplimit,
		obj,
		vert_sel,
		vert_pos

		fn vertScramble o vs d_l u_l soft_s:false =
		(
			local vc = for i in vs collect random d_l u_l
			polyop.moveVert obj vs vc useSoftSel:soft_s
		)

		fn vertUnScramble o vs vo =
		(
			polyop.setVert o vs vo
		)

		fn scrambler =
		(
			undo "vertex scramble" on (
				vertUnScramble obj vert_sel vert_pos
				vertScramble obj vert_sel downlimit uplimit soft_s:(chk_sfts.state)
			)
		)
		fn vert_sc =
		(
			obj = $
			if isKindOf tempsel Editable_Poly then (
				if not (polyop.getVertSelection obj).isEmpty then (
					vert_sel = polyop.getVertSelection obj
					vert_pos = for i in vert_sel collect ( polyop.getVert obj i)
				) else (messageBox "Select some Vertex!"; DestroyDialog roll_vertScramble)

			) else (messageBox "Select EditPoly Object!"; DestroyDialog roll_vertScramble)
		)

		on roll_vertScramble open do (
			vert_sc()

			downlimit = [spn_dwX.value, spn_dwY.value, spn_dwZ.value]
			uplimit = [spn_upX.value, spn_upY.value, spn_upZ.value]

		)

		on spn_dwX changed val do (downlimit.x = val; if chk_live.state then ( scrambler() ))
		on spn_dwY changed val do (downlimit.y = val; if chk_live.state then ( scrambler() ))
		on spn_dwZ changed val do (downlimit.z = val; if chk_live.state then ( scrambler() ))
		on spn_upX changed val do (uplimit.x = val; if chk_live.state then ( scrambler() ))
		on spn_upY changed val do (uplimit.y = val; if chk_live.state then ( scrambler() ))
		on spn_upZ changed val do (uplimit.z = val; if chk_live.state then ( scrambler() ))
		on btn_Sc pressed do ( scrambler() )
		on btn_unS pressed do ( vertUnScramble obj vert_sel vert_pos )
	)
	on isEnabled do roll_vertScramble.open
	on execute do CreateDialog roll_vertScramble
)