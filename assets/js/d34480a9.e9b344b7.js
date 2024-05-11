"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[282],{53448:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"constructs a new board, automatically creates all the nodes using length and width.\\nIf there is nodeTemplate then automatically reconciles the node with the template.\\nIf random is specified then any random calculations will be using the random you provided","params":[{"name":"length","desc":"","lua_type":"number"},{"name":"width","desc":"","lua_type":"number"},{"name":"nodeTemplate","desc":"the template for nodes to reconcile.","lua_type":"{ [string]: any }"},{"name":"random","desc":"","lua_type":"Random?"}],"returns":[],"function_type":"static","source":{"line":222,"path":"src/server/node.lua"}},{"name":"FindNode","desc":"finds the node in the board, if there is any","params":[{"name":"x","desc":"","lua_type":"number"},{"name":"y","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Node | nil"}],"function_type":"method","source":{"line":247,"path":"src/server/node.lua"}},{"name":"RandomNode","desc":"s a random node in the board","params":[],"returns":[{"desc":"","lua_type":"Node"}],"function_type":"method","source":{"line":259,"path":"src/server/node.lua"}},{"name":"RandomRectangle","desc":"finds a random rectangle","params":[{"name":"length","desc":"","lua_type":"number"},{"name":"width","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"{ Node }"}],"function_type":"method","source":{"line":271,"path":"src/server/node.lua"}},{"name":"RandomSquare","desc":"finds a random square in the table","params":[{"name":"size","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"{Node}"}],"function_type":"method","source":{"line":294,"path":"src/server/node.lua"}}],"properties":[],"types":[],"name":"Board","desc":"# Standards\\n* length means **x axis**\\n* width means **y axis**\\n* If random is specified during construction then random will be used whenever something random is needed.","source":{"line":91,"path":"src/server/node.lua"}}')}}]);