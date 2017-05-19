(
	local rx = dotNetClass "System.Text.RegularExpressions.Regex"
	local props_pattern = "(?sx)(?:[.])(\w+)\s*(?:[:])\s*(\w+)"
	local props_desc_pattern = "(?sx)(?:[:])\s*(\w+)"
	
	local super = superclasses
	local superclass_collection = #()
	
	for i=1 to super.count do (
		local classes = super[i].classes
		
		local _superclass = super[i] as string
		local _class = #()

		for c in classes do (
			local classname = c as string
			local classdesc = "MAXSuperClass: " + _superclass
			local classprops = "" as stringStream
			local props_col = #()
			showClass (classname + ".*") to:classprops
			local match = rx.matches classprops props_pattern
			for m=0 to match.count-1 do (
				local curr_match = match.Item[m]
				if (curr_match.success) then (
					local prop_name = curr_match.Groups.Item[1].value
					local prop_desc =  curr_match.Groups.Item[2].value
					appendifUnique props_col #(prop_name, prop_desc)
				)
			)
			appendifUnique _class #(classname, props_col)
		)
		append superclass_collection #(_superclass, _class)
	)
	
	
	
	fn LookupTableComparator a b = (
		if (toLower a[1]) > (toLower b[1]) then 1
		else if (toLower a[1]) < (toLower b[1]) then -1
		else 0
	)	
	
	local elem_schema = 
	"{
	\"name\":\"%\",
	\"desc\":\"%\"
}"	
	local formatPattern =
	"{
		\"name\":\"%\",
		\"desc\":\"MAXSuperClass: %\",
		\"property\":{
			\"kind\":CompletionItemKind.Method,
			\"names\":[
				%
			]
		}
}"
	local schema_pattern = "\"api\":[\n\t%\n\r]"

	qsort superclass_collection LookupTableComparator
	
	local output_string = ""
	
	for i in superclass_collection do (
		local curr_sup = i
		local sup_name = i[1]
		local classes = i[2]
		qsort classes LookupTableComparator
-- 		local classes_str
		for c in classes do (
			local class_name = c[1]
			local class_props = c[2]
	 		qsort class_props LookupTableComparator
			local class_props_str = ""
			local class_str = "" as stringStream
			local class_
			for p=1 to class_props.count do (
				local props_str = "" as stringStream
				if class_props[p][1] == "" then continue
				format elem_schema class_props[p][1] class_props[p][2] to:props_str
				class_props_str += if p < class_props.count then (props_str as string) + ",\n" else (props_str as string)
			)
			if class_props_str != "" then (
				format formatPattern class_name sup_name class_props_str to:class_str
				output_string += (class_str as string) + ",\n"
			)
			
			
		)
		
	)
	
	dump_file  = createFile ("D:\maxscript-classes-autocomp_2.json")
	format "%" (output_string as string) to:dump_file
	close dump_file
	
)