(
-- 	local f = openFile @"D:\support.type.generic.maxscript.txt"
	local f = openFile @"D:\support.class.primitive.maxscript.txt"
	
	local how = #()
	/*
	local _Generic = #()
	local _BipedGeneric = #()
	local _NodeGeneric = #()
	local _MappedGeneric = #()
	local _UndefinedClass = #()
	local _NURBSGenericMethodsWrapper = #()
	local _CurveCtlGeneric = #()
	local _UserGeneric = #()
	local _Value = #()
-- 	*/
	seek f 0
	while not eof f do (
		local theline = readLine f
		local trim = trimRight (trimLeft theline)
		print ( trim)
		local _class =  try (classof (execute trim)) catch (undefined)
			
-- 		appendifUnique how _class
		/*	
		case _class of (
			Generic:(append _Generic trim )
			BipedGeneric:(append _BipedGeneric trim )
			NodeGeneric:(append _NodeGeneric trim )
			MappedGeneric:(append _MappedGeneric trim )
			UndefinedClass:(append _UndefinedClass trim )
			NURBSGenericMethodsWrapper:(append _NURBSGenericMethodsWrapper trim )
			CurveCtlGeneric:(append _CurveCtlGeneric trim )
			UserGeneric:(append _UserGeneric trim )
			Value:(append _Value trim )
		)
-- 		*/
		/*
		local clss = "" as stringStream
 		showClass (trim + "*.*") to:clss
		clss_str = clss as string
		if clss_str != "" then (
			print clss
		) else (
			print trim
		)
		*/
	)
	------------------------ END WHILE
	/*
	local todos = #(
		_Generic,
		_BipedGeneric,
		_NodeGeneric,
		_MappedGeneric,
		_UndefinedClass,
		_NURBSGenericMethodsWrapper,
		_CurveCtlGeneric,
		_UserGeneric,
		_Value
	)
-- 	*/
	/*
	local output_str = ""
	
	for i in todos do (
-- 		print i
		for f in i do output_str += f + "\n" 
		output_str += "\n"			
	)
	print output_str 
	*/
	print how
	
	
)