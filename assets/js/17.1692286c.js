(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{290:function(n,t,e){"use strict";e.r(t);var o=e(3),a=Object(o.a)({},(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"react-16-x-context-自己编写的一个简易的redux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-16-x-context-自己编写的一个简易的redux"}},[n._v("#")]),n._v(" react 16.x context 自己编写的一个简易的redux")]),n._v(" "),e("p",[n._v("react 的上下文context是用于深层次嵌套的组件间的传值。")]),n._v(" "),e("h2",{attrs:{id:"react-新的context-api使用，生产-消费者模式，避免了shouldcomponentupdate的冲突"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#react-新的context-api使用，生产-消费者模式，避免了shouldcomponentupdate的冲突"}},[n._v("#")]),n._v(" react 新的context api使用，生产-消费者模式，避免了ShouldComponentUpdate的冲突")]),n._v(" "),e("p",[n._v("新版本的React context使用了Provider和Customer模式，和react-redux的模式非常像。在顶层的Provider中传入value， 在子孙级的Consumer中获取该值，并且能够传递函数，用来修改context，如下代码所示：")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('import React from \'react\';\nimport ReactDOM from \'react-dom\';\n\n// 创建context实例，生产-消费者模式\n// context 新的api 生产-消费模式 避免了ShouldComponentUpdate的冲突 \nconst ThemeContext = React.createContext({\n  background: \'red\',\n  color: \'white\',\n  func: function () {}\n});\n\nclass Header extends React.Component {\n  render() {\n    return (\n      <Title>\n        撒旦法所发生的发生的发生的\n      </Title>\n    );\n  }\n}\n\nclass Title extends React.Component {\n  render() {\n    return (\n      // 消费者\n      <ThemeContext.Consumer>\n        {context => (\n          <h1 style={{ background: context.background, color: context.color }}>\n            <button onClick={()=>{context.func("aasdfas")}}>点击向祖父传值</button>\n            {this.props.children}\n          </h1>\n        )}\n      </ThemeContext.Consumer>\n    );\n  }\n}\n\nclass App extends React.Component {\n  constructor(props) {\n    super(props)\n    this.state = {\n      background: "red",\n      color: "green",\n      buttonContent:"点击换肤",\n    }\n  }\n  clickButton = () => {\n    this.setState({\n      background: "yellow",\n      color: "red"\n    })\n  }\n  passData = (name,...rest) => {\n    this.setState({\n      buttonContent:name\n    })\n  }\n  render() {\n    let { background, color,buttonContent } = this.state;\n    return (\n      <div className="App">\n        <button className="App__button"\n          onClick={this.clickButton}\n        >{buttonContent}</button>\n        {/* 生产者 */}\n        <ThemeContext.Provider value={{ background: background, color: color, func: this.passData }}>\n          <Header />\n        </ThemeContext.Provider>\n      </div>\n\n    );\n  }\n}\nexport default App\n  \n')])])]),e("h2",{attrs:{id:"使用新版本context-实现的简易redux"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#使用新版本context-实现的简易redux"}},[n._v("#")]),n._v(" 使用新版本context 实现的简易redux")]),n._v(" "),e("p",[n._v("1.创建共享数据")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('// data.js\n// 登陆数据\nexport const userLogin = {\n    plantCode:"XCXM",\n    // context 数据里的方法绑定this到Provide,data 为传入的数据\n    changePlantCode(data){\n        this.setState({\n            plantCode:data\n        });\n    },\n}\n// 模型实列选择数据\nexport const selectInstanceId = {\n    instanceId:store.session("instanceId") || "",\n    changeInstanceId(data){\n        this.setState({\n            instanceId:data\n        });\n        store.session("instanceId",data)\n    }\n}\n\n// 电厂组织机构数据\nexport const plantOrgData = {\n    plantData:store.session("plantData") || [],\n    changePlantData(data){\n        this.setState({\n            plantData:data\n        });\n    }\n}\n// 模型实列中文名称\nexport const selectInstanceName= {\n    sel_ins_name:store.session("sel_ins_name") || "",\n    changeInstanceName(data){\n        this.setState({\n            sel_ins_name:data\n        });\n    }\n}\n')])])]),e("p",[n._v("2.创建Provide 组件")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('// index.js\nimport React from "react";\nimport {isFunction} from "@/util/index";\nimport _ from "lodash";\n// 给函数绑定this值和添加参数\nconst bindThis = (store,obj)=>{\n    _.forOwn(store, function(value, key) {\n        if(isFunction(store[key])){\n            store[key] = store[key].bind(obj)\n        }\n      });\n      return store\n}\n\n// react新版本之后，context采用生产-消费模式\n// 创建context实列\nexport const ProvideContext = React.createContext();\nexport  class Provide extends React.Component {\n    constructor(props) {\n        super(props);\n        let store = bindThis(props.store,this); // 绑定this到Provide组件\n        this.state = {...store}\n    }\n    render() {\n        return (\n            <ProvideContext.Provider value={this.state}>\n                {this.props.children}\n            </ProvideContext.Provider>\n        )\n    }\n}\n\n')])])]),e("p",[n._v("3.connect.js")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("import React, { Component } from 'react';\nimport { ProvideContext } from \"./index\";\nconst createConsumer = (arr,consumer)=>{\n    let obj = {}\n    arr.forEach(ele => {\n        obj[ele] = consumer[ele];\n    });\n    return obj\n}\n// arr 为需要获取的context的名字组成的数组\nexport const connect = (arr) => {\n    return (Com) => {\n        class ConnectComponent extends React.Component {\n            render() {\n                return (\n                    <ProvideContext.Consumer>\n                        {(consumer) => {\n                            let obj = createConsumer(arr,consumer);\n                            return (\n                                <Com {...obj} {...this.props} />\n                            )\n                        }}\n                    </ProvideContext.Consumer>\n                );\n            }\n        }\n        return ConnectComponent\n    }\n}\n")])])]),e("p",[n._v("4.根组件中使用")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v('import { userLogin, selectInstanceId,plantOrgData,selectInstanceName } from "@/pages/model/context/data.js";\n<Provide store={{...userLogin,...selectInstanceId,...plantOrgData,...selectInstanceName}}>\n            <Component />\n        </Provide>\n')])])])])}),[],!1,null,null,null);t.default=a.exports}}]);