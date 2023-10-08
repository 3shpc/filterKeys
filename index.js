const ld = require("lodash");
const testData = require("./resourceTypeColl.json")

const modals = {

    "Condition": {

        "resourceType":null,
        "clinicalStatus": null,
        "verificationStatus":null,
        "category": null,
        "code": null,
        "subject": null,
        "onset": null,
        "abatement": null,
        "recordedDate": null,

    },

    "Immunization" : {
        "status" : null,
        "statusReason": null,
        "vaccineCode" : null,
        "patient": null,
        "encounter": null,
        "occurrence":null,
        "primarySource": null,
        "location":null,
    },

    "DocumentReference": {
        "identifier": null,
        "status": null,
        "type": null,
        "category": null,
        "subject": null,
        "date": null,
        "author" : null,
        "content": null,
        "context": null

    },


    "AllergyIntolerance" : {
        "clinicalStatus": null,
        "verificationStatus": null,
        "code": null,
        "patient": null,
        "reaction": null,
    },

    "Observation": {
        "status":null,
        "category":null,
        "code":null,
        "subject":null,
        "effective":null,
        "value":null,
        "dataAbsentReason":null,
    },

    "Procedure": {
        "basedOn": null,
        "status":null,
        "code":null,
        "subject":null,
        "encounter":null,
        "performed":null,
    },

    "MedicationRequest": {
       "status": null,
       "intent": null,
       "category": null,
       "reported": null,
       "medication": null,
       "subject": null,
       "encounter": null,
       "authoredOn": null,
       "requester": null,
       "reasonCode": null,
       "reasonReference": null,
       "dosageInstruction": null,
       "dispenceRequest": null,
    },

    "DiagnosticReport": {
       "status": null,
       "category": null,
       "code": null,
       "subject": null,
       "encounter": null,
       "effective": null,
       "issued": null,
       "performer": null,
       "result": null,

    },

    "Patient": {
       "identifier":null,
       "name":null,
       "telecom":null,
       "gender":null,
       "birthDate":null,
       "deceased":null,
       "address":null,
       "communication":null,
    },

    "Encounter": {
       "identifier":null,
       "status":null,
       "class":null,
       "type":null,
       "subject":null,
       "participant":null,
       "period":null,
       "reasonCode":null,
       "reasonReference":null,
       "hospitalization":null,
       "serviceProvider":null,
       "location":null,
    }


}


const dummyData = testData.filter ( (it) => { return modals.hasOwnProperty(it.resourceType) } )


function resolve( fhirResource ) {

    let modalKeys = ld.keys(modals[fhirResource.resourceType]);
    return ld.pick(fhirResource, modalKeys);

}


function convertArray ( dummyData ) {
    
    var res = [];
    dummyData.forEach( ( it ) => {
        res.push(resolve(it));
    })
    return res;

}

console.log(convertArray(dummyData));




