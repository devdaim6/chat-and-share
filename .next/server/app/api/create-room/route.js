(()=>{var e={};e.id=144,e.ids=[144],e.modules={20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},79348:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},30412:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},27790:e=>{"use strict";e.exports=require("assert")},84770:e=>{"use strict";e.exports=require("crypto")},17702:e=>{"use strict";e.exports=require("events")},98216:e=>{"use strict";e.exports=require("net")},82452:e=>{"use strict";e.exports=require("tls")},21764:e=>{"use strict";e.exports=require("util")},71568:e=>{"use strict";e.exports=require("zlib")},16964:(e,t,r)=>{"use strict";r.r(t),r.d(t,{patchFetch:()=>g,routeModule:()=>d,serverHooks:()=>y,workAsyncStorage:()=>l,workUnitAsyncStorage:()=>m});var o={};r.r(o),r.d(o,{POST:()=>p});var s=r(88797),a=r(10042),i=r(58492),n=r(59540),c=r(62085),u=r(40672);async function p(e){try{let{roomId:t}=await e.json();if(!t)return n.NextResponse.json({error:"Room ID is required"},{status:400});await (0,c.uD)();try{await (0,u.D)(t)}catch(e){return console.error("Kafka setup error:",e),n.NextResponse.json({error:"Failed to setup chat infrastructure"},{status:500})}try{let e=await c.WK.findOne({roomId:t});return e||(e=new c.WK({roomId:t,messages:[]}),await e.save()),n.NextResponse.json({message:"Room created/joined successfully",roomId:e.roomId})}catch(e){return console.error("Database error:",e),n.NextResponse.json({error:"Failed to create room in database"},{status:500})}}catch(e){return console.error("Room creation error:",e),n.NextResponse.json({error:"Failed to create/join room"},{status:500})}}let d=new s.AppRouteRouteModule({definition:{kind:a.RouteKind.APP_ROUTE,page:"/api/create-room/route",pathname:"/api/create-room",filename:"route",bundlePath:"app/api/create-room/route"},resolvedPagePath:"C:\\Users\\Administrator\\Desktop\\CHAt\\chat-and-share\\app\\api\\create-room\\route.ts",nextConfigOutput:"",userland:o}),{workAsyncStorage:l,workUnitAsyncStorage:m,serverHooks:y}=d;function g(){return(0,i.patchFetch)({workAsyncStorage:l,workUnitAsyncStorage:m})}},78031:()=>{},35303:()=>{},40672:(e,t,r)=>{"use strict";r.d(t,{A:()=>n,D:()=>i});var o=r(47278);let s=[process.env.KAFKA_BROKER_URL],a=new o.Kafka({clientId:"chat-admin",brokers:s,retry:{initialRetryTime:100,retries:8}}).admin();async function i(e){if(!e)throw Error("Room ID is required");try{await a.connect();let t=await a.listTopics(),r=`chat-room-${e}`;t.includes(r)||(await a.createTopics({topics:[{topic:r,numPartitions:1,replicationFactor:1}],timeout:5e3}),console.log(`Created topic: ${r}`))}catch(e){throw console.error("Error setting up Kafka topic:",e),e}finally{try{await a.disconnect()}catch(e){console.error("Error disconnecting admin:",e)}}}async function n(e){try{await a.connect(),await a.deleteTopics({topics:[`chat-room-${e}`]})}catch(e){throw console.error("Error deleting Kafka topic:",e),e}finally{await a.disconnect()}}},62085:(e,t,r)=>{"use strict";r.d(t,{WK:()=>u,Ee:()=>c,uD:()=>a});let o=require("mongoose");var s=r.n(o);let a=async()=>{try{0===s().connection.readyState&&(await s().connect(process.env.MONGODB_URI),console.log("Connected to MongoDB"))}catch(e){throw console.error("MongoDB connection error:",e),e}},i=new(s()).Schema({imageId:{type:String,required:!0,unique:!0},message:{type:String},imageData:{type:String,required:!0},scheduledForDeletion:{type:Boolean,default:!1},createdAt:{type:Date,default:Date.now}}),n=new(s()).Schema({roomId:{type:String,required:!0,unique:!0},messages:[{sender:{type:String,required:!0},message:{type:String,required:!0},timestamp:{type:Date,default:Date.now}}],createdAt:{type:Date,default:Date.now}}),c=s().models.Image||s().model("Image",i),u=s().models.ChatRoom||s().model("ChatRoom",n)}};var t=require("../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[492,661,278],()=>r(16964));module.exports=o})();