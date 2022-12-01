// code your solution here
function superbowlWin(record){
    
      let find=record.find(record=>record.result==="W")
      if (find) {
        return find.year
      } else {
        return undefined
      }
}