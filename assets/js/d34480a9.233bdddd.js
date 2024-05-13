"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[282],{53448:e=>{e.exports=JSON.parse('{"functions":[{"name":"new","desc":"constructs a new board, automatically creates all the nodes using length and width.\\nIf there is nodeTemplate then automatically reconciles the node with the template.\\nIf random is specified then any random calculations will be using the random you provided","params":[{"name":"length","desc":"","lua_type":"number"},{"name":"width","desc":"","lua_type":"number"},{"name":"nodeTemplate","desc":"the template for nodes to reconcile.","lua_type":"{ [string]: any }"},{"name":"random","desc":"","lua_type":"Random?"}],"returns":[],"function_type":"static","source":{"line":268,"path":"src/server/node.lua"}},{"name":"FindNode","desc":"finds the node in the board, if there is any","params":[{"name":"x","desc":"","lua_type":"number"},{"name":"y","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"Node | nil"}],"function_type":"method","source":{"line":293,"path":"src/server/node.lua"}},{"name":"RandomNode","desc":"returns a random node on the board.","params":[],"returns":[{"desc":"","lua_type":"Node"}],"function_type":"method","source":{"line":305,"path":"src/server/node.lua"}},{"name":"RandomRectangle","desc":"finds a random rectangle\\n:::caution\\nmay recursively find rectangle if the random node doesn\'t have a rectangle.\\nThis **may** lead to potential yielding or even stack overflow but the chances are **depends on the board size**.\\nto prevent yielding please wrap this method with `:UsePromise`\\n:::","params":[{"name":"length","desc":"","lua_type":"number"},{"name":"width","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"{ Node }"}],"function_type":"method","yields":true,"source":{"line":323,"path":"src/server/node.lua"}},{"name":"RandomSquare","desc":":::caution\\nmay recursively find rectangle if the random node doesn\'t have a square.\\nThis **may** lead to potential yielding or even stack overflow but the chances are **depends on the board size**.\\nto prevent yielding please wrap this method with `:UsePromise`\\n:::","params":[{"name":"size","desc":"","lua_type":"number"}],"returns":[{"desc":"","lua_type":"{ Node }"}],"function_type":"method","yields":true,"source":{"line":354,"path":"src/server/node.lua"}},{"name":"UseFilter","desc":"Removes the result of the node. If the value attached to the key is `false` it will still be filtered out.\\n:::caution\\nwhen passing down the method, please create a anoymous function and return the method you\'re using. **this applies to all `Use` methods**\\n:::","params":[{"name":"filterOut","desc":"the data to see if it should exist","lua_type":"{string}"},{"name":"fn","desc":"the method that is going to be used","lua_type":"() -> Node | {Node}"}],"returns":[{"desc":"","lua_type":"{ Node } | nil"}],"function_type":"method","source":{"line":367,"path":"src/server/node.lua"}},{"name":"UsePromise","desc":"wraps the method you\'re using with a promise so it can avoid potential yielding.\\n\\n:::caution\\nwhen passing down the method, please create a anoymous function and return the method you\'re using. **this applies to all `Use` methods**\\n:::\\n\\n:::tip\\nyou should wrap this into any potential yielding methods. Promises are very flexible!\\n:::\\n\\n```lua\\n\\tlocal node = require(path.to.node)\\n\\tlocal board = node.board.new(2, 2)\\n\\n\\tboard\\n\\t\\t:UsePromise(function()\\n\\t\\t\\treturn board:RandomSquare(2) --this method may yield.\\n\\t\\tend)\\n\\t\\t:andThen(print)\\n```","params":[{"name":"fn","desc":"the method that is going to be used","lua_type":"() -> Node | {Node}"}],"returns":[{"desc":"","lua_type":"Promise"}],"function_type":"method","source":{"line":419,"path":"src/server/node.lua"}},{"name":"UseFilteredResult","desc":"checks if any node needs to be filtered. If any node is determined to be filtered, it will call the function recursively until no node is needed to be filtered.\\n:::caution\\nwhen passing down the method, please create a anoymous function and return the method you\'re using. **this applies to all `Use` methods**\\n:::\\n\\n```lua\\n\\tlocal node = require(path.to.node)\\n\\tlocal board = node.board.new(2, 2)\\n\\tboard\\n\\t\\t:UsePromise(function()\\n\\t\\t\\treturn board:UseFilteredResult({\\"Visited\\"}, function()\\n\\t\\t\\t\\treturn board:RandomSquare(2, 2)\\n\\t\\t\\tend)\\n\\t\\tend)\\n\\t\\t:andThen(print)\\n```","params":[{"name":"filterOut","desc":"the data to see if it should exist","lua_type":"{string}"},{"name":"fn","desc":"the method that is going to be used","lua_type":"() -> Node | {Node}"}],"returns":[],"function_type":"method","yields":true,"source":{"line":446,"path":"src/server/node.lua"}}],"properties":[],"types":[],"name":"Board","desc":"### Standards\\n* length means **x axis**\\n* width means **y axis**\\n* If random is specified during construction then random will be used whenever something random is needed.","source":{"line":129,"path":"src/server/node.lua"}}')}}]);