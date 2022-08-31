import React, { createContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import API from "../services/api";
import Storage from "../services/storage";

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [user, setUser] = useState({});
    const [token, setToken] = useState('');
    const [isLogged, setIsLogged] = useState(false);
    const navigation = useNavigation();

    function resetUserInfo() {
        setUser({});
        setToken('');
        setIsLogged(false);
    }

    async function checkStorage() {
        await Storage.getUserToken().then(async (res) => {
            setToken(res);
            API.req.defaults.headers.common['Authorization'] = 'Bearer ' + res;

            if (await API.ping()) {
                setIsLogged(true);
            } else {
                resetUserInfo();
            }
        }).catch((err) => resetUserInfo());
    }    

    async function signIn(user, password) {
        data = await API.requestLogin(user, password);
        if (data) {
            setUser(data.user);
            setToken(data.passport);
            setIsLogged(true);

            navigation.navigate("Home");
        }
    }


    return (
        <AuthContext.Provider value = {
            {
                signIn,
                user,
                isLogged,
                token,
                checkStorage,
            }
        } >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;