# Triggers

### To view the existing action 

    wsk list -i
    
### To invoke the existing action

     wsk action invoke hello_world_package/hello_world_runtime -p var1 10 -p var2 20 --blocking -i
     
     
### To invoke the trigger

     wsk trigger fire sum_fifty -i
     
### Result

    ok: triggered /_/sum_fifty with id af946520c4834898946520c483e898cf
    
    wsk activation list -i | grep sum_fifty   
    
   Copy the activation ID of the latest trigger and invoke following command.
    
    wsk activation get {ID} -i          