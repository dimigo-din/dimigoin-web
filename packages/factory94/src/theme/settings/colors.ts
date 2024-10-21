const colors = {
  solid: {
    red: {
      default: "#FF4035",
      _dark: "#FF4035",
    },
    orange: {
      default: "#FF9A05",
      _dark: "#FF9A05",
    },
    yellow: {
      default: "#F5C905",
      _dark: "#F5C905",
    },
    green: {
      default: "#32CC58",
      _dark: "#32CC58",
    },
    blue: {
      default: "#057FFF",
      _dark: "#057FFF",
    },
    indigo: {
      default: "#5B59DE",
      _dark: "#5B59DE",
    },
    purple: {
      default: "#B756E8",
      _dark: "#B756E8",
    },
    pink: {
      default: "#FF325A",
      _dark: "#FF325A",
    },
    brown: {
      default: "#A78963",
      _dark: "#A78963",
    },
    black: {
      default: "#000000",
      _dark: "#000000",
    },
    white: {
      default: "#FFFFFF",
      _dark: "#FFFFFF",
    },
    translucent: {
      red: {
        default: "rgba(255, 64, 53, 0.1)",
        _dark: "rgba(255, 64, 53, 0.2)",
      },
      orange: {
        default: "rgba(255, 154, 5, 0.1)",
        _dark: "rgba(255, 154, 5, 0.2)",
      },
      yellow: {
        default: "rgba(245, 201, 5, 0.1)",
        _dark: "rgba(245, 201, 5, 0.2)",
      },
      green: {
        default: "rgba(50, 204, 88, 0.1)",
        _dark: "rgba(50, 204, 88, 0.2)",
      },
      blue: {
        default: "rgba(5, 127, 255, 0.1)",
        _dark: "rgba(5, 127, 255, 0.2)",
      },
      indigo: {
        default: "rgba(91, 89, 222, 0.1)",
        _dark: "rgba(91, 89, 222, 0.2)",
      },
      purple: {
        default: "rgba(183, 86, 232, 0.1)",
        _dark: "rgba(183, 86, 232, 0.2)",
      },
      pink: {
        default: "rgba(255, 50, 90, 0.1)",
        _dark: "rgba(255, 50, 90, 0.2)",
      },
      brown: {
        default: "rgba(167, 137, 99, 0.1)",
        _dark: "rgba(167, 137, 99, 0.2)",
      },
      black: {
        default: "rgba(0, 0, 0, 0.1)",
        _dark: "rgba(0, 0, 0, 0.2)",
      },
      white: {
        default: "rgba(255, 255, 255, 0.1)",
        _dark: "rgba(255, 255, 255, 0.2)",
      },
    },
  },
  background: {
    standard: {
      primary: {
        default: "#FFFFFF",
        _dark: "#000000",
      },
      secondary: {
        default: "#F6F6FA",
        _dark: "#09090A",
      },
      teritary: {
        default: "#EBECF5",
        _dark: "#0E0E0F",
      },
    },
    inverted: {
      primary: {
        default: "#000000",
        _dark: "#FFFFFF",
      },
      secondary: {
        default: "#09090A",
        _dark: "#F6F6FA",
      },
      teritary: {
        default: "#0E0E0F",
        _dark: "#EBECF5",
      },
    },
  },
  content: {
    standard: {
      primary: {
        default: "rgba(32, 33, 40, 1)", // #202128
        _dark: "rgba(244, 244, 245, 1)", // #F4F4F5
      },
      secondary: {
        default: "rgba(32, 33, 40, 0.7)",
        _dark: "rgba(244, 244, 245, 0.7)",
      },
      teritary: {
        default: "rgba(32, 33, 40, 0.5)",
        _dark: "rgba(244, 244, 245, 0.5)",
      },
      quaternary: {
        default: "rgba(32, 33, 40, 0.3)",
        _dark: "rgba(244, 244, 245, 0.3)",
      },
    },
    inverted: {
      primary: {
        default: "rgba(244, 244, 245, 1)",
        _dark: "rgba(32, 33, 40, 1)",
      },
      secondary: {
        default: "rgba(244, 244, 245, 0.6)",
        _dark: "rgba(32, 33, 40, 0.6)",
      },
      teritary: {
        default: "rgba(244, 244, 245, 0.4)",
        _dark: "rgba(32, 33, 40, 0.4)",
      },
      quaternary: {
        default: "rgba(244, 244, 245, 0.2)",
        _dark: "rgba(32, 33, 40, 0.2)",
      },
    },
  },
  line: {
    // based on #797B8A
    divider: {
      default: "rgba(121, 123, 138, 0.16)",
      _dark: "rgba(121, 123, 138, 0.32)",
    },
    outline: {
      default: "rgba(121, 123, 138, 0.12)",
      _dark: "rgba(121, 123, 138, 0.24)",
    },
  },
  components: {
    fill: {
      standard: {
        primary: {
          default: "#FEFEFF",
          _dark: "#131314",
        },
        secondary: {
          default: "#FAFAFA",
          _dark: "#161617",
        },
        teritary: {
          default: "#F4F4F5",
          _dark: "#1B1B1D",
        },
      },
      inverted: {
        primary: {
          default: "#131314",
          _dark: "#FEFEFF",
        },
        secondary: {
          default: "#161617",
          _dark: "#FAFAFA",
        },
        teritary: {
          default: "#1B1B1D",
          _dark: "#F4F4F5",
        },
      },
    },
    interaction: {
      // default is based on #202128, dark is based on #F4F4F5
      hover: {
        default: "rgba(32, 33, 40, 0.08)",
        _dark: "rgba(244, 244, 245, 0.08)",
      },
      focused: {
        default: "rgba(32, 33, 40, 0.12)",
        _dark: "rgba(244, 244, 245, 0.12)",
      },
      pressed: {
        default: "rgba(32, 33, 40, 0.16)",
        _dark: "rgba(244, 244, 245, 0.16)",
      },
    },
    translucent: {
      primary: {
        default: "rgba(73, 79, 122, 0.16)",
        _dark: "rgba(121, 123, 138, 0.24)",
      },
      secondary: {
        default: "rgba(73, 79, 122, 0.08)",
        _dark: "rgba(121, 123, 138, 0.18)",
      },
      teritary: {
        default: "rgba(73, 79, 122, 0.06)",
        _dark: "rgba(121, 123, 138, 0.16)",
      },
      interactive: {
        default: "rgba(254, 254, 255, 0.96)",
        _dark: "rgba(254, 254, 255, 0.12)",
      },
    },
  },
  core: {
    brand: {
      // based on #E83C77
      primary: {
        default: "rgba(232, 60, 119, 1)",
        _dark: "rgba(232, 60, 119, 1)",
      },
      secondary: {
        default: "rgba(232, 60, 119, 0.5)",
        _dark: "rgba(232, 60, 119, 0.5)",
      },
      teritary: {
        default: "rgba(232, 60, 119, 0.1)",
        _dark: "rgba(232, 60, 119, 0.1)",
      },
    },
    status: {
      positive: {
        // same with solid green
        default: "#32CC58",
        _dark: "#32CC58",
      },
      warning: {
        // same with solid yellow
        default: "#F5C905",
        _dark: "#F5C905",
      },
      negative: {
        // same with solid red
        default: "#FF4035",
        _dark: "#FF4035",
      },
      translucent: {
        positive: {
          // same with trascluent green
          default: "rgba(50, 204, 88, 0.1)",
          _dark: "rgba(50, 204, 88, 0.2)",
        },
        warning: {
          // same with trascluent yellow
          default: "rgba(245, 201, 5, 0.1)",
          _dark: "rgba(245, 201, 5, 0.2)",
        },
        negative: {
          // same with trascluent red
          default: "rgba(255, 64, 53, 0.1)",
          _dark: "rgba(255, 64, 53, 0.2)",
        },
      },
    },
  },
  calendar: {
    exam: {
      default: "#5B59DE",
      _dark: "#5B59DE",
    },
    home: {
      default: "#32CC58",
      _dark: "#32CC58",
    },
    vacation: {
      default: "#057FFF",
      _dark: "#057FFF",
    },
    event: {
      default: "#F5C905",
      _dark: "#F5C905",
    },
    stay: {
      default: "#FF4035",
      _dark: "#FF4035",
    },
  },
};

export default colors;
