import "react";

declare module "react" {
  interface InputHTMLAttributes {
    webkitdirectory?: boolean;
  }
}
