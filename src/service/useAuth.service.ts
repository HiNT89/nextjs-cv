import { useAuthStore } from "@/src/store/useAuthStore";
import APP_CONFIG from "@/src/config/appConfig";
import {
  PayloadSignin,
  RequestSignin,
  DataSignin,
  DataGetMe,
} from "@/src/types/auth";
import { Response } from "@/src/types/global";
import useHttpClient from "./useHttpClient";
// Định nghĩa kiểu dữ liệu trả về cho các hàm conversation

export type ResultAuthService = {
  signin: (payload: PayloadSignin) => Promise<Response<any>>;
  getMe: () => Promise<any>;
  login: (payload: PayloadSignin) => Promise<DataGetMe | undefined>;
  logout: () => void;
};

const useAuthService = (): ResultAuthService => {
  const { setUser } = useAuthStore();
  const httpClient = useHttpClient();

  const signin = (payload: PayloadSignin): Promise<Response<DataSignin>> => {
    const requestBody: RequestSignin = {
      username: payload.email,
      password: payload.password,
      type: 1,
    };
    return httpClient.post(APP_CONFIG.AUTH.SIGNIN, requestBody);
  };

  const getMe = async () => {
    try {
      const token =
        typeof window !== "undefined"
          ? localStorage.getItem(APP_CONFIG.ACCESS_TOKEN)
          : null;
      const responseGetMe = await httpClient.get<Response<DataGetMe>>(
        APP_CONFIG.AUTH.GETME,
        {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        }
      );

      if (responseGetMe && responseGetMe.data && responseGetMe.status) {
        // Lưu thông tin người dùng vào localStorage hoặc cookie

        setUser(responseGetMe.data);
        return responseGetMe.data;
        // localStorage.setItem("user_info", JSON.stringify(responseGetMe.data));
      }
    } catch (error) {
      console.error("Error fetching user data:", error);
      throw error; // Rethrow the error to be handled by the caller
    }
  };

  const login = async (payload: PayloadSignin) => {
    try {
      const responseSigin = await signin({ ...payload });
      if (responseSigin && responseSigin.data && responseSigin.status) {
        // Lưu token vào localStorage hoặc cookie
        if (typeof window !== "undefined") {
          localStorage.setItem(
            APP_CONFIG.ACCESS_TOKEN,
            responseSigin.data.access_token
          );
          localStorage.setItem(
            APP_CONFIG.REFRESH_TOKEN,
            responseSigin.data.refresh_token
          );
        }
        const responseGetMe = await getMe();
        return responseGetMe; // Trả về thông tin người dùng
      }
    } catch (error) {
      console.error("Login failed:", error);
      throw error; // Rethrow the error to be handled by the caller
    }
  };

  const logout = () => {
    setUser(null); // Xóa thông tin người dùng trong state
    if (typeof window !== "undefined") {
      localStorage.removeItem(APP_CONFIG.ACCESS_TOKEN); // Xóa token khỏi localStorage
      localStorage.removeItem(APP_CONFIG.REFRESH_TOKEN); // Xóa refresh token khỏi local
    }
  };

  return {
    signin,
    getMe,
    login,
    logout,
  };
};

export default useAuthService;
