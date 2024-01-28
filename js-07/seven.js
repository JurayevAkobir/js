// * Filter - projects

// ! 1.
/* const users = [
    {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2022 9:00 AM",
        isLoggendIn: false
    },
    {
        _id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "08/01/2022 9:30 AM",
        isLoggendIn: true
    },
    {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2022 9:45 AM",
        isLoggendIn: true
    },
    {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2022 9:50 AM",
        isLoggendIn: false
    },
    {
        _id: "ghderc",
        username: "Tomas",
        email: "tomas@tomas.com",
        password: "123333",
        createdAt: "08/01/2022 10:00 AM",
        isLoggendIn: false
    }
];

function findUserById(users, userId){
    const findId = users.filter((user) => {
        return user._id === userId
    })
    console.log(findId);
} 
findUserById(users, "ab12ex") */


// ! 2.
/*const users = [
    {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2022 9:00 AM",
        isLoggendIn: false
    },
    {
        _id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "08/01/2022 9:30 AM",
        isLoggendIn: true
    },
    {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2022 9:45 AM",
        isLoggendIn: true
    },
    {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2022 9:50 AM",
        isLoggendIn: false
    },
    {
        _id: "ghderc",
        username: "Tomas",
        email: "tomas@tomas.com",
        password: "123333",
        createdAt: "08/01/2022 10:00 AM",
        isLoggendIn: false
    }
];

function findUserEmail(users, userEmail){
    const findEmail = users.filter((user) => user.email === userEmail)
    console.log(findEmail);
} 
findUserEmail(users, "martha@martha.com")*/


// ! 3. 
/*const users = [
    {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2022 9:00 AM",
        isLoggendIn: false
    },
    {
        _id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "08/01/2022 9:30 AM",
        isLoggendIn: true
    },
    {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2022 9:45 AM",
        isLoggendIn: true
    },
    {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2022 9:50 AM",
        isLoggendIn: false
    },
    {
        _id: "ghderc",
        username: "Tomas",
        email: "tomas@tomas.com",
        password: "123333",
        createdAt: "08/01/2022 10:00 AM",
        isLoggendIn: false
    }
];

function findUserTrue(userlist, isLoggedIn){
    const filterUsers = userlist.filter((user) => user.isLoggendIn === isLoggedIn)
    console.log(filterUsers);
} 
findUserTrue(users, false)*/


// ! 4.
/*const users = [
    {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2022 9:00 AM",
        isLoggendIn: false
    },
    {
        _id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "08/01/2022 9:30 AM",
        isLoggendIn: true
    },
    {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2022 9:45 AM",
        isLoggendIn: true
    },
    {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2022 9:50 AM",
        isLoggendIn: false
    },
    {
        _id: "ghderc",
        username: "Tomas",
        email: "tomas@tomas.com",
        password: "123333",
        createdAt: "08/01/2022 10:00 AM",
        isLoggendIn: false
    }
];

function usersPassword(userList, userName, password){
    const checkUser = userList.filter((user) => user.username === userName && user.password === password)
    if (checkUser.length > 0) {
        console.log(checkUser);
    } else {
        console.log("xato");
    }
} 
usersPassword(users, "Tomas", "123333")*/


// ! 5.
/*const users = [
    {
        _id: "ab12ex",
        username: "Alex",
        email: "alex@alex.com",
        password: "123123",
        createdAt: "08/01/2022 9:00 AM",
        isLoggendIn: false
    },
    {
        _id: "fg12cy",
        username: "Asab",
        email: "asab@asab.com",
        password: "123456",
        createdAt: "08/01/2022 9:30 AM",
        isLoggendIn: true
    },
    {
        _id: "zwf8md",
        username: "Brook",
        email: "brook@brook.com",
        password: "123111",
        createdAt: "08/01/2022 9:45 AM",
        isLoggendIn: true
    },
    {
        _id: "eefamr",
        username: "Martha",
        email: "martha@martha.com",
        password: "123222",
        createdAt: "08/01/2022 9:50 AM",
        isLoggendIn: false
    },
    {
        _id: "ghderc",
        username: "Tomas",
        email: "tomas@tomas.com",
        password: "123333",
        createdAt: "08/01/2022 10:00 AM",
        isLoggendIn: false
    }
];

function usersCreateAt(users, userName){
    const created = users.filter((user) => user.username === userName)[0]
    console.log(created.createdAt);
} 
usersCreateAt(users, "Tomas")*/