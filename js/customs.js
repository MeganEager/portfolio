/**
 * Created by megan.eager on 28/04/2017.
 */


function showServiceInfo(requiredId){
    var serviceBlock = document.getElementsByClassName('servicesInfoBlock');
    for(var i=0; i < serviceBlock[0].children.length; i++){
        var neededId = serviceBlock[0].children[i].id;
        document.getElementById(neededId).style.display = 'none';

    }
    document.getElementById(requiredId).style.display = 'block';
}