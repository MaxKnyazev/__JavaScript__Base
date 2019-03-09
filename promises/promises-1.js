const promiseOne = new Promise((resolve, reject) => {

    const randomResolve = Math.random();
    setTimeout(() => {
        resolve('Промис-Успешно')
    }, randomResolve * 1000);

    const randomReject = Math.random();
    setTimeout(() => {
        reject('Промис-Ошибка')
    }, randomReject * 1000)

});


promiseOne
    .then(
        (dataRes) => {
            console.log(dataRes);
        }
        // ,
        // (dataRej) => {
        //     console.log(dataRej)
        // }
    )
    .catch((error) => console.log(`${error} попала в cath`));