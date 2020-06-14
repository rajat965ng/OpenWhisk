# APIS

## action_manifest.yaml
### The action name should match with the api-action mapping at line #12

### To view the list of APIs

    wsk api list -i
    
    
    - Action                                      Verb     API Name  URL
    - /guest/api_hello_world_package/hello_wor     get  hello-world  https://192.168.64.3:31001/api/23bc46b1-71f6-4ed5-8c54-816aa4f8c502/hello/world


### Access API using curl

    curl -k -X GET 'https://192.168.64.3:31001/api/23bc46b1-71f6-4ed5-8c54-816aa4f8c502/hello/world?var1=rajat&var2=nigam' 
    
## sequence_manifest.yaml
### Access API using curl

    curl -k -X GET 'https://192.168.64.3:31001/api/23bc46b1-71f6-4ed5-8c54-816aa4f8c502/v1/calculate?principal=1000&rate=10&time=2'