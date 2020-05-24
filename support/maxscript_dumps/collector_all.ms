(
/**
	Start the comment with two **
	for a decorated comment

	Some values and keywords will be highlighted:
	local var
	12345.6
	"a string"

	Decorations:
	_bold text_
	__underline text__

	This text | has escaped _comment_ style | on it.
	#name
	anotate _function_ parameters: @param valuename

	todo: point here things to do
	fixme: point here things to fix
*/

	local PROPS = "" as stringstream
	apropos "" to:PROPS
	local structs = #()
	local functions = #()
	local _primitive = #("Primitive")
	local _MAXClass = #("MAXClass")
	local _Generic = #("Generic")
	local _Interface = #("Interface")
	local _class = #("Class")
	local _UndefinedClass_excluded = #()
	local _UndefinedClass = #("UndefinedClass")
	local _MAXSuperClass = #("MAXSuperClass")
	local _ObjectSet = #("ObjectSet")
	local _constant = #("Constant")
	local _MAXScriptFunction = #("MAXScriptFunction")
	local _internal = #("\\<internal\\>")

	local _system = #()

	local SystemValues = #("SystemValues")

	local other = #()
	local other_fn = #()
	local other_primitive = #()
	local the_rest = #()

	local ops = #()

	seek PROPS 0
	while not eof PROPS do (
		local theLine = readLine PROPS
		if (matchPattern theLine pattern:"*#struct*") then (
			local s = #((filterString theLine " ")[1])
			--------------------------------------------------
			append structs ((filterString theLine " ")[1])
			--------------------------------------------------
			theLine = readLine PROPS
			local f = #()
			while (matchPattern theLine pattern:"*Public*") do (
				local _f = (trimLeft (filterString theLine ":")[1])
				if _f.count > 1 then (append f _f)
				theLine = readLine PROPS
			)
			if f.count > 1 then append s f
			--------------------------------------------------
-- 			append structs s
			--------------------------------------------------
		) else if (matchPattern theLine pattern:"*(const *") then (
-- 			print theLine
			-- not good perfomance-wise, but easy to read...
			case of (
				(matchPattern theLine pattern:"*Primitive*"): (
					local l = (filterString theLine " ")[1]
					if l[1] != "%" then append _primitive l else append ops l
				)
				(matchPattern theLine pattern:"* Class*"): (append _Class (filterString theLine " ")[1])
				(matchPattern theLine pattern:"*MAXSuperClass*"): (append _MAXSuperClass (filterString theLine " ")[1])
				(matchPattern theLine pattern:"*MAXClass*"): (append _MAXClass (filterString theLine " ")[1])
				(matchPattern theLine pattern:"*Generic*"): (
					local l = (filterString theLine " ")[1]
					if l[1] != "%" then append _Generic l else append ops l
				)
				(matchPattern theLine pattern:"*Interface*"): (append _Interface (filterString theLine " ")[1])
				(matchPattern theLine pattern:"*UndefinedClass*"): (append _UndefinedClass_excluded (filterString theLine " ")[1])
				(matchPattern theLine pattern:"*ObjectSet*"): (append _ObjectSet (filterString theLine " ")[1])
				default: (append _constant (filterString theLine " ")[1])
			)
		) else (
			case of (
				(matchPattern theLine pattern:"*MAXScriptFunction*"): (append _MAXScriptFunction (filterString theLine " ")[1])
				(matchPattern theLine pattern:"*system *"): (
					if not matchPattern theLine pattern:"*.*" then append _system (filterString theLine " ")[1]
					)
				(matchPattern theLine pattern:"*Primitive*"): (append other_primitive (filterString theLine " ")[1])
				(matchPattern theLine pattern:"*UndefinedClass*"): (append _UndefinedClass (filterString theLine " ")[1])
				(matchPattern theLine pattern:"*<internal>*"): (append _internal (filterString theLine " ")[1])
				default: append other theLine
			)
		)
	)
	for i=1 to other.count do (
		local current = other[i]

		if (matchPattern current pattern:"*(*)*") and not (matchPattern current pattern:"*=*") then (
			local f = filterString current " "
			local theK = ""
			if f[1].count <= 1 then (
				local v = 1
				while v < f.count do (
					if f[v].count > 1 then (
						theK = f[v]
						v = f.count + 1
					) else v += 1
				)
			) else theK = f[1]
			theK = substituteString (substituteString theK "." @"\\.") "\"" ""
			theK = substituteString (substituteString theK ")" "") "(" ""
			if theK.count > 3 then append SystemValues theK
		) else if (matchPattern current pattern:"*<fn>*") then (
			append other_fn (filterString current " ")[1]
		) else append the_rest current
	)
	------------------------------------------------------------------------------------------------- GENERATE KEYWORDS PATTERN
	fn nested_nameParser col formatpattern:@"(?i)\\b(%)(?!\\s*:)\\b"  =
	(
		local res = #()	--"" as stringstream
		for i=1 to col.count do (
-- 			format "%\n" col[i]
			local curr_s = col[i]
			local s = curr_s[1]
			local fns = curr_s[2]
-- 			format "%\n" fns
			if fns != undefined then (
				local s_stream = "" as stringstream
				local f_stream = "" as stringstream
				for ff=1 to fns.count do (
					local kw = trimLeft (trimRight (fns[ff]))
					if kw != "" then (append f_stream (if ff < fns.count then kw + "|" else kw))
				)
				format "(%)\\\.?(%)?" s (f_stream as string) to:s_stream
				append res (s_stream as string)
			) else append res (trimLeft (trimRight s))
-- 			format "%\n" res[i]
		)
		local res_stream = "" as stringstream
		for r=1 to res.count do (
			append res_stream (if r < res.count then res[r] + "|" else res[r])
		)
		local result = "" as stringstream
		format formatpattern (res_stream as string) to:result
		result as string
	)
	fn nameParser col formatpattern:@"(?i)\\b(%)\\b(?!\\s*:)"  =
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
	--	nameParser structs
	------------------------------------------------------------------------------------------------- DUMP TO FILE
	local _names = #(
		--"support.type.StructDef.maxscript",
-- 		"support.other.primitive.maxscript",
-- 		"support.class.MAXClass.maxscript",
-- 		"support.type.generic.maxscript",
-- 		"support.type.Interface.maxscript",
-- 		"support.class.primitive.maxscript",
		"support.class.UndefinedClass.maxscript"
-- 		"support.class.MAXSuperClass.maxscript",
-- 		"support.variable.ObjectSet.maxscript",
-- 		"support.constant.maxscript",
-- 		"support.function.MAXScriptFunction.maxscript",
-- 		"support.other.internal.maxscript",
-- 		"support.constant.system.maxscript",
-- 		"support.variable.system.maxscript"
	)
	local theKeywords = #(
		--structs,
