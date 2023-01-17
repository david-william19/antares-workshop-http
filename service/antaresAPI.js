const axios = require("axios");

const getLatestData = async () => {
  try {
    const url = `https://platform.antares.id:8443/~/antares-cse/antares-id/${process.env.applicationName}/${process.env.deviceName}/la`;
    const result = await axios.get(url, {
      headers: {
        "X-M2M-Origin": process.env.accessKey,
        Accept: "application/json",
        "Content-Type": "application/json;ty=4",
      },
    });
    return result.data;
  } catch (e) {
    throw new Error("Error");
  }
};

const getDataAntaresID = async () => {
  try {
    const url = `https://platform.antares.id:8443/~/antares-cse/antares-id/${process.env.applicationName}/${process.env.deviceName}?fu=1&ty=4&drt=1`;
    const result = await axios.get(url, {
      headers: {
        "X-M2M-Origin": process.env.accessKey,
        Accept: "application/json",
        "Content-Type": "application/json;ty=4",
      },
    });
    return result.data;
  } catch (e) {
    console.log(e)
    throw new Error("Error");
  }
};

const getDataAntaresBuzzer = async () => {
  try {
    const url = `https://platform.antares.id:8443/~/antares-cse/antares-id/${process.env.applicationName}/${process.env.deviceNameBuzzer}?fu=1&ty=4&drt=1`;
    const result = await axios.get(url, {
      headers: {
        "X-M2M-Origin": process.env.accessKey,
        Accept: "application/json",
        "Content-Type": "application/json;ty=4",
      },
    });
    return result.data;
  } catch (e) {
    console.log(e)
    throw new Error("Error");
  }
};

const getDetailDataAntaresByUril = async (uril) => {
  try {
    const url = `https://platform.antares.id:8443/~${uril}`;
    const result = await axios.get(url, {
      headers: {
        "X-M2M-Origin": process.env.accessKey,
        Accept: "application/json",
        "Content-Type": "application/json;ty=4",
      },
    });
    return result.data;
  } catch (e) {
    console.log(e);
    throw new Error("Error");
  }
};

const postData = async (data) => {
  try {
    const url = `https://platform.antares.id:8443/~/antares-cse/antares-id/${process.env.applicationName}/${process.env.deviceNameBuzzer}`;
    const result = await axios.post(url, data, {
      headers: {
        "X-M2M-Origin": process.env.accessKey,
        Accept: "application/json",
        "Content-Type": "application/json;ty=4",
      },
    });

    return result;
  } catch (e) {
    return e;
  }
};
module.exports = {
  getLatestData,
  postData,
  getDataAntaresID,
  getDataAntaresBuzzer,
  getDetailDataAntaresByUril,
};
