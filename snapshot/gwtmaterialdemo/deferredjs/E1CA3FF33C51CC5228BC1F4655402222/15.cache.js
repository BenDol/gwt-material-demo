$wnd.gwtmaterialdemo.runAsyncCallback15("function MaterialScrollspy(){\n  UnorderedList.call(this);\n  $setClassName(($clinit_DOM() , this.element), 'section table-of-contents');\n}\n\ndefineClass(1179, 72, $intern_49, MaterialScrollspy);\n_.onLoad = function onLoad_12(){\n  $wnd.jQuery('.scrollspy').scrollSpy();\n}\n;\nvar Lgwt_material_design_client_ui_MaterialScrollspy_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialScrollspy', 1179);\nfunction ScrollspyPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(519, 50, $intern_38, ScrollspyPresenter);\n_.onReveal = function onReveal_20(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Scrollspy', \"Scrollspy is a jQuery plugin that tracks certain elements and which element the user's screen is currently centered on. Our main demo of this is our table of contents on every documentation page to the right. Clicking on these links will also scroll the page to that element.\"));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_scrollspy_ScrollspyPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.scrollspy', 'ScrollspyPresenter', 519);\nfunction ScrollspyView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_1(new ScrollspyView_BinderImpl$Widgets));\n}\n\ndefineClass(656, 54, $intern_39, ScrollspyView);\nvar Lgwt_material_design_demo_client_application_components_scrollspy_ScrollspyView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.scrollspy', 'ScrollspyView', 656);\nfunction ScrollspyView_BinderImpl(){\n}\n\ndefineClass(831, 1, {}, ScrollspyView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_components_scrollspy_ScrollspyView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.components.scrollspy', 'ScrollspyView_BinderImpl', 831);\nfunction $build_f_MaterialPanel1_1(this$static){\n  var f_MaterialPanel1, f_HTMLPanel2, __attachRecord__, f_MaterialRow3, f_MaterialColumn4, f_MaterialPanel5, f_MaterialTitle6, f_MaterialPanel7, f_MaterialTitle8, f_MaterialPanel9, f_MaterialTitle10, f_MaterialPanel11, f_MaterialTitle12, f_Pre13, sb, f_MaterialColumn14, f_MaterialScrollspy15, f_MaterialLink16, f_MaterialLink17, f_MaterialLink18, f_MaterialLink19;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_13(f_MaterialPanel1, (f_HTMLPanel2 = new HTMLPanel($html2_0(this$static.domId0).html) , __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel2.element)) , $get_0(this$static.domId0Element) , __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element) , $addAndReplaceElement_1(f_HTMLPanel2, (f_MaterialRow3 = new MaterialRow , $add_13(f_MaterialRow3, (f_MaterialColumn4 = new MaterialColumn , $add_13(f_MaterialColumn4, (f_MaterialPanel5 = new MaterialPanel , $add_13(f_MaterialPanel5, (f_MaterialTitle6 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle6.header), 'Topic 1') , $setText_4(f_MaterialTitle6.paragraph, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,') , f_MaterialTitle6)) , $setScrollspy(f_MaterialPanel5.scrollspyMixin, 'topic1') , f_MaterialPanel5)) , $add_13(f_MaterialColumn4, (f_MaterialPanel7 = new MaterialPanel , $add_13(f_MaterialPanel7, (f_MaterialTitle8 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle8.header), 'Topic 2') , $setText_4(f_MaterialTitle8.paragraph, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,') , f_MaterialTitle8)) , $setScrollspy(f_MaterialPanel7.scrollspyMixin, 'topic2') , f_MaterialPanel7)) , $add_13(f_MaterialColumn4, (f_MaterialPanel9 = new MaterialPanel , $add_13(f_MaterialPanel9, (f_MaterialTitle10 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle10.header), 'Topic 3') , $setText_4(f_MaterialTitle10.paragraph, 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,') , f_MaterialTitle10)) , $setScrollspy(f_MaterialPanel9.scrollspyMixin, 'topic3') , f_MaterialPanel9)) , $add_13(f_MaterialColumn4, (f_MaterialPanel11 = new MaterialPanel , $add_13(f_MaterialPanel11, (f_MaterialTitle12 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle12.header), 'Code') , $setText_4(f_MaterialTitle12.paragraph, '') , f_MaterialTitle12)) , $add_13(f_MaterialPanel11, (f_Pre13 = new Pre , $setHTML(f_Pre13, (sb = new StringBuilder , sb.string += '&lt;m:MaterialRow&gt; &lt;m:MaterialColumn grid=\"l10\"&gt; &lt;m:MaterialPanel scrollspy=\"topic1\"&gt; &lt;m:MaterialTitle title=\"Topic 1\" description=\"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,\"/&gt; &lt;/m:MaterialPanel&gt; &lt;m:MaterialPanel scrollspy=\"topic2\"&gt; &lt;m:MaterialTitle title=\"Topic 2\" description=\"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,\"/&gt; &lt;/m:MaterialPanel&gt; &lt;m:MaterialPanel scrollspy=\"topci3\"&gt; &lt;m:MaterialTitle title=\"Topic 3\" description=\"Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc,\"/&gt; &lt;/m:MaterialPanel&gt; &lt;m:MaterialPanel scrollspy=\"code\"&gt; &lt;m:MaterialTitle title=\"Code\" description=\"\"/&gt; &lt;/m:MaterialPanel&gt; &lt;/m:MaterialColumn&gt; &lt;m:MaterialColumn grid=\"l2\" addStyleNames=\"hide-on-small-only\"&gt; &lt;m:MaterialScrollspy addStyleNames=\"pinned\" color=\"green\"&gt; &lt;m:item&gt;&lt;m:MaterialLink href=\"#topic1\" text=\"Topic 1\"/&gt;&lt;/m:item&gt; &lt;m:item&gt;&lt;m:MaterialLink href=\"#topic2\" text=\"Topic 2\"/&gt;&lt;/m:item&gt; &lt;m:item&gt;&lt;m:MaterialLink href=\"#topic3\" text=\"Topic 3\"/&gt;&lt;/m:item&gt; &lt;m:item&gt;&lt;m:MaterialLink href=\"#code\" text=\"Code\"/&gt;&lt;/m:item&gt; &lt;/m:MaterialScrollspy&gt; &lt;/m:MaterialColumn&gt; &lt;/m:MaterialRow&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , f_Pre13)) , $setScrollspy(f_MaterialPanel11.scrollspyMixin, 'code') , f_MaterialPanel11)) , $setGrid(f_MaterialColumn4.gridMixin, 'l10') , f_MaterialColumn4)) , $add_13(f_MaterialRow3, (f_MaterialColumn14 = new MaterialColumn , $add_13(f_MaterialColumn14, (f_MaterialScrollspy15 = new MaterialScrollspy , $add_19(f_MaterialScrollspy15, (f_MaterialLink16 = new MaterialLink , f_MaterialLink16.span_0.setText('Topic 1') , $add_13(f_MaterialLink16, f_MaterialLink16.span_0) , $setAttribute(f_MaterialLink16.element, 'href', '#topic1') , f_MaterialLink16)) , $add_19(f_MaterialScrollspy15, (f_MaterialLink17 = new MaterialLink , f_MaterialLink17.span_0.setText('Topic 2') , $add_13(f_MaterialLink17, f_MaterialLink17.span_0) , $setAttribute(f_MaterialLink17.element, 'href', '#topic2') , f_MaterialLink17)) , $add_19(f_MaterialScrollspy15, (f_MaterialLink18 = new MaterialLink , f_MaterialLink18.span_0.setText('Topic 3') , $add_13(f_MaterialLink18, f_MaterialLink18.span_0) , $setAttribute(f_MaterialLink18.element, 'href', '#topic3') , f_MaterialLink18)) , $add_19(f_MaterialScrollspy15, (f_MaterialLink19 = new MaterialLink , f_MaterialLink19.span_0.setText('Code') , $add_13(f_MaterialLink19, f_MaterialLink19.span_0) , $setAttribute(f_MaterialLink19.element, 'href', '#code') , f_MaterialLink19)) , setStyleName(f_MaterialScrollspy15.element, 'pinned', true) , $setTextColor(f_MaterialScrollspy15.colorsMixin, 'green') , f_MaterialScrollspy15)) , setStyleName(f_MaterialColumn14.element, 'hide-on-small-only', true) , $setGrid(f_MaterialColumn14.gridMixin, 'l2') , f_MaterialColumn14)) , f_MaterialRow3), $get_0(this$static.domId0Element)) , f_HTMLPanel2));\n  return f_MaterialPanel1;\n}\n\nfunction ScrollspyView_BinderImpl$Widgets(){\n  this.domId0 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n}\n\ndefineClass(832, 1, {}, ScrollspyView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_scrollspy_ScrollspyView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.scrollspy', 'ScrollspyView_BinderImpl/Widgets', 832);\nfunction $html2_0(arg0){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_3(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$scrollspy$ScrollspyPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$scrollspy$ScrollspyPresenter$_annotation$$none$$) {\n    result = new ScrollspyPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$components$scrollspy$ScrollspyView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$components$scrollspy$ScrollspyPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$scrollspy$ScrollspyPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$scrollspy$ScrollspyPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$scrollspy$ScrollspyView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$scrollspy$ScrollspyView$_annotation$$none$$) {\n    result = new ScrollspyView(new ScrollspyView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$scrollspy$ScrollspyView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$scrollspy$ScrollspyView$_annotation$$none$$;\n}\n\ndefineClass(469, 1, $intern_52);\n_.onSuccess_0 = function onSuccess_14(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$scrollspy$ScrollspyPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(15);\n\n//# sourceURL=gwtmaterialdemo-15.js\n")
