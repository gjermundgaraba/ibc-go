"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[845],{88136:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>l});var a=t(85893),o=t(11151);const i={title:"Integration",sidebar_label:"Integration",sidebar_position:2,slug:"/middleware/ics29-fee/integration"},r="Integration",c={id:"middleware/ics29-fee/integration",title:"Integration",description:"Learn how to configure the Fee Middleware module with IBC applications. The following document is intended for developers building on top of the Cosmos SDK and only applies for Cosmos SDK chains.",source:"@site/versioned_docs/version-v5.4.x/03-middleware/01-ics29-fee/02-integration.md",sourceDirName:"03-middleware/01-ics29-fee",slug:"/middleware/ics29-fee/integration",permalink:"/v5/middleware/ics29-fee/integration",draft:!1,unlisted:!1,tags:[],version:"v5.4.x",sidebarPosition:2,frontMatter:{title:"Integration",sidebar_label:"Integration",sidebar_position:2,slug:"/middleware/ics29-fee/integration"},sidebar:"defaultSidebar",previous:{title:"Overview",permalink:"/v5/middleware/ics29-fee/overview"},next:{title:"Fee Messages",permalink:"/v5/middleware/ics29-fee/msgs"}},d={},l=[{value:"Pre-requisite Readings",id:"pre-requisite-readings",level:2},{value:"Example integration of the Fee Middleware module",id:"example-integration-of-the-fee-middleware-module",level:2},{value:"Configuring an application stack with Fee Middleware",id:"configuring-an-application-stack-with-fee-middleware",level:2},{value:"Transfer",id:"transfer",level:3},{value:"Interchain Accounts",id:"interchain-accounts",level:3}];function s(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"integration",children:"Integration"}),"\n",(0,a.jsx)(n.admonition,{title:"Synopsis",type:"note",children:(0,a.jsx)(n.p,{children:"Learn how to configure the Fee Middleware module with IBC applications. The following document is intended for developers building on top of the Cosmos SDK and only applies for Cosmos SDK chains."})}),"\n",(0,a.jsx)(n.h2,{id:"pre-requisite-readings",children:"Pre-requisite Readings"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/v5/ibc/middleware/develop",children:"IBC middleware development"})}),"\n",(0,a.jsx)(n.li,{children:(0,a.jsx)(n.a,{href:"/v5/ibc/middleware/integration",children:"IBC middleware integration"})}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["The Fee Middleware module, as the name suggests, plays the role of an IBC middleware and as such must be configured by chain developers to route and handle IBC messages correctly.\nFor Cosmos SDK chains this setup is done via the ",(0,a.jsx)(n.code,{children:"app/app.go"})," file, where modules are constructed and configured in order to bootstrap the blockchain application."]}),"\n",(0,a.jsx)(n.h2,{id:"example-integration-of-the-fee-middleware-module",children:"Example integration of the Fee Middleware module"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"// app.go\n\n// Register the AppModule for the fee middleware module\nModuleBasics = module.NewBasicManager(\n    ...\n    ibcfee.AppModuleBasic{},\n    ...\n)\n\n... \n\n// Add module account permissions for the fee middleware module\nmaccPerms = map[string][]string{\n    ...\n    ibcfeetypes.ModuleName:            nil,\n}\n\n...\n\n// Add fee middleware Keeper\ntype App struct {\n    ...\n\n    IBCFeeKeeper ibcfeekeeper.Keeper\n\n    ...\n}\n\n...\n\n// Create store keys \nkeys := sdk.NewKVStoreKeys(\n    ...\n    ibcfeetypes.StoreKey,\n    ...\n)\n\n... \n\napp.IBCFeeKeeper = ibcfeekeeper.NewKeeper(\n\tappCodec, keys[ibcfeetypes.StoreKey],\n\tapp.IBCKeeper.ChannelKeeper, // may be replaced with IBC middleware\n\tapp.IBCKeeper.ChannelKeeper,\n\t&app.IBCKeeper.PortKeeper, app.AccountKeeper, app.BankKeeper,\n)\n\n\n// See the section below for configuring an application stack with the fee middleware module\n\n...\n\n// Register fee middleware AppModule\napp.moduleManager = module.NewManager(\n    ...\n    ibcfee.NewAppModule(app.IBCFeeKeeper),\n)\n\n...\n\n// Add fee middleware to begin blocker logic\napp.moduleManager.SetOrderBeginBlockers(\n    ...\n    ibcfeetypes.ModuleName,\n    ...\n)\n\n// Add fee middleware to end blocker logic\napp.moduleManager.SetOrderEndBlockers(\n    ...\n    ibcfeetypes.ModuleName,\n    ...\n)\n\n// Add fee middleware to init genesis logic\napp.moduleManager.SetOrderInitGenesis(\n    ...\n    ibcfeetypes.ModuleName,\n    ...\n)\n"})}),"\n",(0,a.jsx)(n.h2,{id:"configuring-an-application-stack-with-fee-middleware",children:"Configuring an application stack with Fee Middleware"}),"\n",(0,a.jsxs)(n.p,{children:["As mentioned in ",(0,a.jsx)(n.a,{href:"/v5/ibc/middleware/develop",children:"IBC middleware development"})," an application stack may be composed of many or no middlewares that nest a base application.\nThese layers form the complete set of application logic that enable developers to build composable and flexible IBC application stacks.\nFor example, an application stack may be just a single base application like ",(0,a.jsx)(n.code,{children:"transfer"}),", however, the same application stack composed with ",(0,a.jsx)(n.code,{children:"29-fee"})," will nest the ",(0,a.jsx)(n.code,{children:"transfer"})," base application\nby wrapping it with the Fee Middleware module."]}),"\n",(0,a.jsx)(n.h3,{id:"transfer",children:"Transfer"}),"\n",(0,a.jsxs)(n.p,{children:["See below for an example of how to create an application stack using ",(0,a.jsx)(n.code,{children:"transfer"})," and ",(0,a.jsx)(n.code,{children:"29-fee"}),".\nThe following ",(0,a.jsx)(n.code,{children:"transferStack"})," is configured in ",(0,a.jsx)(n.code,{children:"app/app.go"})," and added to the IBC ",(0,a.jsx)(n.code,{children:"Router"}),".\nThe in-line comments describe the execution flow of packets between the application stack and IBC core."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:"// Create Transfer Stack\n// SendPacket, since it is originating from the application to core IBC:\n// transferKeeper.SendPacket -> fee.SendPacket -> channel.SendPacket\n\n// RecvPacket, message that originates from core IBC and goes down to app, the flow is the other way\n// channel.RecvPacket -> fee.OnRecvPacket -> transfer.OnRecvPacket\n\n// transfer stack contains (from top to bottom):\n// - IBC Fee Middleware\n// - Transfer\n\n// create IBC module from bottom to top of stack\nvar transferStack porttypes.IBCModule\ntransferStack = transfer.NewIBCModule(app.TransferKeeper)\ntransferStack = ibcfee.NewIBCMiddleware(transferStack, app.IBCFeeKeeper)\n\n// Add transfer stack to IBC Router\nibcRouter.AddRoute(ibctransfertypes.ModuleName, transferStack)\n"})}),"\n",(0,a.jsx)(n.h3,{id:"interchain-accounts",children:"Interchain Accounts"}),"\n",(0,a.jsxs)(n.p,{children:["See below for an example of how to create an application stack using ",(0,a.jsx)(n.code,{children:"27-interchain-accounts"})," and ",(0,a.jsx)(n.code,{children:"29-fee"}),".\nThe following ",(0,a.jsx)(n.code,{children:"icaControllerStack"})," and ",(0,a.jsx)(n.code,{children:"icaHostStack"})," are configured in ",(0,a.jsx)(n.code,{children:"app/app.go"})," and added to the IBC ",(0,a.jsx)(n.code,{children:"Router"})," with the associated authentication module.\nThe in-line comments describe the execution flow of packets between the application stack and IBC core."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-go",children:'// Create Interchain Accounts Stack\n// SendPacket, since it is originating from the application to core IBC:\n// icaAuthModuleKeeper.SendTx -> icaController.SendPacket -> fee.SendPacket -> channel.SendPacket\n\n// initialize ICA module with mock module as the authentication module on the controller side\nvar icaControllerStack porttypes.IBCModule\nicaControllerStack = ibcmock.NewIBCModule(&mockModule, ibcmock.NewMockIBCApp("", scopedICAMockKeeper))\napp.ICAAuthModule = icaControllerStack.(ibcmock.IBCModule)\nicaControllerStack = icacontroller.NewIBCMiddleware(icaControllerStack, app.ICAControllerKeeper)\nicaControllerStack = ibcfee.NewIBCMiddleware(icaControllerStack, app.IBCFeeKeeper)\n\n// RecvPacket, message that originates from core IBC and goes down to app, the flow is:\n// channel.RecvPacket -> fee.OnRecvPacket -> icaHost.OnRecvPacket\n\nvar icaHostStack porttypes.IBCModule\nicaHostStack = icahost.NewIBCModule(app.ICAHostKeeper)\nicaHostStack = ibcfee.NewIBCMiddleware(icaHostStack, app.IBCFeeKeeper)\n\n// Add authentication module, controller and host to IBC router\nibcRouter.\n    // the ICA Controller middleware needs to be explicitly added to the IBC Router because the\n    // ICA controller module owns the port capability for ICA. The ICA authentication module\n    // owns the channel capability.\n    AddRoute(ibcmock.ModuleName+icacontrollertypes.SubModuleName, icaControllerStack) // ica with mock auth module stack route to ica (top level of middleware stack)\n    AddRoute(icacontrollertypes.SubModuleName, icaControllerStack).\n    AddRoute(icahosttypes.SubModuleName, icaHostStack).\n'})})]})}function p(e={}){const{wrapper:n}={...(0,o.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(s,{...e})}):s(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var a=t(67294);const o={},i=a.createContext(o);function r(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);