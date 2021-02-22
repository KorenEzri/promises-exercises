/**
 *
 * EXERCISE 1
 *
 * @param {Promise} promise
 * @param {function} asyncTransformer
 */
function flatMapPromise(promise, asyncTransformer) {
  return new Promise((resolve, reject) => {
    promise.then(
      (value) => {
        resolve(asyncTransformer(value));
      },
      (failure) => {
        reject(failure);
      }
    );
  });
}

/**
 *
 * EXERCISE 2
 *
 * @param {Promise} firstPromise
 * @param {function} slowAsyncProcess
 */
function chainTwoAsyncProcesses(firstPromise, slowAsyncProcess) {
  return firstPromise.then((res) => {
    return slowAsyncProcess(res);
  });
}

/**
 *
 * EXERCISE 3
 *
 * @param {function} getUserById
 * @param {function} getOrganizationById
 */
function makeGetUserByIdWithOrganization(getUserById, getOrganizationById) {
  return function getUserByIdWithOrganization(userId) {
    return new Promise((resolve) => {
      getUserById(userId)
        .then((userValue) => {
          getOrganizationById(userValue.organizationId).then(
            (organizationVal) => {
              userValue.organization = organizationVal;
              resolve(userValue);
            }
          );
        })
        .catch(() => resolve(undefined));
    });
  };
}

module.exports = {
  flatMapPromise,
  chainTwoAsyncProcesses,
  makeGetUserByIdWithOrganization,
};
