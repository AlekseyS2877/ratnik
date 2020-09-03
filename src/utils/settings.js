const timeZone = "+03:00";
const startDate = new Date(Date.parse(["2020-08-24T10:00:00.000", timeZone].join("")));
const endDate = new Date(Date.parse(["2020-08-28T19:00:00.000", timeZone].join("")));
const startWorkTime = new Date(1000 * 60 * 60 * 7);
const endWorkTime = new Date(1000 * 60 * 60 * 16);

const rulerStepInMinutes = 60;
const rulerElementHeight = 3;

const apiURL = "http://yastva-na-dom.ru:5984/ratnik";

export {
   startDate,
   endDate,
   startWorkTime,
   endWorkTime,
   rulerStepInMinutes,
   rulerElementHeight,
   apiURL,
};
