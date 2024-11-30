/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "app/api/chat/stream/route";
exports.ids = ["app/api/chat/stream/route"];
exports.modules = {

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/***/ ((module) => {

"use strict";
module.exports = require("mongoose");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "assert":
/*!*************************!*\
  !*** external "assert" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("assert");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ "events":
/*!*************************!*\
  !*** external "events" ***!
  \*************************/
/***/ ((module) => {

"use strict";
module.exports = require("events");

/***/ }),

/***/ "net":
/*!**********************!*\
  !*** external "net" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("net");

/***/ }),

/***/ "tls":
/*!**********************!*\
  !*** external "tls" ***!
  \**********************/
/***/ ((module) => {

"use strict";
module.exports = require("tls");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ }),

/***/ "zlib":
/*!***********************!*\
  !*** external "zlib" ***!
  \***********************/
/***/ ((module) => {

"use strict";
module.exports = require("zlib");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Fstream%2Froute&page=%2Fapi%2Fchat%2Fstream%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Fstream%2Froute.ts&appDir=C%3A%5CUsers%5CAdministrator%5CDesktop%5CCHAt%5Cchat-and-share%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdministrator%5CDesktop%5CCHAt%5Cchat-and-share&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Fstream%2Froute&page=%2Fapi%2Fchat%2Fstream%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Fstream%2Froute.ts&appDir=C%3A%5CUsers%5CAdministrator%5CDesktop%5CCHAt%5Cchat-and-share%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdministrator%5CDesktop%5CCHAt%5Cchat-and-share&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_Administrator_Desktop_CHAt_chat_and_share_app_api_chat_stream_route_ts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/chat/stream/route.ts */ \"(rsc)/./app/api/chat/stream/route.ts\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/chat/stream/route\",\n        pathname: \"/api/chat/stream\",\n        filename: \"route\",\n        bundlePath: \"app/api/chat/stream/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\Administrator\\\\Desktop\\\\CHAt\\\\chat-and-share\\\\app\\\\api\\\\chat\\\\stream\\\\route.ts\",\n    nextConfigOutput,\n    userland: C_Users_Administrator_Desktop_CHAt_chat_and_share_app_api_chat_stream_route_ts__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZjaGF0JTJGc3RyZWFtJTJGcm91dGUmcGFnZT0lMkZhcGklMkZjaGF0JTJGc3RyZWFtJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGY2hhdCUyRnN0cmVhbSUyRnJvdXRlLnRzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNBZG1pbmlzdHJhdG9yJTVDRGVza3RvcCU1Q0NIQXQlNUNjaGF0LWFuZC1zaGFyZSU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDQWRtaW5pc3RyYXRvciU1Q0Rlc2t0b3AlNUNDSEF0JTVDY2hhdC1hbmQtc2hhcmUmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ3lDO0FBQ3RIO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8/NjcyYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBcHBSb3V0ZVJvdXRlTW9kdWxlIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUtbW9kdWxlcy9hcHAtcm91dGUvbW9kdWxlLmNvbXBpbGVkXCI7XG5pbXBvcnQgeyBSb3V0ZUtpbmQgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1raW5kXCI7XG5pbXBvcnQgeyBwYXRjaEZldGNoIGFzIF9wYXRjaEZldGNoIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvbGliL3BhdGNoLWZldGNoXCI7XG5pbXBvcnQgKiBhcyB1c2VybGFuZCBmcm9tIFwiQzpcXFxcVXNlcnNcXFxcQWRtaW5pc3RyYXRvclxcXFxEZXNrdG9wXFxcXENIQXRcXFxcY2hhdC1hbmQtc2hhcmVcXFxcYXBwXFxcXGFwaVxcXFxjaGF0XFxcXHN0cmVhbVxcXFxyb3V0ZS50c1wiO1xuLy8gV2UgaW5qZWN0IHRoZSBuZXh0Q29uZmlnT3V0cHV0IGhlcmUgc28gdGhhdCB3ZSBjYW4gdXNlIHRoZW0gaW4gdGhlIHJvdXRlXG4vLyBtb2R1bGUuXG5jb25zdCBuZXh0Q29uZmlnT3V0cHV0ID0gXCJcIlxuY29uc3Qgcm91dGVNb2R1bGUgPSBuZXcgQXBwUm91dGVSb3V0ZU1vZHVsZSh7XG4gICAgZGVmaW5pdGlvbjoge1xuICAgICAgICBraW5kOiBSb3V0ZUtpbmQuQVBQX1JPVVRFLFxuICAgICAgICBwYWdlOiBcIi9hcGkvY2hhdC9zdHJlYW0vcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9jaGF0L3N0cmVhbVwiLFxuICAgICAgICBmaWxlbmFtZTogXCJyb3V0ZVwiLFxuICAgICAgICBidW5kbGVQYXRoOiBcImFwcC9hcGkvY2hhdC9zdHJlYW0vcm91dGVcIlxuICAgIH0sXG4gICAgcmVzb2x2ZWRQYWdlUGF0aDogXCJDOlxcXFxVc2Vyc1xcXFxBZG1pbmlzdHJhdG9yXFxcXERlc2t0b3BcXFxcQ0hBdFxcXFxjaGF0LWFuZC1zaGFyZVxcXFxhcHBcXFxcYXBpXFxcXGNoYXRcXFxcc3RyZWFtXFxcXHJvdXRlLnRzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Fstream%2Froute&page=%2Fapi%2Fchat%2Fstream%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Fstream%2Froute.ts&appDir=C%3A%5CUsers%5CAdministrator%5CDesktop%5CCHAt%5Cchat-and-share%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdministrator%5CDesktop%5CCHAt%5Cchat-and-share&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(rsc)/./app/api/chat/stream/route.ts":
/*!**************************************!*\
  !*** ./app/api/chat/stream/route.ts ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET)\n/* harmony export */ });\n/* harmony import */ var _app_lib_kafka__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/app/lib/kafka */ \"(rsc)/./app/lib/kafka.ts\");\n/* harmony import */ var _app_lib_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/app/lib/models */ \"(rsc)/./app/lib/models.ts\");\n\n\nasync function GET(request) {\n    const { searchParams } = new URL(request.url);\n    const roomId = searchParams.get('roomId');\n    if (!roomId) {\n        return new Response('Room ID is required', {\n            status: 400\n        });\n    }\n    // Verify room exists\n    try {\n        const room = await _app_lib_models__WEBPACK_IMPORTED_MODULE_1__.ChatRoom.findOne({\n            roomId\n        });\n        if (!room) {\n            return new Response('Room not found', {\n                status: 404\n            });\n        }\n    } catch (error) {\n        console.error('Database error:', error);\n        return new Response('Internal server error', {\n            status: 500\n        });\n    }\n    const encoder = new TextEncoder();\n    const stream = new TransformStream();\n    const writer = stream.writable.getWriter();\n    // Create a unique consumer group ID for this connection\n    const groupId = `chat-consumer-${roomId}-${Date.now()}`;\n    const consumer = (0,_app_lib_kafka__WEBPACK_IMPORTED_MODULE_0__.createConsumer)(groupId);\n    const topic = (0,_app_lib_kafka__WEBPACK_IMPORTED_MODULE_0__.getChatTopicName)(roomId);\n    try {\n        await consumer.connect();\n        await consumer.subscribe({\n            topic,\n            fromBeginning: false\n        });\n        await consumer.run({\n            eachMessage: async ({ message })=>{\n                if (message.value) {\n                    const data = `data: ${message.value.toString()}\\n\\n`;\n                    await writer.write(encoder.encode(data));\n                }\n            }\n        });\n        // Handle client disconnect\n        request.signal.addEventListener('abort', async ()=>{\n            try {\n                await consumer.disconnect();\n            } catch (error) {\n                console.error('Error disconnecting consumer:', error);\n            }\n        });\n        return new Response(stream.readable, {\n            headers: {\n                'Content-Type': 'text/event-stream',\n                'Cache-Control': 'no-cache',\n                'Connection': 'keep-alive'\n            }\n        });\n    } catch (error) {\n        console.error('Kafka error:', error);\n        try {\n            await consumer.disconnect();\n        } catch (disconnectError) {\n            console.error('Error disconnecting consumer:', disconnectError);\n        }\n        return new Response('Error establishing connection', {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2NoYXQvc3RyZWFtL3JvdXRlLnRzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUNtRTtBQUN2QjtBQUVyQyxlQUFlRyxJQUFJQyxPQUFvQjtJQUM1QyxNQUFNLEVBQUVDLFlBQVksRUFBRSxHQUFHLElBQUlDLElBQUlGLFFBQVFHLEdBQUc7SUFDNUMsTUFBTUMsU0FBU0gsYUFBYUksR0FBRyxDQUFDO0lBRWhDLElBQUksQ0FBQ0QsUUFBUTtRQUNYLE9BQU8sSUFBSUUsU0FBUyx1QkFBdUI7WUFBRUMsUUFBUTtRQUFJO0lBQzNEO0lBRUEscUJBQXFCO0lBQ3JCLElBQUk7UUFDRixNQUFNQyxPQUFPLE1BQU1WLHFEQUFRQSxDQUFDVyxPQUFPLENBQUM7WUFBRUw7UUFBTztRQUM3QyxJQUFJLENBQUNJLE1BQU07WUFDVCxPQUFPLElBQUlGLFNBQVMsa0JBQWtCO2dCQUFFQyxRQUFRO1lBQUk7UUFDdEQ7SUFDRixFQUFFLE9BQU9HLE9BQU87UUFDZEMsUUFBUUQsS0FBSyxDQUFDLG1CQUFtQkE7UUFDakMsT0FBTyxJQUFJSixTQUFTLHlCQUF5QjtZQUFFQyxRQUFRO1FBQUk7SUFDN0Q7SUFFQSxNQUFNSyxVQUFVLElBQUlDO0lBQ3BCLE1BQU1DLFNBQVMsSUFBSUM7SUFDbkIsTUFBTUMsU0FBU0YsT0FBT0csUUFBUSxDQUFDQyxTQUFTO0lBRXhDLHdEQUF3RDtJQUN4RCxNQUFNQyxVQUFVLENBQUMsY0FBYyxFQUFFZixPQUFPLENBQUMsRUFBRWdCLEtBQUtDLEdBQUcsSUFBSTtJQUN2RCxNQUFNQyxXQUFXMUIsOERBQWNBLENBQUN1QjtJQUNoQyxNQUFNSSxRQUFRMUIsZ0VBQWdCQSxDQUFDTztJQUUvQixJQUFJO1FBQ0YsTUFBTWtCLFNBQVNFLE9BQU87UUFDdEIsTUFBTUYsU0FBU0csU0FBUyxDQUFDO1lBQUVGO1lBQU9HLGVBQWU7UUFBTTtRQUV2RCxNQUFNSixTQUFTSyxHQUFHLENBQUM7WUFDakJDLGFBQWEsT0FBTyxFQUFFQyxPQUFPLEVBQUU7Z0JBQzdCLElBQUlBLFFBQVFDLEtBQUssRUFBRTtvQkFDakIsTUFBTUMsT0FBTyxDQUFDLE1BQU0sRUFBRUYsUUFBUUMsS0FBSyxDQUFDRSxRQUFRLEdBQUcsSUFBSSxDQUFDO29CQUNwRCxNQUFNaEIsT0FBT2lCLEtBQUssQ0FBQ3JCLFFBQVFzQixNQUFNLENBQUNIO2dCQUNwQztZQUNGO1FBQ0Y7UUFFQSwyQkFBMkI7UUFDM0IvQixRQUFRbUMsTUFBTSxDQUFDQyxnQkFBZ0IsQ0FBQyxTQUFTO1lBQ3ZDLElBQUk7Z0JBQ0YsTUFBTWQsU0FBU2UsVUFBVTtZQUMzQixFQUFFLE9BQU8zQixPQUFPO2dCQUNkQyxRQUFRRCxLQUFLLENBQUMsaUNBQWlDQTtZQUNqRDtRQUNGO1FBRUEsT0FBTyxJQUFJSixTQUFTUSxPQUFPd0IsUUFBUSxFQUFFO1lBQ25DQyxTQUFTO2dCQUNQLGdCQUFnQjtnQkFDaEIsaUJBQWlCO2dCQUNqQixjQUFjO1lBQ2hCO1FBQ0Y7SUFDRixFQUFFLE9BQU83QixPQUFPO1FBQ2RDLFFBQVFELEtBQUssQ0FBQyxnQkFBZ0JBO1FBQzlCLElBQUk7WUFDRixNQUFNWSxTQUFTZSxVQUFVO1FBQzNCLEVBQUUsT0FBT0csaUJBQWlCO1lBQ3hCN0IsUUFBUUQsS0FBSyxDQUFDLGlDQUFpQzhCO1FBQ2pEO1FBQ0EsT0FBTyxJQUFJbEMsU0FBUyxpQ0FBaUM7WUFBRUMsUUFBUTtRQUFJO0lBQ3JFO0FBQ0YiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvYXBpL2NoYXQvc3RyZWFtL3JvdXRlLnRzPzlmMTQiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmV4dFJlcXVlc3QgfSBmcm9tICduZXh0L3NlcnZlcic7XHJcbmltcG9ydCB7IGNyZWF0ZUNvbnN1bWVyLCBnZXRDaGF0VG9waWNOYW1lIH0gZnJvbSAnQC9hcHAvbGliL2thZmthJztcclxuaW1wb3J0IHsgQ2hhdFJvb20gfSBmcm9tICdAL2FwcC9saWIvbW9kZWxzJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxdWVzdDogTmV4dFJlcXVlc3QpIHtcclxuICBjb25zdCB7IHNlYXJjaFBhcmFtcyB9ID0gbmV3IFVSTChyZXF1ZXN0LnVybCk7XHJcbiAgY29uc3Qgcm9vbUlkID0gc2VhcmNoUGFyYW1zLmdldCgncm9vbUlkJyk7XHJcbiAgXHJcbiAgaWYgKCFyb29tSWQpIHtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoJ1Jvb20gSUQgaXMgcmVxdWlyZWQnLCB7IHN0YXR1czogNDAwIH0pO1xyXG4gIH1cclxuXHJcbiAgLy8gVmVyaWZ5IHJvb20gZXhpc3RzXHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHJvb20gPSBhd2FpdCBDaGF0Um9vbS5maW5kT25lKHsgcm9vbUlkIH0pO1xyXG4gICAgaWYgKCFyb29tKSB7XHJcbiAgICAgIHJldHVybiBuZXcgUmVzcG9uc2UoJ1Jvb20gbm90IGZvdW5kJywgeyBzdGF0dXM6IDQwNCB9KTtcclxuICAgIH1cclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignRGF0YWJhc2UgZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSgnSW50ZXJuYWwgc2VydmVyIGVycm9yJywgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IGVuY29kZXIgPSBuZXcgVGV4dEVuY29kZXIoKTtcclxuICBjb25zdCBzdHJlYW0gPSBuZXcgVHJhbnNmb3JtU3RyZWFtKCk7XHJcbiAgY29uc3Qgd3JpdGVyID0gc3RyZWFtLndyaXRhYmxlLmdldFdyaXRlcigpO1xyXG5cclxuICAvLyBDcmVhdGUgYSB1bmlxdWUgY29uc3VtZXIgZ3JvdXAgSUQgZm9yIHRoaXMgY29ubmVjdGlvblxyXG4gIGNvbnN0IGdyb3VwSWQgPSBgY2hhdC1jb25zdW1lci0ke3Jvb21JZH0tJHtEYXRlLm5vdygpfWA7XHJcbiAgY29uc3QgY29uc3VtZXIgPSBjcmVhdGVDb25zdW1lcihncm91cElkKTtcclxuICBjb25zdCB0b3BpYyA9IGdldENoYXRUb3BpY05hbWUocm9vbUlkKTtcclxuXHJcbiAgdHJ5IHtcclxuICAgIGF3YWl0IGNvbnN1bWVyLmNvbm5lY3QoKTtcclxuICAgIGF3YWl0IGNvbnN1bWVyLnN1YnNjcmliZSh7IHRvcGljLCBmcm9tQmVnaW5uaW5nOiBmYWxzZSB9KTtcclxuXHJcbiAgICBhd2FpdCBjb25zdW1lci5ydW4oe1xyXG4gICAgICBlYWNoTWVzc2FnZTogYXN5bmMgKHsgbWVzc2FnZSB9KSA9PiB7XHJcbiAgICAgICAgaWYgKG1lc3NhZ2UudmFsdWUpIHtcclxuICAgICAgICAgIGNvbnN0IGRhdGEgPSBgZGF0YTogJHttZXNzYWdlLnZhbHVlLnRvU3RyaW5nKCl9XFxuXFxuYDtcclxuICAgICAgICAgIGF3YWl0IHdyaXRlci53cml0ZShlbmNvZGVyLmVuY29kZShkYXRhKSk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9LFxyXG4gICAgfSk7XHJcblxyXG4gICAgLy8gSGFuZGxlIGNsaWVudCBkaXNjb25uZWN0XHJcbiAgICByZXF1ZXN0LnNpZ25hbC5hZGRFdmVudExpc3RlbmVyKCdhYm9ydCcsIGFzeW5jICgpID0+IHtcclxuICAgICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBjb25zdW1lci5kaXNjb25uZWN0KCk7XHJcbiAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgZGlzY29ubmVjdGluZyBjb25zdW1lcjonLCBlcnJvcik7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2Uoc3RyZWFtLnJlYWRhYmxlLCB7XHJcbiAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAnQ29udGVudC1UeXBlJzogJ3RleHQvZXZlbnQtc3RyZWFtJyxcclxuICAgICAgICAnQ2FjaGUtQ29udHJvbCc6ICduby1jYWNoZScsXHJcbiAgICAgICAgJ0Nvbm5lY3Rpb24nOiAna2VlcC1hbGl2ZScsXHJcbiAgICAgIH0sXHJcbiAgICB9KTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignS2Fma2EgZXJyb3I6JywgZXJyb3IpO1xyXG4gICAgdHJ5IHtcclxuICAgICAgYXdhaXQgY29uc3VtZXIuZGlzY29ubmVjdCgpO1xyXG4gICAgfSBjYXRjaCAoZGlzY29ubmVjdEVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGRpc2Nvbm5lY3RpbmcgY29uc3VtZXI6JywgZGlzY29ubmVjdEVycm9yKTtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoJ0Vycm9yIGVzdGFibGlzaGluZyBjb25uZWN0aW9uJywgeyBzdGF0dXM6IDUwMCB9KTtcclxuICB9XHJcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29uc3VtZXIiLCJnZXRDaGF0VG9waWNOYW1lIiwiQ2hhdFJvb20iLCJHRVQiLCJyZXF1ZXN0Iiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwicm9vbUlkIiwiZ2V0IiwiUmVzcG9uc2UiLCJzdGF0dXMiLCJyb29tIiwiZmluZE9uZSIsImVycm9yIiwiY29uc29sZSIsImVuY29kZXIiLCJUZXh0RW5jb2RlciIsInN0cmVhbSIsIlRyYW5zZm9ybVN0cmVhbSIsIndyaXRlciIsIndyaXRhYmxlIiwiZ2V0V3JpdGVyIiwiZ3JvdXBJZCIsIkRhdGUiLCJub3ciLCJjb25zdW1lciIsInRvcGljIiwiY29ubmVjdCIsInN1YnNjcmliZSIsImZyb21CZWdpbm5pbmciLCJydW4iLCJlYWNoTWVzc2FnZSIsIm1lc3NhZ2UiLCJ2YWx1ZSIsImRhdGEiLCJ0b1N0cmluZyIsIndyaXRlIiwiZW5jb2RlIiwic2lnbmFsIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRpc2Nvbm5lY3QiLCJyZWFkYWJsZSIsImhlYWRlcnMiLCJkaXNjb25uZWN0RXJyb3IiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./app/api/chat/stream/route.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/kafka.ts":
/*!**************************!*\
  !*** ./app/lib/kafka.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createConsumer: () => (/* binding */ createConsumer),\n/* harmony export */   disconnectKafka: () => (/* binding */ disconnectKafka),\n/* harmony export */   getChatTopicName: () => (/* binding */ getChatTopicName),\n/* harmony export */   getProducer: () => (/* binding */ getProducer),\n/* harmony export */   sendMessage: () => (/* binding */ sendMessage),\n/* harmony export */   testKafkaConnection: () => (/* binding */ testKafkaConnection)\n/* harmony export */ });\n/* harmony import */ var kafkajs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! kafkajs */ \"(rsc)/./node_modules/kafkajs/index.js\");\n/* harmony import */ var kafkajs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(kafkajs__WEBPACK_IMPORTED_MODULE_0__);\n\n// Configure brokers based on environment\nconst brokers = [\n    process.env.KAFKA_BROKER_URL\n];\nconst kafka = new kafkajs__WEBPACK_IMPORTED_MODULE_0__.Kafka({\n    clientId: 'chat-app',\n    brokers,\n    retry: {\n        initialRetryTime: 100,\n        retries: 8\n    }\n});\nlet producer = null;\nasync function getProducer() {\n    if (!producer) {\n        producer = kafka.producer();\n        await producer.connect();\n    }\n    return producer;\n}\nfunction createConsumer(groupId) {\n    return kafka.consumer({\n        groupId\n    });\n}\nasync function sendMessage(topic, message) {\n    const prod = await getProducer();\n    await prod.send({\n        topic,\n        messages: [\n            {\n                value: JSON.stringify(message)\n            }\n        ]\n    });\n}\nasync function disconnectKafka() {\n    if (producer) {\n        await producer.disconnect();\n        producer = null;\n    }\n}\nfunction getChatTopicName(roomId) {\n    return `chat-room-${roomId}`;\n}\nasync function testKafkaConnection() {\n    try {\n        const prod = await getProducer();\n        await prod.send({\n            topic: 'test-topic',\n            messages: [\n                {\n                    value: 'test message'\n                }\n            ]\n        });\n        return true;\n    } catch (error) {\n        console.error('Kafka connection test failed:', error);\n        return false;\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL2thZmthLnRzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQW9EO0FBRXBELHlDQUF5QztBQUN6QyxNQUFNQyxVQUFVO0lBQUNDLFFBQVFDLEdBQUcsQ0FBQ0MsZ0JBQWdCO0NBQVc7QUFFeEQsTUFBTUMsUUFBUSxJQUFJTCwwQ0FBS0EsQ0FBQztJQUN0Qk0sVUFBVTtJQUNWTDtJQUNBTSxPQUFPO1FBQ0xDLGtCQUFrQjtRQUNsQkMsU0FBUztJQUNYO0FBQ0Y7QUFFQSxJQUFJQyxXQUE0QjtBQUV6QixlQUFlQztJQUNwQixJQUFJLENBQUNELFVBQVU7UUFDYkEsV0FBV0wsTUFBTUssUUFBUTtRQUN6QixNQUFNQSxTQUFTRSxPQUFPO0lBQ3hCO0lBQ0EsT0FBT0Y7QUFDVDtBQUVPLFNBQVNHLGVBQWVDLE9BQWU7SUFDNUMsT0FBT1QsTUFBTVUsUUFBUSxDQUFDO1FBQUVEO0lBQVE7QUFDbEM7QUFVTyxlQUFlRSxZQUFZQyxLQUFhLEVBQUVDLE9BQW9CO0lBQ25FLE1BQU1DLE9BQU8sTUFBTVI7SUFDbkIsTUFBTVEsS0FBS0MsSUFBSSxDQUFDO1FBQ2RIO1FBQ0FJLFVBQVU7WUFDUjtnQkFDRUMsT0FBT0MsS0FBS0MsU0FBUyxDQUFDTjtZQUN4QjtTQUNEO0lBQ0g7QUFDRjtBQUVPLGVBQWVPO0lBQ3BCLElBQUlmLFVBQVU7UUFDWixNQUFNQSxTQUFTZ0IsVUFBVTtRQUN6QmhCLFdBQVc7SUFDYjtBQUNGO0FBRU8sU0FBU2lCLGlCQUFpQkMsTUFBYztJQUM3QyxPQUFPLENBQUMsVUFBVSxFQUFFQSxRQUFRO0FBQzlCO0FBRU8sZUFBZUM7SUFDcEIsSUFBSTtRQUNGLE1BQU1WLE9BQU8sTUFBTVI7UUFDbkIsTUFBTVEsS0FBS0MsSUFBSSxDQUFDO1lBQ2RILE9BQU87WUFDUEksVUFBVTtnQkFBQztvQkFBRUMsT0FBTztnQkFBZTthQUFFO1FBQ3ZDO1FBQ0EsT0FBTztJQUNULEVBQUUsT0FBT1EsT0FBTztRQUNkQyxRQUFRRCxLQUFLLENBQUMsaUNBQWlDQTtRQUMvQyxPQUFPO0lBQ1Q7QUFDRiIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2FwcC9saWIva2Fma2EudHM/MjgwZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBLYWZrYSwgUHJvZHVjZXIsIENvbnN1bWVyIH0gZnJvbSAna2Fma2Fqcyc7XHJcblxyXG4vLyBDb25maWd1cmUgYnJva2VycyBiYXNlZCBvbiBlbnZpcm9ubWVudFxyXG5jb25zdCBicm9rZXJzID0gW3Byb2Nlc3MuZW52LktBRktBX0JST0tFUl9VUkwgYXMgc3RyaW5nXTtcclxuXHJcbmNvbnN0IGthZmthID0gbmV3IEthZmthKHtcclxuICBjbGllbnRJZDogJ2NoYXQtYXBwJyxcclxuICBicm9rZXJzLFxyXG4gIHJldHJ5OiB7XHJcbiAgICBpbml0aWFsUmV0cnlUaW1lOiAxMDAsXHJcbiAgICByZXRyaWVzOiA4XHJcbiAgfSxcclxufSk7XHJcblxyXG5sZXQgcHJvZHVjZXI6IFByb2R1Y2VyIHwgbnVsbCA9IG51bGw7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0UHJvZHVjZXIoKSB7XHJcbiAgaWYgKCFwcm9kdWNlcikge1xyXG4gICAgcHJvZHVjZXIgPSBrYWZrYS5wcm9kdWNlcigpO1xyXG4gICAgYXdhaXQgcHJvZHVjZXIuY29ubmVjdCgpO1xyXG4gIH1cclxuICByZXR1cm4gcHJvZHVjZXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVDb25zdW1lcihncm91cElkOiBzdHJpbmcpOiBDb25zdW1lciB7XHJcbiAgcmV0dXJuIGthZmthLmNvbnN1bWVyKHsgZ3JvdXBJZCB9KTtcclxufVxyXG5cclxuZXhwb3J0IGludGVyZmFjZSBDaGF0TWVzc2FnZSB7XHJcbiAgaWQ/OiBzdHJpbmc7XHJcbiAgcm9vbUlkOiBzdHJpbmc7XHJcbiAgbWVzc2FnZTogc3RyaW5nO1xyXG4gIHNlbmRlcjogc3RyaW5nO1xyXG4gIHRpbWVzdGFtcDogRGF0ZTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlbmRNZXNzYWdlKHRvcGljOiBzdHJpbmcsIG1lc3NhZ2U6IENoYXRNZXNzYWdlKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgY29uc3QgcHJvZCA9IGF3YWl0IGdldFByb2R1Y2VyKCk7XHJcbiAgYXdhaXQgcHJvZC5zZW5kKHtcclxuICAgIHRvcGljLFxyXG4gICAgbWVzc2FnZXM6IFtcclxuICAgICAge1xyXG4gICAgICAgIHZhbHVlOiBKU09OLnN0cmluZ2lmeShtZXNzYWdlKSxcclxuICAgICAgfSxcclxuICAgIF0sXHJcbiAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkaXNjb25uZWN0S2Fma2EoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgaWYgKHByb2R1Y2VyKSB7XHJcbiAgICBhd2FpdCBwcm9kdWNlci5kaXNjb25uZWN0KCk7XHJcbiAgICBwcm9kdWNlciA9IG51bGw7XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0Q2hhdFRvcGljTmFtZShyb29tSWQ6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgcmV0dXJuIGBjaGF0LXJvb20tJHtyb29tSWR9YDtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRlc3RLYWZrYUNvbm5lY3Rpb24oKTogUHJvbWlzZTxib29sZWFuPiB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IHByb2QgPSBhd2FpdCBnZXRQcm9kdWNlcigpO1xyXG4gICAgYXdhaXQgcHJvZC5zZW5kKHtcclxuICAgICAgdG9waWM6ICd0ZXN0LXRvcGljJyxcclxuICAgICAgbWVzc2FnZXM6IFt7IHZhbHVlOiAndGVzdCBtZXNzYWdlJyB9XSxcclxuICAgIH0pO1xyXG4gICAgcmV0dXJuIHRydWU7XHJcbiAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgIGNvbnNvbGUuZXJyb3IoJ0thZmthIGNvbm5lY3Rpb24gdGVzdCBmYWlsZWQ6JywgZXJyb3IpO1xyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG4gIH1cclxufSJdLCJuYW1lcyI6WyJLYWZrYSIsImJyb2tlcnMiLCJwcm9jZXNzIiwiZW52IiwiS0FGS0FfQlJPS0VSX1VSTCIsImthZmthIiwiY2xpZW50SWQiLCJyZXRyeSIsImluaXRpYWxSZXRyeVRpbWUiLCJyZXRyaWVzIiwicHJvZHVjZXIiLCJnZXRQcm9kdWNlciIsImNvbm5lY3QiLCJjcmVhdGVDb25zdW1lciIsImdyb3VwSWQiLCJjb25zdW1lciIsInNlbmRNZXNzYWdlIiwidG9waWMiLCJtZXNzYWdlIiwicHJvZCIsInNlbmQiLCJtZXNzYWdlcyIsInZhbHVlIiwiSlNPTiIsInN0cmluZ2lmeSIsImRpc2Nvbm5lY3RLYWZrYSIsImRpc2Nvbm5lY3QiLCJnZXRDaGF0VG9waWNOYW1lIiwicm9vbUlkIiwidGVzdEthZmthQ29ubmVjdGlvbiIsImVycm9yIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/kafka.ts\n");

