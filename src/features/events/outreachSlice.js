import { OUTREACH } from "../../app/shared/OUTREACH";

export const selectAllOutreach = () => {
    return OUTREACH;
};

export const selectOutreachById = (id) => {
    return OUTREACH.find((outreach) => outreach.id === id);
};
