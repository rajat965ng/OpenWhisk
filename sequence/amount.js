function main(params) {
    payload = params.payload
    payload.amount = payload.simpleInterest + payload.principal
    return {"payload": payload}
}