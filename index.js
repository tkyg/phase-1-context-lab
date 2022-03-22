/* Your Code Here */

/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

 const createElmployeeRecord = (recordArray) => {
     return {
         firstName: recordArray[0],
         familyName: recordArray[1],
         title: recordArray[2],
         payPerHour: recordArray[3],
         timeInEvents:[],
         timeOutEvents:[]
        }
    }  

    const createEmployeeRecords = function(recordsArray){
        return recordsArray.map(function(rec){
          return createEmployeeRecord(rec)
        })
      }

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

