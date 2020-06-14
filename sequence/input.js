function main(params) {
    r=params.rate/100
    payload = {"principal":params.principal,"time":params.time,"rate":r}
    return {"payload": payload}
}