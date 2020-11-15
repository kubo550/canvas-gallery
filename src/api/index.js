import app from "../firebase/app";

const compareStrings = (query, name) => {
  // ? do poprawy
  const queryArray = [...query.toLowerCase()];
  const nameArray = [...name.toLowerCase()];
  return queryArray.reduce((_bool, letter, i) => letter === nameArray[i], true);
  // ? to kurwa tez Xd
  // if (!query) return true;
  // const regex = new RegExp(`${query}*`);
  // return regex.test(name);
};

export const fetchFromFirebase = async (_key, query) => {
  const ref = app.database.ref("cavnases");
  const snapshot = await ref.once("value");
  const objectValue = snapshot.val();
  let fireData = [];
  for (const key in objectValue) {
    fireData.push({ ...objectValue[key], id: key });
  }
  return fireData.filter(({ name }) => compareStrings(query, name));
};

export const fetchCurrentImage = async (_key, id) => {
  const ref = app.database.ref(`cavnases/${id}`);
  const snapshot = await ref.once("value");
  let data = snapshot.val();
  data = { ...data, id };
  return data;
};
