--------------------------------------------------
--  QUICK ALIGN TO CURRENT COORDINATE SYSTEM
--------------------------------------------------
mapped fn alignToCPTM obj =
(
	if isValidNode obj then
	(
		local tm   = obj.transform
		local stm  = getCPTM()
		local irot = ( tm * (inverse stm) ).rotationpart
		-- transform
		obj.transform = preRotate tm (inverse irot)
		--node.transform *= xformmat (scalematrix sc) (inverse spaceTM)
		--obj.transform = obj.transform * (inverse spaceTM) * (scalematrix sc) * spaceTM
	)
)
--------------------------------------------------
--  alignToCPTM $
--------------------------------------------------