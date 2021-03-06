﻿export const STORE_HARVESTINGS_STARTED = "STORE_HARVESTINGS_STARTED";
export const STORE_HARVESTINGS_COMPLETED = "STORE_HARVESTINGS_COMPLETED";
export const STORE_HARVESTINGS_FAILED = "STORE_HARVESTINGS_FAILED";

export const GET_HARVESTINGS_STARTED = "GET_HARVESTINGS_STARTED";
export const GET_HARVESTINGS_COMPLETED = "GET_HARVESTINGS_COMPLETED";
export const GET_HARVESTINGS_FAILED = "GET_HARVESTINGS_FAILED";

//export const UPDATE_HARVESTINGS_STARTED = "UPDATE_HARVESTINGS_STARTED";
//export const UPDATE_HARVESTINGS_COMPLETED = "UPDATE_HARVESTINGS_COMPLETED";
//export const UPDATE_HARVESTINGS_FAILED = "UPDATE_HARVESTINGS_FAILED";

export const DELETE_HARVESTINGS_STARTED = "DELETE_HARVESTINGS_STARTED";
export const DELETE_HARVESTINGS_COMPLETED = "DELETE_HARVESTINGS_COMPLETED";
export const DELETE_HARVESTINGS_FAILED = "DELETE_HARVESTINGS_FAILED";

export const GET_HARVESTINGSBYID_STARTED = "GET_HARVESTINGSBYID_STARTED";
export const GET_HARVESTINGSBYID_COMPLETED = "GET_HARVESTINGSBYID_COMPLETED";
export const GET_HARVESTINGSBYID_FAILED = "GET_HARVESTINGSBYID_FAILED";

export const storeHarvestData = (harvestInput: any) => {
  return {
    type: STORE_HARVESTINGS_STARTED,    
    input: harvestInput
  };
};

export const getHarvestList = () => {
  return {
    type: GET_HARVESTINGS_STARTED,
  };
};

export const getHarvestById = (id: any) => {
  return {
    type: GET_HARVESTINGSBYID_STARTED,
    id: id
  };
};

export const deleteHarvest = (id: any) => {
  return {
    type: DELETE_HARVESTINGS_STARTED,
    id: id
  };
};