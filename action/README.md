# Actions


### To view all the packages and actions
    
    wsk list -i
    
### To deploy an action 

     wskdeploy -m actions/manifest.yml
     
### To invoke this action 

     wsk action invoke hello_world_package/hello_world_runtime  --blocking -i -p var1 hello  -p var2  world


- "var1" and "var2" are the attributes of the "params" in action.js    