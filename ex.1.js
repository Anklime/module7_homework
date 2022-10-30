//задание 1
const user = {
    name: 'Anna',
    city: 'Moscow',
    age: 24
};

function db(usr) {
    for (let key in usr) {

        if (usr.hasOwnProperty(key)) {

            console.log(`${key}: ${usr[key]}`);
        };

    };

};
db(user);