-- 		_primitive,
-- 		_MAXClass,
-- 		_Generic,
-- 		_Interface,
-- 		_class,
		_UndefinedClass_excluded
-- 		_MAXSuperClass,
-- 		_ObjectSet,
-- 		_constant,
-- 		_MAXScriptFunction,
-- 		_internal,
-- 		SystemValues,
-- 		_system
	)
-- 	print _MAXClass


/*
	local dump_result = "" as stringstream
	keywordpattern _names[5] (nameParser theKeywords[5]) dump_result
	print dump_result
-- 	*/
-- 	print (theKeywords[5].count as string)
-- 	for i in theKeywords do format "%\n" i
/*
	local dump_result = "" as stringstream
	keywordpattern _names[1] (nested_nameParser theKeywords[1]) dump_result
	dump_file  = createFile "D:\maxscript-terms-dump_1.json"; close dump_file
-- 	*/
-- 	/*

	fn LookupTableComparator a b = (
		if (toLower a) > (toLower b) then 1
		else if (toLower a) < (toLower b) then -1
		else 0
	)


 	for i=1 to _names.count do (

		local dump_result = "" as stringstream

-- 		keywordpattern _names[i] (nameParser theKeywords[i]) dump_result
		qsort theKeywords[i] LookupTableComparator
		for t=1 to theKeywords[i].count do format "%\n" theKeywords[i][t] to:dump_result

		dump_file  = createFile ("D:/" + _names[i] + ".txt")
-- 		dump_file  = createFile ("D:\maxscript-terms-dump_" +  _names[i] + ".json")

		format "%" (dump_result as string) to:dump_file
		close dump_file
	)
-- 	*/
)

