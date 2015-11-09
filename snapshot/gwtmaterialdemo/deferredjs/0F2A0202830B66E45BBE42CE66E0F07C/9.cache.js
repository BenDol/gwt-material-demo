$wnd.gwtmaterialdemo.runAsyncCallback9("function FooterPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(513, 50, $intern_39, FooterPresenter);\n_.onReveal = function onReveal_14(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Footer', 'Footers are a great way to organize a lot of site navigation and information at the end of a page. This is where the user will look once hes finished scrolling through the current page or is looking for additional information about your website.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_footer_FooterPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.footer', 'FooterPresenter', 513);\nfunction FooterView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_9(new FooterView_BinderImpl$Widgets));\n}\n\ndefineClass(647, 54, $intern_40, FooterView);\nvar Lgwt_material_design_demo_client_application_components_footer_FooterView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.footer', 'FooterView', 647);\nfunction FooterView_BinderImpl(){\n}\n\ndefineClass(807, 1, {}, FooterView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_footer_FooterView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.footer', 'FooterView_BinderImpl', 807);\nfunction $build_f_HTMLPanel1_9(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialTitle2, f_MaterialFooter3, f_MaterialRow4, f_MaterialColumn5, f_MaterialTitle6, btnChat, f_MaterialColumn7, f_MaterialTitle8, btnDownloadPhonegap, f_MaterialFooterCopyright9, f_MaterialLabel10;\n  f_HTMLPanel1 = new HTMLPanel($html1_11(this$static.domId0, this$static.domId1).html);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Introduction') , $setText_4(f_MaterialTitle2.paragraph, 'We use flexbox to structure our html so that the footer is always on the bottom of the page.') , f_MaterialTitle2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement_1(f_HTMLPanel1, (f_MaterialFooter3 = new MaterialFooter , $add_20(f_MaterialFooter3, (f_MaterialRow4 = new MaterialRow , $add_13(f_MaterialRow4, (f_MaterialColumn5 = new MaterialColumn , $add_13(f_MaterialColumn5, (f_MaterialTitle6 = new MaterialTitle , $setTextColor(f_MaterialTitle6.colorsMixin, 'white') , $setInnerHTML($getElement(f_MaterialTitle6.header), 'Join The Discussion') , $setText_4(f_MaterialTitle6.paragraph, 'We provide Gitter Chat rooms in order for GWT Developers discussed and collaborate about GWT Material Design and Phonegap Integration.') , f_MaterialTitle6)) , $add_13(f_MaterialColumn5, (btnChat = new MaterialButton , btnChat.span_0.setText('CHAT') , $add_13(btnChat, btnChat.span_0) , $setBackgroundColor(btnChat.colorsMixin, 'blue lighten-2') , $setWaves(btnChat, ($clinit_WavesType() , LIGHT)) , btnChat)) , $setGrid(f_MaterialColumn5.gridMixin, 's12 m6 l6') , f_MaterialColumn5)) , $add_13(f_MaterialRow4, (f_MaterialColumn7 = new MaterialColumn , $add_13(f_MaterialColumn7, (f_MaterialTitle8 = new MaterialTitle , $setTextColor(f_MaterialTitle8.colorsMixin, 'white') , $setInnerHTML($getElement(f_MaterialTitle8.header), 'GWT Phonegap') , $setText_4(f_MaterialTitle8.paragraph, 'We provide Gitter Chat rooms in order for GWT Developers discussed and collaborate about GWT Material Design and Phonegap Integration.') , f_MaterialTitle8)) , $add_13(f_MaterialColumn7, (btnDownloadPhonegap = new MaterialButton , btnDownloadPhonegap.span_0.setText('GWT Material APK') , $add_13(btnDownloadPhonegap, btnDownloadPhonegap.span_0) , $setBackgroundColor(btnDownloadPhonegap.colorsMixin, 'blue lighten-2') , $setWaves(btnDownloadPhonegap, LIGHT) , btnDownloadPhonegap)) , $setGrid(f_MaterialColumn7.gridMixin, 's12 m6 l6') , f_MaterialColumn7)) , f_MaterialRow4)) , $add_20(f_MaterialFooter3, (f_MaterialFooterCopyright9 = new MaterialFooterCopyright , $add_21(f_MaterialFooterCopyright9, (f_MaterialLabel10 = new MaterialLabel , $setTextOrHtml(f_MaterialLabel10.directionalTextHelper, '\\xA9 2015 Copyright GWT Material') , f_MaterialLabel10)) , f_MaterialFooterCopyright9)) , $setStyleName_0(f_MaterialFooter3, ($build_style_1() , 'KVUXRGB-g-a'), true) , $setBackgroundColor(f_MaterialFooter3.colorsMixin, 'blue') , f_MaterialFooter3), $get_0(this$static.domId1Element));\n  return f_HTMLPanel1;\n}\n\nfunction $build_style_1(){\n  var style;\n  style = (new FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator , $clinit_FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_7);\n  $ensureInjected_12(style);\n  return style;\n}\n\nfunction FooterView_BinderImpl$Widgets(){\n  $build_style_1();\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n}\n\ndefineClass(808, 1, {}, FooterView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_footer_FooterView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.footer', 'FooterView_BinderImpl/Widgets', 808);\nfunction FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator(){\n}\n\ndefineClass(1080, 1, {}, FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator);\nvar style_7;\nvar Lgwt_material_design_demo_client_application_components_footer_FooterView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator_2_classLit = createForClass('gwt.material.design.demo.client.application.components.footer', 'FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator', 1080);\nfunction $ensureInjected_12(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    inject_0(($clinit_LocaleInfo() , '.KVUXRGB-g-a{padding-left:0!important;margin-bottom:20px}'));\n    return true;\n  }\n  return false;\n}\n\nfunction FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(1081, 1, {}, FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_18(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_components_footer_FooterView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.footer', 'FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 1081);\nfunction $clinit_FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_7 = new FooterView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $html1_11(arg0, arg1){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_3(sb, htmlEscape(arg1));\n  sb.string += '\\'><\\/span> <pre>\\n      &lt;m:MaterialFooter backgroundColor=\"blue\" copyright=\"\\xC2\\xA9 2015 Copyright GWT Material\" addStyleNames=\"{style.customFooter}\"&gt;\\n      &lt;m:MaterialRow&gt;\\n      &lt;m:MaterialColumn grid=\"s12 m6 l6\"&gt;\\n      &lt;m:MaterialTitle fontSize=\"0.7em\" color=\"white\" title=\"Join The Discussion\" description=\"We provide Gitter Chat rooms in order for GWT Developers discussed and collaborate about GWT Material Design and Phonegap Integration.\"/&gt;\\n      &lt;m:MaterialButton ui:field=\"btnChat\" text=\"CHAT\" color=\"blue lighten-2\" waves=\"LIGHT\"/&gt;\\n      &lt;/m:MaterialColumn&gt;\\n      &lt;m:MaterialColumn grid=\"s12 m6 l6\"&gt;\\n      &lt;m:MaterialTitle fontSize=\"0.7em\" color=\"white\" title=\"GWT Phonegap\" description=\"We provide Gitter Chat rooms in order for GWT Developers discussed and collaborate about GWT Material Design and Phonegap Integration.\"/&gt;\\n      &lt;m:MaterialButton ui:field=\"btnDownloadPhonegap\" text=\"GWT Material APK\" color=\"blue lighten-2\" waves=\"LIGHT\"/&gt;\\n      &lt;/m:MaterialColumn&gt;\\n      &lt;/m:MaterialRow&gt;\\n      &lt;/m:MaterialFooter&gt;\\n    <\\/pre>';\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$footer$FooterPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$footer$FooterPresenter$_annotation$$none$$) {\n    result = new FooterPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$footer$FooterView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$footer$FooterPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$footer$FooterPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$footer$FooterPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$footer$FooterView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$footer$FooterView$_annotation$$none$$) {\n    result = new FooterView(new FooterView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$footer$FooterView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$footer$FooterView$_annotation$$none$$;\n}\n\ndefineClass(457, 1, $intern_53);\n_.onSuccess_0 = function onSuccess_8(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$footer$FooterPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(9);\n\n//# sourceURL=gwtmaterialdemo-9.js\n")
