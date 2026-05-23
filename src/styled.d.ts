import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      primary: string;
      textPrimary: string;
      textSecondary: string;
      border: string;
      background: string;
      white: string;
    };

    radius: {
      md: string;
      lg: string;
      pill: string;
    };

    shadows: {
      card: string;
    };
  }
}