/***/ }),

/***/ "(rsc)/./app/lib/models.ts":
/*!***************************!*\
  !*** ./app/lib/models.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ChatRoom: () => (/* binding */ ChatRoom),\n/* harmony export */   Image: () => (/* binding */ Image),\n/* harmony export */   connectDB: () => (/* binding */ connectDB)\n/* harmony export */ });\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongoose */ \"mongoose\");\n/* harmony import */ var mongoose__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongoose__WEBPACK_IMPORTED_MODULE_0__);\n\nconst connectDB = async ()=>{\n    try {\n        if ((mongoose__WEBPACK_IMPORTED_MODULE_0___default().connection).readyState === 0) {\n            await mongoose__WEBPACK_IMPORTED_MODULE_0___default().connect(process.env.MONGODB_URI);\n            console.log(\"Connected to MongoDB\");\n        }\n    } catch (error) {\n        console.error(\"MongoDB connection error:\", error);\n        throw error;\n    }\n};\nconst ImageSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    imageId: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    message: {\n        type: String\n    },\n    imageData: {\n        type: String,\n        required: true\n    },\n    scheduledForDeletion: {\n        type: Boolean,\n        default: false\n    },\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nconst ChatRoomSchema = new (mongoose__WEBPACK_IMPORTED_MODULE_0___default().Schema)({\n    roomId: {\n        type: String,\n        required: true,\n        unique: true\n    },\n    messages: [\n        {\n            sender: {\n                type: String,\n                required: true\n            },\n            message: {\n                type: String,\n                required: true\n            },\n            timestamp: {\n                type: Date,\n                default: Date.now\n            }\n        }\n    ],\n    createdAt: {\n        type: Date,\n        default: Date.now\n    }\n});\nconst Image = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).Image || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"Image\", ImageSchema);\nconst ChatRoom = (mongoose__WEBPACK_IMPORTED_MODULE_0___default().models).ChatRoom || mongoose__WEBPACK_IMPORTED_MODULE_0___default().model(\"ChatRoom\", ChatRoomSchema);\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvbGliL21vZGVscy50cyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFnQztBQUVoQyxNQUFNQyxZQUFZO0lBQ2hCLElBQUk7UUFDRixJQUFJRCw0REFBbUIsQ0FBQ0csVUFBVSxLQUFLLEdBQUc7WUFDeEMsTUFBTUgsdURBQWdCLENBQUNLLFFBQVFDLEdBQUcsQ0FBQ0MsV0FBVztZQUM5Q0MsUUFBUUMsR0FBRyxDQUFDO1FBQ2Q7SUFDRixFQUFFLE9BQU9DLE9BQU87UUFDZEYsUUFBUUUsS0FBSyxDQUFDLDZCQUE2QkE7UUFDM0MsTUFBTUE7SUFDUjtBQUNGO0FBRUEsTUFBTUMsY0FBYyxJQUFJWCx3REFBZSxDQUFDO0lBQ3RDYSxTQUFTO1FBQUVDLE1BQU1DO1FBQVFDLFVBQVU7UUFBTUMsUUFBUTtJQUFLO0lBQ3REQyxTQUFTO1FBQUVKLE1BQU1DO0lBQU87SUFDeEJJLFdBQVc7UUFBRUwsTUFBTUM7UUFBUUMsVUFBVTtJQUFLO0lBQzFDSSxzQkFBc0I7UUFBRU4sTUFBTU87UUFBU0MsU0FBUztJQUFNO0lBQ3REQyxXQUFXO1FBQ1RULE1BQU1VO1FBQ05GLFNBQVNFLEtBQUtDLEdBQUc7SUFDbkI7QUFDRjtBQUVBLE1BQU1DLGlCQUFpQixJQUFJMUIsd0RBQWUsQ0FBQztJQUN6QzJCLFFBQVE7UUFBRWIsTUFBTUM7UUFBUUMsVUFBVTtRQUFNQyxRQUFRO0lBQUs7SUFDckRXLFVBQVU7UUFDUjtZQUNFQyxRQUFRO2dCQUFFZixNQUFNQztnQkFBUUMsVUFBVTtZQUFLO1lBQ3ZDRSxTQUFTO2dCQUFFSixNQUFNQztnQkFBUUMsVUFBVTtZQUFLO1lBQ3hDYyxXQUFXO2dCQUFFaEIsTUFBTVU7Z0JBQU1GLFNBQVNFLEtBQUtDLEdBQUc7WUFBQztRQUM3QztLQUNEO0lBQ0RGLFdBQVc7UUFDVFQsTUFBTVU7UUFDTkYsU0FBU0UsS0FBS0MsR0FBRztJQUNuQjtBQUNGO0FBRU8sTUFBTU0sUUFDWC9CLHdEQUFlLENBQUMrQixLQUFLLElBQUkvQixxREFBYyxDQUFDLFNBQVNXLGFBQWE7QUFDekQsTUFBTXVCLFdBQ1hsQyx3REFBZSxDQUFDa0MsUUFBUSxJQUFJbEMscURBQWMsQ0FBQyxZQUFZMEIsZ0JBQWdCO0FBQ3BEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBwL2xpYi9tb2RlbHMudHM/NWMyOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbW9uZ29vc2UgZnJvbSBcIm1vbmdvb3NlXCI7XHJcblxyXG5jb25zdCBjb25uZWN0REIgPSBhc3luYyAoKSA9PiB7XHJcbiAgdHJ5IHtcclxuICAgIGlmIChtb25nb29zZS5jb25uZWN0aW9uLnJlYWR5U3RhdGUgPT09IDApIHtcclxuICAgICAgYXdhaXQgbW9uZ29vc2UuY29ubmVjdChwcm9jZXNzLmVudi5NT05HT0RCX1VSSSEpO1xyXG4gICAgICBjb25zb2xlLmxvZyhcIkNvbm5lY3RlZCB0byBNb25nb0RCXCIpO1xyXG4gICAgfVxyXG4gIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICBjb25zb2xlLmVycm9yKFwiTW9uZ29EQiBjb25uZWN0aW9uIGVycm9yOlwiLCBlcnJvcik7XHJcbiAgICB0aHJvdyBlcnJvcjtcclxuICB9XHJcbn07XHJcblxyXG5jb25zdCBJbWFnZVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIGltYWdlSWQ6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSwgdW5pcXVlOiB0cnVlIH0sXHJcbiAgbWVzc2FnZTogeyB0eXBlOiBTdHJpbmcgfSxcclxuICBpbWFnZURhdGE6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gIHNjaGVkdWxlZEZvckRlbGV0aW9uOiB7IHR5cGU6IEJvb2xlYW4sIGRlZmF1bHQ6IGZhbHNlIH0sXHJcbiAgY3JlYXRlZEF0OiB7XHJcbiAgICB0eXBlOiBEYXRlLFxyXG4gICAgZGVmYXVsdDogRGF0ZS5ub3csXHJcbiAgfSxcclxufSk7XHJcblxyXG5jb25zdCBDaGF0Um9vbVNjaGVtYSA9IG5ldyBtb25nb29zZS5TY2hlbWEoe1xyXG4gIHJvb21JZDogeyB0eXBlOiBTdHJpbmcsIHJlcXVpcmVkOiB0cnVlLCB1bmlxdWU6IHRydWUgfSxcclxuICBtZXNzYWdlczogW1xyXG4gICAge1xyXG4gICAgICBzZW5kZXI6IHsgdHlwZTogU3RyaW5nLCByZXF1aXJlZDogdHJ1ZSB9LFxyXG4gICAgICBtZXNzYWdlOiB7IHR5cGU6IFN0cmluZywgcmVxdWlyZWQ6IHRydWUgfSxcclxuICAgICAgdGltZXN0YW1wOiB7IHR5cGU6IERhdGUsIGRlZmF1bHQ6IERhdGUubm93IH0sXHJcbiAgICB9LFxyXG4gIF0sXHJcbiAgY3JlYXRlZEF0OiB7XHJcbiAgICB0eXBlOiBEYXRlLFxyXG4gICAgZGVmYXVsdDogRGF0ZS5ub3csXHJcbiAgfSxcclxufSk7XHJcblxyXG5leHBvcnQgY29uc3QgSW1hZ2UgPVxyXG4gIG1vbmdvb3NlLm1vZGVscy5JbWFnZSB8fCBtb25nb29zZS5tb2RlbChcIkltYWdlXCIsIEltYWdlU2NoZW1hKTtcclxuZXhwb3J0IGNvbnN0IENoYXRSb29tID1cclxuICBtb25nb29zZS5tb2RlbHMuQ2hhdFJvb20gfHwgbW9uZ29vc2UubW9kZWwoXCJDaGF0Um9vbVwiLCBDaGF0Um9vbVNjaGVtYSk7XHJcbmV4cG9ydCB7IGNvbm5lY3REQiB9O1xyXG4iXSwibmFtZXMiOlsibW9uZ29vc2UiLCJjb25uZWN0REIiLCJjb25uZWN0aW9uIiwicmVhZHlTdGF0ZSIsImNvbm5lY3QiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJJbWFnZVNjaGVtYSIsIlNjaGVtYSIsImltYWdlSWQiLCJ0eXBlIiwiU3RyaW5nIiwicmVxdWlyZWQiLCJ1bmlxdWUiLCJtZXNzYWdlIiwiaW1hZ2VEYXRhIiwic2NoZWR1bGVkRm9yRGVsZXRpb24iLCJCb29sZWFuIiwiZGVmYXVsdCIsImNyZWF0ZWRBdCIsIkRhdGUiLCJub3ciLCJDaGF0Um9vbVNjaGVtYSIsInJvb21JZCIsIm1lc3NhZ2VzIiwic2VuZGVyIiwidGltZXN0YW1wIiwiSW1hZ2UiLCJtb2RlbHMiLCJtb2RlbCIsIkNoYXRSb29tIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/lib/models.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next","vendor-chunks/kafkajs"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fchat%2Fstream%2Froute&page=%2Fapi%2Fchat%2Fstream%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fchat%2Fstream%2Froute.ts&appDir=C%3A%5CUsers%5CAdministrator%5CDesktop%5CCHAt%5Cchat-and-share%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CAdministrator%5CDesktop%5CCHAt%5Cchat-and-share&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();