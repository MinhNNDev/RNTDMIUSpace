export const currentDay = () => {
  var dateObj = new Date();
  var month = dateObj.getUTCMonth() + 1;
  var day = dateObj.getUTCDate();
  var year = dateObj.getUTCFullYear();
  const newdate = day + '/' + month + '/' + year;
  return newdate;
};

export const dayInWeek = () => {
  var date = new Date();
  var current_day = date.getDay();
  var dayName = '';
  var thu = '';
  switch (current_day) {
    case 0:
      dayName = 'sunday';
      thu = 'Chủ nhật';
      break;
    case 1:
      dayName = 'monday';
      thu = 'Thứ 2';
      break;
    case 2:
      dayName = 'tuesday';
      thu = 'Thứ 3';
      break;
    case 3:
      dayName = 'wednesday ';
      thu = 'Thứ 4';
      break;
    case 4:
      dayName = 'thursday';
      thu = 'Thứ 5';
      break;
    case 5:
      dayName = 'friday';
      thu = 'Thứ 6';
      break;
    case 6:
      dayName = 'saturday';
      thu = 'Thứ 7';
  }

  return {
    getDayInWeek: dayName,
    getThu: thu,
  };
};
