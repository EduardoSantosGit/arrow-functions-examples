import dns from 'dns'

export default class Functions {

    arrowPromise(){
        return new Promise((resolve, reject) => {
            resolve("resolve")
        })
    }

    arrowCallBack(){
        return new Promise((resolve, reject) => {
            dns.lookup("example", (err, address, family) => {
                resolve(address)
            });
        })
    }

    printMessage = () => {
        console.log("text example")
    }

    iterateArray = () => {
        let arr = ['Germany','Angola','Australia','Brazil']
        
        arr.map((x) => {
            console.log(x)
        });

        return arr
    }
}