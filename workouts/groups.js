$(function() {
    $.extend(WorkoutLog, {
        Comrades: {
            comrade: [],

            PopulateUsers: 
            function() {
               
                    var defs = WorkoutLog.definition.userDefinitions;
                    var len = defs.length;
                    console.log(len)
                    var opts;
                    for (var i = 0; i <len; i++) {
                        opts += "<option value='" + defs[i].id +"'>" + defs[i].description +"</option>";
                    }
                    $('#log-definition').children().remove();
                    $('#log-definition').append(opts);
                    $('#update-definition').children().remove();
                    $('#update-definition').append(opts);
                
                
            }
        }
    })
})