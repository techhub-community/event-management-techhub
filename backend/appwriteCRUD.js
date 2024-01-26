import { Client, Databases, ID } from "appwrite";

const client = new Client()
.setEndpoint('https://cloud.appwrite.io/v1')
.setProject('65b13a1a34e4ce543872');

const databases = new Databases(client);


// Create documents
const create = databases.createDocument(
    'ems',
    'user',
    ID.unique(),
    {
        FullName: "Test shdh",
        PhNum: 1234567890,
        email: "test.s1@shj.kc",
        password: "dsjfkdshhfa",
        ip: "192.182.111.23",
        joiningDate: new Date().toISOString()
    }
);

create.then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});


// List documents
// let list = databases.listDocuments(
//     '[ems]',
//     '[user]',
//     [
//         Query.equal('title', 'Avatar')
//     ]
// );

// list.then(function (response) {
//     console.log(response);
// }, function (error) {
//     console.log(error);
// });