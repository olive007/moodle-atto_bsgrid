YUI.add("moodle-atto_bsgrid-button",function(e,t){function h(e,t){for(var n=0;n<e.length;n++)if(e[n]===t)return!0;return!1}var n="atto_bsgrid",r="atto_bsgrid",i={INPUTSUBMIT:"atto_bsgrid_selectcolumns"},s='<div class="container-fluid"><div class="row-fluid"><div class="span6"><p>'+M.util.get_string("column1")+"</p></div>"+'<div class="span6"><p>'+M.util.get_string("column2")+"</p></div>"+"</div>"+"</div>",o='<div class="container-fluid"><div class="row-fluid"><div class="span4"><p>'+M.util.get_string("column1")+"</p></div>"+'<div class="span4"><p>'+M.util.get_string("column2")+"</p></div>"+'<div class="span4"><p>'+M.util.get_string("column3")+"</p></div>"+"</div>"+"</div>",u='<div class="container-fluid"><div class="row row-fluid"><div class="col-md-4 span4"><p>'+M.util.get_string("column1")+"</p></div>"+'<div class="col-md-8 span8"><p>'+M.util.get_string("column2")+"</p></div>"+"</div>"+"</div>",a='<div class="container-fluid"><div class="row row-fluid"><div class="col-md-8 span8"><p>'+M.util.get_string("column1")+"</p></div>"+'<div class="col-md-4 span4"><p>'+M.util.get_string("column1")+"</p></div>"+"</div>"+"</div>",f='<div class="container-fluid"><div class="row-fluid"><div class="span3"><p>'+M.util.get_string("column1")+"</p></div>"+'<div class="span3"><p>'+M.util.get_string("column2")+"</p></div>"+'<div class="span3"><p>'+M.util.get_string("column3")+"</p></div>"+'<div class="span3"><p>'+M.util.get_string("column4")+"</p></div>"+"</div>"+"</div>",l='<div class="container-fluid"><div class="row-fluid"><div class="span2"><p>'+M.util.get_string("column1")+"</p></div>"+'<div class="span2"><p>'+M.util.get_string("column2")+"</p></div>"+'<div class="span2"><p>'+M.util.get_string("column3")+"</p></div>"+'<div class="span2"><p>'+M.util.get_string("column4")+"</p></div>"+'<div class="span2"><p>'+M.util.get_string("column5")+"</p></div>"+'<div class="span2"><p>'+M.util.get_string("column6")+"</p></div>"+"</div>"+"</div>",c={col2:{template:s,icon:"col2",title:M.util.get_string("col2")},col3:{template:o,icon:"col3",title:M.util.get_string("col3")},col1x3:{template:u,icon:"col1x3",title:M.util.get_string("col1x3")},col3x1:{template:a,icon:"col3x1",title:M.util.get_string("col3x1")},col4:{template:f,icon:"col4",title:M.util.get_string("col4")},col6:{template:l,icon:"col6",title:M.util.get_string("col6")}},p="";e.namespace("M.atto_bsgrid").Button=e.Base.create("button",e.M.editor_atto.EditorPlugin,[],{initializer:function(){if(this.get("disabled"))return;var t=["iconone"];p+='<form class="atto_form"><div id="{{elementid}}_{{innerform}}" class="mdl-align">';for(var n in c)h(this.get("enabled_templates"),n)&&(p+='<a class="bsgridtemplateicon {{CSS.INPUTSUBMIT}}" alt="'+c[n].title+'" title="'+c[n].title+'" data-template="'+n+'">'+'<img src="'+M.util.image_url("ed/"+c[n].icon,"atto_bsgrid")+'"/>'+"</a>");p+="</div></form>",e.Array.each(t,function(e){this.addButton({icon:"ed/"+e,iconComponent:"atto_bsgrid",buttonName:e,callback:this._displayDialogue,callbackArgs:e})},this)},_displayDialogue:function(t,r){t.preventDefault();var i=400,s=this.getDialogue({headerContent:M.util.get_string("dialogtitle",n),width:i+"px",focusAfterHide:r});s.width!==i+"px"&&s.set("width",i+"px");var o=this._getFormContent(r),u=e.Node.create("<div></div>");u.append(o),s.set("bodyContent",u),s.show(),this.markUpdated()},_getFormContent:function(t){var r=e.Handlebars.compile(p),s=e.Node.create(r({elementid:this.get("host").get("elementid"),CSS:i,component:n,clickedicon:t}));return this._form=s,this._form.all("."+i.INPUTSUBMIT).on("click",this._doInsert,this),s},_doInsert:function(e){e.preventDefault(),this.getDialogue({focusAfterHide:null}).hide(),this.editor.focus();var t=e.currentTarget.getAttribute("data-template");this.get("host").insertContentAtFocusPoint(c[t].template),this.markUpdated()}},{ATTRS:{enabled_templates:{values:["col2","col3","col1x3","col3x1","col4","col6"]}}})},"@VERSION@",{requires:["moodle-editor_atto-plugin"]});
