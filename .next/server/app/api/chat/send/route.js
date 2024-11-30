(()=>{var e={};e.id=333,e.ids=[333],e.modules={20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},27790:e=>{"use strict";e.exports=require("assert")},84770:e=>{"use strict";e.exports=require("crypto")},17702:e=>{"use strict";e.exports=require("events")},98216:e=>{"use strict";e.exports=require("net")},82452:e=>{"use strict";e.exports=require("tls")},21764:e=>{"use strict";e.exports=require("util")},71568:e=>{"use strict";e.exports=require("zlib")},46302:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>h,routeModule:()=>d,serverHooks:()=>g,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>m});var s={};r.r(s),r.d(s,{POST:()=>p});var n=r(88797),a=r(10042),o=r(58492),i=r(59540),u=r(91507),c=r(62085);async function p(e){try{await (0,c.uD)();let{roomId:t,sender:r,message:s}=await e.json(),n=await c.WK.findOne({roomId:t});if(!n)return i.NextResponse.json({error:"Room not found"},{status:404});let a={sender:r,message:s,timestamp:new Date,roomId:t};n.messages.push(a),await n.save();let o=(0,u.Mh)(t);return await (0,u.bG)(o,a),i.NextResponse.json({message:"Message sent successfully"})}catch(e){return console.error("Message sending error:",e),i.NextResponse.json({error:"Failed to send message"},{status:500})}}let d=new n.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/chat/send/route",pathname:"/api/chat/send",filename:"route",bundlePath:"app/api/chat/send/route"},resolvedPagePath:"C:\\Users\\Administrator\\Desktop\\CHAt\\chat-and-share\\app\\api\\chat\\send\\route.ts",nextConfigOutput:"",userland:s}),{workAsyncStorage:l,workUnitAsyncStorage:m,serverHooks:g}=d;function h(){return(0,o.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:m})}},78031:()=>{},35303:()=>{},91507:(e,t,r)=>{"use strict";r.d(t,{Mh:()=>p,bG:()=>c,zD:()=>u});var s=r(47278);let n=[process.env.KAFKA_BROKER_URL],a=new s.Kafka({clientId:"chat-app",brokers:n,retry:{initialRetryTime:100,retries:8}}),o=null;async function i(){return o||(o=a.producer(),await o.connect()),o}function u(e){return a.consumer({groupId:e})}async function c(e,t){let r=await i();await r.send({topic:e,messages:[{value:JSON.stringify(t)}]})}function p(e){return`chat-room-${e}`}},62085:(e,t,r)=>{"use strict";r.d(t,{WK:()=>c,Ee:()=>u,uD:()=>a});let s=require("mongoose");var n=r.n(s);let a=async()=>{try{0===n().connection.readyState&&(await n().connect(process.env.MONGODB_URI),console.log("Connected to MongoDB"))}catch(e){throw console.error("MongoDB connection error:",e),e}},o=new(n()).Schema({imageId:{type:String,required:!0,unique:!0},message:{type:String},imageData:{type:String,required:!0},scheduledForDeletion:{type:Boolean,default:!1},createdAt:{type:Date,default:Date.now}}),i=new(n()).Schema({roomId:{type:String,required:!0,unique:!0},messages:[{sender:{type:String,required:!0},message:{type:String,required:!0},timestamp:{type:Date,default:Date.now}}],createdAt:{type:Date,default:Date.now}}),u=n().models.Image||n().model("Image",o),c=n().models.ChatRoom||n().model("ChatRoom",i)}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[492,661,278],()=>r(46302));module.exports=s})();