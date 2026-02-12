import useSocialAuth from "@/hooks/UseSocialAuth";
import React from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export function AuthScreen() {
  const { isLoading, handleSocialAuth } = useSocialAuth();

  return (
    <View className="px-8 flex-1 justify-center items-center bg-white">
      <Image
        source={require("../../assets/images/auth-image.png")}
        className="size-96"
      ></Image>
      <View className="gap-2">
        <TouchableOpacity
          className="flex-row items-center justify-center bg-white  border border-gray-300 rounded-full px-6 elevation-sm py-3"
          onPress={() => {
            handleSocialAuth("oauth_google");
          }}
        >
          {isLoading ? (
            <ActivityIndicator size={"small"} color={"#4285f4"} />
          ) : (
            <View className="flex-row items-center justify-center">
              <Image
                source={require("../../assets/images/google.png")}
                className="size-10 mr-3"
                resizeMode="contain"
              ></Image>
              <Text className="text-black font-meduim text-base ">
                Continue with Google
              </Text>
            </View>
          )}
        </TouchableOpacity>

        <TouchableOpacity
          className="flex-row items-center justify-center bg-white  border border-gray-300 rounded-full px-10 elevation-sm py-3"
          onPress={() => {
            handleSocialAuth("oauth_apple");
          }}
        >
          {isLoading ? (
            <ActivityIndicator size={"small"} color={"#4285f4"} />
          ) : (
            <View className="flex-row items-center justify-center">
              <Image
                source={require("../../assets/images/apple.png")}
                className="size-8 mr-3"
                resizeMode="contain"
              ></Image>
              <Text className="text-black font-meduim text-base ">
                Continue with Apple
              </Text>
            </View>
          )}
        </TouchableOpacity>
        <Text className="text-center text-gray-500 text-xs leading-4 mt-6 px-2">
          By signing up ,tyou agree to our{" "}
          <Text className="text-blue-500">
            Terms Privacy Policy Use Cookies{" "}
          </Text>{" "}
        </Text>
      </View>
    </View>
  );
}

export default AuthScreen;
