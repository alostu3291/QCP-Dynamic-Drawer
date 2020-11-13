export function isFieldVisibleForObject(fieldName, line, conn, objectName){

    console.log('Begin PSP Test');
    //let str = "Field1;Field2;Field3";
    let str = line.More__c;
    
    if(line.More__c != undefined) {
    console.log(line.More__c);
    }
    
    if(str != undefined){
    //console.log(str);
    }
    
    if(str != undefined) {
    let res = str.split(";");
    //console.log(res.length);
    
    var i;
    
    for(i = 0; i < res.length; i++) {
    //console.log("ObjectName: " + objectName);
    //console.log("fieldName: " + fieldName);
    if (objectName === 'QuoteLine__c' && (fieldName == res[i] + "__c" || fieldName == "ALPSPv1__" + res[i] + "__c")) {
    //console.log('Turning off ' + res[i]);
    return false;
    }
    }
    
    }
    }