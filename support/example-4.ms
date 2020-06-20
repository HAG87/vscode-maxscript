/*
	Utility for changing the gamma value of bitmap texture maps. Intendet to be use on Normal Maps
	Note: this is a work-in-progress
	2020 - https://atelierbump.com
*/
(
    -------------------------------------------------CONFIGURATION
    -- RENDERER PRESETS. ADD YOUR OWN FOLOWING THE SAME PATTERN
	struct _std
	(
		mat_filter_class   = PhysicalMaterial,
		bitmap_filter      = #bump_map,
		renderer_normalmap = #(#(Normal_Bump, #normal_map)),
		rndrBitmapTexture   = #()
	)
	struct _Arnold
	(
		mat_filter_class   = ai_standard_surface,
		bitmap_filter      = #normal_shader,
		renderer_normalmap = #(
			#(ai_normal_map, #normal_shader),
			#(ai_bump2d, #normal_shader),
			#(ai_bump3d, #normal_shader)
		),
		rndrBitmapTexture   = #()
	)
	struct _Vray
	(
		mat_filter_class   = VRayMtl,
		bitmap_filter      = #texmap_bump,
		renderer_normalmap = #(#(VRayNormalMap, #normal_map)),
		rndrBitmapTexture   = #(VRayHDRI, #gamma)
	)
	struct _Corona
	(
		mat_filter_class   = CoronaMtl,
		bitmap_filter      = #texmapBump,
		renderer_normalmap = #(#(CoronaNormal, #normalMap)),
		rndrBitmapTexture   = #(CoronaBitmap, #gamma)
	)
	/*
	-- EXAMPLE: ADD SUPPORT FOR OTHER RENDERER
	struct _Your_own
	(
		-- Class of the shader
		mat_filter_class   = Material_Class,
		-- Shader bump/normal property name
		bitmap_filter      = #texmap_Bump_Property,
		-- renderer specific bump/normal map class and property for the normal texturemap.
		-- this can be more than one. i.e: look for Arnold implementation
		renderer_normalmap = #(#(Shader_Normal_Map, #normal_Map_Property)),
		-- renderer specific textureMap implementation and gamma property. Must be a float value
		rndrBitmapTexture   = #(Renderer_Bitmap, #gamma_property_float)
	)
	-- */
	-- ENABLE - DISABLE RENDER ENGINES, ADD YOUR OWN HERE
	local RENDER_ENGINES_OPT =
	#(
		--	#("Your_own", _Your_own),
		#("Physical Material", _std),
		#("Arnold", _Arnold),
		#("Vray", _Vray),
		#("Corona", _Corona)
	)
    -----------------------------------------------------------------
	-- MAIN CODE -- DO NOT MODIFY!
	-- change bitmap gamma
	fn changeBmpGamma bmpTxt gammavalue:1.0 =
	(
		try (
			local curr_bitmap = bmpTxt.bitmap
			local new_bitmap = openBitMap curr_bitmap.filename gamma:gammavalue channels:curr_bitmap.channels
			setproperty bmpTxt #bitmap new_bitmap
		) catch (
			format "Conversion error: %\m" (getCurrentException())
		)
	)
	-- search function.
	-- src parameter is the struct with the render engine parameters
	-- if "mats" is unsupplied it defaults to scene materials
    fn reassignMaps src _gamma:1.0 mats:unsupplied =
    (
		-- format "%\n" src
		-- get the material collection
        local mat_loop = if mats == unsupplied then sceneMaterials else mats
		-- handle Multimaterial and filter collection to valid material class
		local actual_mat_list = #()
		
		for mat in mat_loop do (
			-- single materials
			if (isKindOf mat src.mat_filter_class) then (
				append actual_mat_list mat
			) else if (isKindOf mat Multimaterial) then (
				local multimat_childerns =
				for i in mat where (isKindOf i src.mat_filter_class) collect i
				join actual_mat_list multimat_childerns
			)
		)
		-- cleanup
		makeUniqueArray actual_mat_list
		
        -- change the properties
        for mat in actual_mat_list where (isKindOf mat src.mat_filter_class) do (

			format "material: %\n"  mat

            -- check for shader bitmap
            if (isProperty mat src.bitmap_filter) then (
                local texturenode = getProperty mat src.bitmap_filter

				format "property: %\n" texturenode

                -- property must not be undefined
                if (texturenode != undefined) then (
					-- check for Bitmaptexture
					if (ClassOf texturenode == Bitmaptexture) then
					(
						-- CASE_A: standard bitmaptexture
						changeBmpGamma texturenode gammavalue:_gamma
					)
					else
					(
						-- CASE_B: renderer-specific normalMap. This generally implements some sort of a direct gamma property
						for i in src.renderer_normalmap do (
							if ClassOf texturenode == i[1] then (
								-- get the normalMap property
								local thebitmap = getProperty texturenode i[2]
								if ClassOf thebitmap == Bitmaptexture then (
									-- CASE_B_1: standard bitmap
									changeBmpGamma thebitmap gammavalue:_gamma
								) else (
									-- CASE_B_2: render specific bitmap
									if src.rndrBitmapTexture.count > 1 then (
										if ClassOf thebitmap == src.rndrBitmapTexture[1] then (
											-- set the new gamma value
											-- this works only for float values
											if (isKindOf (getProperty thebitmap src.rndrBitmapTexture[2]) float) then (
												setProperty thebitmap src.rndrBitmapTexture[2] _gamma
											)
										)
									)
								)
							)
						)
					)
                )
            )
-- 			format "-----------\n"
        )
    )
	-------------------------------------------------UI
	rollout roll_normalGamma "Change Normal Maps gamma"
	(
		group  "Operate on"
		(
			radiobuttons rd_1 "" labels:#("Scene materials", "Material editor slots", "Selection") align:#left
		)
		spinner spn_1 "Gamma value: " type:#float range:[-100.0,100.0,1.0] align:#left
		label lbl_1 "Render engine" align:#left
		Dropdownlist cb_renders ""
		label lbl_2 "WARNING!!!\nTHIS OPERATION\nCAN'T BE UNDONE" height:40 align:#left
		button btn_change "Change values" height:30
		on roll_normalGamma open do
		(
			-- load render engines
			cb_renders.items = for i in RENDER_ENGINES_OPT collect i[1]
			-- tooltip
			btn_change.tooltip = "If you know some scripting,\nyou can edit this script to add more render engine options.\nLook for the file: "+(getThisScriptFilename())
		)
		on btn_change pressed do (
			-- material collection
			local mats_col =
			case rd_1.state of
			(
				0: (unsupplied)
				1: (unsupplied)
				2: (meditMaterials)
				3: (for i in (getCurrentSelection()) where i.material != undefined collect i.material)
			)
			-- renderer
			local selected_renderer = RENDER_ENGINES_OPT[cb_renders.selection][2]
			selected_renderer = selected_renderer()
			-- execute
			-- single materials
			reassignMaps selected_renderer _gamma:spn_1.value mats:mats_col
			-- multi-materials?
		)
	)
    -------------------------------------------------EXECUTION - MAUNAL - AUTOMATED IMPLEMENTATION
    -- default gamma value to apply
    local _gamma_ = 1.0 -- 2.2
	-----------------------------------------------------------------
	-- change maps gamma on scene materials
	-- set the render engine preset.
	/*
		reassignMaps _Corona _gamma:_gamma_
	-- */
	-------------------------------------------------
	-- change maps in node selection material's
	/*
	local selection_materials =
	(
		local sel = getCurrentSelection()
		for i in sel where i.material != undefined collect i.material
	)
	-- set the render engine preset.
	reassignMaps _Corona mats:selection_materials _gamma:_gamma_
	-- */
	------------------------------------------------- UI IMPLEMENTATION
	-- /*
	try (DestroyDialog roll_normalGamma) catch ()
	CreateDialog roll_normalGamma
	-- */
)