const storeData = (key, data, cb) => {
  let temp;

  getStoreData(key, (res) => {
    if (!res) {
      temp = data;
    } else {
      temp = { ...res };
      if (temp.user !== data.user) {
        temp = data;
      }
    }
    localStorage.setItem(key, JSON.stringify(temp));
  });
  if (cb) cb();
};

const getStoreData = (key, cb) => {
  const resData = localStorage.getItem(key);
  if (resData) {
    const result = JSON.parse(resData);
    if (cb) cb(result);
  } else {
    cb(null);
  }
};

const removeData = (key, cb) => {
  if (key) {
    localStorage.removeItem(key);
  }

  if (cb) cb();
};

export { storeData, removeData, getStoreData };
