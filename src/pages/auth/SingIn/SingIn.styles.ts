export const useStyles = () => {
  return {
    singIn: {
      boxShadow: 2,
      border: "0.5px solid #8E0303",
      borderRadius: "15px",
      px: 4,
      py: 6,
      marginTop: 8,
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
    },
    title: {
      fontFamily: "HelveticaNeueCyr, sans-serif",
      fontSize: "26px",
    },
    content: {
      mt: 1,
    },
    button: {
      mt: 3,
      mb: 2,
      backgroundColor: "rgb(44, 57, 124)",
      "&:hover": {
        background: "lighten(rgb(44, 57, 124), 5%)",
      },
      fontSize: "18px",
    },
  };
};
