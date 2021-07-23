//This file contains the method for calling the API.

export const url = "https://api.hackillinois.org/"

/**
 * Method for calling API
 * @param handler   Endpoint (ex: upload/blobstore/mentors/)
 * @param method    GET, POST, PUT, etc
 * @param body      Data being sent
 * @param callback  Callback function
 */
export function getData(handler: string, method: string, body: any, callback: any) {
    const http = new XMLHttpRequest()
    http.responseType = 'json'

    http.open(method, url + handler, true)

    if (body != null) {
        http.setRequestHeader('Content-Type', 'application/json')
    }
    http.onload = function () {
        callback(http.response)
    }

    http.send(JSON.stringify(body))
}
