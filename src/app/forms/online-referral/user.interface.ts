// Describe User Model
export interface User {
    // Patient Information
    strPatient_Name: string;
    strPatient_Address: string;
    strPatient_Phone: string;

    // Referred By
    strReferredBy_Name: string;
    strReferredBy_Phone: string;
    strReferredBy_Date: string;
    strReferredBy_Fax: string;
    isReferredBy_Exam: boolean;
    isReferredBy_2ndOption: boolean;
    isReferredBy_SendReport: boolean;
    isReferredBy_CallMe: boolean;

    // Screening Form
    isHeadaches: boolean;
    isSnoring: boolean;
    isRestless: boolean;
    isCPAP: boolean;
    isDrowsiness: boolean;
    isAttentionDeficit: boolean;
    isEaraches: boolean;
    isNeckShoulderPain: boolean;
    isDizziness: boolean;
    isClickingTMJ: boolean;
    isLimitedMouth: boolean;
    isLockingJaw: boolean;
    isFacialTeethPain: boolean;
    isDifficultySwallowing: boolean;


    // Google reCaptcha
    googleResponse: string;
} // User