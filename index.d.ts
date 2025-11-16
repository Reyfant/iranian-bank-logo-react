declare module "iranian-bank-logo-react" {
    import * as React from "react";

    export interface IranianBankProps {
        name: "ir-blu" | "ir-day" | "ir-eghtesad-novin" | "ir-gardeshgari" | "ir-iranzamin" | "ir-karafarin" | "ir-keshavarzi" | "ir-markazi" | "ir-maskan" | "ir-mehr" | "ir-mellat" | "ir-melli" | "ir-parsian" | "ir-pasargad" | "ir-post-bank" | "ir-refah" | "ir-resalat" | "ir-saderat" | "ir-saman" | "ir-sanat-madan" | "ir-sepah" | "ir-shahr" | "ir-sina" | "ir-tejarat" | "ir-tose-taawon" | "unknown" | string | null;
        size?: number;
        [key: string]: any;
    }

    export const IranianBank: React.FC<IranianBankProps>;
}
