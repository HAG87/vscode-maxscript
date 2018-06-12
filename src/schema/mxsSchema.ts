import { CompletionItemKind } from 'vscode';

export const maxcompletion = [
	{
		name: 'Structs',
		desc: 'Max StructDef',
		kind: CompletionItemKind.Struct,
		api: [
			{
				name: 'AssertReporter',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'GetAssertFailures', 'GetAssertFailuresCount', 'GetExceptionFailures', 'GetExceptionFailuresCount', 'GetMessages', 'GetUserData', 'LogAssertFailure', 'LogException', 'LogMessage', 'SetUserData', 'clear'
					]
				}
			},
			{
				name: 'assetBrowser',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'gotoURL', 'open'
					]
				}
			},
			{
				name: 'AssetMetadata_StructDef',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'assetId', 'filename', 'resolvedFilename', 'type'
					]
				}
			},
			{
				name: 'AttachCtrl',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'addNewKey', 'getKey', 'update'
					]
				}
			},
			{
				name: 'autoBackup',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'enabled', 'time'
					]
				}
			},
			{
				name: 'BezierDefaultParams',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'inTangentType', 'outTangentType'
					]
				}
			},
			{
				name: 'biped',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'RetargetToBaseLayer', 'RetargetToReferenceBiped', 'addFootprint', 'addMultipleFootprints', 'addNewKey', 'addPrefClip', 'adjustTalentPose', 'attachXtra', 'bendFootprints', 'clearAllAnimation', 'clearPrefClips', 'clearSelectedAnimation', 'collapseAllPosSubAnims', 'collapseAllRotSubAnims', 'collapseAtLayer', 'collapseMoveAllMode', 'collapsePosSubAnims', 'collapseRotSubAnims', 'convertFromBuffer', 'convertToFootSteps', 'convertToFreeForm', 'copyBipPose', 'copyBipPosture', 'copyBipTrack', 'copyPosture', 'createCopyCollection', 'createLayer', 'createNew', 'createPosSubAnims', 'createRotSubAnims', 'createScaleSubAnims', 'createTwistPose', 'createXtra', 'createXtraOpposite', 'deleteAllCopies', 'deleteAllCopyCollections', 'deleteCopy', 'deleteCopyCollection', 'deleteKeys', 'deleteLayer', 'deletePrefClip', 'deleteTwistPose', 'deleteXtra', 'deselectKeys', 'displayPrefsDlg', 'doSetMultipleKeysDlg', 'getClavicleVals', 'getClipAtTime', 'getCopyCollection', 'getCopyName', 'getCurrentClip', 'getCurrentLayer', 'getCurrentRange', 'getEulerActive', 'getEulerOrder', 'getFingerVal', 'getHingeVal', 'getHorizontalControl', 'getHorseAnkleVal', 'getIKActive', 'getIdLink', 'getKey', 'getLayerActive', 'getLayerName', 'getLimbRetargetState', 'getMultipleFSParams', 'getNode', 'getParentNodePos', 'getParentNodeRot', 'getPelvisVal', 'getPosParentNode', 'getPrefClip', 'getPrefClipProb', 'getRetargetRefBip', 'getRotParentNode', 'getTransform', 'getTurnControl', 'getTwistPoseBias', 'getTwistPoseName', 'getTwistPoseTwist', 'getTwistStartId', 'getVerticalControl', 'getXtraName', 'getXtraOpposite', 'isPrefClip', 'loadBipFile', 'loadBipFileDlg', 'loadBipedAnimationLayer', 'loadBipedBaseAnimationLayer', 'loadCopyPasteFile', 'loadFigFile', 'loadFigJustTwists', 'loadFigNoTwists', 'loadMocapFile', 'loadStpFile', 'maxNumLinks', 'maxNumNodes', 'maxTwistLinks', 'maxTwistNodes', 'mirror', 'mirrorInPlace', 'moveKeys', 'multipleFSDlg', 'newFootprintKeys', 'numCopies', 'numCopyCollections', 'numLayers', 'numPrefClips', 'numTwistPoses', 'pasteBipPose', 'pasteBipPosture', 'pasteBipTrack', 'pasteFromBuffer', 'pastePosture', 'pastePostureToXtras', 'pasteTrackToXtras', 'resetAllLimbKeys', 'saveBipFile', 'saveBipFileDlg', 'saveBipFileSegment', 'saveBipedAnimationLayer', 'saveBipedBaseAnimationLayer', 'saveCopyPasteFile', 'saveFigFile', 'saveStpFile', 'saveTalentFigFile', 'saveTalentPoseFile', 'scaleFootprints', 'selectKeys', 'setCopyName', 'setCurrentCopyCollection', 'setCurrentLayer', 'setDefaultTwistPoses', 'setEulerActive', 'setEulerOrder', 'setFreeKey', 'setKey', 'setLayerActive', 'setLayerName', 'setLimbRetargetState', 'setMultipleKeys', 'setPlantedKey', 'setPosSubAnim', 'setQuaternionActive', 'setRetargetRefBip', 'setRotSubAnim', 'setScaleSubAnim', 'setSelectedKey', 'setSlidingKey', 'setSnapKey', 'setTransform', 'setTwistPose', 'setTwistPoseBias', 'setTwistPoseName', 'setTwistPoseTwist', 'setXtraName', 'smoothTwist', 'unifyMotion', 'zeroAll', 'zeroTwist'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: 'fsAddSide'
					
				}
			},
			{
				name: 'bit',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'and', 'charAsInt', 'doubleAsInt64', 'flip', 'floatAsInt', 'get', 'hexAsInt', 'int64AsDouble', 'intAsChar', 'intAsFloat', 'intAsHex', 'isFinite', 'isNAN', 'not', 'or', 'set', 'shift', 'swapBytes', 'xor'
					]
				}
			},
			{
				name: 'boolObj',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'GetBoolCutType', 'GetBoolOp', 'GetDisplayResult', 'GetOperandSel', 'GetOptimize', 'GetShowHiddenOps', 'GetUpdateMode', 'SetBoolCutType', 'SetBoolOp', 'SetDisplayResult', 'SetOperandSel', 'SetOptimize', 'SetShowHiddenOps', 'SetUpdateMode', 'createBooleanObject', 'setOperandB'
					]
				}
			},
			{
				name: 'cacheOps',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'ClearChannel', 'DisableBelow', 'EnableBelow', 'RecordCache', 'SetChannel', 'Unload', 'reload'
					]
				}
			},
			{
				name: 'callbacks',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'addScript', 'broadcastCallback', 'notificationParam', 'removeScripts', 'show'
					]
				}
			},
			{
				name: 'cameraFOV',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'CurFOVtoFOV', 'FOVtoCurFOV', 'FOVtoMM', 'MMtoFOV'
					]
				}
			},
			{
				name: 'CAT_ParamBlock',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'OrigName', 'default', 'name', 'type', 'ui'
					]
				}
			},
			{
				name: 'CAT_UIItem',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'Array', 'align', 'alpha', 'checked', 'color', 'default', 'enabled', 'height', 'highlightColor', 'items', 'labelOnTop', 'name', 'offset', 'orient', 'range', 'string', 'ticks', 'type', 'ui', 'width'
					]
				}
			},
			{
				name: 'CAT_UIItem2',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'Array', 'align', 'alpha', 'checked', 'color', 'default', 'enabled', 'height', 'highlightColor', 'items', 'labelOnTop', 'name', 'offset', 'orient', 'pos', 'range', 'string', 'ticks', 'type', 'ui', 'width'
					]
				}
			},
			{
				name: 'CINCfg',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'BlackPoint', 'WhitePoint'
					]
				}
			},
			{
				name: 'ControlValLookup_struct',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'ControlToParamFn', 'ParamToControlFn'
					]
				}
			},
			{
				name: 'crowds',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'alignObjects', 'assignControllers', 'assignGridProximityPriorities', 'assignObjectProximityPriorities', 'assignRandomPriorities', 'assignUniquePriorities', 'genclones', 'genlocations', 'genrotations', 'genscales', 'incrementPriorities', 'linkObjects', 'scatterall', 'smooth', 'solve'
					]
				}
			},
			{
				name: 'cui',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'GetDir', 'dockDialogBar', 'expertModeOff', 'expertModeOn', 'floatDialogBar', 'getConfigFile', 'getDockState', 'getExpertMode', 'loadConfig', 'registerDialogBar', 'saveConfig', 'saveConfigAs', 'setAppTitle', 'setConfigFile', 'showToolbar', 'unRegisterDialogBar'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: 'commandPanelOpen'
				}
			},
			{
				name: 'custAttributes',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'add', 'count', 'delete', 'deleteDef', 'get', 'getDef', 'getDefClass', 'getDefData', 'getDefInstances', 'getDefSource', 'getDefs', 'getOwner', 'getPBlockDefs', 'getSceneDefs', 'getSceneLoadVersionHandlingBehavior', 'getSceneMergeVersionHandlingBehavior', 'makeUnique', 'redefine', 'setDefData', 'setLimits', 'setSceneLoadVersionHandlingBehavior', 'setSceneMergeVersionHandlingBehavior'
					]
				}
			},
			{
				name: 'cwschannel',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'index', 'keys', 'value'
					]
				}
			},
			{
				name: 'cwscomposite',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'name', 'objects'
					]
				}
			},
			{
				name: 'cwskey',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'frame', 'value'
					]
				}
			},
			{
				name: 'cwsobject',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'channels', 'hinge', 'isVisible', 'kind', 'name', 'operator', 'order', 'parent', 'stencil', 'target'
					]
				}
			},
			{
				name: 'cwsoperator',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'channels', 'class', 'name'
					]
				}
			},
			{
				name: 'delegates',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'ComputingBiped', 'bboxDisplay', 'isAssignmentActive', 'isComputing', 'lineDisplay', 'prevVelocity', 'reactToMe', 'simTransform', 'speed', 'sphereDisplay', 'startVelocity', 'textDisplay', 'velocity'
					]
				}
			},
			{
				name: 'displayColor',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'shaded', 'wireFrame'
					]
				}
			},
			{
				name: 'DOF',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'addCam', 'addFocalNode', 'deleteCam', 'deleteCamByName', 'deleteFocalNode', 'deleteFocalNodeByName'
					]
				}
			},
			{
				name: 'DontShowAgainDialog',
				function: {
					kind: CompletionItemKind.Method,
					name: 'DoDialog'
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'default', 'messageStr', 'notAgain', 'retval', 'titleStr'
					]
				}
			},
			{
				name: 'dotNet',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'ValueToDotNetObject', 'addEventHandler', 'combineEnums', 'compareEnums', 'getType', 'loadAssembly', 'loadIcon', 'removeAllEventHandlers', 'removeEventHandler', 'removeEventHandlers', 'setLifetimeControl', 'showConstructors'
					]
				}
			},
			{
				name: 'envEffectsDialog',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'close', 'isOpen', 'open'
					]
				}
			},
			{
				name: 'fileProperties',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'addProperty', 'deleteProperty', 'findProperty', 'getItems', 'getNumProperties', 'getPropertyName', 'getPropertyValue'
					]
				}
			},
			{
				name: 'Filters',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'Are_Modifiers_Applied', 'CanSwitchTo_Border', 'CanSwitchTo_Edge', 'CanSwitchTo_Element', 'CanSwitchTo_Face', 'CanSwitchTo_Patch', 'CanSwitchTo_Polygon', 'CanSwitchTo_Segment', 'CanSwitchTo_Spline', 'CanSwitchTo_Vertex', 'GetBaseObjectProperty', 'GetModOrObj', 'HasBaseObjectProperty', 'Is_Bone', 'Is_Camera', 'Is_EPoly', 'Is_EPolySpecifyLevel', 'Is_EPoly_SliceMode', 'Is_EditMesh', 'Is_EditMeshSpecifyLevel', 'Is_EditPatch', 'Is_EditPatchSpecifyLevel', 'Is_EditPoly', 'Is_EditPolyMod', 'Is_EditPolyModSpecifyLevel', 'Is_EditPolySpecifyLevel', 'Is_EditSpline', 'Is_EditSplineSpecifyLevel', 'Is_Grid', 'Is_IKChain', 'Is_Light', 'Is_MeshSelect', 'Is_NURBS', 'Is_PatchSelect', 'Is_Point', 'Is_PolySelect', 'Is_PosXYZ', 'Is_RotationXYZ', 'Is_ScaleXYZ', 'Is_SplineSelect', 'Is_Target', 'Is_This_EPoly', 'Is_This_EditPolyMod', 'Is_This_EditPolyObj', 'SetBaseObjectProperty', 'ToggleBaseObjectProperty', 'is_Child', 'is_Parent'
					]
				}
			},
			{
				name: 'flexOps',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'ClearEdgeVertices', 'GetNumberVertices', 'GetVertexWeight', 'SelectVertices', 'SetEdgeVertices', 'SetVertexWeights', 'isEdgeVertex'
					]
				}
			},
			{
				name: 'globalMotionClipOps',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'loadfile', 'savefile', 'synthesize'
					]
				}
			},
			{
				name: 'globalVars',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'gather', 'get', 'getTypeTag', 'getValueTag', 'isGlobal', 'remove', 'set'
					]
				}
			},
			{
				name: 'gw',
				desc: 'Viewport drawing methods',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'GetCPDisp' },
						{ name: 'GetFocalDist' },
						{ name: 'GetPointOnCP' },
						{ name: 'GetVPWorldWidth' },
						{ name: 'IsPerspView' },
						{ name: 'MapCPToWorld' },
						{ name: 'NonScalingObjectSize' },
						{ name: 'SnapLength' },
						{ name: 'SnapPoint' },
						{ name: 'clearScreen' },
						{ name: 'endTriangles' },
						{ name: 'enlargeUpdateRect' },
						{ name: 'getDriverString' },
						{ name: 'getFlipped' },
						{ name: 'getHitherCoord' },
						{ name: 'getMaxLights' },
						{ name: 'getRndLimits' },
						{ name: 'getRndMode' },
						{ name: 'getSkipCount' },
						{ name: 'getTextExtent' },
						{ name: 'getUpdateRect' },
						{ name: 'getViewportDib' },
						{ name: 'getWinDepth' },
						{ name: 'getWinSizeX' },
						{ name: 'getWinSizeY' },
						{ name: 'getYonCoord' },
						{ name: 'hMarker' },
						{ name: 'hPolygon', desc:'Draw poligon for h device' },
						{ name: 'hPolyline' },
						{ name: 'hRect', desc:'Draw a rectangle for h device' },
						{ name: 'hText', desc:'Draw text for h device' },
						{ name: 'hTransPoint' },
						{ name: 'hTriStrip' },
						{ name: 'isPerspectiveView' },
						{ name: 'marker' },
						{ name: 'polygon' },
						{ name: 'polyline' },
						{ name: 'querySupport' },
						{ name: 'resetUpdateRect' },
						{ name: 'setColor' },
						{ name: 'setDirectXDisplayAllTriangle' },
						{ name: 'setPos' },
						{ name: 'setRndLimits' },
						{ name: 'setSkipCount' },
						{ name: 'setTransform' },
						{ name: 'startTriangles' },
						{ name: 'text' },
						{ name: 'transPoint' },
						{ name: 'triStrip' },
						{ name: 'triangle' },
						{ name: 'updateScreen' },
						{ name: 'wMarker' },
						{ name: 'wPolygon' },
						{ name: 'wPolyline' },
						{ name: 'wRect' },
						{ name: 'wText' },
						{ name: 'wTransPoint' },
						{ name: 'wTriStrip' }
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: 'dualPlane'
				}
			},
			{
				name: 'ik',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'getAxisActive', 'getAxisDamping', 'getAxisEase', 'getAxisLimit', 'getAxisMax', 'getAxisMin', 'getAxisPreferredAngle', 'getAxisSpring', 'getAxisSpringOn', 'getAxisSpringTension', 'getBindOrient', 'getBindPos', 'getEndTime', 'getIsTerminator', 'getIterations', 'getPinNode', 'getPosThreshold', 'getPrecedence', 'getRotThreshold', 'getStartTime', 'setAxisActive', 'setAxisDamping', 'setAxisEase', 'setAxisLimit', 'setAxisMax', 'setAxisMin', 'setAxisPreferredAngle', 'setAxisSpring', 'setAxisSpringOn', 'setAxisSpringTension', 'setBindOrient', 'setBindPos', 'setEndTime', 'setIsTerminator', 'setIterations', 'setPinNode', 'setPosThreshold', 'setPrecedence', 'setRotThreshold', 'setStartTime'
					]
				}
			},
			{
				name: 'ILayerManager',
				function: {
					kind: CompletionItemKind.Method,
					name: 'getLayerObject'
				}
			},
			{
				name: 'IMouseDragger',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'CalcVelocity', 'TestIndirectMode', 'onDragging', 'onEndDrag', 'onProceccing', 'onStartDrag'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'_aryContrail', '_bCurLButton', '_bInDragging', '_bIndirectMode', '_bPrevLButton', '_maxVel', '_nConSize', '_objDragged', '_objPos', '_pivotOffset'
					]
				}
			},
			{
				name: 'internet',
				function: {
					kind: CompletionItemKind.Method,
					name: 'checkConnection'
				}
			},
			{
				name: 'keyboard',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'altPressed', 'controlPressed', 'escPressed', 'shiftPressed'
					]
				}
			},
			{
				name: 'KeyVal_struct',
				function: {
					kind: CompletionItemKind.Method,
					name: 'comparator'
				},
				property: {
					kind: CompletionItemKind.Property,
					name: 'keyVal'
				}
			},
			{
				name: 'LE',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'addASec', 'addGlow', 'addLight', 'addLightNode', 'addMSec', 'addRay', 'addRing', 'addStar', 'addStreak', 'deleteElement', 'deleteElementByName', 'deleteLight', 'deleteLightByName', 'lightIndex', 'lightName', 'load', 'numLights', 'save'
					]
				}
			},
			{
				name: 'lightCreationToolStr',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'isCreatingLight', 'isTargeted', 'lightClass', 'lightHeight', 'lightObj', 'lightPropfn'
					]
				}
			},
			{
				name: 'LinkCtrl',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'addLink', 'deleteLink', 'getLinkCount', 'getLinkNode', 'getLinkTime', 'setLinkNode', 'setLinkTime'
					]
				}
			},
			{
				name: 'ListCtrl',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'getActive', 'getName', 'setActive', 'setName'
					]
				}
			},
			{
				name: 'listview',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'getIndent', 'hitTest', 'setIndent'
					]
				}
			},
			{
				name: 'ListViewOps',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'AddLvColumnHeader', 'AddLvItem', 'ClearColumns', 'ClearLvItems', 'DeleteLvItem', 'GetLvItemByname', 'GetLvItemCheck', 'GetLvItemCount', 'GetLvItemName', 'GetLvItems', 'GetLvSelection', 'GetLvSingleSelected', 'GetSelectedIndex', 'HighLightLvItem', 'InitImageList', 'IsIconFile', 'MXSColor_to_dotNetColor', 'SelectLvItem', 'SetFontStyle', 'SetForeColor', 'SetLvItemCheck', 'SetLvItemName', 'SetLvItemRowColor', 'dotNetColor_to_MXSColor', 'initListView', 'refreshListView'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'm_bStyle', 'm_bitmapClassType', 'm_dnColor', 'm_iconClassType'
					]
				}
			},
			{
				name: 'macros',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'edit', 'list', 'load', 'new', 'run'
					]
				}
			},
			{
				name: 'Main_Ribbon',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'AllAreClass', 'AllAreEditPatch', 'AllArePrimitives', 'AllAreSuperclass', 'AllChildrenSelectedRecursive', 'EscapeSOMode', 'FlipAllLights', 'IsPrimitive', 'IsValidGroupSelection'
					]
				}
			},
			{
				name: 'mapPaths',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'add', 'count', 'delete', 'get', 'getFullFilePath'
					]
				}
			},
			{
				name: 'MatEditor',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'close', 'isOpen', 'open'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: 'mode'
				}
			},
			{
				name: 'MCGParameterOps',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'AssetParamPickFile', 'AssetParamSetToolTip', 'FillInOneColTable', 'FloatA_AddToList', 'FloatA_Initialization', 'FloatA_InsertToList', 'FloatA_ParamPreInvoke', 'FloatA_RemoveFromList', 'FloatA_TabChanged', 'FloatA_TabSet', 'FloatA_UpdateSelected', 'GetSelectionIndices', 'INodeA_AddToList', 'INodeA_Initialization', 'INodeA_PreInvoke', 'INodeA_RemoveFromList', 'INodeA_TabChanged', 'INodeA_TabSet', 'INodePickingMethod', 'INodeToStringFunc', 'MakeNodeWrapper', 'OneColArrayParamPreInvoke', 'OneColParamsClose', 'OneColParamsOpen', 'StringParameterEdit', 'ToStringFunc', 'initListView'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'AddButtonText', 'ArrayParamValueText', 'InsertButtonText', 'NoAssetToolTipTest', 'NodeWrapperClass', 'ReinitSimButtonText', 'RemoveButtonText', 'UpdateButtonText'
					]
				}
			},
			{
				name: 'mcrUtils',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'IsCreating', 'ValidMod'
					]
				}
			},
			{
				name: 'meditUtilities',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'Set_PhysicalTemplate_ActiveMaterial_FromMaterialInMatlib', 'Set_mrArchTemplate_ActiveMaterial_FromMaterialInMatlib', 'getDefaultLibraryFile', 'getDefaultMaterial', 'getDefaultsFile', 'isMaterialInUse'
					]
				}
			},
			{
				name: 'meshop',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'applyUVWMap', 'attach', 'autoEdge', 'autosmooth', 'bevelFaces', 'breakVerts', 'buildMapFaces', 'chamferEdges', 'chamferVerts', 'cloneEdges', 'cloneFaces', 'cloneVerts', 'collapseEdges', 'collapseFaces', 'createPolygon', 'cut', 'defaultMapFaces', 'deleteEdges', 'deleteFaces', 'deleteIsoMapVerts', 'deleteIsoMapVertsAll', 'deleteIsoVerts', 'deleteMapVertSet', 'deleteVerts', 'detachFaces', 'detachVerts', 'divideEdge', 'divideEdges', 'divideFace', 'divideFaceByEdges', 'divideFaces', 'edgeTessellate', 'explodeAllFaces', 'explodeFaces', 'extrudeEdges', 'extrudeFaces', 'flipNormals', 'freeMapChannel', 'freeMapFaces', 'freeMapVerts', 'freeVAlphas', 'freeVData', 'freeVSelectWeights', 'freeVertCorners', 'freeVertWeights', 'getAffectBackfacing', 'getBaryCoords', 'getBubble', 'getDisplacementMapping', 'getEdgesReverseEdge', 'getEdgesUsingFace', 'getEdgesUsingVert', 'getElementsUsingFace', 'getExtrusionType', 'getFaceArea', 'getFaceCenter', 'getFaceRNormals', 'getFacesUsingEdge', 'getFacesUsingVert', 'getFalloff', 'getHiddenFaces', 'getHiddenVerts', 'getIgnoreBackfacing', 'getIgnoreVisEdges', 'getIsoMapVerts', 'getIsoVerts', 'getMapFace', 'getMapFacesUsingMapVert', 'getMapSupport', 'getMapVert', 'getMapVertsUsingMapFace', 'getNormalSize', 'getNumCPVVerts', 'getNumFaces', 'getNumMapFaces', 'getNumMapVerts', 'getNumMaps', 'getNumTVerts', 'getNumVDataChannels', 'getNumVerts', 'getOpenEdges', 'getPinch', 'getPlanarThreshold', 'getPolysUsingEdge', 'getPolysUsingFace', 'getPolysUsingVert', 'getSSEdgeDist', 'getSSUseEdgeDist', 'getSelByVertex', 'getShowFNormals', 'getShowVNormals', 'getSoftSel', 'getSplitMesh', 'getSubdivisionAngle', 'getSubdivisionDisplacement', 'getSubdivisionDistance', 'getSubdivisionEdge', 'getSubdivisionMaxLevels', 'getSubdivisionMaxTriangles', 'getSubdivisionMethod', 'getSubdivisionMinLevels', 'getSubdivisionSteps', 'getSubdivisionStyle', 'getSubdivisionView', 'getUIParam', 'getVAlpha', 'getVDataChannelSupport', 'getVDataValue', 'getVSelectWeight', 'getVert', 'getVertCorner', 'getVertWeight', 'getVertexAngles', 'getVertsByColor', 'getVertsUsedOnlyByFaces', 'getVertsUsingEdge', 'getVertsUsingFace', 'getWeldPixels', 'getWeldThreshold', 'makeFacesPlanar', 'makeMapPlanar', 'makeVertsPlanar', 'minVertexDistanceFrom', 'minVertexDistancesFrom', 'moveVert', 'moveVertsToPlane', 'optimize', 'removeDegenerateFaces', 'removeIllegalFaces', 'resetVAlphas', 'resetVSelectWeights', 'resetVertCorners', 'resetVertWeights', 'setAffectBackfacing', 'setBubble', 'setDisplacementMapping', 'setExtrusionType', 'setFaceAlpha', 'setFaceColor', 'setFalloff', 'setHiddenFaces', 'setHiddenVerts', 'setIgnoreBackfacing', 'setIgnoreVisEdges', 'setMapFace', 'setMapSupport', 'setMapVert', 'setNormalSize', 'setNumCPVVerts', 'setNumFaces', 'setNumMapFaces', 'setNumMapVerts', 'setNumMaps', 'setNumTVerts', 'setNumVDataChannels', 'setNumVerts', 'setPinch', 'setPlanarThreshold', 'setSSEdgeDist', 'setSSUseEdgeDist', 'setSelByVertex', 'setShowFNormals', 'setShowVNormals', 'setSoftSel', 'setSplitMesh', 'setSubdivisionAngle', 'setSubdivisionDisplacement', 'setSubdivisionDistance', 'setSubdivisionEdge', 'setSubdivisionMaxLevels', 'setSubdivisionMaxTriangles', 'setSubdivisionMethod', 'setSubdivisionMinLevels', 'setSubdivisionSteps', 'setSubdivisionStyle', 'setSubdivisionView', 'setUIParam', 'setVAlpha', 'setVDataChannelSupport', 'setVDataValue', 'setVSelectWeight', 'setVert', 'setVertAlpha', 'setVertColor', 'setVertCorner', 'setVertWeight', 'setWeldPixels', 'setWeldThreshold', 'slice', 'supportVAlphas', 'supportVSelectWeights', 'supportVertCorners', 'supportVertWeights', 'turnEdge', 'unifyNormals', 'weldVertSet', 'weldVertsByThreshold'
					]
				}
			},
			{
				name: 'meshOps',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'attachList', 'autoEdge', 'autosmooth', 'break', 'clearAllSG', 'collapse', 'createShapeFromEdges', 'delete', 'detach', 'explode', 'flipNormal', 'gridAlign', 'hide', 'invisibleEdge', 'makePlanar', 'removeIsolatedVerts', 'selectByColor', 'selectByID', 'selectBySG', 'selectOpenEdges', 'showNormal', 'slice', 'startAttach', 'startBevel', 'startChamfer', 'startCreate', 'startCut', 'startDivide', 'startExtrude', 'startFlipNormalMode', 'startSlicePlane', 'startTurn', 'startWeldTarget', 'tessellate', 'unhideAll', 'unifyNormal', 'viewAlign', 'visibleEdge', 'weld'
					]
				}
			},
			{
				name: 'mlpop_struct_populateObject',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'Properties', 'checked', 'disabled', 'fullname', 'id', 'linkedTargetObjectsList', 'mutationsList', 'name', 'node', 'type', 'version'
					]
				}
			},
			{
				name: 'mocap',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'loadParameters', 'saveParameters'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'SCALEFACTOR', 'allFilter', 'allSpacing', 'allTol', 'dispKnownMarkers', 'dispKnownMarkersType', 'dispPropMarkers', 'dispUnKnownMarkers', 'elbowOrient', 'endframe', 'footOrient', 'fsConversionMode', 'fsExtractionMode', 'fsExtractionTol', 'fsSlidingAngle', 'fsSlidingDist', 'fsUseFlatten', 'fsUseVerticalTol', 'fsVerticalTol', 'fsZLevel', 'handOrient', 'horzFilter', 'horzSpacing', 'horzTol', 'jointNameFile', 'kneeOrient', 'leftArmFilter', 'leftArmSpacing', 'leftArmTol', 'leftLegFilter', 'leftLegSpacing', 'leftLegTol', 'loop', 'loopFrameCount', 'markerNameFile', 'neckFilter', 'neckSpacing', 'neckTol', 'pelvisFilter', 'pelvisSpacing', 'pelvisTol', 'rightArmFilter', 'rightArmSpacing', 'rightArmTol', 'rightLegFilter', 'rightLegSpacing', 'rightLegTol', 'rotFilter', 'rotSpacing', 'rotTol', 'spineFilter', 'spineSpacing', 'spineTol', 'startframe', 'tailFilter', 'tailSpacing', 'tailTol', 'talentFigStrucFile', 'talentPoseAdjFile', 'upVector', 'useJointNameFile', 'useMarkerNameFile', 'useTalentFigStrucFile', 'useTalentPoseAdjFile', 'vertFilter', 'vertSpacing', 'vertTol'
					]
				}
			},
			{
				name: 'modPanel',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'addModToSelection', 'getCurrentObject', 'getModifierIndex', 'getPinStack', 'isPinStackEnabled', 'setCurrentObject', 'setPinStack', 'validModifier'
					]
				}
			},
			{
				name: 'mouse',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'buttonStates', 'inAbort', 'mode', 'pos', 'posUnscaled', 'screenpos', 'screenposUnscaled'
					]
				}
			},
			{
				name: 'mtlBrowser',
				function: {
					kind: CompletionItemKind.Method,
					name: 'browseFrom'
				}
			},
			{
				name: 'MultiEdit_ControlInfo_struct',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'controlItem', 'controlName', 'controlTooltip', 'controlValLookup', 'keyVal', 'paramIdent', 'paramValArray'
					]
				}
			},
			{
				name: 'NodeExposureInterface',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'create', 'get'
					]
				}
			},
			{
				name: 'ObjectPaintStruct',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'LoadDefaultSettings', 'MotionTypeCallback', 'ObjectPaintPickObject', 'OpenNodeDialog', 'SetSelectedObject', 'UseIndexCallback', 'UseObjectText'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'IsPickingObject', 'ListSelectedIndex', 'NodeDialogOpen', 'NodeNames', 'hasStartedSpacingButtonDown', 'nodeDialogPos', 'nodes'
					]
				}
			},
			{
				name: 'options',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'oldPrintStyles', 'printAllElements', 'showGCStatus'
					]
				}
			},
			{
				name: 'patch',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'addHook', 'addQuadPatch', 'addTriPatch', 'autosmooth', 'changePatchInteriorType', 'changeVertType', 'clonePatchParts', 'deletePatchParts', 'edgeNormal', 'flipPatchNormal', 'getAdaptive', 'getEdgeVec12', 'getEdgeVec21', 'getEdgeVert1', 'getEdgeVert2', 'getEdges', 'getMapPatch', 'getMapSupport', 'getMapVert', 'getMesh', 'getMeshSteps', 'getMeshStepsRender', 'getNumEdges', 'getNumMapVerts', 'getNumMaps', 'getNumPatches', 'getNumVecs', 'getNumVerts', 'getPatchInteriorType', 'getPatchMtlID', 'getPatchType', 'getPatches', 'getShowInterior', 'getVec', 'getVecPatches', 'getVecVert', 'getVectors', 'getVert', 'getVertEdges', 'getVertPatches', 'getVertType', 'getVertVecs', 'hookFixTopology', 'interpQuadPatch', 'interpTriPatch', 'makeQuadPatch', 'makeTriPatch', 'maxMapChannels', 'patchNormal', 'removeHook', 'setAdaptive', 'setMapPatch', 'setMapSupport', 'setMapVert', 'setMeshSteps', 'setMeshStepsRender', 'setNumEdges', 'setNumMapPatches', 'setNumMapVerts', 'setNumMaps', 'setNumPatches', 'setNumVecs', 'setNumVerts', 'setPatchMtlID', 'setShowInterior', 'setVec', 'setVert', 'subdivideEdges', 'subdividePatches', 'transform', 'unifyNormals', 'update', 'updateHooks', 'updatePatchNormals', 'weld2Verts', 'weldEdges', 'weldVerts'
					]
				}
			},
			{
				name: 'patchOps',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'addQuad', 'addTri', 'break', 'clearAllSG', 'createShapeFromEdges', 'delete', 'detach', 'flipNormal', 'growSelection', 'hide', 'patchSmooth', 'selectByID', 'selectBySG', 'selectEdgeLoop', 'selectEdgeRing', 'selectOpenEdges', 'shrinkSelection', 'startAttach', 'startBevel', 'startBind', 'startCopyTangent', 'startCreate', 'startExtrude', 'startFlipNormalMode', 'startPasteTangent', 'startWeldTarget', 'subdivide', 'toggleShadedFaces', 'unbind', 'unhideAll', 'unifyNormal', 'weld'
					]
				}
			},
			{
				name: 'pathConfig',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'GetDir', 'GetExchangeStorePlugInInstallPath', 'SaveTo', 'SetDir', 'addProjectDirectoryCreateFilter', 'appendPath', 'convertPathToAbsolute', 'convertPathToLowerCase', 'convertPathToRelativeTo', 'convertPathToUnc', 'doProjectSetupSteps', 'doProjectSetupStepsUsingDirectory', 'getCurrentProjectFolder', 'getCurrentProjectFolderPath', 'getProjectDirectoryCreateFilters', 'getProjectFolderPath', 'getProjectSubDirectory', 'getProjectSubDirectoryCount', 'isAbsolutePath', 'isLegalPath', 'isPathRootedAtBackslash', 'isPathRootedAtDriveLetter', 'isProjectFolder', 'isRootPath', 'isUncPath', 'isUncSharePath', 'isUsingProfileDirectories', 'isUsingRoamingProfiles', 'load', 'merge', 'normalizePath', 'pathsResolveEquivalent', 'removeAllProjectDirectoryCreateFilters', 'removePathLeaf', 'removePathTopParent', 'removeProjectDirectoryCreateFilter', 'resolvePathSymbols', 'setCurrentProjectFolder', 'stripPathToLeaf', 'stripPathToTopParent'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'mapPaths', 'pluginPaths', 'resolveUNC', 'sessionPaths', 'xrefPaths'
					]
				}
			},
			{
				name: 'pathConfig.mapPaths',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'add', 'count', 'delete', 'get', 'getFullFilePath'
					]
				}
			},
			{
				name: 'pathConfig.pluginPaths',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'count', 'get'
					]
				}
			},
			{
				name: 'pathConfig.sessionPaths',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'add', 'count', 'delete', 'get'
					]
				}
			},
			{
				name: 'pathConfig.xrefPaths',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'add', 'count', 'delete', 'get', 'getFullFilePath'
					]
				}
			},
			{
				name: 'persistents',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'gather', 'isPersistent', 'make', 'remove', 'removeAll', 'show'
					]
				}
			},
			{
				name: 'pluginPaths',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'count', 'get'
					]
				}
			},
			{
				name: 'pointCacheMan',
				function: {
					kind: CompletionItemKind.Method,
					name: 'GetMemoryUsed'
				}
			},
			{
				name: 'PolyBoostStruct',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'ActiveLoopRingMode', 'Clonefunc', 'ClothElement', 'ClothGetSelectVertices', 'ClothGrowShrink', 'ClothLoopRing', 'ClothNumberVertices', 'ClothSelectVertices', 'DotLoopSelect', 'EndAllTools', 'FindUnwrapfunc', 'FlowConnect', 'FlowDfunc', 'Flowfunc', 'FreeformApplySettings', 'FreeformLoadDefaultSettings', 'FreeformLoadSettings', 'FreeformSaveSettings', 'FreeformSetDefaultSettings', 'FreeformWriteSettings', 'GetSizefunc', 'HalfSelect', 'Hardfunc', 'InsertVertex', 'Insloopfunc', 'LoopSelect', 'Looptopofunc', 'ModeLoopRing', 'ModeStep', 'Modetext', 'NUMERICSELECT', 'NumericDfunc', 'ObjectPaintStart', 'PaintDeformPickFilter', 'PaintDeformPickNode', 'PasteSelection', 'Pastefunc', 'PerspectiveSelect', 'PolyDrawPickFilter', 'PolyDrawPickNode', 'PolyDrawStart', 'PolySculptStart', 'PolyShiftStart', 'Quadrify', 'RANDOMSELECT', 'RandDfunc', 'Randconfunc', 'RandomConnect', 'Resetxfunc', 'SetFlow', 'SetSizefunc', 'Simifunc', 'SimilarSelect', 'SkinElement', 'SkinGrow', 'SkinLoopRing', 'SkinShrink', 'SmartRotate', 'Smoothfunc', 'SolveSurface', 'SpinnerChange', 'StepLoopSelect', 'Stepfunc', 'StoreApply', 'Storefunc', 'SymmetryD', 'TextureRollout', 'Thirtyfunc', 'ToolToggle', 'TopsSelect', 'TransformRollout', 'UVWTweakStart', 'UV_ToUvfunc', 'UVtweakgo', 'createPolygon', 'topology', 'validClothmod', 'validEPbasemacro', 'validEPmacro', 'validSkinMod', 'validUV', 'validUV2', 'validUVlevel', 'validobjfunc'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'FlowSel', 'ModeRun', 'ModeSel', 'Modetype', 'PBo_Flowmainpos', 'PBo_SDmainpos', 'PBo_texturemain', 'PBo_texturemainpos', 'PBo_transmain', 'PBo_transmainpos', 'PaintDeformPicktext', 'PolyDrawPicktext', 'SelStorage1', 'SelStorage2', 'SelStorage3', 'SelectedObj', 'StepLast', 'StepRun', 'StepSel', 'SubLevel', 'SurfSelsel', 'TexWrapFile', 'TextureToolsOpen', 'TransformDialogOpen', 'ViewportCanvasOpen', 'vertexTicks'
					]
				}
			},
			{
				name: 'polyop',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'applyUVWMap', 'attach', 'autosmooth', 'bevelFaces', 'breakVerts', 'capHolesByEdge', 'capHolesByFace', 'capHolesByVert', 'chamferEdges', 'chamferVerts', 'checkTriangulation', 'collapseDeadStructs', 'collapseEdges', 'collapseFaces', 'collapseVerts', 'createEdge', 'createPolygon', 'createShape', 'createVert', 'cutEdge', 'cutFace', 'cutVert', 'defaultMapFaces', 'deleteEdges', 'deleteFaces', 'deleteIsoVerts', 'deleteVerts', 'detachEdges', 'detachFaces', 'detachVerts', 'divideEdge', 'divideFace', 'extrudeFaces', 'fillInMesh', 'flipNormals', 'forceSubdivision', 'freeEData', 'freeVData', 'getBorderFromEdge', 'getDeadEdges', 'getDeadFaces', 'getDeadVerts', 'getEDataChannelSupport', 'getEDataValue', 'getEdgeFaces', 'getEdgeFlags', 'getEdgeSelection', 'getEdgeVerts', 'getEdgeVis', 'getEdgesByFlag', 'getEdgesUsingFace', 'getEdgesUsingVert', 'getElementsUsingFace', 'getFaceArea', 'getFaceCenter', 'getFaceDeg', 'getFaceEdges', 'getFaceFlags', 'getFaceMatID', 'getFaceNormal', 'getFaceSelection', 'getFaceSmoothGroup', 'getFaceVerts', 'getFacesByFlag', 'getFacesUsingEdge', 'getFacesUsingVert', 'getHasDeadStructs', 'getHiddenFaces', 'getHiddenVerts', 'getMapFace', 'getMapSupport', 'getMapVert', 'getNumEDataChannels', 'getNumEdges', 'getNumFaces', 'getNumMapFaces', 'getNumMapVerts', 'getNumMaps', 'getNumVDataChannels', 'getNumVerts', 'getOpenEdges', 'getSafeFaceCenter', 'getSlicePlane', 'getVDataChannelSupport', 'getVDataValue', 'getVert', 'getVertFlags', 'getVertSelection', 'getVertsByColor', 'getVertsByFlag', 'getVertsUsedOnlyByFaces', 'getVertsUsingEdge', 'getVertsUsingFace', 'inSlicePlaneMode', 'isEdgeDead', 'isFaceDead', 'isMeshFilledIn', 'isVertDead', 'makeEdgesPlanar', 'makeFacesPlanar', 'makeVertsPlanar', 'meshSmoothByEdge', 'meshSmoothByFace', 'meshSmoothByVert', 'moveEdgesToPlane', 'moveFacesToPlane', 'moveVert', 'moveVertsToPlane', 'propagateFlags', 'resetEData', 'resetSlicePlane', 'resetVData', 'retriangulate', 'setDiagonal', 'setEDataChannelSupport', 'setEDataValue', 'setEdgeFlags', 'setEdgeSelection', 'setEdgeVis', 'setFaceColor', 'setFaceFlags', 'setFaceMatID', 'setFaceSelection', 'setFaceSmoothGroup', 'setHiddenFaces', 'setHiddenVerts', 'setMapFace', 'setMapSupport', 'setMapVert', 'setNumEDataChannels', 'setNumMapFaces', 'setNumMapVerts', 'setNumMaps', 'setNumVDataChannels', 'setSlicePlane', 'setVDataChannelSupport', 'setVDataValue', 'setVert', 'setVertColor', 'setVertFlags', 'setVertSelection', 'slice', 'splitEdges', 'tessellateByEdge', 'tessellateByFace', 'tessellateByVert', 'unHideAllFaces', 'unHideAllVerts', 'weldEdges', 'weldEdgesByThreshold', 'weldVerts', 'weldVertsByThreshold'
					]
				}
			},
			{
				name: 'polyOps',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'NamedSelCopy', 'NamedSelPaste', 'attachList', 'autosmooth', 'break', 'cap', 'clearAllSG', 'collapse', 'createShapeFromEdges', 'delete', 'detach', 'flipNormal', 'gridAlign', 'hide', 'makePlanar', 'meshsmooth', 'removeIsolatedVerts', 'resetPlane', 'retriangulate', 'selectByColor', 'selectByID', 'selectBySG', 'slice', 'split', 'startBevel', 'startChamferEdge', 'startChamferVertex', 'startCreateEdge', 'startCreateFace', 'startCreateVertex', 'startCutEdge', 'startCutFace', 'startCutVertex', 'startDivideEdge', 'startDivideFace', 'startEditTri', 'startExtrudeEdge', 'startExtrudeFace', 'startExtrudeVertex', 'startSlicePlane', 'startWeldTarget', 'tessellate', 'unhide', 'update', 'viewAlign', 'weld'
					]
				}
			},
			{
				name: 'PromptForNameHandler_struct',
				function: {
					kind: CompletionItemKind.Method,
					name: 'PromptForName'
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'PromptForNameRollout', 'initNameVal', 'initTitleVal', 'resultNameVal'
					]
				}
			},
			{
				name: 'px_multiedit_methods_struct',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'AddParamEntryToItems', 'AddParamEntryToRigidBodyList', 'ControlItemToKeyVal', 'ControlItemToKeyValStruct', 'ControlValToParamVal', 'GetControlInfo', 'GetFuncResultFromItems', 'GetFuncResultFromRigidBodyList', 'GetParamArrayFromItems', 'GetParamFromConstraintList', 'GetParamFromControl', 'GetParamFromControlItem', 'GetParamFromItems', 'GetParamFromRigidBodyList', 'GetParamPrimitiveFromItems', 'GetRolloutInfoList', 'GetSortKey', 'InitControlInfoList', 'InvokeFuncOnItems', 'InvokeFuncOnRigidBodyList', 'IsTabVisible', 'OnClose', 'OnOpen', 'OnSelectionSetChange', 'OnSwitchTabs', 'OnUndo', 'ParamValComparator', 'ParamValToControlVal', 'RemoveParamEntryFromItems', 'RemoveParamEntryFromRigidBodyList', 'SetControlToConstraintList', 'SetControlToItems', 'SetControlToRigidBodyList', 'SetParamToConstraintList', 'SetParamToControl', 'SetParamToItems', 'SetParamToRigidBodyList', 'SortedArrayToStringArray', 'UpdateUI_ConstraintLimitRollouts', 'UpdateUI_DefaultHandling_Constraint', 'UpdateUI_DefaultHandling_Items', 'UpdateUI_DefaultHandling_RigidBody', 'UpdateUI_MatListRollout', 'UpdateUI_MatRollout', 'UpdateUI_MeshRollout', 'UpdateUI_TabRollouts', 'Zero', 'updateUI'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'controlInfoListSorted', 'rolloutInfoList', 'showConstraintRollouts', 'showRigidBodyRollouts', 'tabIndex', 'tabIndexCur', 'tabItem', 'tabRolloutContainer', 'tabRollouts'
					]
				}
			},
			{
				name: 'pxNodeKeys',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'HaveKeys', 'ResetKeys', 'SaveKeys', 'init'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'inode', 'posTimes', 'posx', 'posy', 'posz', 'rotTimes', 'rotx', 'roty', 'rotz'
					]
				}
			},
			{
				name: 'refs',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'DependencyLoopTest', 'dependentNodes', 'dependents', 'dependsOn', 'getAddr', 'getIndirectReference', 'getNumIndirectRefs', 'getNumRefs', 'getReference', 'replaceReference', 'setIndirectReference'
					]
				}
			},
			{
				name: 'registry',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'closeKey', 'createKey', 'deleteKey', 'deleteSubKey', 'deleteValue', 'flushKey', 'getLastError', 'getParentKey', 'getSubKeyName', 'getSubKeyNames', 'getValueName', 'getValueNames', 'isKeyConstant', 'isKeyOpen', 'isParentKeyOpen', 'openKey', 'queryInfoKey', 'queryValue', 'setValue'
					]
				}
			},
			{
				name: 'RElement',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'file', 'kind', 'name', 'transferMode', 'visibility'
					]
				}
			},
			{
				name: 'renderers',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'ClearDraftRenderer', 'GetDraftRenderer'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'activeShade', 'current', 'medit', 'medit_locked', 'production', 'renderButtonText', 'renderDialogMode', 'target'
					]
				}
			},
			{
				name: 'renderSceneDialog',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'cancel', 'close', 'commit', 'isOpen', 'open', 'update'
					]
				}
			},
			{
				name: 'Ribbon_Modeling',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'ColorToPoint3', 'CurrentConstraintsIndex', 'DisplacementToggle', 'ESplineSubobjectSwitch', 'EditSoftSelectionMode', 'FindModifierIndex', 'GetCachedManagedServicesSceneUtilities', 'GetModifyButtonText', 'GetSOEnum', 'GetVertexColor', 'IsDisplacementOn', 'IsEdgeMode', 'IsEditPolyMode', 'IsEditSoftSelectionMode', 'IsEditablePoly', 'IsFaceMode', 'IsNURMSOn', 'IsPaintSSMode', 'IsSoftSelection', 'NURMSSepByMats', 'NURMSSepBySmoothingGroups', 'NURMSToggle', 'PaintDefaultDirection', 'PaintSSMode', 'Point3ToColor', 'SSToggle', 'SetVertexColor', 'SubObjectPanelTitle', 'SubobjectSwitch', 'ValidESplineSelection', 'ValidSOMode', 'ValidSelection', 'paintdeformmode', 'updateUI'
					]
				}
			},
			{
				name: 'rolloutCreator',
				property: {
					kind: CompletionItemKind.Property,
					name: 'sourceDefinitionScriptFilename'
				}
			},
			{
				name: 'RTT_methods_struct',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'CheckAllBakeElementOutputDirsExist', 'CheckAllBakeElementOutputFilesExist', 'ConvertFrameStringToFrames', 'FormatNumber', 'GetRenderFrames', 'GetRenderRegion', 'MakeBakeElementFileName', 'MakeBumpSlotInfoStruct', 'MakeFileNameValid', 'NetBakeNode', 'NetBakeNode_Render', 'UpdateBitmapFilenames', 'ValidateDirectory'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'_cached_RadiosityPreferences_computeRadiosity', '_debug', '_inNetRender', '_networkRender_BM'
					]
				}
			},
			{
				name: 's_rc2mxs',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'convertRC', 'dimStr', 'isContinuation'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'fac', 'fc', 'fltStr', 'rH', 'rW', 'rc'
					]
				}
			},
			{
				name: 'scanlineRender',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'antiAliasFilter', 'antiAliasFilterSize', 'antiAliasing', 'autoReflect', 'autoReflectLevels', 'colorClampType', 'conserveMemory', 'enablePixelSampler', 'enableSSE', 'filterMaps', 'forceWireframe', 'imageBlurDuration', 'imageBlurEnv', 'imageBlurTrans', 'imageMotionBlur', 'mapping', 'objectBlurDuration', 'objectBlurSamples', 'objectBlurSubdivisions', 'objectMotionBlur', 'shadows', 'wireThickness'
					]
				}
			},
			{
				name: 'schematicView',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'close', 'getSchematicViewName', 'numSchematicViews', 'open', 'zoomSelected'
					]
				}
			},
			{
				name: 'sessionPaths',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'add', 'count', 'delete', 'get'
					]
				}
			},
			{
				name: 'setKey',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'bufferPresent', 'commitBuffer', 'revertBuffer', 'subAnimBufferPresent', 'subAnimCommitBuffer', 'subAnimRevertBuffer'
					]
				}
			},
			{
				name: 'skinOps',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'AddBone', 'AddCrossSection', 'GetBoneIDByListID', 'GetBoneName', 'GetCrossSectionU', 'GetEndPoint', 'GetInnerRadius', 'GetListIDByBoneID', 'GetNumberBones', 'GetNumberCrossSections', 'GetNumberVertices', 'GetOuterRadius', 'GetSelectedBone', 'GetSelectedCrossSectionIndex', 'GetSelectedCrossSectionIsInner', 'GetStartPoint', 'GetVertexWeight', 'GetVertexWeightBoneID', 'GetVertexWeightCount', 'IsVertexModified', 'IsVertexSelected', 'RemoveBone', 'RemoveCrossSection', 'RemoveZeroWeights', 'ReplaceVertexWeights', 'SaveEnvelopeAsASCII', 'SelectBone', 'SelectVertices', 'SetCrossSectionU', 'SetEndPoint', 'SetInnerRadius', 'SetOuterRadius', 'SetSelectedCrossSection', 'SetStartPoint', 'SetVertexWeights', 'SetWeight', 'WeightTable', 'ZoomToBone', 'ZoomToGizmo', 'addBoneFromViewEnd', 'addBoneFromViewStart', 'addWeight', 'bakeSelectedVerts', 'blendSelected', 'buttonAdd', 'buttonAddCrossSection', 'buttonAddGizmo', 'buttonCopyGizmo', 'buttonExclude', 'buttonInclude', 'buttonPaint', 'buttonPasteGizmo', 'buttonRemove', 'buttonRemoveCrossSection', 'buttonRemoveGizmo', 'buttonSelectExcluded', 'buttonWeightTable', 'closeWeightTable', 'closeWeightTool', 'copySelectedBone', 'copyWeights', 'enableDQOverrideWeighting', 'enableGizmo', 'getBonePropEnvelopeVisible', 'getBonePropFalloff', 'getBonePropRelative', 'getNumberOfGizmoTypes', 'getNumberOfGizmos', 'getSelectedBonePropEnvelopeVisible', 'getSelectedBonePropFalloff', 'getSelectedBonePropRelative', 'getSelectedGizmo', 'getSelectedGizmoType', 'getVertexDQWeight', 'gizmoResetRotationPlane', 'growSelection', 'invalidate', 'isBoneSelected', 'isRigidHandle', 'isRigidVertex', 'isUnNormalizeVertex', 'isWeightTableOpen', 'isWeightToolOpen', 'loadEnvelope', 'loadEnvelopeAsASCII', 'loopSelection', 'mirrorPaste', 'mirrorPasteBone', 'multiRemove', 'paintOptionsButton', 'paintWeightsButton', 'pasteAllBones', 'pasteAllVerts', 'pasteToAllBones', 'pasteToBone', 'pasteToSelectedBone', 'pasteWeights', 'pasteWeightsByPos', 'resetAllBones', 'resetSelectedBone', 'resetSelectedVerts', 'rigidHandle', 'rigidVertex', 'ringSelection', 'saveEnvelope', 'scaleWeight', 'selectBoneByNode', 'selectChild', 'selectCrossSection', 'selectEndPoint', 'selectGizmo', 'selectGizmoType', 'selectMirrorBones', 'selectNextBone', 'selectNextSibling', 'selectParent', 'selectPreviousBone', 'selectPreviousSibling', 'selectStartPoint', 'selectVerticesByBone', 'setBonePropEnvelopeVisible', 'setBonePropFalloff', 'setBonePropRelative', 'setMirrorTM', 'setSelectedBonePropEnvelopeVisible', 'setSelectedBonePropFalloff', 'setSelectedBonePropRelative', 'setVertexDQWeight', 'shrinkSelection', 'unNormalizeVertex', 'updateMirror', 'voxelWeighting', 'weightTool'
					]
				}
			},
			{
				name: 'snapMode',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'getOSnapItemActive', 'getOSnapItemName', 'getOSnapItemToolTip', 'getOSnapName', 'getOSnapNumItems', 'setOSnapItemActive'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'OKForRelativeSnap', 'active', 'axisConstraint', 'display', 'displayRubberBand', 'flags', 'hilite', 'hit', 'hitPoint', 'markSize', 'node', 'numOSnaps', 'refPoint', 'screenHitPoint', 'screenHitPointUnscaled', 'snapPreviewRadius', 'snapRadius', 'strength', 'toFrozen', 'topRefPoint', 'type', 'useAxisCenterAsStartSnapPoint', 'worldHitpoint'
					]
				}
			},
			{
				name: 'Snaps',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'IsSnapActive', 'ToggleSnap'
					]
				}
			},
			{
				name: 'SortedArray_Struct',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'AddItem', 'DefaultComparator', 'FindIndex', 'SetIntersection', 'SetUnion', 'init'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'comparator', 'itemArray'
					]
				}
			},
			{
				name: 'splineOps',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'attachMultiple', 'close', 'cycle', 'delete', 'detach', 'divide', 'explode', 'fuse', 'hide', 'intersect', 'makeFirst', 'mirrorBoth', 'mirrorHoriz', 'mirrorVert', 'reverse', 'selectByID', 'startAttach', 'startBind', 'startBreak', 'startChamfer', 'startConnect', 'startCopyTangent', 'startCreateLine', 'startCrossInsert', 'startCrossSection', 'startExtend', 'startFillet', 'startInsert', 'startIntersect', 'startOutline', 'startPasteTangent', 'startRefine', 'startRefineConnect', 'startSubtract', 'startTrim', 'startUnion', 'unbind', 'unhideAll', 'weld'
					]
				}
			},
			{
				name: 'sxmlIO',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'CollectItemOfArray', 'Ctrl2xml', 'SubAnims2xml', 'array2xml', 'cas2xml', 'create', 'exec', 'getAddon', 'getAttribute', 'init', 'isAnimated', 'load', 'newAddOn', 'obj2xml', 'save', 'string2value', 'wire2xml', 'xml2cas', 'xml2ctrl', 'xml2obj', 'xml2subAnims'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'animatedOnly', 'class_of', 'create_time', 'exec_time', 'is_ik_ctrl', 'm_xmlDoc', 'no_key_frames', 'sclass_of', 'tmc_class', 'wireParams', 'world', 'xmlCtrlDoc', 'xmlCtrlDocName'
					]
				}
			},
			{
				name: 'symbolicPaths',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'addUserPath', 'expandFileName', 'getPathName', 'getPathValue', 'getUserPathName', 'getUserPathValue', 'isPathName', 'isUserPathName', 'numPaths', 'numUserPaths', 'removeUserPath', 'setUserPathValue'
					]
				}
			},
			{
				name: 'sysInfo',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'getLanguage', 'getMAXMemoryInfo', 'getMaxLanguage', 'getSystemMemoryInfo'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'DesktopBPP', 'DesktopSize', 'DesktopSizeUnscaled', 'MAXPriority', 'computername', 'cpucount', 'currentdir', 'processAffinity', 'systemAffinity', 'systemdir', 'tempdir', 'username', 'windowsdir'
					]
				}
			},
			{
				name: 'systemTools',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'AllocateMemory', 'DebugPrint', 'GetScreenHeight', 'GetScreenWidth', 'IsAeroEnabled', 'IsDebugging', 'NumberOfProcessors', 'PB2_AllNoRefSafePointersTestingDisable', 'PB2_AllNoRefSafePointersTestingDisabled', 'ReleaseMemory', 'enumDisplayDevices', 'getEnvVariable', 'getSystemMetrics', 'getmaxstdio', 'setEnvVariable', 'setmaxstdio'
					]
				}
			},
			{
				name: 'tabbedDialogs',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'CancelDialog', 'CloseDialog', 'CommitPages', 'OkToCommit', 'getCurrentPage', 'getDialogID', 'getNumPages', 'getPageID', 'getPageTitle', 'invalidate', 'invalidatePage', 'isOpen', 'isPage', 'setCurrentPage'
					]
				}
			},
			{
				name: 'TCBDefaultParams',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'bias', 'continuity', 'easeFrom', 'easeTo', 'tension'
					]
				}
			},
			{
				name: 'terrainOps',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'addOperand', 'deleteOperand', 'getOperand', 'getOperandTM', 'setOperandTM', 'update'
					]
				}
			},
			{
				name: 'theHold',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'Accept', 'Begin', 'DisableUndo', 'End', 'GetBeginDepth', 'GetGlobalPutCount', 'Holding', 'IsSuspended', 'IsUndoDisabled', 'Redoing', 'Release', 'Restore', 'RestoreOrRedoing', 'Restoring', 'Resume', 'SuperAccept', 'SuperBegin', 'SuperCancel', 'SuperLevel', 'Suspend', 'cancel', 'enableUndo', 'getCurrentUndoLevels', 'getMaxUndoLevels', 'setMaxUndoLevels'
					]
				}
			},
			{
				name: 'themixer',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'addMaxMixer', 'addMixerToDisplay', 'getMaxMixer', 'hideMixer', 'numMaxMixers', 'removeMaxMixer', 'removeMixerFromDisplay', 'setAnimationRange', 'showMixer', 'toggleMixer', 'updateDisplay', 'zoomExtents'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'lockTransitions', 'showBalanceCurves', 'showClipBounds', 'showClipNames', 'showClipScale', 'showGlobalFrames', 'showInpoints', 'showOutpoints', 'showTgRangebars', 'showTimeWarps', 'showWgtCurves', 'snapFrames', 'snapToClips'
					]
				}
			},
			{
				name: 'timeConfiguration',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'playActiveOnly', 'playbackLoop', 'playbackSpeed', 'realTimePlayback', 'useTrackBar'
					]
				}
			},
			{
				name: 'toolMode',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'coordsys', 'nonUniformScale', 'pivotCenter', 'selectionCenter', 'squashScale', 'transformCenter', 'uniformScale'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'AxisConstraints', 'CommandMode', 'CommandModeID', 'coordSysNode'
					]
				}
			},
			{
				name: 'trackbar',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'GetNextKeyTime', 'GetPreviousKeyTime'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'filter', 'showAudio', 'visible'
					]
				}
			},
			{
				name: 'TreeViewWraps',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'ClearTvNodes', 'CollapseAll', 'ExpandAll', 'GetHitCoordinates', 'InitImageList', 'InitTreeView', 'IsIconFile', 'MXSColor_to_dotNetColor', 'getHitNode'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'm_bStyle', 'm_bitmapClassType', 'm_dnColor', 'm_iconClassType'
					]
				}
			},
			{
				name: 'units',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'decodeValue', 'formatValue'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'CustomName', 'CustomUnit', 'CustomValue', 'DisplayType', 'MetricType', 'SystemScale', 'SystemType', 'USFrac', 'USType'
					]
				}
			},
			{
				name: 'uvwManipUtils',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'GetUVGen', 'GetUVGenFromMat', 'GetUVTransform', 'gizmoAxis', 'gizmoAxisTM', 'gizmoMatrix', 'isPhysicalScaleMapper', 'makeCubeGizmo', 'makeXYGizmoAxis', 'projectPointToGizmo', 'projectPointToPlane', 'usesGizmo'
					]
				}
			},
			{
				name: 'VFB_methods_struct',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'CommitMentalRayChanges', 'CommitRenderChanges', 'CompareViewportInfo', 'DeepCompare', 'GetRolloutSize', 'GetViewportInfo', 'GetViewportName', 'HandleRenderModeDropdown', 'LookupTableComparator', 'LookupTableLookup', 'StringTableLookup', 'VFB_AddRollouts', 'VFB_IsInitialized', 'VFB_RemoveRollouts', 'VFB_ResetRollouts', 'init', 'reset'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'UnifiedPrecisionPresetData', 'VFB_Interface', 'VFB_RolloutInfo_Array', 'finalGatherPresetData', 'glossyReflectionPrecisionPresetData', 'glossyRefractionPrecisionPresetData', 'imagePrecisionPresetData', 'showOverlays', 'showRollups', 'softShadowPrecisionPresetData', 'viewportInfo', 'viewportTypeTable', 'viewportTypeTableSorted'
					]
				}
			},
			{
				name: 'VFB_ViewportInfo',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'entries_', 'totalVptNum_'
					]
				}
			},
			{
				name: 'VFB_ViewportInfoEntry',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'index_', 'name_', 'type_', 'viewId_'
					]
				}
			},
			{
				name: 'vfields',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'blendVectors', 'computeVectors'
					]
				}
			},
			{
				name: 'viewport',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'ActiveViewportEx', 'AppendTooltip', 'CanSetToViewport', 'EnableSolidBackgroundColorMode', 'GetAdaptiveDegCameraDistancePriority', 'GetAdaptiveDegDegradeLight', 'GetAdaptiveDegDisplayModeBox', 'GetAdaptiveDegDisplayModeCurrent', 'GetAdaptiveDegDisplayModeFastShaded', 'GetAdaptiveDegDisplayModeHide', 'GetAdaptiveDegDisplayModePoint', 'GetAdaptiveDegDisplayModeWire', 'GetAdaptiveDegDrawBackfaces', 'GetAdaptiveDegGoalFPS', 'GetAdaptiveDegMinSize', 'GetAdaptiveDegNeverDegradeSelected', 'GetAdaptiveDegNeverRedrawAfterDegrade', 'GetAdaptiveDegScreenSizePriority', 'GetBlowupRect', 'GetCamera', 'GetClipScale', 'GetFOV', 'GetFPS', 'GetFocalDistance', 'GetGridVisibility', 'GetID', 'GetLayout', 'GetRegionRect', 'GetRenderLevel', 'GetScreenScaleFactor', 'GetShowEdgeFaces', 'GetTM', 'GetTransparencyLevel', 'IsCanvasNavigationMode', 'IsPerspView', 'IsSolidBackgroundColorMode', 'IsWire', 'NumViewEx', 'Pan', 'Rotate', 'SetAdaptiveDegCameraDistancePriority', 'SetAdaptiveDegDegradeLight', 'SetAdaptiveDegDisplayModeBox', 'SetAdaptiveDegDisplayModeCurrent', 'SetAdaptiveDegDisplayModeFastShaded', 'SetAdaptiveDegDisplayModeHide', 'SetAdaptiveDegDisplayModePoint', 'SetAdaptiveDegDisplayModeWire', 'SetAdaptiveDegDrawBackfaces', 'SetAdaptiveDegGoalFPS', 'SetAdaptiveDegMinSize', 'SetAdaptiveDegNeverDegradeSelected', 'SetAdaptiveDegNeverRedrawAfterDegrade', 'SetAdaptiveDegScreenSizePriority', 'SetBlowupRect', 'SetCamera', 'SetCanvasNavigationMode', 'SetClipScale', 'SetFOV', 'SetFocalDistance', 'SetGridVisibility', 'SetLayout', 'SetRegionRect', 'SetRenderLevel', 'SetShowEdgeFaces', 'SetTM', 'SetTransparencyLevel', 'SetType', 'Zoom', 'ZoomPerspective', 'ZoomToBounds', 'getHWnd', 'getType', 'getViewportDib', 'isEnabled', 'resetAllViews'
					]
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'DispBkgImage', 'activeViewport', 'activeViewportId', 'numViews'
					]
				}
			},
			{
				name: 'VLD',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'Disable', 'DisableModule', 'Enable', 'EnableModule', 'RefreshModules', 'ReportLeaks', 'ResolveCallstacks', 'Restore', 'TestLeakMemory'
					]
				}
			},
			{
				name: 'VRSceneExportInfo',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'compressed', 'endframe', 'exportAnim', 'exportBitmaps', 'exportGeometry', 'exportLights', 'exportMaterials', 'exportNodes', 'exportStripPaths', 'exportTextures', 'exportView', 'framerange', 'prefixTxt', 'separateFiles', 'startframe', 'useHEXFormatMesh', 'useHEXFormatTransf'
					]
				}
			},
			{
				name: 'WAVsound',
				function: {
					kind: CompletionItemKind.Method,
					name: 'scrub'
				},
				property: {
					kind: CompletionItemKind.Property,
					name: [
						'End', 'filename', 'isPlaying', 'mute', 'start'
					]
				}
			},
			{
				name: 'windows',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'addChild', 'clientToScreen', 'getChildHWND', 'getChildrenHWND', 'getDesktopHWND', 'getHWNDData', 'getMAXHWND', 'getParentHWND', 'getWindowPos', 'postMessage', 'processPostedMessages', 'screenToClient', 'sendMessage', 'setWindowPos', 'snapshot'
					]
				}
			},
			{
				name: 'xrefPaths',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'add', 'count', 'delete', 'get', 'getFullFilePath'
					]
				}
			},
			{
				name: 'xrefs',
				function: {
					kind: CompletionItemKind.Method,
					name: [
						'addNewXRefFile', 'addNewXRefObject', 'attemptUnresolvedXRefs', 'deleteAllXRefs', 'findUnresolvedXRefs', 'getXRefFile', 'getXRefFileCount', 'updateChangedXRefs'
					]
				}
			}
		]
	},
	{
		name: 'Interfaces',
		desc: 'Max Interface',
		kind: CompletionItemKind.Interface,
		api: [
			{
				name: 'ActionItemOverrideManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'overridesActive',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'timeToStartOverride',
							desc: 'float : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'AnimLayerManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'filterActiveOnly',
							desc: 'bool : Read|Write'
						},
						{
							name: 'justUpToActive',
							desc: 'bool : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'getLayerName',
							desc: '<TSTR by value>getLayerName <index>listIndex\nlistIndex Validated by Validator function'
						},
						{
							name: 'GetCollapsePerFrame()',
							desc: '<bool>GetCollapsePerFrame()'
						},
						{
							name: 'GetCollapsePerFrameActiveRange()',
							desc: '<bool>GetCollapsePerFrameActiveRange()'
						},
						{
							name: 'getLayerLocked',
							desc: '<bool>getLayerLocked <index>listIndex\nlistIndex Validated by Validator function'
						},
						{
							name: 'getLayerMute',
							desc: '<bool>getLayerMute <index>listIndex\nlistIndex Validated by Validator function'
						},
						{
							name: 'getLayerOutputMute',
							desc: '<bool>getLayerOutputMute <index>listIndex\nlistIndex Validated by Validator function'
						},
						{
							name: 'setLayerWeightControl',
							desc: '<bool>setLayerWeightControl <index>listIndex <control>control\nlistIndex Validated by Validator function'
						},
						{
							name: 'canEnableLayer',
							desc: '<boolean>canEnableLayer <maxObject>anim <maxObject>client <index>subNum'
						},
						{
							name: 'enableLayer',
							desc: '<boolean>enableLayer <maxObject>anim <maxObject>client <index>subNum'
						},
						{
							name: 'getLayerWeightControl',
							desc: '<control>getLayerWeightControl <index>listIndex\nlistIndex Validated by Validator function'
						},
						{
							name: 'getLayerWeight',
							desc: '<float>getLayerWeight <index>listIndex <time>atTime\nlistIndex Validated by Validator function'
						},
						{
							name: 'getActiveLayersNodes',
							desc: '<index array>getActiveLayersNodes <&node array>nodes\nnodes is In and Out parameter'
						},
						{
							name: 'getNodesLayers',
							desc: '<index array>getNodesLayers <&node array>nodes\nnodes is In and Out parameter'
						},
						{
							name: 'getLayerCount()',
							desc: '<index>getLayerCount()'
						},
						{
							name: 'enableLayers',
							desc: '<integer>enableLayers <&node array>nodes pos:<boolean> rot:<boolean> scale:<boolean> ik:<boolean> object:<boolean> customAtt:<boolean> mod:<boolean> mat:<boolean> other:<boolean>\nnodes is In and Out parameter\npos default value: true\nrot default value: true\nscale default value: true\nik default value: false\nobject default value: false\ncustomAtt default value: false\nmod default value: false\nmat default value: false\nother default value: false'
						},
						{
							name: 'enableLayersDlg',
							desc: '<integer>enableLayersDlg <&node array>nodes\nnodes is In and Out parameter'
						},
						{
							name: 'SetCollapseControllerType',
							desc: '<void>SetCollapseControllerType <enum>controllerType\ncontrollerType enums: {#Bezier|#Linear|#Default}'
						},
						{
							name: 'SetCollapsePerFrame',
							desc: '<void>SetCollapsePerFrame <bool>keyable'
						},
						{
							name: 'SetCollapsePerFrameActiveRange',
							desc: '<void>SetCollapsePerFrameActiveRange <bool>activeRange'
						},
						{
							name: 'SetCollapseRange',
							desc: '<void>SetCollapseRange <interval>range'
						},
						{
							name: 'addLayer',
							desc: '<void>addLayer <&TSTR>name <&node array>nodes <bool>useActiveControllerType\nname is In and Out parameter\nnodes is In and Out parameter'
						},
						{
							name: 'addLayerDlg',
							desc: '<void>addLayerDlg <&node array>nodes\nnodes is In and Out parameter'
						},
						{
							name: 'animLayerPropertiesDlg()',
							desc: '<void>animLayerPropertiesDlg()'
						},
						{
							name: 'collapseLayerNodes',
							desc: '<void>collapseLayerNodes <index>listIndex <&node array>nodes\nlistIndex Validated by Validator function\nnodes is In and Out parameter'
						},
						{
							name: 'copyLayerNodes',
							desc: '<void>copyLayerNodes <index>listIndex <&node array>nodes\nlistIndex Validated by Validator function\nnodes is In and Out parameter'
						},
						{
							name: 'deleteLayer',
							desc: '<void>deleteLayer <index>listIndex\nlistIndex Validated by Validator function'
						},
						{
							name: 'deleteLayerNodes',
							desc: '<void>deleteLayerNodes <index>listIndex <&node array>nodes\nlistIndex Validated by Validator function\nnodes is In and Out parameter'
						},
						{
							name: 'disableLayerNodes',
							desc: '<void>disableLayerNodes <&node array>nodes\nnodes is In and Out parameter'
						},
						{
							name: 'getNodesActiveLayer',
							desc: '<void>getNodesActiveLayer <&node array>nodes\nnodes is In and Out parameter'
						},
						{
							name: 'pasteLayerNodes',
							desc: '<void>pasteLayerNodes <index>listIndex <&node array>nodes\nlistIndex Validated by Validator function\nnodes is In and Out parameter'
						},
						{
							name: 'refreshAnimLayerPropertiesDlg()',
							desc: '<void>refreshAnimLayerPropertiesDlg()'
						},
						{
							name: 'setLayerActive',
							desc: '<void>setLayerActive <index>listIndex\nlistIndex Validated by Validator function'
						},
						{
							name: 'setLayerActiveNodes',
							desc: '<void>setLayerActiveNodes <index>listIndex <&node array>nodes\nlistIndex Validated by Validator function\nnodes is In and Out parameter'
						},
						{
							name: 'setLayerLocked',
							desc: '<void>setLayerLocked <index>listIndex <bool>locked\nlistIndex Validated by Validator function'
						},
						{
							name: 'setLayerMute',
							desc: '<void>setLayerMute <index>listIndex <bool>mute\nlistIndex Validated by Validator function'
						},
						{
							name: 'setLayerName',
							desc: '<void>setLayerName <index>listIndex <TSTR by value>name\nlistIndex Validated by Validator function'
						},
						{
							name: 'setLayerOutputMute',
							desc: '<void>setLayerOutputMute <index>listIndex <bool>mute\nlistIndex Validated by Validator function'
						},
						{
							name: 'setLayerWeight',
							desc: '<void>setLayerWeight <index>listIndex <time>atTime <float>weight\nlistIndex Validated by Validator function'
						},
						{
							name: 'showAnimLayersManagerToolbar',
							desc: '<void>showAnimLayersManagerToolbar <bool>show'
						}
					]
				}
			},
			{
				name: 'assemblyMgr',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'Attach',
							desc: '<bool>Attach <node array>nodes assembly:<node>\nassembly default value: undefined'
						},
						{
							name: 'CanAssemble',
							desc: '<bool>CanAssemble <node array>nodes'
						},
						{
							name: 'CanAttach',
							desc: '<bool>CanAttach <node array>nodes assembly:<node>\nassembly default value: undefined'
						},
						{
							name: 'CanClose',
							desc: '<bool>CanClose <node array>nodes'
						},
						{
							name: 'CanDetach',
							desc: '<bool>CanDetach <node array>nodes'
						},
						{
							name: 'CanDisassemble',
							desc: '<bool>CanDisassemble <node array>nodes'
						},
						{
							name: 'CanExplode',
							desc: '<bool>CanExplode <node array>nodes'
						},
						{
							name: 'CanOpen',
							desc: '<bool>CanOpen <node array>nodes'
						},
						{
							name: 'Close',
							desc: '<bool>Close <node array>nodes select:<bool>\nselect default value: true'
						},
						{
							name: 'Detach',
							desc: '<bool>Detach <node array>nodes'
						},
						{
							name: 'Disassemble',
							desc: '<bool>Disassemble <node array>nodes'
						},
						{
							name: 'Explode',
							desc: '<bool>Explode <node array>nodes'
						},
						{
							name: 'Open',
							desc: '<bool>Open <node array>nodes clearSelection:<bool>\nclearSelection default value: true'
						},
						{
							name: 'Assemble',
							desc: '<node>Assemble <node array>nodes name:<string> classDesc:<class> select:<bool>\nname default value: undefined\nclassDesc default value: undefined\nselect default value: true'
						},
						{
							name: 'IsAssembly',
							desc: '<node>IsAssembly <node array>nodes'
						}
					]
				}
			},
			{
				name: 'ATSOps',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'AutoLogin',
							desc: 'bool : Read|Write'
						},
						{
							name: 'CheckNetworkPaths',
							desc: 'bool : Read|Write'
						},
						{
							name: 'Disabled',
							desc: 'bool : Read|Write'
						},
						{
							name: 'DisplayExcluded',
							desc: 'bool : Read|Write'
						},
						{
							name: 'ExcludeOutputFiles',
							desc: 'bool : Read|Write'
						},
						{
							name: 'Silent',
							desc: 'bool : Read|Write'
						},
						{
							name: 'TableView',
							desc: 'bool : Read|Write'
						},
						{
							name: 'TreeView',
							desc: 'bool : Read|Write'
						},
						{
							name: 'Visible',
							desc: 'bool : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'AddAttachmentToNotificationFileListEntry',
							desc: '<bool>AddAttachmentToNotificationFileListEntry <index>FileListIndex <filename>Filename\nAddAttachmentToNotificationFileListEntry - no automatic redraw after invoked'
						},
						{
							name: 'AddFileToNotificationFileList',
							desc: '<bool>AddFileToNotificationFileList <filename>Filename\nAddFileToNotificationFileList - no automatic redraw after invoked'
						},
						{
							name: 'AddFiles',
							desc: '<bool>AddFiles <index>ProviderIndex <&filename array>FileList <&TSTR>Comment IsHidden:<&bool array>\nAddFiles - no automatic redraw after invoked\nFileList is In parameter\nComment is In and Out parameter\nIsHidden default value: #()\nIsHidden is In parameter'
						},
						{
							name: 'CanGetFromProvider',
							desc: '<bool>CanGetFromProvider <index>ProviderIndex\nCanGetFromProvider - no automatic redraw after invoked'
						},
						{
							name: 'Checkin',
							desc: '<bool>Checkin <index>ProviderIndex <&filename array>FileList <&TSTR>Comment\nCheckin - no automatic redraw after invoked\nFileList is In parameter\nComment is In and Out parameter'
						},
						{
							name: 'Checkout',
							desc: '<bool>Checkout <index>ProviderIndex <&filename array>FileList <&TSTR>Comment\nCheckout - no automatic redraw after invoked\nFileList is In parameter\nComment is In and Out parameter'
						},
						{
							name: 'GetLatest',
							desc: '<bool>GetLatest <index>ProviderIndex <&filename array>FileList\nGetLatest - no automatic redraw after invoked\nFileList is In parameter'
						},
						{
							name: 'GetVersion',
							desc: '<bool>GetVersion <index>ProviderIndex <filename>Filename <integer>VersionNumber\nGetVersion - no automatic redraw after invoked'
						},
						{
							name: 'IsFileExcluded',
							desc: '<bool>IsFileExcluded <index>ProviderIndex <filename>Filename\nIsFileExcluded - no automatic redraw after invoked'
						},
						{
							name: 'IsFileShareLocked',
							desc: '<bool>IsFileShareLocked <index>ProviderIndex <filename>Filename\nIsFileShareLocked - no automatic redraw after invoked'
						},
						{
							name: 'IsInitialized',
							desc: '<bool>IsInitialized <index>ProviderIndex\nIsInitialized - no automatic redraw after invoked'
						},
						{
							name: 'IsInputFile',
							desc: '<bool>IsInputFile <filename>Filename\nIsInputFile - no automatic redraw after invoked'
						},
						{
							name: 'IsProjectOpen',
							desc: '<bool>IsProjectOpen <index>ProviderIndex\nIsProjectOpen - no automatic redraw after invoked'
						},
						{
							name: 'RegisterNotification',
							desc: '<bool>RegisterNotification <value>Callback <integer>ID\nRegisterNotification - no automatic redraw after invoked'
						},
						{
							name: 'RemoveFileFromNotificationFileList',
							desc: '<bool>RemoveFileFromNotificationFileList <index>FileListIndex\nRemoveFileFromNotificationFileList - no automatic redraw after invoked'
						},
						{
							name: 'ResolveSelectionRelativeToProjectFolder()',
							desc: '<bool>ResolveSelectionRelativeToProjectFolder()'
						},
						{
							name: 'ResolveSelectionToUNC()',
							desc: '<bool>ResolveSelectionToUNC()'
						},
						{
							name: 'RetargetAssets',
							desc: '<bool>RetargetAssets <&maxObject>AssetOwner <filename>OldPath <filename>NewPath CreateOutputFolder:<bool>\nAssetOwner is In parameter\nCreateOutputFolder default value: false'
						},
						{
							name: 'RetargetCommonRoot',
							desc: '<bool>RetargetCommonRoot <filename>NewPath CreateOutputFolder:<bool>\nCreateOutputFolder default value: false'
						},
						{
							name: 'RetargetCommonRootOfSelection',
							desc: '<bool>RetargetCommonRootOfSelection <filename>NewPath CreateOutputFolder:<bool>\nCreateOutputFolder default value: false'
						},
						{
							name: 'RetargetSelection',
							desc: '<bool>RetargetSelection <filename>NewPath CreateOutputFolder:<bool>\nCreateOutputFolder default value: false'
						},
						{
							name: 'SetPath',
							desc: '<bool>SetPath <filename>NewPath CreateOutputFolder:<bool>\nCreateOutputFolder default value: false'
						},
						{
							name: 'SetPathOnSelection',
							desc: '<bool>SetPathOnSelection <filename>NewPath CreateOutputFolder:<bool>\nCreateOutputFolder default value: false'
						},
						{
							name: 'TestFileStatus',
							desc: '<bool>TestFileStatus <index>ProviderIndex <filename>Filename <enum>Status\nTestFileStatus - no automatic redraw after invoked\nStatus enums: {#Unknown|#NotControlled|#Controlled|#CheckedOut|#CheckedOutOther|#OutOfDate|#Deleted|#Missing|#Modified|#Hidden|#ShareLock|#CanCheckin|#CanCheckout|#CanUndoCheckout|#CanGetLatest|#CanAddFile|#CanShowHistory|#CanShowProperties}'
						},
						{
							name: 'TestFileSystemStatus',
							desc: '<bool>TestFileSystemStatus <filename>Filename <enum>Status\nTestFileSystemStatus - no automatic redraw after invoked\nStatus enums: {#Unknown|#Ok|#Missing|#Found|#NetworkPath}'
						},
						{
							name: 'UndoCheckout',
							desc: '<bool>UndoCheckout <index>ProviderIndex <&filename array>FileList\nUndoCheckout - no automatic redraw after invoked\nFileList is In parameter'
						},
						{
							name: 'GetWorkingFolder',
							desc: '<filename>GetWorkingFolder <index>ProviderIndex\nGetWorkingFolder - no automatic redraw after invoked'
						},
						{
							name: 'GetDependencyFileList',
							desc: '<integer>GetDependencyFileList <maxObject>Dependent <&filename array>FileList <bool>includeRefHierarchy\nGetDependencyFileList - no automatic redraw after invoked\nFileList is Out parameter'
						},
						{
							name: 'GetDependentFiles',
							desc: '<integer>GetDependentFiles <filename>Filename <bool>Recurse <&filename array>FileList IncludeOutputFiles:<bool>\nGetDependentFiles - no automatic redraw after invoked\nFileList is Out parameter\nIncludeOutputFiles default value: true'
						},
						{
							name: 'GetFiles',
							desc: '<integer>GetFiles <&filename array>FileList\nGetFiles - no automatic redraw after invoked\nFileList is Out parameter'
						},
						{
							name: 'GetFilesByFileSystemStatus',
							desc: '<integer>GetFilesByFileSystemStatus <enum>Status <&filename array>FileList\nGetFilesByFileSystemStatus - no automatic redraw after invoked\nStatus enums: {#Unknown|#Ok|#Missing|#Found|#NetworkPath}\nFileList is Out parameter'
						},
						{
							name: 'GetMaxVersion',
							desc: '<integer>GetMaxVersion <index>ProviderIndex <filename>Filename\nGetMaxVersion - no automatic redraw after invoked'
						},
						{
							name: 'GetMinVersion',
							desc: '<integer>GetMinVersion <index>ProviderIndex <filename>Filename\nGetMinVersion - no automatic redraw after invoked'
						},
						{
							name: 'GetNotificationFileList',
							desc: '<integer>GetNotificationFileList <&filename array>FileList\nGetNotificationFileList - no automatic redraw after invoked\nFileList is Out parameter'
						},
						{
							name: 'GetResolvedPaths',
							desc: '<integer>GetResolvedPaths <&filename array>FileList <&filename array>ResolvedFileList\nGetResolvedPaths - no automatic redraw after invoked\nFileList is In parameter\nResolvedFileList is Out parameter'
						},
						{
							name: 'GetSelectedFiles',
							desc: '<integer>GetSelectedFiles <&filename array>FileList\nGetSelectedFiles - no automatic redraw after invoked\nFileList is Out parameter'
						},
						{
							name: 'GetProviderName',
							desc: '<string>GetProviderName <index>ProviderIndex\nGetProviderName - no automatic redraw after invoked'
						},
						{
							name: 'GetFileStatus',
							desc: '<value>GetFileStatus <index>ProviderIndex <filename>Filename\nGetFileStatus - no automatic redraw after invoked'
						},
						{
							name: 'GetFileSystemStatus',
							desc: '<value>GetFileSystemStatus <filename>Filename\nGetFileSystemStatus - no automatic redraw after invoked'
						},
						{
							name: 'AppendStatusLog',
							desc: '<void>AppendStatusLog <string>Status\nAppendStatusLog - no automatic redraw after invoked'
						},
						{
							name: 'CheckForCheckedOutFiles',
							desc: '<void>CheckForCheckedOutFiles <index>ProviderIndex\nCheckForCheckedOutFiles - no automatic redraw after invoked'
						},
						{
							name: 'CheckForDependentFiles',
							desc: '<void>CheckForDependentFiles <index>ProviderIndex <filename>Filename\nCheckForDependentFiles - no automatic redraw after invoked'
						},
						{
							name: 'CheckForOutDatedFiles',
							desc: '<void>CheckForOutDatedFiles <index>ProviderIndex\nCheckForOutDatedFiles - no automatic redraw after invoked'
						},
						{
							name: 'CheckForSceneFileCheckOut',
							desc: '<void>CheckForSceneFileCheckOut <index>ProviderIndex\nCheckForSceneFileCheckOut - no automatic redraw after invoked'
						},
						{
							name: 'CheckForUnControlledFiles',
							desc: '<void>CheckForUnControlledFiles <index>ProviderIndex\nCheckForUnControlledFiles - no automatic redraw after invoked'
						},
						{
							name: 'CloseProject',
							desc: '<void>CloseProject <index>ProviderIndex\nCloseProject - no automatic redraw after invoked'
						},
						{
							name: 'GetFilesByStatus',
							desc: '<void>GetFilesByStatus <index>ProviderIndex <enum>Status <&filename array>FileList\nGetFilesByStatus - no automatic redraw after invoked\nStatus enums: {#Unknown|#NotControlled|#Controlled|#CheckedOut|#CheckedOutOther|#OutOfDate|#Deleted|#Missing|#Modified|#Hidden|#ShareLock|#CanCheckin|#CanCheckout|#CanUndoCheckout|#CanGetLatest|#CanAddFile|#CanShowHistory|#CanShowProperties}\nFileList is Out parameter'
						},
						{
							name: 'GetFromProvider',
							desc: '<void>GetFromProvider <index>ProviderIndex <string>FilterName <string>FilterExtensions <bool>AddAllFilesFilter <bool>MultiSelect <bool>Download <&filename array>FileList\nGetFromProvider - no automatic redraw after invoked\nFileList is Out parameter'
						},
						{
							name: 'LaunchOptions',
							desc: '<void>LaunchOptions <index>ProviderIndex\nLaunchOptions - no automatic redraw after invoked'
						},
						{
							name: 'LaunchProvider',
							desc: '<void>LaunchProvider <index>ProviderIndex\nLaunchProvider - no automatic redraw after invoked'
						},
						{
							name: 'Login',
							desc: '<void>Login <index>ProviderIndex\nLogin - no automatic redraw after invoked'
						},
						{
							name: 'Logout',
							desc: '<void>Logout <index>ProviderIndex\nLogout - no automatic redraw after invoked'
						},
						{
							name: 'OpenProject',
							desc: '<void>OpenProject <index>ProviderIndex <filename>ProjectPath\nOpenProject - no automatic redraw after invoked'
						},
						{
							name: 'Properties',
							desc: '<void>Properties <index>ProviderIndex <&filename array>FileList\nProperties - no automatic redraw after invoked\nFileList is In parameter'
						},
						{
							name: 'SelectFiles',
							desc: '<void>SelectFiles <&filename array>FileList\nSelectFiles - no automatic redraw after invoked\nFileList is In parameter'
						},
						{
							name: 'SetActiveProvider',
							desc: '<void>SetActiveProvider <index>ProviderIndex\nSetActiveProvider - no automatic redraw after invoked'
						},
						{
							name: 'SetWorkingComment',
							desc: '<void>SetWorkingComment <string>Comment\nSetWorkingComment - no automatic redraw after invoked'
						},
						{
							name: 'SetWorkingFolder',
							desc: '<void>SetWorkingFolder <index>ProviderIndex <filename>Folder\nSetWorkingFolder - no automatic redraw after invoked'
						},
						{
							name: 'ShowHistory',
							desc: '<void>ShowHistory <index>ProviderIndex <&filename array>FileList\nShowHistory - no automatic redraw after invoked\nFileList is In parameter'
						},
						{
							name: 'UnRegisterNotification',
							desc: '<void>UnRegisterNotification <integer>ID\nUnRegisterNotification - no automatic redraw after invoked'
						}
					]
				}
			},
			{
				name: 'Autodesk360',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'GetLoginUserName()',
							desc: '<TSTR by value>GetLoginUserName()'
						},
						{
							name: 'InitializeWebServices()',
							desc: '<bool>InitializeWebServices()'
						},
						{
							name: 'IsLoggedIn()',
							desc: '<bool>IsLoggedIn()'
						},
						{
							name: 'IsLoginValid()',
							desc: '<bool>IsLoginValid()'
						},
						{
							name: 'Login()',
							desc: '<bool>Login()'
						},
						{
							name: 'Logout()',
							desc: '<bool>Logout()'
						}
					]
				}
			},
			{
				name: 'AutodeskMaterialManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'GetCategoryCount()',
							desc: '<integer>GetCategoryCount()'
						},
						{
							name: 'GetDefinitionCount',
							desc: '<integer>GetDefinitionCount <integer>categoryIndex'
						},
						{
							name: 'CreateAutodeskMaterial',
							desc: '<material>CreateAutodeskMaterial <string>definitionIdentifier'
						},
						{
							name: 'GetCategoryUiName',
							desc: '<string>GetCategoryUiName <integer>categoryIndex'
						},
						{
							name: 'GetDefinitionIdentifier',
							desc: '<string>GetDefinitionIdentifier <integer>categoryIndex <integer>definitionIndex'
						},
						{
							name: 'GetDefinitionThumbnailURL',
							desc: '<string>GetDefinitionThumbnailURL <integer>categoryIndex <integer>definitionIndex'
						},
						{
							name: 'GetDefinitionUiName',
							desc: '<string>GetDefinitionUiName <integer>categoryIndex <integer>definitionIndex'
						}
					]
				}
			},
			{
				name: 'AutoTangentMan',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'NewControllersAutoTangentAlgorithm',
							desc: 'enum : Read|Write'
						},
						{
							name: 'NewControllersAutoTangentAlgorithm',
							desc: 'NewControllersAutoTangentAlgorithm enums: {#unsupported|#legacy|#unified}'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'SupportsAutoTangent',
							desc: '<bool>SupportsAutoTangent <maxObject>anim'
						},
						{
							name: 'GetAutoTangentAlgorithm',
							desc: '<enum>GetAutoTangentAlgorithm <maxObject>anim\nGetAutoTangentAlgorithm enums: {#unsupported|#legacy|#unified'
						}
					]
				}
			},
			{
				name: 'BatchProOptimizer',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'ApplyModifier',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'AutoRename',
							desc: 'bool : Read|Write'
						},
						{
							name: 'CompactFaces',
							desc: 'bool : Read|Write'
						},
						{
							name: 'DestFileNameMode',
							desc: 'integer : Read|Write'
						},
						{
							name: 'DestFileNamePrefix',
							desc: 'string : Read|Write'
						},
						{
							name: 'DestFileNameSuffix',
							desc: 'string : Read|Write'
						},
						{
							name: 'DestFolderMode',
							desc: 'integer : Read|Write'
						},
						{
							name: 'DestFolderName',
							desc: 'string : Read|Write'
						},
						{
							name: 'DestFormatExt',
							desc: 'string : Read|Write'
						},
						{
							name: 'DestFormatMode',
							desc: 'integer : Read|Write'
						},
						{
							name: 'KeepMaterialBoundaries',
							desc: 'bool : Read|Write'
						},
						{
							name: 'KeepNormals',
							desc: 'bool : Read|Write'
						},
						{
							name: 'KeepTexture',
							desc: 'bool : Read|Write'
						},
						{
							name: 'KeepUVBoundaries',
							desc: 'bool : Read|Write'
						},
						{
							name: 'KeepVertexColors',
							desc: 'bool : Read|Write'
						},
						{
							name: 'KeepVertexColorsBoundaries',
							desc: 'bool : Read|Write'
						},
						{
							name: 'LogFilePath',
							desc: 'string : Read|Write'
						},
						{
							name: 'MergeFaces',
							desc: 'bool : Read|Write'
						},
						{
							name: 'MergeFacesThreshold',
							desc: 'float : Read|Write'
						},
						{
							name: 'MergePoints',
							desc: 'bool : Read|Write'
						},
						{
							name: 'MergePointsThreshold',
							desc: 'float : Read|Write'
						},
						{
							name: 'NormalMode',
							desc: 'integer : Read|Write'
						},
						{
							name: 'NormalThreshold',
							desc: 'float : Read|Write'
						},
						{
							name: 'OptimizationLevel1',
							desc: 'integer : Read|Write'
						},
						{
							name: 'OptimizationLevel2',
							desc: 'integer : Read|Write'
						},
						{
							name: 'OptimizationLevel3',
							desc: 'integer : Read|Write'
						},
						{
							name: 'OptimizationLevel4',
							desc: 'integer : Read|Write'
						},
						{
							name: 'OptimizationLevel5',
							desc: 'integer : Read|Write'
						},
						{
							name: 'OptimizationLevelMode',
							desc: 'integer : Read|Write'
						},
						{
							name: 'OptimizationLevelSteps',
							desc: 'integer : Read|Write'
						},
						{
							name: 'OptimizeBordersMode',
							desc: 'integer : Read|Write'
						},
						{
							name: 'OptimizeHidden',
							desc: 'bool : Read|Write'
						},
						{
							name: 'PreventFlippedNormals',
							desc: 'bool : Read|Write'
						},
						{
							name: 'RecreateFolderTree',
							desc: 'bool : Read|Write'
						},
						{
							name: 'SourceFileDir',
							desc: 'string : Read|Write'
						},
						{
							name: 'SourceFileFiles',
							desc: 'filename by value array : Read|Write'
						},
						{
							name: 'SourceFileMode',
							desc: 'integer : Read|Write'
						},
						{
							name: 'SourceFileSubDir',
							desc: 'bool : Read|Write'
						},
						{
							name: 'SymmetryMode',
							desc: 'integer : Read|Write'
						},
						{
							name: 'SymmetryTolerance',
							desc: 'integer : Read|Write'
						},
						{
							name: 'UVTolerance',
							desc: 'float : Read|Write'
						},
						{
							name: 'ValidateDialogs',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'VertexColorsTolerance',
							desc: 'integer : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'BipFixer',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'DoAdvAngSmoothing',
							desc: '<void>DoAdvAngSmoothing <&node array>nodeTab <integer>width <float>damping\nnodeTab is In and Out parameter'
						},
						{
							name: 'DoAngBlurring',
							desc: '<void>DoAngBlurring <&node array>nodeTab <integer>width <float>damping\nnodeTab is In and Out parameter'
						},
						{
							name: 'DoAngSmoothing',
							desc: '<void>DoAngSmoothing <&node array>nodeTab <integer>width <float>damping\nnodeTab is In and Out parameter'
						},
						{
							name: 'DoKneeWobbleFix',
							desc: '<void>DoKneeWobbleFix <&node array>nodeTab <float>frameThreshold <float>fluctuationThreshold\nnodeTab is In and Out parameter'
						},
						{
							name: 'DoPosBlurring',
							desc: '<void>DoPosBlurring <&node array>nodeTab <integer>width <float>damping\nnodeTab is In and Out parameter'
						},
						{
							name: 'DoPosSmoothing',
							desc: '<void>DoPosSmoothing <&node array>nodeTab <integer>width <float>damping\nnodeTab is In and Out parameter'
						},
						{
							name: 'DoRemoveKeys',
							desc: '<void>DoRemoveKeys <&node array>nodeTab <integer>intervalWidth <boolean>deleteKeys\nnodeTab is In and Out parameter'
						}
					]
				}
			},
			{
				name: 'BipWorkBench',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'GetDrawDuringMove()',
							desc: '<boolean>GetDrawDuringMove()'
						},
						{
							name: 'GetLayerEdit()',
							desc: '<boolean>GetLayerEdit()'
						},
						{
							name: 'GetLimit180()',
							desc: '<boolean>GetLimit180()'
						},
						{
							name: 'GetShowX()',
							desc: '<boolean>GetShowX()'
						},
						{
							name: 'GetShowY()',
							desc: '<boolean>GetShowY()'
						},
						{
							name: 'getShowZ()',
							desc: '<boolean>getShowZ()'
						},
						{
							name: 'Open()',
							desc: '<void>Open()'
						},
						{
							name: 'PosCurveToBipRoot()',
							desc: '<void>PosCurveToBipRoot()'
						},
						{
							name: 'PosCurveToThisNode',
							desc: '<void>PosCurveToThisNode <node>relativeToNode'
						},
						{
							name: 'PosCurveToWorld()',
							desc: '<void>PosCurveToWorld()'
						},
						{
							name: 'ShowAngAccelCurve()',
							desc: '<void>ShowAngAccelCurve()'
						},
						{
							name: 'ShowAngJerkCurve()',
							desc: '<void>ShowAngJerkCurve()'
						},
						{
							name: 'ShowAngSpeedCurve()',
							desc: '<void>ShowAngSpeedCurve()'
						},
						{
							name: 'ShowPosAccelCurve()',
							desc: '<void>ShowPosAccelCurve()'
						},
						{
							name: 'ShowPosCurve()',
							desc: '<void>ShowPosCurve()'
						},
						{
							name: 'ShowPosJerkCurve()',
							desc: '<void>ShowPosJerkCurve()'
						},
						{
							name: 'ShowPosSpeedCurve()',
							desc: '<void>ShowPosSpeedCurve()'
						},
						{
							name: 'ShowQuatCurve()',
							desc: '<void>ShowQuatCurve()'
						},
						{
							name: 'ShowQuatXYZ()',
							desc: '<void>ShowQuatXYZ()'
						},
						{
							name: 'ShowQuatXZY()',
							desc: '<void>ShowQuatXZY()'
						},
						{
							name: 'ShowQuatYXZ()',
							desc: '<void>ShowQuatYXZ()'
						},
						{
							name: 'ShowQuatYZX()',
							desc: '<void>ShowQuatYZX()'
						},
						{
							name: 'ShowQuatZXY()',
							desc: '<void>ShowQuatZXY()'
						},
						{
							name: 'ToggleDrawDuringMove()',
							desc: '<void>ToggleDrawDuringMove()'
						},
						{
							name: 'ToggleLayerEdit()',
							desc: '<void>ToggleLayerEdit()'
						},
						{
							name: 'ToggleLimit180()',
							desc: '<void>ToggleLimit180()'
						},
						{
							name: 'ToggleShowX()',
							desc: '<void>ToggleShowX()'
						},
						{
							name: 'ToggleShowY()',
							desc: '<void>ToggleShowY()'
						},
						{
							name: 'ToggleShowZ()',
							desc: '<void>ToggleShowZ()'
						}
					]
				}
			},
			{
				name: 'BitmapProxyMgr',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'globalProxyEnable',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'globalProxyRenderMode',
							desc: 'enum : Read|Write'
						},
						{
							name: 'globalProxySizeFactor',
							desc: 'enum : Read|Write'
						},
						{
							name: 'globalProxySizeMin',
							desc: 'integer : Read|Write'
						},
						{
							name: 'globalProxyRenderMode',
							desc: 'globalProxyRenderMode enums: {#renderMode_UseProxies|#renderMode_UseFullRes_KeepInMemory|#renderMode_UseFullRes_FlushFromMemory}'
						},
						{
							name: 'globalProxySizeFactor',
							desc: 'globalProxySizeFactor enums: {#full|#half|#third|#quarter|#eighth}'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'GetProxyReady',
							desc: '<boolean>GetProxyReady <string>bitmap'
						},
						{
							name: 'GetProxyUseGlobal',
							desc: '<boolean>GetProxyUseGlobal <string>bitmap'
						},
						{
							name: 'GetProxySizeFactor',
							desc: '<enum>GetProxySizeFactor <string>bitmap\nGetProxySizeFactor enums: {#full|#half|#third|#quarter|#eighth'
						},
						{
							name: 'SetProxySizeFactor',
							desc: '<void>SetProxySizeFactor <string>bitmap <enum>factor\nfactor enums: {#full|#half|#third|#quarter|#eighth}'
						},
						{
							name: 'SetProxyUseGlobal',
							desc: '<void>SetProxyUseGlobal <string>bitmap <boolean>useGlobal'
						}
					]
				}
			},
			{
				name: 'blockMgr',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'GetInstance',
							desc: '<Interface>GetInstance <node>node <&node array>instances\ninstances is In and Out parameter'
						},
						{
							name: 'IsInstance',
							desc: '<Interface>IsInstance <node>node'
						},
						{
							name: 'MakeBlockRefComponent',
							desc: '<Interface>MakeBlockRefComponent <node>node'
						},
						{
							name: 'GetTopBlock',
							desc: '<node>GetTopBlock <node>node'
						}
					]
				}
			},
			{
				name: 'BooleanObjectManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'AppendOperand',
							desc: '<bool>AppendOperand <index>index <node>boolNode <node>operandNode <bool>hold'
						},
						{
							name: 'GetDisable',
							desc: '<bool>GetDisable <index>index <index>operandIndex <&bool>disable\ndisable is Out parameter'
						},
						{
							name: 'GetNumBooleanObjects',
							desc: '<bool>GetNumBooleanObjects <&integer>count\ncount is Out parameter'
						},
						{
							name: 'GetNumberOfChildren',
							desc: '<bool>GetNumberOfChildren <index>index <index>operandIndex <&integer>children\nchildren is Out parameter'
						},
						{
							name: 'GetNumberOfOperands',
							desc: '<bool>GetNumberOfOperands <index>index <&integer>count\ncount is Out parameter'
						},
						{
							name: 'GetOperandName',
							desc: '<bool>GetOperandName <index>index <index>operandIndex <&TSTR>name\nname is Out parameter'
						},
						{
							name: 'GetOperandType',
							desc: '<bool>GetOperandType <index>index <index>operandIndex <&enum>type\ntype enums: {#system|#generated}\ntype is Out parameter'
						},
						{
							name: 'GetOperationOptions',
							desc: '<bool>GetOperationOptions <index>index <index>operandIndex <&enum>options\noptions enums: {#none|#imprint|#cookie}\noptions is Out parameter'
						},
						{
							name: 'GetOperationType',
							desc: '<bool>GetOperationType <index>index <index>operandIndex <&enum>type\ntype enums: {#union|#intersection|#subtraction|#merge|#attach|#insert}\ntype is Out parameter'
						},
						{
							name: 'GetSeamSize',
							desc: '<bool>GetSeamSize <index>index <index>operandIndex <time>time <&float>size <&interval>interval\nsize is Out parameter\ninterval is In and Out parameter'
						},
						{
							name: 'GetSeamType',
							desc: '<bool>GetSeamType <index>index <index>operandIndex <&enum>type\ntype enums: {#simple|#fillet}\ntype is Out parameter'
						},
						{
							name: 'GetSolo',
							desc: '<bool>GetSolo <index>index <index>operandIndex <&bool>solo\nsolo is Out parameter'
						},
						{
							name: 'GetSoloOperandIndex',
							desc: '<bool>GetSoloOperandIndex <index>index <&index>operandIndex\noperandIndex is Out parameter'
						},
						{
							name: 'GetSubdivs',
							desc: '<bool>GetSubdivs <index>index <index>operandIndex <time>time <&integer>subdivs <&interval>interval\nsubdivs is Out parameter\ninterval is In and Out parameter'
						},
						{
							name: 'HasSubdivs',
							desc: '<bool>HasSubdivs <index>index <index>operandIndex <time>time <&bool>sub\nsub is Out parameter'
						},
						{
							name: 'RemoveOperand',
							desc: '<bool>RemoveOperand <index>index <index>operandIndex'
						},
						{
							name: 'SetDisable',
							desc: '<bool>SetDisable <index>index <index>operandIndex <bool>disable'
						},
						{
							name: 'SetOperandName',
							desc: '<bool>SetOperandName <index>index <index>operandIndex <&TSTR>name\nname is In parameter'
						},
						{
							name: 'SetOperationOptions',
							desc: '<bool>SetOperationOptions <index>index <index>operandIndex <enum>options\noptions enums: {#none|#imprint|#cookie}'
						},
						{
							name: 'SetOperationType',
							desc: '<bool>SetOperationType <index>index <index>operandIndex <enum>type\ntype enums: {#union|#intersection|#subtraction|#merge|#attach|#insert}'
						},
						{
							name: 'SetSeamSize',
							desc: '<bool>SetSeamSize <index>index <index>operandIndex <time>time <float>size'
						},
						{
							name: 'SetSeamType',
							desc: '<bool>SetSeamType <index>index <index>operandIndex <enum>type\ntype enums: {#simple|#fillet}'
						},
						{
							name: 'SetSolo',
							desc: '<bool>SetSolo <index>index <index>operandIndex <bool>solo'
						},
						{
							name: 'SetSubdivs',
							desc: '<bool>SetSubdivs <index>index <index>operandIndex <time>time <integer>subdivs'
						}
					]
				}
			},
			{
				name: 'browserMgr',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'newBrowser',
							desc: '<Interface>newBrowser <string>rootURL <boolean>showDirectory <boolean>showContent <boolean>showToolbar <boolean>showMenu'
						},
						{
							name: 'numBrowsers()',
							desc: '<integer>numBrowsers()'
						}
					]
				}
			},
			{
				name: 'ContainerPreferences',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'displayStatusOverride',
							desc: 'enum : Read|Write'
						},
						{
							name: 'saveAsPreviousAccessType',
							desc: 'enum : Read|Write'
						},
						{
							name: 'updateCheck',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'updateOnLoad',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'updateOnReload',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'displayStatusOverride',
							desc: 'displayStatusOverride enums: {#always|#never|#perContainer}'
						},
						{
							name: 'saveAsPreviousAccessType',
							desc: 'saveAsPreviousAccessType enums: {#noAccess|#onlyEditInPlace|#onlyAddNewObjects|#anythingUnlocked}'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'CreaseSetManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'CanSetCreaseColor',
							desc: '<bool>CanSetCreaseColor <index>index'
						},
						{
							name: 'CanSetCreaseColorVisibility',
							desc: '<bool>CanSetCreaseColorVisibility <index>index'
						},
						{
							name: 'CanSetCreaseContainerName',
							desc: '<bool>CanSetCreaseContainerName <index>index'
						},
						{
							name: 'CanSetCreaseName',
							desc: '<bool>CanSetCreaseName <index>index'
						},
						{
							name: 'CanSetCreaseValue',
							desc: '<bool>CanSetCreaseValue <index>index'
						},
						{
							name: 'GetCreaseColor',
							desc: '<bool>GetCreaseColor <index>index <&color>color\ncolor is Out parameter'
						},
						{
							name: 'GetCreaseColorVisibility',
							desc: '<bool>GetCreaseColorVisibility <index>index'
						},
						{
							name: 'GetCreaseContainerName',
							desc: '<bool>GetCreaseContainerName <index>index <&TSTR>name\nname is Out parameter'
						},
						{
							name: 'GetCreaseEntityCount',
							desc: '<bool>GetCreaseEntityCount <index>index <&integer>count\ncount is Out parameter'
						},
						{
							name: 'GetCreaseName',
							desc: '<bool>GetCreaseName <index>index <&TSTR>name\nname is Out parameter'
						},
						{
							name: 'GetCreaseType',
							desc: '<bool>GetCreaseType <index>index <&integer>type\ntype is Out parameter'
						},
						{
							name: 'GetCreaseValue',
							desc: '<bool>GetCreaseValue <index>index <time>time <&float>value <&interval>interval\nvalue is Out parameter\ninterval is In and Out parameter'
						},
						{
							name: 'GetNodelistAll',
							desc: '<bool>GetNodelistAll <&node array>nodetab\nnodetab is Out parameter'
						},
						{
							name: 'GetNodelistSingle',
							desc: '<bool>GetNodelistSingle <index>index <&node array>nodetab\nnodetab is Out parameter'
						},
						{
							name: 'GetNumCreaseSets',
							desc: '<bool>GetNumCreaseSets <&integer>count\ncount is Out parameter'
						},
						{
							name: 'GetValidity',
							desc: '<bool>GetValidity <time>time <&interval>interval\ninterval is Out parameter'
						},
						{
							name: 'SetCreaseColor',
							desc: '<bool>SetCreaseColor <index>index <color>color'
						},
						{
							name: 'SetCreaseContainerName',
							desc: '<bool>SetCreaseContainerName <index>index <string>name'
						},
						{
							name: 'SetCreaseName',
							desc: '<bool>SetCreaseName <index>index <string>name'
						},
						{
							name: 'SetCreaseValue',
							desc: '<bool>SetCreaseValue <index>index <time>time <float>value'
						}
					]
				}
			},
			{
				name: 'custAttribCollapseManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'retainSubAnimCAs',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'surviveState',
							desc: 'boolean : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'CustomControlsOptions',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'PrintIconPaths',
							desc: 'bool : Read|Write'
						},
						{
							name: 'PrintTextClippingIssues',
							desc: 'bool : Read|Write'
						},
						{
							name: 'TextClippingIssuesSensitivityX',
							desc: 'integer : Read|Write'
						},
						{
							name: 'TextClippingIssuesSensitivityY',
							desc: 'integer : Read|Write'
						},
						{
							name: 'UIUserScaleFactor',
							desc: 'float : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'SetPrintIconPathsPersist',
							desc: '<void>SetPrintIconPathsPersist <bool>print_paths <bool>persist'
						},
						{
							name: 'SetPrintTextClippingIssuesPersist',
							desc: '<void>SetPrintTextClippingIssuesPersist <bool>print_issues <bool>persist'
						},
						{
							name: 'SetTextClippingIssuesSensitivityXPersist',
							desc: '<void>SetTextClippingIssuesSensitivityXPersist <integer>sensitivity <bool>persist'
						}
					]
				}
			},
			{
				name: 'defaultActions',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'getMsgLogMsgs',
							desc: '<TSTR by value array>getMsgLogMsgs <enum>eventID\neventID enums: {#missingExtFiles|#missingDLLs|#missingXRefs|#missingUVW|#unsupportedRendereffect|#invalidXRefFiles}'
						},
						{
							name: 'getActionTitle',
							desc: '<TSTR by value>getActionTitle <enum>eventID\neventID enums: {#missingExtFiles|#missingDLLs|#missingXRefs|#missingUVW|#unsupportedRendereffect|#invalidXRefFiles}'
						},
						{
							name: 'getActionTitleByIndex',
							desc: '<TSTR by value>getActionTitleByIndex <index>index'
						},
						{
							name: 'getMsgLogMsg',
							desc: '<TSTR by value>getMsgLogMsg <enum>eventID <index>index\neventID enums: {#missingExtFiles|#missingDLLs|#missingXRefs|#missingUVW|#unsupportedRendereffect|#invalidXRefFiles}'
						},
						{
							name: 'deleteAction',
							desc: '<boolean>deleteAction <enum>eventID\neventID enums: {#missingExtFiles|#missingDLLs|#missingXRefs|#missingUVW|#unsupportedRendereffect|#invalidXRefFiles}'
						},
						{
							name: 'getAction',
							desc: '<boolean>getAction <enum>eventID <&enum array>action\neventID enums: {#missingExtFiles|#missingDLLs|#missingXRefs|#missingUVW|#unsupportedRendereffect|#invalidXRefFiles}\naction enums: {#logToFile|#logmsg|#abort}\naction is Out parameter'
						},
						{
							name: 'logEntry',
							desc: '<boolean>logEntry <enum>eventID <string>message\neventID enums: {#missingExtFiles|#missingDLLs|#missingXRefs|#missingUVW|#unsupportedRendereffect|#invalidXRefFiles}'
						},
						{
							name: 'setAction',
							desc: '<boolean>setAction <enum>eventID <&enum array>action title:<string> oldAction:<&enum array>\neventID enums: {#missingExtFiles|#missingDLLs|#missingXRefs|#missingUVW|#unsupportedRendereffect|#invalidXRefFiles}\naction enums: {#logToFile|#logmsg|#abort}\naction is In parameter\ntitle default value: undefined\noldAction enums: {#logToFile|#logmsg|#abort}\noldAction default value: #()\noldAction is Out parameter'
						},
						{
							name: 'getActionIDByIndex',
							desc: '<enum>getActionIDByIndex <index>index\ngetActionIDByIndex enums: {#missingExtFiles|#missingDLLs|#missingXRefs|#missingUVW|#unsupportedRendereffect|#invalidXRefFiles'
						},
						{
							name: 'getMsgLogID',
							desc: '<enum>getMsgLogID <index>index\ngetMsgLogID enums: {#missingExtFiles|#missingDLLs|#missingXRefs|#missingUVW|#unsupportedRendereffect|#invalidXRefFiles'
						},
						{
							name: 'getActionCount()',
							desc: '<integer>getActionCount()'
						},
						{
							name: 'getMsgLogCount',
							desc: '<integer>getMsgLogCount <enum>eventID\neventID enums: {#missingExtFiles|#missingDLLs|#missingXRefs|#missingUVW|#unsupportedRendereffect|#invalidXRefFiles}'
						},
						{
							name: 'MsgLogClear',
							desc: '<void>MsgLogClear <enum>eventID\neventID enums: {#missingExtFiles|#missingDLLs|#missingXRefs|#missingUVW|#unsupportedRendereffect|#invalidXRefFiles}'
						}
					]
				}
			},
			{
				name: 'DialogMonitorOPS',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'Enabled',
							desc: 'bool : Read|Write'
						},
						{
							name: 'Interactive',
							desc: 'bool : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'RegisterNotification',
							desc: '<bool>RegisterNotification <value>Callback ID:<name>\nRegisterNotification - no automatic redraw after invoked\nID default value: undefined'
						}
					]
				}
			},
			{
				name: 'DisplayManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'dragAndDrop',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'DownloadUrlToDisk',
							desc: '<boolean>DownloadUrlToDisk <string>url <filename>fileName <integer>flags'
						},
						{
							name: 'downloadPackage',
							desc: '<boolean>downloadPackage <&filename array>files <filename>directory <boolean>showProgress\nfiles is In and Out parameter'
						},
						{
							name: 'dropPackage',
							desc: '<boolean>dropPackage <HWND>window <&point>mousePoint <&filename array>files applyUIScaling:<bool>\nmousePoint is In and Out parameter\nfiles is In and Out parameter\napplyUIScaling default value: true'
						},
						{
							name: 'enableDragAndDrop',
							desc: '<boolean>enableDragAndDrop <HWND>window <boolean>onOff'
						},
						{
							name: 'isEnabled()',
							desc: '<boolean>isEnabled()'
						},
						{
							name: 'getDownloadDirectory()',
							desc: '<filename>getDownloadDirectory()'
						},
						{
							name: 'globalEnableDragAndDrop',
							desc: '<void>globalEnableDragAndDrop <boolean>onOff'
						}
					]
				}
			},
			{
				name: 'dxshadermanager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'IsVisible()',
							desc: '<boolean>IsVisible()'
						},
						{
							name: 'SetVisible',
							desc: '<float>SetVisible <boolean>show'
						},
						{
							name: 'getViewportManager',
							desc: '<maxObject>getViewportManager <material>material'
						}
					]
				}
			},
			{
				name: 'EPolyManipGrip',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'SetManipulateGrip',
							desc: '<void>SetManipulateGrip <bool>on <enum>gripItem\ngripItem enums: {#SSFalloff|#SSBubble|#SSPinch|#SetFlow|#LoopShift|#RingShift|#EdgeCrease|#EdgeWeight|#VertexWeight|#VertexCrease}'
						}
					]
				}
			},
			{
				name: 'FileResolutionManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'GetMaximumCacheDuration()',
							desc: '<DWORD>GetMaximumCacheDuration()'
						},
						{
							name: 'GetNumCacheHit()',
							desc: '<INT64>GetNumCacheHit()'
						},
						{
							name: 'IsCachingEnabled()',
							desc: '<bool>IsCachingEnabled()'
						},
						{
							name: 'getFullFilePath',
							desc: '<bool>getFullFilePath <&TSTR>filePath <enum>assetType byPassCache:<bool>\nfilePath is In and Out parameter\nassetType enums: {#Other|#Bitmap|#XRef|#Photometric|#Animation|#VideoPost|#BatchRender|#ExternalLink|#RenderOutput|#PreRenderScript|#PostRenderScript|#Sound|#Container|#MaxCreationGraph}\nbyPassCache default value: false'
						},
						{
							name: 'getFullFilePath_assetID',
							desc: '<bool>getFullFilePath_assetID <TSTR>assetID <&TSTR>filePath byPassCache:<bool>\nfilePath is Out parameter\nbyPassCache default value: false'
						},
						{
							name: 'GetNumAssetTypes()',
							desc: '<integer>GetNumAssetTypes()'
						},
						{
							name: 'DisableCaching()',
							desc: '<void>DisableCaching()'
						},
						{
							name: 'EnableCaching()',
							desc: '<void>EnableCaching()'
						},
						{
							name: 'SetMaximumCacheDuration',
							desc: '<void>SetMaximumCacheDuration <DWORD>newMaxDuration'
						},
						{
							name: 'doGetUniversalFileName',
							desc: '<void>doGetUniversalFileName <&TSTR>aFullFilePath\naFullFilePath is In and Out parameter'
						}
					]
				}
			},
			{
				name: 'FlightStudioExport',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'GetAutoGroup()',
							desc: '<boolean>GetAutoGroup()'
						},
						{
							name: 'GetAutoObject()',
							desc: '<boolean>GetAutoObject()'
						},
						{
							name: 'GetCopyTextures()',
							desc: '<boolean>GetCopyTextures()'
						},
						{
							name: 'GetMatrixEpsilon()',
							desc: '<float>GetMatrixEpsilon()'
						},
						{
							name: 'SetAutoGroup',
							desc: '<void>SetAutoGroup <boolean>AutoGroup'
						},
						{
							name: 'SetAutoObject',
							desc: '<void>SetAutoObject <boolean>AutoObject'
						},
						{
							name: 'SetMatrixEpsilon',
							desc: '<void>SetMatrixEpsilon <float>MatrixEpsilon'
						}
					]
				}
			},
			{
				name: 'FrameTagManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'CreateNewTag',
							desc: '<DWORD>CreateNewTag <string>name <time>time lockID:<DWORD> scale:<boolean>\nlockID default value: 0\nscale default value: true'
						},
						{
							name: 'GetLockIDByID',
							desc: '<DWORD>GetLockIDByID <DWORD>id'
						},
						{
							name: 'GetTagID',
							desc: '<DWORD>GetTagID <index>index'
						},
						{
							name: 'GetNameByID',
							desc: '<TSTR>GetNameByID <DWORD>id'
						},
						{
							name: 'GetScaleByID',
							desc: '<boolean>GetScaleByID <DWORD>id'
						},
						{
							name: 'SetLockIDByID',
							desc: '<boolean>SetLockIDByID <DWORD>id <DWORD>lockID'
						},
						{
							name: 'FindItem',
							desc: '<index>FindItem <DWORD>id'
						},
						{
							name: 'FindItemByTime',
							desc: '<index>FindItemByTime <time>time'
						},
						{
							name: 'GetTagCount()',
							desc: '<integer>GetTagCount()'
						},
						{
							name: 'GetTimeByID',
							desc: '<time>GetTimeByID <DWORD>id relative:<boolean>\nrelative default value: false'
						},
						{
							name: 'DeleteTag',
							desc: '<void>DeleteTag <DWORD>id'
						},
						{
							name: 'ResetFrameTags()',
							desc: '<void>ResetFrameTags()'
						},
						{
							name: 'SetNameByID',
							desc: '<void>SetNameByID <DWORD>id <&TSTR>name\nname is In parameter'
						},
						{
							name: 'SetScaleByID',
							desc: '<void>SetScaleByID <DWORD>id <boolean>scale'
						},
						{
							name: 'SetTimeByID',
							desc: '<void>SetTimeByID <DWORD>id <time>time relative:<boolean>\nrelative default value: false'
						}
					]
				}
			},
			{
				name: 'globalDXDisplayManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'forceSelected',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'forceSoftware',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'sceneEffectActive',
							desc: 'boolean : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'Hair',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'CanUseLights',
							desc: '<boolean>CanUseLights <node array>nodes'
						},
						{
							name: 'AddEffect',
							desc: '<void>AddEffect <boolean>showGUI'
						},
						{
							name: 'AddHairProperties',
							desc: '<void>AddHairProperties <node array>nodes'
						},
						{
							name: 'AddMod',
							desc: '<void>AddMod <node array>nodes'
						},
						{
							name: 'ExportDRA',
							desc: '<void>ExportDRA <filename>draFileName <time>time <integer>voxels'
						},
						{
							name: 'ExportDRA2',
							desc: '<void>ExportDRA2 <filename>draFileName <time>time <integer>voxels <&integer array>shaveNodeIDs\nshaveNodeIDs is In and Out parameter'
						},
						{
							name: 'Purge()',
							desc: '<void>Purge()'
						},
						{
							name: 'RemoveHairProperties',
							desc: '<void>RemoveHairProperties <node array>nodes'
						}
					]
				}
			},
			{
				name: 'HelpSystem',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'defaultLocalProductHelpPath',
							desc: 'string : Read'
						},
						{
							name: 'localProductHelpPath',
							desc: 'string : Read|Write'
						},
						{
							name: 'productHelpLocation',
							desc: 'enum : Read|Write'
						},
						{
							name: 'productHelpLocation',
							desc: 'productHelpLocation enums: {#onlineHelp|#localHelp}'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'SearchProductHelp',
							desc: '<void>SearchProductHelp <string>searchFor'
						},
						{
							name: 'ShowProductHelp',
							desc: '<void>ShowProductHelp <integer>helpContextId'
						}
					]
				}
			},
			{
				name: 'IAutoCamMax',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'HidePivotBall',
							desc: '<void>HidePivotBall <HWND>hwnd'
						},
						{
							name: 'ShowPivotBall',
							desc: '<void>ShowPivotBall <HWND>hwnd <&point2>mouse <&point3>center <boolean>useMousePoint applyUIScaling:<bool>\nmouse is In and Out parameter\ncenter is In and Out parameter\napplyUIScaling default value: true'
						}
					]
				}
			},
			{
				name: 'iDisplayGamma',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'LUTFileName',
							desc: 'filename : Read|Write'
						},
						{
							name: 'affectColorPickers',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'affectMEdit',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'colorCorrectionMode',
							desc: 'enum : Read|Write'
						},
						{
							name: 'colorCorrectionPrefMode',
							desc: 'enum : Read|Write'
						},
						{
							name: 'gamma',
							desc: 'float : Read|Write'
						},
						{
							name: 'colorCorrectionMode',
							desc: 'colorCorrectionMode enums: {#LUT|#gamma|#none}'
						},
						{
							name: 'colorCorrectionPrefMode',
							desc: 'colorCorrectionPrefMode enums: {#LUT|#gamma|#none}'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'IInteractionMode',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'CurrentMode',
							desc: 'enum : Read|Write'
						},
						{
							name: 'CurrentMode',
							desc: 'CurrentMode enums: {#3dsMaxMode|#MayaMode|#CustomizedMode}'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'InstanceMgr',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'autoMtlPropagation',
							desc: 'boolean : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'GetInstances',
							desc: '<DWORD>GetInstances <node>source <&node array>instances\ninstances is Out parameter'
						},
						{
							name: 'SetMtlOnInstances',
							desc: '<DWORD>SetMtlOnInstances <node>source <material>newMtl'
						},
						{
							name: 'CanMakeModifiersUnique',
							desc: '<bool>CanMakeModifiersUnique <&node array>nodes <&maxObject array>modifiers\nnodes is In parameter\nmodifiers is In parameter'
						},
						{
							name: 'CanMakeObjectsUnique',
							desc: '<bool>CanMakeObjectsUnique <&node array>nodes\nnodes is In parameter'
						},
						{
							name: 'MakeControllersUnique',
							desc: '<bool>MakeControllersUnique <&node array>nodes <&maxObject array>controllers <enum>multiNodeOption\nnodes is In parameter\ncontrollers is In parameter\nmultiNodeOption enums: {#prompt|#individual|#group}'
						},
						{
							name: 'MakeModifiersUnique',
							desc: '<bool>MakeModifiersUnique <&node array>nodes <&maxObject array>modifiers <enum>multiNodeOption\nnodes is In parameter\nmodifiers is In parameter\nmultiNodeOption enums: {#prompt|#individual|#group}'
						},
						{
							name: 'MakeObjectsUnique',
							desc: '<bool>MakeObjectsUnique <&node array>nodes <enum>multiNodeOption\nnodes is In parameter\nmultiNodeOption enums: {#prompt|#individual|#group}'
						}
					]
				}
			},
			{
				name: 'IsolatedVertices',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'hasPropertyDlg()',
							desc: '<bool>hasPropertyDlg()'
						},
						{
							name: 'Check',
							desc: '<enum>Check <time>time <node>nodeToCheck <&index array>results\nCheck enums: {#Failed|#Vertices|#Edges|#Faces\nresults is In and Out parameter'
						}
					]
				}
			},
			{
				name: 'IsolateSelection',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'ZoomExtents',
							desc: 'boolean : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'EnterIsolateSelectionMode()',
							desc: '<boolean>EnterIsolateSelectionMode()'
						},
						{
							name: 'ExitIsolateSelectionMode()',
							desc: '<boolean>ExitIsolateSelectionMode()'
						},
						{
							name: 'IsNodeIsolated',
							desc: '<boolean>IsNodeIsolated <node>node'
						},
						{
							name: 'IsolateSelectionModeActive()',
							desc: '<boolean>IsolateSelectionModeActive()'
						}
					]
				}
			},
			{
				name: 'IViewportShadingMgr',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'AutoDisplaySelLights',
							desc: 'bool : Read|Write'
						},
						{
							name: 'DefaultLightCastShadows',
							desc: 'bool : Read|Write'
						},
						{
							name: 'GlobalShadowIntensity',
							desc: 'float : Read|Write'
						},
						{
							name: 'MaxActiveLight',
							desc: 'integer : Read|Write'
						},
						{
							name: 'ShadingLimits',
							desc: 'enum : Read|Write'
						},
						{
							name: 'ShadowFilterSize',
							desc: 'float : Read|Write'
						},
						{
							name: 'UpdateShadowsInActiveViewportOnly',
							desc: 'bool : Read|Write'
						},
						{
							name: 'UseGITransparency',
							desc: 'bool : Read|Write'
						},
						{
							name: 'UseTransparencyInShadows',
							desc: 'bool : Read|Write'
						},
						{
							name: 'ShadingLimits',
							desc: 'ShadingLimits enums: {#None|#Good|#Best}'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'IsLightNodeSupported',
							desc: '<bool>IsLightNodeSupported <node>LightNode'
						},
						{
							name: 'IsShadingLimitValid',
							desc: '<bool>IsShadingLimitValid <enum>ShadingLimits\nShadingLimits enums: {#None|#Good|#Best}'
						},
						{
							name: 'CastShadowsSelectedOnly',
							desc: '<void>CastShadowsSelectedOnly <bool>Enabled'
						},
						{
							name: 'DisplayOnlySelectedLights()',
							desc: '<void>DisplayOnlySelectedLights()'
						},
						{
							name: 'GetViewportShadingLights',
							desc: '<void>GetViewportShadingLights <&node array>nodeList <enum>lightProperty\nnodeList is In and Out parameter\nlightProperty enums: {#ShadowCasting|#Illuminating|#Locked}'
						},
						{
							name: 'LockSelectedLights',
							desc: '<void>LockSelectedLights <bool>locked'
						},
						{
							name: 'ReviewGPUDiagnostics()',
							desc: '<void>ReviewGPUDiagnostics()'
						},
						{
							name: 'SelectIlluminatingLights()',
							desc: '<void>SelectIlluminatingLights()'
						},
						{
							name: 'SelectShadowCastingLights()',
							desc: '<void>SelectShadowCastingLights()'
						}
					]
				}
			},
			{
				name: 'LayerManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'count',
							desc: 'integer : Read'
						},
						{
							name: 'current',
							desc: 'Interface : Read'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'getLayer',
							desc: '<Interface>getLayer <integer>which\ngetLayer - no automatic redraw after invoked'
						},
						{
							name: 'getLayerFromName',
							desc: '<Interface>getLayerFromName <string>name\ngetLayerFromName - no automatic redraw after invoked'
						},
						{
							name: 'newLayerFromName',
							desc: '<Interface>newLayerFromName <string>name\nnewLayerFromName - no automatic redraw after invoked'
						},
						{
							name: 'deleteLayerByName',
							desc: '<bool>deleteLayerByName <string>name\ndeleteLayerByName - no automatic redraw after invoked'
						},
						{
							name: 'doesLayerHierarchyContainNodes',
							desc: '<bool>doesLayerHierarchyContainNodes <string>name\ndoesLayerHierarchyContainNodes - no automatic redraw after invoked'
						},
						{
							name: 'deleteLayerHierarchy',
							desc: '<integer>deleteLayerHierarchy <string>name forceDelete:<bool>\ndeleteLayerHierarchy - no automatic redraw after invoked\nforceDelete default value: false'
						},
						{
							name: 'editLayerByName',
							desc: '<void>editLayerByName <string>name\neditLayerByName - no automatic redraw after invoked'
						},
						{
							name: 'layerPropDialog',
							desc: '<void>layerPropDialog <&maxObject array>layerList\nlayerPropDialog - no automatic redraw after invoked\nlayerList is In and Out parameter'
						}
					]
				}
			},
			{
				name: 'LightingAnalysisOverlayFactory',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'LockedComponentsMan',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'LockedTracksMan',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'unLockOverride',
							desc: 'bool : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'GetExposedUI',
							desc: '<bool>GetExposedUI <maxObject>anim'
						},
						{
							name: 'GetLocked',
							desc: '<bool>GetLocked <maxObject>anim <maxObject>client <index>subNum <bool>checkOverride'
						},
						{
							name: 'IsLockable',
							desc: '<bool>IsLockable <maxObject>anim <maxObject>client <index>subNum'
						},
						{
							name: 'GetUberUnLockOverride()',
							desc: '<integer>GetUberUnLockOverride()'
						},
						{
							name: 'FindLockedAnims',
							desc: '<void>FindLockedAnims <bool>locked <bool>checkOverride <maxObject>refTarget <&maxObject array>anims <&maxObject array>clients <&index array>subNums\nanims is In and Out parameter\nclients is In and Out parameter\nsubNums is In and Out parameter'
						},
						{
							name: 'PopUberUnLockOverride()',
							desc: '<void>PopUberUnLockOverride()'
						},
						{
							name: 'PushUberUnLockOverride()',
							desc: '<void>PushUberUnLockOverride()'
						},
						{
							name: 'SetExposedUI',
							desc: '<void>SetExposedUI <bool>expose <&maxObject array>anims\nanims is In and Out parameter'
						},
						{
							name: 'SetLocks',
							desc: '<void>SetLocks <bool>lock <&maxObject array>anims <&maxObject array>clients <&index array>subNums <bool>includeChildren\nanims is In and Out parameter\nclients is In and Out parameter\nsubNums is In and Out parameter'
						},
						{
							name: 'ToggleLocks',
							desc: '<void>ToggleLocks <&maxObject array>anims <&maxObject array>clients <&index array>subNums <bool>includeChildren\nanims is In and Out parameter\nclients is In and Out parameter\nsubNums is In and Out parameter'
						},
						{
							name: 'UnlockChildren',
							desc: '<void>UnlockChildren <&maxObject array>anims <&maxObject array>clients <&index array>subNums\nanims is In and Out parameter\nclients is In and Out parameter\nsubNums is In and Out parameter'
						}
					]
				}
			},
			{
				name: 'MainThreadTaskManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'MaterialExplorerManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'LoadMaterialExplorerConfiguration',
							desc: '<bool>LoadMaterialExplorerConfiguration <&TSTR>configurationFile\nLoadMaterialExplorerConfiguration - no automatic redraw after invoked\nconfigurationFile is In parameter'
						},
						{
							name: 'SaveMaterialExplorerConfiguration',
							desc: '<bool>SaveMaterialExplorerConfiguration <&TSTR>outputConfigurationFile\nSaveMaterialExplorerConfiguration - no automatic redraw after invoked\noutputConfigurationFile is In parameter'
						}
					]
				}
			},
			{
				name: 'maxOps',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'IsRenderActive',
							desc: 'boolean : Read'
						},
						{
							name: 'affectChildren',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'autoGrid',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'autoKeyDefaultKeyOn',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'autoKeyDefaultKeyTime',
							desc: 'time : Read|Write'
						},
						{
							name: 'hideFrozenObjects',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'inProgressiveMode',
							desc: 'boolean : Read'
						},
						{
							name: 'isNetworkLicense',
							desc: 'boolean : Read'
						},
						{
							name: 'languageToUseForFileIO',
							desc: 'enum : Read|Write'
						},
						{
							name: 'legacyFilesCanBeStoredUsingUTF8',
							desc: 'bool : Read|Write'
						},
						{
							name: 'mtlDlgMode',
							desc: 'enum : Read|Write'
						},
						{
							name: 'nameSuffixLength',
							desc: 'integer : Read|Write'
						},
						{
							name: 'overrideControllerRangeDefault',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'overrideLanguageSpecifiedInSceneFile',
							desc: 'bool : Read|Write'
						},
						{
							name: 'paintSelBrushSize',
							desc: 'integer : Read|Write'
						},
						{
							name: 'paintSelBrushSizeUnscaled',
							desc: 'integer : Read|Write'
						},
						{
							name: 'pivotMode',
							desc: 'enum : Read|Write'
						},
						{
							name: 'productAppID',
							desc: 'enum : Read'
						},
						{
							name: 'rendUseIterative',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'setKeyFilters',
							desc: 'enum by value array : Read'
						},
						{
							name: 'setKeyMode',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'setKeyNodeSetCurrent',
							desc: 'TSTR : Read|Write'
						},
						{
							name: 'setKeyNodeSets',
							desc: 'TSTR by value array : Read'
						},
						{
							name: 'setKeySuspend',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'showWorldAxis',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'springQuickEditMode',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'springRollingStart',
							desc: 'integer : Read|Write'
						},
						{
							name: 'startNewShapeLock',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'trackbar',
							desc: 'Interface : Read'
						},
						{
							name: 'trajectoryAddKeyMode',
							desc: 'bool : Read|Write'
						},
						{
							name: 'trajectoryKeySubMode',
							desc: 'bool : Read|Write'
						},
						{
							name: 'trajectoryMode',
							desc: 'bool : Read|Write'
						},
						{
							name: 'useCodePageSpecifiedInSceneFile',
							desc: 'bool : Read|Write'
						},
						{
							name: 'languageToUseForFileIO',
							desc: 'languageToUseForFileIO enums: {#current|#English|#German|#French|#Japanese|#Korean|#Chinese}'
						},
						{
							name: 'mtlDlgMode',
							desc: 'mtlDlgMode enums: {#basic|#advanced}'
						},
						{
							name: 'pivotMode',
							desc: 'pivotMode enums: {#none|#pivotOnly|#objectOnly|#hierarchyOnly}'
						},
						{
							name: 'productAppID',
							desc: 'productAppID enums: {#max}'
						},
						{
							name: 'setKeyFilters',
							desc: 'setKeyFilters enums: {#all|#position|#rotation|#scale|#ikParams|#objParams|#custAttribs|#modifiers|#materials|#other}'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'getViewportShadingSettings()',
							desc: '<IObject>getViewportShadingSettings()'
						},
						{
							name: 'GetCurRenderElementMgr()',
							desc: '<Interface>GetCurRenderElementMgr()'
						},
						{
							name: 'GetRenderElementMgr',
							desc: '<Interface>GetRenderElementMgr <enum>\nenums: {#Production|#Draft}'
						},
						{
							name: 'getTrackBar()',
							desc: '<Interface>getTrackBar()'
						},
						{
							name: 'IncrementFileName',
							desc: '<TSTR by value>IncrementFileName <TSTR by value>fileName versionSeparatorString:<TSTR by value>\nversionSeparatorString default value: \'\''
						},
						{
							name: 'IncrementImageFileName',
							desc: '<TSTR by value>IncrementImageFileName <TSTR by value>fileName'
						},
						{
							name: 'IncrementSceneFileName',
							desc: '<TSTR by value>IncrementSceneFileName <TSTR by value>fileName'
						},
						{
							name: 'CloneNodes',
							desc: '<bool>CloneNodes <&node array>nodes offset:<point3 by value> expandHierarchy:<bool> cloneType:<enum> actualNodeList:<&node array> newNodes:<&node array>\nnodes is In parameter\noffset default value: [0,0,0]\nexpandHierarchy default value: false\ncloneType enums: {#copy|#instance|#reference}\ncloneType default value: #copy\nactualNodeList default value: #()\nactualNodeList is Out parameter\nnewNodes default value: #()\nnewNodes is Out parameter'
						},
						{
							name: 'CollapseNodeTo',
							desc: '<boolean>CollapseNodeTo <node>node <index>modIndex <boolean>noWarning'
						},
						{
							name: 'allTracksSetKeyBufferPresent()',
							desc: '<boolean>allTracksSetKeyBufferPresent()'
						},
						{
							name: 'canImportBitmap',
							desc: '<boolean>canImportBitmap <filename>fileName'
						},
						{
							name: 'getSetKeyFilterState',
							desc: '<boolean>getSetKeyFilterState <enum>filter\nfilter enums: {#all|#position|#rotation|#scale|#ikParams|#objParams|#custAttribs|#modifiers|#materials|#other}'
						},
						{
							name: 'getSetKeyMode()',
							desc: '<boolean>getSetKeyMode()'
						},
						{
							name: 'loadCUIFile',
							desc: '<boolean>loadCUIFile <filename>fileName'
						},
						{
							name: 'setSelectionType',
							desc: '<boolean>setSelectionType <boolean>auto <enum>method\nmethod enums: {#window|#crossing|#leftToRight|#rightToLeft}'
						},
						{
							name: 'setSetKeyFilterState',
							desc: '<boolean>setSetKeyFilterState <enum>filter <boolean>onOff\nfilter enums: {#all|#position|#rotation|#scale|#ikParams|#objParams|#custAttribs|#modifiers|#materials|#other}'
						},
						{
							name: 'getTransformGizmoTM()',
							desc: '<matrix3>getTransformGizmoTM()'
						},
						{
							name: 'getNodeByHandle',
							desc: '<maxObject>getNodeByHandle <DWORD>handle'
						},
						{
							name: 'CollapseNode',
							desc: '<void>CollapseNode <node>node <boolean>noWarning'
						},
						{
							name: 'activateSetKeyMode',
							desc: '<void>activateSetKeyMode <boolean>onOff'
						},
						{
							name: 'allTracksCommitSetKeyBuffer()',
							desc: '<void>allTracksCommitSetKeyBuffer()'
						},
						{
							name: 'allTracksRevertSetKeyBuffer()',
							desc: '<void>allTracksRevertSetKeyBuffer()'
						},
						{
							name: 'beginProgressiveMode()',
							desc: '<void>beginProgressiveMode()'
						},
						{
							name: 'colorById',
							desc: '<void>colorById <DWORD>id <&color>color\ncolor is Out parameter'
						},
						{
							name: 'deleteSelectedAnimation()',
							desc: '<void>deleteSelectedAnimation()'
						},
						{
							name: 'deleteSelectedTrajectoryKey()',
							desc: '<void>deleteSelectedTrajectoryKey()'
						},
						{
							name: 'endProgressiveMode()',
							desc: '<void>endProgressiveMode()'
						},
						{
							name: 'findNodes',
							desc: '<void>findNodes <&node array>templateNodes <&node array>foundNodes nodePropsToMatch:<&enum array>\ntemplateNodes is In parameter\nfoundNodes is Out parameter\nnodePropsToMatch enums: {#nodePropMaterial|#nodePropLayer}\nnodePropsToMatch default value: #()\nnodePropsToMatch is In parameter'
						},
						{
							name: 'getDefaultTangentType',
							desc: '<void>getDefaultTangentType <&enum>dfltInTangentType <&enum>dfltOutTangentType\ndfltInTangentType enums: {#smooth|#linear|#step|#fast|#slow|#custom|#flat}\ndfltInTangentType is Out parameter\ndfltOutTangentType enums: {#smooth|#linear|#step|#fast|#slow|#custom|#flat}\ndfltOutTangentType is Out parameter'
						},
						{
							name: 'persistFileLanguageSettings()',
							desc: '<void>persistFileLanguageSettings()'
						},
						{
							name: 'setActiveViewportTransparencyDisplay',
							desc: '<void>setActiveViewportTransparencyDisplay <integer>transparencyLevel'
						},
						{
							name: 'setDefaultTangentType',
							desc: '<void>setDefaultTangentType <enum>dfltInTangentType <enum>dfltOutTangentType writeInCfgFile:<boolean>\ndfltInTangentType enums: {#smooth|#linear|#step|#fast|#slow|#custom|#flat}\ndfltOutTangentType enums: {#smooth|#linear|#step|#fast|#slow|#custom|#flat}\nwriteInCfgFile default value: true'
						},
						{
							name: 'setInNonInteractiveTestMode()',
							desc: '<void>setInNonInteractiveTestMode()'
						},
						{
							name: 'startNewShape()',
							desc: '<void>startNewShape()'
						}
					]
				}
			},
			{
				name: 'MaxRibbon',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'LoadRibbonConfig',
							desc: '<void>LoadRibbonConfig <&TSTR>configFile\nLoadRibbonConfig - no automatic redraw after invoked\nconfigFile is In and Out parameter'
						},
						{
							name: 'SaveRibbonConfig',
							desc: '<void>SaveRibbonConfig <&TSTR>configFile\nSaveRibbonConfig - no automatic redraw after invoked\nconfigFile is In and Out parameter'
						},
						{
							name: 'SetRibbonDockState',
							desc: '<void>SetRibbonDockState <enum>dockState\nSetRibbonDockState - no automatic redraw after invoked\ndockState enums: {#TopDock|#BottomDock|#LeftDock|#RightDock|#Floating}'
						},
						{
							name: 'SetRibbonOrientation',
							desc: '<void>SetRibbonOrientation <enum>orientation\nSetRibbonOrientation - no automatic redraw after invoked\norientation enums: {#Horizontal|#Vertical}'
						},
						{
							name: 'ShowRibbon',
							desc: '<void>ShowRibbon <boolean>show\nShowRibbon - no automatic redraw after invoked'
						}
					]
				}
			},
			{
				name: 'memStreamMgr',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'openFile',
							desc: '<Interface>openFile <filename>fname favor_type:<enum> code_page:<integer>\nfavor_type enums: {#FAVOR_ACP|#FAVOR_UTF8}\nfavor_type default value: #FAVOR_ACP\ncode_page default value: 0'
						},
						{
							name: 'openString',
							desc: '<Interface>openString <string>string'
						}
					]
				}
			},
			{
				name: 'MeshInspector',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'Enable',
							desc: 'bool : Read|Write'
						},
						{
							name: 'RepairMesh',
							desc: 'bool : Read|Write'
						},
						{
							name: 'ShowDialog',
							desc: 'bool : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'msZip',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'fileInPackage',
							desc: '<boolean>fileInPackage <filename>fileName <&TSTR>extractDir\nextractDir is Out parameter'
						}
					]
				}
			},
			{
				name: 'MtlBrowserFilter_Manager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'MultipleEdges',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'hasPropertyDlg()',
							desc: '<bool>hasPropertyDlg()'
						},
						{
							name: 'Check',
							desc: '<enum>Check <time>time <node>nodeToCheck <&index array>results\nCheck enums: {#Failed|#Vertices|#Edges|#Faces\nresults is In and Out parameter'
						}
					]
				}
			},
			{
				name: 'MXSDebugger',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'allowBreakOnThrow',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'allowUnsafeMethods',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'breakCyclePeriod',
							desc: 'DWORD : Read|Write'
						},
						{
							name: 'breakOnError',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'breakOnException',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'breakTimeoutPeriod',
							desc: 'DWORD : Read|Write'
						},
						{
							name: 'clearOutputOnOpen',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'commandTimeOutPeriod',
							desc: 'DWORD : Read|Write'
						},
						{
							name: 'defaultBreakOnThrow',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'enabledInNetRender',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'enabledInQuietMode',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'gcTimeoutPeriod',
							desc: 'DWORD : Read|Write'
						},
						{
							name: 'hWnd',
							desc: 'HWND : Read'
						},
						{
							name: 'ignoreCaughtErrors',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'ignoreCaughtExceptions',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'ignoreCaughtThrows',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'isDialogOpen',
							desc: 'boolean : Read'
						},
						{
							name: 'showFirstFrameOnly',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'showGlobalConstants',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'stayOnTop',
							desc: 'boolean : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'closeDialog()',
							desc: '<void>closeDialog()'
						},
						{
							name: 'writeString',
							desc: '<void>writeString <string>message'
						}
					]
				}
			},
			{
				name: 'NamedSelectionSetManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'AddNewNamedSelSet',
							desc: '<boolean>AddNewNamedSelSet <&node array>nodeSet <&TSTR>setName\nAddNewNamedSelSet - no automatic redraw after invoked\nnodeSet is In parameter\nsetName is In parameter'
						},
						{
							name: 'GetNamedSelSetList',
							desc: '<boolean>GetNamedSelSetList <&node array>nodeSet <integer>setIndex\nGetNamedSelSetList - no automatic redraw after invoked\nnodeSet is In and Out parameter'
						},
						{
							name: 'RemoveNamedSelSetByIndex',
							desc: '<boolean>RemoveNamedSelSetByIndex <integer>setName\nRemoveNamedSelSetByIndex - no automatic redraw after invoked'
						},
						{
							name: 'RemoveNamedSelSetByName',
							desc: '<boolean>RemoveNamedSelSetByName <&TSTR>setName\nRemoveNamedSelSetByName - no automatic redraw after invoked\nsetName is In parameter'
						},
						{
							name: 'ReplaceNamedSelSetByIndex',
							desc: '<boolean>ReplaceNamedSelSetByIndex <&node array>nodeSet <integer>setIndex\nReplaceNamedSelSetByIndex - no automatic redraw after invoked\nnodeSet is In parameter'
						},
						{
							name: 'ReplaceNamedSelSetByName',
							desc: '<boolean>ReplaceNamedSelSetByName <&node array>nodeSet <&TSTR>setName\nReplaceNamedSelSetByName - no automatic redraw after invoked\nnodeSet is In parameter\nsetName is In parameter'
						},
						{
							name: 'GetNamedSelSetItemCount',
							desc: '<integer>GetNamedSelSetItemCount <integer>setIndex\nGetNamedSelSetItemCount - no automatic redraw after invoked'
						},
						{
							name: 'GetNamedSelSetItem',
							desc: '<node>GetNamedSelSetItem <integer>setIndex <integer>itemIndex\nGetNamedSelSetItem - no automatic redraw after invoked'
						},
						{
							name: 'GetNamedSelSetName',
							desc: '<string>GetNamedSelSetName <integer>setIndex\nGetNamedSelSetName - no automatic redraw after invoked'
						}
					]
				}
			},
			{
				name: 'NetCreateHelpers',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'NodeCloneMgrTest',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'NullInterface',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'NVIDIARenderersHelper',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'objXRefs',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'isFileDisabled',
							desc: '<boolean>isFileDisabled <filename>fname'
						},
						{
							name: 'isFileUnresolved',
							desc: '<boolean>isFileUnresolved <filename>fname'
						},
						{
							name: 'reloadFile',
							desc: '<boolean>reloadFile <filename>fname'
						},
						{
							name: 'getFileName',
							desc: '<filename>getFileName <index>index'
						},
						{
							name: 'getNumFiles()',
							desc: '<integer>getNumFiles()'
						},
						{
							name: 'getNumXRefObjects',
							desc: '<integer>getNumXRefObjects <filename>fname'
						},
						{
							name: 'getAllXRefObjects()',
							desc: '<maxObject by value array>getAllXRefObjects()'
						},
						{
							name: 'addNewXRefObject',
							desc: '<maxObject>addNewXRefObject <filename>fname <string>objname <integer>flags'
						},
						{
							name: 'getXRefObject',
							desc: '<maxObject>getXRefObject <filename>fname <index>index'
						}
					]
				}
			},
			{
				name: 'OGSDiagnostics',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'HardwareReport',
							desc: 'string : Read'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'OverlappedUVWFaces',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'hasPropertyDlg()',
							desc: '<bool>hasPropertyDlg()'
						},
						{
							name: 'Check',
							desc: '<enum>Check <time>time <node>nodeToCheck <&index array>results\nCheck enums: {#Failed|#Vertices|#Edges|#Faces\nresults is In and Out parameter'
						}
					]
				}
			},
			{
				name: 'OverlappingFaces',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'tolerance',
							desc: 'float : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'hasPropertyDlg()',
							desc: '<bool>hasPropertyDlg()'
						},
						{
							name: 'Check',
							desc: '<enum>Check <time>time <node>nodeToCheck <&index array>results\nCheck enums: {#Failed|#Vertices|#Edges|#Faces\nresults is In and Out parameter'
						}
					]
				}
			},
			{
				name: 'PaintSoftSelPresetContext',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'paramWire',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'connect',
							desc: '<bool>connect <value>fromParam <value>toParam <string>toExpr'
						},
						{
							name: 'connect2Way',
							desc: '<bool>connect2Way <value>leftParam <value>rightParam <string>leftExpr <string>rightExpr'
						},
						{
							name: 'disconnect',
							desc: '<bool>disconnect <control>controller'
						},
						{
							name: 'editController',
							desc: '<void>editController <control>controller'
						},
						{
							name: 'editControllers',
							desc: '<void>editControllers <control>leftController <control>rightController'
						},
						{
							name: 'editParam',
							desc: '<void>editParam <value>param'
						},
						{
							name: 'editParams',
							desc: '<void>editParams <value>leftParam <value>rightParam'
						},
						{
							name: 'openEditor()',
							desc: '<void>openEditor()'
						},
						{
							name: 'start()',
							desc: '<void>start()'
						}
					]
				}
			},
			{
				name: 'particleFlow',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'makeUnique',
							desc: '<bool>makeUnique <node>action'
						},
						{
							name: 'cleanUpParticleFlow',
							desc: '<integer>cleanUpParticleFlow <bool>doReport'
						},
						{
							name: 'getActionOrder()',
							desc: '<integer>getActionOrder()'
						},
						{
							name: 'getUpdateType()',
							desc: '<integer>getUpdateType()'
						},
						{
							name: 'setActionOrder',
							desc: '<integer>setActionOrder <integer>orderType'
						},
						{
							name: 'setUpdateType',
							desc: '<integer>setUpdateType <integer>updateType'
						},
						{
							name: 'synchronizeLayers',
							desc: '<integer>synchronizeLayers <bool>doReport'
						},
						{
							name: 'openParticleView()',
							desc: '<node>openParticleView()'
						},
						{
							name: 'scriptRunner()',
							desc: '<node>scriptRunner()'
						},
						{
							name: 'beginEdit()',
							desc: '<void>beginEdit()'
						},
						{
							name: 'delete',
							desc: '<void>delete <node>particleFlowItem'
						},
						{
							name: 'endEdit()',
							desc: '<void>endEdit()'
						},
						{
							name: 'presetManager()',
							desc: '<void>presetManager()'
						},
						{
							name: 'repairCacheSystem',
							desc: '<void>repairCacheSystem <bool>doReport'
						},
						{
							name: 'resetParticleView()',
							desc: '<void>resetParticleView()'
						},
						{
							name: 'setNodeEditorDisplayFlags',
							desc: '<void>setNodeEditorDisplayFlags <integer>displayFlags'
						}
					]
				}
			},
			{
				name: 'PerezAllWeather',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'PhysSunSky_ShaderGenerator',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'pluginManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'loadedPluginDllSize',
							desc: 'integer : Read'
						},
						{
							name: 'pluginDllCount',
							desc: 'integer : Read'
						},
						{
							name: 'visible',
							desc: 'boolean : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'pluginDllFullPath',
							desc: '<TSTR by value>pluginDllFullPath <index>index\npluginDllFullPath - no automatic redraw after invoked'
						},
						{
							name: 'isPluginDllLoaded',
							desc: '<boolean>isPluginDllLoaded <index>index\nisPluginDllLoaded - no automatic redraw after invoked'
						},
						{
							name: 'loadPluginDll',
							desc: '<boolean>loadPluginDll <index>index\nloadPluginDll - no automatic redraw after invoked'
						},
						{
							name: 'pluginDllSize',
							desc: '<integer>pluginDllSize <index>index\npluginDllSize - no automatic redraw after invoked'
						},
						{
							name: 'pluginDllDirectory',
							desc: '<string>pluginDllDirectory <index>index\npluginDllDirectory - no automatic redraw after invoked'
						},
						{
							name: 'pluginDllName',
							desc: '<string>pluginDllName <index>index\npluginDllName - no automatic redraw after invoked'
						}
					]
				}
			},
			{
				name: 'pop',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'DisplayType',
							desc: 'enum : Read|Write'
						},
						{
							name: 'NumFrames',
							desc: 'integer : Read|Write'
						},
						{
							name: 'RealWorldScale',
							desc: 'float : Read|Write'
						},
						{
							name: 'SeatFemalePct',
							desc: 'float : Read|Write'
						},
						{
							name: 'SeatMaxTalkAngle',
							desc: 'float : Read|Write'
						},
						{
							name: 'SeatMaxTalkDist',
							desc: 'float : Read|Write'
						},
						{
							name: 'TurnOpt',
							desc: 'enum : Read|Write'
						},
						{
							name: 'DisplayType',
							desc: 'DisplayType enums: {#StickFigure|#CrowdCustom|#CrowdSkin}'
						},
						{
							name: 'TurnOpt',
							desc: 'TurnOpt enums: {#hybrid|#maxspeed|#maxdistribution|#mindistance|#none}'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'AddFlow',
							desc: '<bool>AddFlow <node>Flow'
						},
						{
							name: 'AddIdleArea',
							desc: '<bool>AddIdleArea <node>IdleArea'
						},
						{
							name: 'AddSeat',
							desc: '<bool>AddSeat <node>Seat'
						},
						{
							name: 'RegenerateSelected',
							desc: '<bool>RegenerateSelected <time>time'
						},
						{
							name: 'SwitchSelPeopleResolution()',
							desc: '<bool>SwitchSelPeopleResolution()'
						},
						{
							name: 'NumPedestrians()',
							desc: '<integer>NumPedestrians()'
						},
						{
							name: 'NumSeatedIdlers()',
							desc: '<integer>NumSeatedIdlers()'
						},
						{
							name: 'NumStandingIdlers()',
							desc: '<integer>NumStandingIdlers()'
						},
						{
							name: 'GetPedestrian',
							desc: '<node>GetPedestrian <integer>index'
						},
						{
							name: 'GetSeatedIdler',
							desc: '<node>GetSeatedIdler <integer>index'
						},
						{
							name: 'GetStandingIdler',
							desc: '<node>GetStandingIdler <integer>index'
						},
						{
							name: 'BakeSelPeople()',
							desc: '<void>BakeSelPeople()'
						},
						{
							name: 'DeletePeople()',
							desc: '<void>DeletePeople()'
						},
						{
							name: 'DeleteSelPeople',
							desc: '<void>DeleteSelPeople <time>time'
						},
						{
							name: 'DisplayEnv',
							desc: '<void>DisplayEnv <boolean>show'
						},
						{
							name: 'DisplayMarks',
							desc: '<void>DisplayMarks <boolean>show'
						},
						{
							name: 'DisplayPeople',
							desc: '<void>DisplayPeople <boolean>show'
						},
						{
							name: 'ResimulateSelected()',
							desc: '<void>ResimulateSelected()'
						},
						{
							name: 'SaveTextureMaps',
							desc: '<void>SaveTextureMaps <boolean>save'
						},
						{
							name: 'SetSelectedSeatsGender()',
							desc: '<void>SetSelectedSeatsGender()'
						},
						{
							name: 'Simulate()',
							desc: '<void>Simulate()'
						},
						{
							name: 'SwapSelPeopleAppearance()',
							desc: '<void>SwapSelPeopleAppearance()'
						}
					]
				}
			},
			{
				name: 'ProjectionRenderMgr',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'PseudoColorManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'rangeEnd',
							desc: 'float : Read|Write'
						},
						{
							name: 'rangeStart',
							desc: 'float : Read|Write'
						},
						{
							name: 'scaleType',
							desc: 'enum : Read|Write'
						},
						{
							name: 'scaleType',
							desc: 'scaleType enums: {#linear|#logarithmic}'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'python',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'Execute',
							desc: '<enum>Execute <string>script fileName:<filename> throwOnError:<bool> clearUndoBuffer:<bool>\nExecute enums: {#success|#pathError|#argumentError|#initError|#scriptFileError|#executeError\nfileName default value: undefined\nthrowOnError default value: true\nclearUndoBuffer default value: false'
						},
						{
							name: 'ExecuteFile',
							desc: '<enum>ExecuteFile <filename>fileName throwOnError:<bool> clearUndoBuffer:<bool>\nExecuteFile enums: {#success|#pathError|#argumentError|#initError|#scriptFileError|#executeError\nthrowOnError default value: true\nclearUndoBuffer default value: false'
						},
						{
							name: 'Import',
							desc: '<value>Import <string>moduleName throwOnError:<bool>\nthrowOnError default value: true'
						},
						{
							name: 'Reload',
							desc: '<value>Reload <value>module throwOnError:<bool>\nthrowOnError default value: true'
						}
					]
				}
			},
			{
				name: 'radiosityMeshOps',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'isRadiosityValid()',
							desc: '<boolean>isRadiosityValid()'
						},
						{
							name: 'getRadiosityMesh',
							desc: '<mesh by value>getRadiosityMesh <node>radiosity_Node'
						}
					]
				}
			},
			{
				name: 'RadiosityPreferences',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'autoProcessObjectRefine',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'computeAdvancedLighting',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'computeRadiosity',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'displayInViewport',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'displayReflectanceInMEditor',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'displayResetWarning',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'saveScene',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'updateDataWhenRequiredOnStart',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'useAdvancedLighting',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'useRadiosity',
							desc: 'boolean : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'reactionMgr',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'refhierarchy',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'renderMessageManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'LogDebugMessage',
							desc: 'bool : Read|Write'
						},
						{
							name: 'LogFileAppend',
							desc: 'bool : Read|Write'
						},
						{
							name: 'LogFileON',
							desc: 'bool : Read|Write'
						},
						{
							name: 'LogFilename',
							desc: 'string : Read|Write'
						},
						{
							name: 'OpenOnError',
							desc: 'bool : Read|Write'
						},
						{
							name: 'ShowInfoMessage',
							desc: 'bool : Read|Write'
						},
						{
							name: 'ShowProgressMessage',
							desc: 'bool : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'OpenWindow()',
							desc: '<bool>OpenWindow()'
						},
						{
							name: 'HideWindow()',
							desc: '<void>HideWindow()'
						}
					]
				}
			},
			{
				name: 'renderpresets',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'LoadCategories',
							desc: '<bitArray>LoadCategories <filename>file'
						},
						{
							name: 'IsFileCompatible',
							desc: '<boolean>IsFileCompatible <integer>which <filename>file'
						},
						{
							name: 'Load',
							desc: '<boolean>Load <integer>which <filename>file <bitArray>categories loadNodes:<enum>\nloadNodes enums: {#prompt|#yes|#no|#cancel}\nloadNodes default value: #prompt'
						},
						{
							name: 'LoadAll',
							desc: '<boolean>LoadAll <integer>which <filename>file'
						},
						{
							name: 'Save',
							desc: '<boolean>Save <integer>which <filename>file <bitArray>categories'
						},
						{
							name: 'SaveAll',
							desc: '<boolean>SaveAll <integer>which <filename>file'
						},
						{
							name: 'MapCategoryToIndex',
							desc: '<integer>MapCategoryToIndex <filename>file <string>category'
						},
						{
							name: 'MapSceneCategoryToIndex',
							desc: '<integer>MapSceneCategoryToIndex <integer>which <string>category'
						},
						{
							name: 'MapIndexToCategory',
							desc: '<string>MapIndexToCategory <filename>file <integer>index'
						},
						{
							name: 'MapSceneIndexToCategory',
							desc: '<string>MapSceneIndexToCategory <integer>which <integer>index'
						}
					]
				}
			},
			{
				name: 'RevitDBManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'RevitImportWorkflow',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'rollup',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'SceneMissingPlugIns',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'GetMissingPlugInCount()',
							desc: '<integer>GetMissingPlugInCount()'
						},
						{
							name: 'GetMissingPlugInClassName',
							desc: '<string>GetMissingPlugInClassName <index>Index'
						},
						{
							name: 'GetMissingPlugInFileName',
							desc: '<string>GetMissingPlugInFileName <index>Index'
						}
					]
				}
			},
			{
				name: 'SceneRadiosity',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'radiosity',
							desc: 'value : Read|Write|Validated by Validator function'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'closePanel()',
							desc: '<void>closePanel()'
						},
						{
							name: 'showPanel()',
							desc: '<void>showPanel()'
						}
					]
				}
			},
			{
				name: 'SkinUtils',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'GetBoneBindTM',
							desc: '<matrix3 by value>GetBoneBindTM <node>skinNode <node>boneNode'
						},
						{
							name: 'GetBoneStretchTM',
							desc: '<matrix3 by value>GetBoneStretchTM <node>skinNode <node>boneNode'
						},
						{
							name: 'GetMeshBindTM',
							desc: '<matrix3 by value>GetMeshBindTM <node>skinNode'
						},
						{
							name: 'ExtractSkinData',
							desc: '<void>ExtractSkinData <node>node'
						},
						{
							name: 'GrowSelection',
							desc: '<void>GrowSelection <node>skinNode'
						},
						{
							name: 'ImportSkinData',
							desc: '<void>ImportSkinData <node>targetNode <node>sourceNode'
						},
						{
							name: 'LoopSelection',
							desc: '<void>LoopSelection <node>skinNode'
						},
						{
							name: 'RingSelection',
							desc: '<void>RingSelection <node>skinNode'
						},
						{
							name: 'SetBoneBindTM',
							desc: '<void>SetBoneBindTM <node>skinNode <node>boneNode <matrix3 by value>tm'
						},
						{
							name: 'SetBoneStretchTM',
							desc: '<void>SetBoneStretchTM <node>skinNode <node>boneNode <matrix3 by value>tm'
						},
						{
							name: 'SetMeshBindTM',
							desc: '<void>SetMeshBindTM <node>skinNode <matrix3 by value>tm'
						},
						{
							name: 'ShrinkSelection',
							desc: '<void>ShrinkSelection <node>skinNode'
						}
					]
				}
			},
			{
				name: 'SME',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'activeView',
							desc: 'index : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'GetView',
							desc: '<IObject>GetView <index>index'
						},
						{
							name: 'GetMainframe()',
							desc: '<Interface>GetMainframe()'
						},
						{
							name: 'GetMaterialPool()',
							desc: '<Interface>GetMaterialPool()'
						},
						{
							name: 'GetNavigator()',
							desc: '<Interface>GetNavigator()'
						},
						{
							name: 'GetParamEditor()',
							desc: '<Interface>GetParamEditor()'
						},
						{
							name: 'IsOpen()',
							desc: '<bool>IsOpen()'
						},
						{
							name: 'CreateView',
							desc: '<index>CreateView <string>name'
						},
						{
							name: 'GetViewByName',
							desc: '<index>GetViewByName <string>name'
						},
						{
							name: 'GetViewIndex',
							desc: '<index>GetViewIndex <IObject>view'
						},
						{
							name: 'GetNumViews()',
							desc: '<integer>GetNumViews()'
						},
						{
							name: 'DoMtlBrowseDlg',
							desc: '<maxObject>DoMtlBrowseDlg <HWND>parent <DWORD>flags <&boolean>newMat <&boolean>cancel fromLibrary:<*boolean> copiedMaterial:<*boolean>\nnewMat is In and Out parameter\ncancel is In and Out parameter\nfromLibrary default value: undefined\nfromLibrary is In and Out parameter\ncopiedMaterial default value: undefined\ncopiedMaterial is In and Out parameter'
						},
						{
							name: 'GetMtlInParamEditor()',
							desc: '<maxObject>GetMtlInParamEditor()'
						},
						{
							name: 'Close()',
							desc: '<void>Close()'
						},
						{
							name: 'DeleteView',
							desc: '<void>DeleteView <index>index <bool>ask_user'
						},
						{
							name: 'Open()',
							desc: '<void>Open()'
						},
						{
							name: 'SetMtlInParamEditor',
							desc: '<void>SetMtlInParamEditor <maxObject>mtlbase'
						}
					]
				}
			},
			{
				name: 'SubstManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'timeSlider',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'setVisible',
							desc: '<void>setVisible <boolean>visible'
						}
					]
				}
			},
			{
				name: 'TipSystem',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'tmGizmos',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'ShowMultipleTransformGizmos',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'arcRotateSnapAngle',
							desc: 'float : Read|Write'
						},
						{
							name: 'centerBoxType',
							desc: 'enum : Read|Write'
						},
						{
							name: 'dragX',
							desc: 'float : Read|Write'
						},
						{
							name: 'dragY',
							desc: 'float : Read|Write'
						},
						{
							name: 'freeRotate',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'intersectMode',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'moveGizmoRelativeSize',
							desc: 'float : Read|Write'
						},
						{
							name: 'movePlaneHandleOffset',
							desc: 'float : Read|Write'
						},
						{
							name: 'movePlaneHandleSize',
							desc: 'float : Read|Write'
						},
						{
							name: 'perpsectiveSensitivity',
							desc: 'float : Read|Write'
						},
						{
							name: 'planeOpacity',
							desc: 'float : Read|Write'
						},
						{
							name: 'rotateGizmoRelativeSize',
							desc: 'float : Read|Write'
						},
						{
							name: 'rotationIncrement',
							desc: 'float : Read|Write'
						},
						{
							name: 'rotationMode',
							desc: 'integer : Read|Write'
						},
						{
							name: 'rotationPlanarThreshold',
							desc: 'float : Read|Write'
						},
						{
							name: 'scaleGizmoRelativeSize',
							desc: 'float : Read|Write'
						},
						{
							name: 'scalePlaneHandleSize',
							desc: 'float : Read|Write'
						},
						{
							name: 'screenHandle',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'showAngleData',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'showMiniTripod',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'showPieSlice',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'size',
							desc: 'integer : Read|Write'
						},
						{
							name: 'sizeUnscaled',
							desc: 'integer : Read|Write'
						},
						{
							name: 'uniformPlaneScaling',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'uniformScaleHandleSize',
							desc: 'float : Read|Write'
						},
						{
							name: 'useCenterBox',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'useGizmo',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'useLabels',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'usePlanes',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'vecX',
							desc: 'float : Read|Write'
						},
						{
							name: 'vecY',
							desc: 'float : Read|Write'
						},
						{
							name: 'centerBoxType',
							desc: 'centerBoxType enums: {#screen|#activeGrid}'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'UtilityPanel',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'OpenUtility',
							desc: '<integer>OpenUtility <class>ClassName'
						}
					]
				}
			},
			{
				name: 'ViewCubeOps',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'All3DViewportsDisplay',
							desc: 'bool : Read|Write'
						},
						{
							name: 'AngleOfNorth',
							desc: 'float : Read|Write'
						},
						{
							name: 'AnimatedTransition',
							desc: 'bool : Read|Write'
						},
						{
							name: 'DragSnapping',
							desc: 'bool : Read|Write'
						},
						{
							name: 'DrawCompass',
							desc: 'bool : Read|Write'
						},
						{
							name: 'FitToView',
							desc: 'bool : Read|Write'
						},
						{
							name: 'KeepSceneUp',
							desc: 'bool : Read|Write'
						},
						{
							name: 'MinOpacity',
							desc: 'float : Read|Write'
						},
						{
							name: 'Size',
							desc: 'integer : Read|Write'
						},
						{
							name: 'Visibility',
							desc: 'bool : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				}
			},
			{
				name: 'visualMS',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'createForm()',
							desc: '<Interface>createForm()'
						}
					]
				}
			},
			{
				name: 'WorkingPivot',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: 'AxisSize',
							desc: 'float : Read|Write'
						},
						{
							name: 'EditMode',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'ShowCaddyEdit',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'ShowCaddyPlace',
							desc: 'boolean : Read|Write'
						},
						{
							name: 'UseMode',
							desc: 'boolean : Read|Write'
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'getPinWorkingPivot()',
							desc: '<boolean>getPinWorkingPivot()'
						},
						{
							name: 'getPlacePivotAlignToView()',
							desc: '<boolean>getPlacePivotAlignToView()'
						},
						{
							name: 'getPlacePivotSurfaceMode()',
							desc: '<boolean>getPlacePivotSurfaceMode()'
						},
						{
							name: 'getPlacePivotViewMode()',
							desc: '<boolean>getPlacePivotViewMode()'
						},
						{
							name: 'getTM()',
							desc: '<matrix3 by value>getTM()'
						},
						{
							name: 'alignToView()',
							desc: '<void>alignToView()'
						},
						{
							name: 'resetTMToNode',
							desc: '<void>resetTMToNode <node>node'
						},
						{
							name: 'setPinWorkingPivot',
							desc: '<void>setPinWorkingPivot <boolean>on'
						},
						{
							name: 'setPlacePivotSurfaceMode',
							desc: '<void>setPlacePivotSurfaceMode <boolean>on <boolean>alignToView'
						},
						{
							name: 'setPlacePivotViewMode',
							desc: '<void>setPlacePivotViewMode <boolean>on <boolean>alignToView'
						},
						{
							name: 'setTM',
							desc: '<void>setTM <&matrix3>tm\ntm is In and Out parameter'
						}
					]
				}
			},
			{
				name: 'WorkspaceManager',
				property: {
					kind: CompletionItemKind.Property,
					name: [
						{
							name: '',
							desc: ''
						}
					]
				},
				method: {
					kind: CompletionItemKind.Method,
					name: [
						{
							name: 'GetWriteDirectory()',
							desc: '<TSTR by value>GetWriteDirectory()'
						},
						{
							name: 'CreateNewWorkspace',
							desc: '<bool>CreateNewWorkspace <string>identifier <string>friendlyName'
						},
						{
							name: 'DeleteWorkspace',
							desc: '<bool>DeleteWorkspace <string>identifier'
						},
						{
							name: 'GetRunScript',
							desc: '<bool>GetRunScript <string>identifier'
						},
						{
							name: 'IsSubsystemSaving',
							desc: '<bool>IsSubsystemSaving <string>identifier <string>subSystemIdentifier'
						},
						{
							name: 'ResetToDefaults',
							desc: '<bool>ResetToDefaults <string>identifier'
						},
						{
							name: 'SetCurrentWorkspaceByIdentifier',
							desc: '<bool>SetCurrentWorkspaceByIdentifier <string>identifier'
						},
						{
							name: 'SetEntryScript',
							desc: '<bool>SetEntryScript <string>identifier <filename>script'
						},
						{
							name: 'SetExitScript',
							desc: '<bool>SetExitScript <string>identifier <filename>script'
						},
						{
							name: 'SetWorkspaceName',
							desc: '<bool>SetWorkspaceName <index>index <string>name'
						},
						{
							name: 'SetWorkspaceNameWithIdentifier',
							desc: '<bool>SetWorkspaceNameWithIdentifier <string>identifier <string>name'
						},
						{
							name: 'ToggleSubsystemSaving',
							desc: '<bool>ToggleSubsystemSaving <string>identifier <string>subSystemIdentifier'
						},
						{
							name: 'GetEntryScript',
							desc: '<filename>GetEntryScript <string>identifier'
						},
						{
							name: 'GetExitScript',
							desc: '<filename>GetExitScript <string>identifier'
						},
						{
							name: 'GetAllSubsystemsCount()',
							desc: '<integer>GetAllSubsystemsCount()'
						},
						{
							name: 'GetWorkspaceCount()',
							desc: '<integer>GetWorkspaceCount()'
						},
						{
							name: 'GetCurrentWorkspaceIdentifier()',
							desc: '<string>GetCurrentWorkspaceIdentifier()'
						},
						{
							name: 'GetSubsystemName',
							desc: '<string>GetSubsystemName <index>index'
						},
						{
							name: 'GetWorkspaceIdentifier',
							desc: '<string>GetWorkspaceIdentifier <index>index'
						},
						{
							name: 'GetWorkspaceName',
							desc: '<string>GetWorkspaceName <index>index'
						},
						{
							name: 'GetWorkspaceNameWithIdentifier',
							desc: '<string>GetWorkspaceNameWithIdentifier <string>identifier'
						},
						{
							name: 'ToggleRunScript',
							desc: '<void>ToggleRunScript <string>identifier'
						}
					]
				}
			}
		]
	},
	{
		name: 'Classes',
		desc: 'Max Class',
		kind: CompletionItemKind.Class,
		api: [
			{
				name: 'BlendMap',
				desc: 'MAXSuperClass: BakeElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'fileName', desc: 'filename' },
						{ name: 'fileType', desc: 'filename' },
						{ name: 'targetMapSlotName', desc: 'string' }
					]
				}
			},
			{
				name: 'CompleteMap',
				desc: 'MAXSuperClass: BakeElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'fileName', desc: 'filename' },
						{ name: 'fileType', desc: 'filename' },
						{ name: 'targetMapSlotName', desc: 'string' }
					]
				}
			},
			{
				name: 'diffuseMap',
				desc: 'MAXSuperClass: BakeElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'fileName', desc: 'filename' },
						{ name: 'fileType', desc: 'filename' },
						{ name: 'targetMapSlotName', desc: 'string' }
					]
				}
			},
			{
				name: 'HeightMap',
				desc: 'MAXSuperClass: BakeElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'fileName', desc: 'filename' },
						{ name: 'fileType', desc: 'filename' },
						{ name: 'targetMapSlotName', desc: 'string' }
					]
				}
			},
			{
				name: 'LightingMap',
				desc: 'MAXSuperClass: BakeElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'fileName', desc: 'filename' },
						{ name: 'fileType', desc: 'filename' },
						{ name: 'targetMapSlotName', desc: 'string' }
					]
				}
			},
			{
				name: 'NormalsMap',
				desc: 'MAXSuperClass: BakeElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'fileName', desc: 'filename' },
						{ name: 'fileType', desc: 'filename' },
						{ name: 'targetMapSlotName', desc: 'string' },
						{ name: 'useHeightAsAlpha', desc: 'boolean' },
						{ name: 'useNormalBump', desc: 'boolean' }
					]
				}
			},
			{
				name: 'ShadowsMap',
				desc: 'MAXSuperClass: BakeElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'fileName', desc: 'filename' },
						{ name: 'fileType', desc: 'filename' },
						{ name: 'targetMapSlotName', desc: 'string' }
					]
				}
			},
			{
				name: 'specularMap',
				desc: 'MAXSuperClass: BakeElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'fileName', desc: 'filename' },
						{ name: 'fileType', desc: 'filename' },
						{ name: 'targetMapSlotName', desc: 'string' }
					]
				}
			},
			{
				name: 'AlembicCamera',
				desc: 'MAXSuperClass: camera',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'object', desc: 'string' },
						{ name: 'playbackEnd', desc: 'float' },
						{ name: 'playbackFrame', desc: 'float' },
						{ name: 'playbackStart', desc: 'float' },
						{ name: 'source', desc: 'filename' }
					]
				}
			},
			{
				name: 'Freecamera',
				desc: 'MAXSuperClass: camera',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'clipManually', desc: 'boolean' },
						{ name: 'curFOV', desc: 'float' },
						{ name: 'farrange', desc: 'float' },
						{ name: 'fov', desc: 'angle' },
						{ name: 'fovType', desc: 'integer' },
						{ name: 'mpassEnabled', desc: 'boolean' },
						{ name: 'mpassRenderPerPass', desc: 'boolean' },
						{ name: 'nearrange', desc: 'float' },
						{ name: 'orthoProjection', desc: 'boolean' },
						{ name: 'showCone', desc: 'boolean' },
						{ name: 'showHorizon', desc: 'boolean' },
						{ name: 'showRanges', desc: 'boolean' },
						{ name: 'targetDistance', desc: 'float' }
					]
				}
			},
			{
				name: 'Physical',
				desc: 'MAXSuperClass: camera',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'auto_vertical_tilt_correction', desc: 'boolean' },
						{ name: 'bokeh_anisotropy', desc: 'float' },
						{ name: 'bokeh_blades_number', desc: 'integer' },
						{ name: 'bokeh_center_bias', desc: 'float' },
						{ name: 'bokeh_optical_vignetting', desc: 'float' },
						{ name: 'bokeh_shape', desc: 'integer' },
						{ name: 'distortion_cubic_amount', desc: 'float' },
						{ name: 'distortion_texture', desc: 'texturemap' },
						{ name: 'distortion_type', desc: 'integer' },
						{ name: 'exposure_gain_type', desc: 'integer' },
						{ name: 'exposure_value', desc: 'float' },
						{ name: 'f_number', desc: 'float' },
						{ name: 'film_preset', desc: 'string' },
						{ name: 'film_width_mm', desc: 'float' },
						{ name: 'focus_distance', desc: 'worldUnits' },
						{ name: 'fov', desc: 'float' },
						{ name: 'horizontal_shift', desc: 'float' },
						{ name: 'horizontal_tilt_correction', desc: 'float' },
						{ name: 'iso', desc: 'float' },
						{ name: 'lens_breathing_amount', desc: 'float' },
						{ name: 'motion_blur_enabled', desc: 'boolean' },
						{ name: 'show_camera_cone', desc: 'integer' },
						{ name: 'shutter_length_frames', desc: 'float' },
						{ name: 'shutter_length_seconds', desc: 'float' },
						{ name: 'shutter_offset_enabled', desc: 'boolean' },
						{ name: 'shutter_offset_frames', desc: 'float' },
						{ name: 'shutter_offset_seconds', desc: 'float' },
						{ name: 'shutter_unit_type', desc: 'integer' },
						{ name: 'specify_fov', desc: 'boolean' },
						{ name: 'target_distance', desc: 'worldUnits' },
						{ name: 'targeted', desc: 'boolean' },
						{ name: 'vertical_shift', desc: 'float' },
						{ name: 'vertical_tilt_correction', desc: 'float' },
						{ name: 'vignetting_amount', desc: 'float' },
						{ name: 'vignetting_enabled', desc: 'boolean' },
						{ name: 'white_balance_custom', desc: 'fRGBA' },
						{ name: 'white_balance_illuminant', desc: 'integer' },
						{ name: 'white_balance_type', desc: 'integer' },
						{ name: 'zoom_factor', desc: 'float' }
					]
				}
			},
			{
				name: 'Targetcamera',
				desc: 'MAXSuperClass: camera',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'clipManually', desc: 'boolean' },
						{ name: 'curFOV', desc: 'float' },
						{ name: 'farrange', desc: 'float' },
						{ name: 'fov', desc: 'angle' },
						{ name: 'fovType', desc: 'integer' },
						{ name: 'mpassEnabled', desc: 'boolean' },
						{ name: 'mpassRenderPerPass', desc: 'boolean' },
						{ name: 'nearrange', desc: 'float' },
						{ name: 'orthoProjection', desc: 'boolean' },
						{ name: 'showCone', desc: 'boolean' },
						{ name: 'showHorizon', desc: 'boolean' },
						{ name: 'showRanges', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Master_Layer',
				desc: 'MAXSuperClass: CtrlUserDataTypeClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'name', desc: 'string' },
						{ name: 'weight', desc: 'float' }
					]
				}
			},
			{
				name: 'CamMatchDataCustAttrib',
				desc: 'MAXSuperClass: CustAttrib',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'axis_mode', desc: 'integer' },
						{ name: 'viewport_size_x', desc: 'integer' },
						{ name: 'viewport_size_y', desc: 'integer' },
						{ name: 'xLine1_b', desc: 'point3' },
						{ name: 'xLine1_e', desc: 'point3' },
						{ name: 'xLine2_b', desc: 'point3' },
						{ name: 'xLine2_e', desc: 'point3' },
						{ name: 'yLine1_b', desc: 'point3' },
						{ name: 'yLine1_e', desc: 'point3' },
						{ name: 'yLine2_b', desc: 'point3' },
						{ name: 'yLine2_e', desc: 'point3' },
						{ name: 'zLine1_b', desc: 'point3' },
						{ name: 'zLine1_e', desc: 'point3' },
						{ name: 'zLine2_b', desc: 'point3' },
						{ name: 'zLine2_e', desc: 'point3' }
					]
				}
			},
			{
				name: 'ParameterCollectorCA',
				desc: 'MAXSuperClass: CustAttrib',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'collections', desc: 'string' }
					]
				}
			},
			{
				name: 'ViewportManagerCustAttrib',
				desc: 'MAXSuperClass: CustAttrib',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'dxStdMat', desc: 'boolean' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'SaveFXFile', desc: 'filename' }
					]
				}
			},
			{
				name: 'Blendfilter',
				desc: 'MAXSuperClass: filter',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Blend', desc: 'float' }
					]
				}
			},
			{
				name: 'Mitchell_Netravali',
				desc: 'MAXSuperClass: filter',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'blur', desc: 'float' },
						{ name: 'Ringing', desc: 'float' }
					]
				}
			},
			{
				name: 'float_limit',
				desc: 'MAXSuperClass: floatController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'enable', desc: 'boolean' },
						{ name: 'lower_limit', desc: 'float' },
						{ name: 'lower_limit_enabled', desc: 'boolean' },
						{ name: 'lower_smoothing', desc: 'float' },
						{ name: 'static_value', desc: 'float' },
						{ name: 'upper_limit', desc: 'float' },
						{ name: 'upper_limit_enabled', desc: 'boolean' },
						{ name: 'upper_smoothing', desc: 'float' }
					]
				}
			},
			{
				name: 'float_list',
				desc: 'MAXSuperClass: floatController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'weight', desc: 'float' }
					]
				}
			},
			{
				name: 'float_script',
				desc: 'MAXSuperClass: floatController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'script', desc: 'string' }
					]
				}
			},
			{
				name: 'Noise_float',
				desc: 'MAXSuperClass: floatController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'fractal', desc: 'boolean' },
						{ name: 'frequency', desc: 'float' },
						{ name: 'positive', desc: 'boolean' },
						{ name: 'rampin', desc: 'time' },
						{ name: 'rampout', desc: 'time' },
						{ name: 'roughness', desc: 'float' },
						{ name: 'seed', desc: 'integer' }
					]
				}
			},
			{
				name: 'offsetTimer',
				desc: 'MAXSuperClass: floatController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'animationLength', desc: 'time' },
						{ name: 'Direction', desc: 'integer' },
						{ name: 'graph', desc: 'maxObject' },
						{ name: 'ID', desc: 'float' },
						{ name: 'lengthOffset', desc: 'time' },
						{ name: 'numNodes', desc: 'integer' },
						{ name: 'perNodeGraph', desc: 'maxObject' },
						{ name: 'perNodeOffset', desc: 'time' },
						{ name: 'random', desc: 'float' },
						{ name: 'randomList', desc: 'int' },
						{ name: 'randomPerNodeOffset', desc: 'time' },
						{ name: 'startOffset', desc: 'time' },
						{ name: 'startTime', desc: 'time' },
						{ name: 'useGraph', desc: 'boolean' },
						{ name: 'usePerNodeGraph', desc: 'boolean' },
						{ name: 'useRandomPerNode', desc: 'boolean' },
						{ name: 'X', desc: 'boolean' },
						{ name: 'Y', desc: 'boolean' },
						{ name: 'Z', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Populate',
				desc: 'MAXSuperClass: floatController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'chairs', desc: 'node' },
						{ name: 'compressAnim', desc: 'boolean' },
						{ name: 'customMaterial', desc: 'material' },
						{ name: 'extras', desc: 'maxObject' },
						{ name: 'idleAreas', desc: 'node' },
						{ name: 'idlers', desc: 'maxObject' },
						{ name: 'internalScale', desc: 'float' },
						{ name: 'numFrames', desc: 'integer' },
						{ name: 'pedFlows', desc: 'node' },
						{ name: 'peds', desc: 'maxObject' },
						{ name: 'realWorldScale', desc: 'float' },
						{ name: 'seatFemalePct', desc: 'float' },
						{ name: 'seatMaxTalkAngle', desc: 'float' },
						{ name: 'seatMaxTalkDist', desc: 'worldUnits' },
						{ name: 'showChars', desc: 'boolean' },
						{ name: 'showDebugInfo', desc: 'boolean' },
						{ name: 'showEnvObjs', desc: 'boolean' },
						{ name: 'showMarks', desc: 'boolean' },
						{ name: 'sitters', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'Set_Key_Crtl',
				desc: 'MAXSuperClass: floatController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'keyIndex', desc: 'integer' }
					]
				}
			},
			{
				name: 'AlembicObject',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'object', desc: 'string' },
						{ name: 'playbackEnd', desc: 'float' },
						{ name: 'playbackFrame', desc: 'float' },
						{ name: 'playbackStart', desc: 'float' },
						{ name: 'source', desc: 'filename' }
					]
				}
			},
			{
				name: 'Awning',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'depth', desc: 'float' },
						{ name: 'Frame_Thickness', desc: 'float' },
						{ name: 'Generate_mapping_coords', desc: 'boolean' },
						{ name: 'Glazing_Thickness', desc: 'float' },
						{ name: 'height', desc: 'float' },
						{ name: 'Horizontal_Frame_Width', desc: 'float' },
						{ name: 'Number_of_Panels', desc: 'integer' },
						{ name: 'Percent_Open', desc: 'integer' },
						{ name: 'Rail_Width', desc: 'float' },
						{ name: 'Vertical_Frame_Width', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'BiFold',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Bevel_Angle', desc: 'float' },
						{ name: 'Bottom_Rail', desc: 'float' },
						{ name: 'Create_Frame', desc: 'boolean' },
						{ name: 'depth', desc: 'float' },
						{ name: 'Door_Offset', desc: 'float' },
						{ name: 'Double_Doors', desc: 'integer' },
						{ name: 'Flip_Hinge', desc: 'boolean' },
						{ name: 'Flip_Swing', desc: 'boolean' },
						{ name: 'Frame_Depth', desc: 'float' },
						{ name: 'frame_width', desc: 'float' },
						{ name: 'Generate_mapping_coords', desc: 'boolean' },
						{ name: 'Glass_Thickness', desc: 'float' },
						{ name: 'height', desc: 'float' },
						{ name: 'Leaf_Thickness', desc: 'float' },
						{ name: 'Muntin', desc: 'float' },
						{ name: 'Number_of_Panels_Horizontally', desc: 'integer' },
						{ name: 'Number_of_Panels_Vertically', desc: 'integer' },
						{ name: 'open', desc: 'float' },
						{ name: 'Panel_Middle_Thickness', desc: 'float' },
						{ name: 'Panel_Thickness_1', desc: 'float' },
						{ name: 'Panel_Thickness_2', desc: 'float' },
						{ name: 'Panel_Type', desc: 'integer' },
						{ name: 'Panel_Width_1', desc: 'float' },
						{ name: 'Panel_Width_2', desc: 'float' },
						{ name: 'Stiles_Top_Rail', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'Blizzard',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Birth_Rate', desc: 'integer' },
						{ name: 'Bubble_Phase_Variation', desc: 'integer' },
						{ name: 'Die__X_frames_after_collision', desc: 'time' },
						{ name: 'Die__X_frames_after_collision_variation', desc: 'percent' },
						{ name: 'Display_Until', desc: 'time' },
						{ name: 'Emitter_Length', desc: 'float' },
						{ name: 'Emitter_Start', desc: 'time' },
						{ name: 'Emitter_Stop', desc: 'time' },
						{ name: 'Emitter_Width', desc: 'float' },
						{ name: 'emitterHidden', desc: 'boolean' },
						{ name: 'Fade_Time', desc: 'time' },
						{ name: 'Growth_Time', desc: 'time' },
						{ name: 'instanceFrameOffset', desc: 'integer' },
						{ name: 'instanceKeyOffsetType', desc: 'integer' },
						{ name: 'instanceSubTree', desc: 'boolean' },
						{ name: 'instancingObject', desc: 'node' },
						{ name: 'Interparticle_Collision_Bounce', desc: 'percent' },
						{ name: 'Interparticle_Collision_Bounce_Variation', desc: 'percent' },
						{ name: 'Interparticle_Collision_Steps', desc: 'integer' },
						{ name: 'Interparticle_Collisions_On', desc: 'integer' },
						{ name: 'life', desc: 'time' },
						{ name: 'Life_Variation', desc: 'time' },
						{ name: 'lifespanValueQueue', desc: 'int' },
						{ name: 'Mapping_Distance_Base', desc: 'float' },
						{ name: 'Mapping_Time_Base', desc: 'time' },
						{ name: 'mappingType', desc: 'integer' },
						{ name: 'materialSource', desc: 'integer' },
						{ name: 'metaballAutoCoarsness', desc: 'boolean' },
						{ name: 'metaballRenderCoarsness', desc: 'float' },
						{ name: 'metaballViewCoarsness', desc: 'float' },
						{ name: 'Metaparticle_Tension', desc: 'float' },
						{ name: 'Metaparticle_Tension_Variation', desc: 'percent' },
						{ name: 'motionInfluence', desc: 'float' },
						{ name: 'motionMultiplier', desc: 'float' },
						{ name: 'motionVariation', desc: 'percent' },
						{ name: 'objectMutationQueue', desc: 'node' },
						{ name: 'particleType', desc: 'integer' },
						{ name: 'quantityMethod', desc: 'integer' },
						{ name: 'seed', desc: 'integer' },
						{ name: 'size', desc: 'float' },
						{ name: 'Size_Variation', desc: 'percent' },
						{ name: 'Spawn_Affects', desc: 'integer' },
						{ name: 'Spawn_Direction_Chaos', desc: 'float' },
						{ name: 'Spawn_Multiplier_Variation', desc: 'percent' },
						{ name: 'Spawn_Scale_Chaos', desc: 'float' },
						{ name: 'Spawn_Speed_Chaos', desc: 'float' },
						{ name: 'spawnInheritVelocity', desc: 'boolean' },
						{ name: 'spawnScaleFixed', desc: 'boolean' },
						{ name: 'spawnScaleType', desc: 'integer' },
						{ name: 'spawnSpeedFixed', desc: 'boolean' },
						{ name: 'spawnSpeedType', desc: 'integer' },
						{ name: 'spawnType', desc: 'integer' },
						{ name: 'speed', desc: 'float' },
						{ name: 'Speed_Variation', desc: 'percent' },
						{ name: 'Spin_Axis_Variation', desc: 'angle' },
						{ name: 'Spin_Phase', desc: 'angle' },
						{ name: 'Spin_Phase_Variation', desc: 'percent' },
						{ name: 'Spin_Time', desc: 'time' },
						{ name: 'Spin_Time_Variation', desc: 'percent' },
						{ name: 'spinAxisType', desc: 'integer' },
						{ name: 'standardParticle', desc: 'integer' },
						{ name: 'subsampleCreationTime', desc: 'boolean' },
						{ name: 'subsampleEmitterRotation', desc: 'boolean' },
						{ name: 'subsampleEmitterTranslation', desc: 'boolean' },
						{ name: 'Total_Number', desc: 'integer' },
						{ name: 'tumble', desc: 'float' },
						{ name: 'Tumble_Rate', desc: 'float' },
						{ name: 'viewPercent', desc: 'percent' },
						{ name: 'viewType', desc: 'integer' },
						{ name: 'X_Spin_Vector', desc: 'float' },
						{ name: 'Y_Spin_Vector', desc: 'float' },
						{ name: 'Z_Spin_Vector', desc: 'float' }
					]
				}
			},
			{
				name: 'BlobMesh',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'size', desc: 'worldUnits' },
						{ name: 'tension', desc: 'float' }
					]
				}
			},
			{
				name: 'Body_Utility',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'ApproximateArcFAO', desc: 'boolean' },
						{ name: 'BlendStrengthFAO', desc: 'float' },
						{ name: 'ConstantDistanceFAO', desc: 'boolean' },
						{ name: 'FAO_NOT_USED1', desc: 'boolean' },
						{ name: 'FAO_NOT_USED2', desc: 'boolean' },
						{ name: 'FAO_NOT_USED3', desc: 'boolean' },
						{ name: 'FAO_NOT_USED4', desc: 'boolean' },
						{ name: 'FilletAllEdgesFAO', desc: 'boolean' },
						{ name: 'FilletRadiusFAO', desc: 'float' },
						{ name: 'FirstOrEndEdgesFAO', desc: 'boolean' },
						{ name: 'LinearCrossSectionFAO', desc: 'boolean' },
						{ name: 'OffsetRadiusFAO', desc: 'float' },
						{ name: 'SecondOrSideEdgesFAO', desc: 'boolean' },
						{ name: 'SectionTypeFAO', desc: 'integer' },
						{ name: 'ShellEndFaceFAO', desc: 'boolean' },
						{ name: 'ShellRadioFAO', desc: 'integer' },
						{ name: 'ShellStartFaceFAO', desc: 'boolean' },
						{ name: 'ThirdOrStartEdgesFAO', desc: 'boolean' }
					]
				}
			},
			{
				name: 'BoneGeometry',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'height', desc: 'worldUnits' },
						{ name: 'length', desc: 'float' },
						{ name: 'taper', desc: 'percent' },
						{ name: 'width', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'Boolean3',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'displayAsShaded', desc: 'integer' },
						{ name: 'displayOption', desc: 'integer' },
						{ name: 'iconsize', desc: 'float' },
						{ name: 'materialOption', desc: 'integer' },
						{ name: 'objects', desc: 'maxObject' },
						{ name: 'operand_tm', desc: 'maxObject' },
						{ name: 'operation', desc: 'int' },
						{ name: 'option', desc: 'int' }
					]
				}
			},
			{
				name: 'Box',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'height', desc: 'float' },
						{ name: 'heightsegs', desc: 'integer' },
						{ name: 'length', desc: 'float' },
						{ name: 'lengthsegs', desc: 'integer' },
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'width', desc: 'float' },
						{ name: 'widthsegs', desc: 'integer' }
					]
				}
			},
			{
				name: 'C_Ext',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Back_Length', desc: 'float' },
						{ name: 'Back_Segments', desc: 'integer' },
						{ name: 'Back_Width', desc: 'float' },
						{ name: 'Front_Length', desc: 'float' },
						{ name: 'Front_Segments', desc: 'integer' },
						{ name: 'Front_Width', desc: 'float' },
						{ name: 'height', desc: 'float' },
						{ name: 'Height_Segments', desc: 'integer' },
						{ name: 'mapcoords', desc: 'integer' },
						{ name: 'Side_Length', desc: 'float' },
						{ name: 'Side_Segments', desc: 'integer' },
						{ name: 'Side_Width', desc: 'float' },
						{ name: 'Width_Segments', desc: 'integer' }
					]
				}
			},
			{
				name: 'Capsule',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'height', desc: 'float' },
						{ name: 'heightsegs', desc: 'integer' },
						{ name: 'heighttype', desc: 'integer' },
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'radius', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'sliceFrom', desc: 'angle' },
						{ name: 'sliceon', desc: 'boolean' },
						{ name: 'sliceTo', desc: 'angle' },
						{ name: 'smooth', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Casement',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'depth', desc: 'float' },
						{ name: 'Frame_Thickness', desc: 'float' },
						{ name: 'Generate_mapping_coords', desc: 'boolean' },
						{ name: 'Glazing_Thickness', desc: 'float' },
						{ name: 'height', desc: 'float' },
						{ name: 'Horizontal_Frame_Width', desc: 'float' },
						{ name: 'Number_of_Casements', desc: 'integer' },
						{ name: 'Opens_to_Inside', desc: 'boolean' },
						{ name: 'Panel_Width', desc: 'float' },
						{ name: 'Percent_Open', desc: 'integer' },
						{ name: 'Vertical_Frame_Width', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'CFDImportData',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'CSV_File', desc: 'filename' },
						{ name: 'Default_Value', desc: 'float' },
						{ name: 'Force_Reload_Signal', desc: 'boolean' },
						{ name: 'NbBottomLines', desc: 'integer' },
						{ name: 'NbHeaderLines', desc: 'integer' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' },
						{ name: 'separator', desc: 'string' },
						{ name: 'Weld_Dst', desc: 'worldUnits' },
						{ name: 'X_Pos__Chn', desc: 'integer' },
						{ name: 'Y_Pos__Chn', desc: 'integer' },
						{ name: 'Z_Pos__Chn', desc: 'integer' }
					]
				}
			},
			{
				name: 'CFDInterpOnSpline',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'amount', desc: 'float' },
						{ name: 'clone', desc: 'node' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' },
						{ name: 'Red_Amount', desc: 'float' },
						{ name: 'Splines', desc: 'node' }
					]
				}
			},
			{
				name: 'CFDVelocityField',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'Arrow_Scale', desc: 'float' },
						{ name: 'CFDImport_Object', desc: 'node' },
						{ name: 'Max_Length', desc: 'float' },
						{ name: 'Min_Length', desc: 'float' },
						{ name: 'Normalized_lengths', desc: 'boolean' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' },
						{ name: 'Red_Amount', desc: 'float' },
						{ name: 'X_Col', desc: 'integer' },
						{ name: 'Y_Col', desc: 'integer' },
						{ name: 'Z_Col', desc: 'integer' }
					]
				}
			},
			{
				name: 'CFractal',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'cdgEpsilon', desc: 'float' },
						{ name: 'fractalType', desc: 'integer' },
						{ name: 'iterationSteps', desc: 'integer' },
						{ name: 'mandelbulbFormulaPower', desc: 'integer' },
						{ name: 'precisionSteps', desc: 'integer' },
						{ name: 'previzType', desc: 'integer' },
						{ name: 'raymarchingSteps', desc: 'integer' },
						{ name: 'texmap', desc: 'texturemap' },
						{ name: 'valueAdaptivity', desc: 'float' }
					]
				}
			},
			{
				name: 'ChamferBox',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'fillet', desc: 'float' },
						{ name: 'Fillet_Segments', desc: 'integer' },
						{ name: 'height', desc: 'float' },
						{ name: 'Height_Segments', desc: 'integer' },
						{ name: 'length', desc: 'float' },
						{ name: 'Length_Segments', desc: 'integer' },
						{ name: 'mapcoords', desc: 'integer' },
						{ name: 'smooth', desc: 'integer' },
						{ name: 'width', desc: 'float' },
						{ name: 'Width_Segments', desc: 'integer' }
					]
				}
			},
			{
				name: 'ChamferCyl',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Cap_Segments', desc: 'integer' },
						{ name: 'fillet', desc: 'float' },
						{ name: 'Fillet_Segments', desc: 'integer' },
						{ name: 'height', desc: 'float' },
						{ name: 'Height_Segments', desc: 'integer' },
						{ name: 'mapcoords', desc: 'integer' },
						{ name: 'radius', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'Slice_From', desc: 'angle' },
						{ name: 'Slice_On', desc: 'integer' },
						{ name: 'Slice_To', desc: 'angle' },
						{ name: 'Smooth_On', desc: 'integer' }
					]
				}
			},
			{
				name: 'Civil_Structure',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'barrelPipeClearance', desc: 'float' },
						{ name: 'concentric_offset_x', desc: 'float' },
						{ name: 'concentric_offset_y', desc: 'float' },
						{ name: 'cone_height', desc: 'float' },
						{ name: 'cone_length', desc: 'float' },
						{ name: 'cone_widthOrDia', desc: 'float' },
						{ name: 'connectedPartCount', desc: 'integer' },
						{ name: 'connectedPipesCount', desc: 'integer' },
						{ name: 'cover', desc: 'string' },
						{ name: 'DisplayName', desc: 'string' },
						{ name: 'floor_thickness', desc: 'float' },
						{ name: 'frame', desc: 'string' },
						{ name: 'frame_height', desc: 'float' },
						{ name: 'frame_length', desc: 'float' },
						{ name: 'frame_type', desc: 'integer' },
						{ name: 'frame_widthOrDia', desc: 'float' },
						{ name: 'grate', desc: 'string' },
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'materialName', desc: 'string' },
						{ name: 'networkID', desc: 'string' },
						{ name: 'networkName', desc: 'string' },
						{ name: 'partDefId', desc: 'string' },
						{ name: 'partDesc', desc: 'string' },
						{ name: 'PartSizeName', desc: 'string' },
						{ name: 'PartSubType', desc: 'string' },
						{ name: 'partType', desc: 'integer' },
						{ name: 'rim_thickness', desc: 'float' },
						{ name: 'structure_height', desc: 'float' },
						{ name: 'structure_length', desc: 'float' },
						{ name: 'structure_widthOrDia', desc: 'float' },
						{ name: 'type', desc: 'integer' },
						{ name: 'use_matid', desc: 'boolean' },
						{ name: 'wall_thickness', desc: 'float' }
					]
				}
			},
			{
				name: 'Cone',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'capsegs', desc: 'integer' },
						{ name: 'height', desc: 'float' },
						{ name: 'heightsegs', desc: 'integer' },
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'radius1', desc: 'float' },
						{ name: 'radius2', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'sliceFrom', desc: 'angle' },
						{ name: 'sliceTo', desc: 'angle' },
						{ name: 'smooth', desc: 'boolean' }
					]
				}
			},
			{
				name: 'ControlContainer',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'color', desc: 'point3' },
						{ name: 'end', desc: 'time' },
						{ name: 'start', desc: 'time' }
					]
				}
			},
			{
				name: 'ControlContainerGeometry',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'color', desc: 'point3' },
						{ name: 'end', desc: 'time' },
						{ name: 'matrix1', desc: 'point3' },
						{ name: 'matrix2', desc: 'point3' },
						{ name: 'matrix3', desc: 'point3' },
						{ name: 'matrix4', desc: 'point3' },
						{ name: 'start', desc: 'time' }
					]
				}
			},
			{
				name: 'CProxy',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'animationEnabled', desc: 'boolean' },
						{ name: 'animationMode', desc: 'integer' },
						{ name: 'animationOffset', desc: 'float' },
						{ name: 'animationSpeedMultiplier', desc: 'float' },
						{ name: 'cacheInRam', desc: 'boolean' },
						{ name: 'filename', desc: 'filename' },
						{ name: 'viewportIconSize', desc: 'float' }
					]
				}
			},
			{
				name: 'CScatter',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'collisionStrictness', desc: 'float' },
						{ name: 'displayedFraction', desc: 'float' },
						{ name: 'distributionObjects', desc: 'node' },
						{ name: 'distributionObjectsDensity', desc: 'float' },
						{ name: 'enable', desc: 'boolean' },
						{ name: 'iconSize', desc: 'float' },
						{ name: 'lastRenderCamera', desc: 'point3' },
						{ name: 'pointCloudFraction', desc: 'float' },
						{ name: 'previzType', desc: 'integer' },
						{ name: 'restPoseFrame', desc: 'time' },
						{ name: 'scatteredObjects', desc: 'node' },
						{ name: 'scatteredObjectsFrequency', desc: 'float' },
						{ name: 'scatterType', desc: 'integer' },
						{ name: 'temporalConsistency', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CV_Surf',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'render_angle', desc: 'float' },
						{ name: 'render_angle2', desc: 'float' },
						{ name: 'render_length', desc: 'float' },
						{ name: 'render_sides', desc: 'integer' },
						{ name: 'render_thickness', desc: 'float' },
						{ name: 'render_threshold', desc: 'angle' },
						{ name: 'render_width', desc: 'float' }
					]
				}
			},
			{
				name: 'Cylinder',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'capsegs', desc: 'integer' },
						{ name: 'height', desc: 'float' },
						{ name: 'heightsegs', desc: 'integer' },
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'radius', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'sliceFrom', desc: 'angle' },
						{ name: 'sliceTo', desc: 'angle' },
						{ name: 'smooth', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Damper',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Base_Stud_Diameter', desc: 'float' },
						{ name: 'Base_Stud_Height', desc: 'float' },
						{ name: 'Boot_Fold_Resolution', desc: 'integer' },
						{ name: 'Boot_Folds', desc: 'integer' },
						{ name: 'Boot_Large_Diameter', desc: 'float' },
						{ name: 'Boot_Sides', desc: 'integer' },
						{ name: 'Boot_Small_Diameter', desc: 'float' },
						{ name: 'Boot_Stop_Diameter', desc: 'float' },
						{ name: 'Boot_Stop_Fillet', desc: 'float' },
						{ name: 'Boot_Stop_Fillet_Segements', desc: 'integer' },
						{ name: 'Boot_Stop_Height', desc: 'float' },
						{ name: 'Boot_Stop_Setback', desc: 'float' },
						{ name: 'Cylinder_Diameter', desc: 'float' },
						{ name: 'Cylinder_Fillet_1', desc: 'float' },
						{ name: 'Cylinder_Fillet_1_Segments', desc: 'integer' },
						{ name: 'Cylinder_Fillet_2', desc: 'float' },
						{ name: 'Cylinder_Fillet_2_Segments', desc: 'integer' },
						{ name: 'Cylinder_Height', desc: 'float' },
						{ name: 'Cylinder_Sides', desc: 'integer' },
						{ name: 'Damper_Direction', desc: 'integer' },
						{ name: 'Drag', desc: 'float' },
						{ name: 'Drag_Units', desc: 'integer' },
						{ name: 'Dynamics_Object_Type', desc: 'integer' },
						{ name: 'Enable_Boot', desc: 'integer' },
						{ name: 'End_Placement_Method', desc: 'integer' },
						{ name: 'Force', desc: 'float' },
						{ name: 'Force_Units', desc: 'integer' },
						{ name: 'Free_Damper_Height', desc: 'float' },
						{ name: 'Generate_Mapping_Coordinates', desc: 'integer' },
						{ name: 'Inside_Diameter', desc: 'float' },
						{ name: 'Piston_Diameter', desc: 'float' },
						{ name: 'Piston_Height', desc: 'float' },
						{ name: 'Piston_Sides', desc: 'integer' },
						{ name: 'Renderable_Spring', desc: 'integer' },
						{ name: 'Smooth_Boot', desc: 'integer' },
						{ name: 'Smooth_Cylinder', desc: 'integer' },
						{ name: 'Smooth_Piston', desc: 'integer' }
					]
				}
			},
			{
				name: 'Editable_mesh',
				desc: 'MAXSuperClass: GeometryClass',
			},
			{
				name: 'Editable_Poly',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'affectBackfacing', desc: 'boolean' },
						{ name: 'autoSmoothThreshold', desc: 'angle' },
						{ name: 'bevelHeight', desc: 'worldUnits' },
						{ name: 'bevelOutline', desc: 'worldUnits' },
						{ name: 'bevelType', desc: 'integer' },
						{ name: 'bridgeAdjacentAngle', desc: 'angle' },
						{ name: 'bridgeBias', desc: 'float' },
						{ name: 'bridgeReverseTriangle', desc: 'integer' },
						{ name: 'bridgeSegments', desc: 'integer' },
						{ name: 'bridgeSelected', desc: 'integer' },
						{ name: 'bridgeSmoothThreshold', desc: 'angle' },
						{ name: 'bridgeTaper', desc: 'float' },
						{ name: 'bridgeTarget1', desc: 'integer' },
						{ name: 'bridgeTarget2', desc: 'integer' },
						{ name: 'bridgeTwist1', desc: 'integer' },
						{ name: 'bridgeTwist2', desc: 'integer' },
						{ name: 'bubble', desc: 'worldUnits' },
						{ name: 'cageColor', desc: 'point3' },
						{ name: 'connectEdgePinch', desc: 'integer' },
						{ name: 'connectEdgeSegments', desc: 'integer' },
						{ name: 'connectEdgeSlide', desc: 'integer' },
						{ name: 'constrainType', desc: 'integer' },
						{ name: 'cutEndCoords', desc: 'point3' },
						{ name: 'cutNormal', desc: 'point3' },
						{ name: 'cutStartCoords', desc: 'point3' },
						{ name: 'cutStartIndex', desc: 'index' },
						{ name: 'cutStartLevel', desc: 'integer' },
						{ name: 'deleteIsolatedVerts', desc: 'boolean' },
						{ name: 'displaceAngle', desc: 'angle' },
						{ name: 'displaceDistance', desc: 'float' },
						{ name: 'displaceEdge', desc: 'float' },
						{ name: 'displaceMaxLevels', desc: 'integer' },
						{ name: 'displaceMaxTris', desc: 'integer' },
						{ name: 'displaceMethod', desc: 'integer' },
						{ name: 'displaceMinLevels', desc: 'integer' },
						{ name: 'displaceSplitMesh', desc: 'boolean' },
						{ name: 'displaceSteps', desc: 'integer' },
						{ name: 'displaceStyle', desc: 'integer' },
						{ name: 'edgeChamfer', desc: 'worldUnits' },
						{ name: 'edgeChamferInvert', desc: 'boolean' },
						{ name: 'edgeChamferOpen', desc: 'boolean' },
						{ name: 'edgeChamferSegments', desc: 'integer' },
						{ name: 'edgeChamferSmooth', desc: 'boolean' },
						{ name: 'edgeChamferSmoothThreshold', desc: 'float' },
						{ name: 'edgeChamferSmoothType', desc: 'integer' },
						{ name: 'edgeChamferTension', desc: 'float' },
						{ name: 'edgeChamferType', desc: 'integer' },
						{ name: 'edgeExtrudeHeight', desc: 'worldUnits' },
						{ name: 'edgeExtrudeWidth', desc: 'float' },
						{ name: 'edgeWeldThreshold', desc: 'worldUnits' },
						{ name: 'extrudeAlongSplineAlign', desc: 'boolean' },
						{ name: 'extrudeAlongSplineNode', desc: 'node' },
						{ name: 'extrudeAlongSplineRotation', desc: 'angle' },
						{ name: 'extrudeAlongSplineSegments', desc: 'integer' },
						{ name: 'extrudeAlongSplineTaper', desc: 'float' },
						{ name: 'extrudeAlongSplineTaperCurve', desc: 'float' },
						{ name: 'extrudeAlongSplineTwist', desc: 'angle' },
						{ name: 'extrusionType', desc: 'integer' },
						{ name: 'faceExtrudeHeight', desc: 'worldUnits' },
						{ name: 'falloff', desc: 'worldUnits' },
						{ name: 'fullyInteractive', desc: 'boolean' },
						{ name: 'hardedgedisplay', desc: 'integer' },
						{ name: 'hardedgedisplaycolor', desc: 'RGB color' },
						{ name: 'hinge', desc: 'index' },
						{ name: 'hingeAngle', desc: 'angle' },
						{ name: 'hingeSegments', desc: 'integer' },
						{ name: 'ignoreBackfacing', desc: 'boolean' },
						{ name: 'insetAmount', desc: 'worldUnits' },
						{ name: 'insetType', desc: 'integer' },
						{ name: 'isolineDisplay', desc: 'boolean' },
						{ name: 'iterations', desc: 'integer' },
						{ name: 'lockSoftSel', desc: 'boolean' },
						{ name: 'outlineAmount', desc: 'worldUnits' },
						{ name: 'paintDeformAxis', desc: 'integer' },
						{ name: 'paintDeformMode', desc: 'integer' },
						{ name: 'paintDeformSize', desc: 'worldUnits' },
						{ name: 'paintDeformStrength', desc: 'float' },
						{ name: 'paintDeformValue', desc: 'float' },
						{ name: 'paintSelMode', desc: 'integer' },
						{ name: 'paintSelSize', desc: 'worldUnits' },
						{ name: 'paintSelStrength', desc: 'float' },
						{ name: 'paintSelValue', desc: 'float' },
						{ name: 'pinch', desc: 'worldUnits' },
						{ name: 'preserveUVs', desc: 'boolean' },
						{ name: 'relaxAmount', desc: 'float' },
						{ name: 'relaxHoldBoundaryPoints', desc: 'boolean' },
						{ name: 'relaxHoldOuterPoints', desc: 'boolean' },
						{ name: 'relaxIterations', desc: 'integer' },
						{ name: 'renderIterations', desc: 'integer' },
						{ name: 'renderSmoothness', desc: 'float' },
						{ name: 'selByVertex', desc: 'boolean' },
						{ name: 'selectAngle', desc: 'angle' },
						{ name: 'selectByAngle', desc: 'boolean' },
						{ name: 'selectedCageColor', desc: 'point3' },
						{ name: 'selectMode', desc: 'integer' },
						{ name: 'separateByMaterial', desc: 'boolean' },
						{ name: 'separateBySmoothing', desc: 'boolean' },
						{ name: 'sepByMats', desc: 'boolean' },
						{ name: 'sepBySmGroups', desc: 'boolean' },
						{ name: 'showCage', desc: 'boolean' },
						{ name: 'smoothness', desc: 'float' },
						{ name: 'split', desc: 'boolean' },
						{ name: 'ssEdgeDist', desc: 'integer' },
						{ name: 'ssUseEdgeDist', desc: 'boolean' },
						{ name: 'subdivSmoothing', desc: 'boolean' },
						{ name: 'surfaceSmoothness', desc: 'float' },
						{ name: 'surfSubdivide', desc: 'boolean' },
						{ name: 'tesselateBy', desc: 'integer' },
						{ name: 'tessTension', desc: 'float' },
						{ name: 'update', desc: 'integer' },
						{ name: 'useRenderIterations', desc: 'boolean' },
						{ name: 'useRenderSmoothness', desc: 'boolean' },
						{ name: 'useSoftSel', desc: 'boolean' },
						{ name: 'useSubdivisionDisplacement', desc: 'boolean' },
						{ name: 'vertexBreak', desc: 'worldUnits' },
						{ name: 'vertexChamfer', desc: 'worldUnits' },
						{ name: 'vertexChamferOpen', desc: 'boolean' },
						{ name: 'vertexExtrudeHeight', desc: 'worldUnits' },
						{ name: 'vertexExtrudeWidth', desc: 'float' },
						{ name: 'vertSelectBy', desc: 'integer' },
						{ name: 'vertSelectionBlueRange', desc: 'integer' },
						{ name: 'vertSelectionColor', desc: 'RGB color' },
						{ name: 'vertSelectionGreenRange', desc: 'integer' },
						{ name: 'vertSelectionRedRange', desc: 'integer' },
						{ name: 'viewDependent', desc: 'boolean' },
						{ name: 'weldPixels', desc: 'integer' },
						{ name: 'weldThreshold', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'Fixed',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Chamfered_Profile', desc: 'boolean' },
						{ name: 'depth', desc: 'float' },
						{ name: 'Frame_Thickness', desc: 'float' },
						{ name: 'Generate_mapping_coords', desc: 'boolean' },
						{ name: 'Glazing_Thickness', desc: 'float' },
						{ name: 'height', desc: 'float' },
						{ name: 'Horizontal_Frame_Width', desc: 'float' },
						{ name: 'Number_of_Panels_Horizontally', desc: 'integer' },
						{ name: 'Number_of_Panels_Vertically', desc: 'integer' },
						{ name: 'Rail_Width', desc: 'float' },
						{ name: 'Vertical_Frame_Width', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'Flow',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'density', desc: 'float' },
						{ name: 'density2', desc: 'float' },
						{ name: 'directionIndex', desc: 'integer' },
						{ name: 'gender', desc: 'float' },
						{ name: 'genderSample', desc: 'integer' },
						{ name: 'laneWidth', desc: 'float' },
						{ name: 'linkPortals', desc: 'boolean' },
						{ name: 'positionSample', desc: 'integer' },
						{ name: 'running', desc: 'float' },
						{ name: 'running2', desc: 'float' },
						{ name: 'speed', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'Foliage',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'CanopyMode', desc: 'integer' },
						{ name: 'density', desc: 'float' },
						{ name: 'GenUV', desc: 'boolean' },
						{ name: 'height', desc: 'float' },
						{ name: 'LevelOfDetail', desc: 'integer' },
						{ name: 'Pruning', desc: 'float' },
						{ name: 'seed', desc: 'integer' },
						{ name: 'ShowBranches', desc: 'boolean' },
						{ name: 'ShowFlowers', desc: 'boolean' },
						{ name: 'ShowFruit', desc: 'boolean' },
						{ name: 'ShowLeaves', desc: 'boolean' },
						{ name: 'ShowRoots', desc: 'boolean' },
						{ name: 'ShowTrunk', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Gengon',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'fillet', desc: 'float' },
						{ name: 'Fillet_Segments', desc: 'integer' },
						{ name: 'height', desc: 'float' },
						{ name: 'Height_Segments', desc: 'integer' },
						{ name: 'mapcoords', desc: 'integer' },
						{ name: 'radius', desc: 'float' },
						{ name: 'Side_Segments', desc: 'integer' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'smooth', desc: 'integer' }
					]
				}
			},
			{
				name: 'GeoSphere',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'hemisphere', desc: 'boolean' },
						{ name: 'radius', desc: 'float' },
						{ name: 'smooth', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Hedra',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'family', desc: 'integer' },
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'p', desc: 'float' },
						{ name: 'q', desc: 'float' },
						{ name: 'radius', desc: 'float' },
						{ name: 'scalep', desc: 'percent' },
						{ name: 'scaleq', desc: 'percent' },
						{ name: 'scaler', desc: 'percent' }
					]
				}
			},
			{
				name: 'Hose',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Bottom_Tension', desc: 'float' },
						{ name: 'D_Section_Hose_Depth', desc: 'float' },
						{ name: 'D_Section_Hose_Fillet_Segs', desc: 'integer' },
						{ name: 'D_Section_Hose_Fillet_Size', desc: 'float' },
						{ name: 'D_Section_Hose_Round_Segs', desc: 'integer' },
						{ name: 'D_Section_Hose_Section_Rotation', desc: 'angle' },
						{ name: 'D_Section_Hose_Width', desc: 'float' },
						{ name: 'End_Placement_Method', desc: 'integer' },
						{ name: 'Flex_Cycle_Count', desc: 'integer' },
						{ name: 'Flex_Section_Diameter', desc: 'percent' },
						{ name: 'Flex_Section_Enabled', desc: 'integer' },
						{ name: 'Flex_Section_Start', desc: 'percent' },
						{ name: 'Flex_Section_Stop', desc: 'percent' },
						{ name: 'Generate_Mapping_Coordinates', desc: 'integer' },
						{ name: 'Hose_Cross_Section_Type', desc: 'integer' },
						{ name: 'Hose_Height', desc: 'float' },
						{ name: 'Rectangular_Hose_Depth', desc: 'float' },
						{ name: 'Rectangular_Hose_Fillet_Segs', desc: 'integer' },
						{ name: 'Rectangular_Hose_Fillet_Size', desc: 'float' },
						{ name: 'Rectangular_Hose_Section_Rotation', desc: 'angle' },
						{ name: 'Rectangular_Hose_Width', desc: 'float' },
						{ name: 'Renderable_Hose', desc: 'integer' },
						{ name: 'Round_Hose_Diameter', desc: 'float' },
						{ name: 'Round_Hose_Sides', desc: 'integer' },
						{ name: 'Segments_Along_Hose', desc: 'integer' },
						{ name: 'Smooth_Spring', desc: 'integer' },
						{ name: 'Top_Tension', desc: 'float' }
					]
				}
			},
			{
				name: 'HubObject',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'CATUnits', desc: 'float' },
						{ name: 'Height', desc: 'float' },
						{ name: 'HubTrans', desc: 'maxObject' },
						{ name: 'Length', desc: 'float' },
						{ name: 'PivotPosY', desc: 'float' },
						{ name: 'PivotPosZ', desc: 'float' },
						{ name: 'Width', desc: 'float' }
					]
				}
			},
			{
				name: 'IdleAreaObj',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'density', desc: 'float' },
						{ name: 'gender', desc: 'float' },
						{ name: 'groups', desc: 'float' },
						{ name: 'id', desc: 'integer' },
						{ name: 'lookat', desc: 'boolean' },
						{ name: 'lookatobj', desc: 'node' },
						{ name: 'orient', desc: 'float' },
						{ name: 'orientspread', desc: 'float' },
						{ name: 'pair', desc: 'float' },
						{ name: 'randseedGen', desc: 'integer' },
						{ name: 'randseedGroup', desc: 'integer' },
						{ name: 'randseedIndiv', desc: 'integer' },
						{ name: 'randseedMtn', desc: 'integer' },
						{ name: 'randseedRot', desc: 'integer' }
					]
				}
			},
			{
				name: 'L_Ext',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Front_Length', desc: 'float' },
						{ name: 'Front_Segments', desc: 'integer' },
						{ name: 'Front_Width', desc: 'float' },
						{ name: 'height', desc: 'float' },
						{ name: 'Height_Segments', desc: 'integer' },
						{ name: 'mapcoords', desc: 'integer' },
						{ name: 'Side_Length', desc: 'float' },
						{ name: 'Side_Segments', desc: 'integer' },
						{ name: 'Side_Width', desc: 'float' },
						{ name: 'Width_Segments', desc: 'integer' }
					]
				}
			},
			{
				name: 'L_Type_Stair',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'angle', desc: 'float' },
						{ name: 'CarriageContext', desc: 'integer' },
						{ name: 'CarriageCount', desc: 'integer' },
						{ name: 'CarriageExtOffs', desc: 'float' },
						{ name: 'CarriageHeight', desc: 'float' },
						{ name: 'CarriageIntOffs', desc: 'float' },
						{ name: 'CarriageSpace', desc: 'float' },
						{ name: 'CarriageSpacingType', desc: 'integer' },
						{ name: 'CarriageSpringFloor', desc: 'integer' },
						{ name: 'CarriageWidth', desc: 'float' },
						{ name: 'GenerateCarriage', desc: 'integer' },
						{ name: 'GenerateInsideRailing', desc: 'integer' },
						{ name: 'GenerateMapping', desc: 'integer' },
						{ name: 'GenerateOutsideRailing', desc: 'integer' },
						{ name: 'GenerateStringers', desc: 'integer' },
						{ name: 'length', desc: 'float' },
						{ name: 'length2', desc: 'float' },
						{ name: 'RailingHeight', desc: 'float' },
						{ name: 'RailingOffs', desc: 'float' },
						{ name: 'RailingRadius', desc: 'float' },
						{ name: 'RailingSegments', desc: 'integer' },
						{ name: 'StepCount', desc: 'integer' },
						{ name: 'StepDepth', desc: 'float' },
						{ name: 'StepDepth_X', desc: 'integer' },
						{ name: 'StepHeight', desc: 'float' },
						{ name: 'StepThickness', desc: 'float' },
						{ name: 'StepType', desc: 'integer' },
						{ name: 'Stepwidth', desc: 'float' },
						{ name: 'StringerDepth', desc: 'float' },
						{ name: 'StringerOffset', desc: 'float' },
						{ name: 'StringerSpringFloor', desc: 'integer' },
						{ name: 'StringerWidth', desc: 'float' },
						{ name: 'UpperOffset', desc: 'float' }
					]
				}
			},
			{
				name: 'LinkBlockInstance',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'render_angle', desc: 'float' },
						{ name: 'render_angle2', desc: 'float' },
						{ name: 'render_length', desc: 'float' },
						{ name: 'render_sides', desc: 'integer' },
						{ name: 'render_thickness', desc: 'float' },
						{ name: 'render_threshold', desc: 'angle' },
						{ name: 'render_width', desc: 'float' }
					]
				}
			},
			{
				name: 'LinkLeaf',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'render_angle', desc: 'float' },
						{ name: 'render_angle2', desc: 'float' },
						{ name: 'render_length', desc: 'float' },
						{ name: 'render_sides', desc: 'integer' },
						{ name: 'render_thickness', desc: 'float' },
						{ name: 'render_threshold', desc: 'angle' },
						{ name: 'render_width', desc: 'float' }
					]
				}
			},
			{
				name: 'Mesher',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'pick', desc: 'node' },
						{ name: 'radius', desc: 'float' },
						{ name: 'renderTimeOnly', desc: 'boolean' },
						{ name: 'time', desc: 'float' }
					]
				}
			},
			{
				name: 'ml_ETFE_cushion',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'autoEdge', desc: 'boolean' },
						{ name: 'bottom_side', desc: 'boolean' },
						{ name: 'creation_method', desc: 'integer' },
						{ name: 'frame_enabled', desc: 'boolean' },
						{ name: 'frame_height', desc: 'float' },
						{ name: 'frame_width', desc: 'float' },
						{ name: 'height', desc: 'worldUnits' },
						{ name: 'lenghtsegments', desc: 'integer' },
						{ name: 'length', desc: 'worldUnits' },
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'remove_sides', desc: 'boolean' },
						{ name: 'smooth', desc: 'boolean' },
						{ name: 'top_side', desc: 'boolean' },
						{ name: 'width', desc: 'worldUnits' },
						{ name: 'widthsegments', desc: 'integer' }
					]
				}
			},
			{
				name: 'ml_Ngon_frame',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'autoEdge', desc: 'boolean' },
						{ name: 'autoedge_threshold', desc: 'float' },
						{ name: 'creation_method', desc: 'integer' },
						{ name: 'height', desc: 'worldUnits' },
						{ name: 'hole_fillet', desc: 'worldUnits' },
						{ name: 'hole_filletsegs', desc: 'integer' },
						{ name: 'hole_inset', desc: 'float' },
						{ name: 'hole_rotation', desc: 'float' },
						{ name: 'hole_sides', desc: 'integer' },
						{ name: 'length', desc: 'worldUnits' },
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'remove_sides', desc: 'boolean' },
						{ name: 'smooth', desc: 'boolean' },
						{ name: 'width', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'ml_Ngon_hole',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'autoEdge', desc: 'boolean' },
						{ name: 'autoedge_threshold', desc: 'float' },
						{ name: 'creation_method', desc: 'integer' },
						{ name: 'height', desc: 'worldUnits' },
						{ name: 'hole_inset', desc: 'float' },
						{ name: 'hole_rotation', desc: 'float' },
						{ name: 'hole_sides', desc: 'integer' },
						{ name: 'length', desc: 'worldUnits' },
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'remove_sides', desc: 'boolean' },
						{ name: 'smooth', desc: 'boolean' },
						{ name: 'width', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'MSCollision',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Penetration', desc: 'float' },
						{ name: 'Radius', desc: 'float' }
					]
				}
			},
			{
				name: 'MultiPainter',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Animation_Offset_From', desc: 'integer' },
						{ name: 'Animation_Offset_To', desc: 'integer' },
						{ name: 'Animation_Samples', desc: 'integer' },
						{ name: 'Animation_Speed', desc: 'float' },
						{ name: 'Animation_Type', desc: 'integer' },
						{ name: 'Base_Scale', desc: 'float' },
						{ name: 'Brush_Intensity', desc: 'float' },
						{ name: 'Brush_Radius', desc: 'float' },
						{ name: 'Brush_Softness', desc: 'float' },
						{ name: 'Dummy_Size', desc: 'float' },
						{ name: 'Enable_Fractional_Frame', desc: 'boolean' },
						{ name: 'Preview_Point_Count', desc: 'float' },
						{ name: 'Preview_Type', desc: 'integer' },
						{ name: 'Random_Rotate', desc: 'float' },
						{ name: 'Random_Scale1', desc: 'float' },
						{ name: 'Random_Scale2', desc: 'float' },
						{ name: 'Scatter_Object', desc: 'node' },
						{ name: 'Scatter_Object_Collision_Rate', desc: 'float' },
						{ name: 'Scatter_Object_Probability', desc: 'float' },
						{ name: 'Scatter_Surface', desc: 'node' },
						{ name: 'Use_Normal', desc: 'float' },
						{ name: 'Z_Recovery', desc: 'float' }
					]
				}
			},
			{
				name: 'MultiScatter',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Animation_Offset_From', desc: 'integer' },
						{ name: 'Animation_Offset_To', desc: 'integer' },
						{ name: 'Animation_Samples', desc: 'integer' },
						{ name: 'Animation_Speed', desc: 'float' },
						{ name: 'Animation_Type', desc: 'integer' },
						{ name: 'AniShift_Map', desc: 'texturemap' },
						{ name: 'Auto_Update_Preview', desc: 'boolean' },
						{ name: 'Base_Scale', desc: 'float' },
						{ name: 'Border_Distance', desc: 'float' },
						{ name: 'Border_Func', desc: 'maxObject' },
						{ name: 'Border_Func_On', desc: 'boolean' },
						{ name: 'Border_Spline', desc: 'node' },
						{ name: 'Border_Spline_Inverse', desc: 'boolean' },
						{ name: 'Border_Use_Spline', desc: 'boolean' },
						{ name: 'Border_Use_Surface', desc: 'boolean' },
						{ name: 'Camera_Density_Func', desc: 'maxObject' },
						{ name: 'Camera_Density_On', desc: 'boolean' },
						{ name: 'Collision_Height', desc: 'float' },
						{ name: 'Collision_Penetration', desc: 'float' },
						{ name: 'Collision_Radius', desc: 'float' },
						{ name: 'Color_Texture1', desc: 'texturemap' },
						{ name: 'Const_Rotate', desc: 'float' },
						{ name: 'Density_Map', desc: 'texturemap' },
						{ name: 'Density_Map_Color', desc: 'RGB' },
						{ name: 'Density_Map_Color_Range', desc: 'float' },
						{ name: 'Enable_Fractional_Frame', desc: 'boolean' },
						{ name: 'GenerateCollisions', desc: 'boolean' },
						{ name: 'Min_Scale_Value', desc: 'float' },
						{ name: 'Pattern_Affect_Scale', desc: 'boolean' },
						{ name: 'Pattern_Affect_ScaleZ', desc: 'boolean' },
						{ name: 'Pattern_Affect_TM', desc: 'boolean' },
						{ name: 'Pattern_ScaleXY', desc: 'float' },
						{ name: 'Pattern_ScaleZ', desc: 'float' },
						{ name: 'PatternFluctuation', desc: 'float' },
						{ name: 'Preview_Point_Count', desc: 'float' },
						{ name: 'Random_Move1', desc: 'float' },
						{ name: 'Random_Move2', desc: 'float' },
						{ name: 'Random_Rotate', desc: 'float' },
						{ name: 'Random_Scale1', desc: 'float' },
						{ name: 'Random_Scale2', desc: 'float' },
						{ name: 'ReceiveCollisions', desc: 'boolean' },
						{ name: 'Rotation_Map', desc: 'texturemap' },
						{ name: 'Rotation_Map_Val', desc: 'float' },
						{ name: 'Scale_Map', desc: 'texturemap' },
						{ name: 'Scatter_Mask_Contrast', desc: 'float' },
						{ name: 'Scatter_Object_Mask', desc: 'texturemap' },
						{ name: 'Scatter_Object_Mask_On', desc: 'boolean' },
						{ name: 'Scatter_Object_Percent', desc: 'float' },
						{ name: 'ScatterObjectsNodeList', desc: 'node' },
						{ name: 'Seed', desc: 'integer' },
						{ name: 'SplineWidth', desc: 'float' },
						{ name: 'Surf_Density', desc: 'float' },
						{ name: 'Surf_Density_Unit', desc: 'float' },
						{ name: 'UI_Version', desc: 'integer' },
						{ name: 'Use_AniShift_Map', desc: 'boolean' },
						{ name: 'Use_Border_Spline', desc: 'boolean' },
						{ name: 'Use_Color_Texture1', desc: 'boolean' },
						{ name: 'Use_Density_Map', desc: 'boolean' },
						{ name: 'Use_Density_Map_Color', desc: 'boolean' },
						{ name: 'Use_Normal', desc: 'float' },
						{ name: 'Use_Object_Wire_Color', desc: 'boolean' },
						{ name: 'Use_Rotation_Map', desc: 'boolean' },
						{ name: 'Use_Scale_Map', desc: 'boolean' },
						{ name: 'Use_Surf_Density', desc: 'boolean' },
						{ name: 'Z_Recovery', desc: 'float' }
					]
				}
			},
			{
				name: 'nvBox',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'height', desc: 'float' },
						{ name: 'heightsegs', desc: 'integer' },
						{ name: 'length', desc: 'float' },
						{ name: 'lengthsegs', desc: 'integer' },
						{ name: 'width', desc: 'float' },
						{ name: 'widthsegs', desc: 'integer' }
					]
				}
			},
			{
				name: 'nvCapsule',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'height', desc: 'float' },
						{ name: 'heighttype', desc: 'integer' },
						{ name: 'radius', desc: 'float' }
					]
				}
			},
			{
				name: 'nvSphere',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'radius', desc: 'float' },
						{ name: 'segs', desc: 'integer' }
					]
				}
			},
			{
				name: 'OilTank',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Blend', desc: 'float' },
						{ name: 'Cap_Height', desc: 'float' },
						{ name: 'height', desc: 'float' },
						{ name: 'Height_Segments', desc: 'integer' },
						{ name: 'mapcoords', desc: 'integer' },
						{ name: 'radius', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'Slice_From', desc: 'angle' },
						{ name: 'Slice_On', desc: 'integer' },
						{ name: 'Slice_To', desc: 'angle' },
						{ name: 'Smooth_On', desc: 'integer' }
					]
				}
			},
			{
				name: 'PArray',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Birth_Rate', desc: 'integer' },
						{ name: 'Blur_Stretch', desc: 'integer' },
						{ name: 'Bubble_Amplitude', desc: 'float' },
						{ name: 'Bubble_Amplitude_Variation', desc: 'percent' },
						{ name: 'Bubble_Period', desc: 'time' },
						{ name: 'Bubble_Period_Variation', desc: 'percent' },
						{ name: 'Bubble_Phase', desc: 'angle' },
						{ name: 'Bubble_Phase_Variation', desc: 'percent' },
						{ name: 'Die__X_frames_after_collision', desc: 'time' },
						{ name: 'Die__X_frames_after_collision_variation', desc: 'percent' },
						{ name: 'Display_Until', desc: 'time' },
						{ name: 'Divergence_Angle', desc: 'angle' },
						{ name: 'emitter', desc: 'node' },
						{ name: 'Emitter_Start', desc: 'time' },
						{ name: 'Emitter_Stop', desc: 'time' },
						{ name: 'Fade_Time', desc: 'time' },
						{ name: 'formation', desc: 'integer' },
						{ name: 'fragBackMatID', desc: 'integer' },
						{ name: 'fragChunkMinimum', desc: 'integer' },
						{ name: 'fragEdgeMatID', desc: 'integer' },
						{ name: 'Fragment_Thickness', desc: 'float' },
						{ name: 'fragmentMethod', desc: 'integer' },
						{ name: 'fragOutsideMatID', desc: 'integer' },
						{ name: 'fragSmoothingAngle', desc: 'angle' },
						{ name: 'Growth_Time', desc: 'time' },
						{ name: 'iconHidden', desc: 'boolean' },
						{ name: 'iconSize', desc: 'float' },
						{ name: 'instanceFrameOffset', desc: 'integer' },
						{ name: 'instanceKeyOffsetType', desc: 'integer' },
						{ name: 'instanceSubTree', desc: 'boolean' },
						{ name: 'instancingObject', desc: 'node' },
						{ name: 'Interparticle_Collision_Bounce', desc: 'percent' },
						{ name: 'Interparticle_Collision_Bounce_Variation', desc: 'percent' },
						{ name: 'Interparticle_Collision_Steps', desc: 'integer' },
						{ name: 'Interparticle_Collisions_On', desc: 'integer' },
						{ name: 'life', desc: 'time' },
						{ name: 'Life_Variation', desc: 'time' },
						{ name: 'lifespanValueQueue', desc: 'int' },
						{ name: 'Mapping_Distance_Base', desc: 'float' },
						{ name: 'Mapping_Time_Base', desc: 'time' },
						{ name: 'mappingType', desc: 'integer' },
						{ name: 'materialSource', desc: 'integer' },
						{ name: 'metaballAutoCoarsness', desc: 'boolean' },
						{ name: 'metaballRenderCoarsness', desc: 'float' },
						{ name: 'metaballViewCoarsness', desc: 'float' },
						{ name: 'Metaparticle_Tension', desc: 'float' },
						{ name: 'Metaparticle_Tension_Variation', desc: 'percent' },
						{ name: 'motionInfluence', desc: 'float' },
						{ name: 'motionMultiplier', desc: 'float' },
						{ name: 'motionVariation', desc: 'percent' },
						{ name: 'numDistinctPoints', desc: 'integer' },
						{ name: 'objectMutationQueue', desc: 'node' },
						{ name: 'particleType', desc: 'integer' },
						{ name: 'quantityMethod', desc: 'integer' },
						{ name: 'seed', desc: 'integer' },
						{ name: 'size', desc: 'float' },
						{ name: 'Size_Variation', desc: 'percent' },
						{ name: 'Spawn_Affects', desc: 'integer' },
						{ name: 'Spawn_Direction_Chaos', desc: 'percent' },
						{ name: 'Spawn_Generations', desc: 'integer' },
						{ name: 'Spawn_Lifespan', desc: 'integer' },
						{ name: 'Spawn_Multiplier', desc: 'integer' },
						{ name: 'Spawn_Multiplier_Variation', desc: 'percent' },
						{ name: 'Spawn_Scale_Chaos', desc: 'float' },
						{ name: 'Spawn_Speed_Chaos', desc: 'float' },
						{ name: 'spawnInheritVelocity', desc: 'boolean' },
						{ name: 'spawnScaleFixed', desc: 'boolean' },
						{ name: 'spawnScaleType', desc: 'integer' },
						{ name: 'spawnSpeedFixed', desc: 'boolean' },
						{ name: 'spawnSpeedType', desc: 'integer' },
						{ name: 'spawnType', desc: 'integer' },
						{ name: 'speed', desc: 'float' },
						{ name: 'Speed_Variation', desc: 'percent' },
						{ name: 'Spin_Axis_Variation', desc: 'angle' },
						{ name: 'Spin_Phase', desc: 'angle' },
						{ name: 'Spin_Phase_Variation', desc: 'percent' },
						{ name: 'Spin_Time', desc: 'time' },
						{ name: 'Spin_Time_Variation', desc: 'percent' },
						{ name: 'spinAxisType', desc: 'integer' },
						{ name: 'standardParticle', desc: 'integer' },
						{ name: 'subsampleCreationTime', desc: 'boolean' },
						{ name: 'subsampleEmitterRotation', desc: 'boolean' },
						{ name: 'subsampleEmitterTranslation', desc: 'boolean' },
						{ name: 'Total_Number', desc: 'integer' },
						{ name: 'Use_Selected_Subobjects', desc: 'integer' },
						{ name: 'viewPercent', desc: 'percent' },
						{ name: 'viewType', desc: 'integer' },
						{ name: 'X_Spin_Vector', desc: 'float' },
						{ name: 'Y_Spin_Vector', desc: 'float' },
						{ name: 'Z_Spin_Vector', desc: 'float' }
					]
				}
			},
			{
				name: 'PCloud',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Birth_Rate', desc: 'integer' },
						{ name: 'Blur_Stretch', desc: 'integer' },
						{ name: 'Bubble_Amplitude', desc: 'float' },
						{ name: 'Bubble_Amplitude_Variation', desc: 'percent' },
						{ name: 'Bubble_Period', desc: 'time' },
						{ name: 'Bubble_Period_Variation', desc: 'percent' },
						{ name: 'Bubble_Phase', desc: 'angle' },
						{ name: 'Bubble_Phase_Variation', desc: 'percent' },
						{ name: 'Die__X_frames_after_collision', desc: 'time' },
						{ name: 'Die__X_frames_after_collision_variation', desc: 'percent' },
						{ name: 'Direction_Vector_X', desc: 'float' },
						{ name: 'Direction_Vector_Y', desc: 'float' },
						{ name: 'Direction_Vector_Z', desc: 'float' },
						{ name: 'directionVariation', desc: 'percent' },
						{ name: 'Display_Until', desc: 'time' },
						{ name: 'emitter', desc: 'node' },
						{ name: 'Emitter_Height', desc: 'float' },
						{ name: 'Emitter_Rad_Len', desc: 'float' },
						{ name: 'Emitter_Start', desc: 'time' },
						{ name: 'Emitter_Stop', desc: 'time' },
						{ name: 'Emitter_Width', desc: 'float' },
						{ name: 'emitterHidden', desc: 'boolean' },
						{ name: 'Fade_Time', desc: 'time' },
						{ name: 'formation', desc: 'integer' },
						{ name: 'Growth_Time', desc: 'time' },
						{ name: 'instanceFrameOffset', desc: 'integer' },
						{ name: 'instanceKeyOffsetType', desc: 'integer' },
						{ name: 'instanceSubTree', desc: 'boolean' },
						{ name: 'instancingObject', desc: 'node' },
						{ name: 'Interparticle_Collision_Bounce', desc: 'percent' },
						{ name: 'Interparticle_Collision_Bounce_Variation', desc: 'percent' },
						{ name: 'Interparticle_Collision_Steps', desc: 'integer' },
						{ name: 'Interparticle_Collisions_On', desc: 'integer' },
						{ name: 'life', desc: 'time' },
						{ name: 'Life_Variation', desc: 'time' },
						{ name: 'lifespanValueQueue', desc: 'int' },
						{ name: 'Mapping_Distance_Base', desc: 'float' },
						{ name: 'Mapping_Time_Base', desc: 'time' },
						{ name: 'mappingType', desc: 'integer' },
						{ name: 'materialSource', desc: 'integer' },
						{ name: 'metaballAutoCoarsness', desc: 'boolean' },
						{ name: 'metaballRenderCoarsness', desc: 'float' },
						{ name: 'metaballViewCoarsness', desc: 'float' },
						{ name: 'Metaparticle_Tension', desc: 'float' },
						{ name: 'Metaparticle_Tension_Variation', desc: 'percent' },
						{ name: 'motionInfluence', desc: 'float' },
						{ name: 'motionMultiplier', desc: 'float' },
						{ name: 'motionReferenceObject', desc: 'node' },
						{ name: 'motionType', desc: 'integer' },
						{ name: 'motionVariation', desc: 'percent' },
						{ name: 'objectMutationQueue', desc: 'node' },
						{ name: 'particleType', desc: 'integer' },
						{ name: 'quantityMethod', desc: 'integer' },
						{ name: 'seed', desc: 'integer' },
						{ name: 'size', desc: 'float' },
						{ name: 'Size_Variation', desc: 'percent' },
						{ name: 'Spawn_Direction_Chaos', desc: 'percent' },
						{ name: 'Spawn_Generations', desc: 'integer' },
						{ name: 'Spawn_Lifespan', desc: 'integer' },
						{ name: 'Spawn_Multiplier', desc: 'integer' },
						{ name: 'Spawn_Scale_Chaos', desc: 'float' },
						{ name: 'Spawn_Speed_Chaos', desc: 'float' },
						{ name: 'spawnInheritVelocity', desc: 'boolean' },
						{ name: 'spawnScaleFixed', desc: 'boolean' },
						{ name: 'spawnScaleType', desc: 'integer' },
						{ name: 'spawnSpeedFixed', desc: 'boolean' },
						{ name: 'spawnSpeedType', desc: 'integer' },
						{ name: 'spawnType', desc: 'integer' },
						{ name: 'speed', desc: 'float' },
						{ name: 'Speed_Variation', desc: 'percent' },
						{ name: 'Spin_Axis_Variation', desc: 'angle' },
						{ name: 'Spin_Phase', desc: 'angle' },
						{ name: 'Spin_Phase_Variation', desc: 'percent' },
						{ name: 'Spin_Time', desc: 'time' },
						{ name: 'Spin_Time_Variation', desc: 'percent' },
						{ name: 'spinAxisType', desc: 'integer' },
						{ name: 'standardParticle', desc: 'integer' },
						{ name: 'Total_Number', desc: 'integer' },
						{ name: 'viewPercent', desc: 'percent' },
						{ name: 'viewType', desc: 'integer' },
						{ name: 'X_Spin_Vector', desc: 'float' },
						{ name: 'Y_Spin_Vector', desc: 'float' },
						{ name: 'Z_Spin_Vector', desc: 'float' }
					]
				}
			},
			{
				name: 'PF_Source',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Clear_Selection', desc: 'boolean' },
						{ name: 'Emitter_Height', desc: 'worldUnits' },
						{ name: 'Emitter_Length', desc: 'worldUnits' },
						{ name: 'Emitter_Type', desc: 'integer' },
						{ name: 'Emitter_Width', desc: 'worldUnits' },
						{ name: 'Enable_Particles', desc: 'boolean' },
						{ name: 'Enable_Script_for_Every_Step_Update', desc: 'boolean' },
						{ name: 'Enable_Script_for_Final_Step_Update', desc: 'boolean' },
						{ name: 'Every_Step_Update_Script', desc: 'string' },
						{ name: 'Every_Step_Update_Script_File', desc: 'filename' },
						{ name: 'Final_Step_Update_Script', desc: 'string' },
						{ name: 'Final_Step_Update_Script_File', desc: 'filename' },
						{ name: 'Integration_for_Render', desc: 'integer' },
						{ name: 'Integration_for_Viewport', desc: 'integer' },
						{ name: 'Logo_Size', desc: 'worldUnits' },
						{ name: 'Particle_Amount_Limit', desc: 'integer' },
						{ name: 'Quantity_Render', desc: 'percent' },
						{ name: 'Quantity_Viewport', desc: 'percent' },
						{ name: 'Select_By_Particle_ID', desc: 'integer' },
						{ name: 'Selected_Particles', desc: 'index' },
						{ name: 'Selection_Level', desc: 'integer' },
						{ name: 'Show_Emitter', desc: 'boolean' },
						{ name: 'Show_Logo', desc: 'boolean' },
						{ name: 'Use_File_for_Every_Step_Update', desc: 'boolean' },
						{ name: 'Use_File_for_Final_Step_Update', desc: 'boolean' },
						{ name: 'width', desc: 'integer' },
						{ name: 'X_Coord', desc: 'integer' },
						{ name: 'Y_Coord', desc: 'integer' },
						{ name: 'Z_Order', desc: 'integer' }
					]
				}
			},
			{
				name: 'pivot',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Bevel_Angle', desc: 'float' },
						{ name: 'Bottom_Rail', desc: 'float' },
						{ name: 'Create_Frame', desc: 'boolean' },
						{ name: 'depth', desc: 'float' },
						{ name: 'Door_Offset', desc: 'float' },
						{ name: 'Double_Doors', desc: 'integer' },
						{ name: 'Flip_Hinge', desc: 'boolean' },
						{ name: 'Flip_Swing', desc: 'boolean' },
						{ name: 'Frame_Depth', desc: 'float' },
						{ name: 'frame_width', desc: 'float' },
						{ name: 'Generate_mapping_coords', desc: 'boolean' },
						{ name: 'Glass_Thickness', desc: 'float' },
						{ name: 'height', desc: 'float' },
						{ name: 'Leaf_Thickness', desc: 'float' },
						{ name: 'Muntin', desc: 'float' },
						{ name: 'Number_of_Panels_Horizontally', desc: 'integer' },
						{ name: 'Number_of_Panels_Vertically', desc: 'integer' },
						{ name: 'Open__degrees', desc: 'float' },
						{ name: 'Panel_Middle_Thickness', desc: 'float' },
						{ name: 'Panel_Thickness_1', desc: 'float' },
						{ name: 'Panel_Thickness_2', desc: 'float' },
						{ name: 'Panel_Type', desc: 'integer' },
						{ name: 'Panel_Width_1', desc: 'float' },
						{ name: 'Panel_Width_2', desc: 'float' },
						{ name: 'Stiles_Top_Rail', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'Pivoted',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'depth', desc: 'float' },
						{ name: 'Frame_Thickness', desc: 'float' },
						{ name: 'Generate_mapping_coords', desc: 'boolean' },
						{ name: 'Glazing_Thickness', desc: 'float' },
						{ name: 'height', desc: 'float' },
						{ name: 'Horizontal_Frame_Width', desc: 'float' },
						{ name: 'Percent_Open', desc: 'integer' },
						{ name: 'Rail_Width', desc: 'float' },
						{ name: 'Vertical_Frame_Width', desc: 'float' },
						{ name: 'Vertical_Rotation', desc: 'boolean' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'Plane',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'density', desc: 'float' },
						{ name: 'length', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'Plant',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'cull_by_level', desc: 'boolean' },
						{ name: 'cull_by_thickness', desc: 'boolean' },
						{ name: 'scale', desc: 'float' },
						{ name: 'season', desc: 'integer' },
						{ name: 'thickness', desc: 'float' }
					]
				}
			},
			{
				name: 'Point_Surf',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'render_angle', desc: 'float' },
						{ name: 'render_angle2', desc: 'float' },
						{ name: 'render_length', desc: 'float' },
						{ name: 'render_sides', desc: 'integer' },
						{ name: 'render_thickness', desc: 'float' },
						{ name: 'render_threshold', desc: 'angle' },
						{ name: 'render_width', desc: 'float' }
					]
				}
			},
			{
				name: 'Point_SurfGeometry',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'render_angle', desc: 'float' },
						{ name: 'render_angle2', desc: 'float' },
						{ name: 'render_length', desc: 'float' },
						{ name: 'render_sides', desc: 'integer' },
						{ name: 'render_thickness', desc: 'float' },
						{ name: 'render_threshold', desc: 'angle' },
						{ name: 'render_width', desc: 'float' }
					]
				}
			},
			{
				name: 'PointCloud',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'displayTechnique', desc: 'integer' },
						{ name: 'enableLimitPlanes', desc: 'boolean' },
						{ name: 'gradientTexmap', desc: 'texturemap' },
						{ name: 'performanceQuality', desc: 'integer' },
						{ name: 'pointSizeType', desc: 'integer' },
						{ name: 'scanFiles', desc: 'filename' },
						{ name: 'singleColor', desc: 'RGB' },
						{ name: 'voxelSize', desc: 'float' }
					]
				}
			},
			{
				name: 'PolymorphicGeom',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'render_angle', desc: 'float' },
						{ name: 'render_angle2', desc: 'float' },
						{ name: 'render_length', desc: 'float' },
						{ name: 'render_sides', desc: 'integer' },
						{ name: 'render_thickness', desc: 'float' },
						{ name: 'render_threshold', desc: 'angle' },
						{ name: 'render_width', desc: 'float' }
					]
				}
			},
			{
				name: 'Prism',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'height', desc: 'float' },
						{ name: 'heightsegs', desc: 'integer' },
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'side1Length', desc: 'float' },
						{ name: 'side1Segs', desc: 'integer' },
						{ name: 'side2Length', desc: 'float' },
						{ name: 'side2Segs', desc: 'integer' },
						{ name: 'side3Length', desc: 'float' },
						{ name: 'side3Segs', desc: 'integer' }
					]
				}
			},
			{
				name: 'projected',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Bottom_Height', desc: 'float' },
						{ name: 'depth', desc: 'float' },
						{ name: 'Frame_Thickness', desc: 'float' },
						{ name: 'Generate_mapping_coords', desc: 'boolean' },
						{ name: 'Glazing_Thickness', desc: 'float' },
						{ name: 'height', desc: 'float' },
						{ name: 'Horizontal_Frame_Width', desc: 'float' },
						{ name: 'Middle_Height', desc: 'float' },
						{ name: 'Percent_Open', desc: 'integer' },
						{ name: 'Rail_Width', desc: 'float' },
						{ name: 'Vertical_Frame_Width', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'Pyramid',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'depth', desc: 'float' },
						{ name: 'depthSegs', desc: 'integer' },
						{ name: 'height', desc: 'float' },
						{ name: 'heightsegs', desc: 'integer' },
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'width', desc: 'float' },
						{ name: 'widthsegs', desc: 'integer' }
					]
				}
			},
			{
				name: 'quadPatch',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'length', desc: 'float' },
						{ name: 'lengthsegs', desc: 'integer' },
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'width', desc: 'float' },
						{ name: 'widthsegs', desc: 'integer' }
					]
				}
			},
			{
				name: 'Railing',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Fencing_Type', desc: 'integer' },
						{ name: 'Fill_Bottom_Offset', desc: 'float' },
						{ name: 'Fill_Left_Offset', desc: 'float' },
						{ name: 'Fill_Right_Offset', desc: 'float' },
						{ name: 'Fill_Thickness', desc: 'float' },
						{ name: 'Fill_Top_Offset', desc: 'float' },
						{ name: 'First_Picket_Offset', desc: 'float' },
						{ name: 'First_Post_Offset', desc: 'float' },
						{ name: 'Last_Picket_Spacing_to_Post', desc: 'float' },
						{ name: 'Last_Post_Offset', desc: 'float' },
						{ name: 'Lower_Rail_Depth', desc: 'float' },
						{ name: 'Lower_Rail_Profile', desc: 'integer' },
						{ name: 'Lower_Rail_Spacing', desc: 'float' },
						{ name: 'Lower_Rail_Width', desc: 'float' },
						{ name: 'Lowest_Rail_Height', desc: 'float' },
						{ name: 'Number_of_Lower_Rails', desc: 'integer' },
						{ name: 'Number_of_Pickets_between_each_pair_of_Posts', desc: 'integer' },
						{ name: 'Number_of_Posts', desc: 'integer' },
						{ name: 'Number_of_segments_between_each_pair_of_Posts', desc: 'integer' },
						{ name: 'Picket_Bottom_Offset', desc: 'float' },
						{ name: 'Picket_Depth', desc: 'float' },
						{ name: 'Picket_Extension_beyond_bottom_of_Top_Rail', desc: 'float' },
						{ name: 'Picket_Profile', desc: 'integer' },
						{ name: 'Picket_Spacing', desc: 'float' },
						{ name: 'Picket_Width', desc: 'float' },
						{ name: 'Pickets_oriented_with_curved_Railing', desc: 'boolean' },
						{ name: 'Post_Depth', desc: 'float' },
						{ name: 'Post_Extension_beyond_bottom_of_Top_Rail', desc: 'float' },
						{ name: 'Post_Profile', desc: 'integer' },
						{ name: 'Post_Spacing', desc: 'float' },
						{ name: 'Post_Width', desc: 'float' },
						{ name: 'Posts_oriented_with_curved_Railing', desc: 'boolean' },
						{ name: 'Railing_Length', desc: 'float' },
						{ name: 'Respect_Path_Corners_in_rails', desc: 'boolean' },
						{ name: 'Texture_Mapped', desc: 'boolean' },
						{ name: 'Top_Rail_Depth', desc: 'float' },
						{ name: 'Top_Rail_Profile', desc: 'integer' },
						{ name: 'Top_Rail_Spacing_to_Next_Rail', desc: 'float' },
						{ name: 'Top_Rail_Width', desc: 'float' },
						{ name: 'Top_surface_of_Top_Rail_Height', desc: 'float' }
					]
				}
			},
			{
				name: 'RingWave',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Height', desc: 'float' },
						{ name: 'Inner_Edge_Breakup', desc: 'boolean' },
						{ name: 'Outer_Edge_Breakup', desc: 'boolean' },
						{ name: 'ring_width', desc: 'float' },
						{ name: 'Smoothing', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Seat',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'height', desc: 'float' },
						{ name: 'id', desc: 'integer' },
						{ name: 'motionSeed', desc: 'integer' },
						{ name: 'single', desc: 'boolean' }
					]
				}
			},
			{
				name: 'ShapeMerge',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Operation_Type', desc: 'integer' },
						{ name: 'Output_Sub_Mesh_Selection', desc: 'integer' },
						{ name: 'Remove_Interior_Exterior', desc: 'integer' }
					]
				}
			},
			{
				name: 'SlidingDoor',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Bevel_Angle', desc: 'float' },
						{ name: 'Bottom_Rail', desc: 'float' },
						{ name: 'Create_Frame', desc: 'boolean' },
						{ name: 'depth', desc: 'float' },
						{ name: 'Door_Offset', desc: 'float' },
						{ name: 'Double_Doors', desc: 'integer' },
						{ name: 'Flip_Hinge', desc: 'boolean' },
						{ name: 'Flip_Swing', desc: 'boolean' },
						{ name: 'Frame_Depth', desc: 'float' },
						{ name: 'frame_width', desc: 'float' },
						{ name: 'Generate_mapping_coords', desc: 'boolean' },
						{ name: 'Glass_Thickness', desc: 'float' },
						{ name: 'height', desc: 'float' },
						{ name: 'Leaf_Thickness', desc: 'float' },
						{ name: 'Muntin', desc: 'float' },
						{ name: 'Number_of_Panels_Horizontally', desc: 'integer' },
						{ name: 'Number_of_Panels_Vertically', desc: 'integer' },
						{ name: 'open', desc: 'float' },
						{ name: 'Panel_Middle_Thickness', desc: 'float' },
						{ name: 'Panel_Thickness_1', desc: 'float' },
						{ name: 'Panel_Thickness_2', desc: 'float' },
						{ name: 'Panel_Type', desc: 'integer' },
						{ name: 'Panel_Width_1', desc: 'float' },
						{ name: 'Panel_Width_2', desc: 'float' },
						{ name: 'Stiles_Top_Rail', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'SlidingWindow',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Chamfered_Profile', desc: 'boolean' },
						{ name: 'depth', desc: 'float' },
						{ name: 'Frame_Thickness', desc: 'float' },
						{ name: 'Generate_mapping_coords', desc: 'boolean' },
						{ name: 'Glazing_Thickness', desc: 'float' },
						{ name: 'height', desc: 'float' },
						{ name: 'Horizontal_Frame_Width', desc: 'float' },
						{ name: 'Hung', desc: 'boolean' },
						{ name: 'Number_of_Panels_Horizontally', desc: 'integer' },
						{ name: 'Number_of_Panels_Vertically', desc: 'integer' },
						{ name: 'Percent_Open', desc: 'integer' },
						{ name: 'Rail_Width', desc: 'float' },
						{ name: 'Vertical_Frame_Width', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'Snow',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'birthrate', desc: 'float' },
						{ name: 'constant', desc: 'boolean' },
						{ name: 'display', desc: 'integer' },
						{ name: 'emitterheight', desc: 'float' },
						{ name: 'emitterwidth', desc: 'float' },
						{ name: 'flakesize', desc: 'float' },
						{ name: 'hideemitter', desc: 'boolean' },
						{ name: 'render', desc: 'integer' },
						{ name: 'rendercount', desc: 'integer' },
						{ name: 'speed', desc: 'float' },
						{ name: 'tumble', desc: 'float' },
						{ name: 'tumblescale', desc: 'float' },
						{ name: 'variation', desc: 'float' },
						{ name: 'viewportcount', desc: 'integer' }
					]
				}
			},
			{
				name: 'Sphere',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'chop', desc: 'integer' },
						{ name: 'hemisphere', desc: 'float' },
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'radius', desc: 'float' },
						{ name: 'recenter', desc: 'boolean' },
						{ name: 'segs', desc: 'integer' },
						{ name: 'slice', desc: 'boolean' },
						{ name: 'sliceFrom', desc: 'angle' },
						{ name: 'sliceTo', desc: 'angle' },
						{ name: 'smooth', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Spindle',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Blend', desc: 'float' },
						{ name: 'Cap_Height', desc: 'float' },
						{ name: 'Cap_Segments', desc: 'integer' },
						{ name: 'height', desc: 'float' },
						{ name: 'Height_Segments', desc: 'integer' },
						{ name: 'mapcoords', desc: 'integer' },
						{ name: 'radius', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'Slice_From', desc: 'angle' },
						{ name: 'Slice_On', desc: 'integer' },
						{ name: 'Slice_To', desc: 'angle' },
						{ name: 'Smooth_On', desc: 'integer' }
					]
				}
			},
			{
				name: 'Spiral_Stair',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'CarriageContext', desc: 'integer' },
						{ name: 'CarriageCount', desc: 'integer' },
						{ name: 'CarriageExtOffs', desc: 'float' },
						{ name: 'CarriageHeight', desc: 'float' },
						{ name: 'CarriageIntOffs', desc: 'float' },
						{ name: 'CarriageSpace', desc: 'float' },
						{ name: 'CarriageSpacingType', desc: 'integer' },
						{ name: 'CarriageSpringFloor', desc: 'integer' },
						{ name: 'CarriageWidth', desc: 'float' },
						{ name: 'CenterPoleHeight', desc: 'float' },
						{ name: 'CenterPoleHeight_X', desc: 'integer' },
						{ name: 'CenterPoleRadius', desc: 'float' },
						{ name: 'CenterPoleSegments', desc: 'integer' },
						{ name: 'direction', desc: 'integer' },
						{ name: 'GenerateCarriage', desc: 'integer' },
						{ name: 'GenerateCenterPole', desc: 'integer' },
						{ name: 'GenerateInsideRailing', desc: 'integer' },
						{ name: 'GenerateMapping', desc: 'integer' },
						{ name: 'GenerateOutsideRailing', desc: 'integer' },
						{ name: 'GenerateStringers', desc: 'integer' },
						{ name: 'radius', desc: 'float' },
						{ name: 'RailingHeight', desc: 'float' },
						{ name: 'RailingOffs', desc: 'float' },
						{ name: 'RailingRadius', desc: 'float' },
						{ name: 'RailingSegments', desc: 'integer' },
						{ name: 'Revolutions', desc: 'float' },
						{ name: 'StepCount', desc: 'integer' },
						{ name: 'StepDepth', desc: 'float' },
						{ name: 'StepDepth_X', desc: 'integer' },
						{ name: 'StepHeight', desc: 'float' },
						{ name: 'StepSegments', desc: 'integer' },
						{ name: 'StepSegments_X', desc: 'integer' },
						{ name: 'StepThickness', desc: 'float' },
						{ name: 'StepType', desc: 'integer' },
						{ name: 'Stepwidth', desc: 'float' },
						{ name: 'StringerDepth', desc: 'float' },
						{ name: 'StringerOffset', desc: 'float' },
						{ name: 'StringerSpringFloor', desc: 'integer' },
						{ name: 'StringerWidth', desc: 'float' }
					]
				}
			},
			{
				name: 'Spray',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'birthrate', desc: 'float' },
						{ name: 'constant', desc: 'boolean' },
						{ name: 'display', desc: 'integer' },
						{ name: 'dropsize', desc: 'float' },
						{ name: 'emitterheight', desc: 'float' },
						{ name: 'emitterwidth', desc: 'float' },
						{ name: 'hideemitter', desc: 'boolean' },
						{ name: 'render', desc: 'integer' },
						{ name: 'rendercount', desc: 'integer' },
						{ name: 'speed', desc: 'float' },
						{ name: 'variation', desc: 'float' },
						{ name: 'viewportcount', desc: 'integer' }
					]
				}
			},
			{
				name: 'Spring',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'D_Section_Round_Sides', desc: 'integer' },
						{ name: 'D_Section_Wire_Depth', desc: 'float' },
						{ name: 'D_Section_Wire_Fillet_Sides', desc: 'integer' },
						{ name: 'D_Section_Wire_Fillet_Size', desc: 'float' },
						{ name: 'D_Section_Wire_Rotation_Angle', desc: 'angle' },
						{ name: 'D_Section_Wire_Width', desc: 'float' },
						{ name: 'diameter', desc: 'float' },
						{ name: 'Dynamics_K_Constant_Units', desc: 'integer' },
						{ name: 'Dynamics_K_Constant_Value', desc: 'float' },
						{ name: 'Dynamics_Spring_Direction', desc: 'integer' },
						{ name: 'Dynamics_Spring_Relaxed_Height', desc: 'float' },
						{ name: 'Enable_Nonlinearity', desc: 'integer' },
						{ name: 'End_Placement_Method', desc: 'integer' },
						{ name: 'Free_Spring_Height', desc: 'float' },
						{ name: 'Generate_Mapping_Coordinates', desc: 'integer' },
						{ name: 'Number_of_Turns', desc: 'float' },
						{ name: 'Rectangular_Fillet_Sides', desc: 'integer' },
						{ name: 'Rectangular_Wire_Depth', desc: 'float' },
						{ name: 'Rectangular_Wire_Fillet_Size', desc: 'float' },
						{ name: 'Rectangular_Wire_Rotation_Angle', desc: 'angle' },
						{ name: 'Rectangular_Wire_Width', desc: 'float' },
						{ name: 'Renderable_Spring', desc: 'integer' },
						{ name: 'Round_Wire_Diameter', desc: 'float' },
						{ name: 'Round_Wire_Side_Count', desc: 'integer' },
						{ name: 'Segmentation_Method', desc: 'integer' },
						{ name: 'Segments_Along_Turn', desc: 'integer' },
						{ name: 'Segments_Per_Turn', desc: 'integer' },
						{ name: 'Smooth_Spring', desc: 'integer' },
						{ name: 'Turn_Direction', desc: 'integer' },
						{ name: 'wire', desc: 'integer' }
					]
				}
			},
			{
				name: 'Straight_Stair',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'CarriageContext', desc: 'integer' },
						{ name: 'CarriageCount', desc: 'integer' },
						{ name: 'CarriageExtOffs', desc: 'float' },
						{ name: 'CarriageHeight', desc: 'float' },
						{ name: 'CarriageIntOffs', desc: 'float' },
						{ name: 'CarriageSpace', desc: 'float' },
						{ name: 'CarriageSpacingType', desc: 'integer' },
						{ name: 'CarriageSpringFloor', desc: 'integer' },
						{ name: 'CarriageWidth', desc: 'float' },
						{ name: 'GenerateCarriage', desc: 'integer' },
						{ name: 'GenerateInsideRailing', desc: 'integer' },
						{ name: 'GenerateMapping', desc: 'integer' },
						{ name: 'GenerateOutsideRailing', desc: 'integer' },
						{ name: 'GenerateStringers', desc: 'integer' },
						{ name: 'length', desc: 'float' },
						{ name: 'RailingHeight', desc: 'float' },
						{ name: 'RailingOffs', desc: 'float' },
						{ name: 'RailingRadius', desc: 'float' },
						{ name: 'RailingSegments', desc: 'integer' },
						{ name: 'StepCount', desc: 'integer' },
						{ name: 'StepDepth', desc: 'float' },
						{ name: 'StepDepth_X', desc: 'integer' },
						{ name: 'StepHeight', desc: 'float' },
						{ name: 'StepThickness', desc: 'float' },
						{ name: 'StepType', desc: 'integer' },
						{ name: 'Stepwidth', desc: 'float' },
						{ name: 'StringerDepth', desc: 'float' },
						{ name: 'StringerOffset', desc: 'float' },
						{ name: 'StringerSpringFloor', desc: 'integer' },
						{ name: 'StringerWidth', desc: 'float' }
					]
				}
			},
			{
				name: 'SuperSpray',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Axis_Spread', desc: 'angle' },
						{ name: 'Birth_Rate', desc: 'integer' },
						{ name: 'Blur_Stretch', desc: 'integer' },
						{ name: 'Bubble_Amplitude', desc: 'float' },
						{ name: 'Bubble_Amplitude_Variation', desc: 'percent' },
						{ name: 'Bubble_Period', desc: 'time' },
						{ name: 'Bubble_Period_Variation', desc: 'percent' },
						{ name: 'Bubble_Phase', desc: 'angle' },
						{ name: 'Bubble_Phase_Variation', desc: 'percent' },
						{ name: 'Die__X_frames_after_collision', desc: 'time' },
						{ name: 'Die__X_frames_after_collision_variation', desc: 'percent' },
						{ name: 'Display_Until', desc: 'time' },
						{ name: 'Emitter_Start', desc: 'time' },
						{ name: 'Emitter_Stop', desc: 'time' },
						{ name: 'Fade_Time', desc: 'time' },
						{ name: 'Growth_Time', desc: 'time' },
						{ name: 'iconHidden', desc: 'boolean' },
						{ name: 'iconSize', desc: 'float' },
						{ name: 'instanceFrameOffset', desc: 'integer' },
						{ name: 'instanceKeyOffsetType', desc: 'integer' },
						{ name: 'instanceSubTree', desc: 'boolean' },
						{ name: 'instancingObject', desc: 'node' },
						{ name: 'Interparticle_Collision_Bounce', desc: 'percent' },
						{ name: 'Interparticle_Collision_Bounce_Variation', desc: 'percent' },
						{ name: 'Interparticle_Collision_Steps', desc: 'integer' },
						{ name: 'Interparticle_Collisions_On', desc: 'integer' },
						{ name: 'life', desc: 'time' },
						{ name: 'Life_Variation', desc: 'time' },
						{ name: 'lifespanValueQueue', desc: 'int' },
						{ name: 'Mapping_Distance_Base', desc: 'float' },
						{ name: 'Mapping_Time_Base', desc: 'time' },
						{ name: 'mappingType', desc: 'integer' },
						{ name: 'metaballAutoCoarsness', desc: 'boolean' },
						{ name: 'metaballRenderCoarsness', desc: 'float' },
						{ name: 'metaballViewCoarsness', desc: 'float' },
						{ name: 'Metaparticle_Tension', desc: 'float' },
						{ name: 'Metaparticle_Tension_Variation', desc: 'percent' },
						{ name: 'motionInfluence', desc: 'float' },
						{ name: 'motionMultiplier', desc: 'float' },
						{ name: 'motionVariation', desc: 'percent' },
						{ name: 'objectMutationQueue', desc: 'node' },
						{ name: 'Off_Axis', desc: 'angle' },
						{ name: 'Off_Plane', desc: 'angle' },
						{ name: 'particleType', desc: 'integer' },
						{ name: 'Plane_Spread', desc: 'angle' },
						{ name: 'quantityMethod', desc: 'integer' },
						{ name: 'seed', desc: 'integer' },
						{ name: 'size', desc: 'float' },
						{ name: 'Size_Variation', desc: 'percent' },
						{ name: 'Spawn_Affects', desc: 'integer' },
						{ name: 'Spawn_Direction_Chaos', desc: 'percent' },
						{ name: 'Spawn_Multiplier_Variation', desc: 'percent' },
						{ name: 'Spawn_Scale_Chaos', desc: 'float' },
						{ name: 'Spawn_Speed_Chaos', desc: 'float' },
						{ name: 'spawnInheritVelocity', desc: 'boolean' },
						{ name: 'spawnScaleFixed', desc: 'boolean' },
						{ name: 'spawnScaleType', desc: 'integer' },
						{ name: 'spawnSpeedFixed', desc: 'boolean' },
						{ name: 'spawnSpeedType', desc: 'integer' },
						{ name: 'spawnType', desc: 'integer' },
						{ name: 'speed', desc: 'float' },
						{ name: 'Speed_Variation', desc: 'percent' },
						{ name: 'Spin_Axis_Variation', desc: 'angle' },
						{ name: 'Spin_Phase', desc: 'angle' },
						{ name: 'Spin_Phase_Variation', desc: 'percent' },
						{ name: 'Spin_Time', desc: 'time' },
						{ name: 'Spin_Time_Variation', desc: 'percent' },
						{ name: 'spinAxisType', desc: 'integer' },
						{ name: 'standardParticle', desc: 'integer' },
						{ name: 'subsampleCreationTime', desc: 'boolean' },
						{ name: 'subsampleEmitterRotation', desc: 'boolean' },
						{ name: 'subsampleEmitterTranslation', desc: 'boolean' },
						{ name: 'Total_Number', desc: 'integer' },
						{ name: 'viewPercent', desc: 'percent' },
						{ name: 'viewType', desc: 'integer' },
						{ name: 'X_Spin_Vector', desc: 'float' },
						{ name: 'Y_Spin_Vector', desc: 'float' },
						{ name: 'Z_Spin_Vector', desc: 'float' }
					]
				}
			},
			{
				name: 'Teapot',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'body', desc: 'boolean' },
						{ name: 'handle', desc: 'boolean' },
						{ name: 'lid', desc: 'boolean' },
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'radius', desc: 'float' },
						{ name: 'segs', desc: 'integer' },
						{ name: 'smooth', desc: 'boolean' },
						{ name: 'spout', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Terrain',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'display', desc: 'integer' },
						{ name: 'form', desc: 'integer' },
						{ name: 'horizSimplification', desc: 'integer' },
						{ name: 'numOps', desc: 'integer' },
						{ name: 'retriangulate', desc: 'boolean' },
						{ name: 'stitchBorder', desc: 'boolean' },
						{ name: 'update', desc: 'integer' },
						{ name: 'vertSimplification', desc: 'integer' }
					]
				}
			},
			{
				name: 'TextPlus',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'integer' },
						{ name: 'alignment', desc: 'integer' },
						{ name: 'applybevel', desc: 'boolean' },
						{ name: 'axisflip', desc: 'boolean' },
						{ name: 'beveldepth', desc: 'float' },
						{ name: 'beveloffset', desc: 'float' },
						{ name: 'beveloptimize', desc: 'boolean' },
						{ name: 'bevelpush', desc: 'float' },
						{ name: 'bevelsteps', desc: 'integer' },
						{ name: 'bevelwidth', desc: 'float' },
						{ name: 'capend', desc: 'integer' },
						{ name: 'capendconstrain', desc: 'boolean' },
						{ name: 'capstart', desc: 'integer' },
						{ name: 'capstartconstrain', desc: 'boolean' },
						{ name: 'captype', desc: 'integer' },
						{ name: 'charBaselineOffset', desc: 'float' },
						{ name: 'charKerningOffset', desc: 'float' },
						{ name: 'charXScale', desc: 'float' },
						{ name: 'charYScale', desc: 'float' },
						{ name: 'elementtype', desc: 'integer' },
						{ name: 'endbevelmaterial', desc: 'integer' },
						{ name: 'endcapmaterial', desc: 'integer' },
						{ name: 'extrudeamount', desc: 'float' },
						{ name: 'extrudesegments', desc: 'integer' },
						{ name: 'generateGeometry', desc: 'integer' },
						{ name: 'hscale', desc: 'float' },
						{ name: 'interpolationsteps', desc: 'integer' },
						{ name: 'layouttype', desc: 'integer' },
						{ name: 'leading', desc: 'float' },
						{ name: 'length', desc: 'float' },
						{ name: 'macroflags', desc: 'int' },
						{ name: 'macroname', desc: 'string' },
						{ name: 'macrovalue', desc: 'float' },
						{ name: 'nodeElements', desc: 'node' },
						{ name: 'nodeElementsCenters', desc: 'point3' },
						{ name: 'optimize', desc: 'integer' },
						{ name: 'plane', desc: 'integer' },
						{ name: 'sidematerial', desc: 'integer' },
						{ name: 'size', desc: 'float' },
						{ name: 'startbevelmaterial', desc: 'integer' },
						{ name: 'startcapmaterial', desc: 'integer' },
						{ name: 'tracking', desc: 'float' },
						{ name: 'upaxis', desc: 'integer' },
						{ name: 'vscale', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'Torus',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'radius1', desc: 'float' },
						{ name: 'radius2', desc: 'float' },
						{ name: 'segs', desc: 'integer' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'slice', desc: 'boolean' },
						{ name: 'sliceFrom', desc: 'angle' },
						{ name: 'sliceTo', desc: 'angle' },
						{ name: 'smooth', desc: 'integer' },
						{ name: 'tubeRotation', desc: 'angle' },
						{ name: 'tubeTwist', desc: 'angle' }
					]
				}
			},
			{
				name: 'Torus_Knot',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Base_Curve', desc: 'integer' },
						{ name: 'Eccentricity', desc: 'float' },
						{ name: 'Gen_UV', desc: 'integer' },
						{ name: 'Lump_Height', desc: 'float' },
						{ name: 'Lump_Offset', desc: 'angle' },
						{ name: 'Lumps', desc: 'float' },
						{ name: 'p', desc: 'float' },
						{ name: 'q', desc: 'float' },
						{ name: 'radius', desc: 'float' },
						{ name: 'radius2', desc: 'float' },
						{ name: 'segments', desc: 'integer' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'smooth', desc: 'integer' },
						{ name: 'Twist', desc: 'float' },
						{ name: 'U_Offset', desc: 'float' },
						{ name: 'U_Tile', desc: 'float' },
						{ name: 'V_Offset', desc: 'float' },
						{ name: 'V_Tile', desc: 'float' },
						{ name: 'Warp_Count', desc: 'float' },
						{ name: 'Warp_Height', desc: 'float' }
					]
				}
			},
			{
				name: 'triPatch',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'length', desc: 'float' },
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'Tube',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'capsegs', desc: 'integer' },
						{ name: 'height', desc: 'float' },
						{ name: 'heightsegs', desc: 'integer' },
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'radius1', desc: 'float' },
						{ name: 'radius2', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'slice', desc: 'boolean' },
						{ name: 'sliceFrom', desc: 'angle' },
						{ name: 'sliceTo', desc: 'angle' },
						{ name: 'smooth', desc: 'boolean' }
					]
				}
			},
			{
				name: 'U_Type_Stair',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'CarriageContext', desc: 'integer' },
						{ name: 'CarriageCount', desc: 'integer' },
						{ name: 'CarriageExtOffs', desc: 'float' },
						{ name: 'CarriageHeight', desc: 'float' },
						{ name: 'CarriageIntOffs', desc: 'float' },
						{ name: 'CarriageSpace', desc: 'float' },
						{ name: 'CarriageSpacingType', desc: 'integer' },
						{ name: 'CarriageSpringFloor', desc: 'integer' },
						{ name: 'CarriageWidth', desc: 'float' },
						{ name: 'direction', desc: 'integer' },
						{ name: 'GenerateCarriage', desc: 'integer' },
						{ name: 'GenerateInsideRailing', desc: 'integer' },
						{ name: 'GenerateMapping', desc: 'integer' },
						{ name: 'GenerateOutsideRailing', desc: 'integer' },
						{ name: 'GenerateStringers', desc: 'integer' },
						{ name: 'length', desc: 'float' },
						{ name: 'length2', desc: 'float' },
						{ name: 'RailingHeight', desc: 'float' },
						{ name: 'RailingOffs', desc: 'float' },
						{ name: 'RailingRadius', desc: 'float' },
						{ name: 'RailingSegments', desc: 'integer' },
						{ name: 'StepCount', desc: 'integer' },
						{ name: 'StepDepth', desc: 'float' },
						{ name: 'StepDepth_X', desc: 'integer' },
						{ name: 'StepHeight', desc: 'float' },
						{ name: 'StepThickness', desc: 'float' },
						{ name: 'StepType', desc: 'integer' },
						{ name: 'Stepwidth', desc: 'float' },
						{ name: 'StringerDepth', desc: 'float' },
						{ name: 'StringerOffset', desc: 'float' },
						{ name: 'StringerSpringFloor', desc: 'integer' },
						{ name: 'StringerWidth', desc: 'float' },
						{ name: 'UpperOffset', desc: 'float' }
					]
				}
			},
			{
				name: 'Wall',
				desc: 'MAXSuperClass: GeometryClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Generate_mapping_coords', desc: 'integer' },
						{ name: 'height', desc: 'float' },
						{ name: 'Justification', desc: 'integer' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'Age_Test',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Adjustable_Age', desc: 'boolean' },
						{ name: 'Condition_Type', desc: 'radiobtnIndex' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Subframe_Sampling', desc: 'boolean' },
						{ name: 'Test_Type', desc: 'integer' },
						{ name: 'Test_Value', desc: 'integer' },
						{ name: 'Variation', desc: 'integer' }
					]
				}
			},
			{
				name: 'Birth',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Amount', desc: 'integer' },
						{ name: 'Emit_Start', desc: 'integer' },
						{ name: 'Emit_Stop', desc: 'integer' },
						{ name: 'Rate', desc: 'float' },
						{ name: 'Subframe_Sampling', desc: 'boolean' },
						{ name: 'Type', desc: 'integer' }
					]
				}
			},
			{
				name: 'Birth_File',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Color_Map_Channel', desc: 'integer' },
						{ name: 'Emit_Start', desc: 'integer' },
						{ name: 'Extrapolation_Type', desc: 'integer' },
						{ name: 'File_Channel_Mask', desc: 'integer' },
						{ name: 'Opacity_Map_Channel', desc: 'integer' },
						{ name: 'Particle_File_Valid', desc: 'boolean' },
						{ name: 'Range_End', desc: 'integer' },
						{ name: 'Range_Start', desc: 'integer' },
						{ name: 'Range_Type', desc: 'integer' },
						{ name: 'Speed_Factor', desc: 'float' }
					]
				}
			},
			{
				name: 'Birth_Group',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Acquire_Mapping', desc: 'boolean' },
						{ name: 'Acquire_Material', desc: 'boolean' },
						{ name: 'Acquire_Shapes', desc: 'boolean' },
						{ name: 'Emit_Time', desc: 'integer' },
						{ name: 'Handles_To_Report', desc: 'int' },
						{ name: 'Particle_Objects', desc: 'node' },
						{ name: 'Report_Node_Handles', desc: 'integer' },
						{ name: 'Split_By_Children', desc: 'boolean' },
						{ name: 'Split_By_Elements', desc: 'boolean' },
						{ name: 'Split_By_Group_Members', desc: 'boolean' },
						{ name: 'SubMtl_ID_Offset', desc: 'integer' }
					]
				}
			},
			{
				name: 'Birth_Paint',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Acquire_Selection', desc: 'boolean' },
						{ name: 'Duration', desc: 'integer' },
						{ name: 'Emit_Start', desc: 'integer' },
						{ name: 'Emit_Stop', desc: 'integer' },
						{ name: 'Emit_Type', desc: 'radiobtnIndex' },
						{ name: 'Lock_Position', desc: 'boolean' },
						{ name: 'Lock_Rotation', desc: 'boolean' },
						{ name: 'Particle_Paint_Helper', desc: 'node' },
						{ name: 'Selection_Type', desc: 'radiobtnIndex' },
						{ name: 'Subframe_Sampling', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Birth_Script',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Emit_Start', desc: 'integer' },
						{ name: 'Proceed_Script', desc: 'string' },
						{ name: 'Random_Seed', desc: 'integer' }
					]
				}
			},
			{
				name: 'Birth_Texture',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Adjust_Separation_By_Scale_Factor', desc: 'boolean' },
						{ name: 'Amount_Limit', desc: 'integer' },
						{ name: 'Animated_Shape', desc: 'boolean' },
						{ name: 'Black_Scale', desc: 'percent' },
						{ name: 'Color_Coordinated', desc: 'boolean' },
						{ name: 'Data_Start', desc: 'integer' },
						{ name: 'Data_Stop', desc: 'integer' },
						{ name: 'Delay_Variation', desc: 'integer' },
						{ name: 'Display_Type', desc: 'radiobtnIndex' },
						{ name: 'Emission_By', desc: 'integer' },
						{ name: 'Emission_RGB_Channels', desc: 'boolean' },
						{ name: 'Emission_Texture_SubMaterial_ID', desc: 'integer' },
						{ name: 'Emission_Type', desc: 'radiobtnIndex' },
						{ name: 'Emit_Start', desc: 'integer' },
						{ name: 'Emit_Stop', desc: 'integer' },
						{ name: 'Emitter_Objects', desc: 'node' },
						{ name: 'Fast_Approximate_Separation', desc: 'boolean' },
						{ name: 'Icon_Size', desc: 'worldUnits' },
						{ name: 'Latency', desc: 'integer' },
						{ name: 'Lock_On_Emitter', desc: 'boolean' },
						{ name: 'Maximum_Amount', desc: 'integer' },
						{ name: 'Maximum_Rate', desc: 'float' },
						{ name: 'Precision', desc: 'integer' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Scale_Factor_SubMtl_ID', desc: 'integer' },
						{ name: 'Scale_Type', desc: 'integer' },
						{ name: 'Separate_Distance', desc: 'worldUnits' },
						{ name: 'Show_Only_When_Selected', desc: 'boolean' },
						{ name: 'Show_Particles', desc: 'boolean' },
						{ name: 'Subdivision_Length', desc: 'worldUnits' },
						{ name: 'Surface_Normal_Offset', desc: 'boolean' },
						{ name: 'Surface_Offset_Maximum', desc: 'worldUnits' },
						{ name: 'Surface_Offset_Minimum', desc: 'worldUnits' },
						{ name: 'Use_Latency', desc: 'boolean' },
						{ name: 'Use_Subdivision', desc: 'boolean' },
						{ name: 'White_Scale', desc: 'percent' },
						{ name: 'Whiteness', desc: 'percent' }
					]
				}
			},
			{
				name: 'BirthGrid',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Color_Type', desc: 'boolean' },
						{ name: 'Compact_Vertical_Size', desc: 'boolean' },
						{ name: 'Delete_Internal_Particles', desc: 'boolean' },
						{ name: 'Emit_Time', desc: 'integer' },
						{ name: 'External_Layers', desc: 'integer' },
						{ name: 'Grid_Base_Type', desc: 'integer' },
						{ name: 'Grid_Height', desc: 'percent' },
						{ name: 'Grid_Length', desc: 'percent' },
						{ name: 'Grid_Offset', desc: 'percent' },
						{ name: 'Grid_Size', desc: 'worldUnits' },
						{ name: 'Grid_Width', desc: 'percent' },
						{ name: 'Icon_Height', desc: 'worldUnits' },
						{ name: 'Icon_Length', desc: 'worldUnits' },
						{ name: 'Icon_Width', desc: 'worldUnits' },
						{ name: 'Interactive_Update', desc: 'boolean' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Reference_Geometry', desc: 'node' },
						{ name: 'Restrict_By_Mesh_Volume', desc: 'boolean' },
						{ name: 'Save_Grid_Data_With_File', desc: 'boolean' },
						{ name: 'Upper_Limit', desc: 'integer' },
						{ name: 'Use_Alternating_Lateral_Offset', desc: 'boolean' },
						{ name: 'Use_Non_Uniform_Grid', desc: 'boolean' },
						{ name: 'Use_Random_Vertical_Offset', desc: 'boolean' }
					]
				}
			},
			{
				name: 'BirthStream',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Color_Type', desc: 'boolean' },
						{ name: 'Delay_Birth_If_Overlap', desc: 'boolean' },
						{ name: 'Emit_Start', desc: 'integer' },
						{ name: 'Emit_Stop', desc: 'integer' },
						{ name: 'Icon_Length', desc: 'worldUnits' },
						{ name: 'Icon_Type', desc: 'integer' },
						{ name: 'Icon_Width', desc: 'worldUnits' },
						{ name: 'Inherit_Icon_Movement', desc: 'boolean' },
						{ name: 'Max_Attempts', desc: 'integer' },
						{ name: 'Multiplier', desc: 'percent' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Rate', desc: 'float' },
						{ name: 'Separation', desc: 'worldUnits' },
						{ name: 'Speed', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'BoxGizmo',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'height', desc: 'float' },
						{ name: 'length', desc: 'float' },
						{ name: 'seed', desc: 'integer' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'Cache',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Cache_Test_Results', desc: 'boolean' },
						{ name: 'Clear_End_Time', desc: 'time' },
						{ name: 'Clear_Start_Time', desc: 'time' },
						{ name: 'End_Time', desc: 'time' },
						{ name: 'Every_Nth_Frame', desc: 'integer' },
						{ name: 'Range_Type', desc: 'integer' },
						{ name: 'Sampling_Type', desc: 'integer' },
						{ name: 'Start_Time', desc: 'time' },
						{ name: 'Update_Type', desc: 'integer' },
						{ name: 'Update_Viewports', desc: 'boolean' },
						{ name: 'Use_At', desc: 'integer' }
					]
				}
			},
			{
				name: 'Cache_Disk',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Cache_Test_Results', desc: 'boolean' },
						{ name: 'End_Time', desc: 'time' },
						{ name: 'Every_Nth_Frame', desc: 'integer' },
						{ name: 'Exclude_Mapping', desc: 'boolean' },
						{ name: 'Exclude_Material_ID', desc: 'boolean' },
						{ name: 'Exclude_Rotation', desc: 'boolean' },
						{ name: 'Exclude_Scale', desc: 'boolean' },
						{ name: 'Exclude_Script_Data', desc: 'boolean' },
						{ name: 'Exclude_Shape', desc: 'boolean' },
						{ name: 'Memory_Limit', desc: 'integer' },
						{ name: 'Post_Cache_Operators', desc: 'node' },
						{ name: 'Range_Type', desc: 'integer' },
						{ name: 'Sampling_Type', desc: 'integer' },
						{ name: 'Start_Time', desc: 'time' },
						{ name: 'Update_Clear_End_Time', desc: 'time' },
						{ name: 'Update_Clear_Range_Type', desc: 'integer' },
						{ name: 'Update_Clear_Start_Time', desc: 'time' },
						{ name: 'Update_Viewports', desc: 'boolean' },
						{ name: 'Use_At', desc: 'integer' },
						{ name: 'Use_Post_Cache_Operators', desc: 'boolean' },
						{ name: 'Write_To_File', desc: 'filename' }
					]
				}
			},
			{
				name: 'Cache_Selective',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Cache_Test_Results', desc: 'boolean' },
						{ name: 'End_Time', desc: 'time' },
						{ name: 'Every_Nth_Frame', desc: 'integer' },
						{ name: 'Exclude_Mapping', desc: 'boolean' },
						{ name: 'Exclude_Material_ID', desc: 'boolean' },
						{ name: 'Exclude_Rotation', desc: 'boolean' },
						{ name: 'Exclude_Scale', desc: 'boolean' },
						{ name: 'Exclude_Script_Data', desc: 'boolean' },
						{ name: 'Exclude_Shape', desc: 'boolean' },
						{ name: 'Memory_Limit', desc: 'integer' },
						{ name: 'Post_Cache_Operators', desc: 'node' },
						{ name: 'Range_Type', desc: 'integer' },
						{ name: 'Sampling_Type', desc: 'integer' },
						{ name: 'Save_Cache_With_File', desc: 'boolean' },
						{ name: 'Save_Cache_With_Hold', desc: 'boolean' },
						{ name: 'Start_Time', desc: 'time' },
						{ name: 'Update_Clear_End_Time', desc: 'time' },
						{ name: 'Update_Clear_Range_Type', desc: 'integer' },
						{ name: 'Update_Clear_Start_Time', desc: 'time' },
						{ name: 'Update_Viewports', desc: 'boolean' },
						{ name: 'Use_At', desc: 'integer' },
						{ name: 'Use_Post_Cache_Operators', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Camera_Culling',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Camera', desc: 'node' },
						{ name: 'Culling_Type', desc: 'integer' },
						{ name: 'Far_Clip_Distance', desc: 'worldUnits' },
						{ name: 'Near_Clip_Distance', desc: 'worldUnits' },
						{ name: 'Render_Culling', desc: 'boolean' },
						{ name: 'Selection_Type', desc: 'radiobtnIndex' },
						{ name: 'Subframe_Precision', desc: 'boolean' },
						{ name: 'Use_Active_Camera', desc: 'boolean' },
						{ name: 'Use_Camera_Clipping_Planes', desc: 'boolean' },
						{ name: 'Use_Far_Clip', desc: 'boolean' },
						{ name: 'Use_For_Group_Selection', desc: 'boolean' },
						{ name: 'Use_Near_Clip', desc: 'boolean' },
						{ name: 'Viewport_Culling', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Camera_IMBlur',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Camera', desc: 'node' },
						{ name: 'Multiplier', desc: 'float' },
						{ name: 'Use_Active_Camera', desc: 'boolean' },
						{ name: 'Use_Event_Multiplier', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CamPoint',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'axisLength', desc: 'float' },
						{ name: 'showAxis', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Character',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Size', desc: 'float' }
					]
				}
			},
			{
				name: 'CharacterAssembly',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'characterID', desc: 'integer' },
						{ name: 'displayRes', desc: 'radiobtnIndex' },
						{ name: 'iconSize', desc: 'integer' }
					]
				}
			},
			{
				name: 'Collision',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Collision_Count', desc: 'integer' },
						{ name: 'Collision_Count_Options', desc: 'integer' },
						{ name: 'Collision_Nodes', desc: 'node' },
						{ name: 'Max_Speed', desc: 'worldUnits' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Speed_Option', desc: 'integer' },
						{ name: 'Will_Collide_Frame', desc: 'integer' }
					]
				}
			},
			{
				name: 'Collision_Spawn',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Collision_Nodes', desc: 'node' },
						{ name: 'Delete_Parent', desc: 'boolean' },
						{ name: 'Divergence', desc: 'angle' },
						{ name: 'Number_of_Collisions', desc: 'integer' },
						{ name: 'Number_of_Offsprings', desc: 'integer' },
						{ name: 'Offspring_Speed', desc: 'integer' },
						{ name: 'Parent_Speed', desc: 'integer' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Restart_Particle_Age', desc: 'boolean' },
						{ name: 'Spawn_Able', desc: 'percent' },
						{ name: 'Spawn_Type', desc: 'radiobtnIndex' },
						{ name: 'Speed', desc: 'worldUnits' },
						{ name: 'Speed_Inherited', desc: 'percent' },
						{ name: 'Speed_Type', desc: 'radiobtnIndex' },
						{ name: 'Sync_Type', desc: 'integer' },
						{ name: 'True_for_Particles_Collided', desc: 'boolean' },
						{ name: 'True_for_Spawn_Particles', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Cone_Angle',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Angle', desc: 'angle' },
						{ name: 'Aspect', desc: 'float' },
						{ name: 'Direction', desc: 'point3' },
						{ name: 'Distance', desc: 'float' },
						{ name: 'Origin', desc: 'point3' }
					]
				}
			},
			{
				name: 'Container',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'size', desc: 'worldUnits' },
						{ name: 'unloaded', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Copy_Out',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Number_Of_Copies', desc: 'integer' }
					]
				}
			},
			{
				name: 'Crowd',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'assignments', desc: 'maxObject' },
						{ name: 'backtracking', desc: 'boolean' },
						{ name: 'behaviors', desc: 'maxObject' },
						{ name: 'teams', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'CVrWarp',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'warpName', desc: 'string' },
						{ name: 'warpSize', desc: 'float' },
						{ name: 'warpTarget', desc: 'string' },
						{ name: 'warpViewportSize', desc: 'float' }
					]
				}
			},
			{
				name: 'CylGizmo',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'height', desc: 'float' },
						{ name: 'radius', desc: 'float' },
						{ name: 'seed', desc: 'integer' }
					]
				}
			},
			{
				name: 'Data_Icon',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Activity_Type', desc: 'radiobtnIndex' },
						{ name: 'Animatable_Active', desc: 'boolean' },
						{ name: 'Auto_Update', desc: 'boolean' },
						{ name: 'Auto_Update_On_Data_View_Close', desc: 'boolean' },
						{ name: 'Default_Height', desc: 'integer' },
						{ name: 'Default_Offset', desc: 'integer' },
						{ name: 'Default_Range_Type', desc: 'integer' },
						{ name: 'Default_Width', desc: 'integer' },
						{ name: 'Enable_By_Switch', desc: 'boolean' },
						{ name: 'Groups', desc: 'maxObject' },
						{ name: 'Icon_Parameter_1', desc: 'worldUnits' },
						{ name: 'Icon_Parameter_2', desc: 'worldUnits' },
						{ name: 'Icon_Parameter_3', desc: 'worldUnits' },
						{ name: 'Icon_Type', desc: 'integer' },
						{ name: 'PDView_Description_Type', desc: 'integer' },
						{ name: 'PDView_Divider', desc: 'integer' },
						{ name: 'PDView_Height', desc: 'integer' },
						{ name: 'PDView_Origin_X', desc: 'integer' },
						{ name: 'PDView_Origin_Y', desc: 'integer' },
						{ name: 'PDView_Show_Depot', desc: 'boolean' },
						{ name: 'PDView_Show_Parameters', desc: 'boolean' },
						{ name: 'PDView_Width', desc: 'integer' },
						{ name: 'Repeats', desc: 'integer' },
						{ name: 'Selected_SubOperators', desc: 'maxObject' },
						{ name: 'SubOperators', desc: 'maxObject' },
						{ name: 'Time_Off', desc: 'integer' },
						{ name: 'Time_On', desc: 'integer' },
						{ name: 'Visible_Icon', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Data_Operator',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Activity_Type', desc: 'radiobtnIndex' },
						{ name: 'Animatable_Active', desc: 'boolean' },
						{ name: 'Auto_Update', desc: 'boolean' },
						{ name: 'Auto_Update_On_Data_View_Close', desc: 'boolean' },
						{ name: 'Default_Height', desc: 'integer' },
						{ name: 'Default_Offset', desc: 'integer' },
						{ name: 'Default_Range_Type', desc: 'integer' },
						{ name: 'Default_Width', desc: 'integer' },
						{ name: 'Enable_By_Switch', desc: 'boolean' },
						{ name: 'Groups', desc: 'maxObject' },
						{ name: 'Icon_Parameter_1', desc: 'worldUnits' },
						{ name: 'Icon_Parameter_2', desc: 'worldUnits' },
						{ name: 'Icon_Parameter_3', desc: 'worldUnits' },
						{ name: 'Icon_Type', desc: 'integer' },
						{ name: 'PDView_Description_Type', desc: 'integer' },
						{ name: 'PDView_Divider', desc: 'integer' },
						{ name: 'PDView_Height', desc: 'integer' },
						{ name: 'PDView_Origin_X', desc: 'integer' },
						{ name: 'PDView_Origin_Y', desc: 'integer' },
						{ name: 'PDView_Show_Depot', desc: 'boolean' },
						{ name: 'PDView_Show_Parameters', desc: 'boolean' },
						{ name: 'PDView_Width', desc: 'integer' },
						{ name: 'Repeats', desc: 'integer' },
						{ name: 'Selected_SubOperators', desc: 'maxObject' },
						{ name: 'SubOperators', desc: 'maxObject' },
						{ name: 'Time_Off', desc: 'integer' },
						{ name: 'Time_On', desc: 'integer' },
						{ name: 'Visible_Icon', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Data_Test',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Activity_Type', desc: 'radiobtnIndex' },
						{ name: 'Animatable_Active', desc: 'boolean' },
						{ name: 'Auto_Update', desc: 'boolean' },
						{ name: 'Auto_Update_On_Data_View_Close', desc: 'boolean' },
						{ name: 'Default_Height', desc: 'integer' },
						{ name: 'Default_Offset', desc: 'integer' },
						{ name: 'Default_Range_Type', desc: 'integer' },
						{ name: 'Default_Width', desc: 'integer' },
						{ name: 'Enable_By_Switch', desc: 'boolean' },
						{ name: 'Groups', desc: 'maxObject' },
						{ name: 'Icon_Parameter_1', desc: 'worldUnits' },
						{ name: 'Icon_Parameter_2', desc: 'worldUnits' },
						{ name: 'Icon_Parameter_3', desc: 'worldUnits' },
						{ name: 'Icon_Type', desc: 'integer' },
						{ name: 'PDView_Description_Type', desc: 'integer' },
						{ name: 'PDView_Divider', desc: 'integer' },
						{ name: 'PDView_Height', desc: 'integer' },
						{ name: 'PDView_Origin_X', desc: 'integer' },
						{ name: 'PDView_Origin_Y', desc: 'integer' },
						{ name: 'PDView_Show_Depot', desc: 'boolean' },
						{ name: 'PDView_Show_Parameters', desc: 'boolean' },
						{ name: 'PDView_Width', desc: 'integer' },
						{ name: 'Repeats', desc: 'integer' },
						{ name: 'Selected_SubOperators', desc: 'maxObject' },
						{ name: 'SubOperators', desc: 'maxObject' },
						{ name: 'Time_Off', desc: 'integer' },
						{ name: 'Time_On', desc: 'integer' },
						{ name: 'Visible_Icon', desc: 'boolean' }
					]
				}
			},
			{
				name: 'DaylightAssemblyHead',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'manual', desc: 'integer' },
						{ name: 'sky', desc: 'maxObject' },
						{ name: 'sun', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'Delegate',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'active', desc: 'boolean' },
						{ name: 'biped', desc: 'node' },
						{ name: 'depth', desc: 'worldUnits' },
						{ name: 'height', desc: 'worldUnits' },
						{ name: 'priority', desc: 'integer' },
						{ name: 'width', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'DeleteParticles',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Life_Span', desc: 'integer' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Type', desc: 'integer' },
						{ name: 'Variation', desc: 'integer' }
					]
				}
			},
			{
				name: 'Display_Script',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Add_Prefix', desc: 'boolean' },
						{ name: 'Color', desc: 'RGB' },
						{ name: 'Execution_Order', desc: 'radiobtnIndex' },
						{ name: 'Filter_Type', desc: 'integer' },
						{ name: 'Group_Selection', desc: 'node' },
						{ name: 'Offset_InOut', desc: 'integer' },
						{ name: 'Offset_LeftRight', desc: 'integer' },
						{ name: 'Offset_UpDown', desc: 'integer' },
						{ name: 'Precision', desc: 'integer' },
						{ name: 'Prefix_Text', desc: 'string' },
						{ name: 'Script_Data_Type', desc: 'integer' },
						{ name: 'Show_Numbering', desc: 'boolean' }
					]
				}
			},
			{
				name: 'DisplayData',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Add_Prefix', desc: 'boolean' },
						{ name: 'Color', desc: 'RGB' },
						{ name: 'Complex_Show_As', desc: 'integer' },
						{ name: 'Data_Channel', desc: 'maxObject' },
						{ name: 'Data_Handle', desc: 'integer' },
						{ name: 'Execution_Order', desc: 'radiobtnIndex' },
						{ name: 'Filter_Type', desc: 'integer' },
						{ name: 'Group_Selection', desc: 'node' },
						{ name: 'Matrix_Show_As', desc: 'integer' },
						{ name: 'Pair_Show_As', desc: 'integer' },
						{ name: 'Precision', desc: 'integer' },
						{ name: 'Prefix_Text', desc: 'string' },
						{ name: 'Quaternion_Show_As', desc: 'integer' },
						{ name: 'Rate_Value', desc: 'boolean' },
						{ name: 'Real_Show_As', desc: 'integer' },
						{ name: 'Show_Numbering', desc: 'boolean' },
						{ name: 'Units_Per_Type', desc: 'integer' },
						{ name: 'Vector_Show_As', desc: 'integer' }
					]
				}
			},
			{
				name: 'DisplayParticles',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Color', desc: 'RGB' },
						{ name: 'Selected_Type', desc: 'integer' },
						{ name: 'Show_Numbering', desc: 'boolean' },
						{ name: 'Type', desc: 'integer' },
						{ name: 'Visible', desc: 'percent' }
					]
				}
			},
			{
				name: 'Dummy',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'boxsize', desc: 'point3' }
					]
				}
			},
			{
				name: 'ExposeTm',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'angle', desc: 'angle' },
						{ name: 'box', desc: 'boolean' },
						{ name: 'cross', desc: 'boolean' },
						{ name: 'distance', desc: 'float' },
						{ name: 'size', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'Find_Target',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Acceleration_Limit', desc: 'worldUnits' },
						{ name: 'Aim_Point_Type', desc: 'integer' },
						{ name: 'Animated_Shape', desc: 'boolean' },
						{ name: 'Assignment_Type', desc: 'integer' },
						{ name: 'Color_Type', desc: 'boolean' },
						{ name: 'Cruise_Speed', desc: 'worldUnits' },
						{ name: 'Cruise_Speed_Variation', desc: 'worldUnits' },
						{ name: 'Docking_Distance', desc: 'worldUnits' },
						{ name: 'Docking_Speed', desc: 'worldUnits' },
						{ name: 'Docking_Speed_Variation', desc: 'worldUnits' },
						{ name: 'Docking_Type', desc: 'integer' },
						{ name: 'Ease_In', desc: 'percent' },
						{ name: 'Follow_Target', desc: 'boolean' },
						{ name: 'Icon_Size', desc: 'worldUnits' },
						{ name: 'Lock_On_Target', desc: 'boolean' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Speed_Type', desc: 'integer' },
						{ name: 'Subframe_Sampling', desc: 'boolean' },
						{ name: 'Sync_Type', desc: 'integer' },
						{ name: 'Target_Objects', desc: 'node' },
						{ name: 'Target_Sync_Type', desc: 'integer' },
						{ name: 'Target_Type', desc: 'radiobtnIndex' },
						{ name: 'Test_Distance', desc: 'worldUnits' },
						{ name: 'Test_Type', desc: 'integer' },
						{ name: 'Time', desc: 'integer' },
						{ name: 'Time_Variation', desc: 'integer' },
						{ name: 'Timing_Type', desc: 'integer' },
						{ name: 'Use_Cruise_Speed', desc: 'boolean' },
						{ name: 'Use_Docking_Speed', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Force',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Force_Overlapping', desc: 'radiobtnIndex' },
						{ name: 'Force_Space_Warps', desc: 'node' },
						{ name: 'Influence', desc: 'percent' },
						{ name: 'Sync', desc: 'integer' },
						{ name: 'Use_Script_Float', desc: 'integer' }
					]
				}
			},
			{
				name: 'Go_To_Rotation',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Ease_In', desc: 'percent' },
						{ name: 'Match_Initial_Spin', desc: 'boolean' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Send_Out', desc: 'boolean' },
						{ name: 'Spin_Rate_Variation', desc: 'angle' },
						{ name: 'SpinRate', desc: 'angle' },
						{ name: 'Stop_Spinning', desc: 'boolean' },
						{ name: 'Target_Rotation', desc: 'radiobtnIndex' },
						{ name: 'Time', desc: 'integer' },
						{ name: 'Transition_Type', desc: 'integer' },
						{ name: 'Variation', desc: 'integer' }
					]
				}
			},
			{
				name: 'grid',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'grid', desc: 'float' },
						{ name: 'length', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'Group_Operator',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Event_With_Operators', desc: 'node' },
						{ name: 'Group_Selection', desc: 'node' },
						{ name: 'Group_Selection_Operators', desc: 'node' },
						{ name: 'Selection_Condition', desc: 'integer' }
					]
				}
			},
			{
				name: 'Group_Select',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Age_From', desc: 'integer' },
						{ name: 'Age_To', desc: 'integer' },
						{ name: 'Age_Variation', desc: 'integer' },
						{ name: 'Animated_Shape', desc: 'boolean' },
						{ name: 'Chance', desc: 'percent' },
						{ name: 'Color_Coordinated', desc: 'boolean' },
						{ name: 'Combine_Type', desc: 'integer' },
						{ name: 'Divergence', desc: 'angle' },
						{ name: 'Divergence_Variation', desc: 'angle' },
						{ name: 'Group_A', desc: 'node' },
						{ name: 'Group_B', desc: 'node' },
						{ name: 'Icon_Size', desc: 'worldUnits' },
						{ name: 'Icon_Type', desc: 'integer' },
						{ name: 'Index_From', desc: 'integer' },
						{ name: 'Index_To', desc: 'integer' },
						{ name: 'Index_Variation', desc: 'integer' },
						{ name: 'Inside_Object', desc: 'node' },
						{ name: 'Logo_Size', desc: 'worldUnits' },
						{ name: 'Property_Type', desc: 'integer' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Reverse_Selection', desc: 'boolean' },
						{ name: 'Scale_From', desc: 'percent' },
						{ name: 'Scale_To', desc: 'percent' },
						{ name: 'Scale_Variation', desc: 'percent' },
						{ name: 'Selection_Type', desc: 'radiobtnIndex' },
						{ name: 'Size_From', desc: 'worldUnits' },
						{ name: 'Size_To', desc: 'worldUnits' },
						{ name: 'Size_Variation', desc: 'worldUnits' },
						{ name: 'Snapshot_Indices', desc: 'int' },
						{ name: 'Snapshot_Particle_System', desc: 'integer' },
						{ name: 'Snapshot_Type', desc: 'integer' },
						{ name: 'Speed_From', desc: 'worldUnits' },
						{ name: 'Speed_To', desc: 'worldUnits' },
						{ name: 'Speed_Variation', desc: 'worldUnits' },
						{ name: 'Subframe_Sampling', desc: 'boolean' },
						{ name: 'Update_Type', desc: 'radiobtnIndex' }
					]
				}
			},
			{
				name: 'IKTarget',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'CATUnits', desc: 'float' },
						{ name: 'controller', desc: 'maxObject' },
						{ name: 'cross', desc: 'boolean' },
						{ name: 'Length', desc: 'float' },
						{ name: 'Width', desc: 'float' }
					]
				}
			},
			{
				name: 'Initial_State',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Auto_Sync_Emit_Time', desc: 'boolean' },
						{ name: 'Color_Coordinated', desc: 'boolean' },
						{ name: 'Divergence', desc: 'angle' },
						{ name: 'Emit_Time', desc: 'integer' },
						{ name: 'Icon_Size', desc: 'worldUnits' },
						{ name: 'Lock_Position', desc: 'boolean' },
						{ name: 'Lock_Speed', desc: 'boolean' },
						{ name: 'Magnitude_Variation', desc: 'percent' },
						{ name: 'Max_Spread', desc: 'worldUnits' },
						{ name: 'Particle_System', desc: 'node' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Selected_Events', desc: 'node' },
						{ name: 'State_From_Type', desc: 'integer' },
						{ name: 'Use_Age', desc: 'boolean' },
						{ name: 'Use_Mapping', desc: 'boolean' },
						{ name: 'Use_Material_ID', desc: 'boolean' },
						{ name: 'Use_Rotation', desc: 'boolean' },
						{ name: 'Use_Scale', desc: 'boolean' },
						{ name: 'Use_Script_Data', desc: 'boolean' },
						{ name: 'Use_Selection', desc: 'boolean' },
						{ name: 'Use_Shape', desc: 'boolean' },
						{ name: 'Use_Speed', desc: 'boolean' },
						{ name: 'Use_Spin', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Keep_Apart',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Accel_Limit', desc: 'worldUnits' },
						{ name: 'Core_Percentage', desc: 'percent' },
						{ name: 'Core_Size', desc: 'worldUnits' },
						{ name: 'Falloff_Percentage', desc: 'percent' },
						{ name: 'Falloff_Size', desc: 'worldUnits' },
						{ name: 'Force', desc: 'worldUnits' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Range_Type', desc: 'radiobtnIndex' },
						{ name: 'Scope_Type', desc: 'radiobtnIndex' },
						{ name: 'Selected_Events', desc: 'int' },
						{ name: 'Selected_Systems', desc: 'int' },
						{ name: 'Speed_Limit', desc: 'worldUnits' },
						{ name: 'Use_Accel_Limit', desc: 'boolean' },
						{ name: 'Use_Script_Float', desc: 'integer' },
						{ name: 'Use_Script_Vector', desc: 'integer' },
						{ name: 'Use_Speed_Limit', desc: 'boolean' },
						{ name: 'Variation', desc: 'percent' }
					]
				}
			},
			{
				name: 'LightMeter',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'active', desc: 'boolean' },
						{ name: 'length', desc: 'worldUnits' },
						{ name: 'length_segs', desc: 'integer' },
						{ name: 'width', desc: 'worldUnits' },
						{ name: 'width_segs', desc: 'integer' }
					]
				}
			},
			{
				name: 'Lock_Bond',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Animated_Surface', desc: 'boolean' },
						{ name: 'Break_If_Outwards_Only', desc: 'boolean' },
						{ name: 'Break_Off_Acceleration', desc: 'worldUnits' },
						{ name: 'Break_Off_Speed', desc: 'worldUnits' },
						{ name: 'Break_Off_Type', desc: 'radiobtnIndex' },
						{ name: 'Break_Off_Variation', desc: 'percent' },
						{ name: 'Dampening_Friction', desc: 'worldUnits' },
						{ name: 'Induced_By_Speed_Change', desc: 'boolean' },
						{ name: 'Inertial_Size', desc: 'worldUnits' },
						{ name: 'Lock_On_Objects', desc: 'node' },
						{ name: 'Lock_Type', desc: 'radiobtnIndex' },
						{ name: 'Position_Dampening_Type', desc: 'integer' },
						{ name: 'Position_Force', desc: 'percent' },
						{ name: 'Position_Offset_Limit', desc: 'worldUnits' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Restrict_Position_To_Surface', desc: 'boolean' },
						{ name: 'Rotation_Dampening', desc: 'percent' },
						{ name: 'Rotation_Force', desc: 'percent' },
						{ name: 'Rotation_Offset_Limit', desc: 'angle' },
						{ name: 'Snap_To_Surface', desc: 'boolean' },
						{ name: 'Speed_Limit', desc: 'worldUnits' },
						{ name: 'Speed_Unit', desc: 'worldUnits' },
						{ name: 'Spin_Limit', desc: 'angle' },
						{ name: 'Use_Break_Off_Test', desc: 'boolean' },
						{ name: 'Use_No_Acceleration_Zone', desc: 'boolean' },
						{ name: 'Use_No_Dampening_Zone', desc: 'boolean' },
						{ name: 'Use_Position_Offset_Limit', desc: 'boolean' },
						{ name: 'Use_Rotation_Offset_Limit', desc: 'boolean' },
						{ name: 'Use_Speed_Limit', desc: 'boolean' },
						{ name: 'Use_Spin_Limit', desc: 'boolean' },
						{ name: 'Zone_Radius', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'Luminaire',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Dimmer', desc: 'float' },
						{ name: 'FilterColor', desc: 'RGB' }
					]
				}
			},
			{
				name: 'mapping',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Channel_Type', desc: 'integer' },
						{ name: 'Map_Channel', desc: 'integer' },
						{ name: 'Show_In_Viewport', desc: 'boolean' },
						{ name: 'Sync_Type', desc: 'integer' }
					]
				}
			},
			{
				name: 'Mapping_Object',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Acquire_From_Mapping_Channels', desc: 'boolean' },
						{ name: 'Animated_Surface', desc: 'boolean' },
						{ name: 'Blend_Mapping_By_Distance', desc: 'boolean' },
						{ name: 'Blend_Mapping_By_Time', desc: 'boolean' },
						{ name: 'Blend_Time', desc: 'integer' },
						{ name: 'Blend_Type', desc: 'integer' },
						{ name: 'Exclude_Tiling', desc: 'boolean' },
						{ name: 'Finish_Distance', desc: 'worldUnits' },
						{ name: 'Mapping_From_Objects', desc: 'node' },
						{ name: 'Mapping_Type', desc: 'integer' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Show_Map_In_Viewport', desc: 'boolean' },
						{ name: 'Static_Objects', desc: 'boolean' },
						{ name: 'U_Variation', desc: 'percent' },
						{ name: 'Uniform_Color_Per_Particle', desc: 'boolean' },
						{ name: 'Use_Vertex_Color', desc: 'boolean' },
						{ name: 'V_Variation', desc: 'percent' },
						{ name: 'W_Variation', desc: 'percent' }
					]
				}
			},
			{
				name: 'Material_Dynamic',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Add_Random_Offset', desc: 'boolean' },
						{ name: 'Assign_Material', desc: 'boolean' },
						{ name: 'Assign_Material_ID', desc: 'boolean' },
						{ name: 'Assigned_Material', desc: 'material' },
						{ name: 'Loop', desc: 'boolean' },
						{ name: 'Material_ID', desc: 'integer' },
						{ name: 'Max_Age_Offset', desc: 'time' },
						{ name: 'Number_of_Sub_Materials', desc: 'integer' },
						{ name: 'Random_Offset', desc: 'integer' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Randomize_Age', desc: 'boolean' },
						{ name: 'Reset_Particle_Age', desc: 'boolean' },
						{ name: 'Show_In_Viewport', desc: 'boolean' },
						{ name: 'Sub_Materials_Rate', desc: 'float' },
						{ name: 'SubMtl_ID_Offset', desc: 'integer' },
						{ name: 'Sync_Type', desc: 'integer' },
						{ name: 'Type', desc: 'integer' }
					]
				}
			},
			{
				name: 'Material_Frequency',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Assign_Material', desc: 'boolean' },
						{ name: 'Assign_Material_ID', desc: 'boolean' },
						{ name: 'Assigned_Material', desc: 'material' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Show_In_Viewport', desc: 'boolean' },
						{ name: 'SubMtl_ID_Offset', desc: 'integer' }
					]
				}
			},
			{
				name: 'Material_Static',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Assign_Material', desc: 'boolean' },
						{ name: 'Assign_Material_ID', desc: 'boolean' },
						{ name: 'Assigned_Material', desc: 'material' },
						{ name: 'Loop', desc: 'boolean' },
						{ name: 'Material_ID', desc: 'integer' },
						{ name: 'Number_of_Sub_Materials', desc: 'integer' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Rate_Per_Second', desc: 'float' },
						{ name: 'Rate_Type', desc: 'integer' },
						{ name: 'Show_In_Viewport', desc: 'boolean' },
						{ name: 'SubMtl_ID_Offset', desc: 'integer' },
						{ name: 'Type', desc: 'integer' }
					]
				}
			},
			{
				name: 'materialhelper',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Assign_Material', desc: 'boolean' },
						{ name: 'Assign_Material_ID', desc: 'boolean' },
						{ name: 'Loop', desc: 'boolean' },
						{ name: 'Material', desc: 'material' },
						{ name: 'Material_ID', desc: 'integer' },
						{ name: 'Number_of_Sub_Materials', desc: 'integer' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Reset_Particle_Age', desc: 'boolean' },
						{ name: 'Show_In_Viewport', desc: 'boolean' }
					]
				}
			},
			{
				name: 'mP_Buoyancy',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Angular_Drag', desc: 'float' },
						{ name: 'Color_Coordinated', desc: 'boolean' },
						{ name: 'Density', desc: 'float' },
						{ name: 'Grid_Geometry', desc: 'node' },
						{ name: 'Icon_Height', desc: 'worldUnits' },
						{ name: 'Icon_Length', desc: 'worldUnits' },
						{ name: 'Icon_Shape', desc: 'integer' },
						{ name: 'Icon_Width', desc: 'worldUnits' },
						{ name: 'Level_Height', desc: 'worldUnits' },
						{ name: 'Level_Type', desc: 'radiobtnIndex' },
						{ name: 'Limit_Buoyancy_By_Icon', desc: 'boolean' },
						{ name: 'Linear_Drag', desc: 'float' },
						{ name: 'Quadratic_Drag', desc: 'float' },
						{ name: 'Surface_Unit', desc: 'worldUnits' },
						{ name: 'Use_Angular_Drag', desc: 'boolean' },
						{ name: 'Use_Linear_Drag', desc: 'boolean' },
						{ name: 'Use_Quadratic_Drag', desc: 'boolean' }
					]
				}
			},
			{
				name: 'mP_Collision',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Additive_Count', desc: 'boolean' },
						{ name: 'Collision_Group', desc: 'integer' },
						{ name: 'Deflectors', desc: 'node' },
						{ name: 'Report_To_Data_Operator', desc: 'boolean' },
						{ name: 'Test_True', desc: 'boolean' },
						{ name: 'Test_Type', desc: 'integer' }
					]
				}
			},
			{
				name: 'mP_Drag',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Angular_Damping', desc: 'float' },
						{ name: 'Angular_Damping_Data_Creator', desc: 'maxObject' },
						{ name: 'Angular_Damping_From_Data', desc: 'boolean' },
						{ name: 'Apply_Angular_Damping', desc: 'boolean' },
						{ name: 'Apply_Linear_Damping', desc: 'boolean' },
						{ name: 'Linear_Damping', desc: 'float' },
						{ name: 'Linear_Damping_Data_Creator', desc: 'maxObject' },
						{ name: 'Linear_Damping_From_Data', desc: 'boolean' },
						{ name: 'Speed_Multiplier', desc: 'boolean' },
						{ name: 'Speed_Unit', desc: 'worldUnits' },
						{ name: 'Spin_Unit', desc: 'angle' },
						{ name: 'Sync', desc: 'integer' },
						{ name: 'Timing_Type', desc: 'integer' },
						{ name: 'Use_Data_Wiring', desc: 'boolean' }
					]
				}
			},
			{
				name: 'mP_Force',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Exponent', desc: 'integer' },
						{ name: 'Force_Overlapping', desc: 'radiobtnIndex' },
						{ name: 'Force_Space_Warps', desc: 'node' },
						{ name: 'Force_Type', desc: 'integer' },
						{ name: 'Force_Variation_Threshold', desc: 'boolean' },
						{ name: 'Impulse_On_Event_Entry', desc: 'boolean' },
						{ name: 'Influence', desc: 'percent' },
						{ name: 'Shape_Size', desc: 'worldUnits' },
						{ name: 'Sync', desc: 'integer' },
						{ name: 'Time_Warp', desc: 'integer' },
						{ name: 'Use_Script_Float', desc: 'integer' }
					]
				}
			},
			{
				name: 'mP_Glue',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Adjust_By_Particle_Mass', desc: 'boolean' },
						{ name: 'Align_Margin', desc: 'worldUnits' },
						{ name: 'Allow_Binding_Penetration', desc: 'boolean' },
						{ name: 'Average_Binding_Length_Data_Creator', desc: 'maxObject' },
						{ name: 'Average_Binding_Length_To_Data', desc: 'boolean' },
						{ name: 'Average_Breaking_Impulse_Data_Creator', desc: 'maxObject' },
						{ name: 'Average_Breaking_Impulse_To_Data', desc: 'boolean' },
						{ name: 'Bind_Center_Aligned_Only', desc: 'boolean' },
						{ name: 'Bind_Distance', desc: 'worldUnits' },
						{ name: 'Bind_Distance_Data_Creator', desc: 'maxObject' },
						{ name: 'Bind_Distance_From_Data', desc: 'boolean' },
						{ name: 'Bind_Gap', desc: 'worldUnits' },
						{ name: 'Bind_Gap_Data_Creator', desc: 'maxObject' },
						{ name: 'Bind_Gap_From_Data', desc: 'boolean' },
						{ name: 'Bind_In_Current_Event', desc: 'boolean' },
						{ name: 'Bind_With_Deflectors', desc: 'boolean' },
						{ name: 'Bind_With_Ground', desc: 'boolean' },
						{ name: 'Bind_With_Other_Events', desc: 'boolean' },
						{ name: 'Binding_Groups_Data_Creator', desc: 'maxObject' },
						{ name: 'Binding_Groups_From_Data', desc: 'boolean' },
						{ name: 'Breakability_Max_Force_Data_Creator', desc: 'maxObject' },
						{ name: 'Breakability_Max_Force_From_Data', desc: 'boolean' },
						{ name: 'Breakability_Max_Torque_Data_Creator', desc: 'maxObject' },
						{ name: 'Breakability_Max_Torque_From_Data', desc: 'boolean' },
						{ name: 'Breakable_By_Force', desc: 'boolean' },
						{ name: 'Breakable_By_Overstretch', desc: 'boolean' },
						{ name: 'Bury_Binding_Anchors', desc: 'boolean' },
						{ name: 'Color', desc: 'RGB' },
						{ name: 'Continuous_Adjustment', desc: 'boolean' },
						{ name: 'Damper_Coef', desc: 'float' },
						{ name: 'Deflectors_To_Bind_With', desc: 'node' },
						{ name: 'Depth', desc: 'worldUnits' },
						{ name: 'Distance_Unit', desc: 'worldUnits' },
						{ name: 'Enable_Spring_Force', desc: 'boolean' },
						{ name: 'Events_To_Bind_With', desc: 'int' },
						{ name: 'Max_Binds_Per_Particle', desc: 'integer' },
						{ name: 'Max_Binds_Per_Particle_Data_Creator', desc: 'maxObject' },
						{ name: 'Max_Binds_Per_Particle_From_Data', desc: 'boolean' },
						{ name: 'Max_By_Bind_Distance', desc: 'boolean' },
						{ name: 'Max_Force', desc: 'float' },
						{ name: 'Max_Torque', desc: 'float' },
						{ name: 'Maximum_Absolute_Distance', desc: 'worldUnits' },
						{ name: 'Maximum_Binding_Length_Data_Creator', desc: 'maxObject' },
						{ name: 'Maximum_Binding_Length_To_Data', desc: 'boolean' },
						{ name: 'Maximum_Distance_Limit_Data_Creator', desc: 'maxObject' },
						{ name: 'Maximum_Distance_Limit_From_Data', desc: 'boolean' },
						{ name: 'Maximum_Distance_Type', desc: 'radiobtnIndex' },
						{ name: 'Maximum_Relative_Distance', desc: 'percent' },
						{ name: 'Minimum_Absolute_Distance', desc: 'worldUnits' },
						{ name: 'Minimum_Binding_Length_Data_Creator', desc: 'maxObject' },
						{ name: 'Minimum_Binding_Length_To_Data', desc: 'boolean' },
						{ name: 'Minimum_Distance_Limit_Data_Creator', desc: 'maxObject' },
						{ name: 'Minimum_Distance_Limit_From_Data', desc: 'boolean' },
						{ name: 'Minimum_Distance_Type', desc: 'radiobtnIndex' },
						{ name: 'Minimum_Relative_Distance', desc: 'percent' },
						{ name: 'Num_Active_Bindings_Data_Creator', desc: 'maxObject' },
						{ name: 'Num_Active_Bindings_To_Data', desc: 'boolean' },
						{ name: 'Num_Broken_Bindings_Data_Creator', desc: 'maxObject' },
						{ name: 'Num_Broken_Bindings_To_Data', desc: 'boolean' },
						{ name: 'Num_Broken_By_Force_Data_Creator', desc: 'maxObject' },
						{ name: 'Num_Broken_By_Force_To_Data', desc: 'boolean' },
						{ name: 'Overstretch_Absolute_Limit', desc: 'worldUnits' },
						{ name: 'Overstretch_Distance_Limit_Data_Creator', desc: 'maxObject' },
						{ name: 'Overstretch_Distance_Limit_From_Data', desc: 'boolean' },
						{ name: 'Overstretch_Relative_Limit', desc: 'percent' },
						{ name: 'Overstretch_Type', desc: 'radiobtnIndex' },
						{ name: 'Rigid_Binding_Anchor_Type', desc: 'integer' },
						{ name: 'Simplified_Binding_Anchor_Type', desc: 'integer' },
						{ name: 'Solver_Factor', desc: 'float' },
						{ name: 'Spring_Coef', desc: 'float' },
						{ name: 'Spring_Damper_Coef_Data_Creator', desc: 'maxObject' },
						{ name: 'Spring_Damper_Coef_From_Data', desc: 'boolean' },
						{ name: 'Spring_Force_Coef_Data_Creator', desc: 'maxObject' },
						{ name: 'Spring_Force_Coef_From_Data', desc: 'boolean' },
						{ name: 'Sync', desc: 'integer' },
						{ name: 'Test_True', desc: 'boolean' },
						{ name: 'Test_Type', desc: 'integer' },
						{ name: 'Timing_Type', desc: 'integer' },
						{ name: 'Type', desc: 'integer' },
						{ name: 'Use_Bind_Gap_Condition', desc: 'boolean' },
						{ name: 'Use_Maximum_Distance_Limit', desc: 'boolean' },
						{ name: 'Use_Minimum_Distance_Limit', desc: 'boolean' },
						{ name: 'Visualize_Binding', desc: 'boolean' }
					]
				}
			},
			{
				name: 'mP_InterCollision',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Additive_Count', desc: 'boolean' },
						{ name: 'Report_To_Data_Operator', desc: 'boolean' },
						{ name: 'Scope_Type', desc: 'integer' },
						{ name: 'Selected_Events', desc: 'int' },
						{ name: 'Test_Type', desc: 'integer' }
					]
				}
			},
			{
				name: 'mP_Shape',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Collide_Type', desc: 'integer' },
						{ name: 'Collision_Group', desc: 'integer' },
						{ name: 'Color', desc: 'RGB' },
						{ name: 'Conform_To_Particle_Shape', desc: 'boolean' },
						{ name: 'Density', desc: 'float' },
						{ name: 'Display_Type', desc: 'integer' },
						{ name: 'Dynamic_Friction', desc: 'float' },
						{ name: 'Generate_Tolerance_Channel', desc: 'boolean' },
						{ name: 'Inflate_Width', desc: 'worldUnits' },
						{ name: 'Interpenetration_Tolerance', desc: 'worldUnits' },
						{ name: 'Mass', desc: 'float' },
						{ name: 'Mass_Type', desc: 'radiobtnIndex' },
						{ name: 'Restitution', desc: 'float' },
						{ name: 'Scale', desc: 'percent' },
						{ name: 'Scale_Margin', desc: 'percent' },
						{ name: 'Scale_Type', desc: 'radiobtnIndex' },
						{ name: 'Static_Friction', desc: 'float' },
						{ name: 'Weld_Threshold', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'mP_Solvent',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Color_Coordinated', desc: 'boolean' },
						{ name: 'Data_Channel', desc: 'maxObject' },
						{ name: 'Glue_Tests', desc: 'node' },
						{ name: 'Icon_Shape', desc: 'integer' },
						{ name: 'Icon_Size', desc: 'worldUnits' },
						{ name: 'Limit_Solvent_By_Data', desc: 'boolean' },
						{ name: 'Limit_Solvent_By_Icon', desc: 'boolean' },
						{ name: 'Limit_Solvent_By_List', desc: 'boolean' },
						{ name: 'Limit_Solvent_By_Time', desc: 'boolean' },
						{ name: 'Mode', desc: 'integer' },
						{ name: 'Particles_To_Deflectors', desc: 'boolean' },
						{ name: 'Particles_To_Ground', desc: 'boolean' },
						{ name: 'Particles_To_Particles', desc: 'boolean' },
						{ name: 'Start', desc: 'integer' },
						{ name: 'Stop', desc: 'integer' }
					]
				}
			},
			{
				name: 'mP_Switch',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Anti_Gravity_Sync_Type', desc: 'integer' },
						{ name: 'AntiGravity_Active', desc: 'boolean' },
						{ name: 'AntiGravity_Start', desc: 'integer' },
						{ name: 'AntiGravity_Stop', desc: 'integer' },
						{ name: 'AntiGravity_Type', desc: 'radiobtnIndex' },
						{ name: 'Apply_Anti_Gravity', desc: 'boolean' },
						{ name: 'Match_Position', desc: 'boolean' },
						{ name: 'Match_Rotation', desc: 'boolean' },
						{ name: 'Match_Speed', desc: 'boolean' },
						{ name: 'Match_Spin', desc: 'boolean' },
						{ name: 'Position_Speed_Active', desc: 'boolean' },
						{ name: 'Position_Speed_Match_Type', desc: 'radiobtnIndex' },
						{ name: 'Position_Speed_Start', desc: 'integer' },
						{ name: 'Position_Speed_Stop', desc: 'integer' },
						{ name: 'Position_Speed_Sync_Type', desc: 'integer' },
						{ name: 'Rotation_Spin_Active', desc: 'boolean' },
						{ name: 'Rotation_Spin_Match_Type', desc: 'radiobtnIndex' },
						{ name: 'Rotation_Spin_Start', desc: 'integer' },
						{ name: 'Rotation_Spin_Stop', desc: 'integer' },
						{ name: 'Rotation_Spin_Sync_Type', desc: 'integer' },
						{ name: 'Speed_Limit', desc: 'worldUnits' },
						{ name: 'Spin_Limit', desc: 'angle' },
						{ name: 'Turn_Off_Active', desc: 'boolean' },
						{ name: 'Turn_Off_Simulation', desc: 'boolean' },
						{ name: 'Turn_Off_Simulation_Type', desc: 'radiobtnIndex' },
						{ name: 'Turn_Off_Start', desc: 'integer' },
						{ name: 'Turn_Off_Stop', desc: 'integer' },
						{ name: 'Turn_Off_Sync_Type', desc: 'integer' },
						{ name: 'Use_Speed_Limit', desc: 'boolean' },
						{ name: 'Use_Spin_Limit', desc: 'boolean' }
					]
				}
			},
			{
				name: 'mP_World',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Suppress_Express_Save', desc: 'boolean' }
					]
				}
			},
			{
				name: 'mP_Worldhelper',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Apply_Gravity', desc: 'boolean' },
						{ name: 'Bounce_Threshold', desc: 'worldUnits' },
						{ name: 'Calculation_Limit', desc: 'integer' },
						{ name: 'Collision_Group', desc: 'integer' },
						{ name: 'Default_Dynamic_Friction', desc: 'float' },
						{ name: 'Default_Restitution', desc: 'float' },
						{ name: 'Default_Static_Friction', desc: 'float' },
						{ name: 'Enable_Multi_Threading', desc: 'boolean' },
						{ name: 'Energy_Threshold', desc: 'float' },
						{ name: 'Gravity_Acceleration', desc: 'worldUnits' },
						{ name: 'Ground_Collision_Plane', desc: 'boolean' },
						{ name: 'Hide_Icon', desc: 'boolean' },
						{ name: 'Hide_Particle_Bindings', desc: 'boolean' },
						{ name: 'Icon_Height', desc: 'worldUnits' },
						{ name: 'Icon_Length', desc: 'worldUnits' },
						{ name: 'Icon_Width', desc: 'worldUnits' },
						{ name: 'Range_Finish', desc: 'integer' },
						{ name: 'Range_Start', desc: 'integer' },
						{ name: 'Range_Type', desc: 'integer' },
						{ name: 'Restricted_Broadphase', desc: 'boolean' },
						{ name: 'Run_Baked_Simulation', desc: 'boolean' },
						{ name: 'Safe_Mode_Simulation', desc: 'boolean' },
						{ name: 'Set_World_Limits', desc: 'boolean' },
						{ name: 'Show_Bake_Dialog', desc: 'integer' },
						{ name: 'Sleep_Threshold_Type', desc: 'radiobtnIndex' },
						{ name: 'Speed_Threshold', desc: 'worldUnits' },
						{ name: 'Spin_Rate_Threshold', desc: 'angle' },
						{ name: 'Subframe_Factor', desc: 'integer' },
						{ name: 'Subframe_Type', desc: 'integer' },
						{ name: 'Thread_Count', desc: 'integer' },
						{ name: 'Time_Scale', desc: 'percent' },
						{ name: 'Update_Viewports', desc: 'boolean' },
						{ name: 'Use_Hardware_PPU', desc: 'boolean' },
						{ name: 'Use_Time_Scale', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Notes',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Comments', desc: 'string' }
					]
				}
			},
			{
				name: 'nvRagdoll',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'boneGroups', desc: 'string' },
						{ name: 'helpersize', desc: 'float' },
						{ name: 'inflation', desc: 'float' },
						{ name: 'joints', desc: 'string' },
						{ name: 'meshType', desc: 'integer' },
						{ name: 'ragdollNode', desc: 'node' },
						{ name: 'rbtype', desc: 'integer' },
						{ name: 'rootBone', desc: 'node' },
						{ name: 'weight', desc: 'float' }
					]
				}
			},
			{
				name: 'Particle_Paint',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Acquire_Sub_Material_Index', desc: 'boolean' },
						{ name: 'Adjust_Global_Timing', desc: 'boolean' },
						{ name: 'Assign_To_Mapping_Channels', desc: 'boolean' },
						{ name: 'Auto_Sync_Timing_By_Selected_Stroke', desc: 'boolean' },
						{ name: 'AutoAdjust_Current_Frame', desc: 'boolean' },
						{ name: 'Density_Center', desc: 'percent' },
						{ name: 'Density_Sides', desc: 'percent' },
						{ name: 'Display_Size', desc: 'worldUnits' },
						{ name: 'Display_Type', desc: 'integer' },
						{ name: 'Distance', desc: 'worldUnits' },
						{ name: 'Distance_Variation', desc: 'percent' },
						{ name: 'Divergence_For_X_Axis', desc: 'angle' },
						{ name: 'Divergence_For_Z_Axis', desc: 'angle' },
						{ name: 'Editing_Duration', desc: 'integer' },
						{ name: 'Editing_Start_At', desc: 'integer' },
						{ name: 'Editing_Stop_At', desc: 'integer' },
						{ name: 'Editing_Stop_Type', desc: 'radiobtnIndex' },
						{ name: 'Generate_Mapping', desc: 'boolean' },
						{ name: 'Generate_Rotation', desc: 'boolean' },
						{ name: 'Icon_Size', desc: 'worldUnits' },
						{ name: 'Include_Mask_Children', desc: 'boolean' },
						{ name: 'Include_Mask_Group_Members', desc: 'boolean' },
						{ name: 'Late_Color', desc: 'RGB' },
						{ name: 'Location_Type', desc: 'integer' },
						{ name: 'Mapping_End_Value', desc: 'float' },
						{ name: 'Mapping_Offset_Value_Per_Second', desc: 'float' },
						{ name: 'Mapping_Start_Value', desc: 'float' },
						{ name: 'Mapping_Type', desc: 'integer' },
						{ name: 'Masks', desc: 'node' },
						{ name: 'Maximum_Number_Of_Attempts', desc: 'integer' },
						{ name: 'Orientation_Type_For_X_Axis', desc: 'integer' },
						{ name: 'Orientation_Type_For_Z_Axis', desc: 'integer' },
						{ name: 'Priority_Axis', desc: 'radiobtnIndex' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Rate_Type', desc: 'integer' },
						{ name: 'Reverse_X_Axis', desc: 'boolean' },
						{ name: 'Reverse_Z_Axis', desc: 'boolean' },
						{ name: 'Selected_Strokes', desc: 'boolean' },
						{ name: 'Separation_Distance', desc: 'worldUnits' },
						{ name: 'Show_Particle_Timing', desc: 'boolean' },
						{ name: 'Stack_Up_For_Separation', desc: 'boolean' },
						{ name: 'Time_Scale', desc: 'percent' },
						{ name: 'Use_Mask_Objects', desc: 'boolean' },
						{ name: 'Use_Radius_Graph', desc: 'boolean' },
						{ name: 'Use_Rate_Graph', desc: 'boolean' },
						{ name: 'Use_Separation', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Particle_View',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Divider', desc: 'point3' },
						{ name: 'Height', desc: 'integer' },
						{ name: 'Origin', desc: 'point3' },
						{ name: 'Selected', desc: 'node' },
						{ name: 'Show_Action_Depot', desc: 'boolean' },
						{ name: 'Show_Action_Description', desc: 'boolean' },
						{ name: 'Show_Action_Update', desc: 'integer' },
						{ name: 'Show_Parameters', desc: 'boolean' },
						{ name: 'Show_Particle_Count', desc: 'integer' },
						{ name: 'Use_Dynamic_Names', desc: 'integer' },
						{ name: 'Width', desc: 'integer' },
						{ name: 'Zoom', desc: 'float' }
					]
				}
			},
			{
				name: 'Placement_Paint',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Acquire_Paint_Mapping', desc: 'boolean' },
						{ name: 'Acquire_Paint_Position', desc: 'boolean' },
						{ name: 'Acquire_Paint_Rotation', desc: 'boolean' },
						{ name: 'Acquire_Paint_Selection', desc: 'boolean' },
						{ name: 'BlendIn_Rotation', desc: 'boolean' },
						{ name: 'Far_Distance', desc: 'worldUnits' },
						{ name: 'Near_Distance', desc: 'worldUnits' },
						{ name: 'Obey_Quantity_Multiplier', desc: 'boolean' },
						{ name: 'Order_Type', desc: 'integer' },
						{ name: 'Particle_Paint_Helper', desc: 'node' },
						{ name: 'Position_Type', desc: 'radiobtnIndex' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Selection_Type', desc: 'radiobtnIndex' },
						{ name: 'Separate_Streams_Indexing', desc: 'boolean' },
						{ name: 'Snap_Distance', desc: 'worldUnits' },
						{ name: 'Snap_If_Close', desc: 'boolean' },
						{ name: 'Stop_If_Count_Overflow', desc: 'boolean' },
						{ name: 'Update_Type', desc: 'radiobtnIndex' }
					]
				}
			},
			{
				name: 'Plane_Angle',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Angle', desc: 'angle' },
						{ name: 'Distance', desc: 'float' },
						{ name: 'Origin', desc: 'point3' },
						{ name: 'Size', desc: 'float' }
					]
				}
			},
			{
				name: 'Point',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'box', desc: 'boolean' },
						{ name: 'cross', desc: 'boolean' },
						{ name: 'size', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'Position_Icon',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Distinct_Points_Only', desc: 'boolean' },
						{ name: 'Inherit_Emitter_Movement', desc: 'boolean' },
						{ name: 'Location', desc: 'integer' },
						{ name: 'Lock_On_Emitter', desc: 'boolean' },
						{ name: 'Multiplier', desc: 'percent' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Subframe_Sampling', desc: 'boolean' },
						{ name: 'Total_Distinct_Points', desc: 'integer' }
					]
				}
			},
			{
				name: 'Position_Manip',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'position', desc: 'point3' },
						{ name: 'radius', desc: 'float' }
					]
				}
			},
			{
				name: 'Position_Object',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Animated_Shape', desc: 'boolean' },
						{ name: 'Apart_Distance', desc: 'worldUnits' },
						{ name: 'Apart_Placement', desc: 'boolean' },
						{ name: 'Delete', desc: 'boolean' },
						{ name: 'Density_By_Emitter_Material', desc: 'boolean' },
						{ name: 'Density_Type', desc: 'integer' },
						{ name: 'Distinct_Points_Only', desc: 'boolean' },
						{ name: 'Emitter_Objects', desc: 'node' },
						{ name: 'Inherit_Emitter_Movement', desc: 'boolean' },
						{ name: 'Location', desc: 'integer' },
						{ name: 'Lock_On_Emitter', desc: 'boolean' },
						{ name: 'Material_ID', desc: 'integer' },
						{ name: 'Maximum_Number_of_Attempts', desc: 'integer' },
						{ name: 'Multiplier', desc: 'percent' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Subframe_Sampling', desc: 'boolean' },
						{ name: 'Surface_Offset_Maximum', desc: 'worldUnits' },
						{ name: 'Surface_Offset_Minimum', desc: 'worldUnits' },
						{ name: 'Total_Distinct_Points', desc: 'integer' },
						{ name: 'Use_Sub_Material', desc: 'boolean' },
						{ name: 'Use_Surface_Offset', desc: 'boolean' },
						{ name: 'Variation', desc: 'percent' }
					]
				}
			},
			{
				name: 'Position_Value',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'radius', desc: 'float' }
					]
				}
			},
			{
				name: 'PresetOperator',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Activity_Type', desc: 'radiobtnIndex' },
						{ name: 'Animatable_Active', desc: 'boolean' },
						{ name: 'Auto_Update', desc: 'boolean' },
						{ name: 'Auto_Update_On_Data_View_Close', desc: 'boolean' },
						{ name: 'Default_Height', desc: 'integer' },
						{ name: 'Default_Offset', desc: 'integer' },
						{ name: 'Default_Range_Type', desc: 'integer' },
						{ name: 'Default_Width', desc: 'integer' },
						{ name: 'Enable_By_Switch', desc: 'boolean' },
						{ name: 'Groups', desc: 'maxObject' },
						{ name: 'Icon_Parameter_1', desc: 'worldUnits' },
						{ name: 'Icon_Parameter_2', desc: 'worldUnits' },
						{ name: 'Icon_Parameter_3', desc: 'worldUnits' },
						{ name: 'Icon_Type', desc: 'integer' },
						{ name: 'PDView_Description_Type', desc: 'integer' },
						{ name: 'PDView_Divider', desc: 'integer' },
						{ name: 'PDView_Height', desc: 'integer' },
						{ name: 'PDView_Origin_X', desc: 'integer' },
						{ name: 'PDView_Origin_Y', desc: 'integer' },
						{ name: 'PDView_Show_Depot', desc: 'boolean' },
						{ name: 'PDView_Show_Parameters', desc: 'boolean' },
						{ name: 'PDView_Width', desc: 'integer' },
						{ name: 'Repeats', desc: 'integer' },
						{ name: 'Selected_SubOperators', desc: 'maxObject' },
						{ name: 'SubOperators', desc: 'maxObject' },
						{ name: 'Time_Off', desc: 'integer' },
						{ name: 'Time_On', desc: 'integer' }
					]
				}
			},
			{
				name: 'PresetOperIcon',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Activity_Type', desc: 'radiobtnIndex' },
						{ name: 'Animatable_Active', desc: 'boolean' },
						{ name: 'Auto_Update', desc: 'boolean' },
						{ name: 'Auto_Update_On_Data_View_Close', desc: 'boolean' },
						{ name: 'Default_Height', desc: 'integer' },
						{ name: 'Default_Offset', desc: 'integer' },
						{ name: 'Default_Range_Type', desc: 'integer' },
						{ name: 'Default_Width', desc: 'integer' },
						{ name: 'Enable_By_Switch', desc: 'boolean' },
						{ name: 'Groups', desc: 'maxObject' },
						{ name: 'Icon_Parameter_1', desc: 'worldUnits' },
						{ name: 'Icon_Parameter_2', desc: 'worldUnits' },
						{ name: 'Icon_Parameter_3', desc: 'worldUnits' },
						{ name: 'Icon_Type', desc: 'integer' },
						{ name: 'PDView_Description_Type', desc: 'integer' },
						{ name: 'PDView_Divider', desc: 'integer' },
						{ name: 'PDView_Height', desc: 'integer' },
						{ name: 'PDView_Origin_X', desc: 'integer' },
						{ name: 'PDView_Origin_Y', desc: 'integer' },
						{ name: 'PDView_Show_Depot', desc: 'boolean' },
						{ name: 'PDView_Show_Parameters', desc: 'boolean' },
						{ name: 'PDView_Width', desc: 'integer' },
						{ name: 'Repeats', desc: 'integer' },
						{ name: 'Selected_SubOperators', desc: 'maxObject' },
						{ name: 'SubOperators', desc: 'maxObject' },
						{ name: 'Time_Off', desc: 'integer' },
						{ name: 'Time_On', desc: 'integer' }
					]
				}
			},
			{
				name: 'PresetTest',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Activity_Type', desc: 'radiobtnIndex' },
						{ name: 'Animatable_Active', desc: 'boolean' },
						{ name: 'Auto_Update', desc: 'boolean' },
						{ name: 'Auto_Update_On_Data_View_Close', desc: 'boolean' },
						{ name: 'Default_Height', desc: 'integer' },
						{ name: 'Default_Offset', desc: 'integer' },
						{ name: 'Default_Range_Type', desc: 'integer' },
						{ name: 'Default_Width', desc: 'integer' },
						{ name: 'Enable_By_Switch', desc: 'boolean' },
						{ name: 'Groups', desc: 'maxObject' },
						{ name: 'Icon_Parameter_1', desc: 'worldUnits' },
						{ name: 'Icon_Parameter_2', desc: 'worldUnits' },
						{ name: 'Icon_Parameter_3', desc: 'worldUnits' },
						{ name: 'Icon_Type', desc: 'integer' },
						{ name: 'PDView_Description_Type', desc: 'integer' },
						{ name: 'PDView_Divider', desc: 'integer' },
						{ name: 'PDView_Height', desc: 'integer' },
						{ name: 'PDView_Origin_X', desc: 'integer' },
						{ name: 'PDView_Origin_Y', desc: 'integer' },
						{ name: 'PDView_Show_Depot', desc: 'boolean' },
						{ name: 'PDView_Show_Parameters', desc: 'boolean' },
						{ name: 'PDView_Width', desc: 'integer' },
						{ name: 'Repeats', desc: 'integer' },
						{ name: 'Selected_SubOperators', desc: 'maxObject' },
						{ name: 'SubOperators', desc: 'maxObject' },
						{ name: 'Time_Off', desc: 'integer' },
						{ name: 'Time_On', desc: 'integer' }
					]
				}
			},
			{
				name: 'RenderParticles',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Mesh_Count', desc: 'integer' },
						{ name: 'Particles_Per_Mesh', desc: 'integer' },
						{ name: 'Split_Type', desc: 'integer' },
						{ name: 'Type', desc: 'integer' },
						{ name: 'Visible', desc: 'percent' }
					]
				}
			},
			{
				name: 'rotation',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Direction', desc: 'integer' },
						{ name: 'Divergence', desc: 'angle' },
						{ name: 'Divergence_Axis_X', desc: 'float' },
						{ name: 'Divergence_Axis_Y', desc: 'float' },
						{ name: 'Divergence_Axis_Z', desc: 'float' },
						{ name: 'Euler_X', desc: 'angle' },
						{ name: 'Euler_Y', desc: 'angle' },
						{ name: 'Euler_Z', desc: 'angle' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Restrict_Divergence_To_Axis', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Scale_Test',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Axis_Type', desc: 'integer' },
						{ name: 'Condition_Type', desc: 'radiobtnIndex' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Scale_Value', desc: 'percent' },
						{ name: 'Scale_Variation', desc: 'percent' },
						{ name: 'Size_Value', desc: 'worldUnits' },
						{ name: 'Sync_Type', desc: 'integer' },
						{ name: 'Test_Type', desc: 'integer' }
					]
				}
			},
			{
				name: 'ScaleParticles',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Bias', desc: 'integer' },
						{ name: 'Constrain_Scale', desc: 'boolean' },
						{ name: 'Constrain_Scale_Variation', desc: 'boolean' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Sync_Type', desc: 'integer' },
						{ name: 'Type', desc: 'integer' },
						{ name: 'X_Scale_Factor', desc: 'percent' },
						{ name: 'X_Scale_Variation', desc: 'percent' },
						{ name: 'Y_Scale_Factor', desc: 'percent' },
						{ name: 'Y_Scale_Variation', desc: 'percent' },
						{ name: 'Z_Scale_Factor', desc: 'percent' },
						{ name: 'Z_Scale_Variation', desc: 'percent' }
					]
				}
			},
			{
				name: 'Script_Operator',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Proceed_Script', desc: 'string' },
						{ name: 'Random_Seed', desc: 'integer' }
					]
				}
			},
			{
				name: 'Script_Test',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Proceed_Script', desc: 'string' },
						{ name: 'Random_Seed', desc: 'integer' }
					]
				}
			},
			{
				name: 'Send_Out',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Condition_Type', desc: 'radiobtnIndex' }
					]
				}
			},
			{
				name: 'Shape_Facing',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Inherited_Scale', desc: 'percent' },
						{ name: 'Look_At_Object', desc: 'node' },
						{ name: 'Orientation', desc: 'integer' },
						{ name: 'Parallel', desc: 'boolean' },
						{ name: 'Pivot_At', desc: 'integer' },
						{ name: 'Proportion', desc: 'percent' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Size_Space', desc: 'integer' },
						{ name: 'Units', desc: 'worldUnits' },
						{ name: 'Variation', desc: 'percent' },
						{ name: 'WH_Ratio', desc: 'float' }
					]
				}
			},
			{
				name: 'Shape_Instance',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Acquire_Shape', desc: 'boolean' },
						{ name: 'Add_Random_Offset', desc: 'boolean' },
						{ name: 'Animated_Shape', desc: 'boolean' },
						{ name: 'Fast_Shape_Evaluation', desc: 'boolean' },
						{ name: 'Group_Members', desc: 'boolean' },
						{ name: 'Handles_To_Report', desc: 'int' },
						{ name: 'Object_And_Children', desc: 'boolean' },
						{ name: 'Object_Elements', desc: 'boolean' },
						{ name: 'Random_Offset', desc: 'integer' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Random_Shape', desc: 'boolean' },
						{ name: 'Report_Node_Handles', desc: 'integer' },
						{ name: 'Set_Scale', desc: 'boolean' },
						{ name: 'Shape_Object', desc: 'node' },
						{ name: 'SubMtl_ID_Offset', desc: 'integer' },
						{ name: 'Sync_Type', desc: 'integer' },
						{ name: 'Variation', desc: 'percent' }
					]
				}
			},
			{
				name: 'Shape_Mark',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Align_To', desc: 'integer' },
						{ name: 'Angle_Distortion', desc: 'boolean' },
						{ name: 'Contact_Object', desc: 'node' },
						{ name: 'Continuous_Update', desc: 'boolean' },
						{ name: 'Divergence', desc: 'float' },
						{ name: 'Generate_Mapping_Coords', desc: 'boolean' },
						{ name: 'Height', desc: 'worldUnits' },
						{ name: 'Inherited_Scale', desc: 'percent' },
						{ name: 'Length', desc: 'worldUnits' },
						{ name: 'Mark_Type', desc: 'integer' },
						{ name: 'Max_Distortion', desc: 'percent' },
						{ name: 'Multi_Elements', desc: 'boolean' },
						{ name: 'Pivot_Offset', desc: 'percent' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Size_Space', desc: 'integer' },
						{ name: 'Surface_Animation', desc: 'boolean' },
						{ name: 'Surface_Offset', desc: 'worldUnits' },
						{ name: 'Surface_Offset_Variation', desc: 'worldUnits' },
						{ name: 'Variation', desc: 'percent' },
						{ name: 'Vertex_Noise', desc: 'worldUnits' },
						{ name: 'Width', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'ShapeLibrary',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Dimension_Type', desc: 'radiobtnIndex' },
						{ name: 'Fit_Mapping', desc: 'boolean' },
						{ name: 'Generate_Mapping_Coords', desc: 'boolean' },
						{ name: 'Random_Multi_Shape_Order', desc: 'boolean' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Scale_Variation', desc: 'percent' },
						{ name: 'Size', desc: 'worldUnits' },
						{ name: 'Type_2D', desc: 'integer' },
						{ name: 'Type_3D', desc: 'integer' },
						{ name: 'Use_Scale', desc: 'boolean' }
					]
				}
			},
			{
				name: 'ShapeStandard',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Shape', desc: 'integer' },
						{ name: 'Size', desc: 'worldUnits' },
						{ name: 'Use_Scale', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Slider_Manip',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'hide', desc: 'boolean' },
						{ name: 'name', desc: 'string' },
						{ name: 'value', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'sliderManipulator',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'hide', desc: 'boolean' },
						{ name: 'maxVal', desc: 'float' },
						{ name: 'minVal', desc: 'float' },
						{ name: 'sldName', desc: 'string' },
						{ name: 'snapToggle', desc: 'boolean' },
						{ name: 'snapVal', desc: 'float' },
						{ name: 'value', desc: 'float' },
						{ name: 'width', desc: 'float' },
						{ name: 'xPos', desc: 'float' },
						{ name: 'yPos', desc: 'float' }
					]
				}
			},
			{
				name: 'Spawn',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Delete_Parent', desc: 'boolean' },
						{ name: 'Divergence', desc: 'angle' },
						{ name: 'Number_of_Offsprings', desc: 'integer' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Restart_Particle_Age', desc: 'boolean' },
						{ name: 'Spawn_Able', desc: 'percent' },
						{ name: 'Spawn_Rate', desc: 'float' },
						{ name: 'Spawn_Step_Size', desc: 'worldUnits' },
						{ name: 'Spawn_Type', desc: 'radiobtnIndex' },
						{ name: 'Speed', desc: 'worldUnits' },
						{ name: 'Speed_Inherited', desc: 'percent' },
						{ name: 'Speed_Type', desc: 'radiobtnIndex' },
						{ name: 'Sync_Type', desc: 'integer' }
					]
				}
			},
			{
				name: 'speed',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Direction', desc: 'integer' },
						{ name: 'Divergence', desc: 'angle' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Reverse', desc: 'boolean' },
						{ name: 'Speed', desc: 'worldUnits' },
						{ name: 'Variation', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'Speed_By_Surface',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Acceleration_Limit', desc: 'worldUnits' },
						{ name: 'Animated_Shape', desc: 'boolean' },
						{ name: 'Direction_Type', desc: 'integer' },
						{ name: 'Divergence', desc: 'angle' },
						{ name: 'Falloff', desc: 'worldUnits' },
						{ name: 'Material_ID', desc: 'integer' },
						{ name: 'Material_Type', desc: 'integer' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Range', desc: 'worldUnits' },
						{ name: 'Set_Speed_By_Surface_Material', desc: 'boolean' },
						{ name: 'Set_Speed_Magnitude', desc: 'boolean' },
						{ name: 'Speed_Type', desc: 'integer' },
						{ name: 'Speed_Value', desc: 'worldUnits' },
						{ name: 'Speed_Variation', desc: 'worldUnits' },
						{ name: 'Subframe_Sampling', desc: 'boolean' },
						{ name: 'Surface_Objects', desc: 'node' },
						{ name: 'Sync_Type', desc: 'integer' },
						{ name: 'Unlimited_Range', desc: 'boolean' },
						{ name: 'Use_Sub_Material', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Speed_Test',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Angle_Value', desc: 'angle' },
						{ name: 'Angle_Variation', desc: 'angle' },
						{ name: 'Condition_Type', desc: 'radiobtnIndex' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Sync_Type', desc: 'integer' },
						{ name: 'Test_Type', desc: 'integer' },
						{ name: 'Unit_Value', desc: 'worldUnits' },
						{ name: 'Unit_Variation', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'SpeedByIcon',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Accel_Limit', desc: 'worldUnits' },
						{ name: 'Color_Type', desc: 'boolean' },
						{ name: 'Distance', desc: 'worldUnits' },
						{ name: 'Icon_Size', desc: 'worldUnits' },
						{ name: 'Influence', desc: 'percent' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Speed_Maximum', desc: 'percent' },
						{ name: 'Speed_Minimum', desc: 'percent' },
						{ name: 'Steer_Towards_Trajectory', desc: 'boolean' },
						{ name: 'Use_Speed_Variation', desc: 'boolean' }
					]
				}
			},
			{
				name: 'SphereGizmo',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'hemisphere', desc: 'boolean' },
						{ name: 'radius', desc: 'float' },
						{ name: 'seed', desc: 'integer' }
					]
				}
			},
			{
				name: 'spin',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Direction', desc: 'integer' },
						{ name: 'Divergence', desc: 'angle' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Spin_X_Axis', desc: 'float' },
						{ name: 'Spin_Y_Axis', desc: 'float' },
						{ name: 'Spin_Z_Axis', desc: 'float' },
						{ name: 'SpinRate', desc: 'angle' },
						{ name: 'Variation', desc: 'angle' }
					]
				}
			},
			{
				name: 'Split_Amount',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Every_Nth', desc: 'integer' },
						{ name: 'First_N', desc: 'integer' },
						{ name: 'Per_Emission_Source', desc: 'boolean' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Ratio', desc: 'percent' },
						{ name: 'Test_Type', desc: 'integer' }
					]
				}
			},
			{
				name: 'Split_Group',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Condition_Type', desc: 'integer' },
						{ name: 'Group_Selection_Operator', desc: 'node' },
						{ name: 'Group_Selection_Operators', desc: 'node' },
						{ name: 'Index_Offset', desc: 'integer' },
						{ name: 'Multiplier', desc: 'float' },
						{ name: 'Proxy_Particle_System', desc: 'node' },
						{ name: 'Use_Proxy_Particles', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Split_Selected',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Condition_Type', desc: 'radiobtnIndex' }
					]
				}
			},
			{
				name: 'Split_Source',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Condition_Type', desc: 'radiobtnIndex' },
						{ name: 'Selected_Sources', desc: 'int' }
					]
				}
			},
			{
				name: 'stop',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Position', desc: 'boolean' },
						{ name: 'Rotation', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Stop_Gradually',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Position', desc: 'boolean' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Rotation', desc: 'boolean' },
						{ name: 'Slow_Down_Start_Time', desc: 'integer' },
						{ name: 'Start_Time_Variation', desc: 'integer' },
						{ name: 'Stop_Time', desc: 'integer' },
						{ name: 'Stop_Time_Variation', desc: 'integer' },
						{ name: 'Stop_Type', desc: 'integer' },
						{ name: 'Timing_Start_Type', desc: 'integer' },
						{ name: 'Use_Different_Types', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Substitute_Object',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'displayIcon', desc: 'boolean' },
						{ name: 'iconSize', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'Tape',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'length', desc: 'float' }
					]
				}
			},
			{
				name: 'Test_Icon',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Activity_Type', desc: 'radiobtnIndex' },
						{ name: 'Animatable_Active', desc: 'boolean' },
						{ name: 'Auto_Update', desc: 'boolean' },
						{ name: 'Auto_Update_On_Data_View_Close', desc: 'boolean' },
						{ name: 'Default_Height', desc: 'integer' },
						{ name: 'Default_Offset', desc: 'integer' },
						{ name: 'Default_Range_Type', desc: 'integer' },
						{ name: 'Default_Width', desc: 'integer' },
						{ name: 'Enable_By_Switch', desc: 'boolean' },
						{ name: 'Groups', desc: 'maxObject' },
						{ name: 'Icon_Parameter_1', desc: 'worldUnits' },
						{ name: 'Icon_Parameter_2', desc: 'worldUnits' },
						{ name: 'Icon_Parameter_3', desc: 'worldUnits' },
						{ name: 'Icon_Type', desc: 'integer' },
						{ name: 'PDView_Description_Type', desc: 'integer' },
						{ name: 'PDView_Divider', desc: 'integer' },
						{ name: 'PDView_Height', desc: 'integer' },
						{ name: 'PDView_Origin_X', desc: 'integer' },
						{ name: 'PDView_Origin_Y', desc: 'integer' },
						{ name: 'PDView_Show_Depot', desc: 'boolean' },
						{ name: 'PDView_Show_Parameters', desc: 'boolean' },
						{ name: 'PDView_Width', desc: 'integer' },
						{ name: 'Repeats', desc: 'integer' },
						{ name: 'Selected_SubOperators', desc: 'maxObject' },
						{ name: 'SubOperators', desc: 'maxObject' },
						{ name: 'Time_Off', desc: 'integer' },
						{ name: 'Time_On', desc: 'integer' },
						{ name: 'Visible_Icon', desc: 'boolean' }
					]
				}
			},
			{
				name: 'UConstraint',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'body0', desc: 'node' },
						{ name: 'body1', desc: 'node' },
						{ name: 'breakable', desc: 'boolean' },
						{ name: 'collision', desc: 'boolean' },
						{ name: 'gearing', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Utility',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Dummy', desc: 'integer' }
					]
				}
			},
			{
				name: 'uvwMappingPositionManip',
				desc: 'MAXSuperClass: helper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'uvgen', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'Convert_To_SubObject_Type',
				desc: 'MAXSuperClass: IDataChannelEngineClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'mapChanSpinBox', desc: 'integer' },
						{ name: 'subObjectComboBox', desc: 'integer' },
						{ name: 'vertexComboBox', desc: 'integer' }
					]
				}
			},
			{
				name: 'curve',
				desc: 'MAXSuperClass: IDataChannelEngineClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'curve', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'decay',
				desc: 'MAXSuperClass: IDataChannelEngineClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'curve', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'Edge_Input',
				desc: 'MAXSuperClass: IDataChannelEngineClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'doubleSpinBox', desc: 'float' },
						{ name: 'inputComboBox', desc: 'integer' }
					]
				}
			},
			{
				name: 'Edge_Output',
				desc: 'MAXSuperClass: IDataChannelEngineClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'outputComboBox', desc: 'integer' },
						{ name: 'typeComboBox', desc: 'integer' }
					]
				}
			},
			{
				name: 'Engine_Local_Space',
				desc: 'MAXSuperClass: IDataChannelEngineClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'max', desc: 'float' },
						{ name: 'min', desc: 'float' },
						{ name: 'node', desc: 'node' },
						{ name: 'normalize', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Face_Input',
				desc: 'MAXSuperClass: IDataChannelEngineClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'inputComboBox', desc: 'integer' }
					]
				}
			},
			{
				name: 'Face_Output',
				desc: 'MAXSuperClass: IDataChannelEngineClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'outputComboBox', desc: 'integer' },
						{ name: 'typeComboBox', desc: 'integer' }
					]
				}
			},
			{
				name: 'MAXScriptIDataChannelEngineClass',
				desc: 'MAXSuperClass: IDataChannelEngineClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'dataType', desc: 'integer' },
						{ name: 'elementType', desc: 'integer' },
						{ name: 'script', desc: 'string' }
					]
				}
			},
			{
				name: 'Operator_ColorElements',
				desc: 'MAXSuperClass: IDataChannelEngineClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'color1', desc: 'RGB' },
						{ name: 'color2', desc: 'RGB' },
						{ name: 'colorOption', desc: 'integer' },
						{ name: 'HRand', desc: 'boolean' },
						{ name: 'inputOption', desc: 'integer' },
						{ name: 'LRand', desc: 'boolean' },
						{ name: 'map', desc: 'texturemap' },
						{ name: 'mapChannel', desc: 'integer' },
						{ name: 'outputChannel', desc: 'integer' },
						{ name: 'randomize', desc: 'boolean' },
						{ name: 'randomizeHPercent', desc: 'float' },
						{ name: 'randomizeLPercent', desc: 'float' },
						{ name: 'randomizeSPercent', desc: 'float' },
						{ name: 'seed', desc: 'integer' },
						{ name: 'SRand', desc: 'boolean' },
						{ name: 'unused1', desc: 'float' },
						{ name: 'useColors', desc: 'boolean' },
						{ name: 'useElementCenter', desc: 'boolean' },
						{ name: 'vertColorChannel', desc: 'integer' }
					]
				}
			},
			{
				name: 'Operator_ComponentSpace',
				desc: 'MAXSuperClass: IDataChannelEngineClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'max', desc: 'float' },
						{ name: 'min', desc: 'float' },
						{ name: 'node', desc: 'node' },
						{ name: 'normalize', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Operator_DeltaMush',
				desc: 'MAXSuperClass: IDataChannelEngineClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'iterations', desc: 'integer' },
						{ name: 'mask', desc: 'boolean' },
						{ name: 'maskMapChannel', desc: 'integer' },
						{ name: 'outputMode', desc: 'integer' },
						{ name: 'pinBorders', desc: 'boolean' },
						{ name: 'strength', desc: 'float' }
					]
				}
			},
			{
				name: 'Operator_GeoQuantize',
				desc: 'MAXSuperClass: IDataChannelEngineClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'mode', desc: 'integer' }
					]
				}
			},
			{
				name: 'Operator_NodeInfluence',
				desc: 'MAXSuperClass: IDataChannelEngineClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'maxRange', desc: 'float' },
						{ name: 'maxValue', desc: 'float' },
						{ name: 'minRange', desc: 'float' },
						{ name: 'minValue', desc: 'float' },
						{ name: 'mode', desc: 'integer' },
						{ name: 'node', desc: 'node' }
					]
				}
			},
			{
				name: 'Operator_TensionDeform',
				desc: 'MAXSuperClass: IDataChannelEngineClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'deformMesh', desc: 'boolean' },
						{ name: 'enableDisplay', desc: 'boolean' },
						{ name: 'mode', desc: 'integer' },
						{ name: 'outputSquash', desc: 'boolean' },
						{ name: 'outputStretch', desc: 'boolean' },
						{ name: 'squash', desc: 'float' },
						{ name: 'squashMapChannel', desc: 'integer' },
						{ name: 'squashMask', desc: 'boolean' },
						{ name: 'squashTarget', desc: 'node' },
						{ name: 'squashUseMorph', desc: 'boolean' },
						{ name: 'stretch', desc: 'float' },
						{ name: 'stretchMapChannel', desc: 'integer' },
						{ name: 'stretchMask', desc: 'boolean' },
						{ name: 'stretchTarget', desc: 'node' },
						{ name: 'stretchUseMorph', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Operator_TransformElements',
				desc: 'MAXSuperClass: IDataChannelEngineClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'axisMode', desc: 'integer' },
						{ name: 'inputChannel', desc: 'integer' },
						{ name: 'phase', desc: 'float' },
						{ name: 'pointAtNode', desc: 'boolean' },
						{ name: 'pointElements', desc: 'boolean' },
						{ name: 'pointNode', desc: 'node' },
						{ name: 'randomize', desc: 'boolean' },
						{ name: 'seed', desc: 'integer' },
						{ name: 'transformType', desc: 'integer' },
						{ name: 'XEnable', desc: 'boolean' },
						{ name: 'YEnable', desc: 'boolean' },
						{ name: 'ZEnable', desc: 'boolean' }
					]
				}
			},
			{
				name: 'VectorIDataChannelEngineClass',
				desc: 'MAXSuperClass: IDataChannelEngineClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'dirComboBox', desc: 'integer' },
						{ name: 'node', desc: 'node' },
						{ name: 'spaceComboBox', desc: 'integer' }
					]
				}
			},
			{
				name: 'Directionallight',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'affectDiffuse', desc: 'boolean' },
						{ name: 'affectSpecular', desc: 'boolean' },
						{ name: 'ambientOnly', desc: 'boolean' },
						{ name: 'aspect', desc: 'float' },
						{ name: 'atmosColorAmt', desc: 'percent' },
						{ name: 'atmosOpacity', desc: 'percent' },
						{ name: 'atmosShadows', desc: 'boolean' },
						{ name: 'attenDecay', desc: 'integer' },
						{ name: 'castShadows', desc: 'boolean' },
						{ name: 'contrast', desc: 'float' },
						{ name: 'decayRadius', desc: 'float' },
						{ name: 'excludeList', desc: 'node' },
						{ name: 'falloff', desc: 'float' },
						{ name: 'farAttenEnd', desc: 'float' },
						{ name: 'farAttenStart', desc: 'float' },
						{ name: 'hotspot', desc: 'float' },
						{ name: 'hsv', desc: 'HSV' },
						{ name: 'hue', desc: 'colorChannel' },
						{ name: 'inclExclType', desc: 'integer' },
						{ name: 'includeList', desc: 'node' },
						{ name: 'lightAffectsShadow', desc: 'boolean' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'nearAttenEnd', desc: 'float' },
						{ name: 'nearAttenStart', desc: 'float' },
						{ name: 'overShoot', desc: 'boolean' },
						{ name: 'projector', desc: 'boolean' },
						{ name: 'projectorMap', desc: 'texturemap' },
						{ name: 'raytracedShadows', desc: 'boolean' },
						{ name: 'saturation', desc: 'colorChannel' },
						{ name: 'shadowColor', desc: 'RGB' },
						{ name: 'shadowMultiplier', desc: 'float' },
						{ name: 'shadowProjectorMap', desc: 'texturemap' },
						{ name: 'showCone', desc: 'boolean' },
						{ name: 'showFarAtten', desc: 'boolean' },
						{ name: 'showNearAtten', desc: 'boolean' },
						{ name: 'softenDiffuseEdge', desc: 'float' },
						{ name: 'useFarAtten', desc: 'boolean' },
						{ name: 'useGlobalShadowSettings', desc: 'boolean' },
						{ name: 'useNearAtten', desc: 'boolean' },
						{ name: 'useShadowProjectorMap', desc: 'boolean' },
						{ name: 'value', desc: 'colorChannel' }
					]
				}
			},
			{
				name: 'Free_Area',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'flux', desc: 'float' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'kelvin', desc: 'float' },
						{ name: 'light_length', desc: 'worldUnits' },
						{ name: 'light_radius', desc: 'worldUnits' },
						{ name: 'light_width', desc: 'worldUnits' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'originalFlux', desc: 'float' },
						{ name: 'projector', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Free_Cylinder',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'flux', desc: 'float' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'kelvin', desc: 'float' },
						{ name: 'light_length', desc: 'worldUnits' },
						{ name: 'light_radius', desc: 'worldUnits' },
						{ name: 'light_width', desc: 'worldUnits' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'originalFlux', desc: 'float' },
						{ name: 'projector', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Free_Disc',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'flux', desc: 'float' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'kelvin', desc: 'float' },
						{ name: 'light_length', desc: 'worldUnits' },
						{ name: 'light_radius', desc: 'worldUnits' },
						{ name: 'light_width', desc: 'worldUnits' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'originalFlux', desc: 'float' },
						{ name: 'projector', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Free_Light',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'flux', desc: 'float' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'kelvin', desc: 'float' },
						{ name: 'light_length', desc: 'worldUnits' },
						{ name: 'light_radius', desc: 'worldUnits' },
						{ name: 'light_width', desc: 'worldUnits' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'originalFlux', desc: 'float' },
						{ name: 'projector', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Free_Linear',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'flux', desc: 'float' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'kelvin', desc: 'float' },
						{ name: 'light_length', desc: 'worldUnits' },
						{ name: 'light_radius', desc: 'worldUnits' },
						{ name: 'light_width', desc: 'worldUnits' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'originalFlux', desc: 'float' },
						{ name: 'projector', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Free_Sphere',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'flux', desc: 'float' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'kelvin', desc: 'float' },
						{ name: 'light_length', desc: 'worldUnits' },
						{ name: 'light_radius', desc: 'worldUnits' },
						{ name: 'light_width', desc: 'worldUnits' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'originalFlux', desc: 'float' },
						{ name: 'projector', desc: 'boolean' }
					]
				}
			},
			{
				name: 'freeSpot',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'affectDiffuse', desc: 'boolean' },
						{ name: 'affectSpecular', desc: 'boolean' },
						{ name: 'ambientOnly', desc: 'boolean' },
						{ name: 'aspect', desc: 'float' },
						{ name: 'atmosColorAmt', desc: 'percent' },
						{ name: 'atmosOpacity', desc: 'percent' },
						{ name: 'atmosShadows', desc: 'boolean' },
						{ name: 'attenDecay', desc: 'integer' },
						{ name: 'castShadows', desc: 'boolean' },
						{ name: 'contrast', desc: 'float' },
						{ name: 'decayRadius', desc: 'float' },
						{ name: 'excludeList', desc: 'node' },
						{ name: 'falloff', desc: 'float' },
						{ name: 'farAttenEnd', desc: 'float' },
						{ name: 'farAttenStart', desc: 'float' },
						{ name: 'hotspot', desc: 'float' },
						{ name: 'hsv', desc: 'HSV' },
						{ name: 'hue', desc: 'colorChannel' },
						{ name: 'inclExclType', desc: 'integer' },
						{ name: 'includeList', desc: 'node' },
						{ name: 'lightAffectsShadow', desc: 'boolean' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'nearAttenEnd', desc: 'float' },
						{ name: 'nearAttenStart', desc: 'float' },
						{ name: 'overShoot', desc: 'boolean' },
						{ name: 'projector', desc: 'boolean' },
						{ name: 'projectorMap', desc: 'texturemap' },
						{ name: 'raytracedShadows', desc: 'boolean' },
						{ name: 'saturation', desc: 'colorChannel' },
						{ name: 'shadowColor', desc: 'RGB' },
						{ name: 'shadowMultiplier', desc: 'float' },
						{ name: 'shadowProjectorMap', desc: 'texturemap' },
						{ name: 'showCone', desc: 'boolean' },
						{ name: 'showFarAtten', desc: 'boolean' },
						{ name: 'showNearAtten', desc: 'boolean' },
						{ name: 'softenDiffuseEdge', desc: 'float' },
						{ name: 'useFarAtten', desc: 'boolean' },
						{ name: 'useGlobalShadowSettings', desc: 'boolean' },
						{ name: 'useNearAtten', desc: 'boolean' },
						{ name: 'useShadowProjectorMap', desc: 'boolean' },
						{ name: 'value', desc: 'colorChannel' }
					]
				}
			},
			{
				name: 'IES_Sky',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'color', desc: 'RGB' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'on', desc: 'boolean' },
						{ name: 'ray_bias', desc: 'float' },
						{ name: 'rays_per_sample', desc: 'integer' },
						{ name: 'sky_cover', desc: 'float' }
					]
				}
			},
			{
				name: 'IES_Sun',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'contrast', desc: 'percent' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'on', desc: 'boolean' },
						{ name: 'rgb', desc: 'RGB' }
					]
				}
			},
			{
				name: 'miAreaLight',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Area_Enable', desc: 'boolean' },
						{ name: 'Area_Type', desc: 'integer' },
						{ name: 'Area_U_Samples', desc: 'integer' },
						{ name: 'Area_V_Samples', desc: 'integer' },
						{ name: 'Area_Visible', desc: 'boolean' },
						{ name: 'Disc_Radius', desc: 'worldUnits' },
						{ name: 'Rectangle_Height', desc: 'worldUnits' },
						{ name: 'Rectangle_Width', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'miAreaLightomni',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Area_Enable', desc: 'boolean' },
						{ name: 'Area_Type', desc: 'integer' },
						{ name: 'Area_U_Samples', desc: 'integer' },
						{ name: 'Area_V_Samples', desc: 'integer' },
						{ name: 'Area_Visible', desc: 'boolean' },
						{ name: 'Cylinder_Height', desc: 'worldUnits' },
						{ name: 'Sphere_Radius', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'Omnilight',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'affectDiffuse', desc: 'boolean' },
						{ name: 'affectSpecular', desc: 'boolean' },
						{ name: 'ambientOnly', desc: 'boolean' },
						{ name: 'atmosColorAmt', desc: 'percent' },
						{ name: 'atmosOpacity', desc: 'percent' },
						{ name: 'atmosShadows', desc: 'boolean' },
						{ name: 'attenDecay', desc: 'integer' },
						{ name: 'castShadows', desc: 'boolean' },
						{ name: 'contrast', desc: 'float' },
						{ name: 'decayRadius', desc: 'float' },
						{ name: 'excludeList', desc: 'node' },
						{ name: 'farAttenEnd', desc: 'float' },
						{ name: 'farAttenStart', desc: 'float' },
						{ name: 'hsv', desc: 'HSV' },
						{ name: 'hue', desc: 'colorChannel' },
						{ name: 'inclExclType', desc: 'integer' },
						{ name: 'includeList', desc: 'node' },
						{ name: 'lightAffectsShadow', desc: 'boolean' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'nearAttenEnd', desc: 'float' },
						{ name: 'nearAttenStart', desc: 'float' },
						{ name: 'projector', desc: 'boolean' },
						{ name: 'projectorMap', desc: 'texturemap' },
						{ name: 'raytracedShadows', desc: 'boolean' },
						{ name: 'saturation', desc: 'colorChannel' },
						{ name: 'shadowColor', desc: 'RGB' },
						{ name: 'shadowMultiplier', desc: 'float' },
						{ name: 'shadowProjectorMap', desc: 'texturemap' },
						{ name: 'showFarAtten', desc: 'boolean' },
						{ name: 'showNearAtten', desc: 'boolean' },
						{ name: 'softenDiffuseEdge', desc: 'float' },
						{ name: 'useFarAtten', desc: 'boolean' },
						{ name: 'useGlobalShadowSettings', desc: 'boolean' },
						{ name: 'useNearAtten', desc: 'boolean' },
						{ name: 'useShadowProjectorMap', desc: 'boolean' },
						{ name: 'value', desc: 'colorChannel' }
					]
				}
			},
			{
				name: 'Skylight',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'color', desc: 'RGB' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'on', desc: 'boolean' },
						{ name: 'ray_bias', desc: 'float' },
						{ name: 'rays_per_sample', desc: 'integer' },
						{ name: 'sky_color_map', desc: 'texturemap' },
						{ name: 'sky_color_map_amt', desc: 'float' },
						{ name: 'sky_color_map_on', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Sun_Positioner',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'altitude_deg', desc: 'float' },
						{ name: 'azimuth_deg', desc: 'float' },
						{ name: 'compass_radius', desc: 'worldUnits' },
						{ name: 'day', desc: 'integer' },
						{ name: 'dst', desc: 'boolean' },
						{ name: 'dst_end_day', desc: 'integer' },
						{ name: 'dst_end_month', desc: 'integer' },
						{ name: 'dst_start_day', desc: 'integer' },
						{ name: 'dst_start_month', desc: 'integer' },
						{ name: 'dst_use_date_range', desc: 'boolean' },
						{ name: 'hours', desc: 'integer' },
						{ name: 'julian_day', desc: 'integer' },
						{ name: 'latitude_deg', desc: 'float' },
						{ name: 'location', desc: 'string' },
						{ name: 'longitude_deg', desc: 'float' },
						{ name: 'manual_sun_position', desc: 'point3' },
						{ name: 'minutes', desc: 'integer' },
						{ name: 'mode', desc: 'integer' },
						{ name: 'month', desc: 'integer' },
						{ name: 'north_direction_deg', desc: 'float' },
						{ name: 'show_compass', desc: 'boolean' },
						{ name: 'sun_distance', desc: 'worldUnits' },
						{ name: 'time_in_seconds', desc: 'integer' },
						{ name: 'time_zone', desc: 'float' },
						{ name: 'weather_file', desc: 'filename' },
						{ name: 'year', desc: 'integer' }
					]
				}
			},
			{
				name: 'Target_Area',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'flux', desc: 'float' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'kelvin', desc: 'float' },
						{ name: 'light_length', desc: 'worldUnits' },
						{ name: 'light_radius', desc: 'worldUnits' },
						{ name: 'light_width', desc: 'worldUnits' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'originalFlux', desc: 'float' },
						{ name: 'projector', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Target_Cylinder',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'flux', desc: 'float' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'kelvin', desc: 'float' },
						{ name: 'light_length', desc: 'worldUnits' },
						{ name: 'light_radius', desc: 'worldUnits' },
						{ name: 'light_width', desc: 'worldUnits' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'originalFlux', desc: 'float' },
						{ name: 'projector', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Target_Disc',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'flux', desc: 'float' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'kelvin', desc: 'float' },
						{ name: 'light_length', desc: 'worldUnits' },
						{ name: 'light_radius', desc: 'worldUnits' },
						{ name: 'light_width', desc: 'worldUnits' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'originalFlux', desc: 'float' },
						{ name: 'projector', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Target_Light',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'flux', desc: 'float' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'kelvin', desc: 'float' },
						{ name: 'light_length', desc: 'worldUnits' },
						{ name: 'light_radius', desc: 'worldUnits' },
						{ name: 'light_width', desc: 'worldUnits' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'originalFlux', desc: 'float' },
						{ name: 'projector', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Target_Linear',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'flux', desc: 'float' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'kelvin', desc: 'float' },
						{ name: 'light_length', desc: 'worldUnits' },
						{ name: 'light_radius', desc: 'worldUnits' },
						{ name: 'light_width', desc: 'worldUnits' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'originalFlux', desc: 'float' },
						{ name: 'projector', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Target_Sphere',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'flux', desc: 'float' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'kelvin', desc: 'float' },
						{ name: 'light_length', desc: 'worldUnits' },
						{ name: 'light_radius', desc: 'worldUnits' },
						{ name: 'light_width', desc: 'worldUnits' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'originalFlux', desc: 'float' },
						{ name: 'projector', desc: 'boolean' }
					]
				}
			},
			{
				name: 'TargetDirectionallight',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'affectDiffuse', desc: 'boolean' },
						{ name: 'affectSpecular', desc: 'boolean' },
						{ name: 'ambientOnly', desc: 'boolean' },
						{ name: 'aspect', desc: 'float' },
						{ name: 'atmosColorAmt', desc: 'percent' },
						{ name: 'atmosOpacity', desc: 'percent' },
						{ name: 'atmosShadows', desc: 'boolean' },
						{ name: 'attenDecay', desc: 'integer' },
						{ name: 'castShadows', desc: 'boolean' },
						{ name: 'contrast', desc: 'float' },
						{ name: 'decayRadius', desc: 'float' },
						{ name: 'excludeList', desc: 'node' },
						{ name: 'falloff', desc: 'float' },
						{ name: 'farAttenEnd', desc: 'float' },
						{ name: 'farAttenStart', desc: 'float' },
						{ name: 'hotspot', desc: 'float' },
						{ name: 'hsv', desc: 'HSV' },
						{ name: 'hue', desc: 'colorChannel' },
						{ name: 'inclExclType', desc: 'integer' },
						{ name: 'includeList', desc: 'node' },
						{ name: 'lightAffectsShadow', desc: 'boolean' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'nearAttenEnd', desc: 'float' },
						{ name: 'nearAttenStart', desc: 'float' },
						{ name: 'overShoot', desc: 'boolean' },
						{ name: 'projector', desc: 'boolean' },
						{ name: 'projectorMap', desc: 'texturemap' },
						{ name: 'raytracedShadows', desc: 'boolean' },
						{ name: 'saturation', desc: 'colorChannel' },
						{ name: 'shadowColor', desc: 'RGB' },
						{ name: 'shadowMultiplier', desc: 'float' },
						{ name: 'shadowProjectorMap', desc: 'texturemap' },
						{ name: 'showCone', desc: 'boolean' },
						{ name: 'showFarAtten', desc: 'boolean' },
						{ name: 'showNearAtten', desc: 'boolean' },
						{ name: 'softenDiffuseEdge', desc: 'float' },
						{ name: 'useFarAtten', desc: 'boolean' },
						{ name: 'useGlobalShadowSettings', desc: 'boolean' },
						{ name: 'useNearAtten', desc: 'boolean' },
						{ name: 'useShadowProjectorMap', desc: 'boolean' },
						{ name: 'value', desc: 'colorChannel' }
					]
				}
			},
			{
				name: 'targetSpot',
				desc: 'MAXSuperClass: light',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'affectDiffuse', desc: 'boolean' },
						{ name: 'affectSpecular', desc: 'boolean' },
						{ name: 'ambientOnly', desc: 'boolean' },
						{ name: 'aspect', desc: 'float' },
						{ name: 'atmosColorAmt', desc: 'percent' },
						{ name: 'atmosOpacity', desc: 'percent' },
						{ name: 'atmosShadows', desc: 'boolean' },
						{ name: 'attenDecay', desc: 'integer' },
						{ name: 'castShadows', desc: 'boolean' },
						{ name: 'contrast', desc: 'float' },
						{ name: 'decayRadius', desc: 'float' },
						{ name: 'excludeList', desc: 'node' },
						{ name: 'falloff', desc: 'float' },
						{ name: 'farAttenEnd', desc: 'float' },
						{ name: 'farAttenStart', desc: 'float' },
						{ name: 'hotspot', desc: 'float' },
						{ name: 'hsv', desc: 'HSV' },
						{ name: 'hue', desc: 'colorChannel' },
						{ name: 'inclExclType', desc: 'integer' },
						{ name: 'includeList', desc: 'node' },
						{ name: 'lightAffectsShadow', desc: 'boolean' },
						{ name: 'multiplier', desc: 'float' },
						{ name: 'nearAttenEnd', desc: 'float' },
						{ name: 'nearAttenStart', desc: 'float' },
						{ name: 'overShoot', desc: 'boolean' },
						{ name: 'projector', desc: 'boolean' },
						{ name: 'projectorMap', desc: 'texturemap' },
						{ name: 'raytracedShadows', desc: 'boolean' },
						{ name: 'saturation', desc: 'colorChannel' },
						{ name: 'shadowColor', desc: 'RGB' },
						{ name: 'shadowMultiplier', desc: 'float' },
						{ name: 'shadowProjectorMap', desc: 'texturemap' },
						{ name: 'showCone', desc: 'boolean' },
						{ name: 'showFarAtten', desc: 'boolean' },
						{ name: 'showNearAtten', desc: 'boolean' },
						{ name: 'softenDiffuseEdge', desc: 'float' },
						{ name: 'useFarAtten', desc: 'boolean' },
						{ name: 'useGlobalShadowSettings', desc: 'boolean' },
						{ name: 'useNearAtten', desc: 'boolean' },
						{ name: 'useShadowProjectorMap', desc: 'boolean' },
						{ name: 'value', desc: 'colorChannel' }
					]
				}
			},
			{
				name: 'Block_Control',
				desc: 'MAXSuperClass: MasterBlockController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'weight', desc: 'float' }
					]
				}
			},
			{
				name: 'Advanced_Lighting_Override',
				desc: 'MAXSuperClass: material',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'baseMaterial', desc: 'material' },
						{ name: 'bumpScale', desc: 'float' },
						{ name: 'colorBleed', desc: 'float' },
						{ name: 'luminanceScale', desc: 'float' },
						{ name: 'reflectanceScale', desc: 'float' },
						{ name: 'transmittanceScale', desc: 'float' }
					]
				}
			},
			{
				name: 'Arch___Design__mi',
				desc: 'MAXSuperClass: material',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'anisotropy', desc: 'float' },
						{ name: 'anisotropy_map', desc: 'texturemap' },
						{ name: 'anisotropy_map_on', desc: 'boolean' },
						{ name: 'bump_map', desc: 'texturemap' },
						{ name: 'bump_map_on', desc: 'boolean' },
						{ name: 'cutout_map', desc: 'texturemap' },
						{ name: 'cutout_map_on', desc: 'boolean' },
						{ name: 'displacement_map', desc: 'texturemap' },
						{ name: 'displacement_map_on', desc: 'boolean' },
						{ name: 'environment_map', desc: 'texturemap' },
						{ name: 'environment_map_on', desc: 'boolean' },
						{ name: 'fg_quality_map', desc: 'texturemap' },
						{ name: 'fg_quality_map_on', desc: 'boolean' },
						{ name: 'radius_map', desc: 'texturemap' },
						{ name: 'radius_map_on', desc: 'boolean' },
						{ name: 'self_illum_map_on', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Architectural',
				desc: 'MAXSuperClass: material',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'diffuse', desc: 'RGB' },
						{ name: 'ior', desc: 'float' },
						{ name: 'luminance', desc: 'float' },
						{ name: 'maps', desc: 'texturemap' },
						{ name: 'sampler', desc: 'integer' },
						{ name: 'shininess', desc: 'percent' },
						{ name: 'template', desc: 'string' },
						{ name: 'translucency', desc: 'percent' },
						{ name: 'transparency', desc: 'percent' }
					]
				}
			},
			{
				name: 'Blend',
				desc: 'MAXSuperClass: material',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'interactive', desc: 'integer' },
						{ name: 'lower', desc: 'float' },
						{ name: 'mask', desc: 'texturemap' },
						{ name: 'mixAmount', desc: 'percent' },
						{ name: 'upper', desc: 'float' },
						{ name: 'useCurve', desc: 'boolean' }
					]
				}
			},
			{
				name: 'compositematerial',
				desc: 'MAXSuperClass: material',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'amount', desc: 'float' }
					]
				}
			},
			{
				name: 'MatteShadow',
				desc: 'MAXSuperClass: material',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'affectAlpha', desc: 'boolean' },
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'map', desc: 'texturemap' },
						{ name: 'useReflMap', desc: 'boolean' }
					]
				}
			},
			{
				name: 'MorpherMaterial',
				desc: 'MAXSuperClass: material',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Channel_', desc: 'Percent integer value. Channel_X, where X goes from 1 to 100' },
					]
				}
			},
			{
				name: 'PhysicalMaterial',
				desc: 'MAXSuperClass: material',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'anisotropy', desc: 'float' },
						{ name: 'anisotropy_map', desc: 'texturemap' },
						{ name: 'base_color', desc: 'fRGBA' },
						{ name: 'base_color_map', desc: 'texturemap' },
						{ name: 'base_weight', desc: 'float' },
						{ name: 'base_weight_map', desc: 'texturemap' },
						{ name: 'brdf_high', desc: 'float' },
						{ name: 'brdf_low', desc: 'float' },
						{ name: 'brdf_mode', desc: 'boolean' },
						{ name: 'bump_map', desc: 'texturemap' },
						{ name: 'bump_map_on', desc: 'boolean' },
						{ name: 'cutout_map', desc: 'texturemap' },
						{ name: 'displacement_map', desc: 'texturemap' },
						{ name: 'emission', desc: 'float' },
						{ name: 'emission_map', desc: 'texturemap' },
						{ name: 'material_mode', desc: 'integer' },
						{ name: 'metalness', desc: 'float' },
						{ name: 'metalness_map', desc: 'texturemap' },
						{ name: 'refl_color_map', desc: 'texturemap' },
						{ name: 'reflectivity', desc: 'float' },
						{ name: 'reflectivity_map', desc: 'texturemap' },
						{ name: 'roughness', desc: 'float' },
						{ name: 'roughness_map', desc: 'texturemap' },
						{ name: 'scattering', desc: 'float' },
						{ name: 'scattering_map', desc: 'texturemap' },
						{ name: 'sss_color', desc: 'fRGBA' },
						{ name: 'sss_color_map', desc: 'texturemap' },
						{ name: 'sss_depth', desc: 'float' },
						{ name: 'sss_scale', desc: 'float' },
						{ name: 'sss_scale_map', desc: 'texturemap' },
						{ name: 'sss_scatter_color', desc: 'fRGBA' },
						{ name: 'thin_walled', desc: 'boolean' },
						{ name: 'transparency', desc: 'float' },
						{ name: 'transparency_map', desc: 'texturemap' }
					]
				}
			},
			{
				name: 'RaytraceMaterial',
				desc: 'MAXSuperClass: material',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Adaptive_Antialiasing_On', desc: 'boolean' },
						{ name: 'ambient', desc: 'RGB' },
						{ name: 'Ambient_Amount', desc: 'percent' },
						{ name: 'Ambient_Color_On', desc: 'boolean' },
						{ name: 'anisotropy', desc: 'percent' },
						{ name: 'Attenuation_Color', desc: 'RGB' },
						{ name: 'Attenuation_Color_Mode', desc: 'integer' },
						{ name: 'Attenuation_Control_1', desc: 'float' },
						{ name: 'Attenuation_Control_2', desc: 'float' },
						{ name: 'Attenuation_Exponent', desc: 'float' },
						{ name: 'Attenuation_Far', desc: 'float' },
						{ name: 'Attenuation_Near', desc: 'float' },
						{ name: 'Attenuation_Start', desc: 'float' },
						{ name: 'Blur_Map', desc: 'boolean' },
						{ name: 'Bounce_Coefficient', desc: 'float' },
						{ name: 'Bump_Map_Effect', desc: 'float' },
						{ name: 'Color_Density_Amount', desc: 'float' },
						{ name: 'Color_Density_Color', desc: 'RGB' },
						{ name: 'Color_Density_Enable', desc: 'boolean' },
						{ name: 'Color_Density_End', desc: 'float' },
						{ name: 'Color_Density_Start', desc: 'float' },
						{ name: 'Defocus_Map', desc: 'boolean' },
						{ name: 'Diffuse', desc: 'RGB' },
						{ name: 'effectsChannel', desc: 'integer' },
						{ name: 'Enable_Raytraced_Reflections', desc: 'boolean' },
						{ name: 'Enable_Raytraced_Refractions', desc: 'boolean' },
						{ name: 'Enable_Reflection_Falloff', desc: 'boolean' },
						{ name: 'Enable_Refraction_Falloff', desc: 'boolean' },
						{ name: 'Extra_Lighting', desc: 'RGB' },
						{ name: 'faceMap', desc: 'boolean' },
						{ name: 'Fluorescence', desc: 'RGB' },
						{ name: 'Fluorescence_Bias', desc: 'percent' },
						{ name: 'Fog_Amount', desc: 'float' },
						{ name: 'fog_color', desc: 'RGB' },
						{ name: 'Fog_Enable', desc: 'boolean' },
						{ name: 'Fog_End', desc: 'float' },
						{ name: 'Fog_Start', desc: 'float' },
						{ name: 'glossiness', desc: 'percent' },
						{ name: 'Index_of_Refraction', desc: 'float' },
						{ name: 'Local_Blur_Aspect', desc: 'float' },
						{ name: 'Local_Blur_Offset', desc: 'float' },
						{ name: 'Local_Defocus', desc: 'float' },
						{ name: 'Local_Defocus_Aspect', desc: 'float' },
						{ name: 'Local_Max__Rays', desc: 'integer' },
						{ name: 'Local_Min__Rays', desc: 'integer' },
						{ name: 'Local_Threshold', desc: 'float' },
						{ name: 'Luminosity', desc: 'RGB' },
						{ name: 'Luminosity_Color_On', desc: 'boolean' },
						{ name: 'Options___Antialiasing_Enable', desc: 'boolean' },
						{ name: 'Options___Color_Density___Fog_Enable', desc: 'boolean' },
						{ name: 'Options___Raytrace_Atmospherics', desc: 'boolean' },
						{ name: 'Options___Raytrace_Atmospherics_in_Glass', desc: 'boolean' },
						{ name: 'Options___Raytrace_Objects_in_Glass', desc: 'boolean' },
						{ name: 'Options___Raytracer_Enable', desc: 'boolean' },
						{ name: 'Options___Reflect_Refract_Material_ID_s', desc: 'boolean' },
						{ name: 'Options___Self_Reflect_Refract', desc: 'boolean' },
						{ name: 'ORIENTATION', desc: 'percent' },
						{ name: 'Override_Global_Antialiasing_Settings', desc: 'boolean' },
						{ name: 'reflect', desc: 'RGB' },
						{ name: 'reflect_amount', desc: 'percent' },
						{ name: 'Reflect_Color_On', desc: 'integer' },
						{ name: 'Reflection_Falloff_Distance', desc: 'float' },
						{ name: 'Reflection_Falloff_End_Distance', desc: 'float' },
						{ name: 'Reflection_Falloff_Mode', desc: 'integer' },
						{ name: 'Reflection_Gain', desc: 'float' },
						{ name: 'Reflection_Type', desc: 'integer' },
						{ name: 'Refraction_Falloff_Distance', desc: 'float' },
						{ name: 'Refraction_Falloff_End_Distance', desc: 'float' },
						{ name: 'Refraction_Falloff_Mode', desc: 'integer' },
						{ name: 'Self_Illum_Amount', desc: 'percent' },
						{ name: 'shaderByName', desc: 'string' },
						{ name: 'shaderType', desc: 'integer' },
						{ name: 'Sliding_Friction', desc: 'float' },
						{ name: 'Soften', desc: 'float' },
						{ name: 'spec__color', desc: 'RGB' },
						{ name: 'specular_level', desc: 'percent' },
						{ name: 'Static_Friction', desc: 'float' },
						{ name: 'supersample', desc: 'boolean' },
						{ name: 'Translucency', desc: 'RGB' },
						{ name: 'transparecy', desc: 'RGB' },
						{ name: 'Transparency_Amount', desc: 'percent' },
						{ name: 'Transparency_Color_On', desc: 'boolean' },
						{ name: 'twoSided', desc: 'boolean' },
						{ name: 'wire', desc: 'boolean' },
						{ name: 'Wire_Size', desc: 'float' },
						{ name: 'wireUnits', desc: 'integer' }
					]
				}
			},
			{
				name: 'Standardmaterial',
				desc: 'MAXSuperClass: material',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'faceted', desc: 'boolean' },
						{ name: 'maps', desc: 'texturemap' },
						{ name: 'opacity', desc: 'percent' },
						{ name: 'wire', desc: 'boolean' }
					]
				}
			},
			{
				name: 'TopBottom',
				desc: 'MAXSuperClass: material',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'blend', desc: 'float' },
						{ name: 'coordinates', desc: 'integer' },
						{ name: 'position', desc: 'float' }
					]
				}
			},
			{
				name: 'XRef_Material',
				desc: 'MAXSuperClass: material',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'enableOverride', desc: 'boolean' },
						{ name: 'overrideMaterial', desc: 'material' }
					]
				}
			},
			{
				name: 'AlembicXform',
				desc: 'MAXSuperClass: Matrix3Controller',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'maxcoords', desc: 'boolean' },
						{ name: 'object', desc: 'string' },
						{ name: 'playbackEnd', desc: 'float' },
						{ name: 'playbackFrame', desc: 'float' },
						{ name: 'playbackStart', desc: 'float' },
						{ name: 'source', desc: 'filename' }
					]
				}
			},
			{
				name: 'BipSlave_Control',
				desc: 'MAXSuperClass: Matrix3Controller',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'rootName', desc: 'string' },
						{ name: 'rootNode', desc: 'node' }
					]
				}
			},
			{
				name: 'SplineIKChain',
				desc: 'MAXSuperClass: Matrix3Controller',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'helper_size', desc: 'float' },
						{ name: 'upnode', desc: 'node' }
					]
				}
			},
			{
				name: 'transform_script',
				desc: 'MAXSuperClass: Matrix3Controller',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'script', desc: 'string' }
					]
				}
			},
			{
				name: 'Footsteps',
				desc: 'MAXSuperClass: MAXWrapper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'dispAirDur', desc: 'boolean' },
						{ name: 'dispNoSupport', desc: 'boolean' },
						{ name: 'dispNumType', desc: 'integer' },
						{ name: 'freeFormMode', desc: 'boolean' },
						{ name: 'rootName', desc: 'string' },
						{ name: 'rootNode', desc: 'node' }
					]
				}
			},
			{
				name: 'Vertical_Horizontal_Turn',
				desc: 'MAXSuperClass: MAXWrapper',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptLockFreeform', desc: 'boolean' },
						{ name: 'adaptLockHorz', desc: 'boolean' },
						{ name: 'adaptLockLLeg', desc: 'boolean' },
						{ name: 'adaptLockRLeg', desc: 'boolean' },
						{ name: 'adaptLockTime', desc: 'boolean' },
						{ name: 'adaptLockTurn', desc: 'boolean' },
						{ name: 'adaptLockVert', desc: 'boolean' },
						{ name: 'ankleAttach', desc: 'float' },
						{ name: 'arms', desc: 'boolean' },
						{ name: 'bendLinksMode', desc: 'boolean' },
						{ name: 'bodySpaceNeckRotation', desc: 'boolean' },
						{ name: 'bodyType', desc: 'integer' },
						{ name: 'bufferMode', desc: 'boolean' },
						{ name: 'calfTwistBias', desc: 'float' },
						{ name: 'calfTwistLinks', desc: 'integer' },
						{ name: 'displayBones', desc: 'boolean' },
						{ name: 'displayBuffer', desc: 'boolean' },
						{ name: 'displayBufferTraj', desc: 'boolean' },
						{ name: 'displayFootsteps', desc: 'boolean' },
						{ name: 'displayFSNumbers', desc: 'boolean' },
						{ name: 'displayObjects', desc: 'boolean' },
						{ name: 'displayTrajectories', desc: 'boolean' },
						{ name: 'dynamicsType', desc: 'integer' },
						{ name: 'enableSubAnims', desc: 'boolean' },
						{ name: 'figureMode', desc: 'boolean' },
						{ name: 'fingerLinks', desc: 'integer' },
						{ name: 'fingers', desc: 'integer' },
						{ name: 'footstepMode', desc: 'boolean' },
						{ name: 'forearmTwistBias', desc: 'float' },
						{ name: 'forearmTwistLinks', desc: 'integer' },
						{ name: 'foreFeet', desc: 'boolean' },
						{ name: 'fsAirDuration', desc: 'time' },
						{ name: 'fsAppendState', desc: 'boolean' },
						{ name: 'fsCreateState', desc: 'boolean' },
						{ name: 'fsGaitMode', desc: 'integer' },
						{ name: 'fsGroundDuration', desc: 'time' },
						{ name: 'gravAccel', desc: 'float' },
						{ name: 'headObject', desc: 'node' },
						{ name: 'height', desc: 'float' },
						{ name: 'horseTwistBias', desc: 'float' },
						{ name: 'horseTwistLinks', desc: 'integer' },
						{ name: 'inPlaceMode', desc: 'boolean' },
						{ name: 'inPlaceXMode', desc: 'boolean' },
						{ name: 'inPlaceYMode', desc: 'boolean' },
						{ name: 'keyHighlight', desc: 'boolean' },
						{ name: 'knuckles', desc: 'boolean' },
						{ name: 'legLinks', desc: 'integer' },
						{ name: 'lockCom', desc: 'boolean' },
						{ name: 'manipSubAnims', desc: 'boolean' },
						{ name: 'mixerMode', desc: 'boolean' },
						{ name: 'motionMode', desc: 'boolean' },
						{ name: 'moveAllMode', desc: 'boolean' },
						{ name: 'neckLinks', desc: 'integer' },
						{ name: 'osObject', desc: 'node' },
						{ name: 'ponytail1Links', desc: 'integer' },
						{ name: 'ponytail2Links', desc: 'integer' },
						{ name: 'prop1Exists', desc: 'boolean' },
						{ name: 'prop2Exists', desc: 'boolean' },
						{ name: 'prop3Exists', desc: 'boolean' },
						{ name: 'rootName', desc: 'string' },
						{ name: 'rootNode', desc: 'node' },
						{ name: 'rubberBandMode', desc: 'boolean' },
						{ name: 'scaleStrideMode', desc: 'boolean' },
						{ name: 'sepArmsTracks', desc: 'boolean' },
						{ name: 'sepLegsTracks', desc: 'boolean' },
						{ name: 'sepNeckTracks', desc: 'boolean' },
						{ name: 'sepPonytail1Tracks', desc: 'boolean' },
						{ name: 'sepPonytail2Tracks', desc: 'boolean' },
						{ name: 'sepSpineTracks', desc: 'boolean' },
						{ name: 'sepTailTracks', desc: 'boolean' },
						{ name: 'shortThumb', desc: 'boolean' },
						{ name: 'showAllTracksInTV', desc: 'boolean' },
						{ name: 'showBipedInTrackBar', desc: 'boolean' },
						{ name: 'smoothTwistMode', desc: 'boolean' },
						{ name: 'spineLinks', desc: 'integer' },
						{ name: 'tailLinks', desc: 'integer' },
						{ name: 'talentFigMode', desc: 'boolean' },
						{ name: 'thighTwistBias', desc: 'float' },
						{ name: 'thighTwistLinks', desc: 'integer' },
						{ name: 'toeLinks', desc: 'integer' },
						{ name: 'toes', desc: 'integer' },
						{ name: 'trackSelection', desc: 'integer' },
						{ name: 'triangleNeck', desc: 'boolean' },
						{ name: 'trianglePelvis', desc: 'boolean' },
						{ name: 'twistIndMode', desc: 'boolean' },
						{ name: 'twistLinksMode', desc: 'boolean' },
						{ name: 'Twists', desc: 'boolean' },
						{ name: 'upperarmTwistBias', desc: 'float' },
						{ name: 'upperarmTwistLinks', desc: 'integer' },
						{ name: 'visibleAfter', desc: 'integer' },
						{ name: 'visibleBefore', desc: 'integer' }
					]
				}
			},
			{
				name: 'AdvOutline',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'AdvOutline', desc: 'boolean' },
						{ name: 'FromCenter', desc: 'boolean' },
						{ name: 'Outline', desc: 'boolean' },
						{ name: 'Remove_overlap', desc: 'boolean' },
						{ name: 'Reverse', desc: 'boolean' },
						{ name: 'Treshold', desc: 'float' },
						{ name: 'Weld', desc: 'boolean' },
						{ name: 'Width', desc: 'float' }
					]
				}
			},
			{
				name: 'Affect_Region',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bubble', desc: 'float' },
						{ name: 'falloff', desc: 'float' },
						{ name: 'ignoreBackfacing', desc: 'integer' },
						{ name: 'pinch', desc: 'float' }
					]
				}
			},
			{
				name: 'ApplyUVAsColor',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' }
					]
				}
			},
			{
				name: 'ApplyUVAsHSLColor',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'Hue_Maximum', desc: 'float' },
						{ name: 'Hue_Minimum', desc: 'float' },
						{ name: 'Luminance_Maximum', desc: 'float' },
						{ name: 'Luminance_Minimum', desc: 'float' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' },
						{ name: 'Saturation_Maximum', desc: 'float' },
						{ name: 'Saturation_Minimum', desc: 'float' }
					]
				}
			},
			{
				name: 'ApplyUVAsHSLGradient',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'Color_1', desc: 'RGB' },
						{ name: 'Color_2', desc: 'RGB' },
						{ name: 'Color_3', desc: 'RGB' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' },
						{ name: 'Use_V_for_Hue', desc: 'boolean' },
						{ name: 'Use_V_for_Lightness', desc: 'boolean' },
						{ name: 'Use_V_for_Saturation', desc: 'boolean' }
					]
				}
			},
			{
				name: 'ApplyUVAsHSLGradientWithMidpoint',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'Color_1', desc: 'RGB' },
						{ name: 'Color_2', desc: 'RGB' },
						{ name: 'Color_3', desc: 'RGB' },
						{ name: 'Ease_A', desc: 'float' },
						{ name: 'Ease_B', desc: 'float' },
						{ name: 'Midpoint', desc: 'float' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' },
						{ name: 'Use_V_for_Hue', desc: 'boolean' },
						{ name: 'Use_V_for_Lightness', desc: 'boolean' },
						{ name: 'Use_V_for_Saturation', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Bevel',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Cap_Bottom', desc: 'integer' },
						{ name: 'Cap_Top', desc: 'integer' },
						{ name: 'Cap_Type', desc: 'integer' },
						{ name: 'Keep_Lines_From_Crossing', desc: 'integer' },
						{ name: 'Level_1_Height', desc: 'float' },
						{ name: 'Level_1_Outline', desc: 'float' },
						{ name: 'Level_2_Height', desc: 'float' },
						{ name: 'Level_2_Outline', desc: 'float' },
						{ name: 'Level_3_Height', desc: 'float' },
						{ name: 'Level_3_Outline', desc: 'float' },
						{ name: 'Produce_Mapping_Coords', desc: 'integer' },
						{ name: 'segments', desc: 'integer' },
						{ name: 'Separation_Between_Lines', desc: 'float' },
						{ name: 'Side_Type', desc: 'integer' },
						{ name: 'Smooth_Levels', desc: 'integer' },
						{ name: 'Starting_Outline', desc: 'float' },
						{ name: 'Use_Level_2', desc: 'integer' },
						{ name: 'Use_Level_3', desc: 'integer' }
					]
				}
			},
			{
				name: 'Bevel_Profile',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'beveldepth', desc: 'float' },
						{ name: 'beveloffset', desc: 'float' },
						{ name: 'beveloptimize', desc: 'boolean' },
						{ name: 'bevelpush', desc: 'float' },
						{ name: 'bevelsteps', desc: 'integer' },
						{ name: 'bevelwidth', desc: 'float' },
						{ name: 'Cap_Bottom', desc: 'boolean' },
						{ name: 'Cap_Top', desc: 'boolean' },
						{ name: 'Cap_Type', desc: 'integer' },
						{ name: 'capend', desc: 'integer' },
						{ name: 'capendconstrain', desc: 'boolean' },
						{ name: 'capstart', desc: 'integer' },
						{ name: 'capstartconstrain', desc: 'boolean' },
						{ name: 'captype', desc: 'integer' },
						{ name: 'ClassicOrImproved', desc: 'integer' },
						{ name: 'endbevelmaterial', desc: 'integer' },
						{ name: 'endcapmaterial', desc: 'integer' },
						{ name: 'extrudeamount', desc: 'float' },
						{ name: 'extrudesegments', desc: 'integer' },
						{ name: 'Keep_Lines_From_Crossing', desc: 'boolean' },
						{ name: 'Produce_Mapping_Coords', desc: 'boolean' },
						{ name: 'Separation_Between_Lines', desc: 'float' },
						{ name: 'sidematerial', desc: 'integer' },
						{ name: 'startbevelmaterial', desc: 'integer' },
						{ name: 'startcapmaterial', desc: 'integer' },
						{ name: 'usebevelwidth', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CamPerspCorrect',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'paramPerspectCorrectAmount', desc: 'float' },
						{ name: 'paramPerspectCorrectDir', desc: 'float' }
					]
				}
			},
			{
				name: 'Cap_Holes',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Make_All_New_Edges_Visible', desc: 'integer' },
						{ name: 'Smooth_New_Faces', desc: 'integer' },
						{ name: 'Smooth_With_Old_Faces', desc: 'integer' }
					]
				}
			},
			{
				name: 'CFDColorVerticesMod',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'CFDImport_Object', desc: 'node' },
						{ name: 'Num_Samples', desc: 'integer' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' },
						{ name: 'Red_Amount', desc: 'float' },
						{ name: 'X_Col', desc: 'integer' },
						{ name: 'Y_Col', desc: 'integer' },
						{ name: 'Z_Col', desc: 'integer' }
					]
				}
			},
			{
				name: 'CFDKeepNVertices',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'n', desc: 'integer' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' }
					]
				}
			},
			{
				name: 'CFDVertexPaintChannel',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'CFDPoints', desc: 'node' },
						{ name: 'ChannelID', desc: 'integer' },
						{ name: 'Local_Norm', desc: 'boolean' },
						{ name: 'NbClosest', desc: 'integer' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' },
						{ name: 'Smooth_Factor', desc: 'float' },
						{ name: 'Update_Caches', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CFDVertexPaintVelocity',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'CFDPoints', desc: 'node' },
						{ name: 'Local_Norm', desc: 'boolean' },
						{ name: 'NbClosest', desc: 'integer' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' },
						{ name: 'Smooth_Factor', desc: 'float' },
						{ name: 'Update_Caches', desc: 'boolean' },
						{ name: 'Vx_Chn', desc: 'integer' },
						{ name: 'Vy_Chn', desc: 'integer' },
						{ name: 'Vz_Chn', desc: 'integer' }
					]
				}
			},
			{
				name: 'Chamfer',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'amount', desc: 'worldUnits' },
						{ name: 'chamfertype', desc: 'integer' },
						{ name: 'invert', desc: 'boolean' },
						{ name: 'limiteffect', desc: 'boolean' },
						{ name: 'materialid', desc: 'integer' },
						{ name: 'materialoption', desc: 'integer' },
						{ name: 'maxangle', desc: 'float' },
						{ name: 'minangle', desc: 'float' },
						{ name: 'segments', desc: 'integer' },
						{ name: 'selectionoption', desc: 'integer' },
						{ name: 'setmaterial', desc: 'boolean' },
						{ name: 'smooth', desc: 'boolean' },
						{ name: 'smoothingoption', desc: 'integer' },
						{ name: 'smooththreshold', desc: 'float' },
						{ name: 'smoothtoadjacent', desc: 'boolean' },
						{ name: 'smoothtype', desc: 'integer' },
						{ name: 'tension', desc: 'float' },
						{ name: 'usemaxangle', desc: 'boolean' },
						{ name: 'useminangle', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Civil_View_Divide_Spline',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'divisions', desc: 'float' },
						{ name: 'maxdist', desc: 'float' },
						{ name: 'normalize', desc: 'boolean' },
						{ name: 'threshold', desc: 'float' }
					]
				}
			},
			{
				name: 'Civil_View_Guard_Rail',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'height', desc: 'float' },
						{ name: 'spacing', desc: 'float' }
					]
				}
			},
			{
				name: 'Civil_View_Road_Marking',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'cf', desc: 'float' },
						{ name: 'normalize', desc: 'boolean' },
						{ name: 'spacing', desc: 'float' },
						{ name: 'threshold', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'Civil_View_Spline_to_Mesh',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'rotation', desc: 'float' }
					]
				}
			},
			{
				name: 'Cloth',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'anisotropic', desc: 'boolean' },
						{ name: 'density', desc: 'float' },
						{ name: 'dynamic_node', desc: 'maxObject' },
						{ name: 'enableEndFrame', desc: 'boolean' },
						{ name: 'gravity', desc: 'float' },
						{ name: 'Layer', desc: 'integer' },
						{ name: 'object_map', desc: 'integer' },
						{ name: 'object_texture', desc: 'texturemap' },
						{ name: 'Plasticity', desc: 'float' },
						{ name: 'pressure', desc: 'float' },
						{ name: 'radius', desc: 'float' },
						{ name: 'stickiness', desc: 'float' },
						{ name: 'subsample', desc: 'integer' },
						{ name: 'thickness', desc: 'float' }
					]
				}
			},
			{
				name: 'Crease',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'crease', desc: 'worldUnits' },
						{ name: 'creasecolor', desc: 'RGB' },
						{ name: 'displayColor', desc: 'boolean' },
						{ name: 'selectionoption', desc: 'integer' }
					]
				}
			},
			{
				name: 'CreaseSet',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'angleselecttype', desc: 'integer' },
						{ name: 'autoSelectNodes', desc: 'boolean' },
						{ name: 'creasesetcolor', desc: 'RGB' },
						{ name: 'creasesetcrease', desc: 'float' },
						{ name: 'creasesetname', desc: 'string' },
						{ name: 'creasesetselect', desc: 'int' },
						{ name: 'creasesettype', desc: 'int' },
						{ name: 'displaySetColors', desc: 'boolean' },
						{ name: 'keepExistingSets', desc: 'boolean' },
						{ name: 'tolerance', desc: 'float' }
					]
				}
			},
			{
				name: 'Data_Channel',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'numeric_drawdist', desc: 'integer' },
						{ name: 'numeric_max', desc: 'integer' },
						{ name: 'operator_order', desc: 'int' },
						{ name: 'operators', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'Displace',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyMap', desc: 'boolean' },
						{ name: 'axis', desc: 'integer' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'blur', desc: 'float' },
						{ name: 'cap', desc: 'boolean' },
						{ name: 'decay', desc: 'float' },
						{ name: 'height', desc: 'float' },
						{ name: 'length', desc: 'float' },
						{ name: 'lumCenter', desc: 'float' },
						{ name: 'lumCenterEnable', desc: 'boolean' },
						{ name: 'map', desc: 'texturemap' },
						{ name: 'map_channel', desc: 'integer' },
						{ name: 'Map_or_Vertex_Color', desc: 'integer' },
						{ name: 'maptype', desc: 'integer' },
						{ name: 'strength', desc: 'float' },
						{ name: 'U_Flip', desc: 'boolean' },
						{ name: 'U_Tile', desc: 'float' },
						{ name: 'useMap', desc: 'boolean' },
						{ name: 'V_Flip', desc: 'boolean' },
						{ name: 'V_Tile', desc: 'float' },
						{ name: 'W_Flip', desc: 'boolean' },
						{ name: 'W_Tile', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'DynBuilding',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Xamount', desc: 'float' },
						{ name: 'XcapEnd', desc: 'boolean' },
						{ name: 'XcapStart', desc: 'boolean' },
						{ name: 'XcapType', desc: 'integer' },
						{ name: 'Xfloors', desc: 'integer' },
						{ name: 'XmapCoords', desc: 'boolean' },
						{ name: 'XmapType', desc: 'integer' },
						{ name: 'XmapWidth', desc: 'float' },
						{ name: 'XmatIDs', desc: 'boolean' },
						{ name: 'Xoutput', desc: 'integer' },
						{ name: 'XrealWorldMapSize', desc: 'boolean' },
						{ name: 'Xsegs', desc: 'integer' },
						{ name: 'Xsmooth', desc: 'boolean' },
						{ name: 'XuseShapeIDs', desc: 'boolean' },
						{ name: 'XwallMatIDs', desc: 'integer' }
					]
				}
			},
			{
				name: 'Edit_Poly',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bubble', desc: 'float' },
						{ name: 'dataChannel', desc: 'integer' },
						{ name: 'dataValue', desc: 'float' },
						{ name: 'falloff', desc: 'worldUnits' },
						{ name: 'hardedgedisplay', desc: 'integer' },
						{ name: 'hardedgedisplaycolor', desc: 'RGB' },
						{ name: 'paintDeformMode', desc: 'integer' },
						{ name: 'paintSelMode', desc: 'integer' },
						{ name: 'pinch', desc: 'float' },
						{ name: 'smoothness', desc: 'float' },
						{ name: 'split', desc: 'boolean' }
					]
				}
			},
			{
				name: 'EmptyModifier_Old',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'myparam', desc: 'string' }
					]
				}
			},
			{
				name: 'Extrude',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'amount', desc: 'float' },
						{ name: 'capEnd', desc: 'boolean' },
						{ name: 'capStart', desc: 'boolean' },
						{ name: 'capType', desc: 'integer' },
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'matIDs', desc: 'boolean' },
						{ name: 'output', desc: 'integer' },
						{ name: 'segs', desc: 'integer' },
						{ name: 'smooth', desc: 'boolean' },
						{ name: 'useShapeIDs', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Face_Extrude',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'amount', desc: 'float' },
						{ name: 'extrudeFromCenter', desc: 'boolean' },
						{ name: 'scale', desc: 'float' }
					]
				}
			},
			{
				name: 'FFD_2x2x2',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'deformType', desc: 'integer' },
						{ name: 'offset', desc: 'float' }
					]
				}
			},
			{
				name: 'FFD_3x3x3',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'deformType', desc: 'integer' },
						{ name: 'offset', desc: 'float' }
					]
				}
			},
			{
				name: 'FFD_4x4x4',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'deformType', desc: 'integer' },
						{ name: 'offset', desc: 'float' }
					]
				}
			},
			{
				name: 'FFDBox',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'continuity', desc: 'float' },
						{ name: 'deformType', desc: 'integer' },
						{ name: 'falloff', desc: 'float' },
						{ name: 'offset', desc: 'float' },
						{ name: 'tension', desc: 'float' }
					]
				}
			},
			{
				name: 'FFDCyl',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'continuity', desc: 'float' },
						{ name: 'deformType', desc: 'integer' },
						{ name: 'falloff', desc: 'float' },
						{ name: 'offset', desc: 'float' },
						{ name: 'tension', desc: 'float' }
					]
				}
			},
			{
				name: 'FilterMeshColorsByHue',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'filter_depth', desc: 'float' },
						{ name: 'filter_value', desc: 'float' },
						{ name: 'filter_width', desc: 'float' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' }
					]
				}
			},
			{
				name: 'Flex',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'absolute', desc: 'boolean' },
						{ name: 'center', desc: 'boolean' },
						{ name: 'chase', desc: 'boolean' },
						{ name: 'flex', desc: 'float' },
						{ name: 'samples', desc: 'integer' },
						{ name: 'solver', desc: 'integer' },
						{ name: 'stiffness', desc: 'float' },
						{ name: 'strength', desc: 'float' },
						{ name: 'stretch', desc: 'float' },
						{ name: 'sway', desc: 'float' }
					]
				}
			},
			{
				name: 'Garment_Maker',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'autoMesh', desc: 'boolean' },
						{ name: 'density', desc: 'float' },
						{ name: 'figure', desc: 'node' },
						{ name: 'preserve', desc: 'boolean' },
						{ name: 'relax', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Greeble',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Panel_Max__Ht', desc: 'float' },
						{ name: 'Panel_Min__Ht', desc: 'float' },
						{ name: 'Panel_Taper', desc: 'percent' },
						{ name: 'Widget_Density', desc: 'integer' },
						{ name: 'Widget_Max__Height', desc: 'float' },
						{ name: 'Widget_Max__Size', desc: 'percent' },
						{ name: 'Widget_Min__Size', desc: 'percent' }
					]
				}
			},
			{
				name: 'HSDS',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bubble', desc: 'float' },
						{ name: 'crease', desc: 'float' },
						{ name: 'falloff', desc: 'float' },
						{ name: 'pinch', desc: 'float' }
					]
				}
			},
			{
				name: 'Lathe',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'capEnd', desc: 'boolean' },
						{ name: 'capStart', desc: 'boolean' },
						{ name: 'capType', desc: 'integer' },
						{ name: 'degrees', desc: 'float' },
						{ name: 'flipNormals', desc: 'boolean' },
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'matIDs', desc: 'boolean' },
						{ name: 'output', desc: 'integer' },
						{ name: 'segs', desc: 'integer' },
						{ name: 'smooth', desc: 'boolean' },
						{ name: 'useShapeIDs', desc: 'boolean' },
						{ name: 'weldCore', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Lattice',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Joint_Radius', desc: 'float' },
						{ name: 'Joint_Segs', desc: 'integer' },
						{ name: 'Strut_Radius', desc: 'float' },
						{ name: 'Strut_Segments', desc: 'integer' },
						{ name: 'Strut_Sides', desc: 'integer' }
					]
				}
			},
			{
				name: 'MapScalerOSM',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'channel', desc: 'integer' },
						{ name: 'scale', desc: 'float' },
						{ name: 'uOffset', desc: 'float' },
						{ name: 'vOffset', desc: 'float' },
						{ name: 'wrap', desc: 'boolean' },
						{ name: 'wrapUsingSmoothingGroups', desc: 'boolean' }
					]
				}
			},
			{
				name: 'MassFX_RBody',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'EnableAdvancedSettings', desc: 'integer' },
						{ name: 'EnableBackfaceCollision', desc: 'boolean' },
						{ name: 'forcesList', desc: 'node' },
						{ name: 'InitialMotionStyle', desc: 'integer' },
						{ name: 'MassCenterMode', desc: 'integer' }
					]
				}
			},
			{
				name: 'MaterialByElement',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Material_ID__1', desc: 'float' },
						{ name: 'Material_ID__2', desc: 'float' },
						{ name: 'Material_ID__3', desc: 'float' },
						{ name: 'Material_ID__4', desc: 'float' },
						{ name: 'Material_ID__5', desc: 'float' },
						{ name: 'Material_ID__6', desc: 'float' },
						{ name: 'Material_ID__7', desc: 'float' },
						{ name: 'Material_ID__8', desc: 'float' },
						{ name: 'Material_ID_count', desc: 'integer' },
						{ name: 'method', desc: 'integer' },
						{ name: 'Random_Seed', desc: 'integer' }
					]
				}
			},
			{
				name: 'Materialmodifier',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'materialID', desc: 'integer' }
					]
				}
			},
			{
				name: 'mCloth',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'attachment_tear_factor', desc: 'float' },
						{ name: 'collision_response_coefficient', desc: 'float' },
						{ name: 'density', desc: 'float' },
						{ name: 'disable_dynamic_ccd', desc: 'boolean' },
						{ name: 'do_adhere', desc: 'boolean' },
						{ name: 'do_bending', desc: 'boolean' },
						{ name: 'do_bending_ortho', desc: 'boolean' },
						{ name: 'do_fluid_collision', desc: 'boolean' },
						{ name: 'do_gravity', desc: 'boolean' },
						{ name: 'do_hard_stretch_limitation', desc: 'boolean' },
						{ name: 'do_inter_collision', desc: 'boolean' },
						{ name: 'do_pressure', desc: 'boolean' },
						{ name: 'do_untangling', desc: 'boolean' },
						{ name: 'dynamic_node', desc: 'maxObject' },
						{ name: 'enable_collision', desc: 'boolean' },
						{ name: 'forceList', desc: 'node' },
						{ name: 'friction', desc: 'float' },
						{ name: 'gravity', desc: 'float' },
						{ name: 'hierarchical_Levels', desc: 'integer' },
						{ name: 'ignoreBackfacing', desc: 'boolean' },
						{ name: 'inherit_velocity', desc: 'boolean' },
						{ name: 'is_static', desc: 'boolean' },
						{ name: 'kinematic_until_frame', desc: 'integer' },
						{ name: 'min_adhere_velocity', desc: 'float' },
						{ name: 'pressure', desc: 'float' },
						{ name: 'solver_iterations', desc: 'integer' },
						{ name: 'tear_factor', desc: 'float' },
						{ name: 'tearable', desc: 'boolean' },
						{ name: 'thickness', desc: 'float' },
						{ name: 'visualization', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Melt',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'axis', desc: 'integer' },
						{ name: 'Confine_To_Gizmo', desc: 'integer' },
						{ name: 'Cut_Off__obsolete', desc: 'float' },
						{ name: 'Melt_Amount', desc: 'float' },
						{ name: 'Negative_Axis', desc: 'integer' },
						{ name: 'Solidity_Custom_Value', desc: 'float' },
						{ name: 'Solidity_Preset', desc: 'integer' },
						{ name: 'spread', desc: 'float' }
					]
				}
			},
			{
				name: 'meshsmooth',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bubble', desc: 'float' },
						{ name: 'falloff', desc: 'float' },
						{ name: 'iterations', desc: 'integer' },
						{ name: 'pinch', desc: 'float' },
						{ name: 'relax', desc: 'float' },
						{ name: 'strength', desc: 'float' }
					]
				}
			},
			{
				name: 'mirror',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'copy', desc: 'boolean' },
						{ name: 'mirror_axis', desc: 'integer' },
						{ name: 'offset', desc: 'float' }
					]
				}
			},
			{
				name: 'Morpher',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Autoload_of_targets', desc: 'integer' },
						{ name: 'Spinner_Maximum', desc: 'float' },
						{ name: 'Spinner_Minimum', desc: 'float' },
						{ name: 'Use_Limits', desc: 'integer' },
						{ name: 'Use_Selection', desc: 'integer' },
						{ name: 'Value_Increments', desc: 'integer' }
					]
				}
			},
			{
				name: 'Noisemodifier',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'animate', desc: 'boolean' },
						{ name: 'fractal', desc: 'boolean' },
						{ name: 'frequency', desc: 'float' },
						{ name: 'iterations', desc: 'float' },
						{ name: 'phase', desc: 'time' },
						{ name: 'roughness', desc: 'float' },
						{ name: 'scale', desc: 'float' },
						{ name: 'seed', desc: 'integer' },
						{ name: 'strength', desc: 'point3' }
					]
				}
			},
			{
				name: 'Normalize_Spl',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Accuracy', desc: 'integer' },
						{ name: 'Length', desc: 'float' }
					]
				}
			},
			{
				name: 'Normalmodifier',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'flip', desc: 'boolean' },
						{ name: 'unify', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Old_Point_Cache',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'strength', desc: 'float' }
					]
				}
			},
			{
				name: 'OpenSubdiv',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'adaptiveIterations', desc: 'integer' },
						{ name: 'creasemethod', desc: 'integer' },
						{ name: 'fvarboundary', desc: 'integer' },
						{ name: 'iterations', desc: 'integer' },
						{ name: 'mode', desc: 'integer' },
						{ name: 'propagatecorners', desc: 'boolean' },
						{ name: 'smoothtriangles', desc: 'boolean' },
						{ name: 'solverType', desc: 'integer' },
						{ name: 'vertboundary', desc: 'integer' }
					]
				}
			},
			{
				name: 'optimize',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'autoEdge', desc: 'boolean' },
						{ name: 'bias1', desc: 'float' },
						{ name: 'bias2', desc: 'float' },
						{ name: 'edgethreshold1', desc: 'angle' },
						{ name: 'edgethreshold2', desc: 'angle' },
						{ name: 'facethreshold1', desc: 'angle' },
						{ name: 'facethreshold2', desc: 'angle' },
						{ name: 'manualupdate', desc: 'boolean' },
						{ name: 'maxedgelength1', desc: 'float' },
						{ name: 'maxedgelength2', desc: 'float' },
						{ name: 'preservemat1', desc: 'boolean' },
						{ name: 'preservemat2', desc: 'boolean' },
						{ name: 'preservesmooth1', desc: 'boolean' },
						{ name: 'preservesmooth2', desc: 'boolean' },
						{ name: 'renderLOD', desc: 'integer' },
						{ name: 'viewLOD', desc: 'integer' }
					]
				}
			},
			{
				name: 'Particle_Face_Creator',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Absolute_Precision', desc: 'worldUnits' },
						{ name: 'After_Hide', desc: 'boolean' },
						{ name: 'All_Particle_Flow_Events', desc: 'boolean' },
						{ name: 'Before_Hide', desc: 'boolean' },
						{ name: 'Blend_Particles', desc: 'boolean' },
						{ name: 'Multiply_By_Scale', desc: 'boolean' },
						{ name: 'Particle_Flow_Events', desc: 'node' },
						{ name: 'Particle_Flow_Systems', desc: 'node' },
						{ name: 'Relative_Precision', desc: 'percent' },
						{ name: 'Scale_Influence', desc: 'percent' },
						{ name: 'Time_Off', desc: 'integer' },
						{ name: 'Time_On', desc: 'integer' },
						{ name: 'Type', desc: 'integer' },
						{ name: 'Use_Time_Off', desc: 'boolean' },
						{ name: 'Zone_Size', desc: 'worldUnits' },
						{ name: 'Zone_Weight', desc: 'percent' }
					]
				}
			},
			{
				name: 'Particle_Skinner',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Absolute_Distance', desc: 'worldUnits' },
						{ name: 'Absolute_Influence', desc: 'worldUnits' },
						{ name: 'Absolute_Precision', desc: 'worldUnits' },
						{ name: 'After_Hide', desc: 'boolean' },
						{ name: 'All_Particle_Flow_Events', desc: 'boolean' },
						{ name: 'Before_Hide', desc: 'boolean' },
						{ name: 'Binding_Influence', desc: 'percent' },
						{ name: 'Binding_List_Type', desc: 'radiobtnIndex' },
						{ name: 'Control_By_Inside_Inclusion', desc: 'boolean' },
						{ name: 'Controllers_Limit', desc: 'integer' },
						{ name: 'Data_Channel_Creator', desc: 'maxObject' },
						{ name: 'Display_Control_Particles', desc: 'boolean' },
						{ name: 'Display_Influence', desc: 'boolean' },
						{ name: 'Display_Unassigned_Points', desc: 'boolean' },
						{ name: 'Distance_Influence_Type', desc: 'radiobtnIndex' },
						{ name: 'Distance_Type', desc: 'radiobtnIndex' },
						{ name: 'Falloff', desc: 'float' },
						{ name: 'Interval_Ticks', desc: 'integer' },
						{ name: 'Map_Channel', desc: 'integer' },
						{ name: 'Map_Channel_Type', desc: 'radiobtnIndex' },
						{ name: 'Particle_Flow_Events', desc: 'node' },
						{ name: 'Particle_Flow_Systems', desc: 'node' },
						{ name: 'Relative_Distance', desc: 'percent' },
						{ name: 'Relative_Precision', desc: 'percent' },
						{ name: 'Remove_Uncontrolled', desc: 'boolean' },
						{ name: 'Rip_Surface_Apart', desc: 'integer' },
						{ name: 'Size_Influence', desc: 'percent' },
						{ name: 'Sustain_Topology', desc: 'boolean' },
						{ name: 'Time_Off', desc: 'integer' },
						{ name: 'Time_On', desc: 'integer' },
						{ name: 'Use_Data_Channel', desc: 'boolean' },
						{ name: 'Use_Time_Off', desc: 'boolean' },
						{ name: 'Use_Visibility_Data_Channel', desc: 'boolean' },
						{ name: 'Visibility_Data_Creator', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'PatchDeform',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Flip_deformation_axis', desc: 'integer' },
						{ name: 'Plane_to_Patch_Deform', desc: 'integer' },
						{ name: 'rotation', desc: 'angle' },
						{ name: 'U_Percent', desc: 'percent' },
						{ name: 'U_Stretch', desc: 'float' },
						{ name: 'V_Percent', desc: 'percent' },
						{ name: 'V_Stretch', desc: 'float' }
					]
				}
			},
			{
				name: 'PathDeform',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'axis', desc: 'integer' },
						{ name: 'Flip_deformation_axis', desc: 'integer' },
						{ name: 'path', desc: 'node' },
						{ name: 'Percent_along_path', desc: 'percent' },
						{ name: 'rotation', desc: 'angle' },
						{ name: 'Stretch', desc: 'float' },
						{ name: 'Twist', desc: 'angle' }
					]
				}
			},
			{
				name: 'Point_Cache',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'filename', desc: 'filename' },
						{ name: 'strength', desc: 'float' }
					]
				}
			},
			{
				name: 'Poly_Profile',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Automatic', desc: 'boolean' },
						{ name: 'cangle', desc: 'float' },
						{ name: 'even', desc: 'float' },
						{ name: 'even_on', desc: 'boolean' },
						{ name: 'flip_normals', desc: 'boolean' },
						{ name: 'freez_angle', desc: 'boolean' },
						{ name: 'keep_base', desc: 'boolean' },
						{ name: 'loc', desc: 'boolean' },
						{ name: 'matid', desc: 'integer' },
						{ name: 'matid_on', desc: 'boolean' },
						{ name: 'newverts_on', desc: 'boolean' },
						{ name: 'Num_segments', desc: 'integer' },
						{ name: 'pangle', desc: 'float' },
						{ name: 'Pick_path', desc: 'node' },
						{ name: 'pverts', desc: 'boolean' },
						{ name: 'Q1', desc: 'float' },
						{ name: 'Q2', desc: 'float' },
						{ name: 'remove_bad_verts', desc: 'boolean' },
						{ name: 'reverse', desc: 'boolean' },
						{ name: 'S1', desc: 'float' },
						{ name: 'S2', desc: 'float' },
						{ name: 'smooth', desc: 'integer' },
						{ name: 'smooth_on', desc: 'boolean' },
						{ name: 'Type', desc: 'integer' }
					]
				}
			},
			{
				name: 'Preserve',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Apply_To_Whole_Mesh', desc: 'integer' },
						{ name: 'Edge_Length_Weight', desc: 'float' },
						{ name: 'Face_Angle_Weight', desc: 'float' },
						{ name: 'Invert_selection', desc: 'integer' },
						{ name: 'iterations', desc: 'integer' },
						{ name: 'Selected_Verts_Only', desc: 'integer' },
						{ name: 'Volume_Weight', desc: 'float' }
					]
				}
			},
			{
				name: 'Preset_Maker',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'InstanceMaterialControls', desc: 'boolean' },
						{ name: 'InstanceModifierControls', desc: 'boolean' },
						{ name: 'InstanceTMControls', desc: 'boolean' },
						{ name: 'material', desc: 'boolean' },
						{ name: 'modifier', desc: 'boolean' },
						{ name: 'modifierIDList', desc: 'int' },
						{ name: 'originalMat', desc: 'material' },
						{ name: 'originalTM', desc: 'maxObject' },
						{ name: 'originalVis', desc: 'maxObject' },
						{ name: 'publishFile', desc: 'string' },
						{ name: 'publishFileOriginal', desc: 'string' },
						{ name: 'showPublishUI', desc: 'boolean' },
						{ name: 'timingUI', desc: 'maxObject' },
						{ name: 'transform', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Project_Mapping_Holder',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'projector', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'Projection',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'displayToggleEnable', desc: 'boolean' },
						{ name: 'displayToggleMode', desc: 'integer' }
					]
				}
			},
			{
				name: 'ProOptimizer',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Calculate', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Push',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Push_Value', desc: 'float' }
					]
				}
			},
			{
				name: 'Quadify_Mesh',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'quadsize', desc: 'float' }
					]
				}
			},
			{
				name: 'Relax',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'iterations', desc: 'integer' },
						{ name: 'Keep_Boundary_Pts_Fixed', desc: 'integer' },
						{ name: 'Relax_Value', desc: 'float' }
					]
				}
			},
			{
				name: 'Renderable_Spline',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Angle', desc: 'float' },
						{ name: 'Autosmooth', desc: 'boolean' },
						{ name: 'displayRenderSettings', desc: 'boolean' },
						{ name: 'Length', desc: 'float' },
						{ name: 'mapcoords', desc: 'boolean' },
						{ name: 'Renderable', desc: 'boolean' },
						{ name: 'Sides', desc: 'integer' },
						{ name: 'SymmetricalOrRectangular', desc: 'radiobtnIndex' },
						{ name: 'Thickness', desc: 'float' },
						{ name: 'Threshold', desc: 'angle' },
						{ name: 'useViewportSettings', desc: 'boolean' },
						{ name: 'Viewport_Angle', desc: 'float' },
						{ name: 'Viewport_Angle2', desc: 'float' },
						{ name: 'Viewport_Length', desc: 'float' },
						{ name: 'Viewport_Sides', desc: 'integer' },
						{ name: 'Viewport_SymmetricalOrRectangular', desc: 'radiobtnIndex' },
						{ name: 'Viewport_Thickness', desc: 'float' },
						{ name: 'Viewport_Width', desc: 'float' },
						{ name: 'ViewportOrRender', desc: 'radiobtnIndex' },
						{ name: 'Width', desc: 'float' }
					]
				}
			},
			{
				name: 'Ripple',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'amplitude1', desc: 'float' },
						{ name: 'amplitude2', desc: 'float' },
						{ name: 'decay', desc: 'float' },
						{ name: 'phase', desc: 'float' },
						{ name: 'wavelength', desc: 'float' }
					]
				}
			},
			{
				name: 'Shell',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bevel', desc: 'boolean' },
						{ name: 'segments', desc: 'integer' }
					]
				}
			},
			{
				name: 'Skew',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'amount', desc: 'float' },
						{ name: 'axis', desc: 'radiobtnIndex' },
						{ name: 'direction', desc: 'float' },
						{ name: 'limit', desc: 'boolean' },
						{ name: 'lowerlimit', desc: 'float' },
						{ name: 'upperlimit', desc: 'float' }
					]
				}
			},
			{
				name: 'Skin',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'always_deform', desc: 'boolean' },
						{ name: 'bone_Limit', desc: 'integer' },
						{ name: 'debugMode', desc: 'boolean' },
						{ name: 'draw_all_envelopes', desc: 'boolean' },
						{ name: 'draw_all_envelopes', desc: 'boolean' },
						{ name: 'draw_all_gizmos', desc: 'boolean' },
						{ name: 'draw_all_vertices', desc: 'boolean' },
						{ name: 'effect', desc: 'float' },
						{ name: 'enableDQ', desc: 'boolean' },
						{ name: 'fastGizmos', desc: 'boolean' },
						{ name: 'fastSubAnims', desc: 'boolean' },
						{ name: 'fastTMCache', desc: 'boolean' },
						{ name: 'fastVertexWeighting', desc: 'boolean' },
						{ name: 'filter_cross_sections', desc: 'boolean' },
						{ name: 'filter_envelopes', desc: 'boolean' },
						{ name: 'filter_vertices', desc: 'boolean' },
						{ name: 'gizmos', desc: 'maxObject' },
						{ name: 'initialEnvelopeInner', desc: 'float' },
						{ name: 'initialEnvelopeOuter', desc: 'float' },
						{ name: 'initialInnerEnvelopePercent', desc: 'float' },
						{ name: 'initialOuterEnvelopePercent', desc: 'float' },
						{ name: 'initialStaticEnvelope', desc: 'boolean' },
						{ name: 'no_update', desc: 'boolean' },
						{ name: 'paint_str', desc: 'float' },
						{ name: 'rigid_vertices', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Skin_Morph',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'falloff', desc: 'integer' }
					]
				}
			},
			{
				name: 'Skin_Wrap',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'distance', desc: 'float' },
						{ name: 'engine', desc: 'integer' },
						{ name: 'falloff', desc: 'float' },
						{ name: 'mesh', desc: 'node' },
						{ name: 'meshList', desc: 'node' },
						{ name: 'threshold', desc: 'float' }
					]
				}
			},
			{
				name: 'Skin_Wrap_Patch',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'patch', desc: 'node' }
					]
				}
			},
			{
				name: 'SliceModifier',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Faces___Polygons_Toggle', desc: 'integer' },
						{ name: 'Slice_Type', desc: 'integer' }
					]
				}
			},
			{
				name: 'smooth',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'threshold', desc: 'angle' }
					]
				}
			},
			{
				name: 'SoftEdge',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Autorize', desc: 'string' },
						{ name: 'distance', desc: 'float' },
						{ name: 'korner_type', desc: 'integer' },
						{ name: 'segments', desc: 'integer' }
					]
				}
			},
			{
				name: 'Spherify',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'PERCENT', desc: 'float' }
					]
				}
			},
			{
				name: 'Spline_IK_Control',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'box', desc: 'boolean' },
						{ name: 'helper_list', desc: 'node' },
						{ name: 'helper_size', desc: 'float' }
					]
				}
			},
			{
				name: 'Squeeze',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bias', desc: 'percent' },
						{ name: 'Bulge_Amount', desc: 'float' },
						{ name: 'Bulge_Curviture', desc: 'float' },
						{ name: 'Limit_Squeeze_Effects', desc: 'integer' },
						{ name: 'Squeeze_Amount', desc: 'float' },
						{ name: 'Squeeze_Curvature', desc: 'float' },
						{ name: 'Squeeze_Lower_Limit', desc: 'float' },
						{ name: 'Squeeze_Upper_Limit', desc: 'float' },
						{ name: 'volume', desc: 'percent' }
					]
				}
			},
			{
				name: 'STL_Check',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Change_MatID', desc: 'integer' },
						{ name: 'Check_Now', desc: 'integer' },
						{ name: 'Material_ID', desc: 'integer' },
						{ name: 'SELECT_FACES', desc: 'integer' },
						{ name: 'Selection_Type', desc: 'integer' }
					]
				}
			},
			{
				name: 'Stretch',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Amplify', desc: 'float' },
						{ name: 'axis', desc: 'integer' },
						{ name: 'from', desc: 'float' },
						{ name: 'limit', desc: 'integer' },
						{ name: 'Stretch', desc: 'float' },
						{ name: 'to', desc: 'float' }
					]
				}
			},
			{
				name: 'subdivide',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'size', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'Substitute',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'DisplayInRender', desc: 'boolean' },
						{ name: 'DisplayInViewport', desc: 'boolean' },
						{ name: 'MoveCopyInstance', desc: 'integer' },
						{ name: 'RetainLocalRotation', desc: 'boolean' },
						{ name: 'RetainLocalScale', desc: 'boolean' },
						{ name: 'RetainPosition', desc: 'boolean' }
					]
				}
			},
			{
				name: 'surface',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'steps', desc: 'integer' },
						{ name: 'threshold', desc: 'float' }
					]
				}
			},
			{
				name: 'SurfDeform',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Flip_deformation_axis', desc: 'integer' },
						{ name: 'Plane_to_Patch_Deform', desc: 'integer' },
						{ name: 'rotation', desc: 'angle' },
						{ name: 'surface', desc: 'node' },
						{ name: 'U_Percent', desc: 'percent' },
						{ name: 'U_Stretch', desc: 'float' },
						{ name: 'V_Percent', desc: 'percent' },
						{ name: 'V_Stretch', desc: 'float' }
					]
				}
			},
			{
				name: 'sweep',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Angle', desc: 'angle' },
						{ name: 'Banking', desc: 'boolean' },
						{ name: 'Shapes', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'symmetry',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'axis', desc: 'integer' },
						{ name: 'flip', desc: 'boolean' },
						{ name: 'slice', desc: 'integer' },
						{ name: 'threshold', desc: 'float' }
					]
				}
			},
			{
				name: 'Taper',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'amount', desc: 'float' },
						{ name: 'curve', desc: 'float' },
						{ name: 'effectaxis', desc: 'integer' },
						{ name: 'limit', desc: 'boolean' },
						{ name: 'lowerlimit', desc: 'float' },
						{ name: 'primaryaxis', desc: 'integer' },
						{ name: 'symmetry', desc: 'boolean' },
						{ name: 'upperlimit', desc: 'float' }
					]
				}
			},
			{
				name: 'tessellate',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'faceType', desc: 'integer' },
						{ name: 'iterations', desc: 'integer' },
						{ name: 'tension', desc: 'percent' },
						{ name: 'type', desc: 'integer' },
						{ name: 'updateWhen', desc: 'integer' }
					]
				}
			},
			{
				name: 'TurboSmooth',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'iterations', desc: 'integer' }
					]
				}
			},
			{
				name: 'Twist',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'angle', desc: 'float' },
						{ name: 'axis', desc: 'integer' },
						{ name: 'bias', desc: 'float' },
						{ name: 'limit', desc: 'boolean' },
						{ name: 'lowerlimit', desc: 'float' },
						{ name: 'upperlimit', desc: 'float' }
					]
				}
			},
			{
				name: 'Unwrap_UVW',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'alignByPivotHorizontal', desc: 'void' },
						{ name: 'alignByPivotVertical', desc: 'void' },
						{ name: 'autoPin', desc: 'boolean' },
						{ name: 'baseMaterial', desc: 'material' },
						{ name: 'baseMaterial_list', desc: 'material' },
						{ name: 'buttonpanel_height1', desc: 'integer' },
						{ name: 'buttonpanel_height2', desc: 'integer' },
						{ name: 'buttonpanel_visible', desc: 'boolean' },
						{ name: 'buttonpanel_width', desc: 'integer' },
						{ name: 'checkerMaterial', desc: 'material' },
						{ name: 'filterPin', desc: 'boolean' },
						{ name: 'floaters', desc: 'string' },
						{ name: 'floatersVisible', desc: 'boolean' },
						{ name: 'groupDensity', desc: 'float' },
						{ name: 'groupDisplay', desc: 'boolean' },
						{ name: 'groupName', desc: 'string' },
						{ name: 'localDistortion', desc: 'boolean' },
						{ name: 'peelAutoEdit', desc: 'boolean' },
						{ name: 'quick_map_align', desc: 'integer' },
						{ name: 'quick_map_preview', desc: 'boolean' },
						{ name: 'splinemap_advanceMethod', desc: 'integer' },
						{ name: 'splinemap_display', desc: 'boolean' },
						{ name: 'splinemap_iterations', desc: 'integer' },
						{ name: 'splinemap_manualseams', desc: 'boolean' },
						{ name: 'splinemap_node', desc: 'node' },
						{ name: 'splinemap_projectiontype', desc: 'integer' },
						{ name: 'splinemap_resampleCount', desc: 'integer' },
						{ name: 'splinemap_uoffset', desc: 'float' },
						{ name: 'splinemap_uscale', desc: 'float' },
						{ name: 'splinemap_voffset', desc: 'float' },
						{ name: 'splinemap_vscale', desc: 'float' },
						{ name: 'texMapIDList', desc: 'int' },
						{ name: 'texMapList', desc: 'texturemap' },
						{ name: 'TextureCheckerMaterial', desc: 'material' },
						{ name: 'toolBarVisible', desc: 'boolean' },
						{ name: 'weldOnlyShared', desc: 'boolean' }
					]
				}
			},
			{
				name: 'UVW_Xform',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'map_channel', desc: 'integer' },
						{ name: 'Map_or_Vertex_Color', desc: 'integer' },
						{ name: 'Rotation_Angle', desc: 'angle' },
						{ name: 'Rotation_Center', desc: 'integer' },
						{ name: 'U_Flip', desc: 'integer' },
						{ name: 'U_Offset', desc: 'float' },
						{ name: 'U_Tile', desc: 'float' },
						{ name: 'V_Flip', desc: 'integer' },
						{ name: 'V_Offset', desc: 'float' },
						{ name: 'V_Tile', desc: 'float' },
						{ name: 'W_Flip', desc: 'integer' },
						{ name: 'W_Offset', desc: 'float' },
						{ name: 'W_Tile', desc: 'float' }
					]
				}
			},
			{
				name: 'Uvwmap',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'axis', desc: 'integer' },
						{ name: 'cap', desc: 'boolean' },
						{ name: 'channel', desc: 'integer' },
						{ name: 'height', desc: 'float' },
						{ name: 'length', desc: 'float' },
						{ name: 'mapChannel', desc: 'integer' },
						{ name: 'maptype', desc: 'integer' },
						{ name: 'uflip', desc: 'boolean' },
						{ name: 'utile', desc: 'float' },
						{ name: 'vflip', desc: 'boolean' },
						{ name: 'vtile', desc: 'float' },
						{ name: 'wflip', desc: 'boolean' },
						{ name: 'width', desc: 'float' },
						{ name: 'wtile', desc: 'float' }
					]
				}
			},
			{
				name: 'Vertex_Weld',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'threshold', desc: 'float' }
					]
				}
			},
			{
				name: 'Vol__Select',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bubble', desc: 'float' },
						{ name: 'falloff', desc: 'float' },
						{ name: 'invert', desc: 'boolean' },
						{ name: 'level', desc: 'integer' },
						{ name: 'method', desc: 'integer' },
						{ name: 'node', desc: 'node' },
						{ name: 'pinch', desc: 'float' },
						{ name: 'type', desc: 'integer' },
						{ name: 'volume', desc: 'integer' }
					]
				}
			},
			{
				name: 'Wave',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'amplitude1', desc: 'float' },
						{ name: 'amplitude2', desc: 'float' },
						{ name: 'decay', desc: 'float' },
						{ name: 'phase', desc: 'float' },
						{ name: 'wavelength', desc: 'float' }
					]
				}
			},
			{
				name: 'Welder',
				desc: 'MAXSuperClass: modifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'threshold', desc: 'float' }
					]
				}
			},
			{
				name: 'Motion_BlurMPassCamEffect',
				desc: 'MAXSuperClass: MPassCamEffect',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bias', desc: 'float' },
						{ name: 'duration', desc: 'float' }
					]
				}
			},
			{
				name: 'Noise_point3',
				desc: 'MAXSuperClass: point3Controller',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'fractal', desc: 'boolean' },
						{ name: 'frequency', desc: 'float' },
						{ name: 'rampin', desc: 'time' },
						{ name: 'rampout', desc: 'time' },
						{ name: 'roughness', desc: 'float' },
						{ name: 'seed', desc: 'integer' },
						{ name: 'x_positive', desc: 'boolean' },
						{ name: 'y_positive', desc: 'boolean' },
						{ name: 'z_positive', desc: 'boolean' }
					]
				}
			},
			{
				name: 'point3_list',
				desc: 'MAXSuperClass: point3Controller',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'weight', desc: 'float' }
					]
				}
			},
			{
				name: 'point3_script',
				desc: 'MAXSuperClass: point3Controller',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'script', desc: 'string' }
					]
				}
			},
			{
				name: 'point4_list',
				desc: 'MAXSuperClass: point4Controller',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'weight', desc: 'float' }
					]
				}
			},
			{
				name: 'point4_script',
				desc: 'MAXSuperClass: point4Controller',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'script', desc: 'string' }
					]
				}
			},
			{
				name: 'MCG_rayToSurfacePosition',
				desc: 'MAXSuperClass: positionController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'flip', desc: 'boolean' },
						{ name: 'offset', desc: 'worldUnits' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' },
						{ name: 'Ray_Axis', desc: 'integer' },
						{ name: 'Ray_Origin', desc: 'node' },
						{ name: 'Ray_to_Surface_Pivot', desc: 'boolean' },
						{ name: 'Surfaces_Tab', desc: 'node' },
						{ name: 'Use_Surface_Normal', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Noise_position',
				desc: 'MAXSuperClass: positionController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'fractal', desc: 'boolean' },
						{ name: 'frequency', desc: 'float' },
						{ name: 'rampin', desc: 'time' },
						{ name: 'rampout', desc: 'time' },
						{ name: 'roughness', desc: 'float' },
						{ name: 'seed', desc: 'integer' },
						{ name: 'x_positive', desc: 'boolean' },
						{ name: 'y_positive', desc: 'boolean' },
						{ name: 'z_positive', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Path_Constraint',
				desc: 'MAXSuperClass: positionController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'axis', desc: 'integer' },
						{ name: 'bank', desc: 'boolean' },
						{ name: 'follow', desc: 'boolean' },
						{ name: 'loop', desc: 'boolean' },
						{ name: 'percent', desc: 'percent' },
						{ name: 'relative', desc: 'boolean' },
						{ name: 'smoothness', desc: 'float' },
						{ name: 'weight', desc: 'float' }
					]
				}
			},
			{
				name: 'Position_Constraint',
				desc: 'MAXSuperClass: positionController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'relative', desc: 'boolean' }
					]
				}
			},
			{
				name: 'position_list',
				desc: 'MAXSuperClass: positionController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'weight', desc: 'float' }
					]
				}
			},
			{
				name: 'position_script',
				desc: 'MAXSuperClass: positionController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'script', desc: 'string' }
					]
				}
			},
			{
				name: 'SpringPositionController',
				desc: 'MAXSuperClass: positionController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'steps', desc: 'integer' },
						{ name: 'x_effect', desc: 'float' },
						{ name: 'y_effect', desc: 'float' },
						{ name: 'z_effect', desc: 'float' }
					]
				}
			},
			{
				name: 'Surface_position',
				desc: 'MAXSuperClass: positionController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'align', desc: 'integer' },
						{ name: 'flip', desc: 'boolean' },
						{ name: 'surface', desc: 'node' }
					]
				}
			},
			{
				name: 'Light_Tracer',
				desc: 'MAXSuperClass: RadiosityEffect',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive_undersampling_on', desc: 'boolean' },
						{ name: 'bounces', desc: 'integer' },
						{ name: 'color_bleed', desc: 'float' },
						{ name: 'color_filter', desc: 'RGB' },
						{ name: 'cone_angle', desc: 'float' },
						{ name: 'extra_ambient', desc: 'RGB' },
						{ name: 'filter_size', desc: 'float' },
						{ name: 'global_multiplier', desc: 'float' },
						{ name: 'initial_sample_spacing', desc: 'integer' },
						{ name: 'object_multiplier', desc: 'float' },
						{ name: 'ray_bias', desc: 'float' },
						{ name: 'rays', desc: 'integer' },
						{ name: 'show_samples', desc: 'boolean' },
						{ name: 'sky_lights', desc: 'float' },
						{ name: 'sky_lights_on', desc: 'boolean' },
						{ name: 'subdivide_down_to', desc: 'integer' },
						{ name: 'subdivision_contrast', desc: 'float' },
						{ name: 'volumes', desc: 'float' },
						{ name: 'volumes_on', desc: 'boolean' }
					]
				}
			},
			{
				name: 'AmountChange',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Current_First_Spawn_ID_Data_Channel', desc: 'maxObject' },
						{ name: 'Current_Spawn_Count_Data_Channel', desc: 'maxObject' },
						{ name: 'Current_Spawn_Order_Data_Channel', desc: 'maxObject' },
						{ name: 'Execution_Order', desc: 'integer' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'First_Spawn_ID_Data_Channel', desc: 'maxObject' },
						{ name: 'History_Dependent', desc: 'boolean' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Is_Current_Parent_Data_Channel', desc: 'maxObject' },
						{ name: 'Is_Current_Spawn_Data_Channel', desc: 'maxObject' },
						{ name: 'Last_Spawn_ID_Data_Channel', desc: 'maxObject' },
						{ name: 'Older_Sibling_ID_Data_Channel', desc: 'maxObject' },
						{ name: 'Parent_ID_Data_Channel', desc: 'maxObject' },
						{ name: 'Proceed_Type', desc: 'radiobtnIndex' },
						{ name: 'Reset_Particle_Age', desc: 'boolean' },
						{ name: 'Spawns_As_New_In_Event', desc: 'boolean' },
						{ name: 'Sub_Type', desc: 'radiobtnIndex' },
						{ name: 'Total_Spawn_Count_Data_Channel', desc: 'maxObject' },
						{ name: 'Type', desc: 'integer' },
						{ name: 'Use_Current_First_Spawn_ID', desc: 'boolean' },
						{ name: 'Use_Current_Spawn_Count', desc: 'boolean' },
						{ name: 'Use_Current_Spawn_Order', desc: 'boolean' },
						{ name: 'Use_First_Spawn_ID', desc: 'boolean' },
						{ name: 'Use_Is_Current_Parent', desc: 'boolean' },
						{ name: 'Use_Is_Current_Spawn', desc: 'boolean' },
						{ name: 'Use_Last_Spawn_ID', desc: 'boolean' },
						{ name: 'Use_Older_Sibling_ID', desc: 'boolean' },
						{ name: 'Use_Parent_ID', desc: 'boolean' },
						{ name: 'Use_Total_Spawn_Count', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Auto_Secondary_Element',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'alpha', desc: 'integer' },
						{ name: 'axis', desc: 'float' },
						{ name: 'hue', desc: 'RGB' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'occlusion', desc: 'float' },
						{ name: 'on', desc: 'boolean' },
						{ name: 'presets', desc: 'integer' },
						{ name: 'quantity', desc: 'integer' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'squeeze', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Avoid_Behavior',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'name', desc: 'string' },
						{ name: 'obstacles', desc: 'node' }
					]
				}
			},
			{
				name: 'Bulge_Angle_Deformer',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'child', desc: 'integer' },
						{ name: 'editing', desc: 'boolean' },
						{ name: 'graph', desc: 'maxObject' },
						{ name: 'initial_angle', desc: 'float' },
						{ name: 'name', desc: 'string' },
						{ name: 'orientation', desc: 'point3' },
						{ name: 'parent', desc: 'integer' },
						{ name: 'points', desc: 'point3' },
						{ name: 'selection', desc: 'int' },
						{ name: 'twist', desc: 'float' },
						{ name: 'use_volume', desc: 'boolean' }
					]
				}
			},
			{
				name: 'ClipAssigner',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'minmaxavg', desc: 'maxObject' },
						{ name: 'minmaxavgs', desc: 'maxObject' },
						{ name: 'node', desc: 'node' },
						{ name: 'orientation', desc: 'boolean' }
					]
				}
			},
			{
				name: 'ClipState',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'accel_in_radio', desc: 'integer' },
						{ name: 'accel_out_radio', desc: 'integer' },
						{ name: 'accel_range_unique', desc: 'integer' },
						{ name: 'deviation', desc: 'float' },
						{ name: 'functionName', desc: 'string' },
						{ name: 'headingvelocity_in_radio', desc: 'integer' },
						{ name: 'headingvelocity_out_radio', desc: 'integer' },
						{ name: 'headingvelocity_range_unique', desc: 'integer' },
						{ name: 'name', desc: 'string' },
						{ name: 'percentage', desc: 'float' },
						{ name: 'pitch_in_radio', desc: 'integer' },
						{ name: 'pitch_out_radio', desc: 'integer' },
						{ name: 'pitch_range_unique', desc: 'integer' },
						{ name: 'pitchvelocity_in_radio', desc: 'integer' },
						{ name: 'pitchvelocity_out_radio', desc: 'integer' },
						{ name: 'pitchvelocity_range_unique', desc: 'integer' },
						{ name: 'script', desc: 'string' },
						{ name: 'seed', desc: 'integer' },
						{ name: 'weight', desc: 'integer' }
					]
				}
			},
			{
				name: 'CogControl',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'name', desc: 'string' },
						{ name: 'states', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'colorReferenceTarget',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Blue', desc: 'integer' },
						{ name: 'Blue_Variation', desc: 'integer' },
						{ name: 'Color', desc: 'RGB' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'Green', desc: 'integer' },
						{ name: 'Green_Variation', desc: 'integer' },
						{ name: 'Hue', desc: 'integer' },
						{ name: 'Hue_Variation', desc: 'integer' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Input_2', desc: 'maxObject' },
						{ name: 'Input_3', desc: 'maxObject' },
						{ name: 'Input_4', desc: 'maxObject' },
						{ name: 'Input_5', desc: 'maxObject' },
						{ name: 'Input_6', desc: 'maxObject' },
						{ name: 'Input_7', desc: 'maxObject' },
						{ name: 'Input_8', desc: 'maxObject' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Red', desc: 'integer' },
						{ name: 'Red_Variation', desc: 'integer' },
						{ name: 'Saturation', desc: 'integer' },
						{ name: 'Saturation_Variation', desc: 'integer' },
						{ name: 'Sync_Type', desc: 'integer' },
						{ name: 'Type', desc: 'radiobtnIndex' },
						{ name: 'Use_Blue_Variation', desc: 'boolean' },
						{ name: 'Use_E7', desc: 'boolean' },
						{ name: 'Use_E8', desc: 'boolean' },
						{ name: 'Use_Green_Variation', desc: 'boolean' },
						{ name: 'Use_HSV_E1', desc: 'boolean' },
						{ name: 'Use_HSV_E2', desc: 'boolean' },
						{ name: 'Use_HSV_E3', desc: 'boolean' },
						{ name: 'Use_HSV_E4', desc: 'boolean' },
						{ name: 'Use_HSV_E5', desc: 'boolean' },
						{ name: 'Use_HSV_E6', desc: 'boolean' },
						{ name: 'Use_HSV_I1', desc: 'boolean' },
						{ name: 'Use_HSV_I2', desc: 'boolean' },
						{ name: 'Use_HSV_I3', desc: 'boolean' },
						{ name: 'Use_HSV_I4', desc: 'boolean' },
						{ name: 'Use_HSV_I5', desc: 'boolean' },
						{ name: 'Use_HSV_I6', desc: 'boolean' },
						{ name: 'Use_Hue_Variation', desc: 'boolean' },
						{ name: 'Use_Red_Variation', desc: 'boolean' },
						{ name: 'Use_RGB_E1', desc: 'boolean' },
						{ name: 'Use_RGB_E2', desc: 'boolean' },
						{ name: 'Use_RGB_E3', desc: 'boolean' },
						{ name: 'Use_RGB_E4', desc: 'boolean' },
						{ name: 'Use_RGB_E5', desc: 'boolean' },
						{ name: 'Use_RGB_E6', desc: 'boolean' },
						{ name: 'Use_RGB_I1', desc: 'boolean' },
						{ name: 'Use_RGB_I2', desc: 'boolean' },
						{ name: 'Use_RGB_I3', desc: 'boolean' },
						{ name: 'Use_RGB_I4', desc: 'boolean' },
						{ name: 'Use_RGB_I5', desc: 'boolean' },
						{ name: 'Use_RGB_I6', desc: 'boolean' },
						{ name: 'Use_Saturation_Variation', desc: 'boolean' },
						{ name: 'Use_Value_Variation', desc: 'boolean' },
						{ name: 'Value', desc: 'integer' },
						{ name: 'Value_Variation', desc: 'integer' },
						{ name: 'Variation_Type', desc: 'radiobtnIndex' }
					]
				}
			},
			{
				name: 'Condition',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Angle_A', desc: 'angle' },
						{ name: 'Angle_As_Orientation', desc: 'boolean' },
						{ name: 'Angle_B', desc: 'angle' },
						{ name: 'Condition_Type_Int', desc: 'integer' },
						{ name: 'Condition_Type_Real', desc: 'integer' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'Float_A', desc: 'float' },
						{ name: 'Float_B', desc: 'float' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Input_2', desc: 'maxObject' },
						{ name: 'Input_3', desc: 'maxObject' },
						{ name: 'Input_4', desc: 'maxObject' },
						{ name: 'Integer_A', desc: 'integer' },
						{ name: 'Integer_B', desc: 'integer' },
						{ name: 'Percent_A', desc: 'percent' },
						{ name: 'Percent_B', desc: 'percent' },
						{ name: 'Sync_Type', desc: 'integer' },
						{ name: 'Time_A', desc: 'integer' },
						{ name: 'Time_B', desc: 'integer' },
						{ name: 'Type', desc: 'integer' },
						{ name: 'Units_Per_Type', desc: 'integer' },
						{ name: 'Use_As_Acceleration', desc: 'boolean' },
						{ name: 'Use_As_Speed_Or_Spin_Rate', desc: 'boolean' },
						{ name: 'Use_E4', desc: 'boolean' },
						{ name: 'Use_Input_As_A', desc: 'boolean' },
						{ name: 'Use_Input_As_B', desc: 'boolean' },
						{ name: 'Use_Second_Condition', desc: 'boolean' },
						{ name: 'World_A', desc: 'worldUnits' },
						{ name: 'World_B', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'Convert',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Boolean_Conversion', desc: 'radiobtnIndex' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Input_2', desc: 'maxObject' },
						{ name: 'Input_3', desc: 'maxObject' },
						{ name: 'Input_4', desc: 'maxObject' },
						{ name: 'Integer_Time_Conversion', desc: 'radiobtnIndex' },
						{ name: 'Matrix_Vector_Conversion', desc: 'radiobtnIndex' },
						{ name: 'Negative_Up_Toward_Zero', desc: 'boolean' },
						{ name: 'Pair_Integer_Conversion', desc: 'radiobtnIndex' },
						{ name: 'Quaternion_Real_Conversion', desc: 'radiobtnIndex' },
						{ name: 'Quaternion_Vector_Conversion', desc: 'radiobtnIndex' },
						{ name: 'Real_Integer_Conversion', desc: 'radiobtnIndex' },
						{ name: 'Real_Time_Conversion', desc: 'radiobtnIndex' },
						{ name: 'Real_Vector_Conversion', desc: 'radiobtnIndex' },
						{ name: 'Type', desc: 'integer' },
						{ name: 'Use_I3_As_Object_Index', desc: 'boolean' },
						{ name: 'Vector_Pair_Conversion', desc: 'radiobtnIndex' },
						{ name: 'Vector_Quaternion_Conversion', desc: 'radiobtnIndex' },
						{ name: 'Vector_Real_Conversion', desc: 'radiobtnIndex' }
					]
				}
			},
			{
				name: 'CrowdAssignment',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'active', desc: 'boolean' },
						{ name: 'behavior', desc: 'maxObject' },
						{ name: 'delegate', desc: 'node' },
						{ name: 'team', desc: 'maxObject' },
						{ name: 'weight', desc: 'float' }
					]
				}
			},
			{
				name: 'CrowdState',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'behaviors', desc: 'maxObject' },
						{ name: 'name', desc: 'string' },
						{ name: 'transitions', desc: 'maxObject' },
						{ name: 'weights', desc: 'float' }
					]
				}
			},
			{
				name: 'CrowdTeam',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'members', desc: 'node' },
						{ name: 'name', desc: 'string' }
					]
				}
			},
			{
				name: 'CrowdTransition',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'duration', desc: 'integer' },
						{ name: 'easeIn', desc: 'float' },
						{ name: 'easeOut', desc: 'float' },
						{ name: 'priority', desc: 'integer' }
					]
				}
			},
			{
				name: 'DataViewGroup',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Bookmark', desc: 'boolean' },
						{ name: 'Color', desc: 'integer' },
						{ name: 'Height', desc: 'integer' },
						{ name: 'In_Group', desc: 'boolean' },
						{ name: 'In_Group_Items', desc: 'maxObject' },
						{ name: 'Is_Flipped', desc: 'boolean' },
						{ name: 'Open', desc: 'boolean' },
						{ name: 'Position_X', desc: 'integer' },
						{ name: 'Position_Y', desc: 'integer' },
						{ name: 'Selected', desc: 'boolean' },
						{ name: 'Tighten', desc: 'boolean' },
						{ name: 'Transparency', desc: 'percent' },
						{ name: 'Width', desc: 'integer' },
						{ name: 'Z_Order', desc: 'integer' }
					]
				}
			},
			{
				name: 'DigitData',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Bones', desc: 'maxObject' },
						{ name: 'CurlWeight', desc: 'float' },
						{ name: 'Depth', desc: 'float' },
						{ name: 'Palm', desc: 'maxObject' },
						{ name: 'RootPos', desc: 'point3' },
						{ name: 'Width', desc: 'float' }
					]
				}
			},
			{
				name: 'Discretizator',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Base_Angle', desc: 'angle' },
						{ name: 'Base_Float', desc: 'float' },
						{ name: 'Base_Percent', desc: 'percent' },
						{ name: 'Base_Time', desc: 'integer' },
						{ name: 'Base_World', desc: 'worldUnits' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'Input', desc: 'maxObject' },
						{ name: 'Step_Angle', desc: 'angle' },
						{ name: 'Step_Float', desc: 'float' },
						{ name: 'Step_Percent', desc: 'percent' },
						{ name: 'Step_Time', desc: 'integer' },
						{ name: 'Step_World', desc: 'worldUnits' },
						{ name: 'Type', desc: 'integer' },
						{ name: 'Units_Per_Type', desc: 'integer' },
						{ name: 'Use_As_Speed_Or_Spin_Rate', desc: 'boolean' }
					]
				}
			},
			{
				name: 'DummyRadMapClass',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'brightness', desc: 'float' },
						{ name: 'contrast', desc: 'float' },
						{ name: 'daylight', desc: 'boolean' },
						{ name: 'exterior', desc: 'boolean' }
					]
				}
			},
			{
				name: 'FunctionReferenceTarget',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Factor_For_First_Operand', desc: 'float' },
						{ name: 'Factor_For_Second_Operand', desc: 'float' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'First_Operand_Type', desc: 'integer' },
						{ name: 'Function_Type_For_Boolean_And_Boolean', desc: 'integer' },
						{ name: 'Function_Type_For_Boolean_Single', desc: 'integer' },
						{ name: 'Function_Type_For_Integer_And_Real', desc: 'integer' },
						{ name: 'Function_Type_For_Integer_Real_Single', desc: 'integer' },
						{ name: 'Function_Type_For_Matrix_And_Matrix', desc: 'integer' },
						{ name: 'Function_Type_For_Matrix_Single', desc: 'integer' },
						{ name: 'Function_Type_For_Quaternion_And_Quaternion', desc: 'integer' },
						{ name: 'Function_Type_For_Quaternion_And_Real', desc: 'integer' },
						{ name: 'Function_Type_For_Quaternion_Single', desc: 'integer' },
						{ name: 'Function_Type_For_Time_And_Time', desc: 'integer' },
						{ name: 'Function_Type_For_Time_Single', desc: 'integer' },
						{ name: 'Function_Type_For_Vector_And_Integer_Time', desc: 'integer' },
						{ name: 'Function_Type_For_Vector_And_Matrix', desc: 'integer' },
						{ name: 'Function_Type_For_Vector_And_Quaternion', desc: 'integer' },
						{ name: 'Function_Type_For_Vector_And_Real', desc: 'integer' },
						{ name: 'Function_Type_For_Vector_And_Vector', desc: 'integer' },
						{ name: 'Function_Type_For_Vector_Single', desc: 'integer' },
						{ name: 'Group_ID_Data_Channel', desc: 'maxObject' },
						{ name: 'Group_ID_Data_Handle', desc: 'integer' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Input_2', desc: 'maxObject' },
						{ name: 'Input_3', desc: 'maxObject' },
						{ name: 'Input_4', desc: 'maxObject' },
						{ name: 'Input_5', desc: 'maxObject' },
						{ name: 'Integer_Factor_For_First_Operand', desc: 'integer' },
						{ name: 'Integer_Factor_For_Second_Operand', desc: 'integer' },
						{ name: 'Integer_Offset_For_First_Operand', desc: 'integer' },
						{ name: 'Integer_Post_Factor', desc: 'integer' },
						{ name: 'Offset_For_First_Operand', desc: 'float' },
						{ name: 'Post_Factor', desc: 'float' },
						{ name: 'Restrict_By_Group_ID', desc: 'boolean' },
						{ name: 'Second_Operand_Type_For_Integer_Real', desc: 'integer' },
						{ name: 'Second_Operand_Type_For_Quaternion', desc: 'integer' },
						{ name: 'Second_Operand_Type_For_Vector', desc: 'integer' },
						{ name: 'Sync_Type', desc: 'integer' },
						{ name: 'Use_E5', desc: 'boolean' },
						{ name: 'Use_R_As_Factor_For_First_Operand', desc: 'boolean' },
						{ name: 'Use_R_As_Factor_For_Second_Operand', desc: 'boolean' },
						{ name: 'Use_Second_Operand', desc: 'boolean' }
					]
				}
			},
			{
				name: 'geometryReferenceTarget',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Animated_Surface', desc: 'boolean' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'Geometry_Safe_Mode', desc: 'boolean' },
						{ name: 'Gradient_Delta', desc: 'worldUnits' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Input_2', desc: 'maxObject' },
						{ name: 'Input_3', desc: 'maxObject' },
						{ name: 'Input_4', desc: 'maxObject' },
						{ name: 'Input_5', desc: 'maxObject' },
						{ name: 'Input_6', desc: 'maxObject' },
						{ name: 'Input_7', desc: 'maxObject' },
						{ name: 'Map_Channel_Index', desc: 'integer' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Separate_Children', desc: 'boolean' },
						{ name: 'Separate_Group_Members', desc: 'boolean' },
						{ name: 'Static_Objects', desc: 'boolean' },
						{ name: 'Sub_Material_Index', desc: 'integer' },
						{ name: 'Subframe_Geometry', desc: 'boolean' },
						{ name: 'Subframe_Placement', desc: 'boolean' },
						{ name: 'Type', desc: 'integer' },
						{ name: 'Use_E7', desc: 'boolean' },
						{ name: 'Use_I3', desc: 'boolean' },
						{ name: 'Use_R6', desc: 'boolean' },
						{ name: 'Use_Sub_Material', desc: 'boolean' },
						{ name: 'Use_T2', desc: 'boolean' },
						{ name: 'Use_V4', desc: 'boolean' },
						{ name: 'Use_V5', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Glow_Element',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'alpha', desc: 'integer' },
						{ name: 'hue', desc: 'RGB' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'occlusion', desc: 'float' },
						{ name: 'on', desc: 'boolean' },
						{ name: 'size', desc: 'float' },
						{ name: 'squeeze', desc: 'boolean' }
					]
				}
			},
			{
				name: 'icon',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Input_2', desc: 'maxObject' },
						{ name: 'Input_3', desc: 'maxObject' },
						{ name: 'Input_4', desc: 'maxObject' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Static_Icon', desc: 'boolean' },
						{ name: 'Subframe_Geometry', desc: 'boolean' },
						{ name: 'Subframe_Placement', desc: 'boolean' },
						{ name: 'Type', desc: 'integer' },
						{ name: 'Use_E4', desc: 'boolean' },
						{ name: 'Use_T1', desc: 'boolean' },
						{ name: 'Use_V3', desc: 'boolean' },
						{ name: 'Use_V4', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Input_mParticles',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Collision_Type', desc: 'integer' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'Match_Type', desc: 'integer' },
						{ name: 'Threshold_Type', desc: 'integer' }
					]
				}
			},
			{
				name: 'Input_Proxy',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Acceleration_Type', desc: 'integer' },
						{ name: 'Adjusted_By_Scale', desc: 'boolean' },
						{ name: 'Data_Type', desc: 'radiobtnIndex' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'Group_Selection_Operator', desc: 'node' },
						{ name: 'Group_Type', desc: 'integer' },
						{ name: 'I3_Usage', desc: 'radiobtnIndex' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Input_2', desc: 'maxObject' },
						{ name: 'Input_3', desc: 'maxObject' },
						{ name: 'Input_4', desc: 'maxObject' },
						{ name: 'Input_5', desc: 'maxObject' },
						{ name: 'Map_Channel', desc: 'integer' },
						{ name: 'Mapping_Type', desc: 'integer' },
						{ name: 'Position_Type', desc: 'integer' },
						{ name: 'Rotation_Type', desc: 'integer' },
						{ name: 'Scale_Type', desc: 'integer' },
						{ name: 'Script_Type', desc: 'integer' },
						{ name: 'Shape_Type', desc: 'integer' },
						{ name: 'Size_Type', desc: 'integer' },
						{ name: 'Speed_Type', desc: 'integer' },
						{ name: 'Spin_Type', desc: 'integer' },
						{ name: 'Time_Type', desc: 'integer' },
						{ name: 'TM_Type', desc: 'integer' },
						{ name: 'Use_E4', desc: 'boolean' },
						{ name: 'Use_I2', desc: 'boolean' }
					]
				}
			},
			{
				name: 'InputCustom',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Data_Channel', desc: 'maxObject' },
						{ name: 'Data_Handle', desc: 'integer' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'I3_Usage', desc: 'radiobtnIndex' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Input_2', desc: 'maxObject' },
						{ name: 'Input_3', desc: 'maxObject' },
						{ name: 'Use_I2', desc: 'boolean' },
						{ name: 'Use_Proxy_Particles', desc: 'boolean' }
					]
				}
			},
			{
				name: 'InputStandard',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Acceleration_Type', desc: 'integer' },
						{ name: 'Adjusted_By_Scale', desc: 'boolean' },
						{ name: 'Data_Type', desc: 'radiobtnIndex' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'Group_Selection_Operator', desc: 'node' },
						{ name: 'Group_Type', desc: 'integer' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Input_2', desc: 'maxObject' },
						{ name: 'Map_Channel', desc: 'integer' },
						{ name: 'Mapping_Type', desc: 'integer' },
						{ name: 'Position_Type', desc: 'integer' },
						{ name: 'Rotation_Type', desc: 'integer' },
						{ name: 'Scale_Type', desc: 'integer' },
						{ name: 'Script_Type', desc: 'integer' },
						{ name: 'Shape_Type', desc: 'integer' },
						{ name: 'Size_Type', desc: 'integer' },
						{ name: 'Speed_Type', desc: 'integer' },
						{ name: 'Spin_Type', desc: 'integer' },
						{ name: 'Time_Type', desc: 'integer' },
						{ name: 'TM_Type', desc: 'integer' },
						{ name: 'Use_E1', desc: 'boolean' },
						{ name: 'Viewport_Render_Operator', desc: 'node' },
						{ name: 'Visibility_Type', desc: 'integer' }
					]
				}
			},
			{
				name: 'Joint_Angle_Deformer',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'child', desc: 'integer' },
						{ name: 'editing', desc: 'boolean' },
						{ name: 'graph', desc: 'maxObject' },
						{ name: 'initial_angle', desc: 'float' },
						{ name: 'name', desc: 'string' },
						{ name: 'orientation', desc: 'point3' },
						{ name: 'parent', desc: 'integer' },
						{ name: 'points', desc: 'point3' },
						{ name: 'selection', desc: 'int' },
						{ name: 'twist', desc: 'float' },
						{ name: 'use_volume', desc: 'boolean' },
						{ name: 'weights', desc: 'float' }
					]
				}
			},
			{
				name: 'LightMap',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'diffuse_filename', desc: 'filename' },
						{ name: 'diffuse_mapping', desc: 'integer' },
						{ name: 'diffuse_texture', desc: 'bitmap' },
						{ name: 'lightmap_filename', desc: 'filename' },
						{ name: 'lightmap_mapping', desc: 'integer' },
						{ name: 'lightmap_texture', desc: 'bitmap' }
					]
				}
			},
			{
				name: 'Manual_Secondary_Element',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'alpha', desc: 'integer' },
						{ name: 'hue', desc: 'RGB' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'occlusion', desc: 'float' },
						{ name: 'on', desc: 'boolean' },
						{ name: 'plane', desc: 'float' },
						{ name: 'presets', desc: 'integer' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'size', desc: 'float' },
						{ name: 'squeeze', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Metal_Bump9',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'SYNC', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Morph_Angle_Deformer',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'angles', desc: 'float' },
						{ name: 'child', desc: 'integer' },
						{ name: 'count', desc: 'integer' },
						{ name: 'ease', desc: 'float' },
						{ name: 'initial_angle', desc: 'float' },
						{ name: 'name', desc: 'string' },
						{ name: 'names', desc: 'string' },
						{ name: 'nodes', desc: 'node' },
						{ name: 'parent', desc: 'integer' }
					]
				}
			},
			{
				name: 'Multiple_Delegate_Settings',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'active', desc: 'boolean' },
						{ name: 'delegates', desc: 'node' },
						{ name: 'name', desc: 'string' },
						{ name: 'priority1', desc: 'integer' },
						{ name: 'priority2', desc: 'integer' },
						{ name: 'rand1', desc: 'boolean' },
						{ name: 'rand10', desc: 'boolean' },
						{ name: 'rand11', desc: 'boolean' },
						{ name: 'rand12', desc: 'boolean' },
						{ name: 'rand13', desc: 'boolean' },
						{ name: 'rand14', desc: 'boolean' },
						{ name: 'rand15', desc: 'boolean' },
						{ name: 'rand16', desc: 'boolean' },
						{ name: 'rand17', desc: 'boolean' },
						{ name: 'rand18', desc: 'boolean' },
						{ name: 'rand2', desc: 'boolean' },
						{ name: 'rand3', desc: 'boolean' },
						{ name: 'rand4', desc: 'boolean' },
						{ name: 'rand5', desc: 'boolean' },
						{ name: 'rand6', desc: 'boolean' },
						{ name: 'rand7', desc: 'boolean' },
						{ name: 'rand8', desc: 'boolean' },
						{ name: 'rand9', desc: 'boolean' },
						{ name: 'set1', desc: 'boolean' },
						{ name: 'set10', desc: 'boolean' },
						{ name: 'set11', desc: 'boolean' },
						{ name: 'set12', desc: 'boolean' },
						{ name: 'set13', desc: 'boolean' },
						{ name: 'set14', desc: 'boolean' },
						{ name: 'set15', desc: 'boolean' },
						{ name: 'set16', desc: 'boolean' },
						{ name: 'set17', desc: 'boolean' },
						{ name: 'set18', desc: 'boolean' },
						{ name: 'set19', desc: 'boolean' },
						{ name: 'set2', desc: 'boolean' },
						{ name: 'set20', desc: 'boolean' },
						{ name: 'set21', desc: 'boolean' },
						{ name: 'set22', desc: 'boolean' },
						{ name: 'set23', desc: 'boolean' },
						{ name: 'set24', desc: 'boolean' },
						{ name: 'set25', desc: 'boolean' },
						{ name: 'set26', desc: 'boolean' },
						{ name: 'set3', desc: 'boolean' },
						{ name: 'set4', desc: 'boolean' },
						{ name: 'set5', desc: 'boolean' },
						{ name: 'set6', desc: 'boolean' },
						{ name: 'set7', desc: 'boolean' },
						{ name: 'set8', desc: 'boolean' },
						{ name: 'set9', desc: 'boolean' },
						{ name: 'showCogStates', desc: 'boolean' },
						{ name: 'showVelocity', desc: 'boolean' },
						{ name: 'startClip', desc: 'radiobtnIndex' },
						{ name: 'startFrame1', desc: 'integer' },
						{ name: 'startFrame2', desc: 'integer' },
						{ name: 'useBiped', desc: 'boolean' },
						{ name: 'useHierBbox', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Multiple_Delegates',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'active', desc: 'boolean' },
						{ name: 'bipedAssociationType', desc: 'boolean' },
						{ name: 'bipedAssociationUseBip', desc: 'boolean' },
						{ name: 'bipedDelegates', desc: 'node' },
						{ name: 'bipeds', desc: 'node' },
						{ name: 'delegates', desc: 'node' },
						{ name: 'editSetting', desc: 'maxObject' },
						{ name: 'priority1', desc: 'integer' },
						{ name: 'priority2', desc: 'integer' },
						{ name: 'rand1', desc: 'boolean' },
						{ name: 'rand10', desc: 'boolean' },
						{ name: 'rand11', desc: 'boolean' },
						{ name: 'rand12', desc: 'boolean' },
						{ name: 'rand13', desc: 'boolean' },
						{ name: 'rand14', desc: 'boolean' },
						{ name: 'rand15', desc: 'boolean' },
						{ name: 'rand17', desc: 'boolean' },
						{ name: 'rand18', desc: 'boolean' },
						{ name: 'rand2', desc: 'boolean' },
						{ name: 'rand3', desc: 'boolean' },
						{ name: 'rand4', desc: 'boolean' },
						{ name: 'rand5', desc: 'boolean' },
						{ name: 'rand6', desc: 'boolean' },
						{ name: 'rand7', desc: 'boolean' },
						{ name: 'rand8', desc: 'boolean' },
						{ name: 'rand9', desc: 'boolean' },
						{ name: 'set1', desc: 'boolean' },
						{ name: 'set10', desc: 'boolean' },
						{ name: 'set11', desc: 'boolean' },
						{ name: 'set12', desc: 'boolean' },
						{ name: 'set13', desc: 'boolean' },
						{ name: 'set14', desc: 'boolean' },
						{ name: 'set15', desc: 'boolean' },
						{ name: 'set16', desc: 'boolean' },
						{ name: 'set17', desc: 'boolean' },
						{ name: 'set18', desc: 'boolean' },
						{ name: 'set19', desc: 'boolean' },
						{ name: 'set2', desc: 'boolean' },
						{ name: 'set20', desc: 'boolean' },
						{ name: 'set21', desc: 'boolean' },
						{ name: 'set22', desc: 'boolean' },
						{ name: 'set24', desc: 'boolean' },
						{ name: 'set25', desc: 'boolean' },
						{ name: 'set26', desc: 'boolean' },
						{ name: 'set3', desc: 'boolean' },
						{ name: 'set4', desc: 'boolean' },
						{ name: 'set5', desc: 'boolean' },
						{ name: 'set6', desc: 'boolean' },
						{ name: 'set7', desc: 'boolean' },
						{ name: 'set8', desc: 'boolean' },
						{ name: 'set9', desc: 'boolean' },
						{ name: 'settings', desc: 'maxObject' },
						{ name: 'showCogStates', desc: 'boolean' },
						{ name: 'showVelocity', desc: 'boolean' },
						{ name: 'startClip', desc: 'radiobtnIndex' },
						{ name: 'startFrame1', desc: 'integer' },
						{ name: 'startFrame2', desc: 'integer' },
						{ name: 'useBiped', desc: 'boolean' },
						{ name: 'useHierBbox', desc: 'boolean' }
					]
				}
			},
			{
				name: 'NotesReferenceTarget',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Comments', desc: 'string' },
						{ name: 'Filter', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'ObjAssoc',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'delegates', desc: 'node' },
						{ name: 'objects', desc: 'node' }
					]
				}
			},
			{
				name: 'ObjectParameter',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'Input', desc: 'maxObject' },
						{ name: 'Object', desc: 'node' },
						{ name: 'Subframe_Sampling', desc: 'boolean' },
						{ name: 'Units_Per_Type', desc: 'integer' },
						{ name: 'Use_As_Speed_Or_Spin_Rate', desc: 'boolean' }
					]
				}
			},
			{
				name: 'objectReferenceTarget',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Input_2', desc: 'maxObject' },
						{ name: 'Input_3', desc: 'maxObject' },
						{ name: 'Input_4', desc: 'maxObject' },
						{ name: 'Separate_Children', desc: 'boolean' },
						{ name: 'Separate_Group_Members', desc: 'boolean' },
						{ name: 'Static_Objects', desc: 'boolean' },
						{ name: 'Subframe_Placement', desc: 'boolean' },
						{ name: 'Type', desc: 'integer' },
						{ name: 'Use_I3', desc: 'boolean' },
						{ name: 'Use_T2', desc: 'boolean' },
						{ name: 'Use_V4', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Orientation_Behavior',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'name', desc: 'string' }
					]
				}
			},
			{
				name: 'Output_mParticles',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Execution_Order', desc: 'integer' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'History_Dependent', desc: 'boolean' },
						{ name: 'Input', desc: 'maxObject' },
						{ name: 'Match_Type', desc: 'integer' },
						{ name: 'Priority_Order', desc: 'integer' },
						{ name: 'Proceed_Type', desc: 'radiobtnIndex' },
						{ name: 'Threshold_Type', desc: 'integer' }
					]
				}
			},
			{
				name: 'OutputCustom',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Data_Channel', desc: 'maxObject' },
						{ name: 'Data_Handle', desc: 'integer' },
						{ name: 'Execution_Order', desc: 'integer' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'History_Dependent', desc: 'boolean' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Priority_Order', desc: 'integer' },
						{ name: 'Proceed_Type', desc: 'radiobtnIndex' }
					]
				}
			},
			{
				name: 'OutputNew',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Data_Handle', desc: 'integer' },
						{ name: 'Data_Type', desc: 'integer' },
						{ name: 'Execution_Order', desc: 'integer' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'History_Dependent', desc: 'boolean' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Priority_Order', desc: 'integer' },
						{ name: 'Proceed_Type', desc: 'radiobtnIndex' },
						{ name: 'Scope_Type', desc: 'radiobtnIndex' }
					]
				}
			},
			{
				name: 'OutputStandard',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Acceleration_Type', desc: 'integer' },
						{ name: 'Data_Type', desc: 'radiobtnIndex' },
						{ name: 'Execution_Order', desc: 'integer' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'History_Dependent', desc: 'boolean' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Input_2', desc: 'maxObject' },
						{ name: 'Map_Channel', desc: 'integer' },
						{ name: 'Mapping_Type', desc: 'integer' },
						{ name: 'Position_Type', desc: 'integer' },
						{ name: 'Priority_Order', desc: 'integer' },
						{ name: 'Proceed_Type', desc: 'radiobtnIndex' },
						{ name: 'Rotation_Type', desc: 'integer' },
						{ name: 'Scale_Type', desc: 'integer' },
						{ name: 'Script_Type', desc: 'integer' },
						{ name: 'Speed_Type', desc: 'integer' },
						{ name: 'Spin_Type', desc: 'integer' },
						{ name: 'Time_Type', desc: 'integer' },
						{ name: 'TM_Type', desc: 'integer' },
						{ name: 'Use_E2', desc: 'boolean' },
						{ name: 'Use_T2', desc: 'boolean' },
						{ name: 'Viewport_Render_Operator', desc: 'node' },
						{ name: 'Visibility_Type', desc: 'integer' }
					]
				}
			},
			{
				name: 'OutputTest',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Execution_Order', desc: 'integer' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'History_Dependent', desc: 'boolean' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Input_2', desc: 'maxObject' },
						{ name: 'Priority_Order', desc: 'integer' },
						{ name: 'Proceed_Type', desc: 'radiobtnIndex' },
						{ name: 'Type', desc: 'radiobtnIndex' },
						{ name: 'Use_T2', desc: 'boolean' }
					]
				}
			},
			{
				name: 'PainterInterface',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'marker', desc: 'float' },
						{ name: 'nodes', desc: 'node' },
						{ name: 'SplineConstraintNode', desc: 'node' }
					]
				}
			},
			{
				name: 'parameter',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Angle_Offset', desc: 'angle' },
						{ name: 'Angle_Value', desc: 'angle' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'Float_Offset', desc: 'float' },
						{ name: 'Float_Value', desc: 'float' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Integer_Factor', desc: 'integer' },
						{ name: 'Integer_Offset', desc: 'integer' },
						{ name: 'Integer_Value', desc: 'integer' },
						{ name: 'Modifier_Type', desc: 'radiobtnIndex' },
						{ name: 'Percent_Offset', desc: 'percent' },
						{ name: 'Percent_Value', desc: 'percent' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Real_Factor', desc: 'float' },
						{ name: 'Sync_Type', desc: 'integer' },
						{ name: 'Time_Offset', desc: 'integer' },
						{ name: 'Time_Value', desc: 'integer' },
						{ name: 'Type', desc: 'integer' },
						{ name: 'Use_As_Modifier', desc: 'boolean' },
						{ name: 'World_Unit_Offset', desc: 'worldUnits' },
						{ name: 'World_Value', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'Particles',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Apply_Double_Filtering', desc: 'boolean' },
						{ name: 'Core_Radius', desc: 'worldUnits' },
						{ name: 'Field_Of_Vision', desc: 'angle' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'Filter_Data_Channel', desc: 'maxObject' },
						{ name: 'Filter_Data_Handle', desc: 'integer' },
						{ name: 'FOV_Direction_Type', desc: 'radiobtnIndex' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Input_2', desc: 'maxObject' },
						{ name: 'Input_3', desc: 'maxObject' },
						{ name: 'Input_4', desc: 'maxObject' },
						{ name: 'Input_5', desc: 'maxObject' },
						{ name: 'Input_6', desc: 'maxObject' },
						{ name: 'Outer_Radius', desc: 'worldUnits' },
						{ name: 'Prevalent_Data_Channel', desc: 'maxObject' },
						{ name: 'Prevalent_Data_Handle', desc: 'integer' },
						{ name: 'Type', desc: 'integer' },
						{ name: 'Use_Core_Radius', desc: 'boolean' },
						{ name: 'Use_Custom_Particle_Weight', desc: 'boolean' },
						{ name: 'Use_Proxy_Filter', desc: 'boolean' },
						{ name: 'Use_Proxy_Particles', desc: 'boolean' },
						{ name: 'Use_R2', desc: 'boolean' },
						{ name: 'Use_R3', desc: 'boolean' },
						{ name: 'Use_R4', desc: 'boolean' },
						{ name: 'Use_V6', desc: 'boolean' },
						{ name: 'Weight_Data_Channel', desc: 'maxObject' },
						{ name: 'Weight_Data_Handle', desc: 'integer' }
					]
				}
			},
			{
				name: 'Path_Follow_Behavior',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'awareness', desc: 'float' },
						{ name: 'name', desc: 'string' },
						{ name: 'path', desc: 'node' },
						{ name: 'seed', desc: 'integer' }
					]
				}
			},
			{
				name: 'PhysXPanel',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bodyAngularVel', desc: 'boolean' },
						{ name: 'bodyAxis', desc: 'boolean' },
						{ name: 'bodyLinearVel', desc: 'boolean' },
						{ name: 'bounceMinSpeedAutomatic', desc: 'integer' },
						{ name: 'bounceMinSpeedThreshold', desc: 'float' },
						{ name: 'ccdEpsilon', desc: 'float' },
						{ name: 'ccdMinSpeedAutomatic', desc: 'integer' },
						{ name: 'ccdMinSpeedThreshold', desc: 'float' },
						{ name: 'collisionCompounds', desc: 'boolean' },
						{ name: 'collisionShapes', desc: 'boolean' },
						{ name: 'collisionSpheres', desc: 'boolean' },
						{ name: 'contactForce', desc: 'boolean' },
						{ name: 'contactNormal', desc: 'boolean' },
						{ name: 'contactPoints', desc: 'boolean' },
						{ name: 'contactShellContactDistance', desc: 'float' },
						{ name: 'contactShellLegacyMode', desc: 'boolean' },
						{ name: 'destructionDamage', desc: 'float' },
						{ name: 'destructionMomentum', desc: 'float' },
						{ name: 'destructionRadius', desc: 'float' },
						{ name: 'dynamicFrictionScale', desc: 'float' },
						{ name: 'enableCCD', desc: 'boolean' },
						{ name: 'enableGravity', desc: 'boolean' },
						{ name: 'exporterMode', desc: 'integer' },
						{ name: 'geometryScale', desc: 'float' },
						{ name: 'gravity', desc: 'float' },
						{ name: 'gravityDirection', desc: 'integer' },
						{ name: 'gravityMode', desc: 'integer' },
						{ name: 'gravityObject', desc: 'node' },
						{ name: 'groundHeight', desc: 'float' },
						{ name: 'jointLimits', desc: 'boolean' },
						{ name: 'jointLocalAxis', desc: 'boolean' },
						{ name: 'jointWorldAxis', desc: 'boolean' },
						{ name: 'loopAnimation', desc: 'integer' },
						{ name: 'maxAngleVelocity', desc: 'float' },
						{ name: 'onLastFrame', desc: 'integer' },
						{ name: 'physicalMeshes', desc: 'integer' },
						{ name: 'pluginBuild', desc: 'string' },
						{ name: 'pluginPropertyVersion', desc: 'integer' },
						{ name: 'restoreOriginalPose', desc: 'boolean' },
						{ name: 'shapePerElement', desc: 'boolean' },
						{ name: 'skinWidth', desc: 'float' },
						{ name: 'sleepEnergy', desc: 'float' },
						{ name: 'sleepSpeed', desc: 'worldUnits' },
						{ name: 'sleepSpin', desc: 'float' },
						{ name: 'sleepThresholdsAutomatic', desc: 'integer' },
						{ name: 'solverIteration', desc: 'integer' },
						{ name: 'staticFrictionScale', desc: 'float' },
						{ name: 'subSteps', desc: 'integer' },
						{ name: 'unitScale', desc: 'float' },
						{ name: 'unitType', desc: 'integer' },
						{ name: 'useAdaptiveForce', desc: 'boolean' },
						{ name: 'useFirst', desc: 'boolean' },
						{ name: 'useGroundPlane', desc: 'boolean' },
						{ name: 'useHardwareScene', desc: 'boolean' },
						{ name: 'useMultiThread', desc: 'boolean' },
						{ name: 'visualizerEnable', desc: 'boolean' },
						{ name: 'visualizerScale', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'PipeReferenceTarget',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Angle_Conditions', desc: 'angle' },
						{ name: 'Condition_Is_Rate', desc: 'boolean' },
						{ name: 'Data_Type', desc: 'integer' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'Float_Conditions', desc: 'float' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Input_2', desc: 'maxObject' },
						{ name: 'Input_3', desc: 'maxObject' },
						{ name: 'Input_4', desc: 'maxObject' },
						{ name: 'Input_5', desc: 'maxObject' },
						{ name: 'Input_6', desc: 'maxObject' },
						{ name: 'Input_7', desc: 'maxObject' },
						{ name: 'Input_8', desc: 'maxObject' },
						{ name: 'Input_Valve', desc: 'maxObject' },
						{ name: 'Integer_Conditions', desc: 'int' },
						{ name: 'Integer_Valve_Type', desc: 'integer' },
						{ name: 'Percent_Conditions', desc: 'percent' },
						{ name: 'Time_Conditions', desc: 'time' },
						{ name: 'Units_Per_Type', desc: 'integer' },
						{ name: 'Valve_Type', desc: 'integer' },
						{ name: 'Vector_Valve_Type', desc: 'integer' },
						{ name: 'World_Unit_Conditions', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'PopCharacter',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'envGroup', desc: 'integer' },
						{ name: 'envPos', desc: 'point3' },
						{ name: 'gepnodes', desc: 'node' }
					]
				}
			},
			{
				name: 'Priority',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'delegates', desc: 'node' },
						{ name: 'grid', desc: 'node' },
						{ name: 'increment', desc: 'integer' },
						{ name: 'object', desc: 'node' }
					]
				}
			},
			{
				name: 'Project_Mapping',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'name', desc: 'string' }
					]
				}
			},
			{
				name: 'randomReferenceTarget',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Input_2', desc: 'maxObject' },
						{ name: 'Input_3', desc: 'maxObject' },
						{ name: 'Input_4', desc: 'maxObject' },
						{ name: 'Input_5', desc: 'maxObject' },
						{ name: 'Input_6', desc: 'maxObject' },
						{ name: 'Input_7', desc: 'maxObject' },
						{ name: 'Integer_Distribution_Type', desc: 'integer' },
						{ name: 'Iterations', desc: 'float' },
						{ name: 'Output_Type', desc: 'integer' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Real_Distribution_Type', desc: 'integer' },
						{ name: 'Sync_Type', desc: 'integer' },
						{ name: 'Use_E3', desc: 'boolean' },
						{ name: 'Use_E4', desc: 'boolean' },
						{ name: 'Use_E5', desc: 'boolean' },
						{ name: 'Use_E6', desc: 'boolean' },
						{ name: 'Use_E7', desc: 'boolean' },
						{ name: 'Vector_Distribution_Type', desc: 'integer' }
					]
				}
			},
			{
				name: 'Ray_Element',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'alpha', desc: 'integer' },
						{ name: 'angle', desc: 'float' },
						{ name: 'hue', desc: 'RGB' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'occlusion', desc: 'float' },
						{ name: 'on', desc: 'boolean' },
						{ name: 'sharpness', desc: 'float' },
						{ name: 'size', desc: 'float' },
						{ name: 'squeeze', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Raytrace_Texture_ParamBlock',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Adaptive_Antialiasing', desc: 'boolean' },
						{ name: 'Attenuation_Color', desc: 'RGB' },
						{ name: 'Attenuation_Color_Mode', desc: 'integer' },
						{ name: 'Attenuation_Control_1', desc: 'float' },
						{ name: 'Attenuation_Control_2', desc: 'float' },
						{ name: 'Attenuation_End', desc: 'float' },
						{ name: 'Attenuation_Exponent', desc: 'float' },
						{ name: 'Attenuation_Far', desc: 'float' },
						{ name: 'Attenuation_Mode', desc: 'integer' },
						{ name: 'Attenuation_Near', desc: 'float' },
						{ name: 'Attenuation_Start', desc: 'float' },
						{ name: 'Background_Color', desc: 'RGB' },
						{ name: 'Background_Mode', desc: 'integer' },
						{ name: 'Basic_Tint_Enable', desc: 'boolean' },
						{ name: 'Bump_Multiplier', desc: 'float' },
						{ name: 'Color_Density_Amount', desc: 'float' },
						{ name: 'Color_Density_Color', desc: 'RGB' },
						{ name: 'Color_Density_Enable', desc: 'boolean' },
						{ name: 'Color_Density_End', desc: 'float' },
						{ name: 'Color_Density_Start', desc: 'float' },
						{ name: 'Filter_Density_Map_Amount', desc: 'float' },
						{ name: 'Fog_Amount', desc: 'float' },
						{ name: 'fog_color', desc: 'RGB' },
						{ name: 'Fog_Enable', desc: 'boolean' },
						{ name: 'Fog_End', desc: 'float' },
						{ name: 'Fog_Map_Amount', desc: 'float' },
						{ name: 'Fog_Start', desc: 'float' },
						{ name: 'Local_Antialias_Override', desc: 'boolean' },
						{ name: 'Local_Blur_Aspect', desc: 'float' },
						{ name: 'Local_Blur_Offset', desc: 'float' },
						{ name: 'Local_Defocus_Amount', desc: 'float' },
						{ name: 'Local_Defocus_Aspect', desc: 'float' },
						{ name: 'Local_Max_Rays', desc: 'integer' },
						{ name: 'Local_Min__Rays', desc: 'integer' },
						{ name: 'Local_Threshold', desc: 'float' },
						{ name: 'Options__Antialiasing_Enable', desc: 'boolean' },
						{ name: 'Options__Raytrace_Atmospherics', desc: 'boolean' },
						{ name: 'Options__Raytrace_Atmospherics_in_Glass', desc: 'boolean' },
						{ name: 'Options__Raytrace_Objects_in_Glass', desc: 'boolean' },
						{ name: 'Options__Raytracer_Enable', desc: 'boolean' },
						{ name: 'Options__Reflect_Refract_Material_ID_s', desc: 'boolean' },
						{ name: 'Options__Self_Reflect_Refract', desc: 'boolean' },
						{ name: 'Reflectivity_Map_Amount', desc: 'float' },
						{ name: 'Refractions_as_Glass_Enable', desc: 'boolean' },
						{ name: 'Tint_Amount', desc: 'float' },
						{ name: 'Tint_Color', desc: 'RGB' },
						{ name: 'Tint_Map_Amount', desc: 'float' },
						{ name: 'Trace_Mode', desc: 'integer' },
						{ name: 'Use_Blur_Map', desc: 'boolean' },
						{ name: 'Use_Color_Density_Map', desc: 'boolean' },
						{ name: 'Use_Defocus_Map', desc: 'boolean' },
						{ name: 'Use_Fog_Map', desc: 'boolean' },
						{ name: 'Use_Reflectivity_Map', desc: 'boolean' },
						{ name: 'Use_Tint_Map', desc: 'boolean' }
					]
				}
			},
			{
				name: 'RaytraceGlobalSettings',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive_antialiasing_enable_flag', desc: 'boolean' },
						{ name: 'adaptive_antialiasing_threshold', desc: 'float' },
						{ name: 'adaptive_ray_depth_threshold', desc: 'float' },
						{ name: 'antialiasing_maximum_rays_to_fire', desc: 'integer' },
						{ name: 'antialiasing_minimum_rays_to_fire', desc: 'integer' },
						{ name: 'blurring_amount', desc: 'float' },
						{ name: 'blurring_aspect_ratio', desc: 'float' },
						{ name: 'defocusing_amount', desc: 'float' },
						{ name: 'defocusing_aspect_ratio', desc: 'float' },
						{ name: 'enable_antialiasing', desc: 'boolean' },
						{ name: 'enable_atmosphere', desc: 'boolean' },
						{ name: 'enable_atmosphere_in_raytrace_objects', desc: 'boolean' },
						{ name: 'enable_material_id_rendering_support', desc: 'boolean' },
						{ name: 'enable_objects_in_raytrace_objects', desc: 'boolean' },
						{ name: 'enable_raytracing', desc: 'boolean' },
						{ name: 'enable_refract_special_effects', desc: 'boolean' },
						{ name: 'enable_self_reflect_refract', desc: 'boolean' },
						{ name: 'max_levels_color_mode', desc: 'integer' },
						{ name: 'max_levels_specify_color', desc: 'RGB' },
						{ name: 'max_ray_depth', desc: 'integer' },
						{ name: 'showMessages', desc: 'boolean' },
						{ name: 'showProgressDlg', desc: 'boolean' },
						{ name: 'vox_dim', desc: 'integer' },
						{ name: 'vox_face_limit', desc: 'integer' },
						{ name: 'vox_maxdepth', desc: 'integer' },
						{ name: 'vox_previs', desc: 'float' }
					]
				}
			},
			{
				name: 'Repel_Behavior',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'falloff', desc: 'float' },
						{ name: 'name', desc: 'string' }
					]
				}
			},
			{
				name: 'Ring_Element',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'alpha', desc: 'integer' },
						{ name: 'hue', desc: 'RGB' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'occlusion', desc: 'float' },
						{ name: 'on', desc: 'boolean' },
						{ name: 'plane', desc: 'float' },
						{ name: 'size', desc: 'float' },
						{ name: 'squeeze', desc: 'boolean' },
						{ name: 'thickness', desc: 'float' }
					]
				}
			},
			{
				name: 'Scalar',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Angle_Value', desc: 'angle' },
						{ name: 'Angle_Variation', desc: 'angle' },
						{ name: 'Boolean_Value', desc: 'radiobtnIndex' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'Float_Value', desc: 'float' },
						{ name: 'Float_Variation', desc: 'float' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Input_2', desc: 'maxObject' },
						{ name: 'Input_3', desc: 'maxObject' },
						{ name: 'Input_4', desc: 'maxObject' },
						{ name: 'Integer_Value', desc: 'integer' },
						{ name: 'Integer_Variation', desc: 'integer' },
						{ name: 'Output_Type', desc: 'integer' },
						{ name: 'Percent_Value', desc: 'percent' },
						{ name: 'Percent_Variation', desc: 'percent' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Sync_Type', desc: 'integer' },
						{ name: 'Time_Value', desc: 'integer' },
						{ name: 'Time_Variation', desc: 'integer' },
						{ name: 'Units_Per_Type', desc: 'integer' },
						{ name: 'Use_As_Acceleration', desc: 'boolean' },
						{ name: 'Use_As_Speed_Or_Spin_Rate', desc: 'boolean' },
						{ name: 'Use_E1', desc: 'boolean' },
						{ name: 'Use_E2', desc: 'boolean' },
						{ name: 'Use_E3', desc: 'boolean' },
						{ name: 'Use_E4', desc: 'boolean' },
						{ name: 'Use_For_Time_Related_Addition', desc: 'boolean' },
						{ name: 'Use_For_Time_Related_Multiplication', desc: 'boolean' },
						{ name: 'World_Value', desc: 'worldUnits' },
						{ name: 'World_Variation', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'ScatterReferenceTarget',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'centerX', desc: 'float' },
						{ name: 'centerY', desc: 'float' },
						{ name: 'centerZ', desc: 'float' },
						{ name: 'radius', desc: 'float' }
					]
				}
			},
			{
				name: 'Scripted_Behavior',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'name', desc: 'string' },
						{ name: 'script', desc: 'string' }
					]
				}
			},
			{
				name: 'Seek_Behavior',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'falloff', desc: 'float' },
						{ name: 'name', desc: 'string' },
						{ name: 'showRadii', desc: 'boolean' },
						{ name: 'targets', desc: 'node' }
					]
				}
			},
			{
				name: 'Select_Object',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'Independent_PFlow_System', desc: 'boolean' },
						{ name: 'Object', desc: 'node' },
						{ name: 'Objects', desc: 'node' },
						{ name: 'Single_Or_Multiple', desc: 'radiobtnIndex' },
						{ name: 'Type', desc: 'integer' }
					]
				}
			},
			{
				name: 'ShapeControl',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Acquire_Mapping', desc: 'boolean' },
						{ name: 'Animated_Shape', desc: 'boolean' },
						{ name: 'Discrete_Optimization', desc: 'boolean' },
						{ name: 'Execution_Order', desc: 'integer' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'History_Dependent', desc: 'boolean' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Input_2', desc: 'maxObject' },
						{ name: 'Input_3', desc: 'maxObject' },
						{ name: 'Input_4', desc: 'maxObject' },
						{ name: 'Input_5', desc: 'maxObject' },
						{ name: 'Input_6', desc: 'maxObject' },
						{ name: 'Input_7', desc: 'maxObject' },
						{ name: 'Input_8', desc: 'maxObject' },
						{ name: 'Input_Time', desc: 'maxObject' },
						{ name: 'Particle_Geometry_Object', desc: 'node' },
						{ name: 'Priority_Order', desc: 'integer' },
						{ name: 'Proceed_Type', desc: 'radiobtnIndex' }
					]
				}
			},
			{
				name: 'SharedMotionFlow',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Bipeds', desc: 'node' },
						{ name: 'figFileLoaded', desc: 'boolean' },
						{ name: 'name', desc: 'string' }
					]
				}
			},
			{
				name: 'SharedMotionFlows',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'EditedSharedMoFlow', desc: 'maxObject' },
						{ name: 'SharedMoFlows', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'smoothReferenceTarget',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'smoothness', desc: 'integer' }
					]
				}
			},
			{
				name: 'Space_Warp_Behavior',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'name', desc: 'string' }
					]
				}
			},
			{
				name: 'Speed_Vary_Behavior',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'name', desc: 'string' },
						{ name: 'period', desc: 'integer' },
						{ name: 'seed', desc: 'integer' }
					]
				}
			},
			{
				name: 'Star_Element',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'alpha', desc: 'integer' },
						{ name: 'angle', desc: 'float' },
						{ name: 'hue', desc: 'RGB' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'occlusion', desc: 'float' },
						{ name: 'on', desc: 'boolean' },
						{ name: 'quantity', desc: 'integer' },
						{ name: 'size', desc: 'float' },
						{ name: 'squeeze', desc: 'boolean' },
						{ name: 'taper', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'Streak_Element',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'alpha', desc: 'integer' },
						{ name: 'angle', desc: 'float' },
						{ name: 'hue', desc: 'RGB' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'occlusion', desc: 'float' },
						{ name: 'on', desc: 'boolean' },
						{ name: 'size', desc: 'float' },
						{ name: 'squeeze', desc: 'boolean' },
						{ name: 'taper', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'Surface_Arrive_Behavior',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'distance', desc: 'float' },
						{ name: 'facing', desc: 'boolean' },
						{ name: 'height', desc: 'float' },
						{ name: 'name', desc: 'string' },
						{ name: 'offset', desc: 'float' },
						{ name: 'rate', desc: 'float' },
						{ name: 'seed', desc: 'integer' },
						{ name: 'speed', desc: 'float' },
						{ name: 'surfaces', desc: 'node' }
					]
				}
			},
			{
				name: 'Surface_Follow_Behavior',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'name', desc: 'string' },
						{ name: 'surfaces', desc: 'node' }
					]
				}
			},
			{
				name: 'Switch',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Active_Input', desc: 'integer' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Input_2', desc: 'maxObject' },
						{ name: 'Input_3', desc: 'maxObject' },
						{ name: 'Input_4', desc: 'maxObject' },
						{ name: 'Input_5', desc: 'maxObject' },
						{ name: 'Input_6', desc: 'maxObject' },
						{ name: 'Input_7', desc: 'maxObject' },
						{ name: 'Input_8', desc: 'maxObject' },
						{ name: 'Render_Viewport_Switch', desc: 'boolean' },
						{ name: 'Type', desc: 'integer' }
					]
				}
			},
			{
				name: 'TailData2',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Bones', desc: 'maxObject' },
						{ name: 'Colour', desc: 'RGB' },
						{ name: 'Height', desc: 'float' },
						{ name: 'Hub', desc: 'maxObject' },
						{ name: 'Length', desc: 'float' },
						{ name: 'NumBones', desc: 'integer' },
						{ name: 'Size', desc: 'float' },
						{ name: 'TailStiffness', desc: 'float' },
						{ name: 'Taper', desc: 'float' }
					]
				}
			},
			{
				name: 'Vector',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Angle_Variation', desc: 'angle' },
						{ name: 'Angle_X', desc: 'angle' },
						{ name: 'Angle_Y', desc: 'angle' },
						{ name: 'Angle_Z', desc: 'angle' },
						{ name: 'Axial_Radius', desc: 'worldUnits' },
						{ name: 'Bearing', desc: 'angle' },
						{ name: 'Coord_X', desc: 'worldUnits' },
						{ name: 'Coord_Y', desc: 'worldUnits' },
						{ name: 'Coord_Z', desc: 'worldUnits' },
						{ name: 'Divergence', desc: 'angle' },
						{ name: 'Filter', desc: 'maxObject' },
						{ name: 'Float_Variation', desc: 'float' },
						{ name: 'Float_X', desc: 'float' },
						{ name: 'Float_Y', desc: 'float' },
						{ name: 'Float_Z', desc: 'float' },
						{ name: 'Input_1', desc: 'maxObject' },
						{ name: 'Input_2', desc: 'maxObject' },
						{ name: 'Input_3', desc: 'maxObject' },
						{ name: 'Input_4', desc: 'maxObject' },
						{ name: 'Input_5', desc: 'maxObject' },
						{ name: 'Input_6', desc: 'maxObject' },
						{ name: 'Input_7', desc: 'maxObject' },
						{ name: 'Latitude', desc: 'angle' },
						{ name: 'Length_Variation', desc: 'worldUnits' },
						{ name: 'Percent_Variation', desc: 'percent' },
						{ name: 'Percent_X', desc: 'percent' },
						{ name: 'Percent_Y', desc: 'percent' },
						{ name: 'Percent_Z', desc: 'percent' },
						{ name: 'Radius', desc: 'worldUnits' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Sync_Type', desc: 'integer' },
						{ name: 'Type', desc: 'integer' },
						{ name: 'Units_Per_Type', desc: 'integer' },
						{ name: 'Use_As_Acceleration', desc: 'boolean' },
						{ name: 'Use_As_Speed_Value', desc: 'boolean' },
						{ name: 'Use_Divergence', desc: 'boolean' },
						{ name: 'Use_E1', desc: 'boolean' },
						{ name: 'Use_E2', desc: 'boolean' },
						{ name: 'Use_E3', desc: 'boolean' },
						{ name: 'Use_E4', desc: 'boolean' },
						{ name: 'Use_E5', desc: 'boolean' },
						{ name: 'Use_E7', desc: 'boolean' },
						{ name: 'Use_Length_Variation', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Wall_Repel_Behavior',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'falloff', desc: 'float' },
						{ name: 'name', desc: 'string' }
					]
				}
			},
			{
				name: 'Wall_Seek_Behavior',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'falloff', desc: 'float' },
						{ name: 'name', desc: 'string' }
					]
				}
			},
			{
				name: 'Wander_Behavior',
				desc: 'MAXSuperClass: ReferenceTarget',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'name', desc: 'string' },
						{ name: 'seed', desc: 'integer' }
					]
				}
			},
			{
				name: 'blur',
				desc: 'MAXSuperClass: renderEffect',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'blur_type', desc: 'radiobtnIndex' }
					]
				}
			},
			{
				name: 'Brightness_and_Contrast',
				desc: 'MAXSuperClass: renderEffect',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'brightness', desc: 'float' },
						{ name: 'contrast', desc: 'float' }
					]
				}
			},
			{
				name: 'Civil_View_Sight_Checker__Calc',
				desc: 'MAXSuperClass: renderEffect',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'resultAvg', desc: 'float' },
						{ name: 'resultMax', desc: 'float' },
						{ name: 'resultMin', desc: 'float' },
						{ name: 'resultPct', desc: 'float' },
						{ name: 'resultTime', desc: 'integer' }
					]
				}
			},
			{
				name: 'Color_Balance',
				desc: 'MAXSuperClass: renderEffect',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'blue', desc: 'integer' },
						{ name: 'green', desc: 'integer' },
						{ name: 'red', desc: 'integer' }
					]
				}
			},
			{
				name: 'dSightRender',
				desc: 'MAXSuperClass: renderEffect',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'alphaBlend', desc: 'boolean' },
						{ name: 'dimBG', desc: 'boolean' },
						{ name: 'EditTextBC', desc: 'string' },
						{ name: 'EditTextBL', desc: 'string' },
						{ name: 'EditTextBR', desc: 'string' },
						{ name: 'EditTextTC', desc: 'string' },
						{ name: 'EditTextTL', desc: 'string' },
						{ name: 'EditTextTR', desc: 'string' },
						{ name: 'fontScale', desc: 'integer' },
						{ name: 'framePad', desc: 'integer' },
						{ name: 'image_x', desc: 'integer' },
						{ name: 'image_y', desc: 'integer' },
						{ name: 'imageFName', desc: 'string' },
						{ name: 'imgOpacity', desc: 'integer' },
						{ name: 'reqdDistance', desc: 'integer' },
						{ name: 'transfer_mode', desc: 'integer' },
						{ name: 'TypeTextBC', desc: 'integer' },
						{ name: 'TypeTextBL', desc: 'integer' },
						{ name: 'TypeTextBR', desc: 'integer' },
						{ name: 'TypeTextTC', desc: 'integer' },
						{ name: 'TypeTextTL', desc: 'integer' },
						{ name: 'TypeTextTR', desc: 'integer' },
						{ name: 'useImage', desc: 'boolean' }
					]
				}
			},
			{
				name: 'File_Output',
				desc: 'MAXSuperClass: renderEffect',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'active', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' }
					]
				}
			},
			{
				name: 'Film_Grain',
				desc: 'MAXSuperClass: renderEffect',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Grain', desc: 'float' }
					]
				}
			},
			{
				name: 'HairEffect',
				desc: 'MAXSuperClass: renderEffect',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'GI_Multiplier', desc: 'float' },
						{ name: 'overSampling', desc: 'integer' }
					]
				}
			},
			{
				name: 'Lens_Effects',
				desc: 'MAXSuperClass: renderEffect',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'angle', desc: 'float' },
						{ name: 'intensity', desc: 'float' },
						{ name: 'seed', desc: 'integer' },
						{ name: 'size', desc: 'float' },
						{ name: 'squeeze', desc: 'float' }
					]
				}
			},
			{
				name: 'Lighting_Analysis_Overlay',
				desc: 'MAXSuperClass: renderEffect',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'largestValue', desc: 'float' },
						{ name: 'quantity', desc: 'integer' }
					]
				}
			},
			{
				name: 'Motion_Blur',
				desc: 'MAXSuperClass: renderEffect',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'duration', desc: 'float' },
						{ name: 'transparency', desc: 'boolean' }
					]
				}
			},
			{
				name: 'alpha',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Atmosphere',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'BackgroundRenderElement',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Beauty',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'atmosphereOn', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'BlendRenderElement',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'atmosphereOn', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CESSENTIAL_Direct',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' },
						{ name: 'useDenoise', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CESSENTIAL_Emission',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CESSENTIAL_Indirect',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' },
						{ name: 'useDenoise', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CESSENTIAL_Reflect',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' },
						{ name: 'useDenoise', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CESSENTIAL_Refract',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' },
						{ name: 'useDenoise', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CESSENTIAL_Translucency',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' },
						{ name: 'useDenoise', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CESSENTIAL_Volumetrics',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' },
						{ name: 'useDenoise', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CGeometry_NormalsDotProduct',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CGeometry_NormalsGeometry',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CGeometry_NormalsShading',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CGeometry_UvwCoords',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CGeometry_Velocity',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'mode', desc: 'integer' },
						{ name: 'offset', desc: 'float' },
						{ name: 'shadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CGeometry_WorldPosition',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CGeometry_ZDepth',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'enviroDistance', desc: 'worldUnits' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'maxZ', desc: 'worldUnits' },
						{ name: 'minZ', desc: 'worldUnits' },
						{ name: 'shadows', desc: 'boolean' },
						{ name: 'useCameraEnvironmentRange', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CInfo_NetworkRenderDebugging',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CInfo_RenderStamp',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CInfo_SamplingFocus',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CMasking_ID',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CMasking_Mask',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'mode', desc: 'integer' },
						{ name: 'shadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CMasking_WireColor',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CShading_Albedo',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CShading_Alpha',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CShading_Beauty',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CShading_BloomGlare',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CShading_Components',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'addDirectDiffuse', desc: 'boolean' },
						{ name: 'addDirectReflect', desc: 'boolean' },
						{ name: 'addDirectRefract', desc: 'boolean' },
						{ name: 'addDirectTranslucency', desc: 'boolean' },
						{ name: 'addDirectVolumetrics', desc: 'boolean' },
						{ name: 'addEmission', desc: 'boolean' },
						{ name: 'addIndirectDiffuse', desc: 'boolean' },
						{ name: 'addIndirectReflect', desc: 'boolean' },
						{ name: 'addIndirectRefract', desc: 'boolean' },
						{ name: 'addIndirectTranslucency', desc: 'boolean' },
						{ name: 'addIndirectVolumetrics', desc: 'boolean' },
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' },
						{ name: 'useDenoise', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CShading_LightMix',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CShading_LightSelect',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' },
						{ name: 'useDenoise', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CShading_RawComponent',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' },
						{ name: 'useDenoise', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CShading_Shadows',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' },
						{ name: 'useDenoise', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CShading_SourceColor',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'shadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'CTexmap',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyAtmosphere', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'excludedObjects', desc: 'node' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'includeMode', desc: 'boolean' },
						{ name: 'overrideBackgroundColor', desc: 'RGB' },
						{ name: 'shadows', desc: 'boolean' },
						{ name: 'texmap', desc: 'texturemap' },
						{ name: 'useDenoise', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Custom_LPE',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'atmosphereOn', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Diffuse',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'HairRenderElement',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Illuminance_HDR_Data',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'atmosphereOn', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' }
					]
				}
			},
			{
				name: 'Illuminance_Render_Element',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' }
					]
				}
			},
			{
				name: 'Ink',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Light__Area',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'atmosphereOn', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Light__Environment',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'atmosphereOn', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Light__Point',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'atmosphereOn', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Lighting',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Lighting_Analysis_Data',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' }
					]
				}
			},
			{
				name: 'Luminance_HDR_Data',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'atmosphereOn', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' }
					]
				}
			},
			{
				name: 'Luminance_Render_Element',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' }
					]
				}
			},
			{
				name: 'Material_ID',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'MatteRenderElement',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Mtl__Caustics',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'atmosphereOn', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Mtl__Diffuse',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'atmosphereOn', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Mtl__Reflections',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'atmosphereOn', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Mtl__Self_Illumination',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'atmosphereOn', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Mtl__Translucency',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'atmosphereOn', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Mtl__Transparency',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'atmosphereOn', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'MultiMatteElement',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'affect_matte_objects', desc: 'boolean' },
						{ name: 'atmosphereOn', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' },
						{ name: 'filterOn', desc: 'boolean' },
						{ name: 'shadowOn', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Object_ID',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Paint',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Reflection',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Refraction',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Self_Illumination',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'ShadowRenderElement',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Specular',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'velocity',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Z_Depth',
				desc: 'MAXSuperClass: RenderElement',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'elementName', desc: 'string' },
						{ name: 'enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'LookAt_Constraint',
				desc: 'MAXSuperClass: rotationController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'relative', desc: 'boolean' },
						{ name: 'set_orientation', desc: 'boolean' },
						{ name: 'StoUP_axis', desc: 'integer' },
						{ name: 'StoUP_axisFlip', desc: 'boolean' },
						{ name: 'target_axis', desc: 'integer' },
						{ name: 'target_axisFlip', desc: 'boolean' },
						{ name: 'upnode_axis', desc: 'integer' },
						{ name: 'upnode_world', desc: 'boolean' }
					]
				}
			},
			{
				name: 'MCG_lookAt',
				desc: 'MAXSuperClass: rotationController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'Billboard', desc: 'boolean' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' },
						{ name: 'rotXOffset', desc: 'float' },
						{ name: 'rotYOffset', desc: 'float' },
						{ name: 'rotZOffset', desc: 'float' },
						{ name: 'srcUpnodeAxisFlip', desc: 'boolean' },
						{ name: 'targetAxis', desc: 'integer' },
						{ name: 'targetAxisFlip', desc: 'boolean' },
						{ name: 'Targets_Tab', desc: 'node' },
						{ name: 'upnode', desc: 'node' },
						{ name: 'upnodeAlignAxis', desc: 'integer' },
						{ name: 'upnodeAxis', desc: 'integer' },
						{ name: 'upnodeControl', desc: 'integer' },
						{ name: 'upnodeWorld', desc: 'boolean' },
						{ name: 'Weights_Tab', desc: 'float' }
					]
				}
			},
			{
				name: 'MCG_rayToSurfaceOrientation',
				desc: 'MAXSuperClass: rotationController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'flip', desc: 'boolean' },
						{ name: 'Forward_Object', desc: 'node' },
						{ name: 'LclFwdAxis', desc: 'integer' },
						{ name: 'LclUpAxis', desc: 'integer' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' },
						{ name: 'Ray_Axis', desc: 'integer' },
						{ name: 'Ray_Origin', desc: 'node' },
						{ name: 'Ray_to_Surface_Pivot', desc: 'boolean' },
						{ name: 'Surfaces_Tab', desc: 'node' },
						{ name: 'Use_Forward_Object', desc: 'boolean' },
						{ name: 'Use_Surface_Normal', desc: 'boolean' },
						{ name: 'World_Axis', desc: 'integer' }
					]
				}
			},
			{
				name: 'Noise_rotation',
				desc: 'MAXSuperClass: rotationController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'fractal', desc: 'boolean' },
						{ name: 'frequency', desc: 'float' },
						{ name: 'rampin', desc: 'time' },
						{ name: 'rampout', desc: 'time' },
						{ name: 'roughness', desc: 'float' },
						{ name: 'seed', desc: 'integer' },
						{ name: 'x_positive', desc: 'boolean' },
						{ name: 'y_positive', desc: 'boolean' },
						{ name: 'z_positive', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Orientation_Constraint',
				desc: 'MAXSuperClass: rotationController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'relative', desc: 'boolean' }
					]
				}
			},
			{
				name: 'rotation_list',
				desc: 'MAXSuperClass: rotationController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'weight', desc: 'float' }
					]
				}
			},
			{
				name: 'rotation_script',
				desc: 'MAXSuperClass: rotationController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'script', desc: 'string' }
					]
				}
			},
			{
				name: 'Civil_View_Traffic_Data_Constraint',
				desc: 'MAXSuperClass: scaleController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bool01', desc: 'boolean' },
						{ name: 'bool02', desc: 'boolean' },
						{ name: 'bool03', desc: 'boolean' },
						{ name: 'bool04', desc: 'boolean' },
						{ name: 'bool05', desc: 'boolean' },
						{ name: 'float01', desc: 'float' },
						{ name: 'float02', desc: 'float' },
						{ name: 'float03', desc: 'float' },
						{ name: 'float04', desc: 'float' },
						{ name: 'float05', desc: 'float' },
						{ name: 'float06', desc: 'float' },
						{ name: 'float07', desc: 'float' },
						{ name: 'float08', desc: 'float' },
						{ name: 'float09', desc: 'float' },
						{ name: 'float10', desc: 'float' },
						{ name: 'float11', desc: 'float' },
						{ name: 'float12', desc: 'float' },
						{ name: 'int01', desc: 'integer' },
						{ name: 'int02', desc: 'integer' },
						{ name: 'int03', desc: 'integer' },
						{ name: 'int04', desc: 'integer' },
						{ name: 'int05', desc: 'integer' },
						{ name: 'string01', desc: 'string' },
						{ name: 'string02', desc: 'string' },
						{ name: 'string03', desc: 'string' },
						{ name: 'string04', desc: 'string' },
						{ name: 'string05', desc: 'string' }
					]
				}
			},
			{
				name: 'Noise_scale',
				desc: 'MAXSuperClass: scaleController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'fractal', desc: 'boolean' },
						{ name: 'frequency', desc: 'float' },
						{ name: 'rampin', desc: 'time' },
						{ name: 'rampout', desc: 'time' },
						{ name: 'roughness', desc: 'float' },
						{ name: 'seed', desc: 'integer' },
						{ name: 'x_positive', desc: 'boolean' },
						{ name: 'y_positive', desc: 'boolean' },
						{ name: 'z_positive', desc: 'boolean' }
					]
				}
			},
			{
				name: 'scale_list',
				desc: 'MAXSuperClass: scaleController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'weight', desc: 'float' }
					]
				}
			},
			{
				name: 'scale_script',
				desc: 'MAXSuperClass: scaleController',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'script', desc: 'string' }
					]
				}
			},
			{
				name: 'Anisotropic',
				desc: 'MAXSuperClass: Shader',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'anisotropy', desc: 'percent' },
						{ name: 'glossiness', desc: 'percent' },
						{ name: 'orientation', desc: 'percent' }
					]
				}
			},
			{
				name: 'Blinn',
				desc: 'MAXSuperClass: Shader',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'glossiness', desc: 'percent' },
						{ name: 'soften', desc: 'float' }
					]
				}
			},
			{
				name: 'MetalShader',
				desc: 'MAXSuperClass: Shader',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'glossiness', desc: 'percent' },
						{ name: 'soften', desc: 'float' }
					]
				}
			},
			{
				name: 'Multi_Layer',
				desc: 'MAXSuperClass: Shader',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'orientation2', desc: 'percent' }
					]
				}
			},
			{
				name: 'Oren_Nayar_Blinn',
				desc: 'MAXSuperClass: Shader',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'glossiness', desc: 'percent' },
						{ name: 'soften', desc: 'float' }
					]
				}
			},
			{
				name: 'Phong',
				desc: 'MAXSuperClass: Shader',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'glossiness', desc: 'percent' },
						{ name: 'soften', desc: 'float' }
					]
				}
			},
			{
				name: 'Strauss',
				desc: 'MAXSuperClass: Shader',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'glossiness', desc: 'percent' },
						{ name: 'metalness', desc: 'percent' }
					]
				}
			},
			{
				name: 'Translucent_Shader',
				desc: 'MAXSuperClass: Shader',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'glossiness', desc: 'percent' }
					]
				}
			},
			{
				name: 'Adv__Ray_Traced',
				desc: 'MAXSuperClass: Shadow',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'blur', desc: 'float' },
						{ name: 'coplanar_threshold', desc: 'float' },
						{ name: 'shadow_Mode', desc: 'integer' },
						{ name: 'skip_coplanar', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Area_Shadows',
				desc: 'MAXSuperClass: Shadow',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'coplanar_threshold', desc: 'float' },
						{ name: 'shadow_height', desc: 'worldUnits' },
						{ name: 'shadow_length', desc: 'worldUnits' },
						{ name: 'shadow_Mode', desc: 'integer' },
						{ name: 'shadow_width', desc: 'worldUnits' },
						{ name: 'skip_coplanar', desc: 'boolean' }
					]
				}
			},
			{
				name: 'raytraceShadow',
				desc: 'MAXSuperClass: Shadow',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'maxDepth', desc: 'integer' },
						{ name: 'raytraceBias', desc: 'float' },
						{ name: 'twoSidedShadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'shadowMap',
				desc: 'MAXSuperClass: Shadow',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'absoluteMapBias', desc: 'boolean' },
						{ name: 'mapbias', desc: 'float' },
						{ name: 'mapsize', desc: 'integer' },
						{ name: 'samplerange', desc: 'float' },
						{ name: 'twoSidedShadows', desc: 'boolean' }
					]
				}
			},
			{
				name: 'XShadow',
				desc: 'MAXSuperClass: Shadow',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bias', desc: 'float' },
						{ name: 'map', desc: 'texturemap' },
						{ name: 'old_disablexc', desc: 'boolean' }
					]
				}
			},
			{
				name: 'angle',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'angle', desc: 'float' },
						{ name: 'optimize', desc: 'boolean' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'steps', desc: 'integer' },
						{ name: 'thickness', desc: 'float' }
					]
				}
			},
			{
				name: 'Arc',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'angle', desc: 'float' },
						{ name: 'from', desc: 'float' },
						{ name: 'optimize', desc: 'boolean' },
						{ name: 'pie', desc: 'boolean' },
						{ name: 'radius', desc: 'float' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'reverse', desc: 'boolean' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'steps', desc: 'integer' },
						{ name: 'thickness', desc: 'float' },
						{ name: 'to', desc: 'float' }
					]
				}
			},
			{
				name: 'CFDSplineNode',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'bakeSpline_Signal', desc: 'boolean' },
						{ name: 'CFD_Points', desc: 'node' },
						{ name: 'Field_Interpolation', desc: 'integer' },
						{ name: 'Field_Sampling', desc: 'float' },
						{ name: 'material_animation', desc: 'integer' },
						{ name: 'Material_ID_count', desc: 'integer' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' },
						{ name: 'Refresh_Data_Signal', desc: 'boolean' },
						{ name: 'Smoothing', desc: 'float' },
						{ name: 'Spline_Origin_Helper', desc: 'node' },
						{ name: 'Spline_Vertices', desc: 'integer' }
					]
				}
			},
			{
				name: 'CFDSplinePaths',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'CFDImport_Object', desc: 'node' },
						{ name: 'Disable', desc: 'boolean' },
						{ name: 'Num_Samples', desc: 'integer' },
						{ name: 'Num_Steps', desc: 'integer' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' },
						{ name: 'Profile', desc: 'node' },
						{ name: 'Step_Size', desc: 'float' },
						{ name: 'X_Col', desc: 'integer' },
						{ name: 'Y_Col', desc: 'integer' },
						{ name: 'Z_Col', desc: 'integer' }
					]
				}
			},
			{
				name: 'channel',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'angle', desc: 'float' },
						{ name: 'optimize', desc: 'boolean' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'steps', desc: 'integer' },
						{ name: 'thickness', desc: 'float' }
					]
				}
			},
			{
				name: 'Circle',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'angle', desc: 'float' },
						{ name: 'optimize', desc: 'boolean' },
						{ name: 'radius', desc: 'float' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'steps', desc: 'integer' },
						{ name: 'thickness', desc: 'float' }
					]
				}
			},
			{
				name: 'CV_Curve',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'render_angle', desc: 'float' },
						{ name: 'render_angle2', desc: 'float' },
						{ name: 'render_length', desc: 'float' },
						{ name: 'render_sides', desc: 'integer' },
						{ name: 'render_thickness', desc: 'float' },
						{ name: 'render_threshold', desc: 'angle' },
						{ name: 'render_width', desc: 'float' }
					]
				}
			},
			{
				name: 'CV_Curveshape',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'render_angle', desc: 'float' },
						{ name: 'render_angle2', desc: 'float' },
						{ name: 'render_length', desc: 'float' },
						{ name: 'render_sides', desc: 'integer' },
						{ name: 'render_thickness', desc: 'float' },
						{ name: 'render_threshold', desc: 'angle' },
						{ name: 'render_width', desc: 'float' }
					]
				}
			},
			{
				name: 'Donut',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'angle', desc: 'float' },
						{ name: 'optimize', desc: 'boolean' },
						{ name: 'radius1', desc: 'float' },
						{ name: 'radius2', desc: 'float' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'steps', desc: 'integer' },
						{ name: 'thickness', desc: 'float' }
					]
				}
			},
			{
				name: 'Egg',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'angle', desc: 'float' },
						{ name: 'optimize', desc: 'boolean' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'steps', desc: 'integer' },
						{ name: 'thickness', desc: 'float' }
					]
				}
			},
			{
				name: 'Ellipse',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'angle', desc: 'float' },
						{ name: 'length', desc: 'worldUnits' },
						{ name: 'optimize', desc: 'boolean' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'steps', desc: 'integer' },
						{ name: 'thickness', desc: 'float' },
						{ name: 'width', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'HalfRound',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'angle', desc: 'float' },
						{ name: 'optimize', desc: 'boolean' },
						{ name: 'radius', desc: 'float' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'steps', desc: 'integer' },
						{ name: 'thickness', desc: 'float' }
					]
				}
			},
			{
				name: 'Helix',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'angle', desc: 'float' },
						{ name: 'bias', desc: 'float' },
						{ name: 'direction', desc: 'integer' },
						{ name: 'height', desc: 'float' },
						{ name: 'radius1', desc: 'float' },
						{ name: 'radius2', desc: 'float' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'thickness', desc: 'float' },
						{ name: 'turns', desc: 'float' }
					]
				}
			},
			{
				name: 'line',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'angle', desc: 'float' },
						{ name: 'optimize', desc: 'boolean' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'steps', desc: 'integer' },
						{ name: 'thickness', desc: 'float' }
					]
				}
			},
			{
				name: 'LinearShape',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'render_angle', desc: 'float' },
						{ name: 'render_angle2', desc: 'float' },
						{ name: 'render_length', desc: 'float' },
						{ name: 'render_sides', desc: 'integer' },
						{ name: 'render_thickness', desc: 'float' },
						{ name: 'render_threshold', desc: 'angle' },
						{ name: 'render_width', desc: 'float' }
					]
				}
			},
			{
				name: 'LinkBlockInstanceshape',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'render_angle', desc: 'float' },
						{ name: 'render_angle2', desc: 'float' },
						{ name: 'render_length', desc: 'float' },
						{ name: 'render_sides', desc: 'integer' },
						{ name: 'render_thickness', desc: 'float' },
						{ name: 'render_threshold', desc: 'angle' },
						{ name: 'render_width', desc: 'float' }
					]
				}
			},
			{
				name: 'LinkLeafshape',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'render_angle', desc: 'float' },
						{ name: 'render_angle2', desc: 'float' },
						{ name: 'render_length', desc: 'float' },
						{ name: 'render_sides', desc: 'integer' },
						{ name: 'render_thickness', desc: 'float' },
						{ name: 'render_threshold', desc: 'angle' },
						{ name: 'render_width', desc: 'float' }
					]
				}
			},
			{
				name: 'MCG_Donut',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' },
						{ name: 'radius1', desc: 'float' },
						{ name: 'radius2', desc: 'float' }
					]
				}
			},
			{
				name: 'MCG_MeshEdgesToSpline',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'mesh', desc: 'node' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' }
					]
				}
			},
			{
				name: 'MCG_SinWave',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: '_dummy', desc: 'boolean' },
						{ name: 'Amplitude', desc: 'float' },
						{ name: 'closed', desc: 'boolean' },
						{ name: 'Domain', desc: 'float' },
						{ name: 'offset', desc: 'float' },
						{ name: 'pluginGraph', desc: 'filename' },
						{ name: 'pluginGraphDependencies', desc: 'filename' },
						{ name: 'range', desc: 'float' },
						{ name: 'segments', desc: 'integer' },
						{ name: 'Smoothing_Factor', desc: 'float' }
					]
				}
			},
			{
				name: 'Ngon',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'angle', desc: 'float' },
						{ name: 'circular', desc: 'boolean' },
						{ name: 'cornerRadius', desc: 'float' },
						{ name: 'nsides', desc: 'integer' },
						{ name: 'optimize', desc: 'boolean' },
						{ name: 'radius', desc: 'float' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'scribe', desc: 'integer' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'steps', desc: 'integer' },
						{ name: 'thickness', desc: 'float' }
					]
				}
			},
			{
				name: 'NURBSCurveshape',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'render_angle2', desc: 'float' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_length', desc: 'float' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'render_width', desc: 'float' }
					]
				}
			},
			{
				name: 'Pipe',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'angle', desc: 'float' },
						{ name: 'optimize', desc: 'boolean' },
						{ name: 'pipe_thickness', desc: 'float' },
						{ name: 'radius', desc: 'float' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'steps', desc: 'integer' },
						{ name: 'thickness', desc: 'float' }
					]
				}
			},
			{
				name: 'Point_Curve',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'render_angle', desc: 'float' },
						{ name: 'render_angle2', desc: 'float' },
						{ name: 'render_length', desc: 'float' },
						{ name: 'render_sides', desc: 'integer' },
						{ name: 'render_thickness', desc: 'float' },
						{ name: 'render_threshold', desc: 'angle' },
						{ name: 'render_width', desc: 'float' }
					]
				}
			},
			{
				name: 'Point_Curveshape',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'render_angle', desc: 'float' },
						{ name: 'render_angle2', desc: 'float' },
						{ name: 'render_length', desc: 'float' },
						{ name: 'render_sides', desc: 'integer' },
						{ name: 'render_thickness', desc: 'float' },
						{ name: 'render_threshold', desc: 'angle' },
						{ name: 'render_width', desc: 'float' }
					]
				}
			},
			{
				name: 'PolymorphicGeomshape',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'render_angle', desc: 'float' },
						{ name: 'render_angle2', desc: 'float' },
						{ name: 'render_length', desc: 'float' },
						{ name: 'render_sides', desc: 'integer' },
						{ name: 'render_thickness', desc: 'float' },
						{ name: 'render_threshold', desc: 'angle' },
						{ name: 'render_width', desc: 'float' }
					]
				}
			},
			{
				name: 'QuarterRound',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'angle', desc: 'float' },
						{ name: 'optimize', desc: 'boolean' },
						{ name: 'radius', desc: 'float' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'steps', desc: 'integer' },
						{ name: 'thickness', desc: 'float' }
					]
				}
			},
			{
				name: 'Rectangle',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'angle', desc: 'float' },
						{ name: 'cornerRadius', desc: 'float' },
						{ name: 'length', desc: 'float' },
						{ name: 'optimize', desc: 'boolean' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'steps', desc: 'integer' },
						{ name: 'thickness', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'section',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'angle', desc: 'float' },
						{ name: 'length', desc: 'float' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'thickness', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'SplineShape',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'angle', desc: 'float' },
						{ name: 'optimize', desc: 'boolean' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'steps', desc: 'integer' },
						{ name: 'thickness', desc: 'float' }
					]
				}
			},
			{
				name: 'Star',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'angle', desc: 'float' },
						{ name: 'distort', desc: 'float' },
						{ name: 'fillet1', desc: 'float' },
						{ name: 'fillet2', desc: 'float' },
						{ name: 'optimize', desc: 'boolean' },
						{ name: 'radius1', desc: 'float' },
						{ name: 'radius2', desc: 'float' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'steps', desc: 'integer' },
						{ name: 'thickness', desc: 'float' }
					]
				}
			},
			{
				name: 'StPathClass',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'render_angle', desc: 'float' },
						{ name: 'render_angle2', desc: 'float' },
						{ name: 'render_length', desc: 'float' },
						{ name: 'render_sides', desc: 'integer' },
						{ name: 'render_thickness', desc: 'float' },
						{ name: 'render_threshold', desc: 'angle' },
						{ name: 'render_width', desc: 'float' }
					]
				}
			},
			{
				name: 'Tee',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'angle', desc: 'float' },
						{ name: 'optimize', desc: 'boolean' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'steps', desc: 'integer' },
						{ name: 'thickness', desc: 'float' }
					]
				}
			},
			{
				name: 'text',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'alignment', desc: 'integer' },
						{ name: 'angle', desc: 'float' },
						{ name: 'font', desc: 'string' },
						{ name: 'italic', desc: 'boolean' },
						{ name: 'kerning', desc: 'float' },
						{ name: 'leading', desc: 'float' },
						{ name: 'optimize', desc: 'boolean' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'size', desc: 'float' },
						{ name: 'steps', desc: 'integer' },
						{ name: 'text', desc: 'string' },
						{ name: 'thickness', desc: 'float' },
						{ name: 'underline', desc: 'boolean' }
					]
				}
			},
			{
				name: 'WalledRectangle',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'angle', desc: 'float' },
						{ name: 'optimize', desc: 'boolean' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'steps', desc: 'integer' },
						{ name: 'thickness', desc: 'float' }
					]
				}
			},
			{
				name: 'WideFlange',
				desc: 'MAXSuperClass: shape',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'angle', desc: 'float' },
						{ name: 'optimize', desc: 'boolean' },
						{ name: 'realWorldMapSize', desc: 'boolean' },
						{ name: 'render_aspect_locked', desc: 'boolean' },
						{ name: 'render_auto_smooth', desc: 'boolean' },
						{ name: 'render_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_angle2', desc: 'float' },
						{ name: 'render_viewport_aspect_locked', desc: 'boolean' },
						{ name: 'render_viewport_length', desc: 'float' },
						{ name: 'render_viewport_rectangular', desc: 'boolean' },
						{ name: 'render_viewport_width', desc: 'float' },
						{ name: 'sides', desc: 'integer' },
						{ name: 'steps', desc: 'integer' },
						{ name: 'thickness', desc: 'float' }
					]
				}
			},
			{
				name: 'Civil_View_Swept_Object',
				desc: 'MAXSuperClass: SpacewarpModifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'highlight', desc: 'integer' },
						{ name: 'normalize', desc: 'boolean' },
						{ name: 'side', desc: 'integer' },
						{ name: 'spacing', desc: 'float' },
						{ name: 'threshold', desc: 'float' }
					]
				}
			},
			{
				name: 'MapScaler',
				desc: 'MAXSuperClass: SpacewarpModifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'channel', desc: 'integer' },
						{ name: 'scale', desc: 'float' },
						{ name: 'uOffset', desc: 'float' },
						{ name: 'vOffset', desc: 'float' },
						{ name: 'wrap', desc: 'boolean' },
						{ name: 'wrapUsingSmoothingGroups', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Old_Point_CacheSpacewarpModifier',
				desc: 'MAXSuperClass: SpacewarpModifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'strength', desc: 'float' }
					]
				}
			},
			{
				name: 'PFlow_Collision_Shape',
				desc: 'MAXSuperClass: SpacewarpModifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Active', desc: 'boolean' },
						{ name: 'Dynamic_Friction', desc: 'float' },
						{ name: 'Normal_Offset', desc: 'worldUnits' },
						{ name: 'Placement_Edges', desc: 'boolean' },
						{ name: 'Placement_Polygons', desc: 'boolean' },
						{ name: 'Placement_Vertices', desc: 'boolean' },
						{ name: 'Primitive_Size_Type', desc: 'radiobtnIndex' },
						{ name: 'Restitution', desc: 'float' },
						{ name: 'Selected_Only', desc: 'boolean' },
						{ name: 'Shape', desc: 'integer' },
						{ name: 'Side_Overlap', desc: 'worldUnits' },
						{ name: 'Smooth_Surface', desc: 'boolean' },
						{ name: 'Static_Friction', desc: 'float' },
						{ name: 'Thickness', desc: 'worldUnits' },
						{ name: 'Visualize_Collision_Shape', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Point_CacheSpacewarpModifier',
				desc: 'MAXSuperClass: SpacewarpModifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'filename', desc: 'filename' },
						{ name: 'strength', desc: 'float' }
					]
				}
			},
			{
				name: 'SpacePatchDeform',
				desc: 'MAXSuperClass: SpacewarpModifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Flip_deformation_axis', desc: 'integer' },
						{ name: 'Plane_to_Patch_Deform', desc: 'integer' },
						{ name: 'rotation', desc: 'angle' },
						{ name: 'U_Percent', desc: 'percent' },
						{ name: 'U_Stretch', desc: 'float' },
						{ name: 'V_Percent', desc: 'percent' },
						{ name: 'V_Stretch', desc: 'float' }
					]
				}
			},
			{
				name: 'SpacePathDeform',
				desc: 'MAXSuperClass: SpacewarpModifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'axis', desc: 'integer' },
						{ name: 'Flip_deformation_axis', desc: 'integer' },
						{ name: 'path', desc: 'node' },
						{ name: 'Percent_along_path', desc: 'percent' },
						{ name: 'rotation', desc: 'angle' },
						{ name: 'Stretch', desc: 'float' },
						{ name: 'Twist', desc: 'angle' }
					]
				}
			},
			{
				name: 'SpaceSurfDeform',
				desc: 'MAXSuperClass: SpacewarpModifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Flip_deformation_axis', desc: 'integer' },
						{ name: 'Plane_to_Patch_Deform', desc: 'integer' },
						{ name: 'rotation', desc: 'angle' },
						{ name: 'surface', desc: 'node' },
						{ name: 'U_Percent', desc: 'percent' },
						{ name: 'U_Stretch', desc: 'float' },
						{ name: 'V_Percent', desc: 'percent' },
						{ name: 'V_Stretch', desc: 'float' }
					]
				}
			},
			{
				name: 'subdivideSpacewarpModifier',
				desc: 'MAXSuperClass: SpacewarpModifier',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'size', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'Bomb',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'chaos', desc: 'float' },
						{ name: 'detonation', desc: 'time' },
						{ name: 'falloff', desc: 'float' },
						{ name: 'fallOffEnable', desc: 'boolean' },
						{ name: 'gravity', desc: 'float' },
						{ name: 'maxFragmentSize', desc: 'integer' },
						{ name: 'minFragmentSize', desc: 'integer' },
						{ name: 'seed', desc: 'integer' },
						{ name: 'spin', desc: 'float' },
						{ name: 'strength', desc: 'float' }
					]
				}
			},
			{
				name: 'ConformSpaceWarp',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Icon_Size', desc: 'float' },
						{ name: 'Projection_Distance', desc: 'float' },
						{ name: 'Selected_Verts', desc: 'integer' },
						{ name: 'Standoff_Distance', desc: 'float' }
					]
				}
			},
			{
				name: 'Deflector',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bounce', desc: 'float' },
						{ name: 'chaos', desc: 'percent' },
						{ name: 'friction', desc: 'percent' },
						{ name: 'length', desc: 'worldUnits' },
						{ name: 'variation', desc: 'percent' },
						{ name: 'width', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'gravity',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'decay', desc: 'float' },
						{ name: 'strength', desc: 'float' }
					]
				}
			},
			{
				name: 'MapScalerSpaceWarp',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'channel', desc: 'integer' },
						{ name: 'scale', desc: 'float' },
						{ name: 'Up_Direction', desc: 'integer' },
						{ name: 'Wrap_Texture', desc: 'integer' }
					]
				}
			},
			{
				name: 'Motor',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Amplitude_1', desc: 'float' },
						{ name: 'Amplitude_2', desc: 'float' },
						{ name: 'Basic_Torque', desc: 'float' },
						{ name: 'Control_Gain', desc: 'float' },
						{ name: 'Enable_Variation', desc: 'integer' },
						{ name: 'Feedback_On', desc: 'integer' },
						{ name: 'Icon_Size', desc: 'float' },
						{ name: 'Off_Time', desc: 'time' },
						{ name: 'On_Time', desc: 'time' },
						{ name: 'Range_Enable', desc: 'integer' },
						{ name: 'Range_Value', desc: 'float' },
						{ name: 'Reversible', desc: 'integer' },
						{ name: 'Revs_Units', desc: 'integer' },
						{ name: 'Target_Revs', desc: 'float' },
						{ name: 'units', desc: 'integer' },
						{ name: 'Variation_Period_1', desc: 'time' },
						{ name: 'Variation_Period_2', desc: 'time' },
						{ name: 'Variation_Phase_1', desc: 'angle' },
						{ name: 'Variation_Phase_2', desc: 'angle' }
					]
				}
			},
			{
				name: 'Path_Follow',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Constant_Speed', desc: 'integer' },
						{ name: 'Icon_Size', desc: 'float' },
						{ name: 'Range_Limited', desc: 'integer' },
						{ name: 'Range_Value', desc: 'float' },
						{ name: 'Spiral_Chaos', desc: 'float' },
						{ name: 'Spiral_Chaos_Var', desc: 'float' },
						{ name: 'Spiral_Dir', desc: 'integer' },
						{ name: 'Spline_Follow_Type', desc: 'integer' },
						{ name: 'START_TIME', desc: 'time' },
						{ name: 'Stop_Time', desc: 'time' },
						{ name: 'Tang_Chaos_Var', desc: 'float' },
						{ name: 'Tangent_Chaos', desc: 'percent' },
						{ name: 'Tangent_Dir', desc: 'integer' },
						{ name: 'Travel_Time', desc: 'time' },
						{ name: 'Travel_Var', desc: 'percent' }
					]
				}
			},
			{
				name: 'PBomb',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'chaos', desc: 'percent' },
						{ name: 'Decay_Type', desc: 'integer' },
						{ name: 'Icon_Size', desc: 'float' },
						{ name: 'Lasts_For', desc: 'time' },
						{ name: 'range', desc: 'float' },
						{ name: 'START_TIME', desc: 'time' },
						{ name: 'strength', desc: 'float' },
						{ name: 'symmetry', desc: 'integer' }
					]
				}
			},
			{
				name: 'POmniFlect',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bounce', desc: 'float' },
						{ name: 'chaos', desc: 'percent' },
						{ name: 'deceleration', desc: 'float' },
						{ name: 'diffusion', desc: 'percent' },
						{ name: 'friction', desc: 'percent' },
						{ name: 'height', desc: 'float' },
						{ name: 'refracts', desc: 'percent' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'PushSpaceWarp',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Amplitude_1', desc: 'float' },
						{ name: 'Amplitude_2', desc: 'float' },
						{ name: 'Basic_Force', desc: 'float' },
						{ name: 'Control_Gain', desc: 'float' },
						{ name: 'Enable_Variation', desc: 'integer' },
						{ name: 'Feedback_On', desc: 'integer' },
						{ name: 'Icon_Size', desc: 'float' },
						{ name: 'Off_Time', desc: 'time' },
						{ name: 'On_Time', desc: 'time' },
						{ name: 'Range_Enable', desc: 'integer' },
						{ name: 'Range_Value', desc: 'float' },
						{ name: 'Reversible', desc: 'integer' },
						{ name: 'Target_Speed', desc: 'float' },
						{ name: 'units', desc: 'integer' },
						{ name: 'Variation_Period_1', desc: 'time' },
						{ name: 'Variation_Period_2', desc: 'time' },
						{ name: 'Variation_Phase_1', desc: 'angle' },
						{ name: 'Variation_Phase_2', desc: 'angle' }
					]
				}
			},
			{
				name: 'SDeflector',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bounce', desc: 'float' },
						{ name: 'chaos', desc: 'percent' },
						{ name: 'friction', desc: 'percent' }
					]
				}
			},
			{
				name: 'SOmniFlect',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bounce', desc: 'float' },
						{ name: 'chaos', desc: 'percent' },
						{ name: 'deceleration', desc: 'float' },
						{ name: 'diffusion', desc: 'percent' },
						{ name: 'friction', desc: 'percent' },
						{ name: 'radius', desc: 'float' },
						{ name: 'refracts', desc: 'percent' }
					]
				}
			},
			{
				name: 'Spacedisplace',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyMap', desc: 'boolean' },
						{ name: 'axis', desc: 'integer' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'blur', desc: 'float' },
						{ name: 'cap', desc: 'boolean' },
						{ name: 'decay', desc: 'float' },
						{ name: 'height', desc: 'float' },
						{ name: 'length', desc: 'float' },
						{ name: 'lumCenter', desc: 'float' },
						{ name: 'lumCenterEnable', desc: 'boolean' },
						{ name: 'map', desc: 'texturemap' },
						{ name: 'maptype', desc: 'integer' },
						{ name: 'strength', desc: 'float' },
						{ name: 'U_Flip', desc: 'boolean' },
						{ name: 'U_Tile', desc: 'float' },
						{ name: 'useMap', desc: 'boolean' },
						{ name: 'V_Flip', desc: 'boolean' },
						{ name: 'V_Tile', desc: 'float' },
						{ name: 'W_Flip', desc: 'boolean' },
						{ name: 'W_Tile', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'SpaceFFDBox',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'continuity', desc: 'float' },
						{ name: 'deformType', desc: 'integer' },
						{ name: 'falloff', desc: 'float' },
						{ name: 'height', desc: 'worldUnits' },
						{ name: 'length', desc: 'worldUnits' },
						{ name: 'tension', desc: 'float' },
						{ name: 'width', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'SpaceFFDCyl',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'continuity', desc: 'float' },
						{ name: 'deformType', desc: 'integer' },
						{ name: 'falloff', desc: 'float' },
						{ name: 'height', desc: 'worldUnits' },
						{ name: 'radius', desc: 'worldUnits' },
						{ name: 'tension', desc: 'float' }
					]
				}
			},
			{
				name: 'Spaceripple',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'amplitude1', desc: 'float' },
						{ name: 'amplitude2', desc: 'float' },
						{ name: 'circles', desc: 'integer' },
						{ name: 'decay', desc: 'float' },
						{ name: 'divisions', desc: 'integer' },
						{ name: 'phase', desc: 'float' },
						{ name: 'segments', desc: 'integer' },
						{ name: 'wavelength', desc: 'float' }
					]
				}
			},
			{
				name: 'SpaceSkew',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'decay', desc: 'float' },
						{ name: 'height', desc: 'float' },
						{ name: 'length', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'SpaceStretch',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'decay', desc: 'float' },
						{ name: 'height', desc: 'float' },
						{ name: 'length', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'SpaceTaper',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'decay', desc: 'float' },
						{ name: 'height', desc: 'float' },
						{ name: 'length', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'SpaceTwist',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'decay', desc: 'float' },
						{ name: 'height', desc: 'float' },
						{ name: 'length', desc: 'float' },
						{ name: 'width', desc: 'float' }
					]
				}
			},
			{
				name: 'Spacewave',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'amplitude1', desc: 'float' },
						{ name: 'amplitude2', desc: 'float' },
						{ name: 'circles', desc: 'integer' },
						{ name: 'decay', desc: 'float' },
						{ name: 'divisions', desc: 'integer' },
						{ name: 'phase', desc: 'float' },
						{ name: 'segments', desc: 'integer' },
						{ name: 'wavelength', desc: 'float' }
					]
				}
			},
			{
				name: 'UDeflector',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bounce', desc: 'float' },
						{ name: 'chaos', desc: 'percent' },
						{ name: 'friction', desc: 'percent' }
					]
				}
			},
			{
				name: 'UOmniFlect',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'bounce', desc: 'float' },
						{ name: 'chaos', desc: 'percent' },
						{ name: 'deceleration', desc: 'float' },
						{ name: 'diffusion', desc: 'percent' },
						{ name: 'friction', desc: 'percent' },
						{ name: 'refracts', desc: 'percent' }
					]
				}
			},
			{
				name: 'Vector_Field',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'falloff', desc: 'worldUnits' },
						{ name: 'height', desc: 'worldUnits' },
						{ name: 'length', desc: 'worldUnits' },
						{ name: 'pull', desc: 'worldUnits' },
						{ name: 'range', desc: 'worldUnits' },
						{ name: 'strength', desc: 'worldUnits' },
						{ name: 'width', desc: 'worldUnits' }
					]
				}
			},
			{
				name: 'Vortex',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'direction', desc: 'radiobtnIndex' }
					]
				}
			},
			{
				name: 'Wind',
				desc: 'MAXSuperClass: SpacewarpObject',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'decay', desc: 'float' },
						{ name: 'frequency', desc: 'float' },
						{ name: 'scale', desc: 'float' },
						{ name: 'strength', desc: 'float' },
						{ name: 'turbulence', desc: 'float' }
					]
				}
			},
			{
				name: 'bipedSystem',
				desc: 'MAXSuperClass: System',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'appendScript', desc: 'boolean' },
						{ name: 'applyToSharedMoflow', desc: 'boolean' },
						{ name: 'dirName', desc: 'filename' },
						{ name: 'dirName', desc: 'filename' },
						{ name: 'fileName', desc: 'filename' },
						{ name: 'fileName', desc: 'filename' },
						{ name: 'length', desc: 'integer' },
						{ name: 'makeMotion', desc: 'boolean' },
						{ name: 'makeMotion', desc: 'boolean' },
						{ name: 'makeScript', desc: 'boolean' },
						{ name: 'makeScript', desc: 'boolean' },
						{ name: 'minLength', desc: 'integer' },
						{ name: 'Multiple', desc: 'radiobtnIndex' },
						{ name: 'multipleBipeds', desc: 'node' },
						{ name: 'multipleReferences', desc: 'node' },
						{ name: 'refObj', desc: 'node' },
						{ name: 'scriptName', desc: 'string' },
						{ name: 'scriptName', desc: 'string' },
						{ name: 'startRange0', desc: 'integer' },
						{ name: 'startRange1', desc: 'integer' },
						{ name: 'startType', desc: 'radiobtnIndex' },
						{ name: 'storeBip', desc: 'boolean' },
						{ name: 'storeBip', desc: 'boolean' },
						{ name: 'whichMoflow', desc: 'radiobtnIndex' }
					]
				}
			},
			{
				name: 'Daylight',
				desc: 'MAXSuperClass: System',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Latitude', desc: 'float' },
						{ name: 'Longitude', desc: 'float' },
						{ name: 'Orbital_Scale', desc: 'float' },
						{ name: 'sky_cover', desc: 'float' },
						{ name: 'Solar_Date', desc: 'float' },
						{ name: 'Solar_Time', desc: 'integer' }
					]
				}
			},
			{
				name: 'Ring_Array',
				desc: 'MAXSuperClass: System',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Amplitude', desc: 'float' },
						{ name: 'Cycles', desc: 'float' },
						{ name: 'phase', desc: 'float' },
						{ name: 'radius', desc: 'float' }
					]
				}
			},
			{
				name: 'Sunlight',
				desc: 'MAXSuperClass: System',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Latitude', desc: 'float' },
						{ name: 'Longitude', desc: 'float' },
						{ name: 'Orbital_Scale', desc: 'float' },
						{ name: 'Solar_Date', desc: 'float' },
						{ name: 'Solar_Time', desc: 'integer' }
					]
				}
			},
			{
				name: 'XRefObject',
				desc: 'MAXSuperClass: System',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'currentFileName', desc: 'filename' },
						{ name: 'currentObjectName', desc: 'string' },
						{ name: 'filename', desc: 'filename' },
						{ name: 'ignoreAnimation', desc: 'boolean' },
						{ name: 'objectName', desc: 'string' },
						{ name: 'proxyFileName', desc: 'filename' },
						{ name: 'proxyObjectName', desc: 'string' },
						{ name: 'renderProxy', desc: 'boolean' },
						{ name: 'updateMaterial', desc: 'boolean' },
						{ name: 'useProxy', desc: 'boolean' }
					]
				}
			},
			{
				name: 'StandardTextureOutput',
				desc: 'MAXSuperClass: TexOutputClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'alphaFromRGB', desc: 'boolean' },
						{ name: 'bump_amount', desc: 'float' },
						{ name: 'clamp', desc: 'boolean' },
						{ name: 'invert', desc: 'boolean' },
						{ name: 'output_amount', desc: 'float' },
						{ name: 'rgb_level', desc: 'float' },
						{ name: 'rgb_offset', desc: 'float' }
					]
				}
			},
			{
				name: 'BerconGradient',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'IOR', desc: 'float' },
						{ name: 'node', desc: 'node' },
						{ name: 'output', desc: 'maxObject' },
						{ name: 'reverse', desc: 'boolean' },
						{ name: 'xyz_angle_x', desc: 'float' },
						{ name: 'xyz_angle_x2', desc: 'float' },
						{ name: 'xyz_angle_y', desc: 'float' },
						{ name: 'xyz_angle_y2', desc: 'float' },
						{ name: 'xyz_angle_z', desc: 'float' },
						{ name: 'xyz_angle_z2', desc: 'float' },
						{ name: 'xyz_filtering', desc: 'float' },
						{ name: 'xyz_lock', desc: 'boolean' },
						{ name: 'xyz_map', desc: 'integer' },
						{ name: 'xyz_offset_x', desc: 'float' },
						{ name: 'xyz_offset_x2', desc: 'float' },
						{ name: 'xyz_offset_y', desc: 'float' },
						{ name: 'xyz_offset_y2', desc: 'float' },
						{ name: 'xyz_offset_z', desc: 'float' },
						{ name: 'xyz_offset_z2', desc: 'float' },
						{ name: 'xyz_size_x', desc: 'float' },
						{ name: 'xyz_size_x2', desc: 'float' },
						{ name: 'xyz_size_y', desc: 'float' },
						{ name: 'xyz_size_y2', desc: 'float' },
						{ name: 'xyz_size_z', desc: 'float' },
						{ name: 'xyz_size_z2', desc: 'float' },
						{ name: 'xyz_tile_x', desc: 'integer' },
						{ name: 'xyz_tile_y', desc: 'integer' },
						{ name: 'xyz_tile_z', desc: 'integer' }
					]
				}
			},
			{
				name: 'BerconMapping',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'xyz_angle_x', desc: 'float' },
						{ name: 'xyz_angle_x2', desc: 'float' },
						{ name: 'xyz_angle_y', desc: 'float' },
						{ name: 'xyz_angle_y2', desc: 'float' },
						{ name: 'xyz_angle_z', desc: 'float' },
						{ name: 'xyz_angle_z2', desc: 'float' },
						{ name: 'xyz_filtering', desc: 'float' },
						{ name: 'xyz_lock', desc: 'boolean' },
						{ name: 'xyz_map', desc: 'integer' },
						{ name: 'xyz_offset_x', desc: 'float' },
						{ name: 'xyz_offset_x2', desc: 'float' },
						{ name: 'xyz_offset_y', desc: 'float' },
						{ name: 'xyz_offset_y2', desc: 'float' },
						{ name: 'xyz_offset_z', desc: 'float' },
						{ name: 'xyz_offset_z2', desc: 'float' },
						{ name: 'xyz_size_x', desc: 'float' },
						{ name: 'xyz_size_x2', desc: 'float' },
						{ name: 'xyz_size_y', desc: 'float' },
						{ name: 'xyz_size_y2', desc: 'float' },
						{ name: 'xyz_size_z', desc: 'float' },
						{ name: 'xyz_size_z2', desc: 'float' },
						{ name: 'xyz_tile_x', desc: 'integer' },
						{ name: 'xyz_tile_y', desc: 'integer' },
						{ name: 'xyz_tile_z', desc: 'integer' }
					]
				}
			},
			{
				name: 'BerconNoise',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'noise_function', desc: 'integer' },
						{ name: 'output', desc: 'maxObject' },
						{ name: 'xyz_angle_x', desc: 'float' },
						{ name: 'xyz_angle_x2', desc: 'float' },
						{ name: 'xyz_angle_y', desc: 'float' },
						{ name: 'xyz_angle_y2', desc: 'float' },
						{ name: 'xyz_angle_z', desc: 'float' },
						{ name: 'xyz_angle_z2', desc: 'float' },
						{ name: 'xyz_filtering', desc: 'float' },
						{ name: 'xyz_lock', desc: 'boolean' },
						{ name: 'xyz_map', desc: 'integer' },
						{ name: 'xyz_offset_x', desc: 'float' },
						{ name: 'xyz_offset_x2', desc: 'float' },
						{ name: 'xyz_offset_y', desc: 'float' },
						{ name: 'xyz_offset_y2', desc: 'float' },
						{ name: 'xyz_offset_z', desc: 'float' },
						{ name: 'xyz_offset_z2', desc: 'float' },
						{ name: 'xyz_size_x', desc: 'float' },
						{ name: 'xyz_size_x2', desc: 'float' },
						{ name: 'xyz_size_y', desc: 'float' },
						{ name: 'xyz_size_y2', desc: 'float' },
						{ name: 'xyz_size_z', desc: 'float' },
						{ name: 'xyz_size_z2', desc: 'float' },
						{ name: 'xyz_tile_x', desc: 'integer' },
						{ name: 'xyz_tile_y', desc: 'integer' },
						{ name: 'xyz_tile_z', desc: 'integer' }
					]
				}
			},
			{
				name: 'BerconTile',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Output', desc: 'maxObject' },
						{ name: 'xyz_angle_x', desc: 'float' },
						{ name: 'xyz_angle_x2', desc: 'float' },
						{ name: 'xyz_angle_y', desc: 'float' },
						{ name: 'xyz_angle_y2', desc: 'float' },
						{ name: 'xyz_angle_z', desc: 'float' },
						{ name: 'xyz_angle_z2', desc: 'float' },
						{ name: 'xyz_filtering', desc: 'float' },
						{ name: 'xyz_lock', desc: 'boolean' },
						{ name: 'xyz_map', desc: 'integer' },
						{ name: 'xyz_offset_x', desc: 'float' },
						{ name: 'xyz_offset_x2', desc: 'float' },
						{ name: 'xyz_offset_y', desc: 'float' },
						{ name: 'xyz_offset_y2', desc: 'float' },
						{ name: 'xyz_offset_z', desc: 'float' },
						{ name: 'xyz_offset_z2', desc: 'float' },
						{ name: 'xyz_size_x', desc: 'float' },
						{ name: 'xyz_size_x2', desc: 'float' },
						{ name: 'xyz_size_y', desc: 'float' },
						{ name: 'xyz_size_y2', desc: 'float' },
						{ name: 'xyz_size_z', desc: 'float' },
						{ name: 'xyz_size_z2', desc: 'float' },
						{ name: 'xyz_tile_x', desc: 'integer' },
						{ name: 'xyz_tile_y', desc: 'integer' },
						{ name: 'xyz_tile_z', desc: 'integer' }
					]
				}
			},
			{
				name: 'BerconWood',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'output', desc: 'maxObject' },
						{ name: 'samples', desc: 'integer' },
						{ name: 'skew', desc: 'float' },
						{ name: 'xyz_angle_x', desc: 'float' },
						{ name: 'xyz_angle_x2', desc: 'float' },
						{ name: 'xyz_angle_y', desc: 'float' },
						{ name: 'xyz_angle_y2', desc: 'float' },
						{ name: 'xyz_angle_z', desc: 'float' },
						{ name: 'xyz_angle_z2', desc: 'float' },
						{ name: 'xyz_filtering', desc: 'float' },
						{ name: 'xyz_lock', desc: 'boolean' },
						{ name: 'xyz_map', desc: 'integer' },
						{ name: 'xyz_offset_x', desc: 'float' },
						{ name: 'xyz_offset_x2', desc: 'float' },
						{ name: 'xyz_offset_y', desc: 'float' },
						{ name: 'xyz_offset_y2', desc: 'float' },
						{ name: 'xyz_offset_z', desc: 'float' },
						{ name: 'xyz_offset_z2', desc: 'float' },
						{ name: 'xyz_size_x', desc: 'float' },
						{ name: 'xyz_size_x2', desc: 'float' },
						{ name: 'xyz_size_y', desc: 'float' },
						{ name: 'xyz_size_y2', desc: 'float' },
						{ name: 'xyz_size_z', desc: 'float' },
						{ name: 'xyz_size_z2', desc: 'float' },
						{ name: 'xyz_tile_x', desc: 'integer' },
						{ name: 'xyz_tile_y', desc: 'integer' },
						{ name: 'xyz_tile_z', desc: 'integer' }
					]
				}
			},
			{
				name: 'Bitmaptexture',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'alphaSource', desc: 'integer' },
						{ name: 'apply', desc: 'boolean' },
						{ name: 'bitmap', desc: 'bitmap' },
						{ name: 'cropPlace', desc: 'integer' },
						{ name: 'endCondition', desc: 'integer' },
						{ name: 'filtering', desc: 'integer' },
						{ name: 'monoOutput', desc: 'integer' },
						{ name: 'output', desc: 'maxObject' },
						{ name: 'playBackRate', desc: 'float' },
						{ name: 'preMultAlpha', desc: 'boolean' },
						{ name: 'rgbOutput', desc: 'integer' },
						{ name: 'startTime', desc: 'time' },
						{ name: 'useJitter', desc: 'boolean' }
					]
				}
			},
			{
				name: 'BlendedBoxMap',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'blend', desc: 'float' },
						{ name: 'blendMapStrength', desc: 'float' },
						{ name: 'colors', desc: 'RGB' },
						{ name: 'cube', desc: 'boolean' },
						{ name: 'cubeMode', desc: 'integer' },
						{ name: 'cubeNode', desc: 'node' },
						{ name: 'cubeSize', desc: 'float' },
						{ name: 'FORSeed', desc: 'integer' },
						{ name: 'lockFrame', desc: 'integer' },
						{ name: 'lockToFrame', desc: 'boolean' },
						{ name: 'mapscale', desc: 'float' },
						{ name: 'mode', desc: 'integer' },
						{ name: 'posLock', desc: 'boolean' },
						{ name: 'posu', desc: 'float' },
						{ name: 'posu2', desc: 'float' },
						{ name: 'posv', desc: 'float' },
						{ name: 'posv2', desc: 'float' },
						{ name: 'randx', desc: 'boolean' },
						{ name: 'randy', desc: 'boolean' },
						{ name: 'randz', desc: 'boolean' },
						{ name: 'renderResolution', desc: 'integer' },
						{ name: 'rota', desc: 'float' },
						{ name: 'rota2', desc: 'float' },
						{ name: 'rotb', desc: 'float' },
						{ name: 'rotb2', desc: 'float' },
						{ name: 'rotc', desc: 'float' },
						{ name: 'rotc2', desc: 'float' },
						{ name: 'rotLock', desc: 'boolean' },
						{ name: 'scaleLock', desc: 'boolean' },
						{ name: 'scaleu', desc: 'float' },
						{ name: 'scaleu2', desc: 'float' },
						{ name: 'scalev', desc: 'float' },
						{ name: 'scalev2', desc: 'float' },
						{ name: 'seed', desc: 'integer' },
						{ name: 'texturespace', desc: 'integer' },
						{ name: 'useRandom', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Bricks',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Brick_Color', desc: 'RGB' },
						{ name: 'Change_Column', desc: 'float' },
						{ name: 'Change_Row', desc: 'float' },
						{ name: 'Color_Variance', desc: 'float' },
						{ name: 'Edge_Roughness', desc: 'float' },
						{ name: 'Fade_Variance', desc: 'float' },
						{ name: 'Holes', desc: 'integer' },
						{ name: 'Horizontal_Count', desc: 'float' },
						{ name: 'Horizontal_Gap', desc: 'float' },
						{ name: 'Line_Shift', desc: 'float' },
						{ name: 'Lock_Gap_Symmetry', desc: 'integer' },
						{ name: 'Mortar_Color', desc: 'RGB' },
						{ name: 'Per_Column', desc: 'integer' },
						{ name: 'Per_Row', desc: 'integer' },
						{ name: 'Random_Seed', desc: 'integer' },
						{ name: 'Random_Shift', desc: 'float' },
						{ name: 'Show_Texture_Swatches', desc: 'integer' },
						{ name: 'Tile_Type', desc: 'integer' },
						{ name: 'Use_Column_Edit', desc: 'integer' },
						{ name: 'Use_Row_Edit', desc: 'integer' },
						{ name: 'Vertical_Count', desc: 'float' },
						{ name: 'Vertical_Gap', desc: 'float' }
					]
				}
			},
			{
				name: 'Camera_Map_Per_Pixel',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'backFace', desc: 'boolean' },
						{ name: 'camera', desc: 'node' },
						{ name: 'mask', desc: 'texturemap' },
						{ name: 'texture', desc: 'texturemap' },
						{ name: 'useZBuffer', desc: 'boolean' },
						{ name: 'zbuffer', desc: 'bitmap' }
					]
				}
			},
			{
				name: 'Cellular',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'adaptive', desc: 'boolean' },
						{ name: 'cellMap', desc: 'texturemap' },
						{ name: 'coords', desc: 'maxObject' },
						{ name: 'fractal', desc: 'boolean' },
						{ name: 'output', desc: 'maxObject' },
						{ name: 'roughness', desc: 'float' },
						{ name: 'size', desc: 'float' },
						{ name: 'spread', desc: 'float' },
						{ name: 'type', desc: 'integer' },
						{ name: 'variation', desc: 'float' }
					]
				}
			},
			{
				name: 'Checker',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'soften', desc: 'float' }
					]
				}
			},
			{
				name: 'Color_Correction',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'brightness', desc: 'float' },
						{ name: 'contrast', desc: 'float' },
						{ name: 'enableB', desc: 'boolean' },
						{ name: 'enableG', desc: 'boolean' },
						{ name: 'enableR', desc: 'boolean' },
						{ name: 'hueShift', desc: 'float' },
						{ name: 'lightnessMode', desc: 'integer' },
						{ name: 'map', desc: 'texturemap' },
						{ name: 'rewireA', desc: 'integer' },
						{ name: 'rewireB', desc: 'integer' },
						{ name: 'rewireG', desc: 'integer' },
						{ name: 'rewireR', desc: 'integer' },
						{ name: 'saturation', desc: 'float' }
					]
				}
			},
			{
				name: 'ColorMap',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'gain', desc: 'float' },
						{ name: 'gamma', desc: 'float' },
						{ name: 'map', desc: 'texturemap' }
					]
				}
			},
			{
				name: 'Combustion',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'height', desc: 'integer' },
						{ name: 'width', desc: 'integer' }
					]
				}
			},
			{
				name: 'ComplexFresnel',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'gamma', desc: 'float' },
						{ name: 'hue', desc: 'float' },
						{ name: 'kbvalue', desc: 'float' },
						{ name: 'kgvalue', desc: 'float' },
						{ name: 'krvalue', desc: 'float' },
						{ name: 'nbvalue', desc: 'float' },
						{ name: 'ngvalue', desc: 'float' },
						{ name: 'nrvalue', desc: 'float' },
						{ name: 'output', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'Dent',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'iterations', desc: 'integer' },
						{ name: 'map1', desc: 'texturemap' },
						{ name: 'map2', desc: 'texturemap' },
						{ name: 'size', desc: 'float' },
						{ name: 'strength', desc: 'float' }
					]
				}
			},
			{
				name: 'fallofftextureMap',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'direction', desc: 'integer' },
						{ name: 'node', desc: 'node' }
					]
				}
			},
			{
				name: 'Flat_Mirror',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyBlur', desc: 'boolean' },
						{ name: 'applyToFaceID', desc: 'boolean' },
						{ name: 'blurAmount', desc: 'float' },
						{ name: 'distortionAmount', desc: 'float' },
						{ name: 'distortionType', desc: 'integer' },
						{ name: 'faceID', desc: 'integer' },
						{ name: 'frame', desc: 'integer' },
						{ name: 'level', desc: 'float' },
						{ name: 'noiseType', desc: 'integer' },
						{ name: 'nthFrame', desc: 'integer' },
						{ name: 'phase', desc: 'float' },
						{ name: 'size', desc: 'float' }
					]
				}
			},
			{
				name: 'FoliagetextureMap',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Color_1', desc: 'RGB' },
						{ name: 'Color_2', desc: 'RGB' },
						{ name: 'Soften', desc: 'percent' }
					]
				}
			},
			{
				name: 'Gradient',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'output', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'Gradient_Ramp',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'amount', desc: 'float' },
						{ name: 'Gradient_Type', desc: 'integer' },
						{ name: 'High_Threshold', desc: 'float' },
						{ name: 'levels', desc: 'float' },
						{ name: 'Low_Threshold', desc: 'float' },
						{ name: 'Noise_Type', desc: 'integer' },
						{ name: 'phase', desc: 'float' },
						{ name: 'size', desc: 'float' },
						{ name: 'Source_Map_On', desc: 'integer' },
						{ name: 'Threshold_Smoothing', desc: 'float' }
					]
				}
			},
			{
				name: 'GradientEdge',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Angle', desc: 'float' },
						{ name: 'c_mult', desc: 'integer' },
						{ name: 'conditions', desc: 'integer' },
						{ name: 'Distance', desc: 'float' },
						{ name: 'marker_map', desc: 'texturemap' },
						{ name: 'open_edges', desc: 'boolean' },
						{ name: 'output', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'Marble',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'size', desc: 'float' }
					]
				}
			},
			{
				name: 'Mask',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'map', desc: 'texturemap' },
						{ name: 'mask', desc: 'texturemap' }
					]
				}
			},
			{
				name: 'Mix',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'lower', desc: 'float' },
						{ name: 'mask', desc: 'texturemap' },
						{ name: 'mixAmount', desc: 'percent' },
						{ name: 'output', desc: 'maxObject' },
						{ name: 'upper', desc: 'float' },
						{ name: 'useCurve', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Noise',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'output', desc: 'maxObject' },
						{ name: 'phase', desc: 'float' }
					]
				}
			},
			{
				name: 'Normal_Bump',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'map1on', desc: 'boolean' },
						{ name: 'map2on', desc: 'boolean' }
					]
				}
			},
			{
				name: 'output',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'output', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'Particle_Age',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'output', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'Particle_Bitmap',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'alphaSource', desc: 'integer' },
						{ name: 'apply', desc: 'boolean' },
						{ name: 'cropPlace', desc: 'integer' },
						{ name: 'endCondition', desc: 'integer' },
						{ name: 'filtering', desc: 'integer' },
						{ name: 'monoOutput', desc: 'integer' },
						{ name: 'output', desc: 'maxObject' },
						{ name: 'playBackRate', desc: 'float' },
						{ name: 'preMultAlpha', desc: 'boolean' },
						{ name: 'rgbOutput', desc: 'integer' },
						{ name: 'startTime', desc: 'time' },
						{ name: 'useJitter', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Perlin_Marble',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'map1', desc: 'texturemap' },
						{ name: 'map2', desc: 'texturemap' },
						{ name: 'size', desc: 'float' }
					]
				}
			},
			{
				name: 'Physical_Sun___Sky_Environment',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'global_intensity', desc: 'float' },
						{ name: 'ground_color', desc: 'fRGBA' },
						{ name: 'haze', desc: 'float' },
						{ name: 'horizon_blur_deg', desc: 'float' },
						{ name: 'horizon_height_deg', desc: 'float' },
						{ name: 'illuminance_model', desc: 'integer' },
						{ name: 'night_color', desc: 'fRGBA' },
						{ name: 'night_intensity', desc: 'float' },
						{ name: 'perez_diffuse_horizontal_illuminance', desc: 'float' },
						{ name: 'perez_direct_normal_illuminance', desc: 'float' },
						{ name: 'saturation', desc: 'float' },
						{ name: 'sky_intensity', desc: 'float' },
						{ name: 'sun_disc_intensity', desc: 'float' },
						{ name: 'sun_disc_scale', desc: 'float' },
						{ name: 'sun_disc_scale_percent', desc: 'float' },
						{ name: 'sun_enabled', desc: 'boolean' },
						{ name: 'sun_position_object', desc: 'node' },
						{ name: 'tint', desc: 'fRGBA' }
					]
				}
			},
			{
				name: 'Planet',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'blendWaterLand', desc: 'boolean' },
						{ name: 'randomSeed', desc: 'integer' }
					]
				}
			},
			{
				name: 'ProSimplex',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'octave', desc: 'float' },
						{ name: 'output', desc: 'maxObject' },
						{ name: 'size', desc: 'float' },
						{ name: 'xyz_angle_x', desc: 'float' },
						{ name: 'xyz_angle_x2', desc: 'float' },
						{ name: 'xyz_angle_y', desc: 'float' },
						{ name: 'xyz_angle_y2', desc: 'float' },
						{ name: 'xyz_angle_z', desc: 'float' },
						{ name: 'xyz_angle_z2', desc: 'float' },
						{ name: 'xyz_filtering', desc: 'float' },
						{ name: 'xyz_lock', desc: 'boolean' },
						{ name: 'xyz_map', desc: 'integer' },
						{ name: 'xyz_offset_x', desc: 'float' },
						{ name: 'xyz_offset_x2', desc: 'float' },
						{ name: 'xyz_offset_y', desc: 'float' },
						{ name: 'xyz_offset_y2', desc: 'float' },
						{ name: 'xyz_offset_z', desc: 'float' },
						{ name: 'xyz_offset_z2', desc: 'float' },
						{ name: 'xyz_size_x', desc: 'float' },
						{ name: 'xyz_size_x2', desc: 'float' },
						{ name: 'xyz_size_y', desc: 'float' },
						{ name: 'xyz_size_y2', desc: 'float' },
						{ name: 'xyz_size_z', desc: 'float' },
						{ name: 'xyz_size_z2', desc: 'float' },
						{ name: 'xyz_tile_x', desc: 'integer' },
						{ name: 'xyz_tile_y', desc: 'integer' },
						{ name: 'xyz_tile_z', desc: 'integer' }
					]
				}
			},
			{
				name: 'ProVoronoi',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'octave', desc: 'float' },
						{ name: 'output', desc: 'maxObject' },
						{ name: 'size', desc: 'float' },
						{ name: 'xyz_angle_x', desc: 'float' },
						{ name: 'xyz_angle_x2', desc: 'float' },
						{ name: 'xyz_angle_y', desc: 'float' },
						{ name: 'xyz_angle_y2', desc: 'float' },
						{ name: 'xyz_angle_z', desc: 'float' },
						{ name: 'xyz_angle_z2', desc: 'float' },
						{ name: 'xyz_filtering', desc: 'float' },
						{ name: 'xyz_lock', desc: 'boolean' },
						{ name: 'xyz_map', desc: 'integer' },
						{ name: 'xyz_offset_x', desc: 'float' },
						{ name: 'xyz_offset_x2', desc: 'float' },
						{ name: 'xyz_offset_y', desc: 'float' },
						{ name: 'xyz_offset_y2', desc: 'float' },
						{ name: 'xyz_offset_z', desc: 'float' },
						{ name: 'xyz_offset_z2', desc: 'float' },
						{ name: 'xyz_size_x', desc: 'float' },
						{ name: 'xyz_size_x2', desc: 'float' },
						{ name: 'xyz_size_y', desc: 'float' },
						{ name: 'xyz_size_y2', desc: 'float' },
						{ name: 'xyz_size_z', desc: 'float' },
						{ name: 'xyz_size_z2', desc: 'float' },
						{ name: 'xyz_tile_x', desc: 'integer' },
						{ name: 'xyz_tile_y', desc: 'integer' },
						{ name: 'xyz_tile_z', desc: 'integer' }
					]
				}
			},
			{
				name: 'RandomColor',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'base_color', desc: 'RGB' },
						{ name: 'base_map', desc: 'texturemap' },
						{ name: 'By_faces', desc: 'boolean' },
						{ name: 'By_ids', desc: 'boolean' },
						{ name: 'By_object', desc: 'boolean' },
						{ name: 'Seed', desc: 'integer' }
					]
				}
			},
			{
				name: 'Reflect_Refract',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'apply', desc: 'boolean' },
						{ name: 'blur', desc: 'float' },
						{ name: 'frametype', desc: 'integer' },
						{ name: 'nthframe', desc: 'integer' },
						{ name: 'size', desc: 'integer' },
						{ name: 'source', desc: 'integer' }
					]
				}
			},
			{
				name: 'RGB_Multiply',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'alphaFrom', desc: 'integer' }
					]
				}
			},
			{
				name: 'RGB_Tint',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'blue', desc: 'RGB' },
						{ name: 'green', desc: 'RGB' },
						{ name: 'red', desc: 'RGB' }
					]
				}
			},
			{
				name: 'Shader_List__Bump',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Current_Shader', desc: 'texturemap' },
						{ name: 'Shaders', desc: 'texturemap' },
						{ name: 'Shaders_On', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Shader_List__Displacement',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Current_Shader', desc: 'texturemap' },
						{ name: 'Shaders', desc: 'texturemap' },
						{ name: 'Shaders_On', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Shader_List__Environment',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Current_Shader', desc: 'texturemap' },
						{ name: 'Shaders', desc: 'texturemap' },
						{ name: 'Shaders_On', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Shader_List__Lens',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Current_Shader', desc: 'texturemap' },
						{ name: 'Shaders', desc: 'texturemap' },
						{ name: 'Shaders_On', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Shader_List__Output',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Current_Shader', desc: 'texturemap' },
						{ name: 'Shaders', desc: 'texturemap' },
						{ name: 'Shaders_On', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Shader_List__Photon_Volume',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Current_Shader', desc: 'texturemap' },
						{ name: 'Shaders', desc: 'texturemap' },
						{ name: 'Shaders_On', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Shader_List__Shadow',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Current_Shader', desc: 'texturemap' },
						{ name: 'Shaders', desc: 'texturemap' },
						{ name: 'Shaders_On', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Shader_List__Texture',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Current_Shader', desc: 'texturemap' },
						{ name: 'Shaders', desc: 'texturemap' },
						{ name: 'Shaders_On', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Shader_List__Volume',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Current_Shader', desc: 'texturemap' },
						{ name: 'Shaders', desc: 'texturemap' },
						{ name: 'Shaders_On', desc: 'boolean' }
					]
				}
			},
			{
				name: 'ShapeMap',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applycrop', desc: 'boolean' },
						{ name: 'bgcolor', desc: 'RGB' },
						{ name: 'boundsobject', desc: 'node' },
						{ name: 'croporplace', desc: 'integer' },
						{ name: 'endtype', desc: 'integer' },
						{ name: 'fillbg', desc: 'boolean' },
						{ name: 'fillcolor', desc: 'RGB' },
						{ name: 'filledclosed', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'hwbitmapsize', desc: 'integer' },
						{ name: 'jitter', desc: 'boolean' },
						{ name: 'manualheight', desc: 'float' },
						{ name: 'manualwidth', desc: 'float' },
						{ name: 'mergeshapes', desc: 'boolean' },
						{ name: 'mipmap', desc: 'boolean' },
						{ name: 'monooutput', desc: 'integer' },
						{ name: 'outlinecolor', desc: 'RGB' },
						{ name: 'outlinedclosed', desc: 'boolean' },
						{ name: 'outlinewidth', desc: 'float' },
						{ name: 'output', desc: 'maxObject' },
						{ name: 'renderchildren', desc: 'boolean' },
						{ name: 'renderopen', desc: 'boolean' },
						{ name: 'renderroot', desc: 'boolean' },
						{ name: 'rgboutput', desc: 'integer' },
						{ name: 'shapeobject', desc: 'node' },
						{ name: 'stricthierarchy', desc: 'boolean' },
						{ name: 'usefillcolor', desc: 'boolean' }
					]
				}
			},
			{
				name: 'SigerScratches',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'erosion', desc: 'float' },
						{ name: 'levels', desc: 'integer' },
						{ name: 'output', desc: 'maxObject' },
						{ name: 'size', desc: 'float' },
						{ name: 'spread', desc: 'float' },
						{ name: 'stretch', desc: 'float' },
						{ name: 'type', desc: 'integer' },
						{ name: 'xyz_angle_x', desc: 'float' },
						{ name: 'xyz_angle_x2', desc: 'float' },
						{ name: 'xyz_angle_y', desc: 'float' },
						{ name: 'xyz_angle_y2', desc: 'float' },
						{ name: 'xyz_angle_z', desc: 'float' },
						{ name: 'xyz_angle_z2', desc: 'float' },
						{ name: 'xyz_lock', desc: 'boolean' },
						{ name: 'xyz_map', desc: 'integer' },
						{ name: 'xyz_offset_x', desc: 'float' },
						{ name: 'xyz_offset_x2', desc: 'float' },
						{ name: 'xyz_offset_y', desc: 'float' },
						{ name: 'xyz_offset_y2', desc: 'float' },
						{ name: 'xyz_offset_z', desc: 'float' },
						{ name: 'xyz_offset_z2', desc: 'float' },
						{ name: 'xyz_size_x', desc: 'float' },
						{ name: 'xyz_size_x2', desc: 'float' },
						{ name: 'xyz_size_y', desc: 'float' },
						{ name: 'xyz_size_y2', desc: 'float' },
						{ name: 'xyz_size_z', desc: 'float' },
						{ name: 'xyz_size_z2', desc: 'float' },
						{ name: 'xyz_tile_x', desc: 'integer' },
						{ name: 'xyz_tile_y', desc: 'integer' },
						{ name: 'xyz_tile_z', desc: 'integer' }
					]
				}
			},
			{
				name: 'Smoke',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'exponent', desc: 'float' },
						{ name: 'iterations', desc: 'integer' },
						{ name: 'map1', desc: 'texturemap' },
						{ name: 'map2', desc: 'texturemap' },
						{ name: 'phase', desc: 'float' },
						{ name: 'size', desc: 'float' }
					]
				}
			},
			{
				name: 'Speckle',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'map1', desc: 'texturemap' },
						{ name: 'map2', desc: 'texturemap' },
						{ name: 'size', desc: 'float' }
					]
				}
			},
			{
				name: 'Splat',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'iterations', desc: 'integer' },
						{ name: 'map1', desc: 'texturemap' },
						{ name: 'map2', desc: 'texturemap' },
						{ name: 'size', desc: 'float' },
						{ name: 'threshold', desc: 'float' }
					]
				}
			},
			{
				name: 'Stucco',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'map1', desc: 'texturemap' },
						{ name: 'map2', desc: 'texturemap' },
						{ name: 'size', desc: 'float' },
						{ name: 'thickness', desc: 'float' },
						{ name: 'threshold', desc: 'float' }
					]
				}
			},
			{
				name: 'Substance',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'localMode', desc: 'integer' }
					]
				}
			},
			{
				name: 'Substance_Output',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'output', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'swirl',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'Base', desc: 'fRGBA' },
						{ name: 'Center_Position_X', desc: 'float' },
						{ name: 'Center_Position_Y', desc: 'float' },
						{ name: 'Color_Contrast', desc: 'float' },
						{ name: 'Constant_Detail', desc: 'integer' },
						{ name: 'Lock_Background', desc: 'integer' },
						{ name: 'Random_Seed', desc: 'float' },
						{ name: 'Swirl', desc: 'fRGBA' },
						{ name: 'Swirl_Amount', desc: 'float' },
						{ name: 'Swirl_Intensity', desc: 'float' },
						{ name: 'Twist', desc: 'float' }
					]
				}
			},
			{
				name: 'TextMap',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applycrop', desc: 'boolean' },
						{ name: 'bgcolor', desc: 'RGB' },
						{ name: 'boundsobject', desc: 'node' },
						{ name: 'croporplace', desc: 'integer' },
						{ name: 'fillbg', desc: 'boolean' },
						{ name: 'fillcolor', desc: 'RGB' },
						{ name: 'filledcharacters', desc: 'boolean' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'glyphoption', desc: 'integer' },
						{ name: 'hwbitmapsize', desc: 'integer' },
						{ name: 'jitter', desc: 'boolean' },
						{ name: 'manualheight', desc: 'float' },
						{ name: 'manualwidth', desc: 'float' },
						{ name: 'mergeshapes', desc: 'boolean' },
						{ name: 'mipmap', desc: 'boolean' },
						{ name: 'monooutput', desc: 'integer' },
						{ name: 'outlinecolor', desc: 'RGB' },
						{ name: 'outlinedcharacters', desc: 'boolean' },
						{ name: 'outlinewidth', desc: 'float' },
						{ name: 'output', desc: 'maxObject' },
						{ name: 'renderchildren', desc: 'boolean' },
						{ name: 'renderroot', desc: 'boolean' },
						{ name: 'rgboutput', desc: 'integer' },
						{ name: 'stricthierarchy', desc: 'boolean' },
						{ name: 'textobject', desc: 'node' },
						{ name: 'usefillcolor', desc: 'boolean' }
					]
				}
			},
			{
				name: 'TextureObjMask',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'color0', desc: 'RGB' },
						{ name: 'color1', desc: 'RGB' },
						{ name: 'displaceamount', desc: 'float' },
						{ name: 'displacetex', desc: 'texturemap' },
						{ name: 'object', desc: 'node' },
						{ name: 'transitionbias', desc: 'float' },
						{ name: 'transitionrange', desc: 'float' }
					]
				}
			},
			{
				name: 'Thin_Wall_Refraction',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applyBlur', desc: 'boolean' },
						{ name: 'blur', desc: 'float' },
						{ name: 'frame', desc: 'integer' },
						{ name: 'nthFrame', desc: 'integer' }
					]
				}
			},
			{
				name: 'ThinFilm',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'gamma', desc: 'float' },
						{ name: 'nfilm', desc: 'float' },
						{ name: 'ninternal', desc: 'float' },
						{ name: 'nmedium', desc: 'float' },
						{ name: 'output', desc: 'maxObject' },
						{ name: 'thicknessmap', desc: 'texturemap' }
					]
				}
			},
			{
				name: 'Vector_Displacement',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'method', desc: 'integer' },
						{ name: 'vector_map_enabled', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Vector_Map',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'applycrop', desc: 'boolean' },
						{ name: 'continous', desc: 'boolean' },
						{ name: 'croporplace', desc: 'integer' },
						{ name: 'filter', desc: 'boolean' },
						{ name: 'hwbitmapsize', desc: 'integer' },
						{ name: 'jitter', desc: 'boolean' },
						{ name: 'memlimit', desc: 'integer' },
						{ name: 'mipmap', desc: 'boolean' },
						{ name: 'monooutput', desc: 'integer' },
						{ name: 'output', desc: 'maxObject' },
						{ name: 'patternname', desc: 'integer' },
						{ name: 'preview', desc: 'boolean' },
						{ name: 'rgboutput', desc: 'integer' },
						{ name: 'transition_mode', desc: 'integer' },
						{ name: 'transparent', desc: 'boolean' },
						{ name: 'vectorfile', desc: 'filename' }
					]
				}
			},
			{
				name: 'Vertex_Color',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'subid', desc: 'integer' }
					]
				}
			},
			{
				name: 'Water',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'amplitude', desc: 'float' },
						{ name: 'distribution', desc: 'integer' },
						{ name: 'map1', desc: 'texturemap' },
						{ name: 'map2', desc: 'texturemap' },
						{ name: 'phase', desc: 'float' },
						{ name: 'randomSeed', desc: 'integer' },
						{ name: 'waveLenMax', desc: 'float' },
						{ name: 'waveLenMin', desc: 'float' }
					]
				}
			},
			{
				name: 'Wood',
				desc: 'MAXSuperClass: textureMap',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'map1', desc: 'texturemap' },
						{ name: 'map2', desc: 'texturemap' }
					]
				}
			},
			{
				name: 'Automatic_Exposure_Control',
				desc: 'MAXSuperClass: ToneOperator',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'active', desc: 'boolean' },
						{ name: 'contrast', desc: 'percent' }
					]
				}
			},
			{
				name: 'Linear_Exposure_Control',
				desc: 'MAXSuperClass: ToneOperator',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'active', desc: 'boolean' },
						{ name: 'contrast', desc: 'percent' }
					]
				}
			},
			{
				name: 'Logarithmic_Exposure_Control',
				desc: 'MAXSuperClass: ToneOperator',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'active', desc: 'boolean' },
						{ name: 'brightness', desc: 'float' },
						{ name: 'contrast', desc: 'float' },
						{ name: 'daylight', desc: 'boolean' },
						{ name: 'exterior', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Physical_Camera_Exposure_Control',
				desc: 'MAXSuperClass: ToneOperator',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'active', desc: 'boolean' },
						{ name: 'ev_compensation', desc: 'float' },
						{ name: 'global_ev', desc: 'float' },
						{ name: 'highlights', desc: 'float' },
						{ name: 'midtones', desc: 'float' },
						{ name: 'physical_scale', desc: 'float' },
						{ name: 'physical_scale_mode', desc: 'integer' },
						{ name: 'processBG', desc: 'boolean' },
						{ name: 'saturation', desc: 'float' },
						{ name: 'shadows', desc: 'float' },
						{ name: 'use_global_ev', desc: 'integer' },
						{ name: 'use_physical_camera_controls', desc: 'boolean' },
						{ name: 'vignetting_amount', desc: 'float' },
						{ name: 'vignetting_enabled', desc: 'boolean' },
						{ name: 'white_balance_custom', desc: 'fRGBA' },
						{ name: 'white_balance_illuminant', desc: 'integer' },
						{ name: 'white_balance_type', desc: 'integer' }
					]
				}
			},
			{
				name: 'Pseudo_Color_Exposure_Control',
				desc: 'MAXSuperClass: ToneOperator',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'active', desc: 'boolean' },
						{ name: 'automatic', desc: 'boolean' },
						{ name: 'display', desc: 'integer' },
						{ name: 'maximum', desc: 'float' },
						{ name: 'minimum', desc: 'float' },
						{ name: 'quantity', desc: 'integer' }
					]
				}
			},
			{
				name: 'Adjust_Color_Tool',
				desc: 'MAXSuperClass: UserDataTypeClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'blue', desc: 'integer' },
						{ name: 'brightness', desc: 'integer' },
						{ name: 'contrast', desc: 'integer' },
						{ name: 'gamma', desc: 'float' },
						{ name: 'green', desc: 'integer' },
						{ name: 'hue', desc: 'integer' },
						{ name: 'red', desc: 'integer' },
						{ name: 'saturation', desc: 'integer' }
					]
				}
			},
			{
				name: 'BitmapProxy_Config_Dialog',
				desc: 'MAXSuperClass: UserDataTypeClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'cacheFolder', desc: 'string' },
						{ name: 'enablePagerSystem', desc: 'boolean' },
						{ name: 'enableProxySystem', desc: 'boolean' },
						{ name: 'pagerFolder', desc: 'string' },
						{ name: 'proxySizeFactor', desc: 'integer' },
						{ name: 'proxySizeMin', desc: 'integer' },
						{ name: 'renderMode', desc: 'integer' },
						{ name: 'useGlobalSettings', desc: 'boolean' }
					]
				}
			},
			{
				name: 'Object_Display_Culling',
				desc: 'MAXSuperClass: UtilityPlugin',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'DisplayMode', desc: 'integer' },
						{ name: 'Enable', desc: 'boolean' },
						{ name: 'Framerate', desc: 'integer' }
					]
				}
			},
			{
				name: 'PopRefUtil',
				desc: 'MAXSuperClass: UtilityPlugin',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'segMaterialFem', desc: 'material' },
						{ name: 'segMaterialMal', desc: 'material' },
						{ name: 'segobjsFem', desc: 'maxObject' },
						{ name: 'segobjsMal', desc: 'maxObject' }
					]
				}
			},
			{
				name: 'StandardUVGen',
				desc: 'MAXSuperClass: UVGenClass',
				property: {
					kind: CompletionItemKind.Method,
					name: [
						{ name: 'blur', desc: 'float' },
						{ name: 'blur_Offset', desc: 'float' },
						{ name: 'mapChannel', desc: 'integer' },
						{ name: 'mappingType', desc: 'integer' },
						{ name: 'Noise_Amount', desc: 'float' },
						{ name: 'Noise_Animate', desc: 'boolean' },
						{ name: 'Noise_Levels', desc: 'integer' },
						{ name: 'Noise_On', desc: 'boolean' },
						{ name: 'Noise_Size', desc: 'float' },
						{ name: 'phase', desc: 'float' },
						{ name: 'realWorldHeight', desc: 'boolean' },
						{ name: 'realWorldScale', desc: 'boolean' },
						{ name: 'realWorldWidth', desc: 'boolean' },
						{ name: 'showMapOnBack', desc: 'boolean' },
						{ name: 'U_angle', desc: 'angle' },
						{ name: 'U_Mirror', desc: 'boolean' },
						{ name: 'U_Offset', desc: 'float' },
						{ name: 'U_Tile', desc: 'boolean' },
						{ name: 'U_Tiling', desc: 'float' },
						{ name: 'UVW_Type', desc: 'integer' },
						{ name: 'V_angle', desc: 'angle' },
						{ name: 'V_Mirror', desc: 'boolean' },
						{ name: 'V_Offset', desc: 'float' },
						{ name: 'V_Tile', desc: 'boolean' },
						{ name: 'V_Tiling', desc: 'float' },
						{ name: 'W_angle', desc: 'angle' }
					]
				}
			}
		]
	},
	{
		name: 'Constants',
		desc: 'System Constant',
		kind: CompletionItemKind.Constant,
		api: [
			{
				name: 'activegrid',
				desc: 'Active work plane'
			},
			{
				name: 'subObjectLevel',
				desc: 'active subObject level [0:Object|1:Vertex|2:Edge|3:Border|4:Face|5:Element]'
			},
			{ name: 'localTime' },
			{ name: 'currentTime' },
			{ name: 'renderer' }
		]
	},
	{
		name: 'Functions',
		desc: 'Generic functions',
		kind: CompletionItemKind.Function,
		api: [
			{ name: 'abs' },
			{ name: 'acos' },
			{ name: 'ActivateTimeWarp' },
			{ name: 'addAndWeld' },
			{ name: 'addAtmospheric' },
			{ name: 'addEaseCurve' },
			{ name: 'addKnot' },
			{ name: 'addModifier' },
			{ name: 'addModifierWithLocalData' },
			{ name: 'addMorphTarget' },
			{ name: 'addMultiplierCurve' },
			{ name: 'addNewKey' },
			{ name: 'addNewNoteKey' },
			{ name: 'addNewSpline' },
			{ name: 'addNoteTrack' },
			{ name: 'addNURBSSet' },
			{ name: 'addRollout' },
			{ name: 'addScript' },
			{ name: 'addSnippet' },
			{ name: 'AddSubRollout' },
			{ name: 'addTrackViewController' },
			{ name: 'addTranInfo' },
			{ name: 'addTransition' },
			{ name: 'affectRegionVal' },
			{ name: 'AlignPivot' },
			{ name: 'AlignToParent' },
			{ name: 'amax' },
			{ name: 'amin' },
			{ name: 'animateAll' },
			{ name: 'animateVertex' },
			{ name: 'append' },
			{ name: 'appendClip' },
			{ name: 'appendGizmo' },
			{ name: 'appendIfUnique' },
			{ name: 'appendKey' },
			{ name: 'AppendSubSelSet' },
			{ name: 'appendTrack' },
			{ name: 'appendTrackgroup' },
			{ name: 'applyOffset' },
			{ name: 'apropos' },
			{ name: 'ArbAxis' },
			{ name: 'areMtlAndRendererCompatible' },
			{ name: 'areNodesInstances' },
			{ name: 'asin' },
			{ name: 'assert_defined' },
			{ name: 'assert_equal' },
			{ name: 'assert_false' },
			{ name: 'assert_float' },
			{ name: 'assert_matrix_equal' },
			{ name: 'assert_not_equal' },
			{ name: 'assert_point3_equal' },
			{ name: 'assert_string_equal' },
			{ name: 'assert_true' },
			{ name: 'assert_undefined' },
			{ name: 'assert' },
			{ name: 'assignKey' },
			{ name: 'AssignNewName' },
			{ name: 'atan' },
			{ name: 'atan2' },
			{ name: 'attach' },
			{ name: 'attachNodesToGroup' },
			{ name: 'AttachObjects' },
			{ name: 'AverageSelVertNormal' },
			{ name: 'AxisTripodLocked' },
			{ name: 'bindKnot' },
			{ name: 'bindSpaceWarp' },
			{ name: 'BoxPickNode' },
			{ name: 'break' },
			{ name: 'breakCurve' },
			{ name: 'breakSurface' },
			{ name: 'bsearch' },
			{ name: 'buildTVFaces' },
			{ name: 'buildVCFaces' },
			{ name: 'canConvertTo' },
			{ name: 'CaptureCallStack' },
			{ name: 'ceil' },
			{ name: 'CenterObject' },
			{ name: 'CenterPivot' },
			{ name: 'CheckForSave' },
			{ name: 'ClassOf' },
			{ name: 'clear' },
			{ name: 'clearAllAppData' },
			{ name: 'clearCacheEntry' },
			{ name: 'clearControllerNewFlag' },
			{ name: 'ClearCurSelSet' },
			{ name: 'clearListener' },
			{ name: 'clearMixer' },
			{ name: 'ClearNodeSelection' },
			{ name: 'clearSelection' },
			{ name: 'ClearSubSelSets' },
			{ name: 'clearTrack' },
			{ name: 'clearTrackgroup' },
			{ name: 'clearUndoBuffer' },
			{ name: 'close_enough' },
			{ name: 'close' },
			{ name: 'CloseActiveShade' },
			{ name: 'closeCameraTracker' },
			{ name: 'closelog' },
			{ name: 'closeRolloutFloater' },
			{ name: 'closeUtility' },
			{ name: 'collapseface' },
			{ name: 'collapseStack' },
			{ name: 'colorPickerDlg' },
			{ name: 'CommitControllerValue' },
			{ name: 'compareBitmaps' },
			{ name: 'composite' },
			{ name: 'computeAnimation' },
			{ name: 'ConfigureBitmapPaths' },
			{ name: 'conformToShape' },
			{ name: 'Conjugate' },
			{ name: 'contains' },
			{ name: 'ConvertDirIDToInt' },
			{ name: 'ConvertIntToDirID' },
			{ name: 'ConvertKelvinToRGB' },
			{ name: 'convertTo' },
			{ name: 'ConvertToBody' },
			{ name: 'ConvertToBodyCutter' },
			{ name: 'ConvertToJoinBodies' },
			{ name: 'convertToMesh' },
			{ name: 'convertToNURBSCurve' },
			{ name: 'convertToNURBSSurface' },
			{ name: 'convertToPoly' },
			{ name: 'convertToSplineShape' },
			{ name: 'copy' },
			{ name: 'copyFile' },
			{ name: 'copyMixdownToBiped' },
			{ name: 'copyPasteKeys' },
			{ name: 'cos' },
			{ name: 'cosh' },
			{ name: 'CreateDialog' },
			{ name: 'createfile' },
			{ name: 'createInstance' },
			{ name: 'CreateLockKey' },
			{ name: 'createMorphObject' },
			{ name: 'createNumberedFilename' },
			{ name: 'createOLEObject' },
			{ name: 'CreatePreview' },
			{ name: 'createReaction' },
			{ name: 'crop' },
			{ name: 'cross' },
			{
				name: ['CrowdAreaDrawing', 'CrowdAreaEnd', 'CrowdAreaGetActiveTool', 'CrowdAreaGetAddMode', 'CrowdAreaGetBrushSize', 'CrowdAreaGetBrushSizePath', 'CrowdAreaGetCircleSides', 'CrowdAreaGetConstriant', 'CrowdAreaGetNode', 'CrowdAreaSetBrushSize', 'CrowdAreaSetBrushSizePath', 'CrowdAreaSetCircleSides', 'CrowdAreaSetConstriant', 'CrowdAreaSetup', 'CrowdDoRestartPathTool', 'CrowdPathDrawing', 'CrowdPathExtend', 'CrowdPathSetDefaultWidth']
			},
			{ name: 'CRTCheckAssert' },
			{ name: 'CRTCheckMemory' },
			{ name: 'CRTCorruptHeap' },
			{ name: 'CRTheapcheck' },
			{ name: 'curveLength' },
			{ name: 'DeactivateTimeWarp' },
			{ name: 'deepCopy' },
			{ name: 'defaultVCFaces' },
			{ name: 'DegToRad' },
			{ name: 'delete' },
			{ name: 'deleteAllChangeHandlers' },
			{ name: 'deleteAllCopies' },
			{ name: 'deleteAppData' },
			{ name: 'deleteAtmospheric' },
			{ name: 'deleteChangeHandler' },
			{ name: 'deleteCopy' },
			{ name: 'deleteEaseCurve' },
			{ name: 'deleteEffect' },
			{ name: 'deleteface' },
			{ name: 'deleteFile' },
			{ name: 'deleteGizmo' },
			{ name: 'deleteItem' },
			{ name: 'deleteKey' },
			{ name: 'deleteKeys' },
			{ name: 'deleteKnot' },
			{ name: 'deleteModifier' },
			{ name: 'deleteMorphTarget' },
			{ name: 'deleteMultiplierCurve' },
			{ name: 'deleteNoteKey' },
			{ name: 'deleteNoteKeys' },
			{ name: 'deleteNoteTrack' },
			{ name: 'deletePoint' },
			{ name: 'deleteReaction' },
			{ name: 'deleteScript' },
			{ name: 'deleteSnippet' },
			{ name: 'deleteSpline' },
			{ name: 'deleteTime' },
			{ name: 'deleteTrack' },
			{ name: 'deleteTracker' },
			{ name: 'deleteTrackgroup' },
			{ name: 'deleteTrackViewController' },
			{ name: 'deleteTrackViewNode' },
			{ name: 'deleteTranInfo' },
			{ name: 'deleteTransition' },
			{ name: 'deleteTransitionsTo' },
			{ name: 'DeleteTw' },
			{ name: 'deletevert' },
			{ name: 'DeleteWeight' },
			{ name: 'delINISetting' },
			{ name: 'dependsOn' },
			{ name: 'deselect' },
			{ name: 'DeselectHiddenEdges' },
			{ name: 'DeselectHiddenFaces' },
			{ name: 'deselectKey' },
			{ name: 'deselectKeys' },
			{ name: 'DeSelectNode' },
			{ name: 'DestroyDialog' },
			{ name: 'detachFaces' },
			{ name: 'detachNodesFromGroup' },
			{ name: 'detachVerts' },
			{ name: 'disableRefMsgs' },
			{ name: 'DisableSceneRedraw' },
			{ name: 'DisableStatusXYZ' },
			{ name: 'displacementToPreset' },
			{ name: 'display' },
			{ name: 'displayControlDialog' },
			{ name: 'DisplayTempPrompt' },
			{ name: 'distance' },
			{ name: 'doesDirectoryExist' },
			{ name: 'doesFileExist' },
			{ name: 'DOSCommand' },
			{ name: 'dot' },
			{ name: 'dumpMAXStrings' },
			{ name: 'edit' },
			{ name: 'EditAtmosphere' },
			{ name: 'editAtmospheric' },
			{ name: 'editEffect' },
			{ name: 'EditPolyModReadyToBridge' },
			{ name: 'ElementFileDialog' },
			{ name: 'ElementGetCustomGamma' },
			{ name: 'ElementGetMetaData' },
			{ name: 'ElementSetCustomGamma' },
			{ name: 'ElementSetMetaData' },
			{ name: 'empty' },
			{ name: 'EnableCoordCenter' },
			{ name: 'enableHardwareMaterial' },
			{ name: 'enableORTs' },
			{ name: 'EnableRefCoordSys' },
			{ name: 'enableRefMsgs' },
			{ name: 'EnableSceneRedraw' },
			{ name: 'EnableShowEndRes' },
			{ name: 'EnableStatusXYZ' },
			{ name: 'EnableSubObjSel' },
			{ name: 'enableUndo' },
			{ name: 'encryptFile' },
			{ name: 'encryptScript' },
			{ name: 'enlargeBy' },
			{ name: 'enumerateFiles' },
			{ name: 'eof' },
			{ name: 'eulerToQuat' },
			{ name: 'ExclusionListDlg' },
			{ name: 'execute' },
			{ name: 'executeScriptFile' },
			{ name: 'exp' },
			{ name: 'expandToInclude' },
			{ name: 'explodeGroup' },
			{ name: 'exportFile' },
			{ name: 'extrudeface' },
			{ name: 'fclose' },
			{ name: 'FencePickNode' },
			{ name: 'fetchMaxFile' },
			{ name: 'fflush' },
			{ name: 'filein' },
			{ name: 'filenameFromPath' },
			{ name: 'FileOpenMatLib' },
			{ name: 'filepos' },
			{ name: 'FileSaveAsMatLib' },
			{ name: 'FileSaveMatLib' },
			{ name: 'FilterString' },
			{ name: 'findItem' },
			{ name: 'FindLengthSegAndParam' },
			{ name: 'FindPathSegAndParam' },
			{ name: 'findPattern' },
			{ name: 'findString' },
			{ name: 'flagChanged' },
			{ name: 'flagForeground' },
			{ name: 'FlashNodes' },
			{ name: 'floor' },
			{ name: 'flush' },
			{ name: 'flushlog' },
			{ name: 'fopen' },
			{ name: 'ForceCompleteRedraw' },
			{ name: 'forceReloadBitmapFile' },
			{ name: 'Format' },
			{ name: 'formattedPrint' },
			{ name: 'fractalNoise' },
			{ name: 'free' },
			{ name: 'freeSceneBitmaps' },
			{ name: 'freeze' },
			{ name: 'freezeSelection' },
			{ name: 'fseek' },
			{ name: 'ftell' },
			{ name: 'GameExporterOpenDialog' },
			{ name: 'GameExporterShown' },
			{ name: 'gc', desc: 'Garbage collector' },
			{ name: 'genClassID' },
			{ name: 'genGUID' },
			{ name: 'GepCanMakeRamp' },
			{ name: 'GepGetDisplayType' },
			{ name: 'GepMakeRamp' },
			{ name: 'getActiveCamera' },
			{ name: 'GetActiveShadeBitmap' },
			{ name: 'getAfterORT' },
			{ name: 'getAnimByHandle' },
			{ name: 'getAnimPointer' },
			{ name: 'getAppData' },
			{ name: 'getAtmospheric' },
			{ name: 'getAvailableSubstanceGraphsAndOutputsFromPackage' },
			{ name: 'GetBackGround' },
			{ name: 'GetBackGroundController' },
			{ name: 'getBeforeORT' },
			{ name: 'getBitmapInfo' },
			{ name: 'getBitmapOpenFileName' },
			{ name: 'getBitmapSaveFileName' },
			{ name: 'GetBkgFrameNum' },
			{ name: 'GetBkgImageAnimate' },
			{ name: 'GetBkgImageAspect' },
			{ name: 'GetBkgORType' },
			{ name: 'GetBkgRangeVal' },
			{ name: 'GetBkgStartTime' },
			{ name: 'GetBkgSyncFrame' },
			{ name: 'getChannel' },
			{ name: 'getChannelAsMask' },
			{ name: 'getClassInstances' },
			{ name: 'getClassName' },
			{ name: 'getClip' },
			{ name: 'getclipboardBitmap' },
			{ name: 'getclipboardText' },
			{ name: 'GetCommandPanelTaskMode' },
			{ name: 'GetCoordCenter' },
			{ name: 'getCopy' },
			{ name: 'getCoreInterfaces' },
			{ name: 'getCPTM' },
			{ name: 'GetCrossing' },
			{ name: 'getCurNameSelSet' },
			{ name: 'getCurrentException' },
			{ name: 'getCurrentExceptionCallStack' },
			{ name: 'getCurrentExceptionStackTrace' },
			{ name: 'getCurrentSelection' },
			{ name: 'GetCurrentThreadId' },
			{ name: 'getCursorPos' },
			{ name: 'GetCVertMode' },
			{ name: 'getD3DMeshAllocated' },
			{ name: 'getD3DMeshAllocatedFaces' },
			{ name: 'getD3DTimer' },
			{ name: 'GetDefaultUIColor' },
			{ name: 'GetDialogBitmap' },
			{ name: 'GetDialogPos' },
			{ name: 'GetDialogSize' },
			{ name: 'GetDictKeys' },
			{ name: 'GetDictKeyType' },
			{ name: 'GetDictValue' },
			{ name: 'getDimensions' },
			{ name: 'GetDir' },
			{ name: 'getDirectories' },
			{ name: 'getDisplacementMapping' },
			{ name: 'GetDisplayFilter' },
			{ name: 'GetDisplayFilterName' },
			{ name: 'getEaseCurve' },
			{ name: 'getEdgeSelection' },
			{ name: 'getEdgeVis' },
			{ name: 'getEffect' },
			{ name: 'GetEnableEditFbxSetting' },
			{ name: 'GetEnableProfiling' },
			{ name: 'GetEulerMatAngleRatio' },
			{ name: 'GetEulerQuatAngleRatio' },
			{ name: 'getface' },
			{ name: 'getFaceMatID' },
			{ name: 'getFaceNormal' },
			{ name: 'getFaceSelection' },
			{ name: 'getFaceSmoothGroup' },
			{ name: 'getFileAttribute' },
			{ name: 'getFileCreateDate' },
			{ name: 'getFileModDate' },
			{ name: 'getFilenameFile' },
			{ name: 'getFilenamePath' },
			{ name: 'getFilenameType' },
			{ name: 'getFiles' },
			{ name: 'getFileSecurityInfo' },
			{ name: 'getFileVersion' },
			{ name: 'getFilter' },
			{ name: 'getGizmo' },
			{ name: 'GetGridMajorLines' },
			{ name: 'GetGridSpacing' },
			{ name: 'getHandleByAnim' },
			{ name: 'getHashValue' },
			{ name: 'getHashValue' },
			{ name: 'getHSVMarkerPos' },
			{ name: 'getIconAsBitmap' },
			{ name: 'GetImageBlurMultController' },
			{ name: 'getIndexedPixels' },
			{ name: 'getIndexedProperty' },
			{ name: 'getInheritanceFlags' },
			{ name: 'GetInheritVisibility' },
			{ name: 'getINISetting' },
			{ name: 'getInterface' },
			{ name: 'getInterfaces' },
			{ name: 'getInVec' },
			{ name: 'getKBChar' },
			{ name: 'getKBLine' },
			{ name: 'getKBPoint' },
			{ name: 'getKBValue' },
			{ name: 'getKeyIndex' },
			{ name: 'GetKeyStepsPos' },
			{ name: 'GetKeyStepsRot' },
			{ name: 'GetKeyStepsScale' },
			{ name: 'GetKeyStepsSelOnly' },
			{ name: 'GetKeyStepsUseTrans' },
			{ name: 'getKeyTime' },
			{ name: 'getKnotPoint' },
			{ name: 'getKnotSelection' },
			{ name: 'getKnotType' },
			{ name: 'getLastMergedNodes' },
			{ name: 'getLastRenderedImage' },
			{ name: 'getListenerSel' },
			{ name: 'getListenerSelText' },
			{ name: 'getLocalTime' },
			{ name: 'getMaterialID' },
			{ name: 'GetMatLibFileName' },
			{ name: 'GetMaxAssertDisplay' },
			{ name: 'GetMaxAssertLogFileName' },
			{ name: 'getMaxExtensionVersion' },
			{ name: 'getMAXFileAssetMetadata' },
			{ name: 'getMAXFileObjectNames' },
			{ name: 'getMaxFileVersionData' },
			{ name: 'GetMAXIniFile' },
			{ name: 'getMAXOpenFileName' },
			{ name: 'getMAXSaveFileName' },
			{ name: 'getMAXWindowPos' },
			{ name: 'getMAXWindowSize' },
			{ name: 'getMeditMaterial' },
			{ name: 'GetMixerInterval' },
			{ name: 'getMKKey' },
			{ name: 'getMKKeyIndex' },
			{ name: 'getMKTargetNames' },
			{ name: 'getMKTargetWeights' },
			{ name: 'getMKWeight' },
			{ name: 'getModContextBBox' },
			{ name: 'getModContextBBoxMax' },
			{ name: 'getModContextBBoxMin' },
			{ name: 'getModContextTM' },
			{ name: 'getMTLMEditFlags' },
			{ name: 'getMTLMeditObjType' },
			{ name: 'getMTLMeditTiling' },
			{ name: 'getMultiPainterInstanceCount' },
			{ name: 'getMultiPainterInstanceTM' },
			{ name: 'getMultiplierCurve' },
			{ name: 'getMultiplierValue' },
			{ name: 'GetNamedSelSetItem' },
			{ name: 'GetNamedSelSetItemCount' },
			{ name: 'GetNamedSelSetName' },
			{ name: 'getNodeBBox' },
			{ name: 'getNodeByName' },
			{ name: 'GetNodes' },
			{ name: 'getNodeTM' },
			{ name: 'getnormal' },
			{ name: 'getNoteKeyIndex' },
			{ name: 'getNoteKeyTime' },
			{ name: 'getNoteTrack' },
			{ name: 'GetNumAxis' },
			{ name: 'GetNumberDisplayFilters' },
			{ name: 'GetNumberSelectFilters' },
			{ name: 'getNumCPVVerts' },
			{ name: 'getNumFaces' },
			{ name: 'GetNumNamedSelSets' },
			{ name: 'getNumSubMtls' },
			{ name: 'getNumSubTexmaps' },
			{ name: 'getNumTVerts' },
			{ name: 'getNumVerts' },
			{ name: 'getNURBSSelection' },
			{ name: 'getNURBSSet' },
			{ name: 'getOpenFileName' },
			{ name: 'GetOptimizeDependentNotificationsStatistics' },
			{ name: 'GetOrgTimeAtWarpedTime' },
			{ name: 'getOutVec' },
			{ name: 'GetPatchSteps' },
			{ name: 'getPixels' },
			{ name: 'getPointController' },
			{ name: 'getPointControllers' },
			{ name: 'getPointPos' },
			{ name: 'GetPolygonCount' },
			{ name: 'GetPosTaskWeight' },
			{ name: 'getProgressCancel' },
			{ name: 'getProperty' },
			{ name: 'getPropertyController' },
			{ name: 'getPropNames' },
			{ name: 'getPropNames' },
			{ name: 'getQtTextExtent' },
			{ name: 'GetQuietMode' },
			{ name: 'getReactionCount' },
			{ name: 'getReactionFalloff' },
			{ name: 'getReactionInfluence' },
			{ name: 'getReactionName' },
			{ name: 'getReactionState' },
			{ name: 'getReactionStrength' },
			{ name: 'getReactionValue' },
			{ name: 'GetRefCoordSys' },
			{ name: 'GetRendApertureWidth' },
			{ name: 'GetRenderType' },
			{ name: 'GetRendImageAspect' },
			{ name: 'GetRotTaskWeight' },
			{ name: 'getSaveFileName' },
			{ name: 'getSavePath' },
			{ name: 'getSaveRequired' },
			{ name: 'GetScreenScaleFactor' },
			{ name: 'getScriptIndex' },
			{ name: 'getSegLengths' },
			{ name: 'getSegmentType' },
			{ name: 'getSegSelection' },
			{ name: 'getSelectedPts' },
			{ name: 'getSelectedReactionNum' },
			{ name: 'GetSelectFilter' },
			{ name: 'GetSelectFilterName' },
			{ name: 'getSelectionLevel' },
			{ name: 'GetShadeCVerts' },
			{ name: 'getSimilarNodes' },
			{ name: 'GetSnapMode' },
			{ name: 'GetSnapState' },
			{ name: 'getSnippetIndex' },
			{ name: 'getSourceFileLine' },
			{ name: 'getSourceFileName' },
			{ name: 'getSourceFileOffSet' },
			{ name: 'getSplineSelection' },
			{ name: 'getSplitMesh' },
			{ name: 'getSubAnim' },
			{ name: 'getSubAnimName' },
			{ name: 'getSubAnimNames' },
			{ name: 'getSubdivisionDisplacement' },
			{ name: 'getSubMtl' },
			{ name: 'getSubMtlSlotName' },
			{ name: 'getSubTexmap' },
			{ name: 'getSubTexmapSlotName' },
			{ name: 'GetTaskAxisState' },
			{ name: 'getTextExtent' },
			{ name: 'getThisScriptFilename' },
			{ name: 'getTimeRange' },
			{ name: 'GetTMController' },
			{ name: 'GetToolBtnState' },
			{ name: 'getTrack' },
			{ name: 'getTracker' },
			{ name: 'getTrackgroup' },
			{ name: 'GetTrackgroupInterval' },
			{ name: 'GetTrackInterval' },
			{ name: 'GetTrajectoryON' },
			{ name: 'getTransformAxis' },
			{ name: 'getTransformLockFlags' },
			{ name: 'GetTriMeshFaceCount' },
			{ name: 'gettvert' },
			{ name: 'getTVFace' },
			{ name: 'GetTwOrgTime' },
			{ name: 'GetTwWarpTime' },
			{ name: 'GetUIColor' },
			{ name: 'GetUIScaleFactor' },
			{ name: 'getUniversalTime' },
			{ name: 'GetUseEnvironmentMap' },
			{ name: 'getUserProp' },
			{ name: 'getUserPropBuffer' },
			{ name: 'getValue' },
			{ name: 'getVCFace' },
			{ name: 'getVert' },
			{ name: 'getvertcolor' },
			{ name: 'getVertSelection' },
			{ name: 'getViewFOV' },
			{ name: 'getViewSize' },
			{ name: 'getViewTM' },
			{ name: 'GetVPortBGColor' },
			{ name: 'GetWarpedTimeAtOrgTime' },
			{ name: 'GetWeightAtTime' },
			{ name: 'getXYZControllers' },
			{ name: 'globalInpoint' },
			{ name: 'globalOutpoint' },
			{ name: 'globalToLocal' },
			{ name: 'globalToScaledLocal' },
			{ name: 'go' },
			{ name: 'gotoFrame' },
			{ name: 'group' },
			{ name: 'hasCurrentExceptionCallStack' },
			{ name: 'hasCurrentExceptionStackTrace' },
			{ name: 'HasDictValue' },
			{ name: 'hasINISetting' },
			{ name: 'hasNoteTracks' },
			{ name: 'hasProperty' },
			{ name: 'hasProperty' },
			{ name: 'heapCheck' },
			{ name: 'Help' },
			{ name: 'HiddenDOSCommand' },
			{ name: 'hide' },
			{ name: 'hideSelectedSegments' },
			{ name: 'hideSelectedSplines' },
			{ name: 'hideSelectedVerts' },
			{ name: 'HitByNameDlg' },
			{ name: 'holdMaxFile' },
			{ name: 'Identity' },
			{ name: 'IdleAreaAddArea' },
			{ name: 'IdleAreaCreateCircle' },
			{ name: 'IdleAreaCreateFreeform' },
			{ name: 'IdleAreaCreateRectangle' },
			{ name: 'IdleAreaSubtractArea' },
			{ name: 'importFile' },
			{ name: 'include' },
			{ name: 'InitializeTimeWarp' },
			{ name: 'insertItem' },
			{ name: 'insertPoint' },
			{ name: 'insertSnippet' },
			{ name: 'insertTime' },
			{ name: 'insertTrack' },
			{ name: 'insertTrackgroup' },
			{ name: 'InsertWarpAtOrgTime' },
			{ name: 'instance' },
			{ name: 'instanceReplace' },
			{ name: 'interpBezier3D' },
			{ name: 'interpCurve3D' },
			{ name: 'intersectRay' },
			{ name: 'IntersectRayEx' },
			{ name: 'intersectRayScene' },
			{ name: 'intersects' },
			{ name: 'InvalidateAllBackgrounds' },
			{ name: 'invalidateTM' },
			{ name: 'invalidateTreeTM' },
			{ name: 'invalidateWS' },
			{ name: 'Inverse' },
			{ name: 'InverseHighPrecision' },
			{ name: 'invert' },
			{ name: 'is64bitApplication' },
			{ name: 'isActive' },
			{ name: 'isAnimated' },
			{ name: 'isAnimPlaying' },
			{ name: 'IsBoneOnly' },
			{ name: 'isClosed' },
			{ name: 'isCompatible' },
			{ name: 'isController' },
			{ name: 'isController' },
			{ name: 'IsCPEdgeOnInView' },
			{ name: 'isCreatingObject' },
			{ name: 'isDeformable' },
			{ name: 'isDeleted' },
			{ name: 'IsDialogVisible' },
			{ name: 'isDirectoryWriteable' },
			{ name: 'isEmpty' },
			{ name: 'isGroupHead' },
			{ name: 'isGroupMember' },
			{ name: 'isIdentity' },
			{ name: 'isKeySelected' },
			{ name: 'isKindOf' },
			{ name: 'isMaxFile' },
			{ name: 'IsModuleLoaded' },
			{ name: 'isMSCustAttrib' },
			{ name: 'isMSCustAttrib' },
			{ name: 'isMSCustAttribClass' },
			{ name: 'isMSCustAttribClass' },
			{ name: 'isMSPlugin' },
			{ name: 'isMSPlugin' },
			{ name: 'isMSPluginClass' },
			{ name: 'isMSPluginClass' },
			{ name: 'IsNetServer' },
			{ name: 'IsNetworkRenderServer' },
			{ name: 'isOpenGroupHead' },
			{ name: 'isOpenGroupMember' },
			{ name: 'isParticleSystem' },
			{ name: 'IsPointSelected' },
			{ name: 'isProperty' },
			{ name: 'isPropertyAnimatable' },
			{ name: 'isReadOnly' },
			{ name: 'IsSceneRedrawDisabled' },
			{ name: 'isSceneXRefNode' },
			{ name: 'isSelectionFrozen' },
			{ name: 'IsShapeObject' },
			{ name: 'isSpace' },
			{ name: 'IsSpaceWarpValid' },
			{ name: 'isStruct' },
			{ name: 'isStruct' },
			{ name: 'isStructDef' },
			{ name: 'isStructDef' },
			{ name: 'IsSubSelEnabled' },
			{ name: 'IsSurfaceUVClosed' },
			{ name: 'IsTimeWarpActive' },
			{ name: 'IsUndoDisabled' },
			{ name: 'IsValidMorpherMod' },
			{ name: 'isValidNode' },
			{ name: 'isValidObj' },
			{ name: 'isValidValue' },
			{ name: 'isWorldSpaceObject' },
			{ name: 'join' },
			{ name: 'joinCurves' },
			{ name: 'joinSurfaces' },
			{ name: 'length' },
			{ name: 'lengthInterp' },
			{ name: 'lengthTangent' },
			{ name: 'lengthToPathParam' },
			{ name: 'LnDif' },
			{ name: 'LoadDefaultMatLib' },
			{ name: 'loadDllsFromDir' },
			{ name: 'loadfile' },
			{ name: 'loadFrames' },
			{ name: 'loadMaterialLibrary' },
			{ name: 'loadMaxAnimationFile' },
			{ name: 'loadMaxFile' },
			{ name: 'loadMixFile' },
			{ name: 'loadMoFlowFile' },
			{ name: 'loadPicture' },
			{ name: 'loadSnippetFiles' },
			{ name: 'loadTempMaterialLibrary' },
			{ name: 'locals' },
			{ name: 'localToGlobal' },
			{ name: 'localToScaledLocal' },
			{ name: 'LockAxisTripods' },
			{ name: 'log' },
			{ name: 'log10' },
			{ name: 'LogN' },
			{ name: 'makeCube' },
			{ name: 'makeDir' },
			{ name: 'makeIndependent' },
			{ name: 'MakeNURBSConeSurface' },
			{ name: 'MakeNURBSCylinderSurface' },
			{ name: 'MakeNURBSLatheSurface' },
			{ name: 'MakeNURBSSphereSurface' },
			{ name: 'makeUniqueArray' },
			{ name: 'mapKeys' },
			{ name: 'MappedPrimitive' },
			{ name: 'mapPoint' },
			{ name: 'mapScreenToView' },
			{ name: 'mapScreenToWorldRay' },
			{ name: 'MatchPattern' },
			{ name: 'MaterialBrowseDlg' },
			{ name: 'materialID' },
			{ name: 'MatrixFromNormal' },
			{ name: 'maxVersion' },
			{ name: 'maz' },
			{ name: 'measureOffset' },
			{ name: 'merge' },
			{ name: 'mergeMaxFile' },
			{ name: 'mesh_weld_overlapping_vertices' },
			{ name: 'messageBox' },
			{ name: 'MirrorIKConstraints' },
			{ name: 'mixdown' },
			{ name: 'mod' },
			{ name: 'mouseTrack' },
			{ name: 'move' },
			{ name: 'moveClip' },
			{ name: 'moveKey' },
			{ name: 'moveKeys' },
			{ name: 'MXS_IsSceneEmptyForNodePick' },
			{ name: 'NamedSelSetListChanged' },
			{ name: 'nearestPathParam' },
			{ name: 'NetworkRTT' },
			{ name: 'newRolloutFloater' },
			{ name: 'newScript' },
			{ name: 'newSnippet' },
			{ name: 'NodeColorPicker' },
			{ name: 'nodeGetBoundingBox' },
			{ name: 'nodeLocalBoundingBox' },
			{ name: 'noise3' },
			{ name: 'noise4' },
			{ name: 'normalize' },
			{ name: 'normtime' },
			{ name: 'notifyDependents' },
			{ name: 'numCopies' },
			{ name: 'numEaseCurves' },
			{ name: 'numKeys' },
			{ name: 'numKnots' },
			{ name: 'NumMapsUsed' },
			{ name: 'numMultiplierCurves' },
			{ name: 'numNoteTracks' },
			{ name: 'numPoints' },
			{ name: 'numSegments' },
			{ name: 'numSelKeys' },
			{ name: 'numSplines' },
			{ name: 'NumSurfaces' },
			{ name: 'NURBSExtrudeNode' },
			{ name: 'NURBSLatheNode' },
			{ name: 'NURBSNode' },
			{ name: 'OBJPaintGetSetting' },
			{ name: 'OBJPaintSetSetting' },
			{ name: 'OkMtlForScene' },
			{ name: 'OKToBindToNode' },
			{ name: 'okToCreate' },
			{ name: 'open' },
			{ name: 'openBitMap' },
			{ name: 'openCTBitMap' },
			{ name: 'openEncryptedFile' },
			{ name: 'OpenFbxSetting' },
			{ name: 'openfile' },
			{ name: 'openlog' },
			{ name: 'openUtility' },
			{ name: 'optimizeClipTransition' },
			{ name: 'optimizeTransitions' },
			{ name: 'Orthogonalize' },
			{ name: 'OSnap' },
			{ name: 'particleAge' },
			{ name: 'particleCenter' },
			{ name: 'particleCount' },
			{ name: 'particleLife' },
			{ name: 'particlePos' },
			{ name: 'particleSize' },
			{ name: 'particleSize2' },
			{ name: 'particleVelocity' },
			{ name: 'pasteBitmap' },
			{ name: 'pathInterp' },
			{ name: 'pathIsNetworkPath' },
			{ name: 'pathTangent' },
			{ name: 'pathToLengthParam' },
			{ name: 'PBEndTrack' },
			{ name: 'PBStartTrack' },
			{ name: 'PBTrackGetToolActive' },
			{ name: 'peekToken' },
			{ name: 'perspectiveMatch' },
			{ name: 'pickAnimatable' },
			{ name: 'pickObject' },
			{ name: 'pickOffsetDistance' },
			{ name: 'pickPoint' },
			{ name: 'playAnimation' },
			{ name: 'PointSelection' },
			{ name: 'PopPrompt' },
			{ name: 'PopQtTranslationFromFile' },
			{ name: 'PopupMenu' },
			{ name: 'pow' },
			{ name: 'PreRotate' },
			{ name: 'PreRotateX' },
			{ name: 'PreRotateY' },
			{ name: 'PreRotateZ' },
			{ name: 'PreScale' },
			{ name: 'PreTranslate' },
			{ name: 'Print' },
			{ name: 'printstack' },
			{ name: 'progressEnd' },
			{ name: 'progressStart' },
			{ name: 'progressUpdate' },
			{ name: 'PushPrompt' },
			{ name: 'PushQtTranslationFromFile' },
			{ name: 'PutDictValue' },
			{ name: 'QCompA' },
			{ name: 'qorthog' },
			{ name: 'qsort' },
			{ name: 'QtUISample' },
			{ name: 'quatArrayToEulerArray' },
			{ name: 'quatToEuler' },
			{ name: 'quatToEuler2' },
			{ name: 'queryBox' },
			{ name: 'quitMax' },
			{ name: 'radToDeg' },
			{ name: 'RAMPlayer' },
			{ name: 'random' },
			{ name: 'reactTo' },
			{ name: 'ReadByte' },
			{ name: 'readChar' },
			{ name: 'readChars' },
			{ name: 'readDelimitedString' },
			{ name: 'ReadDouble' },
			{ name: 'ReadDoubleAsFloat' },
			{ name: 'readExpr' },
			{ name: 'ReadFloat' },
			{ name: 'readLine' },
			{ name: 'ReadLong' },
			{ name: 'ReadLongLong' },
			{ name: 'ReadShort' },
			{ name: 'ReadString' },
			{ name: 'readToken' },
			{ name: 'readValue' },
			{ name: 'rectify' },
			{ name: 'redrawViews' },
			{ name: 'reduceKeys' },
			{ name: 'reference' },
			{ name: 'referenceReplace' },
			{ name: 'refineSegment' },
			{ name: 'registerDisplayFilterCallback' },
			{ name: 'registerFileChangedFunction' },
			{ name: 'registerOLEInterface' },
			{ name: 'registerRedrawViewsCallback' },
			{ name: 'registerRightClickMenu' },
			{ name: 'registerSelectFilterCallback' },
			{ name: 'registerTimeCallback' },
			{ name: 'registerViewWindow' },
			{ name: 'releaseAllOLEObjects' },
			{ name: 'releaseOLEObject' },
			{ name: 'RemoveDictValue' },
			{ name: 'removeRollout' },
			{ name: 'RemoveSubRollout' },
			{ name: 'RemoveTempPrompt' },
			{ name: 'renameFile' },
			{ name: 'render' },
			{ name: 'renderMap' },
			{ name: 'replace_CRLF_with_LF' },
			{ name: 'replace_LF_with_CRLF' },
			{ name: 'replace' },
			{ name: 'replaceInstances' },
			{ name: 'ReplacePrompt' },
			{ name: 'resample' },
			{ name: 'RescaleWorldUnits' },
			{ name: 'reset' },
			{ name: 'resetLattice' },
			{ name: 'resetLengthInterp' },
			{ name: 'resetMaxFile' },
			{ name: 'ResetPivot' },
			{ name: 'ResetScale' },
			{ name: 'resetShape' },
			{ name: 'ResetTransform' },
			{ name: 'ResetXForm' },
			{ name: 'resetZoom' },
			{ name: 'RestoreControllerValue' },
			{ name: 'ResumeEditing' },
			{ name: 'reverse' },
			{ name: 'reverseTime' },
			{ name: 'RevitImporterGetOption' },
			{ name: 'RevitImporterSetOption' },
			{ name: 'Rotate' },
			{ name: 'RotateX' },
			{ name: 'RotateXMatrix' },
			{ name: 'RotateY' },
			{ name: 'RotateYMatrix' },
			{ name: 'RotateYPRMatrix' },
			{ name: 'RotateZ' },
			{ name: 'RotateZMatrix' },
			{ name: 'save' },
			{ name: 'saveMaterialLibrary' },
			{ name: 'saveMaxFile' },
			{ name: 'saveMixFile' },
			{ name: 'saveMoFlowFile' },
			{ name: 'saveNodes' },
			{ name: 'saveTempMaterialLibrary' },
			{ name: 'scale' },
			{ name: 'scaleClip' },
			{ name: 'scaledLocalToGlobal' },
			{ name: 'scaledLocalToLocal' },
			{ name: 'ScaleMatrix' },
			{ name: 'scaleTime' },
			{ name: 'scanForNewPlugins' },
			{ name: 'seed' },
			{ name: 'seek' },
			{ name: 'select' },
			{ name: 'selectBitMap' },
			{ name: 'selectByName' },
			{ name: 'selectCTBitMap' },
			{ name: 'selectKey' },
			{ name: 'selectKeys' },
			{ name: 'selectmore' },
			{ name: 'SelectSaveBitMap' },
			{ name: 'setActive' },
			{ name: 'setAfterORT' },
			{ name: 'setAppData' },
			{ name: 'setArrowCursor' },
			{ name: 'setAsBackground' },
			{ name: 'setAtmospheric' },
			{ name: 'SetBackGround' },
			{ name: 'SetBackGroundController' },
			{ name: 'setBeforeORT' },
			{ name: 'SetBkgFrameRange' },
			{ name: 'SetBkgImageAnimate' },
			{ name: 'SetBkgImageAspect' },
			{ name: 'SetBkgORType' },
			{ name: 'SetBkgStartTime' },
			{ name: 'SetBkgSyncFrame' },
			{ name: 'setCacheEntry' },
			{ name: 'setclipboardBitmap' },
			{ name: 'setclipboardText' },
			{ name: 'SetCommandPanelTaskMode' },
			{ name: 'SetControllerValue' },
			{ name: 'SetCoordCenter' },
			{ name: 'SetCurNamedSelSet' },
			{ name: 'SetCVertMode' },
			{ name: 'setD3DMeshCacheSize' },
			{ name: 'SetDialogBitmap' },
			{ name: 'SetDialogPos' },
			{ name: 'SetDictValue' },
			{ name: 'setDimensions' },
			{ name: 'SetDir' },
			{ name: 'setDisplacementMapping' },
			{ name: 'SetDisplayFilter' },
			{ name: 'setEdgeSelection' },
			{ name: 'setEdgeVis' },
			{ name: 'setEffect' },
			{ name: 'SetEnableProfiling' },
			{ name: 'setface' },
			{ name: 'setFaceMatID' },
			{ name: 'setfacenormal' },
			{ name: 'setFaceSelection' },
			{ name: 'setFaceSmoothGroup' },
			{ name: 'setFade' },
			{ name: 'setFileAttribute' },
			{ name: 'setFilter' },
			{ name: 'setFirstKnot' },
			{ name: 'setFirstSpline' },
			{ name: 'setFocus' },
			{ name: 'SetGridMajorLines' },
			{ name: 'SetGridSpacing' },
			{ name: 'setGroupHead' },
			{ name: 'setGroupMember' },
			{ name: 'setGroupOpen' },
			{ name: 'SetImageBlurMultController' },
			{ name: 'SetImageBlurMultiplier' },
			{ name: 'setIndexedPixels' },
			{ name: 'setIndexedProperty' },
			{ name: 'setInheritanceFlags' },
			{ name: 'SetInheritVisibility' },
			{ name: 'setIniForceUTF16Default' },
			{ name: 'setINISetting' },
			{ name: 'setInVec' },
			{ name: 'SetKeyStepsPos' },
			{ name: 'SetKeyStepsRot' },
			{ name: 'SetKeyStepsScale' },
			{ name: 'SetKeyStepsSelOnly' },
			{ name: 'SetKeyStepsUseTrans' },
			{ name: 'setKnotPoint' },
			{ name: 'setKnotSelection' },
			{ name: 'setKnotType' },
			{ name: 'setListenerSel' },
			{ name: 'setListenerSelText' },
			{ name: 'setMaterialID' },
			{ name: 'SetMaxAssertDisplay' },
			{ name: 'SetMaxAssertLogFileName' },
			{ name: 'setMAXFileAssetMetadata' },
			{ name: 'setMeditMaterial' },
			{ name: 'setMesh' },
			{ name: 'setMKTime' },
			{ name: 'setMKWeight' },
			{ name: 'setModContextBBox' },
			{ name: 'setModContextTM' },
			{ name: 'setMorphTarget' },
			{ name: 'setMorphTargetName' },
			{ name: 'SetMotBlur' },
			{ name: 'setMTLMEditFlags' },
			{ name: 'setMTLMeditObjType' },
			{ name: 'setMTLMeditTiling' },
			{ name: 'setMultiPainterInstanceTM' },
			{ name: 'setNeedsRedraw' },
			{ name: 'SetNodes' },
			{ name: 'setNumberThreads' },
			{ name: 'setNumCPVVerts' },
			{ name: 'setNumFaces' },
			{ name: 'setNumTVerts' },
			{ name: 'setNumVerts' },
			{ name: 'setOpenSceneScript' },
			{ name: 'setOutVec' },
			{ name: 'SetPatchSteps' },
			{ name: 'setPixels' },
			{ name: 'SetPosTaskWeight' },
			{ name: 'setProgressCancel' },
			{ name: 'setProperty' },
			{ name: 'setPropertyController' },
			{ name: 'SetQuietMode' },
			{ name: 'setReactionFalloff' },
			{ name: 'setReactionInfluence' },
			{ name: 'setReactionName' },
			{ name: 'setReactionState' },
			{ name: 'setReactionStrength' },
			{ name: 'setReactionValue' },
			{ name: 'SetRefCoordSys' },
			{ name: 'SetRendApertureWidth' },
			{ name: 'SetRenderable' },
			{ name: 'setRenderApproximation' },
			{ name: 'SetRenderID' },
			{ name: 'SetRenderType' },
			{ name: 'SetRotTaskWeight' },
			{ name: 'setSaveRequired' },
			{ name: 'setSaveSceneScript' },
			{ name: 'setSegmentType' },
			{ name: 'setSegSelection' },
			{ name: 'setSelectedPts' },
			{ name: 'SetSelectFilter' },
			{ name: 'setSelectionLevel' },
			{ name: 'SetShadeCVerts' },
			{ name: 'SetSilentMode' },
			{ name: 'setSize' },
			{ name: 'setSoftEdge' },
			{ name: 'setSplineSelection' },
			{ name: 'setSplitMesh' },
			{ name: 'SetStatusXYZ' },
			{ name: 'setStruct' },
			{ name: 'setSubdivisionDisplacement' },
			{ name: 'setSubMtl' },
			{ name: 'setSubTexmap' },
			{ name: 'setSurfaceDisplay' },
			{ name: 'SetSysCur' },
			{ name: 'SetTaskAxisState' },
			{ name: 'setTimeRange' },
			{ name: 'SetToolBtnState' },
			{ name: 'SetTrajectoryON' },
			{ name: 'setTransformLockFlags' },
			{ name: 'settvert' },
			{ name: 'setTVFace' },
			{ name: 'SetTwOrgTime' },
			{ name: 'SetTwWarpTime' },
			{ name: 'SetUIColor' },
			{ name: 'setupEvents' },
			{ name: 'setUseOldD3DCache' },
			{ name: 'setUserProp' },
			{ name: 'setUserPropBuffer' },
			{ name: 'setVCFace' },
			{ name: 'setVert' },
			{ name: 'setVertColor' },
			{ name: 'setVertSelection' },
			{ name: 'setViewApproximation' },
			{ name: 'SetVPortBGColor' },
			{ name: 'setVRaySilentMode' },
			{ name: 'setWaitCursor' },
			{ name: 'SetWeight' },
			{ name: 'SetWeightAtTime' },
			{ name: 'SetWeightTime' },
			{ name: 'ShellLaunch' },
			{ name: 'show' },
			{ name: 'ShowAllActiveXControls' },
			{ name: 'showClass' },
			{ name: 'ShowDialog' },
			{ name: 'showEvents' },
			{ name: 'showHWTextureMap' },
			{ name: 'showInterface' },
			{ name: 'showInterfaces' },
			{ name: 'showMethods' },
			{ name: 'showProperties' },
			{ name: 'showSource' },
			{ name: 'showTextureMap' },
			{ name: 'showTrack' },
			{ name: 'SilentMode' },
			{ name: 'sin' },
			{ name: 'sinh' },
			{ name: 'skipSpace' },
			{ name: 'skipToNextLine' },
			{ name: 'skipToString' },
			{ name: 'sleep' },
			{ name: 'Slerp' },
			{ name: 'snapshot' },
			{ name: 'snapshotAsMesh' },
			{ name: 'sort' },
			{ name: 'sortKeys' },
			{ name: 'sortNoteKeys' },
			{ name: 'sqrt' },
			{ name: 'Squad' },
			{ name: 'squadrev' },
			{ name: 'stack' },
			{ name: 'startObjectCreation' },
			{ name: 'startTool' },
			{ name: 'stopAnimation' },
			{ name: 'StopCreating' },
			{ name: 'stopTool' },
			{ name: 'stricmp' },
			{ name: 'subdivideSegment' },
			{ name: 'substituteString' },
			{ name: 'substring' },
			{ name: 'supportsTimeOperations' },
			{ name: 'SuspendEditing' },
			{ name: 'swap' },
			{ name: 'tan' },
			{ name: 'tangentBezier3D' },
			{ name: 'tangentCurve3D' },
			{ name: 'tanh' },
			{ name: 'test_safearray' },
			{ name: 'thawSelection' },
			{ name: 'threads' },
			{ name: 'timeGetTime' },
			{ name: 'timeStamp' },
			{ name: 'toLower' },
			{ name: 'toUpper' },
			{ name: 'transform' },
			{ name: 'Translate' },
			{ name: 'TransMatrix' },
			{ name: 'transpose' },
			{ name: 'trimExtend' },
			{ name: 'trimLeft' },
			{ name: 'trimRight' },
			{ name: 'turbulence' },
			{ name: 'unbindKnot' },
			{ name: 'unDisplay' },
			{ name: 'unfreeze' },
			{ name: 'ungroup' },
			{ name: 'unhide' },
			{ name: 'unhideSegments' },
			{ name: 'uniqueName' },
			{ name: 'unmaz' },
			{ name: 'unregisterAllRightClickMenus' },
			{ name: 'unregisterDisplayFilterCallback' },
			{ name: 'unregisterRedrawViewsCallback' },
			{ name: 'unregisterRightClickMenu' },
			{ name: 'unregisterSelectFilterCallback' },
			{ name: 'unregisterTimeCallback' },
			{ name: 'unRegisterViewWindow' },
			{ name: 'update' },
			{ name: 'updateBindList' },
			{ name: 'updateMTLInMedit' },
			{ name: 'UpdateSceneMaterialLib' },
			{ name: 'updateShape' },
			{ name: 'updateSurfaceMapper' },
			{ name: 'updateToolbarButtons' },
			{ name: 'updateWindow' },
			{ name: 'updateXRef' },
			{ name: 'usedMaps' },
			{ name: 'USetup' },
			{ name: 'ValidateGetRenderMeshNeedDelArg' },
			{ name: 'validateId' },
			{ name: 'ValidateReferenceMakerRefs' },
			{ name: 'validModifier' },
			{ name: 'WorldAlignObject' },
			{ name: 'WorldAlignPivot' },
			{ name: 'WriteByte' },
			{ name: 'WriteDouble' },
			{ name: 'WriteFloat' },
			{ name: 'WriteFloatAsDouble' },
			{ name: 'WriteLong' },
			{ name: 'WriteLongLong' },
			{ name: 'WriteShort' },
			{ name: 'WriteString' },
			{ name: 'WSMApplyFC' },
			{ name: 'WSMSupportsCollision' },
			{ name: 'WSMSupportsForce' },
			{ name: 'XFormMat' },
			{ name: 'yesNoCancelBox' },
			{ name: 'Zero' },
			{ name: 'Zoom' }
		]
	},
	{
		name: 'ObjectSet',
		desc: 'ObjectSet collection',
		kind: CompletionItemKind.Value,
		api: [
			{ name: 'cameras' },
			{ name: 'geometry' },
			{ name: 'helpers' },
			{ name: 'lights' },
			{ name: 'objects' },
			{ name: 'ObjectSet' },
			{ name: 'selection' },
			{ name: 'shapes' },
			{ name: 'spacewarps' },
			{ name: 'systems' }
		]
	},
	{
		name: 'code-block-keyword',
		desc: 'code-block definition',
		kind: CompletionItemKind.Keyword,
		api: [
			{ name: ['function', 'fn'] },
			{ name: 'Struct' },
			{ name: 'macroscript' },
			{ name: 'parameters' },
			{ name: 'plugin' },
			{ name: 'tool' },
			{ name: 'utility' }
		]
	},
	{
		name: 'ui-control',
		desc: 'rollout UI control',
		kind: CompletionItemKind.Keyword,
		api: [
			{ name: 'angle', desc:'Rollout UI control' },
			{ name: 'button', desc:'Rollout UI control' },
			{ name: 'checkbox', desc:'Rollout UI control' },
			{ name: 'checkbutton', desc:'Rollout UI control' },
			{ name: 'colorpicker', desc:'Rollout UI control' },
			{ name: 'combobox', desc:'Rollout UI control' },
			{ name: 'curvecontrol', desc:'Rollout UI control' },
			{ name: 'dotnetControl', desc:'Rollout UI control' },
			{ name: 'dropdownlist', desc:'Rollout UI control' },
			{ name: 'edittext', desc:'Rollout UI control' },
			{ name: 'groupBox', desc:'Rollout UI control' },
			{ name: 'hyperLink', desc:'Rollout UI control' },
			{ name: 'imgTag', desc:'Rollout UI control' },
			{ name: 'label', desc:'Rollout UI control' },
			{ name: 'listbox', desc:'Rollout UI control' },
			{ name: 'mapbutton', desc:'Rollout UI control' },
			{ name: 'materialbutton', desc:'Rollout UI control' },
			{ name: 'multilistbox', desc:'Rollout UI control' },
			{ name: 'pickbutton', desc:'Rollout UI control' },
			{ name: 'popUpMenu', desc:'Rollout UI control' },
			{ name: 'progressbar', desc:'Rollout UI control' },
			{ name: 'radiobuttons', desc:'Rollout UI control' },
			{ name: 'rcmenu', desc:'Rollout UI control' },
			{ name: 'rollout', desc:'Rollout UI control' },
			{ name: 'slider', desc:'Rollout UI control' },
			{ name: 'spinner', desc:'Rollout UI control' },
			{ name: 'SubRollout', desc:'Rollout UI control' },
			{ name: 'timer', desc:'Rollout UI control' }
		]
	},
	{
		name: 'scope',
		desc: 'Scope modifiers',
		kind: CompletionItemKind.Field,
		api: [
			{ name: 'about' },
			{ name: 'coordsys' },
			{ name: 'from' },
			{ 
				name: 'global',
				desc: 'Declare global scope variable'
			},
			{
				name: 'local',
				desc: 'Declare local scope variable'
			},
			{
				name: 'mapped',
				desc: 'Mapped function'
			},
			{
				name: 'private',
				desc: 'Struct private members'
			},
			{
				name: 'public',
				desc: 'Struct public memembers'
			},
			{
				name: 'persistent',
				desc: 'Persisten global varialbe'
			}
		]
	},
	{
		name: 'Generic',
		desc: '',
		kind: CompletionItemKind.Constant,
		api: [
			{ name: 'emptyVal' },
			{
				name:['HKEY_CLASSES_ROOT', 'HKEY_CURRENT_CONFIG', 'HKEY_CURRENT_USER', 'HKEY_LOCAL_MACHINE', 'HKEY_PERFORMANCE_DATA', 'HKEY_USERS'],
				desc:'Registry key'
			},
			{ name: 'meditMaterials' },
			{ name: 'ok' },
			{ name: 'selectionSets' },
			{ name: ['false','true'], desc:'Boolean value' },
			{ name: 'undefined', desc:'Undefined type' },
			{ name: 'unsupplied', desc:'Unsupplied optional argument value' },
			{ name: 'x_axis' },
			{ name: 'y_axis' },
			{ name: 'z_axis' }
		]
	},
	{
		name: 'Primitive',
		desc: 'Primitive Values and constructors',
		kind: CompletionItemKind.Value,
		api: [
			{ name: 'ActionPredicate' },
			{ name: 'ActiveXControl' },
			{ name: 'AngleAxis' },
			{ name: 'AngleControl' },
			{ name: 'Array' },
			{ name: 'ArrayParameter' },
			{ name: 'AtmosphericClass' },
			{ name: 'beziershape' },
			{ name: 'BigMatrix' },
			{ name: 'BigMatrixRowArray' },
			{ name: 'BinStream' },
			{ name: 'BipedCopy' },
			{ name: 'BipedFSKey' },
			{ name: 'BipedGeneric' },
			{ name: 'BipedKey' },
			{ name: 'BitArray' },
			{ name: 'bitmap' },
			{ name: 'BitmapControl' },
			{ name: 'BooleanClass' },
			{ name: 'Box2' },
			{ name: 'Box3' },
			{ name: 'ButtonControl' },
			{ name: 'ccCurve' },
			{ name: 'ccPoint' },
			{ name: 'CCRootClass' },
			{ name: 'ChangeHandler' },
			{ name: 'CharStream' },
			{ name: 'CheckBoxControl' },
			{ name: 'CheckButtonControl' },
			{ name: 'ColorPickerControl' },
			{ name: 'ComboBoxControl' },
			{ name: 'Control' },
			{ name: 'CopyCollection' },
			{ name: 'CTBitMap' },
			{ name: 'CTMotionTracker' },
			{ name: 'CurveCtlGeneric' },
			{ name: 'CurvePointsArray' },
			{ name: 'DataPair' },
			{ name: 'Dictionary' },
			{ name: 'dotNetClass' },
			{ name: 'dotNetControl' },
			{ name: 'dotNetMethod' },
			{ name: 'dotNetMXSValue' },
			{ name: 'dotNetObject' },
			{ name: 'Double' },
			{ name: 'EdgeSelection' },
			{ name: 'EditTextControl' },
			{ name: 'EffectClass' },
			{ name: 'EmptyClass' },
			{ name: 'EulerAngles' },
			{ name: 'FaceSelection' },
			{ name: 'FileStream' },
			{ name: 'float' },
			{ name: 'GeomObject' },
			{ name: 'GroupBoxControl' },
			{ name: 'GroupEndControl' },
			{ name: 'GroupStartControl' },
			{ name: 'HashTable' },
			{ name: 'HKey' },
			{ name: 'ImgTag' },
			{ name: 'integer' },
			{ name: 'Integer64' },
			{ name: 'IntegerPtr' },
			{ name: 'InterfaceFunction' },
			{ name: 'Interval' },
			{ name: 'IObject' },
			{ name: 'LabelControl' },
			{ name: 'LinkControl' },
			{ name: 'ListBoxControl' },
			{ name: 'MapButtonControl' },
			{ name: 'MappedGeneric' },
			{ name: 'MapSupportClass' },
			{ name: 'Material_Editor' },
			{ name: 'MaterialLibrary' },
			{ name: 'Matrix3' },
			{ name: 'MAXAKey' },
			{ name: 'MAXBezierShapeClass' },
			{ name: 'MAXClass' },
			{ name: 'MAXCurveCtl' },
			{ name: 'MAXCustAttrib' },
			{ name: 'MAXCustAttribArray' },
			{ name: 'MAXFilterClass' },
			{ name: 'MAXKey' },
			{ name: 'MAXKeyArray' },
			{ name: 'MAXMeshClass' },
			{ name: 'MAXModifierArray' },
			{ name: 'MAXNoteKey' },
			{ name: 'MAXNoteKeyArray' },
			{ name: 'MAXObject' },
			{ name: 'MAXRefTarg' },
			{ name: 'MAXRootNode' },
			{ name: 'MAXRootScene' },
			{ name: 'MAXScriptFunction' },
			{ name: 'MAXSuperClass' },
			{ name: 'MAXTVNode' },
			{ name: 'MAXTVUtility' },
			{ name: 'menuitem' },
			{ name: 'mesh' },
			{ name: 'Mixer' },
			{ name: 'MixinInterface' },
			{ name: 'ModifierClass' },
			{ name: 'MoFlow' },
			{ name: 'MoFlowScript' },
			{ name: 'MoFlowSnippet' },
			{ name: 'MoFlowTranInfo' },
			{ name: 'MoFlowTransition' },
			{ name: 'MotionTracker' },
			{ name: 'MouseTool' },
			{ name: 'MPassCamEffectClass' },
			{ name: 'MSBipedRootClass' },
			{ name: 'MSComMethod' },
			{ name: 'MSCustAttribDef' },
			{ name: 'MSDispatch' },
			{ name: 'MSPluginClass' },
			{ name: 'MtlButtonControl' },
			{ name: 'MultiListBoxControl' },
			{ name: 'MultiMaterialClass' },
			{ name: 'MultipleFSParams' },
			{ name: 'MXClip' },
			{ name: 'MXSProtector' },
			{ name: 'MXTrack' },
			{ name: 'MXTrackgroup' },
			{ name: 'name' },
			{ name: 'NodeChildrenArray' },
			{ name: 'NodeEventCallback' },
			{ name: 'NodeGeneric' },
			{ name: 'NoteTrack' },
			{ name: 'NoValueClass' },
			{ name: 'Number' },
			{ name: 'NURBS1RailSweepSurface' },
			{ name: 'NURBS2RailSweepSurface' },
			{ name: 'NURBSBlendCurve' },
			{ name: 'NURBSBlendSurface' },
			{ name: 'NURBSCapSurface' },
			{ name: 'NURBSChamferCurve' },
			{ name: 'NURBSControlVertex' },
			{ name: 'NURBSCurve' },
			{ name: 'NURBSCurveConstPoint' },
			{ name: 'NURBSCurveIntersectPoint' },
			{ name: 'NURBSCurveOnSurface' },
			{ name: 'NURBSCurveSurfaceIntersectPoint' },
			{ name: 'NURBSCVCurve' },
			{ name: 'NURBSCVSurface' },
			{ name: 'NURBSDisplay' },
			{ name: 'NURBSExtrudeSurface' },
			{ name: 'NURBSFilletCurve' },
			{ name: 'NURBSFilletSurface' },
			{ name: 'NURBSGenericMethods' },
			{ name: 'NURBSGenericMethodsWrapper' },
			{ name: 'NURBSIndependentPoint' },
			{ name: 'NURBSIsoCurve' },
			{ name: 'NURBSLatheSurface' },
			{ name: 'NURBSMirrorCurve' },
			{ name: 'NURBSMirrorSurface' },
			{ name: 'NURBSMultiCurveTrimSurface' },
			{ name: 'NURBSNBlendSurface' },
			{ name: 'NURBSObject' },
			{ name: 'NURBSOffsetCurve' },
			{ name: 'NURBSOffsetSurface' },
			{ name: 'NURBSPoint' },
			{ name: 'NURBSPointConstPoint' },
			{ name: 'NURBSPointCurve' },
			{ name: 'NURBSPointCurveOnSurface' },
			{ name: 'NURBSPointSurface' },
			{ name: 'NURBSProjectNormalCurve' },
			{ name: 'NURBSProjectVectorCurve' },
			{ name: 'NURBSRuledSurface' },
			{ name: 'NURBSSelection' },
			{ name: 'NURBSSelector' },
			{ name: 'NURBSSet' },
			{ name: 'NURBSSurface' },
			{ name: 'NURBSSurfaceApproximation' },
			{ name: 'NURBSSurfaceEdgeCurve' },
			{ name: 'NURBSSurfaceNormalCurve' },
			{ name: 'NURBSSurfConstPoint' },
			{ name: 'NURBSSurfSurfIntersectionCurve' },
			{ name: 'NURBSTexturePoint' },
			{ name: 'NURBSTextureSurface' },
			{ name: 'NURBSULoftSurface' },
			{ name: 'NURBSUVLoftSurface' },
			{ name: 'NURBSXFormCurve' },
			{ name: 'NURBSXFormSurface' },
			{ name: 'object' },
			{ name: 'ObjectSet' },
			{ name: 'OLEMethod' },
			{ name: 'OLEObject' },
			{ name: 'PathName' },
			{ name: 'PickerControl' },
			{ name: 'Point2' },
			{ name: 'point3' },
			{ name: 'Point4' },
			{ name: 'PyWrapperBase' },
			{ name: 'Quat' },
			{ name: 'RadioControl' },
			{ name: 'Ray' },
			{ name: 'RCMenu' },
			{ name: 'RolloutFloater' },
			{ name: 'SafeArrayWrapper' },
			{ name: 'SelectionSet' },
			{ name: 'SelectionSetArray' },
			{ name: 'set' },
			{ name: 'ShadowClass' },
			{ name: 'SliderControl' },
			{ name: 'SpinnerControl' },
			{ name: 'StandardMaterialClass' },
			{ name: 'StaticMethodInterface' },
			{ name: 'string' },
			{ name: 'StringStream' },
			{ name: 'subAnim' },
			{ name: 'subRollout' },
			{ name: 'TextureClass' },
			{ name: 'time' },
			{ name: 'Timer' },
			{ name: 'TrackViewPick' },
			{ name: 'TriMesh' },
			{ name: 'UndefinedClass' },
			{ name: 'UnsuppliedClass' },
			{ name: 'UserGeneric' },
			{ name: 'ValueRef' },
			{ name: 'VertexSelection' },
			{ name: 'View2DControl' },
			{ name: 'WindowStream' },
			{ name: 'XRefScene' }
		]
	},
	{
		name: 'Colors',
		desc: 'RGB[A] color value',
		kind: CompletionItemKind.Color,
		api: [
			{
				name: 'Color',
				desc: 'Color <r> <g> <b> [<a>]'
			},
			{
				name: ['black', 'blue', 'brown', 'gray', 'green', 'orange', 'red', 'white', 'yellow'],
				desc: 'Default color constants'
			}
		]
	}
];
//# sourceMappingURL=mxsSchema.js.map
