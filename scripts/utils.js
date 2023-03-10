const utils = {
  getMonthNameBySerialNumber: (number) => {
    const monthNames = ["January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December"
    ];
    return monthNames[number];
  }
}

export default utils;