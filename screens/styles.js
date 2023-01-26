export default StyleSheet.create({
    container: {
        backgroundColor: 'rgb(249, 250, 252)',
        
      },
      paragraph : {
        fontSize: 'larger',
        fontFamily: "Cochin"
      }
    })




    ;
          console.log(data)
          var count = Object.keys(data).length;
          console.log(count)
          //console.log(typeof(count))
          if (count == 13) {
            
            info = 0;
            AsyncStorage.removeItem('LogedId')
            console.log("Info from API ============ "+info)
            
          } else {
            
            info = 1;
            AsyncStorage.setItem(
              'LogedId', `${email}`,
              
            );
            console.log("Info from API ============ "+info)
            
          }