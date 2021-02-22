/**
 *
 * EXERCISE 1
 *
 * @param {*} promise
 * @param {*} transformer
 * @returns {Promise}
 */
function mapPromise(promise, transformer) {
  return new Promise((resolve, reject) => {
    promise
      .catch((err) => reject(err))
      .then((result) => {
        try {
          return resolve(transformer(result));
        } catch (error) {
          return reject(error);
        }
      });
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromise(numberPromise) {
  return numberPromise.then(
    (result) =>
      new Promise((resolve, reject) => {
        if (Number(result)) {
          resolve(result * result);
        } else !Number(result);
        reject(`Cannot convert '${result}' to a number!`);
      })
  );
}

/**
 * EXERCISE 3
 *
 * @param {Promise<number | string>} numberPromise
 * @returns {Promise<number>}
 */
function squarePromiseOrZero(promise) {
  return squarePromise(promise).catch(() => {
    if (Number(promise)) {
      return promise;
    } else return 0;
  });
}

/**
 * EXERCISE 4
 *
 * @param {Promise} promise
 * @returns {Promise}
 */
function switcheroo(promise) {
  return promise.then(
    (onSuccess) => {
      throw onSuccess;
    },
    (onFailure) => {
      return onFailure;
    }
  );
}

/**
 * @callback consumer
 * @param {*} value
 */

/**
 * @callback handler
 * @param {*} error
 */

module.exports = {
  mapPromise,
  squarePromise,
  squarePromiseOrZero,
  switcheroo,
};
