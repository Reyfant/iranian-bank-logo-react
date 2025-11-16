declare module "iranian-bank-logo-react" {
    import * as React from "react";

    export interface IranianBankProps {
        name: string;
        size?: number;
        [key: string]: any;
    }

    export const IranianBank: React.FC<IranianBankProps>;
}