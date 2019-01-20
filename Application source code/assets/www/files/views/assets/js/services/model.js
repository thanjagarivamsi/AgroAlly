/**
 * Data models
 */
Apperyio.Entity = new Apperyio.EntityFactory({
    "String": {
        "type": "string"
    },
    "User_0": {
        "type": "object",
        "properties": {
            "email": {
                "type": "string"
            },
            "userSession": {
                "type": "string"
            },
            "country": {
                "type": "string"
            },
            "usename": {
                "type": "string"
            }
        }
    },
    "Number": {
        "type": "number"
    },
    "User_1": {
        "type": "object",
        "properties": {
            "email": {
                "type": "string"
            },
            "country": {
                "type": "string"
            },
            "userSession": {
                "type": "string"
            },
            "usename": {
                "type": "string"
            }
        }
    },
    "User": {
        "type": "object",
        "properties": {
            "usename": {
                "type": "string"
            },
            "email": {
                "type": "string"
            },
            "userSession": {
                "type": "string"
            },
            "country": {
                "type": "string"
            }
        }
    },
    "Boolean": {
        "type": "boolean"
    }
});
Apperyio.getModel = Apperyio.Entity.get.bind(Apperyio.Entity);

/**
 * Data storage
 */
Apperyio.storage = {

    "currentUser": new $a.LocalStorage("currentUser", "User"),

    "currentUser_0": new $a.LocalStorage("currentUser_0", "User_0"),

    "currentUser_1": new $a.LocalStorage("currentUser_1", "User_1")
};