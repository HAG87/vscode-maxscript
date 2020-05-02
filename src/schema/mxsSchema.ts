import { CompletionItemKind } from 'vscode';
//-----------------------------------------------------------------------------------------------------------------
const maxConstant = [
    {
        label: 'activegrid',
        kind: CompletionItemKind.Constant,
        detail: 'Active work plane'
    },
    {
        label: 'subObjectLevel',
        kind: CompletionItemKind.Constant,
        detail: 'active subObject level [0:Object|1:Vertex|2:Edge|3:Border|4:Face|5:Element]'
    },
    {
        label: 'localTime',
        kind: CompletionItemKind.Constant,
    },
    {
        label: 'currentTime',
        kind: CompletionItemKind.Constant,
    },
    {
        label: 'renderer',
        kind: CompletionItemKind.Constant,
    }
]
const maxGenericFn = [
    {
        label: 'abs',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'acos',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ActivateTimeWarp',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'addAndWeld',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'addAtmospheric',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'addEaseCurve',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'addKnot',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'addModifier',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'addModifierWithLocalData',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'addMorphTarget',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'addMultiplierCurve',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'addNewKey',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'addNewNoteKey',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'addNewSpline',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'addNoteTrack',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'addNURBSSet',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'addRollout',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'addScript',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'addSnippet',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'AddSubRollout',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'addTrackViewController',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'addTranInfo',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'addTransition',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'affectRegionVal',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'AlignPivot',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'AlignToParent',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'amax',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'amin',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'animateAll',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'animateVertex',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'append',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'appendClip',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'appendGizmo',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'appendIfUnique',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'appendKey',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'AppendSubSelSet',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'appendTrack',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'appendTrackgroup',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'applyOffset',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'apropos',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ArbAxis',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'areMtlAndRendererCompatible',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'areNodesInstances',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'asin',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'assert_defined',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'assert_equal',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'assert_false',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'assert_float',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'assert_matrix_equal',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'assert_not_equal',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'assert_point3_equal',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'assert_string_equal',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'assert_true',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'assert_undefined',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'assert',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'assignKey',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'AssignNewName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'atan',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'atan2',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'attach',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'attachNodesToGroup',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'AttachObjects',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'AverageSelVertNormal',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'AxisTripodLocked',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'bindKnot',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'bindSpaceWarp',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'BoxPickNode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'break',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'breakCurve',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'breakSurface',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'bsearch',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'buildTVFaces',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'buildVCFaces',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'canConvertTo',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'CaptureCallStack',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ceil',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'CenterObject',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'CenterPivot',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'CheckForSave',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ClassOf',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'clear',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'clearAllAppData',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'clearCacheEntry',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'clearControllerNewFlag',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ClearCurSelSet',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'clearListener',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'clearMixer',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ClearNodeSelection',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'clearSelection',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ClearSubSelSets',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'clearTrack',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'clearTrackgroup',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'clearUndoBuffer',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'close_enough',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'close',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'CloseActiveShade',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'closeCameraTracker',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'closelog',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'closeRolloutFloater',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'closeUtility',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'collapseface',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'collapseStack',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'colorPickerDlg',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'CommitControllerValue',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'compareBitmaps',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'CompleteRedraw',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'composite',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'computeAnimation',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ConfigureBitmapPaths',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'conformToShape',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'Conjugate',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'contains',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ConvertDirIDToInt',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ConvertIntToDirID',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ConvertKelvinToRGB',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'convertTo',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ConvertToBody',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ConvertToBodyCutter',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ConvertToJoinBodies',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'convertToMesh',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'convertToNURBSCurve',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'convertToNURBSSurface',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'convertToPoly',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'convertToSplineShape',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'copy',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'copyFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'copyMixdownToBiped',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'copyPasteKeys',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'cos',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'cosh',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'CreateDialog',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'createfile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'createInstance',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'CreateLockKey',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'createMorphObject',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'createNumberedFilename',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'createOLEObject',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'CreatePreview',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'createReaction',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'crop',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'cross',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'CRTCheckAssert',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'CRTCheckMemory',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'CRTCorruptHeap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'CRTheapcheck',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'curveLength',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'DeactivateTimeWarp',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deepCopy',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'defaultVCFaces',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'DegToRad',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'delete',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteAllChangeHandlers',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteAllCopies',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteAppData',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteAtmospheric',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteChangeHandler',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteCopy',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteEaseCurve',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteEffect',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteface',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteGizmo',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteItem',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteKey',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteKeys',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteKnot',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteModifier',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteMorphTarget',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteMultiplierCurve',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteNoteKey',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteNoteKeys',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteNoteTrack',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deletePoint',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteReaction',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteScript',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteSnippet',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteSpline',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteTrack',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteTracker',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteTrackgroup',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteTrackViewController',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteTrackViewNode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteTranInfo',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteTransition',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deleteTransitionsTo',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'DeleteTw',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deletevert',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'DeleteWeight',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'delINISetting',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'dependsOn',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deselect',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'DeselectHiddenEdges',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'DeselectHiddenFaces',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deselectKey',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'deselectKeys',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'DeSelectNode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'DestroyDialog',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'detachFaces',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'detachNodesFromGroup',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'detachVerts',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'disableRefMsgs',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'DisableSceneRedraw',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'DisableStatusXYZ',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'displacementToPreset',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'display',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'displayControlDialog',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'DisplayTempPrompt',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'distance',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'doesDirectoryExist',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'doesFileExist',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'DOSCommand',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'dot',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'dumpMAXStrings',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'edit',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'EditAtmosphere',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'editAtmospheric',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'editEffect',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'EditPolyModReadyToBridge',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ElementFileDialog',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ElementGetCustomGamma',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ElementGetMetaData',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ElementSetCustomGamma',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ElementSetMetaData',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'empty',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'EnableCoordCenter',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'enableHardwareMaterial',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'enableORTs',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'EnableRefCoordSys',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'enableRefMsgs',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'EnableSceneRedraw',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'EnableShowEndRes',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'EnableStatusXYZ',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'EnableSubObjSel',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'enableUndo',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'encryptFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'encryptScript',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'enlargeBy',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'enumerateFiles',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'eof',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'eulerToQuat',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ExclusionListDlg',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'execute',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'executeScriptFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'exp',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'expandToInclude',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'explodeGroup',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'exportFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'extrudeface',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'fclose',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'FencePickNode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'fetchMaxFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'fflush',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'filein',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'filenameFromPath',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'FileOpenMatLib',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'filepos',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'FileSaveAsMatLib',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'FileSaveMatLib',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'FilterString',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'findItem',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'FindLengthSegAndParam',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'FindPathSegAndParam',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'findPattern',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'findString',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'flagChanged',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'flagForeground',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'FlashNodes',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'floor',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'flush',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'flushlog',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'fopen',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ForceCompleteRedraw',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'forceReloadBitmapFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'Format',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'formattedPrint',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'fractalNoise',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'free',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'freeSceneBitmaps',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'freeze',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'freezeSelection',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'fseek',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ftell',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GameExporterOpenDialog',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GameExporterShown',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'gc',
        detail: 'Garbage collector',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'genClassID',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'genGUID',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GepCanMakeRamp',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GepGetDisplayType',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GepMakeRamp',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getActiveCamera',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetActiveShadeBitmap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getAfterORT',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getAnimByHandle',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getAnimPointer',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getAppData',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getAtmospheric',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getAvailableSubstanceGraphsAndOutputsFromPackage',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetBackGround',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetBackGroundController',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getBeforeORT',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getBitmapInfo',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getBitmapOpenFileName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getBitmapSaveFileName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetBkgFrameNum',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetBkgImageAnimate',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetBkgImageAspect',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetBkgORType',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetBkgRangeVal',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetBkgStartTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetBkgSyncFrame',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getChannel',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getChannelAsMask',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getClassInstances',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getClassName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getClip',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getclipboardBitmap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getclipboardText',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetCommandPanelTaskMode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetCoordCenter',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getCopy',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getCoreInterfaces',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getCPTM',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetCrossing',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getCurNameSelSet',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getCurrentException',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getCurrentExceptionCallStack',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getCurrentExceptionStackTrace',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getCurrentSelection',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetCurrentThreadId',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getCursorPos',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetCVertMode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getD3DMeshAllocated',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getD3DMeshAllocatedFaces',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getD3DTimer',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetDefaultUIColor',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetDialogBitmap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetDialogPos',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetDialogSize',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetDictKeys',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetDictKeyType',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetDictValue',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getDimensions',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetDir',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getDirectories',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getDisplacementMapping',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetDisplayFilter',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetDisplayFilterName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getEaseCurve',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getEdgeSelection',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getEdgeVis',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getEffect',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetEnableEditFbxSetting',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetEnableProfiling',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetEulerMatAngleRatio',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetEulerQuatAngleRatio',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getface',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getFaceMatID',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getFaceNormal',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getFaceSelection',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getFaceSmoothGroup',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getFileAttribute',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getFileCreateDate',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getFileModDate',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getFilenameFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getFilenamePath',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getFilenameType',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getFiles',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getFileSecurityInfo',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getFileVersion',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getFilter',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getGizmo',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetGridMajorLines',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetGridSpacing',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getHandleByAnim',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getHashValue',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getHashValue',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getHSVMarkerPos',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getIconAsBitmap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetImageBlurMultController',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getIndexedPixels',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getIndexedProperty',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getInheritanceFlags',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetInheritVisibility',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getINISetting',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getInterface',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getInterfaces',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getInVec',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getKBChar',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getKBLine',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getKBPoint',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getKBValue',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getKeyIndex',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetKeyStepsPos',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetKeyStepsRot',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetKeyStepsScale',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetKeyStepsSelOnly',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetKeyStepsUseTrans',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getKeyTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getKnotPoint',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getKnotSelection',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getKnotType',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getLastMergedNodes',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getLastRenderedImage',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getListenerSel',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getListenerSelText',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getLocalTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMaterialID',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetMatLibFileName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetMaxAssertDisplay',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetMaxAssertLogFileName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMaxExtensionVersion',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMAXFileAssetMetadata',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMAXFileObjectNames',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMaxFileVersionData',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetMAXIniFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMAXOpenFileName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMAXSaveFileName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMAXWindowPos',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMAXWindowSize',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMeditMaterial',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetMixerInterval',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMKKey',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMKKeyIndex',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMKTargetNames',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMKTargetWeights',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMKWeight',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getModContextBBox',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getModContextBBoxMax',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getModContextBBoxMin',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getModContextTM',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMTLMEditFlags',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMTLMeditObjType',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMTLMeditTiling',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMultiPainterInstanceCount',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMultiPainterInstanceTM',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMultiplierCurve',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getMultiplierValue',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetNamedSelSetItem',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetNamedSelSetItemCount',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetNamedSelSetName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getNodeBBox',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getNodeByName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetNodes',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getNodeTM',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getnormal',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getNoteKeyIndex',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getNoteKeyTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getNoteTrack',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetNumAxis',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetNumberDisplayFilters',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetNumberSelectFilters',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getNumCPVVerts',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getNumFaces',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetNumNamedSelSets',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getNumSubMtls',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getNumSubTexmaps',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getNumTVerts',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getNumVerts',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getNURBSSelection',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getNURBSSet',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getOpenFileName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetOptimizeDependentNotificationsStatistics',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetOrgTimeAtWarpedTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getOutVec',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetPatchSteps',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getPixels',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getPointController',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getPointControllers',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getPointPos',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetPolygonCount',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetPosTaskWeight',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getProgressCancel',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getProperty',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getPropertyController',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getPropNames',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getPropNames',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getQtTextExtent',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetQuietMode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getReactionCount',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getReactionFalloff',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getReactionInfluence',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getReactionName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getReactionState',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getReactionStrength',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getReactionValue',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetRefCoordSys',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetRendApertureWidth',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetRenderType',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetRendImageAspect',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetRotTaskWeight',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSaveFileName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSavePath',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSaveRequired',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetScreenScaleFactor',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getScriptIndex',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSegLengths',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSegmentType',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSegSelection',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSelectedPts',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSelectedReactionNum',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetSelectFilter',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetSelectFilterName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSelectionLevel',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetShadeCVerts',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSimilarNodes',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetSnapMode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetSnapState',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSnippetIndex',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSourceFileLine',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSourceFileName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSourceFileOffSet',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSplineSelection',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSplitMesh',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSubAnim',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSubAnimName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSubAnimNames',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSubdivisionDisplacement',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSubMtl',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSubMtlSlotName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSubTexmap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getSubTexmapSlotName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetTaskAxisState',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getTextExtent',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getThisScriptFilename',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getTimeRange',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetTMController',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetToolBtnState',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getTrack',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getTracker',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getTrackgroup',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetTrackgroupInterval',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetTrackInterval',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetTrajectoryON',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getTransformAxis',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getTransformLockFlags',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetTriMeshFaceCount',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'gettvert',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getTVFace',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetTwOrgTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetTwWarpTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetUIColor',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetUIScaleFactor',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getUniversalTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetUseEnvironmentMap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getUserProp',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getUserPropBuffer',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getValue',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getVCFace',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getVert',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getvertcolor',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getVertSelection',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getViewFOV',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getViewSize',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getViewTM',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetVPortBGColor',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetWarpedTimeAtOrgTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'GetWeightAtTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'getXYZControllers',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'globalInpoint',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'globalOutpoint',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'globalToLocal',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'globalToScaledLocal',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'go',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'gotoFrame',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'group',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'hasCurrentExceptionCallStack',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'hasCurrentExceptionStackTrace',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'HasDictValue',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'hasINISetting',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'hasNoteTracks',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'hasProperty',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'hasProperty',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'heapCheck',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'Help',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'HiddenDOSCommand',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'hide',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'hideSelectedSegments',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'hideSelectedSplines',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'hideSelectedVerts',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'HitByNameDlg',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'holdMaxFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'Identity',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IdleAreaAddArea',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IdleAreaCreateCircle',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IdleAreaCreateFreeform',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IdleAreaCreateRectangle',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IdleAreaSubtractArea',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'importFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'include',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'InitializeTimeWarp',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'insertItem',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'insertPoint',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'insertSnippet',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'insertTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'insertTrack',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'insertTrackgroup',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'InsertWarpAtOrgTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'instance',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'instanceReplace',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'interpBezier3D',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'interpCurve3D',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'intersectRay',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IntersectRayEx',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'intersectRayScene',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'intersects',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'InvalidateAllBackgrounds',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'invalidateTM',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'invalidateTreeTM',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'invalidateWS',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'Inverse',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'InverseHighPrecision',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'invert',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'is64bitApplication',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isActive',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isAnimated',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isAnimPlaying',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IsBoneOnly',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isClosed',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isCompatible',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isController',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isController',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IsCPEdgeOnInView',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isCreatingObject',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isDeformable',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isDeleted',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IsDialogVisible',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isDirectoryWriteable',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isEmpty',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isGroupHead',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isGroupMember',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isIdentity',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isKeySelected',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isKindOf',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isMaxFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IsModuleLoaded',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isMSCustAttrib',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isMSCustAttrib',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isMSCustAttribClass',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isMSCustAttribClass',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isMSPlugin',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isMSPlugin',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isMSPluginClass',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isMSPluginClass',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IsNetServer',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IsNetworkRenderServer',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isOpenGroupHead',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isOpenGroupMember',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isParticleSystem',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IsPointSelected',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isProperty',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isPropertyAnimatable',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isReadOnly',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IsSceneRedrawDisabled',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isSceneXRefNode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isSelectionFrozen',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IsShapeObject',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isSpace',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IsSpaceWarpValid',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isStruct',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isStruct',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isStructDef',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isStructDef',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IsSubSelEnabled',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IsSurfaceUVClosed',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IsTimeWarpActive',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IsUndoDisabled',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'IsValidMorpherMod',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isValidNode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isValidObj',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isValidValue',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'isWorldSpaceObject',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'join',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'joinCurves',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'joinSurfaces',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'length',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'lengthInterp',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'lengthTangent',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'lengthToPathParam',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'LnDif',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'LoadDefaultMatLib',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'loadDllsFromDir',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'loadfile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'loadFrames',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'loadMaterialLibrary',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'loadMaxAnimationFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'loadMaxFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'loadMixFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'loadMoFlowFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'loadPicture',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'loadSnippetFiles',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'loadTempMaterialLibrary',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'locals',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'localToGlobal',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'localToScaledLocal',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'LockAxisTripods',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'log',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'log10',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'LogN',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'makeCube',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'makeDir',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'makeIndependent',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'MakeNURBSConeSurface',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'MakeNURBSCylinderSurface',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'MakeNURBSLatheSurface',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'MakeNURBSSphereSurface',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'makeUniqueArray',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'mapKeys',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'MappedPrimitive',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'mapPoint',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'mapScreenToView',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'mapScreenToWorldRay',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'MatchPattern',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'MaterialBrowseDlg',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'materialID',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'MatrixFromNormal',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'maxVersion',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'maz',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'measureOffset',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'merge',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'mergeMaxFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'mesh_weld_overlapping_vertices',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'messageBox',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'MirrorIKConstraints',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'mixdown',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'mod',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'mouseTrack',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'move',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'moveClip',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'moveKey',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'moveKeys',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'MXS_IsSceneEmptyForNodePick',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'NamedSelSetListChanged',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'nearestPathParam',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'NetworkRTT',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'newRolloutFloater',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'newScript',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'newSnippet',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'NodeColorPicker',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'nodeGetBoundingBox',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'nodeLocalBoundingBox',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'noise3',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'noise4',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'normalize',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'normtime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'notifyDependents',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'numCopies',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'numEaseCurves',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'numKeys',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'numKnots',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'NumMapsUsed',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'numMultiplierCurves',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'numNoteTracks',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'numPoints',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'numSegments',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'numSelKeys',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'numSplines',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'NumSurfaces',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'NURBSExtrudeNode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'NURBSLatheNode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'NURBSNode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'OBJPaintGetSetting',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'OBJPaintSetSetting',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'OkMtlForScene',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'OKToBindToNode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'okToCreate',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'open',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'openBitMap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'openCTBitMap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'openEncryptedFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'OpenFbxSetting',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'openfile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'openlog',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'openUtility',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'optimizeClipTransition',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'optimizeTransitions',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'Orthogonalize',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'OSnap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'particleAge',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'particleCenter',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'particleCount',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'particleLife',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'particlePos',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'particleSize',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'particleSize2',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'particleVelocity',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'pasteBitmap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'pathInterp',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'pathIsNetworkPath',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'pathTangent',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'pathToLengthParam',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'PBEndTrack',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'PBStartTrack',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'PBTrackGetToolActive',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'peekToken',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'perspectiveMatch',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'pickAnimatable',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'pickObject',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'pickOffsetDistance',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'pickPoint',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'playAnimation',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'PointSelection',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'PopPrompt',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'PopQtTranslationFromFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'PopupMenu',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'pow',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'PreRotate',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'PreRotateX',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'PreRotateY',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'PreRotateZ',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'PreScale',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'PreTranslate',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'Print',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'printstack',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'progressEnd',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'progressStart',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'progressUpdate',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'PushPrompt',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'PushQtTranslationFromFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'PutDictValue',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'QCompA',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'qorthog',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'qsort',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'QtUISample',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'quatArrayToEulerArray',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'quatToEuler',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'quatToEuler2',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'queryBox',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'quitMax',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'radToDeg',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'RAMPlayer',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'random',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'reactTo',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ReadByte',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'readChar',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'readChars',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'readDelimitedString',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ReadDouble',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ReadDoubleAsFloat',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'readExpr',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ReadFloat',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'readLine',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ReadLong',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ReadLongLong',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ReadShort',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ReadString',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'readToken',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'readValue',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'rectify',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'redrawViews',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'reduceKeys',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'reference',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'referenceReplace',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'refineSegment',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'registerDisplayFilterCallback',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'registerFileChangedFunction',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'registerOLEInterface',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'registerRedrawViewsCallback',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'registerRightClickMenu',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'registerSelectFilterCallback',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'registerTimeCallback',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'registerViewWindow',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'releaseAllOLEObjects',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'releaseOLEObject',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'RemoveDictValue',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'removeRollout',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'RemoveSubRollout',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'RemoveTempPrompt',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'renameFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'render',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'renderMap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'replace_CRLF_with_LF',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'replace_LF_with_CRLF',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'replace',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'replaceInstances',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ReplacePrompt',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'resample',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'RescaleWorldUnits',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'reset',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'resetLattice',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'resetLengthInterp',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'resetMaxFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ResetPivot',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ResetScale',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'resetShape',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ResetTransform',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ResetXForm',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'resetZoom',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'RestoreControllerValue',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ResumeEditing',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'reverse',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'reverseTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'RevitImporterGetOption',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'RevitImporterSetOption',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'Rotate',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'RotateX',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'RotateXMatrix',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'RotateY',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'RotateYMatrix',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'RotateYPRMatrix',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'RotateZ',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'RotateZMatrix',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'save',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'saveMaterialLibrary',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'saveMaxFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'saveMixFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'saveMoFlowFile',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'saveNodes',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'saveTempMaterialLibrary',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'scale',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'scaleClip',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'scaledLocalToGlobal',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'scaledLocalToLocal',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ScaleMatrix',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'scaleTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'scanForNewPlugins',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'seed',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'seek',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'select',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'selectBitMap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'selectByName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'selectCTBitMap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'selectKey',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'selectKeys',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'selectmore',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SelectSaveBitMap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setActive',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setAfterORT',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setAppData',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setArrowCursor',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setAsBackground',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setAtmospheric',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetBackGround',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetBackGroundController',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setBeforeORT',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetBkgFrameRange',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetBkgImageAnimate',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetBkgImageAspect',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetBkgORType',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetBkgStartTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetBkgSyncFrame',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setCacheEntry',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setclipboardBitmap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setclipboardText',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetCommandPanelTaskMode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetControllerValue',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetCoordCenter',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetCurNamedSelSet',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetCVertMode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setD3DMeshCacheSize',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetDialogBitmap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetDialogPos',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetDictValue',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setDimensions',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetDir',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setDisplacementMapping',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetDisplayFilter',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setEdgeSelection',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setEdgeVis',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setEffect',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetEnableProfiling',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setface',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setFaceMatID',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setfacenormal',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setFaceSelection',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setFaceSmoothGroup',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setFade',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setFileAttribute',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setFilter',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setFirstKnot',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setFirstSpline',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setFocus',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetGridMajorLines',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetGridSpacing',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setGroupHead',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setGroupMember',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setGroupOpen',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetImageBlurMultController',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetImageBlurMultiplier',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setIndexedPixels',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setIndexedProperty',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setInheritanceFlags',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetInheritVisibility',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setIniForceUTF16Default',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setINISetting',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setInVec',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetKeyStepsPos',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetKeyStepsRot',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetKeyStepsScale',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetKeyStepsSelOnly',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetKeyStepsUseTrans',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setKnotPoint',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setKnotSelection',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setKnotType',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setListenerSel',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setListenerSelText',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setMaterialID',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetMaxAssertDisplay',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetMaxAssertLogFileName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setMAXFileAssetMetadata',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setMeditMaterial',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setMesh',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setMKTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setMKWeight',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setModContextBBox',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setModContextTM',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setMorphTarget',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setMorphTargetName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetMotBlur',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setMTLMEditFlags',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setMTLMeditObjType',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setMTLMeditTiling',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setMultiPainterInstanceTM',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setNeedsRedraw',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetNodes',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setNumberThreads',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setNumCPVVerts',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setNumFaces',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setNumTVerts',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setNumVerts',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setOpenSceneScript',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setOutVec',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetPatchSteps',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setPixels',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetPosTaskWeight',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setProgressCancel',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setProperty',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setPropertyController',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetQuietMode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setReactionFalloff',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setReactionInfluence',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setReactionName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setReactionState',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setReactionStrength',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setReactionValue',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetRefCoordSys',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetRendApertureWidth',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetRenderable',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setRenderApproximation',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetRenderID',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetRenderType',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetRotTaskWeight',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setSaveRequired',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setSaveSceneScript',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setSegmentType',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setSegSelection',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setSelectedPts',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetSelectFilter',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setSelectionLevel',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetShadeCVerts',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetSilentMode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setSize',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setSoftEdge',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setSplineSelection',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setSplitMesh',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetStatusXYZ',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setStruct',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setSubdivisionDisplacement',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setSubMtl',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setSubTexmap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setSurfaceDisplay',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetSysCur',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetTaskAxisState',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setTimeRange',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetToolBtnState',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetTrajectoryON',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setTransformLockFlags',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'settvert',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setTVFace',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetTwOrgTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetTwWarpTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetUIColor',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setupEvents',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setUseOldD3DCache',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setUserProp',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setUserPropBuffer',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setVCFace',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setVert',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setVertColor',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setVertSelection',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setViewApproximation',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetVPortBGColor',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setVRaySilentMode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'setWaitCursor',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetWeight',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetWeightAtTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SetWeightTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ShellLaunch',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'show',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ShowAllActiveXControls',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'showClass',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ShowDialog',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'showEvents',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'showHWTextureMap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'showInterface',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'showInterfaces',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'showMethods',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'showProperties',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'showSource',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'showTextureMap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'showTrack',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SilentMode',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'sin',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'sinh',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'skipSpace',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'skipToNextLine',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'skipToString',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'sleep',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'Slerp',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'snapshot',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'snapshotAsMesh',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'sort',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'sortKeys',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'sortNoteKeys',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'sqrt',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'Squad',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'squadrev',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'stack',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'startObjectCreation',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'startTool',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'stopAnimation',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'StopCreating',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'stopTool',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'stricmp',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'subdivideSegment',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'substituteString',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'substring',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'supportsTimeOperations',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'SuspendEditing',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'swap',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'tan',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'tangentBezier3D',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'tangentCurve3D',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'tanh',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'test_safearray',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'thawSelection',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'threads',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'timeGetTime',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'timeStamp',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'toLower',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'toUpper',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'transform',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'Translate',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'TransMatrix',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'transpose',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'trimExtend',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'trimLeft',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'trimRight',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'turbulence',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'unbindKnot',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'unDisplay',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'unfreeze',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ungroup',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'unhide',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'unhideSegments',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'uniqueName',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'unmaz',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'unregisterAllRightClickMenus',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'unregisterDisplayFilterCallback',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'unregisterRedrawViewsCallback',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'unregisterRightClickMenu',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'unregisterSelectFilterCallback',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'unregisterTimeCallback',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'unRegisterViewWindow',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'update',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'updateBindList',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'updateMTLInMedit',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'UpdateSceneMaterialLib',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'updateShape',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'updateSurfaceMapper',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'updateToolbarButtons',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'updateWindow',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'updateXRef',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'usedMaps',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'USetup',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ValidateGetRenderMeshNeedDelArg',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'validateId',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'ValidateReferenceMakerRefs',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'validModifier',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'WorldAlignObject',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'WorldAlignPivot',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'WriteByte',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'WriteDouble',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'WriteFloat',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'WriteFloatAsDouble',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'WriteLong',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'WriteLongLong',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'WriteShort',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'WriteString',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'WSMApplyFC',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'WSMSupportsCollision',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'WSMSupportsForce',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'XFormMat',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'yesNoCancelBox',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'Zero',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    },
    {
        label: 'Zoom',
        detail: 'Generic function',
        kind: CompletionItemKind.Function,
    }
]
const maxObjectSet = [
    {
        label: 'cameras',
        detail: 'ObjectSet collection',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'geometry',
        detail: 'ObjectSet collection',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'helpers',
        detail: 'ObjectSet collection',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'lights',
        detail: 'ObjectSet collection',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'objects',
        detail: 'ObjectSet collection',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'ObjectSet',
        detail: 'ObjectSet collection',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'selection',
        detail: 'ObjectSet collection',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'shapes',
        detail: 'ObjectSet collection',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'spacewarps',
        detail: 'ObjectSet collection',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'systems',
        detail: 'ObjectSet collection',
        kind: CompletionItemKind.Value,
    }
]
const maxKeywords1 = [
    {
        label: 'function',
        detail: 'Function definition',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'fn',
        detail: 'Function definition',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'Struct',
        detail: 'Struct definition',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'macroscript',
        detail: 'macroscript code-block definition',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'parameters',
        detail: 'plugin parameters code-block definition',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'plugin',
        detail: 'plugin code-block definition',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'tool',
        detail: 'tool code-block definition',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'utility',
        detail: 'utility code-block definition',
        kind: CompletionItemKind.Keyword,
    }
]
const maxUIcontrols = [
    {
        label: 'angle',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'button',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'checkbox',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'checkbutton',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'colorpicker',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'combobox',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'curvecontrol',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'dotnetControl',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'dropdownlist',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'edittext',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'groupBox',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'hyperLink',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'imgTag',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'label',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'listbox',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'mapbutton',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'materialbutton',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'multilistbox',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'pickbutton',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'popUpMenu',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'progressbar',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'radiobuttons',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'rcmenu',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'rollout',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'slider',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'spinner',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'SubRollout',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    },
    {
        label: 'timer',
        detail: 'Rollout UI control',
        kind: CompletionItemKind.Keyword,
    }
]
const maxPrimitives = [
    {
        label: 'ActionPredicate',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'ActiveXControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'AngleAxis',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'AngleControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'Array',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'ArrayParameter',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'AtmosphericClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'beziershape',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'BigMatrix',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'BigMatrixRowArray',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'BinStream',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'BipedCopy',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'BipedFSKey',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'BipedGeneric',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'BipedKey',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'BitArray',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'bitmap',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'BitmapControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'BooleanClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'Box2',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'Box3',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'ButtonControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'ccCurve',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'ccPoint',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'CCRootClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'ChangeHandler',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'CharStream',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'CheckBoxControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'CheckButtonControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'ColorPickerControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'ComboBoxControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'Control',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'CopyCollection',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'CTBitMap',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'CTMotionTracker',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'CurveCtlGeneric',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'CurvePointsArray',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'DataPair',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'Dictionary',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'dotNetClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'dotNetControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'dotNetMethod',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'dotNetMXSValue',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'dotNetObject',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'Double',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'EdgeSelection',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'EditTextControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'EffectClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'EmptyClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'EulerAngles',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'FaceSelection',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'FileStream',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'float',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'GeomObject',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'GroupBoxControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'GroupEndControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'GroupStartControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'HashTable',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'HKey',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'ImgTag',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'integer',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'Integer64',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'IntegerPtr',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'InterfaceFunction',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'Interval',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'IObject',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'LabelControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'LinkControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'ListBoxControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MapButtonControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MappedGeneric',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MapSupportClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'Material_Editor',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MaterialLibrary',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'Matrix3',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXAKey',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXBezierShapeClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXCurveCtl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXCustAttrib',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXCustAttribArray',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXFilterClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXKey',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXKeyArray',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXMeshClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXModifierArray',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXNoteKey',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXNoteKeyArray',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXObject',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXRefTarg',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXRootNode',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXRootScene',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXScriptFunction',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXSuperClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXTVNode',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MAXTVUtility',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'menuitem',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'mesh',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'Mixer',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MixinInterface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'ModifierClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MoFlow',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MoFlowScript',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MoFlowSnippet',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MoFlowTranInfo',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MoFlowTransition',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MotionTracker',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MouseTool',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MPassCamEffectClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MSBipedRootClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MSComMethod',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MSCustAttribDef',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MSDispatch',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MSPluginClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MtlButtonControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MultiListBoxControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MultiMaterialClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MultipleFSParams',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MXClip',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MXSProtector',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MXTrack',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'MXTrackgroup',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'name',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NodeChildrenArray',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NodeEventCallback',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NodeGeneric',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NoteTrack',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NoValueClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'Number',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBS1RailSweepSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBS2RailSweepSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSBlendCurve',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSBlendSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSCapSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSChamferCurve',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSControlVertex',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSCurve',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSCurveConstPoint',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSCurveIntersectPoint',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSCurveOnSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSCurveSurfaceIntersectPoint',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSCVCurve',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSCVSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSDisplay',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSExtrudeSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSFilletCurve',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSFilletSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSGenericMethods',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSGenericMethodsWrapper',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSIndependentPoint',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSIsoCurve',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSLatheSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSMirrorCurve',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSMirrorSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSMultiCurveTrimSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSNBlendSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSObject',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSOffsetCurve',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSOffsetSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSPoint',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSPointConstPoint',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSPointCurve',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSPointCurveOnSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSPointSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSProjectNormalCurve',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSProjectVectorCurve',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSRuledSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSSelection',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSSelector',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSSet',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSSurfaceApproximation',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSSurfaceEdgeCurve',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSSurfaceNormalCurve',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSSurfConstPoint',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSSurfSurfIntersectionCurve',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSTexturePoint',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSTextureSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSULoftSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSUVLoftSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSXFormCurve',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'NURBSXFormSurface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'object',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'ObjectSet',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'OLEMethod',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'OLEObject',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'PathName',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'PickerControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'Point2',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'point3',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'Point4',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'PyWrapperBase',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'Quat',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'RadioControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'Ray',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'RCMenu',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'RolloutFloater',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'SafeArrayWrapper',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'SelectionSet',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'SelectionSetArray',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'set',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'ShadowClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'SliderControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'SpinnerControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'StandardMaterialClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'StaticMethodInterface',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'string',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'StringStream',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'subAnim',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'subRollout',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'TextureClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'time',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'Timer',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'TrackViewPick',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'TriMesh',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'UndefinedClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'UnsuppliedClass',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'UserGeneric',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'ValueRef',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'VertexSelection',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'View2DControl',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'WindowStream',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    },
    {
        label: 'XRefScene',
        detail: 'Primitive Values and constructors',
        kind: CompletionItemKind.Value,
    }
]
const maxScopes = [
    {
        label: 'about',
        kind: CompletionItemKind.Field,
        detail: 'about context expression'
    },
    {
        label: 'coordsys',
        kind: CompletionItemKind.Field,
        detail: 'coordsys context expression'
    },
    { label: 'from', kind: CompletionItemKind.Field, },

    {
        label: 'global',
        kind: CompletionItemKind.Field,
        detail: 'Declare global scope variable'
    },
    {
        label: 'local',
        kind: CompletionItemKind.Field,
        detail: 'Declare local scope variable'
    },
    {
        label: 'mapped',
        kind: CompletionItemKind.Field,
        detail: 'Mapped function'
    },
    {
        label: 'private',
        kind: CompletionItemKind.Field,
        detail: 'Struct private members'
    },
    {
        label: 'public',
        kind: CompletionItemKind.Field,
        detail: 'Struct public memembers'
    },
    {
        label: 'persistent global',
        kind: CompletionItemKind.Field,
        detail: 'Persisten global varialbe'
    }
]
const maxGeneric = [
    { label: 'emptyVal', detail: 'Generic' },
    { label: 'HKEY_CLASSES_ROOT', detail: 'Registry key', kind: CompletionItemKind.Constant },
    { label: 'HKEY_CURRENT_CONFIG', detail: 'Registry key', kind: CompletionItemKind.Constant },
    { label: 'HKEY_CURRENT_USER', detail: 'Registry key', kind: CompletionItemKind.Constant },
    { label: 'HKEY_LOCAL_MACHINE', detail: 'Registry key', kind: CompletionItemKind.Constant },
    { label: 'HKEY_PERFORMANCE_DATA', detail: 'Registry key', kind: CompletionItemKind.Constant },
    { label: 'HKEY_USERS', detail: 'Registry key', kind: CompletionItemKind.Constant },
    {
        label: 'meditMaterials',
        kind: CompletionItemKind.Constant,
        detail: 'Generic'
    },
    {
        label: 'ok',
        kind: CompletionItemKind.Constant,
        detail: 'Generic'
    },
    {
        label: 'selectionSets',
        kind: CompletionItemKind.Constant,
        detail: 'Generic'
    },
    {
        label: 'false',
        kind: CompletionItemKind.Constant,
        detail: 'Boolean value',
    },
    {
        label: 'true',
        kind: CompletionItemKind.Constant,
        detail: 'Boolean value',
    },
    {
        label: 'off',
        kind: CompletionItemKind.Constant,
        detail: 'Boolean value',
    },
    {
        label: 'true',
        kind: CompletionItemKind.Constant,
        detail: 'Boolean value',
    },
    {
        label: 'undefined',
        kind: CompletionItemKind.Constant,
        detail: 'Undefined type'
    },
    {
        label: 'unsupplied',
        kind: CompletionItemKind.Constant,
        detail: 'Unsupplied optional argument value'
    },
    {
        label: 'x_axis',
        kind: CompletionItemKind.Constant,
        detail: 'Axis constant'
    },
    {
        label: 'y_axis',
        kind: CompletionItemKind.Constant,
        detail: 'Axis constant'
    },
    {
        label: 'z_axis',
        kind: CompletionItemKind.Constant,
        detail: 'Axis constant'
    }
]
const maxColors = [
    {
        label: 'Color',
        kind: CompletionItemKind.Color,
        detail: 'Color <r> <g> <b> [<a>]'
    },
    {
        label: 'black',
        detail: 'Default color constants',
        kind: CompletionItemKind.Color,
    },
    {
        label: 'blue',
        detail: 'Default color constants',
        kind: CompletionItemKind.Color,
    },
    {
        label: 'brown',
        detail: 'Default color constants',
        kind: CompletionItemKind.Color,
    },
    {
        label: 'gray',
        detail: 'Default color constants',
        kind: CompletionItemKind.Color,
    },
    {
        label: 'green',
        detail: 'Default color constants',
        kind: CompletionItemKind.Color,
    },
    {
        label: 'orange',
        detail: 'Default color constants',
        kind: CompletionItemKind.Color,
    },
    {
        label: 'red',
        detail: 'Default color constants',
        kind: CompletionItemKind.Color,
    },
    {
        label: 'white',
        detail: 'Default color constants',
        kind: CompletionItemKind.Color,
    },
    {
        label: 'yellow',
        detail: 'Default color constants',
        kind: CompletionItemKind.Color,
    },
]
const maxClasses = [
    {
        label: 'BlendMap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: BakeElement',

    },
    {
        label: 'CompleteMap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: BakeElement',

    },
    {
        label: 'diffuseMap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: BakeElement',

    },
    {
        label: 'HeightMap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: BakeElement',

    },
    {
        label: 'LightingMap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: BakeElement',

    },
    {
        label: 'NormalsMap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: BakeElement',

    },
    {
        label: 'ShadowsMap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: BakeElement',

    },
    {
        label: 'specularMap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: BakeElement',

    },
    {
        label: 'AlembicCamera',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: camera',

    },
    {
        label: 'Freecamera',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: camera',

    },
    {
        label: 'Physical',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: camera',

    },
    {
        label: 'Targetcamera',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: camera',

    },
    {
        label: 'Master_Layer',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: CtrlUserDataTypeClass',

    },
    {
        label: 'CamMatchDataCustAttrib',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: CustAttrib',

    },
    {
        label: 'ParameterCollectorCA',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: CustAttrib',

    },
    {
        label: 'ViewportManagerCustAttrib',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: CustAttrib',

    },
    {
        label: 'Blendfilter',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: filter',

    },
    {
        label: 'Mitchell_Netravali',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: filter',

    },
    {
        label: 'float_limit',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: floatController',

    },
    {
        label: 'float_list',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: floatController',

    },
    {
        label: 'float_script',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: floatController',

    },
    {
        label: 'Noise_float',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: floatController',

    },
    {
        label: 'offsetTimer',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: floatController',

    },
    {
        label: 'Populate',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: floatController',

    },
    {
        label: 'Set_Key_Crtl',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: floatController',

    },
    {
        label: 'AlembicObject',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Awning',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'BiFold',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Blizzard',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'BlobMesh',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Body_Utility',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'BoneGeometry',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Boolean3',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Box',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'C_Ext',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Capsule',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Casement',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'CFDImportData',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'CFDInterpOnSpline',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'CFDVelocityField',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'CFractal',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'ChamferBox',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'ChamferCyl',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Civil_Structure',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Cone',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'ControlContainer',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'ControlContainerGeometry',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'CProxy',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'CScatter',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'CV_Surf',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Cylinder',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Damper',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Editable_mesh',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',
    },
    {
        label: 'Editable_Poly',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Fixed',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Flow',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Foliage',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Gengon',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'GeoSphere',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Hedra',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Hose',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'HubObject',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'IdleAreaObj',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'L_Ext',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'L_Type_Stair',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'LinkBlockInstance',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'LinkLeaf',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Mesher',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'ml_ETFE_cushion',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'ml_Ngon_frame',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'ml_Ngon_hole',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'MSCollision',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'MultiPainter',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'MultiScatter',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'nvBox',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'nvCapsule',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'nvSphere',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'OilTank',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'PArray',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'PCloud',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'PF_Source',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'pivot',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Pivoted',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Plane',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Plant',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Point_Surf',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Point_SurfGeometry',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'PointCloud',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'PolymorphicGeom',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Prism',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'projected',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Pyramid',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'quadPatch',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Railing',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'RingWave',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Seat',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'ShapeMerge',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'SlidingDoor',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'SlidingWindow',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Snow',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Sphere',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Spindle',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Spiral_Stair',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Spray',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Spring',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Straight_Stair',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'SuperSpray',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Teapot',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Terrain',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'TextPlus',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Torus',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Torus_Knot',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'triPatch',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Tube',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'U_Type_Stair',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Wall',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: GeometryClass',

    },
    {
        label: 'Age_Test',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Birth',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Birth_File',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Birth_Group',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Birth_Paint',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Birth_Script',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Birth_Texture',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'BirthGrid',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'BirthStream',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'BoxGizmo',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Cache',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Cache_Disk',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Cache_Selective',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Camera_Culling',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Camera_IMBlur',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'CamPoint',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Character',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'CharacterAssembly',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Collision',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Collision_Spawn',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Cone_Angle',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Container',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Copy_Out',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Crowd',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'CVrWarp',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'CylGizmo',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Data_Icon',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Data_Operator',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Data_Test',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'DaylightAssemblyHead',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Delegate',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'DeleteParticles',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Display_Script',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'DisplayData',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'DisplayParticles',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Dummy',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'ExposeTm',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Find_Target',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Force',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Go_To_Rotation',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'grid',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Group_Operator',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Group_Select',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'IKTarget',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Initial_State',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Keep_Apart',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'LightMeter',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Lock_Bond',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Luminaire',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'mapping',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Mapping_Object',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Material_Dynamic',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Material_Frequency',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Material_Static',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'materialhelper',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'mP_Buoyancy',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'mP_Collision',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'mP_Drag',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'mP_Force',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'mP_Glue',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'mP_InterCollision',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'mP_Shape',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'mP_Solvent',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'mP_Switch',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'mP_World',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'mP_Worldhelper',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Notes',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'nvRagdoll',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Particle_Paint',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Particle_View',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Placement_Paint',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Plane_Angle',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Point',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Position_Icon',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Position_Manip',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Position_Object',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Position_Value',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'PresetOperator',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'PresetOperIcon',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'PresetTest',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'RenderParticles',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'rotation',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Scale_Test',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'ScaleParticles',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Script_Operator',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Script_Test',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Send_Out',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Shape_Facing',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Shape_Instance',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Shape_Mark',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'ShapeLibrary',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'ShapeStandard',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Slider_Manip',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'sliderManipulator',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Spawn',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'speed',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Speed_By_Surface',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Speed_Test',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'SpeedByIcon',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'SphereGizmo',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'spin',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Split_Amount',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Split_Group',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Split_Selected',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Split_Source',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'stop',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Stop_Gradually',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Substitute_Object',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Tape',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Test_Icon',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'UConstraint',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Utility',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'uvwMappingPositionManip',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: helper',

    },
    {
        label: 'Convert_To_SubObject_Type',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: IDataChannelEngineClass',

    },
    {
        label: 'curve',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: IDataChannelEngineClass',

    },
    {
        label: 'decay',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: IDataChannelEngineClass',

    },
    {
        label: 'Edge_Input',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: IDataChannelEngineClass',

    },
    {
        label: 'Edge_Output',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: IDataChannelEngineClass',

    },
    {
        label: 'Engine_Local_Space',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: IDataChannelEngineClass',

    },
    {
        label: 'Face_Input',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: IDataChannelEngineClass',

    },
    {
        label: 'Face_Output',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: IDataChannelEngineClass',

    },
    {
        label: 'MAXScriptIDataChannelEngineClass',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: IDataChannelEngineClass',

    },
    {
        label: 'Operator_ColorElements',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: IDataChannelEngineClass',

    },
    {
        label: 'Operator_ComponentSpace',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: IDataChannelEngineClass',

    },
    {
        label: 'Operator_DeltaMush',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: IDataChannelEngineClass',

    },
    {
        label: 'Operator_GeoQuantize',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: IDataChannelEngineClass',

    },
    {
        label: 'Operator_NodeInfluence',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: IDataChannelEngineClass',

    },
    {
        label: 'Operator_TensionDeform',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: IDataChannelEngineClass',

    },
    {
        label: 'Operator_TransformElements',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: IDataChannelEngineClass',

    },
    {
        label: 'VectorIDataChannelEngineClass',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: IDataChannelEngineClass',

    },
    {
        label: 'Directionallight',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'Free_Area',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'Free_Cylinder',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'Free_Disc',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'Free_Light',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'Free_Linear',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'Free_Sphere',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'freeSpot',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'IES_Sky',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'IES_Sun',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'miAreaLight',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'miAreaLightomni',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'Omnilight',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'Skylight',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'Sun_Positioner',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'Target_Area',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'Target_Cylinder',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'Target_Disc',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'Target_Light',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'Target_Linear',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'Target_Sphere',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'TargetDirectionallight',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'targetSpot',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: light',

    },
    {
        label: 'Block_Control',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: MasterBlockController',

    },
    {
        label: 'Advanced_Lighting_Override',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: material',

    },
    {
        label: 'Arch___Design__mi',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: material',

    },
    {
        label: 'Architectural',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: material',

    },
    {
        label: 'Blend',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: material',

    },
    {
        label: 'compositematerial',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: material',

    },
    {
        label: 'MatteShadow',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: material',

    },
    {
        label: 'MorpherMaterial',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: material',

    },
    {
        label: 'PhysicalMaterial',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: material',

    },
    {
        label: 'RaytraceMaterial',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: material',

    },
    {
        label: 'Standardmaterial',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: material',

    },
    {
        label: 'TopBottom',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: material',

    },
    {
        label: 'XRef_Material',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: material',

    },
    {
        label: 'AlembicXform',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: Matrix3Controller',

    },
    {
        label: 'BipSlave_Control',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: Matrix3Controller',

    },
    {
        label: 'SplineIKChain',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: Matrix3Controller',

    },
    {
        label: 'transform_script',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: Matrix3Controller',

    },
    {
        label: 'Footsteps',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: MAXWrapper',

    },
    {
        label: 'Vertical_Horizontal_Turn',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: MAXWrapper',

    },
    {
        label: 'AdvOutline',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Affect_Region',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'ApplyUVAsColor',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'ApplyUVAsHSLColor',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'ApplyUVAsHSLGradient',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'ApplyUVAsHSLGradientWithMidpoint',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Bevel',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Bevel_Profile',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'CamPerspCorrect',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Cap_Holes',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'CFDColorVerticesMod',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'CFDKeepNVertices',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'CFDVertexPaintChannel',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'CFDVertexPaintVelocity',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Chamfer',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Civil_View_Divide_Spline',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Civil_View_Guard_Rail',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Civil_View_Road_Marking',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Civil_View_Spline_to_Mesh',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Cloth',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Crease',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'CreaseSet',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Data_Channel',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Displace',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'DynBuilding',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Edit_Poly',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'EmptyModifier_Old',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Extrude',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Face_Extrude',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'FFD_2x2x2',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'FFD_3x3x3',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'FFD_4x4x4',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'FFDBox',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'FFDCyl',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'FilterMeshColorsByHue',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Flex',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Garment_Maker',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Greeble',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'HSDS',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Lathe',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Lattice',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'MapScalerOSM',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'MassFX_RBody',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'MaterialByElement',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Materialmodifier',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'mCloth',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Melt',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'meshsmooth',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'mirror',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Morpher',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Noisemodifier',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Normalize_Spl',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Normalmodifier',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Old_Point_Cache',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'OpenSubdiv',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'optimize',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Particle_Face_Creator',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Particle_Skinner',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'PatchDeform',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'PathDeform',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Point_Cache',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Poly_Profile',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Preserve',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Preset_Maker',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Project_Mapping_Holder',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Projection',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'ProOptimizer',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Push',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Quadify_Mesh',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Relax',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Renderable_Spline',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Ripple',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Shell',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Skew',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Skin',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Skin_Morph',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Skin_Wrap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Skin_Wrap_Patch',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'SliceModifier',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'smooth',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'SoftEdge',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Spherify',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Spline_IK_Control',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Squeeze',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'STL_Check',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Stretch',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'subdivide',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Substitute',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'surface',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'SurfDeform',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'sweep',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'symmetry',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Taper',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'tessellate',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'TurboSmooth',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Twist',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Unwrap_UVW',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'UVW_Xform',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Uvwmap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Vertex_Weld',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Vol__Select',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Wave',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Welder',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: modifier',

    },
    {
        label: 'Motion_BlurMPassCamEffect',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: MPassCamEffect',

    },
    {
        label: 'Noise_point3',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: point3Controller',

    },
    {
        label: 'point3_list',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: point3Controller',

    },
    {
        label: 'point3_script',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: point3Controller',

    },
    {
        label: 'point4_list',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: point4Controller',

    },
    {
        label: 'point4_script',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: point4Controller',

    },
    {
        label: 'MCG_rayToSurfacePosition',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: positionController',

    },
    {
        label: 'Noise_position',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: positionController',

    },
    {
        label: 'Path_Constraint',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: positionController',

    },
    {
        label: 'Position_Constraint',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: positionController',

    },
    {
        label: 'position_list',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: positionController',

    },
    {
        label: 'position_script',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: positionController',

    },
    {
        label: 'SpringPositionController',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: positionController',

    },
    {
        label: 'Surface_position',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: positionController',

    },
    {
        label: 'Light_Tracer',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RadiosityEffect',

    },
    {
        label: 'AmountChange',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Auto_Secondary_Element',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Avoid_Behavior',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Bulge_Angle_Deformer',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'ClipAssigner',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'ClipState',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'CogControl',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'colorReferenceTarget',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Condition',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Convert',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'CrowdAssignment',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'CrowdState',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'CrowdTeam',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'CrowdTransition',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'DataViewGroup',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'DigitData',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Discretizator',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'DummyRadMapClass',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'FunctionReferenceTarget',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'geometryReferenceTarget',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Glow_Element',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'icon',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Input_mParticles',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Input_Proxy',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'InputCustom',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'InputStandard',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Joint_Angle_Deformer',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'LightMap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Manual_Secondary_Element',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Metal_Bump9',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Morph_Angle_Deformer',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Multiple_Delegate_Settings',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Multiple_Delegates',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'NotesReferenceTarget',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'ObjAssoc',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'ObjectParameter',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'objectReferenceTarget',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Orientation_Behavior',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Output_mParticles',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'OutputCustom',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'OutputNew',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'OutputStandard',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'OutputTest',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'PainterInterface',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'parameter',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Particles',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Path_Follow_Behavior',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'PhysXPanel',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'PipeReferenceTarget',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'PopCharacter',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Priority',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Project_Mapping',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'randomReferenceTarget',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Ray_Element',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Raytrace_Texture_ParamBlock',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'RaytraceGlobalSettings',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Repel_Behavior',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Ring_Element',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Scalar',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'ScatterReferenceTarget',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Scripted_Behavior',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Seek_Behavior',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Select_Object',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'ShapeControl',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'SharedMotionFlow',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'SharedMotionFlows',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'smoothReferenceTarget',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Space_Warp_Behavior',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Speed_Vary_Behavior',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Star_Element',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Streak_Element',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Surface_Arrive_Behavior',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Surface_Follow_Behavior',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Switch',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'TailData2',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Vector',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Wall_Repel_Behavior',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Wall_Seek_Behavior',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'Wander_Behavior',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ReferenceTarget',

    },
    {
        label: 'blur',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: renderEffect',

    },
    {
        label: 'Brightness_and_Contrast',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: renderEffect',

    },
    {
        label: 'Civil_View_Sight_Checker__Calc',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: renderEffect',

    },
    {
        label: 'Color_Balance',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: renderEffect',

    },
    {
        label: 'dSightRender',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: renderEffect',

    },
    {
        label: 'File_Output',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: renderEffect',

    },
    {
        label: 'Film_Grain',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: renderEffect',

    },
    {
        label: 'HairEffect',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: renderEffect',

    },
    {
        label: 'Lens_Effects',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: renderEffect',

    },
    {
        label: 'Lighting_Analysis_Overlay',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: renderEffect',

    },
    {
        label: 'Motion_Blur',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: renderEffect',

    },
    {
        label: 'alpha',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Atmosphere',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'BackgroundRenderElement',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Beauty',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'BlendRenderElement',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CESSENTIAL_Direct',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CESSENTIAL_Emission',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CESSENTIAL_Indirect',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CESSENTIAL_Reflect',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CESSENTIAL_Refract',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CESSENTIAL_Translucency',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CESSENTIAL_Volumetrics',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CGeometry_NormalsDotProduct',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CGeometry_NormalsGeometry',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CGeometry_NormalsShading',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CGeometry_UvwCoords',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CGeometry_Velocity',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CGeometry_WorldPosition',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CGeometry_ZDepth',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CInfo_NetworkRenderDebugging',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CInfo_RenderStamp',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CInfo_SamplingFocus',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CMasking_ID',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CMasking_Mask',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CMasking_WireColor',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CShading_Albedo',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CShading_Alpha',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CShading_Beauty',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CShading_BloomGlare',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CShading_Components',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CShading_LightMix',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CShading_LightSelect',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CShading_RawComponent',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CShading_Shadows',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CShading_SourceColor',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'CTexmap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Custom_LPE',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Diffuse',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'HairRenderElement',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Illuminance_HDR_Data',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Illuminance_Render_Element',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Ink',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Light__Area',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Light__Environment',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Light__Point',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Lighting',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Lighting_Analysis_Data',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Luminance_HDR_Data',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Luminance_Render_Element',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Material_ID',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'MatteRenderElement',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Mtl__Caustics',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Mtl__Diffuse',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Mtl__Reflections',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Mtl__Self_Illumination',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Mtl__Translucency',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Mtl__Transparency',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'MultiMatteElement',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Object_ID',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Paint',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Reflection',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Refraction',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Self_Illumination',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'ShadowRenderElement',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Specular',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'velocity',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'Z_Depth',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: RenderElement',

    },
    {
        label: 'LookAt_Constraint',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: rotationController',

    },
    {
        label: 'MCG_lookAt',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: rotationController',

    },
    {
        label: 'MCG_rayToSurfaceOrientation',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: rotationController',

    },
    {
        label: 'Noise_rotation',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: rotationController',

    },
    {
        label: 'Orientation_Constraint',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: rotationController',

    },
    {
        label: 'rotation_list',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: rotationController',

    },
    {
        label: 'rotation_script',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: rotationController',

    },
    {
        label: 'Civil_View_Traffic_Data_Constraint',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: scaleController',

    },
    {
        label: 'Noise_scale',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: scaleController',

    },
    {
        label: 'scale_list',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: scaleController',

    },
    {
        label: 'scale_script',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: scaleController',

    },
    {
        label: 'Anisotropic',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: Shader',

    },
    {
        label: 'Blinn',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: Shader',

    },
    {
        label: 'MetalShader',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: Shader',

    },
    {
        label: 'Multi_Layer',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: Shader',

    },
    {
        label: 'Oren_Nayar_Blinn',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: Shader',

    },
    {
        label: 'Phong',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: Shader',

    },
    {
        label: 'Strauss',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: Shader',

    },
    {
        label: 'Translucent_Shader',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: Shader',

    },
    {
        label: 'Adv__Ray_Traced',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: Shadow',

    },
    {
        label: 'Area_Shadows',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: Shadow',

    },
    {
        label: 'raytraceShadow',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: Shadow',

    },
    {
        label: 'shadowMap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: Shadow',

    },
    {
        label: 'XShadow',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: Shadow',

    },
    {
        label: 'angle',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'Arc',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'CFDSplineNode',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'CFDSplinePaths',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'channel',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'Circle',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'CV_Curve',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'CV_Curveshape',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'Donut',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'Egg',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'Ellipse',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'HalfRound',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'Helix',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'line',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'LinearShape',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'LinkBlockInstanceshape',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'LinkLeafshape',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'MCG_Donut',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'MCG_MeshEdgesToSpline',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'MCG_SinWave',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'Ngon',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'NURBSCurveshape',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'Pipe',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'Point_Curve',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'Point_Curveshape',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'PolymorphicGeomshape',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'QuarterRound',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'Rectangle',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'section',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'SplineShape',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'Star',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'StPathClass',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'Tee',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'text',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'WalledRectangle',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'WideFlange',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: shape',

    },
    {
        label: 'Civil_View_Swept_Object',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpModifier',

    },
    {
        label: 'MapScaler',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpModifier',

    },
    {
        label: 'Old_Point_CacheSpacewarpModifier',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpModifier',

    },
    {
        label: 'PFlow_Collision_Shape',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpModifier',

    },
    {
        label: 'Point_CacheSpacewarpModifier',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpModifier',

    },
    {
        label: 'SpacePatchDeform',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpModifier',

    },
    {
        label: 'SpacePathDeform',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpModifier',

    },
    {
        label: 'SpaceSurfDeform',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpModifier',

    },
    {
        label: 'subdivideSpacewarpModifier',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpModifier',

    },
    {
        label: 'Bomb',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'ConformSpaceWarp',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'Deflector',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'gravity',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'MapScalerSpaceWarp',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'Motor',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'Path_Follow',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'PBomb',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'POmniFlect',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'PushSpaceWarp',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'SDeflector',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'SOmniFlect',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'Spacedisplace',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'SpaceFFDBox',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'SpaceFFDCyl',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'Spaceripple',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'SpaceSkew',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'SpaceStretch',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'SpaceTaper',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'SpaceTwist',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'Spacewave',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'UDeflector',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'UOmniFlect',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'Vector_Field',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'Vortex',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'Wind',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: SpacewarpObject',

    },
    {
        label: 'bipedSystem',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: System',

    },
    {
        label: 'Daylight',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: System',

    },
    {
        label: 'Ring_Array',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: System',

    },
    {
        label: 'Sunlight',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: System',

    },
    {
        label: 'XRefObject',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: System',

    },
    {
        label: 'StandardTextureOutput',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: TexOutputClass',

    },
    {
        label: 'BerconGradient',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'BerconMapping',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'BerconNoise',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'BerconTile',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'BerconWood',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Bitmaptexture',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'BlendedBoxMap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Bricks',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Camera_Map_Per_Pixel',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Cellular',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Checker',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Color_Correction',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'ColorMap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Combustion',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'ComplexFresnel',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Dent',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'fallofftextureMap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Flat_Mirror',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'FoliagetextureMap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Gradient',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Gradient_Ramp',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'GradientEdge',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Marble',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Mask',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Mix',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Noise',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Normal_Bump',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'output',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Particle_Age',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Particle_Bitmap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Perlin_Marble',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Physical_Sun___Sky_Environment',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Planet',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'ProSimplex',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'ProVoronoi',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'RandomColor',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Reflect_Refract',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'RGB_Multiply',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'RGB_Tint',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Shader_List__Bump',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Shader_List__Displacement',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Shader_List__Environment',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Shader_List__Lens',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Shader_List__Output',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Shader_List__Photon_Volume',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Shader_List__Shadow',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Shader_List__Texture',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Shader_List__Volume',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'ShapeMap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'SigerScratches',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Smoke',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Speckle',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Splat',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Stucco',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Substance',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Substance_Output',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'swirl',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'TextMap',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'TextureObjMask',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Thin_Wall_Refraction',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'ThinFilm',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Vector_Displacement',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Vector_Map',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Vertex_Color',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Water',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Wood',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: textureMap',

    },
    {
        label: 'Automatic_Exposure_Control',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ToneOperator',

    },
    {
        label: 'Linear_Exposure_Control',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ToneOperator',

    },
    {
        label: 'Logarithmic_Exposure_Control',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ToneOperator',

    },
    {
        label: 'Physical_Camera_Exposure_Control',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ToneOperator',

    },
    {
        label: 'Pseudo_Color_Exposure_Control',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: ToneOperator',

    },
    {
        label: 'Adjust_Color_Tool',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: UserDataTypeClass',

    },
    {
        label: 'BitmapProxy_Config_Dialog',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: UserDataTypeClass',

    },
    {
        label: 'Object_Display_Culling',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: UtilityPlugin',

    },
    {
        label: 'PopRefUtil',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: UtilityPlugin',

    },
    {
        label: 'StandardUVGen',
        kind: CompletionItemKind.Class,
        detail: 'MAXSuperClass: UVGenClass',

    }
]
const maxSuperClass = [
    { label: 'BakeElement', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'camera', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'CtrlUserDataTypeClass', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'CustAttrib', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'filter', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'floatController', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'GeometryClass', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'helper', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'IDataChannelEngineClass', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'light', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'MasterBlockController', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'material', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'Matrix3Controller', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'MAXWrapper', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'modifier', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'MPassCamEffect', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'point3Controller', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'point4Controller', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'positionController', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'RadiosityEffect', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'ReferenceTarget', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'renderEffect', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'RenderElement', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'rotationController', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'scaleController', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'Shader', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'Shadow', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'shape', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'SpacewarpModifier', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'SpacewarpObject', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'System', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'TexOutputClass', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'textureMap', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'ToneOperator', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'UserDataTypeClass', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'UtilityPlugin', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'UVGenClassBakeElement', detail: 'max SuperClass', kind: CompletionItemKind.Module },
    { label: 'UVGenClass', detail: 'max SuperClass', kind: CompletionItemKind.Module },
]
const maxInterfaces = [
    {
        label: 'ActionItemOverrideManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'AnimLayerManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'assemblyMgr',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'ATSOps',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'Autodesk360',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'AutodeskMaterialManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'AutoTangentMan',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'BatchProOptimizer',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'BipFixer',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'BipWorkBench',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'BitmapProxyMgr',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'blockMgr',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'BooleanObjectManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'browserMgr',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'ContainerPreferences',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'CreaseSetManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'custAttribCollapseManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'CustomControlsOptions',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'defaultActions',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'DialogMonitorOPS',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'DisplayManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'dragAndDrop',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'dxshadermanager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'EPolyManipGrip',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'FileResolutionManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'FlightStudioExport',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'FrameTagManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'globalDXDisplayManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'Hair',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'HelpSystem',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'IAutoCamMax',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'iDisplayGamma',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'IInteractionMode',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'InstanceMgr',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'IsolatedVertices',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'IsolateSelection',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'IViewportShadingMgr',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'LayerManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'LightingAnalysisOverlayFactory',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'LockedComponentsMan',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'LockedTracksMan',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'MainThreadTaskManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'MaterialExplorerManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'maxOps',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'MaxRibbon',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'memStreamMgr',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'MeshInspector',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'msZip',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'MtlBrowserFilter_Manager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'MultipleEdges',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'MXSDebugger',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'NamedSelectionSetManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'NetCreateHelpers',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'NodeCloneMgrTest',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'NullInterface',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'NVIDIARenderersHelper',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'objXRefs',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'OGSDiagnostics',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'OverlappedUVWFaces',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'OverlappingFaces',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'PaintSoftSelPresetContext',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'paramWire',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'particleFlow',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'PerezAllWeather',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'PhysSunSky_ShaderGenerator',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'pluginManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'pop',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'ProjectionRenderMgr',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'PseudoColorManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'python',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'radiosityMeshOps',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'RadiosityPreferences',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'reactionMgr',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'refhierarchy',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'renderMessageManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'renderpresets',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'RevitDBManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'RevitImportWorkflow',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'rollup',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'SceneMissingPlugIns',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'SceneRadiosity',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'SkinUtils',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'SME',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'SubstManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'timeSlider',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'TipSystem',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'tmGizmos',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'UtilityPanel',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'ViewCubeOps',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'visualMS',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'WorkingPivot',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',
    },
    {
        label: 'WorkspaceManager',
        kind: CompletionItemKind.Interface,
        detail: 'Max Interface',


    }
]
const maxStructs = [
    {
        label: 'AssertReporter',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'assetBrowser',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'AssetMetadata_StructDef',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'AttachCtrl',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'autoBackup',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'BezierDefaultParams',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'biped',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'CAT_UIItem',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'CAT_UIItem2',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'CINCfg',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'ControlValLookup_struct',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'crowds',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'cui',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'cwscomposite',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'cwskey',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'cwsobject',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'cwsoperator',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'delegates',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'displayColor',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'DOF',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'DontShowAgainDialog',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'dotNet',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'envEffectsDialog',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'fileProperties',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'Filters',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'flexOps',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'globalMotionClipOps',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'globalVars',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'gw',
        detail: 'Viewport drawing methods',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'internet',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'KeyVal_struct',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'lightCreationToolStr',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'LinkCtrl',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'ListCtrl',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'listview',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'ListViewOps',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'macros',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'Main_Ribbon',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'mapPaths',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'MatEditor',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'mcrUtils',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'meditUtilities',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'meshop',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'meshOps',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'mlpop_struct_populateObject',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'mocap',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'modPanel',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'mouse',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'mtlBrowser',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'NodeExposureInterface',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'ObjectPaintStruct',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'options',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'patch',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'patchOps',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'pathConfig',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'pathConfig.mapPaths',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'pathConfig.pluginPaths',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'pathConfig.sessionPaths',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'pathConfig.xrefPaths',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'persistents',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'pluginPaths',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'pointCacheMan',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'polyop',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'polyOps',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'PromptForNameHandler_struct',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'px_multiedit_methods_struct',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'pxNodeKeys',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'refs',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'registry',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'RElement',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'renderers',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'renderSceneDialog',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'Ribbon_Modeling',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'rolloutCreator',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 's_rc2mxs',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'scanlineRender',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'schematicView',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'sessionPaths',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'setKey',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'skinOps',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'snapMode',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'Snaps',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'SortedArray_Struct',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'splineOps',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'sxmlIO',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'symbolicPaths',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'sysInfo',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'systemTools',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'tabbedDialogs',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'TCBDefaultParams',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'terrainOps',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'theHold',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'themixer',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'timeConfiguration',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'toolMode',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'trackbar',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'TreeViewWraps',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'units',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'uvwManipUtils',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'VFB_methods_struct',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'VFB_ViewportInfo',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'VFB_ViewportInfoEntry',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'vfields',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'viewport',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'VLD',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'VRSceneExportInfo',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'WAVsound',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'windows',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'xrefPaths',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    },
    {
        label: 'xrefs',
        detail: 'Max StructDef',
        kind: CompletionItemKind.Struct,
    }
]
//-----------------------------------------------------------------------------------------------------------------
export const maxCompletions =
[
    ...maxConstant,
    ...maxGeneric,
    ...maxObjectSet,
    ...maxKeywords1,
    ...maxUIcontrols,
    ...maxPrimitives,
    ...maxScopes,
    ...maxGenericFn,
    ...maxColors,
    ...maxClasses,
    ...maxSuperClass,
    ...maxInterfaces,
    ...maxStructs
]
//# sourceMappingURL=mxsSchema-simple.js.map