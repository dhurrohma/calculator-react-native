import { useContext, useState } from "react";
import { TouchableOpacity, Text } from "react-native";
import { ThemeContext } from "../context/ThemeContext";
import { Styles } from "../styles/GlobalStyles";
import React from "react";

interface ButtonProps {
    onPress: () => void;
    title: string;
    isBlue?: boolean;
    isGray?: boolean;
}

export default function Button({title, onPress, isBlue, isGray}: ButtonProps) {
    const theme = useContext(ThemeContext);
    return (
        <TouchableOpacity
            style={isBlue ? Styles.buttonBlue : isGray ? Styles.buttonGray : theme === "light" ? Styles.buttonLight : Styles.buttonDark}
            onPress={onPress}
        >
            <Text
                style={isBlue || isGray ? Styles.smallTextLight : theme === "dark" ? Styles.smallTextLight : Styles.smallTextDark}
            >
                {title}
            </Text>
        </TouchableOpacity>
    )
}