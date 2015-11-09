$wnd.gwtmaterialdemo.runAsyncCallback8("function $setError(this$static, error){\n  $setText_0(this$static.textObject, error);\n  $addStyleName(this$static.textObject, 'field-error-label');\n  $removeStyleName(this$static.textObject, 'field-success-label');\n  if (this$static.target) {\n    $addStyleName(this$static.target, 'field-error');\n    $removeStyleName(this$static.target, 'field-success');\n  }\n  $setVisible_0(this$static.textObject, true);\n}\n\nfunction $setSuccess(this$static, success){\n  $setText_0(this$static.textObject, success);\n  $addStyleName(this$static.textObject, 'field-success-label');\n  $removeStyleName(this$static.textObject, 'field-error-label');\n  if (this$static.target) {\n    $addStyleName(this$static.target, 'field-success');\n    $removeStyleName(this$static.target, 'field-error');\n  }\n  $setVisible_0(this$static.textObject, true);\n}\n\nfunction $setError_0(this$static){\n  $setError(this$static.errorMixin, 'This is an error message for text area.');\n  $removeClassName(this$static.textArea.element, 'valid');\n  $removeClassName(this$static.textArea.element, 'invalid');\n  $setStyleName(this$static.lblName, 'red-text');\n  $addClassName(this$static.textArea.element, 'invalid');\n}\n\nfunction $setSuccess_0(this$static){\n  $setSuccess(this$static.errorMixin, 'This is a success message text area.');\n  $removeClassName(this$static.textArea.element, 'valid');\n  $removeClassName(this$static.textArea.element, 'invalid');\n  $setStyleName(this$static.lblName, 'green-text');\n  $addClassName(this$static.textArea.element, 'valid');\n}\n\nfunction $setError_1(this$static){\n  $setError(this$static.errorMixin, 'This is an error message for text box.');\n  $removeClassName(this$static.txtBox.element, 'valid');\n  $removeClassName(this$static.txtBox.element, 'invalid');\n  $setStyleName(this$static.lblName, 'red-text');\n  $addClassName(this$static.txtBox.element, 'invalid');\n}\n\nfunction $setSuccess_1(this$static){\n  $setSuccess(this$static.errorMixin, 'This is a success message for text box.');\n  $removeClassName(this$static.txtBox.element, 'valid');\n  $removeClassName(this$static.txtBox.element, 'invalid');\n  $setStyleName(this$static.lblName, 'green-text');\n  $addClassName(this$static.txtBox.element, 'valid');\n}\n\nfunction ErrorsPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(512, 50, $intern_35, ErrorsPresenter);\n_.onReveal = function onReveal_13(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Errors', 'Errors occur when an app fails to complete what is expected, such as: 1. The app does not understand user input,2. The system or app fails , 3. A user intends to run incompatible operations concurrently'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_errors_ErrorsPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.errors', 'ErrorsPresenter', 512);\nfunction $getSimpleSuggestions_0(){\n  var suggestions;\n  suggestions = new MaterialSuggestionOracle;\n  $add_9(suggestions, 'Alabama');\n  $add_9(suggestions, 'Alaska');\n  $add_9(suggestions, 'Arizona');\n  $add_9(suggestions, 'Arkansas');\n  $add_9(suggestions, 'California');\n  $add_9(suggestions, 'Colorado');\n  $add_9(suggestions, 'Connecticut');\n  $add_9(suggestions, 'Delaware');\n  $add_9(suggestions, 'Florida');\n  $add_9(suggestions, 'Georgia');\n  $add_9(suggestions, 'Hawaii');\n  $add_9(suggestions, 'Idaho');\n  $add_9(suggestions, 'Illinois');\n  $add_9(suggestions, 'Indiana');\n  $add_9(suggestions, 'Iowa');\n  $add_9(suggestions, 'Kansas');\n  $add_9(suggestions, 'Kentucky');\n  $add_9(suggestions, 'Louisiana');\n  $add_9(suggestions, 'Maine');\n  $add_9(suggestions, 'Maryland');\n  $add_9(suggestions, 'Massachusetts');\n  $add_9(suggestions, 'Michigan');\n  $add_9(suggestions, 'Minnesota');\n  $add_9(suggestions, 'Mississippi');\n  $add_9(suggestions, 'Missouri');\n  $add_9(suggestions, 'Montana');\n  $add_9(suggestions, 'Louisiana');\n  return suggestions;\n}\n\nfunction ErrorsView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_8(new ErrorsView_BinderImpl$Widgets(this)));\n  $generateAutoComplete(this.acList, $getSimpleSuggestions_0());\n}\n\ndefineClass(646, 54, $intern_36, ErrorsView);\nvar Lgwt_material_design_demo_client_application_components_errors_ErrorsView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.errors', 'ErrorsView', 646);\nfunction ErrorsView_BinderImpl(){\n}\n\ndefineClass(794, 1, {}, ErrorsView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_errors_ErrorsView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.errors', 'ErrorsView_BinderImpl', 794);\nfunction $build_f_HTMLPanel1_8(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialLabel3, f_MaterialRow4, f_MaterialRow6, f_MaterialRow7, f_MaterialRow9, f_MaterialRow10, f_MaterialRow12, f_MaterialRow13, f_MaterialRow15, f_MaterialRow16, f_MaterialRow18, f_MaterialRow19, f_MaterialRow21, f_MaterialRow22, f_MaterialRow24, f_MaterialTitle5, acList, btnError, btnSuccess, f_MaterialTitle8, dp, btnErrorDp, btnSuccessDp, f_MaterialTitle11, tp, btnErrorTime, btnSuccessTime, f_MaterialTitle14, range, btnErrorRange, btnSuccessRange, f_MaterialTitle17, sw, btnErrorSwitch, btnSuccessSwitch, f_MaterialTitle20, txtArea, btnErrorTxtArea, btnSuccessTxtArea, f_MaterialTitle23, txtBox, btnErrorTxtBox, btnSuccessTxtBox;\n  f_HTMLPanel1 = new HTMLPanel($html1_10(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4, this$static.domId5, this$static.domId6, this$static.domId7, this$static.domId8, this$static.domId9, this$static.domId10, this$static.domId11, this$static.domId12, this$static.domId13, this$static.domId14, this$static.domId15).html);\n  __attachRecord__ = attachToDom(f_HTMLPanel1.element);\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  $get_0(this$static.domId5Element);\n  $get_0(this$static.domId6Element);\n  $get_0(this$static.domId7Element);\n  $get_0(this$static.domId8Element);\n  $get_0(this$static.domId9Element);\n  $get_0(this$static.domId10Element);\n  $get_0(this$static.domId11Element);\n  $get_0(this$static.domId12Element);\n  $get_0(this$static.domId13Element);\n  $get_0(this$static.domId14Element);\n  $get_0(this$static.domId15Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML(f_MaterialTitle2.header.element, 'Usage') , $setText_4(f_MaterialTitle2.paragraph, 'You can easily set any error or success messages on each  material widget by calling :') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialLabel3 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel3.directionalTextHelper, 'Supported widgets') , $setFontSize_0(f_MaterialLabel3.fontSizeMixin, '1.5em') , f_MaterialLabel3), $get_0(this$static.domId1Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialRow4 = new MaterialRow , $add_12(f_MaterialRow4, (f_MaterialTitle5 = new MaterialTitle , $setInnerHTML(f_MaterialTitle5.header.element, 'Autocomplete') , f_MaterialTitle5)) , $add_12(f_MaterialRow4, (acList = new MaterialAutoComplete , $setAttribute(acList.itemBox.element, 'placeholder', 'States') , $setGrid(acList.gridMixin, 's12 m12 l5') , this$static.owner.acList = acList , acList)) , f_MaterialRow4), $get_0(this$static.domId2Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialRow6 = new MaterialRow , $add_12(f_MaterialRow6, (btnError = new MaterialButton , btnError.span_0.setText('Error') , $add_12(btnError, btnError.span_0) , $setBackgroundColor(btnError.colorsMixin, 'red') , $setWaves(btnError, ($clinit_WavesType() , LIGHT)) , $addDomHandler(btnError, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , btnError)) , $add_12(f_MaterialRow6, (btnSuccess = new MaterialButton , btnSuccess.span_0.setText('Success') , $add_12(btnSuccess, btnSuccess.span_0) , $setBackgroundColor(btnSuccess.colorsMixin, 'green') , $setWaves(btnSuccess, LIGHT) , $addDomHandler(btnSuccess, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_1)) , btnSuccess)) , f_MaterialRow6), $get_0(this$static.domId3Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialRow7 = new MaterialRow , $add_12(f_MaterialRow7, (f_MaterialTitle8 = new MaterialTitle , $setInnerHTML(f_MaterialTitle8.header.element, 'Date Picker') , f_MaterialTitle8)) , $add_12(f_MaterialRow7, (dp = new MaterialDatePicker , dp.placeholder = 'States' , $setGrid(dp.gridMixin, 's12 m12 l5') , this$static.owner.dp = dp , dp)) , f_MaterialRow7), $get_0(this$static.domId4Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialRow9 = new MaterialRow , $add_12(f_MaterialRow9, (btnErrorDp = new MaterialButton , btnErrorDp.span_0.setText('Error') , $add_12(btnErrorDp, btnErrorDp.span_0) , $setBackgroundColor(btnErrorDp.colorsMixin, 'red') , $setWaves(btnErrorDp, LIGHT) , $addDomHandler(btnErrorDp, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, (null , TYPE_1)) , btnErrorDp)) , $add_12(f_MaterialRow9, (btnSuccessDp = new MaterialButton , btnSuccessDp.span_0.setText('Success') , $add_12(btnSuccessDp, btnSuccessDp.span_0) , $setBackgroundColor(btnSuccessDp.colorsMixin, 'green') , $setWaves(btnSuccessDp, LIGHT) , $addDomHandler(btnSuccessDp, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, (null , TYPE_1)) , btnSuccessDp)) , f_MaterialRow9), $get_0(this$static.domId5Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialRow10 = new MaterialRow , $add_12(f_MaterialRow10, (f_MaterialTitle11 = new MaterialTitle , $setInnerHTML(f_MaterialTitle11.header.element, 'Time Picker') , f_MaterialTitle11)) , $add_12(f_MaterialRow10, (tp = new MaterialTimePicker , $setGrid(tp.gridMixin, 's12 m12 l5') , this$static.owner.tp = tp , tp)) , f_MaterialRow10), $get_0(this$static.domId6Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialRow12 = new MaterialRow , $add_12(f_MaterialRow12, (btnErrorTime = new MaterialButton , btnErrorTime.span_0.setText('Error') , $add_12(btnErrorTime, btnErrorTime.span_0) , $setBackgroundColor(btnErrorTime.colorsMixin, 'red') , $setWaves(btnErrorTime, LIGHT) , $addDomHandler(btnErrorTime, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames13, (null , TYPE_1)) , btnErrorTime)) , $add_12(f_MaterialRow12, (btnSuccessTime = new MaterialButton , btnSuccessTime.span_0.setText('Success') , $add_12(btnSuccessTime, btnSuccessTime.span_0) , $setBackgroundColor(btnSuccessTime.colorsMixin, 'green') , $setWaves(btnSuccessTime, LIGHT) , $addDomHandler(btnSuccessTime, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames14, (null , TYPE_1)) , btnSuccessTime)) , f_MaterialRow12), $get_0(this$static.domId7Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialRow13 = new MaterialRow , $add_12(f_MaterialRow13, (f_MaterialTitle14 = new MaterialTitle , $setInnerHTML(f_MaterialTitle14.header.element, 'Range') , f_MaterialTitle14)) , $add_12(f_MaterialRow13, (range = new MaterialRange , $setGrid(range.gridMixin, 's12 m12 l5') , this$static.owner.range = range , range)) , f_MaterialRow13), $get_0(this$static.domId8Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialRow15 = new MaterialRow , $add_12(f_MaterialRow15, (btnErrorRange = new MaterialButton , btnErrorRange.span_0.setText('Error') , $add_12(btnErrorRange, btnErrorRange.span_0) , $setBackgroundColor(btnErrorRange.colorsMixin, 'red') , $setWaves(btnErrorRange, LIGHT) , $addDomHandler(btnErrorRange, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, (null , TYPE_1)) , btnErrorRange)) , $add_12(f_MaterialRow15, (btnSuccessRange = new MaterialButton , btnSuccessRange.span_0.setText('Success') , $add_12(btnSuccessRange, btnSuccessRange.span_0) , $setBackgroundColor(btnSuccessRange.colorsMixin, 'green') , $setWaves(btnSuccessRange, LIGHT) , $addDomHandler(btnSuccessRange, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, (null , TYPE_1)) , btnSuccessRange)) , f_MaterialRow15), $get_0(this$static.domId9Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialRow16 = new MaterialRow , $add_12(f_MaterialRow16, (f_MaterialTitle17 = new MaterialTitle , $setInnerHTML(f_MaterialTitle17.header.element, 'Switch') , f_MaterialTitle17)) , $add_12(f_MaterialRow16, (sw = new MaterialSwitch , $setGrid(sw.gridMixin, 's12 m12 l5') , this$static.owner.sw = sw , sw)) , f_MaterialRow16), $get_0(this$static.domId10Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialRow18 = new MaterialRow , $add_12(f_MaterialRow18, (btnErrorSwitch = new MaterialButton , btnErrorSwitch.span_0.setText('Error') , $add_12(btnErrorSwitch, btnErrorSwitch.span_0) , $setBackgroundColor(btnErrorSwitch.colorsMixin, 'red') , $setWaves(btnErrorSwitch, LIGHT) , $addDomHandler(btnErrorSwitch, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7, (null , TYPE_1)) , btnErrorSwitch)) , $add_12(f_MaterialRow18, (btnSuccessSwitch = new MaterialButton , btnSuccessSwitch.span_0.setText('Success') , $add_12(btnSuccessSwitch, btnSuccessSwitch.span_0) , $setBackgroundColor(btnSuccessSwitch.colorsMixin, 'green') , $setWaves(btnSuccessSwitch, LIGHT) , $addDomHandler(btnSuccessSwitch, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames8, (null , TYPE_1)) , btnSuccessSwitch)) , f_MaterialRow18), $get_0(this$static.domId11Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialRow19 = new MaterialRow , $add_12(f_MaterialRow19, (f_MaterialTitle20 = new MaterialTitle , $setInnerHTML(f_MaterialTitle20.header.element, 'Text Area') , f_MaterialTitle20)) , $add_12(f_MaterialRow19, (txtArea = new MaterialTextArea , $setInnerHTML(txtArea.textArea.element, 'I Love Material Design') , $addStyleName(txtArea.label_0, 'active') , $setText_0(txtArea.lblName, 'About You') , $setGrid(txtArea.gridMixin, 's12 m12 l5') , this$static.owner.txtArea = txtArea , txtArea)) , f_MaterialRow19), $get_0(this$static.domId12Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialRow21 = new MaterialRow , $add_12(f_MaterialRow21, (btnErrorTxtArea = new MaterialButton , btnErrorTxtArea.span_0.setText('Error') , $add_12(btnErrorTxtArea, btnErrorTxtArea.span_0) , $setBackgroundColor(btnErrorTxtArea.colorsMixin, 'red') , $setWaves(btnErrorTxtArea, LIGHT) , $addDomHandler(btnErrorTxtArea, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames9, (null , TYPE_1)) , btnErrorTxtArea)) , $add_12(f_MaterialRow21, (btnSuccessTxtArea = new MaterialButton , btnSuccessTxtArea.span_0.setText('Success') , $add_12(btnSuccessTxtArea, btnSuccessTxtArea.span_0) , $setBackgroundColor(btnSuccessTxtArea.colorsMixin, 'green') , $setWaves(btnSuccessTxtArea, LIGHT) , $addDomHandler(btnSuccessTxtArea, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames10, (null , TYPE_1)) , btnSuccessTxtArea)) , f_MaterialRow21), $get_0(this$static.domId13Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialRow22 = new MaterialRow , $add_12(f_MaterialRow22, (f_MaterialTitle23 = new MaterialTitle , $setInnerHTML(f_MaterialTitle23.header.element, 'Text Box') , f_MaterialTitle23)) , $add_12(f_MaterialRow22, (txtBox = new MaterialTextBox , $setText_2(txtBox.txtBox, 'Marjorie Matias') , $addStyleName(txtBox.label_0, 'active') , $setText_0(txtBox.lblName, 'First Name') , $setGrid(txtBox.gridMixin, 's12 m12 l5') , this$static.owner.txtBox = txtBox , txtBox)) , f_MaterialRow22), $get_0(this$static.domId14Element));\n  $addAndReplaceElement_0(f_HTMLPanel1, (f_MaterialRow24 = new MaterialRow , $add_12(f_MaterialRow24, (btnErrorTxtBox = new MaterialButton , btnErrorTxtBox.span_0.setText('Error') , $add_12(btnErrorTxtBox, btnErrorTxtBox.span_0) , $setBackgroundColor(btnErrorTxtBox.colorsMixin, 'red') , $setWaves(btnErrorTxtBox, LIGHT) , $addDomHandler(btnErrorTxtBox, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames11, (null , TYPE_1)) , btnErrorTxtBox)) , $add_12(f_MaterialRow24, (btnSuccessTxtBox = new MaterialButton , btnSuccessTxtBox.span_0.setText('Success') , $add_12(btnSuccessTxtBox, btnSuccessTxtBox.span_0) , $setBackgroundColor(btnSuccessTxtBox.colorsMixin, 'green') , $setWaves(btnSuccessTxtBox, LIGHT) , $addDomHandler(btnSuccessTxtBox, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames12, (null , TYPE_1)) , btnSuccessTxtBox)) , f_MaterialRow24), $get_0(this$static.domId15Element));\n  return f_HTMLPanel1;\n}\n\nfunction ErrorsView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ErrorsView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new ErrorsView_BinderImpl$Widgets$2(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new ErrorsView_BinderImpl$Widgets$3(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new ErrorsView_BinderImpl$Widgets$4(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new ErrorsView_BinderImpl$Widgets$5(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new ErrorsView_BinderImpl$Widgets$6(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames7 = new ErrorsView_BinderImpl$Widgets$7(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames8 = new ErrorsView_BinderImpl$Widgets$8(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames9 = new ErrorsView_BinderImpl$Widgets$9(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames10 = new ErrorsView_BinderImpl$Widgets$10(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames11 = new ErrorsView_BinderImpl$Widgets$11(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames12 = new ErrorsView_BinderImpl$Widgets$12(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames13 = new ErrorsView_BinderImpl$Widgets$13(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames14 = new ErrorsView_BinderImpl$Widgets$14(this);\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId5 = $createUniqueId($doc);\n  this.domId6 = $createUniqueId($doc);\n  this.domId7 = $createUniqueId($doc);\n  this.domId8 = $createUniqueId($doc);\n  this.domId9 = $createUniqueId($doc);\n  this.domId10 = $createUniqueId($doc);\n  this.domId11 = $createUniqueId($doc);\n  this.domId12 = $createUniqueId($doc);\n  this.domId13 = $createUniqueId($doc);\n  this.domId14 = $createUniqueId($doc);\n  this.domId15 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n  this.domId5Element = new LazyDomElement(this.domId5);\n  this.domId6Element = new LazyDomElement(this.domId6);\n  this.domId7Element = new LazyDomElement(this.domId7);\n  this.domId8Element = new LazyDomElement(this.domId8);\n  this.domId9Element = new LazyDomElement(this.domId9);\n  this.domId10Element = new LazyDomElement(this.domId10);\n  this.domId11Element = new LazyDomElement(this.domId11);\n  this.domId12Element = new LazyDomElement(this.domId12);\n  this.domId13Element = new LazyDomElement(this.domId13);\n  this.domId14Element = new LazyDomElement(this.domId14);\n  this.domId15Element = new LazyDomElement(this.domId15);\n}\n\ndefineClass(795, 1, {}, ErrorsView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_errors_ErrorsView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.errors', 'ErrorsView_BinderImpl/Widgets', 795);\nfunction ErrorsView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(796, 1, $intern_51, ErrorsView_BinderImpl$Widgets$1);\n_.onClick = function onClick_36(event_0){\n  $setError(this.this$11.owner.acList.errorMixin, 'This is an error message for autocomplete.');\n}\n;\nvar Lgwt_material_design_demo_client_application_components_errors_ErrorsView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.errors', 'ErrorsView_BinderImpl/Widgets/1', 796);\nfunction ErrorsView_BinderImpl$Widgets$10(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(805, 1, $intern_51, ErrorsView_BinderImpl$Widgets$10);\n_.onClick = function onClick_37(event_0){\n  $setSuccess_0(this.this$11.owner.txtArea);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_errors_ErrorsView_1BinderImpl$Widgets$10_2_classLit = createForClass('gwt.material.design.demo.client.application.components.errors', 'ErrorsView_BinderImpl/Widgets/10', 805);\nfunction ErrorsView_BinderImpl$Widgets$11(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(806, 1, $intern_51, ErrorsView_BinderImpl$Widgets$11);\n_.onClick = function onClick_38(event_0){\n  $setError_1(this.this$11.owner.txtBox);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_errors_ErrorsView_1BinderImpl$Widgets$11_2_classLit = createForClass('gwt.material.design.demo.client.application.components.errors', 'ErrorsView_BinderImpl/Widgets/11', 806);\nfunction ErrorsView_BinderImpl$Widgets$12(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(807, 1, $intern_51, ErrorsView_BinderImpl$Widgets$12);\n_.onClick = function onClick_39(event_0){\n  $setSuccess_1(this.this$11.owner.txtBox);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_errors_ErrorsView_1BinderImpl$Widgets$12_2_classLit = createForClass('gwt.material.design.demo.client.application.components.errors', 'ErrorsView_BinderImpl/Widgets/12', 807);\nfunction ErrorsView_BinderImpl$Widgets$13(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(808, 1, $intern_51, ErrorsView_BinderImpl$Widgets$13);\n_.onClick = function onClick_40(event_0){\n  $setError(this.this$11.owner.tp.errorMixin, 'This is an error message for time picker.');\n}\n;\nvar Lgwt_material_design_demo_client_application_components_errors_ErrorsView_1BinderImpl$Widgets$13_2_classLit = createForClass('gwt.material.design.demo.client.application.components.errors', 'ErrorsView_BinderImpl/Widgets/13', 808);\nfunction ErrorsView_BinderImpl$Widgets$14(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(809, 1, $intern_51, ErrorsView_BinderImpl$Widgets$14);\n_.onClick = function onClick_41(event_0){\n  $setSuccess(this.this$11.owner.tp.errorMixin, 'This is a success message for time picker.');\n}\n;\nvar Lgwt_material_design_demo_client_application_components_errors_ErrorsView_1BinderImpl$Widgets$14_2_classLit = createForClass('gwt.material.design.demo.client.application.components.errors', 'ErrorsView_BinderImpl/Widgets/14', 809);\nfunction ErrorsView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(797, 1, $intern_51, ErrorsView_BinderImpl$Widgets$2);\n_.onClick = function onClick_42(event_0){\n  $setSuccess(this.this$11.owner.acList.errorMixin, 'This is a success message for autocomplete');\n}\n;\nvar Lgwt_material_design_demo_client_application_components_errors_ErrorsView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.errors', 'ErrorsView_BinderImpl/Widgets/2', 797);\nfunction ErrorsView_BinderImpl$Widgets$3(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(798, 1, $intern_51, ErrorsView_BinderImpl$Widgets$3);\n_.onClick = function onClick_43(event_0){\n  $setError(this.this$11.owner.dp.errorMixin, 'This is an error message for date picker.');\n}\n;\nvar Lgwt_material_design_demo_client_application_components_errors_ErrorsView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.components.errors', 'ErrorsView_BinderImpl/Widgets/3', 798);\nfunction ErrorsView_BinderImpl$Widgets$4(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(799, 1, $intern_51, ErrorsView_BinderImpl$Widgets$4);\n_.onClick = function onClick_44(event_0){\n  $setSuccess(this.this$11.owner.dp.errorMixin, 'This is a success message for date picker.');\n}\n;\nvar Lgwt_material_design_demo_client_application_components_errors_ErrorsView_1BinderImpl$Widgets$4_2_classLit = createForClass('gwt.material.design.demo.client.application.components.errors', 'ErrorsView_BinderImpl/Widgets/4', 799);\nfunction ErrorsView_BinderImpl$Widgets$5(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(800, 1, $intern_51, ErrorsView_BinderImpl$Widgets$5);\n_.onClick = function onClick_45(event_0){\n  $setError(this.this$11.owner.range.errorMixin, 'This is an error message for range.');\n}\n;\nvar Lgwt_material_design_demo_client_application_components_errors_ErrorsView_1BinderImpl$Widgets$5_2_classLit = createForClass('gwt.material.design.demo.client.application.components.errors', 'ErrorsView_BinderImpl/Widgets/5', 800);\nfunction ErrorsView_BinderImpl$Widgets$6(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(801, 1, $intern_51, ErrorsView_BinderImpl$Widgets$6);\n_.onClick = function onClick_46(event_0){\n  $setSuccess(this.this$11.owner.range.errorMixin, 'This is a success message for range.');\n}\n;\nvar Lgwt_material_design_demo_client_application_components_errors_ErrorsView_1BinderImpl$Widgets$6_2_classLit = createForClass('gwt.material.design.demo.client.application.components.errors', 'ErrorsView_BinderImpl/Widgets/6', 801);\nfunction ErrorsView_BinderImpl$Widgets$7(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(802, 1, $intern_51, ErrorsView_BinderImpl$Widgets$7);\n_.onClick = function onClick_47(event_0){\n  $setError(this.this$11.owner.sw.errorMixin, 'This is an error message for switch.');\n}\n;\nvar Lgwt_material_design_demo_client_application_components_errors_ErrorsView_1BinderImpl$Widgets$7_2_classLit = createForClass('gwt.material.design.demo.client.application.components.errors', 'ErrorsView_BinderImpl/Widgets/7', 802);\nfunction ErrorsView_BinderImpl$Widgets$8(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(803, 1, $intern_51, ErrorsView_BinderImpl$Widgets$8);\n_.onClick = function onClick_48(event_0){\n  $setSuccess(this.this$11.owner.sw.errorMixin, 'This is a success message for switch.');\n}\n;\nvar Lgwt_material_design_demo_client_application_components_errors_ErrorsView_1BinderImpl$Widgets$8_2_classLit = createForClass('gwt.material.design.demo.client.application.components.errors', 'ErrorsView_BinderImpl/Widgets/8', 803);\nfunction ErrorsView_BinderImpl$Widgets$9(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(804, 1, $intern_51, ErrorsView_BinderImpl$Widgets$9);\n_.onClick = function onClick_49(event_0){\n  $setError_0(this.this$11.owner.txtArea);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_errors_ErrorsView_1BinderImpl$Widgets$9_2_classLit = createForClass('gwt.material.design.demo.client.application.components.errors', 'ErrorsView_BinderImpl/Widgets/9', 804);\nfunction $html1_10(arg0, arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8, arg9, arg10, arg11, arg12, arg13, arg14, arg15){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += '\\'><\\/span> <pre>\\n      txtBox.setError(\"Please provide your name\");\\n      txtBox.setError(\"Your username is available\");\\n    <\\/pre> <span id=\\'';\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <blockquote> <p>Autocomplete<\\/p> <p>Date Picker<\\/p> <p>Text Area<\\/p> <p>Text Box<\\/p> <p>Time Picker<\\/p> <\\/blockquote>  <span id='\";\n  $append_3(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_3(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg5));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_3(sb, htmlEscape(arg6));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg7));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_3(sb, htmlEscape(arg8));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg9));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_3(sb, htmlEscape(arg10));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg11));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_3(sb, htmlEscape(arg12));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg13));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_3(sb, htmlEscape(arg14));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg15));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$errors$ErrorsPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$errors$ErrorsPresenter$_annotation$$none$$) {\n    result = new ErrorsPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$errors$ErrorsView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$errors$ErrorsPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$errors$ErrorsPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$errors$ErrorsPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$errors$ErrorsView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$errors$ErrorsView$_annotation$$none$$) {\n    result = new ErrorsView(new ErrorsView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$errors$ErrorsView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$errors$ErrorsView$_annotation$$none$$;\n}\n\ndefineClass(455, 1, $intern_49);\n_.onSuccess_0 = function onSuccess_7(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$errors$ErrorsPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(8);\n\n//# sourceURL=gwtmaterialdemo-8.js\n")
