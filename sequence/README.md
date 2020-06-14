# Sequences


### To deploy the function sequence

    wskdeploy -m sequence/manifest.yaml 
    
### To invoke the sequence

    wsk action invoke simple_interest_package/simple_interest_calculator  -p principal 1000 -p rate 10 -p time 2 --blocking -i
