(
	local classes = "" as stringstream
	showClass "*" to:classes
	
	local all_classes = #()

	seek classes 0 
	while not eof classes do (
		local curr_line = readLine classes
		print curr_line
		local c_name = (filterString curr_line " ")[1]
		local c_props = "" as stringstream
		local c_props_name = #()
		showClass (c_name + ".*") to:c_props
		
		seek c_props 0
		readLine c_props
		while not eof c_props do (
			local prop_line = readLine c_props
			local curr_prop = (filterString prop_line " ")[1]
			append c_props_name (trimLeft (trimLeft curr_prop) ".")
		)
		sort c_props_name
		append all_classes #(c_name, c_props_name)
	)
	
	local all_classes_string = #()
	
	for i=1 to all_classes.count do (
		local n = all_classes[i][1] as string
		local p = all_classes[i][2]
		local pcount = p.count
		if pcount > 0 then (
			local res_p = "" as stringstream
			for pp=1 to pcount do (
				append res_p (if pp < pcount then p[pp] + "|" else p[pp])
			)
			local res_c = "" as stringstream
			format "%[.]?(%)?" n (res_p as string) to:res_c
			append all_classes_string (res_c as string)
		) else (
			append all_classes_string n
		)
	)
	----------------------------------------------------------------------------------------------------------------------------------
	local counter = all_classes_string.count 
	local final_string = ""
	for r=1 to counter do (
		final_string += if r < counter then all_classes_string[r] + "|" else all_classes_string[r]
	)
	----------------------------------------------------------------------------------------------------------------------------------
	local formatted_string = "" as stringstream
	format @"(?i)\\b(%)(?!\\s*:)\\b" final_string to:formatted_string
	----------------------------------------------------------------------------------------------------------------------------------
	fn keywordpattern _name _in out =
	(
		local _n = "\"name\": \"" + _name + "\""
		local _m = "\"match\": "
		local res = "" as stringstream
		format "{\t\n%,\n\t%\"%\"\n},\n" _n _m _in to:res
		append out (res as string)
	)
	
	local dump_result = "" as stringstream
	keywordpattern "" (formatted_string as string) dump_result
		dump_file  = createFile ("D:\maxscript-terms-dump_CLS.json")
		format "%" (dump_result as string) to:dump_file
		close dump_file	
)