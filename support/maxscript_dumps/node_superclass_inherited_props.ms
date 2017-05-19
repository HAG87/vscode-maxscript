(
	local super_props = getPropNames node
	local props_string = "\n"
	for i in super_props do (
		props_string += (i as string) + "\n"
	)
	props_string
)
