(
	local classes = "" as stringstream
	showClass "*" to:classes
	
	local all_classes = #()
	seek classes 0
	while not eof classes do (
		local curr_line = readLine classes
		local c_name = (filterString curr_line " ")[1]
		append all_classes c_name
	)
	fn nameParser col formatpattern:@"(?i)\\b(%)(?!\\s*:)\\b"  =
	(
		sort col
		local keywords = "" as stringstream
		local res = "" as stringstream
		for i=1 to col.count-1 do (
			local theK = trimLeft (trimRight (col[i]))
			if theK != "" then append keywords (theK + "|")
		)
		local lastK = trimLeft(trimRight (col[col.count]))
		if lastK != "" then append keywords lastK
		format formatpattern (keywords as string) to: res
		res as string
	)
	fn keywordpattern _name _in out =
	(
		local _n = "\"name\": \"" + _name + "\""
		local _m = "\"match\": "
		local res = "" as stringstream
		format "{\t\n%,\n\t%\"%\"\n},\n" _n _m _in to:res
		append out (res as string)
	)
-- 	print classes
	local class_names = "" as stringstream

	keywordpattern "support.class.maxscript" (nameParser all_classes) class_names
	
	local dump_file  = createFile ("D:\maxscript-terms-dump_class_names.json")
	format "%" (class_names as string) to:dump_file
	close dump_file
	
)