import OUTREACH from '../../app/shared/outreach.js';

export const selectAllOutreach = () => {
    return OUTREACH;
};

export const selectRandomOutreach = () => {
    return OUTREACH[Math.floor(OUTREACH.length * Math.random())];
};