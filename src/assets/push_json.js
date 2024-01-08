#!/usr/bin/node
const admin = require('firebase-admin');

// npm install firebase
// npm instll firebase-admin

admin.initializeApp({
    credential: admin.credential.cert("key.json")
});

const data = {
    "trips": [
        {
            "name": "Sunny Spanish Coast",
            "country": "Spain",
            "start_date": "2023-06-01",
            "end_date": "2023-06-08",
            "price": 1000,
            "currency": "USD",
            "max_participants": 20,
            "description": "Take a break from everyday hustle and bustle and join us on a trip to the sunny Spanish coast. We will visit the most beautiful beaches and enjoy the thrill of the local nightlife.",
            "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Vista_de_Benidorm%2C_Espa%C3%B1a%2C_2014-07-02%2C_DD_65.JPG/2560px-Vista_de_Benidorm%2C_Espa%C3%B1a%2C_2014-07-02%2C_DD_65.JPG",
            "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95780.6243159463!2d2.1401890999999997!3d41.392667949999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x12a49816718e30e5%3A0x44b0fb3d4f47660a!2sBarcelona%2C%20Prowincja%20Barcelona%2C%20Hiszpania!5e0!3m2!1spl!2spl!4v1704454125907!5m2!1spl!2spl"
        },
        {
            "name": "Magnificent Norwegian Fjords",
            "country": "Norway",
            "start_date": "2023-07-01",
            "end_date": "2023-07-08",
            "price": 1500,
            "currency": "USD",
            "max_participants": 20,
            "description": "Join us on a trip to the magnificent Norwegian fjords. Enjoy the breathtaking views and the fresh air of the Norwegian mountains.",
            "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/42/MilfordSound.jpg/1920px-MilfordSound.jpg",
            "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1598314.774714403!2d4.1005532455957345!3d60.14864381187459!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x463e0f406f7fbb4b%3A0x81a0dd61122025d3!2zTsOmcsO4eWZqb3JkZW4!5e0!3m2!1spl!2spl!4v1704454448197!5m2!1spl!2spl"
        },
        {
            "name": "Beautiful Greek Islands",
            "country": "Greece",
            "start_date": "2023-08-01",
            "end_date": "2023-08-08",
            "price": 2000,
            "currency": "USD",
            "max_participants": 20,
            "description": "Join us on a trip to the beautiful Greek islands. Enjoy the sun, the sea and the local cuisine.",
            "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0a/Blue-dome-Santorini.JPG/1920px-Blue-dome-Santorini.JPG",
            "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d834136.827747699!2d24.25269656267934!3d35.24762257294904!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x149afe2f827d98a1%3A0x100bd2ce2b9c630!2sKreta%2C%20Grecja!5e0!3m2!1spl!2spl!4v1704454526828!5m2!1spl!2spl"
        },
        {
            "name": "Amazing Italian Lakes",
            "country": "Italy",
            "start_date": "2023-09-01",
            "end_date": "2023-09-08",
            "price": 2500,
            "currency": "USD",
            "max_participants": 20,
            "description": "Join us on a trip to the amazing Italian lakes. Enjoy the breathtaking views and the fresh air of the Italian mountains.",
            "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Le_prime_luci_dell%27alba_in_Valle_Orco_-_Ceresole_Reale%2C_Colle_del_Nivolet.jpg/1920px-Le_prime_luci_dell%27alba_in_Valle_Orco_-_Ceresole_Reale%2C_Colle_del_Nivolet.jpg",
            "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d703963.5543404934!2d11.274202215298452!3d46.43170129718428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47784148229089d9%3A0x42b5e7b17c12fccb!2sFedaia%20Lake!5e0!3m2!1spl!2spl!4v1704454678411!5m2!1spl!2spl"
        },
        {
            "name": "Pulsating with life Amsterdam",
            "country": "Netherlands",
            "start_date": "2024-04-01",
            "end_date": "2024-04-08",
            "price": 6000,
            "currency": "USD",
            "max_participants": 20,
            "description": "Join us on a trip to the pulsating with life Amsterdam. Prepare to embrace to vivid nightlife and smoke some weed in the local coffee shops.",
            "picture": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Amsterdam_Canal_Tour.jpg/1920px-Amsterdam_Canal_Tour.jpg",
            "map": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d77979.6656567289!2d4.821560612373171!3d52.35474184391478!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c63fb5949a7755%3A0x6600fd4cb7c0af8d!2sAmsterdam%2C%20Holandia!5e0!3m2!1spl!2spl!4v1704455149719!5m2!1spl!2spl"
        }
    ]
};

const promises = [];

// Access the "trips" property directly
data.trips.forEach((trip, index) => {
    promises.push(admin.firestore().collection('trips').doc(index.toString()).set(trip));
});

Promise.all(promises)
    .then(() => {
        console.log('All documents added successfully');
        process.exit(0);
    })
    .catch((error) => {
        console.error('Error adding documents:', error);
        process.exit(1);
    });

    // node push_json.js