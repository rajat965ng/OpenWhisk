function main(params) {
    payload = params.payload
    payload.simpleInterest = payload.principal * payload.time * payload.rate
    return {"payload": payload}
}