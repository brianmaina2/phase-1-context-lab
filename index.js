/* Your Code Here */
const createEmployeeRecord=(employeearray)=>{
  let emloyee={
      firstName:employeearray[0],
      familyName:employeearray[1],
      title:employeearray[2],
      payPerHour:employeearray[3],
      timeInEvents:[],
      timeOutEvents:[]
  }
  return emloyee;
} 
const createEmployeeRecords=(employees)=>{
  return employees.map(element=>{
      return createEmployeeRecord(element);
  })
}
const createTimeInEvent = function(date){
  let yourDate = date.split(" ");
  let inTime = {
  type: "TimeIn",
  hour: parseInt(yourDate[1]),
  date: yourDate[0],
  };
  this.timeInEvents = [...this.timeInEvents, inTime];
  return this;
  }
  
  const createTimeOutEvent = function(date){
  let yourDate = date.split(" ");
  let outTime = {
  type: "TimeOut",
  hour: parseInt(yourDate[1]),
  date: yourDate[0],
  };
  this.timeOutEvents = [...this.timeOutEvents, outTime];
  return this;
  }
const hoursWorkedOnDate = function(date){
      for (let i = 0; i < this.timeInEvents.length; i++) {
      if (date === this.timeInEvents[i].date) {
      let arrivalTime = this.timeInEvents[i].hour;
      let departureTime = this.timeOutEvents[i].hour;
      let timeTaken = departureTime - arrivalTime;
      return timeTaken / 100;
      }
 }
}
const wagesEarnedOnDate=function(date){
let timeTaken=hoursWorkedOnDate.call(this,date)
return timeTaken*this.payPerHour;
}
const findEmployeeByFirstName=function(srcArray,firstName){
return srcArray.find((records)=>{
  return records.firstName===firstName;
})
}
/*
We're giving you this function. Take a look at it, you might see some usage
that's new and different. That's because we're avoiding a well-known, but
sneaky bug that we'll cover in the next few lessons!

As a result, the lessons for this function will pass and it will be available
for you to use if you need it!
*/

const allWagesFor = function () {
  const eligibleDates = this.timeInEvents.map(function (e) {
      return e.date
  })

  const payable = eligibleDates.reduce(function (memo, d) {
      return memo + wagesEarnedOnDate.call(this, d)
  }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

  return payable
}
const calculatePayroll = function(records){
  let employeeTotal = records.map((employee) => {
  return allWagesFor.call(employee)
  });
  
  let payroll = employeeTotal.reduce((total, currentValue) => {
  return total + currentValue;
  }, 0);
  return payroll;
  }

