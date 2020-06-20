/*
------------------------------------------------------------------------------------------------------------------
https://atelierbump.com
Select all faces with the same ID
------------------------------------------------------------------------------------------------------------------
*/
macroScript HAG_faceSel
	category:   "HAG tools"
	buttonText: "Face ID"
	toolTip:    "Select faces with same material ID"
	icon:       #("UVWUnwrapSelection",12)
	(
		fn EPOLY_selectMatID obj =
		(
			if obj != undefined then (
				if ((isKindOf obj Editable_Poly) and (subObjectLevel == 4)) then (

					local faceCount   = polyop.getNumFaces obj
					local currFace    = polyop.getFaceSelection obj
					local currFaceArr = currFace as Array

					if currFaceArr[1] != undefined then (
						local faceID = polyop.getFaceMatID obj currFaceArr[1]
						local tempFaces = #()
						tempFaces = for i=1 to faceCount where (polyop.getFaceMatID obj i == faceID) collect i
						/*
						for i=1 to faceCount do (
							local a =  polyop.getFaceMatID obj i
							if a == faceID then (append tempFaces i)
						)
						*/
						polyop.setFaceSelection obj tempFaces
						redrawViews()
					)
				)
			)
		)
		On IsEnabled Return Filters.Is_EditPoly()
		--	On IsVisible Return Filters.Is_EditPoly()
		on execute do
		(
			local theObj = if selection[1] != undefined then selection[1] else undefined
			EPOLY_selectMatID theObj
		)
	)
