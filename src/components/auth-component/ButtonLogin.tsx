/* eslint-disable prettier/prettier */
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';
import React from 'react';
import { COLORS, FONTS, icons, SIZES } from '../../constants';

type ButtonType = 'Primary' | 'Secondary' | 'Third';
type iconType = 'fb' | 'gg';

interface ButtonLoginProps {
  type: ButtonType;
  title: string;
  icon?: iconType;
  width?: ViewStyle['width'];
  backgroundColor?: ViewStyle['backgroundColor'];
  onPress: () => void;
}

const ButtonLogin = ({
  type = 'Primary',
  title,
  icon,
  width,
  backgroundColor,
  onPress,
}: ButtonLoginProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.container,
        {
          ...(type === 'Secondary'
            ? secondaryButtonStyle
            : type === 'Third'
            ? thirdButtonStyle
            : null),
          width,
          backgroundColor,
        },
      ]}
      onPress={onPress}>
      {icon && (
        <Image
          source={icon === 'fb' ? icons.fb : icons.gg}
          style={styles.icon}
        />
      )}
      <Text
        style={[
          styles.text,
          {
            ...((type === 'Secondary' || type === 'Third') &&
              textButtonSecondaryStyle),
          },
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default ButtonLogin;

const secondaryButtonStyle: ViewStyle = {
  backgroundColor: COLORS.black,
  borderRadius: SIZES.radius,
  borderColor: COLORS.white,
  borderWidth: 0.5,
};

const thirdButtonStyle: ViewStyle = {
  backgroundColor: COLORS.black,
};

const textButtonSecondaryStyle = {
  color: COLORS.white,
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: SIZES.width / 1.2,
    height: 50,
    backgroundColor: COLORS.primary,
    borderRadius: SIZES.radius,
  },

  icon: {
    width: 28,
    height: 28,
    position: 'absolute',
    left: 20,
  },

  text: {
    fontFamily: FONTS.metropolisBold,
    color: COLORS.black,
  },
});
