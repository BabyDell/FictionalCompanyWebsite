import Card from "../Componenets/card";

const tuscon = {
  name: "Tuscon, AZ",
  address: "1234 main st",
  phone: "123-456-7890",
};

const phoenix = {
  name: "Phoenix, AZ",
  address: "1234 main st",
  phone: "123-456-7890",
};

const scottsdale = {
  name: "Scottsdale, AZ",
  address: "1234 main st",
  phone: "123-456-7890",
};

export const arizona = [
  <Card key="tuscon" {...tuscon} />,
  <Card key="phoenix" {...phoenix} />,
  <Card key="scottsdale" {...scottsdale} />,
];

const losAngeles = {
  name: "Los Angeles, CA",
  address: "1234 main st",
  phone: "123-456-7890",
};

const sanDiego = {
  name: "San Diego, CA",
  address: "1234 main st",
  phone: "123-456-7890",
};

const sanFrancisco = {
  name: "San Francisco, CA",
  address: "1234 main st",
  phone: "123-456-7890",
};

const sanJose = {
  name: "San Jose, CA",
  address: "1234 main st",
  phone: "123-456-7890",
};

const sacramento = {
  name: "Sacramento, CA",
  address: "1234 main st",
  phone: "123-456-7890",
};

const fresno = {
  name: "Fresno, CA",
  address: "1234 main st",
  phone: "123-456-7890",
};

export const california = [
  <Card key="losAngeles" {...losAngeles} />,
  <Card key="sanDiego" {...sanDiego} />,
  <Card key="sanFrancisco" {...sanFrancisco} />,
  <Card key="sanJose" {...sanJose} />,
  <Card key="sacramento" {...sacramento} />,
  <Card key="fresno" {...fresno} />,
];

const lasVegas = {
  name: "Las Vegas, NV",
  address: "1234 main st",
  phone: "123-456-7890",
};

const reno = {
  name: "Reno, NV",
  address: "1234 main st",
  phone: "123-456-7890",
};

export const nevada = [
  <Card key="lasVegas" {...lasVegas} />,
  <Card key="reno" {...reno} />,
];

const portland = {
  name: "Portland, OR",
  address: "1234 main st",
  phone: "123-456-7890",
};

const eugene = {
  name: "Eugene, OR",
  address: "1234 main st",
  phone: "123-456-7890",
};

const salem = {
  name: "Salem, OR",
  address: "1234 main st",
  phone: "123-456-7890",
};

const bend = {
  name: "Bend, OR",
  address: "1234 main st",
  phone: "123-456-7890",
};

export const oregon = [
  <Card key="portland" {...portland} />,
  <Card key="eugene" {...eugene} />,
  <Card key="salem" {...salem} />,
  <Card key="bend" {...bend} />,
];

const provo = {
  name: "Provo, UT",
  address: "1234 main st",
  phone: "123-456-7890",
};

export const utah = [<Card key="provo" {...provo} />];
