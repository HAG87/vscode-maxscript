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
					local prop_line = (trimLeft (trimRight curr_line))
					if curr_line.count > 2 then (append props prop_line )
					curr_line = readline INTERF
				)
				sort props
				append temp_interface props
			)
			
			if (matchPattern curr_line pattern:"*Methods:*") then (
				local methods = #()
				local method_desc = ""
				curr_line = readline INTERF
				
				while not (matchPattern curr_line pattern:"*Actions:*") do (
					local method_line = (trimLeft (trimRight curr_line))
					if (matchPattern method_line pattern:"<*>*") then (
						append methods method_desc
						method_desc = method_line
					) else (
						method_desc +=  "\n" + method_line
					)
					curr_line = readline INTERF
				)
				sort methods
				append temp_interface methods
			)
			if (matchPattern curr_line pattern:"*Actions:*") then (
				local Actions = #()
				curr_line = readline INTERF
				while not (matchPattern curr_line pattern:"*Interface:*") do (
					append Actions (trimLeft (trimRight curr_line))
					curr_line = readline INTERF
				)
				sort Actions
				append temp_interface Actions
			)
			if temp_interface.count > 0 then append the_interfaces temp_interface
		)
	)
	
	fn LookupTableComparator a b = (
		if (toLower a[1]) > (toLower b[1]) then 1
		else if (toLower a[1]) < (toLower b[1]) then -1
		else 0
	)
	qsort the_interfaces LookupTableComparator
	
	local rx = dotNetClass "System.Text.RegularExpressions.Regex"
	
	local the_interfaces_string = for i in the_interfaces collect (
		local curr_int = i
		local int_name = curr_int[1]
		local curr_props = curr_int[2]
		local curr_methods = curr_int[3]
		
		local prop_collection = for p in curr_props collect (
			local prop_name = (filterString (trimleft p ".") " : ")[1]
			local prop_desc = substituteString  p ("." + prop_name + " : ") ""
			#(prop_name, prop_desc)
		)
		local method_collection = for m in curr_methods collect (
			match = rx.match m ">([^<>\s]+)?\s*(<|$)"
			if (match.success) then (
				local method_name = match.Groups.Item[1].Value
				local method_desc = substituteString m "\n" "\\n"
 				#(method_name, method_desc)
			) else continue
		)
		#(int_name, prop_collection, method_collection)
	)
	
	local elem_schema = 
	"{
	\"name\":\"%\",
	\"desc\":\"%\"
}"
	local int_schema = 
	"{
		\"name\":\"%\",
		\"property\":{
			\"kind\":CompletionItemKind.Property,
			\"names\":[
				%
			]
		},
		\"method\":{
			\"kind\":CompletionItemKind.Method,
			\"names\":[
				%
			]
		}
	}"
	
	fn parseElem str =
	(
		local res = "" as stringstream
		if str.count > 0 then (
			for i=1 to str.count-1 do (
				local curr = str[i]
				format (elem_schema + ",\n") curr[1] curr[2] to:res
			)
			local last = str[str.count]
		    format (elem_schema+"\n") last[1] last[2] to:res
		) else format (elem_schema+"\n") "" "" to:res
		res as string
	)		
	
	local output_string = "" as stringstream
	
	for i in the_interfaces_string do (
		local int_name = i[1]
		local int_prop = parseElem i[2]
		local int_method = parseElem i[3]
		
		local int_schema_comp = "" as stringstream
		format int_schema int_name int_prop int_method to:int_schema_comp
		format "%,\n" (int_schema_comp as string) to:output_string
	)
	
	dump_file  = createFile ("D:\maxscript-interfaces-autocomp.json")
	format "%" (output_string as string) to:dump_file
	close dump_file
)