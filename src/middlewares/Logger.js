
export const Logger =  {
    info : (data) => console.log(`INFO:   ${new Date().toLocaleTimeString()}     ` + data),
    error : (data) => console.error(`ERROR  ${new Date().toLocaleTimeString()}    1`+ data)
}