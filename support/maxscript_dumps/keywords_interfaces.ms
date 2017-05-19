(
	local ints = getCoreInterfaces()
	local INTERF =  "" as stringstream
	
	for i=1 to ints.count do (
		local curr_int = "" as stringstream
		showInterface ints[i] to:curr_int
		append INTERF curr_int
	)
	
	local the_interfaces = #()
-- 	INTERF
-- 	/*
	seek INTERF 0 
	while not eof INTERF do (
		local curr_line = readline INTERF
		if (matchPattern curr_line pattern:"*Interface:*") then (
			local temp_interface = #((filterString curr_line ": ")[2])
			curr_line = readline INTERF
			--- INTERFACE PROPERTIES
			if (matchPattern curr_line pattern:"*Properties:*") then (
				local props = #()
				curr_line = readline INTERF
 				-- INTERFACE METHODS
				while not (matchPattern curr_line pattern:"*Methods:*") do (
					
					if curr_line.count > 2 then (append props (trimLeft (trimRight curr_line)) )
					curr_line = readline INTERF
				)
-- 				if props.count > 0 then (append temp_interface props)
				append temp_interface props
-- 				if props.count > 0 then  format "%\n" props
			)
-- 				format "%\n" temp_interface
			
			if (matchPattern curr_line pattern:"*Methods:*") then (
				local methods = #()
				curr_line = readline INTERF
				while not (matchPattern curr_line pattern:"*Actions:*") do (
					append methods (trimLeft (trimRight curr_line))
					curr_line = readline INTERF
				)
				append temp_interface methods
			)
			if (matchPattern curr_line pattern:"*Actions:*") then (
				local Actions = #()
				curr_line = readline INTERF
-- 				print curr_line
				while not (matchPattern curr_line pattern:"*Interface:*") do (
					append Actions (trimLeft (trimRight curr_line))
					curr_line = readline INTERF
				)
				if Actions.count > 0 then append temp_interface Actions
			)
-- 			format "%\n" temp_interface
			if temp_interface.count > 0 then append the_interfaces temp_interface
		)
	)
-- 	for i in the_interfaces do format "%\n" i
	for i in the_interfaces do (
		format "%\n" i[1]
		local props = i[2]
		local methods = i[3]
		if props != undefined then for i in props do format "    %\n" i
		if props != undefined then for i in methods do format "         %\n" i	
	)
-- 	*/
)