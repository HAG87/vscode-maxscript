(
	-- collect structs
	local structs = #()
	-----------------------------------------------------------------------------------------
	local PROPS = "" as stringstream
	apropos "" to:PROPS
	-----------------------------------------------------------------------------------------
    seek PROPS 0	
    while not eof PROPS do ( rG_
        local theLine = readLine PROPS
        if (matchPattern theLine pattern:"*#struct*") then (
			local curr_st = (filterString theLine " ")[1]
			if not ((matchPattern curr_st pattern:"_*") or (matchPattern curr_st pattern:"rG_*")) then (
				local st = #(curr_st)
				local fns = #()
				local pr = #()
				theLine = readLine PROPS
				while (matchPattern theLine pattern:"*Public*") do (
					if (matchPattern theLine pattern:"*<fn>*") then (
						local _f = (trimLeft (filterString theLine ":")[1])
						if _f.count > 1 then (append fns _f)
					) else (
						local _f = (trimLeft (filterString theLine ":")[1])
						if _f.count > 1 then (append pr _f)
					)
					theLine = readLine PROPS
				)
				append st fns
				append st pr
				append structs st
			)
        )
    )
	-- parse names
	local result_st = #()
	local formatPattern =
   "{
	\"name\":\"%\",
	\"function\":{
		\"kind\":CompletionItemKind.Function,
		\"names\":[
			%
		]
	},
	\"property\":{
		\"kind\":CompletionItemKind.Property,
		\"names\":[
			%
		]
	}
}"
	local schema_pattern = "\"api\":[\n\t%\n\r]"
	
	fn LookupTableComparator a b = (
		if (toLower a[1]) > (toLower b[1]) then 1
		else if (toLower a[1]) < (toLower b[1]) then -1
		else 0
	)
	qsort structs LookupTableComparator
	
	for i in structs do (
		local curr_st = i[1]
		local st_fn = i[2]; sort st_fn
		local st_pr = i[3]; sort st_pr
		local fn_str = "" as stringstream
		local pr_str = "" as stringstream
		
		if st_fn.count > 0 then (
			for f=1 to st_fn.count-1 do ( format "\"%\"," st_fn[f] to:fn_str )
			format "\"%\"" st_fn[st_fn.count] to:fn_str
		)
		if st_pr.count > 0 then ( 
			for f=1 to st_pr.count-1 do ( format "\"%\"," st_pr[f] to:pr_str )
			format "\"%\"" st_pr[st_pr.count] to:pr_str
		)
		local res = "" as stringstream
		format formatPattern curr_st (fn_str as string) (pr_str as string) to:res
		append result_st (res as string)
		
	)
	
	local result_string = ""
	for i=1 to result_st.count-1 do (
		result_string += result_st[i] + ",\n"
	)
	result_string += result_st[result_st.count]
	-- save to file....
		dump_file  = createFile ("D:\maxscript-structs-autocomp.json")
		format schema_pattern result_string to:dump_file
		close dump_file
	
)