declare module "iranian-bank-logo-react" {
    import * as React from "react";


    export interface IranianBankProps {
        name: "ir-blu" | "...";
        size?: number;
        [key: string]: any;
    }

    export const IranianBank: React.FC<IranianBankProps>;
}