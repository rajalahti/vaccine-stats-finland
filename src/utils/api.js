import axios from "axios";
import add from "date-fns/add";
import { format } from "date-fns";

let endDate = add(new Date(), {
  days: -1,
});
let startDate = add(endDate, {
  days: -60,
});

// Tehdään päiväarray maaliskuun ensimmäisestä päivästä kuluvaan päivään
let getDateArray = function (start, end) {
  var arr = [];
  var dt = new Date(start);
  while (dt <= end) {
    arr.push(new Date(dt));
    dt.setDate(dt.getDate() + 1);
  }
  return arr;
};

let dateArray = getDateArray(startDate, endDate);
dateArray = dateArray.map((item) => (item = format(item, "dd/MM/yyyy")));

export const getData = async () => {
  const response = await axios.get(
    "https://w3qa5ydb4l.execute-api.eu-west-1.amazonaws.com/prod/finnishVaccinationData"
  );
  const data = response.data;

  // This is the response object
  const vaccinationData = {
    totalVaccinations: 0,
    totalPopulation: 5537046,
    vaccinationPercentage: 0,
    totalVaccinationsHyks: 0,
    hyksPopulation: 2162228,
    hyksVaccinationPercentage: 0,
    dates: dateArray,
  };

  // Total Vaccinations in Finland
  vaccinationData.totalVaccinations = data[data.length - 1].shots;
  vaccinationData.vaccinationPercentage = Number(
    (
      (vaccinationData.totalVaccinations / vaccinationData.totalPopulation) *
      100
    ).toFixed(2)
  );
  vaccinationData.totalVaccinationsHyks = data[data.length - 6].shots;
  vaccinationData.hyksVaccinationPercentage = Number(
    (
      (vaccinationData.totalVaccinationsHyks / vaccinationData.hyksPopulation) *
      100
    ).toFixed(2)
  );

  vaccinationData.dates = vaccinationData.dates.map((date) => {
    let current = data.find(
      (x) =>
        format(new Date(x.date), "dd/MM/yyyy") === date && x.area === "Finland"
    );
    let currentShots = current && current.shots;
    return {
      date: date,
      shots: currentShots,
      percentage: Number(
        ((currentShots / vaccinationData.totalPopulation) * 100).toFixed(2)
      ),
    };
  });

  vaccinationData.averageShotsLast14Days = (vaccinationData.dates[vaccinationData.dates.length - 2].shots - vaccinationData.dates[vaccinationData.dates.length - 16].shots) / 14;
  vaccinationData.averageShotsLast14Days = parseInt(vaccinationData.averageShotsLast14Days);
  vaccinationData.daysUntillVaccinated100 = Math.floor((vaccinationData.totalPopulation - vaccinationData.totalVaccinations) / vaccinationData.averageShotsLast14Days);
  vaccinationData.date100Vaccinated = format(add(new Date(), {
    days: vaccinationData.daysUntillVaccinated100,
  }), 'dd.MM.yyyy');


  vaccinationData.daysUntillVaccinated70 = Math.floor((vaccinationData.totalPopulation * 0.7 - vaccinationData.totalVaccinations) / vaccinationData.averageShotsLast14Days);
  vaccinationData.date70Vaccinated = format(add(new Date(), {
    days: vaccinationData.daysUntillVaccinated70,
  }), 'dd.MM.yyyy');
  
  return vaccinationData;
};
