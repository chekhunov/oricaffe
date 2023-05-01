import React from "react";

import { Typography, TypographyProps } from "@mui/material";

type ResponsiveSize = "xs" | "sm" | "md" | "lg" | "xl";

interface TextProps {
  component?: React.ElementType;
  size: Partial<Record<ResponsiveSize, TypographyProps["variant"]>>;
  lineClamp?: string;
}

const Text: React.FC<TextProps & TypographyProps> = ({
  size,
  children,
  lineClamp,
  sx,
  ...rest
}) => {

  return (
    <Typography
      sx={{
        ...(lineClamp && {
          display: "-webkit-box",
          textOverflow: "ellipsis",
          overflow: "hidden",
          "-webkit-line-clamp": lineClamp,
          "-webkit-box-orient": "vertical",
          wordBreak: "break-all",
        }),
        ...sx,
      }}
      {...rest}
    >
      {children}
    </Typography>
  );
};

export default Text;
